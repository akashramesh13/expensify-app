import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./store/expensesSlice";
import { login, logout } from "./store/authSlice";
import { auth, onAuthStateChanged } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage/LoadingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    root.render(jsx);
    hasRendered = true;
  }
};

root.render(<LoadingPage />);

// Dynamic favicon based on OS theme
const updateFavicon = () => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const accentColor = isDark ? "#f5a97f" : "#ea580c";
  const bgColor = isDark ? "#141414" : "#fafafa";
  const textColor = isDark ? "#ffffff" : "#111111";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <rect width="100" height="100" rx="24" fill="${bgColor}" />
  <text x="50" y="68" font-family="monospace,system-ui" font-size="46" font-weight="900" fill="${textColor}" text-anchor="middle" letter-spacing="-2">
    <tspan fill="${accentColor}">&lt;</tspan>E<tspan fill="${accentColor}">/&gt;</tspan>
  </text>
</svg>`;

  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = url;
};

updateFavicon();
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", updateFavicon);

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
    });
  } else {
    store.dispatch(logout());
    renderApp();
  }
});
