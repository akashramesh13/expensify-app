import React, { useEffect, useState } from "react";

const themes = ["theme-system", "theme-light", "theme-terminal", "theme-catppuccin"];

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("expensify-theme") || "theme-system"
  );

  const getSystemTheme = () => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "theme-terminal" : "theme-light";
  };

  const applyTheme = (themeName, saveToStorage = false) => {
    const cssTheme = themeName === "theme-system" ? getSystemTheme() : themeName;
    const body = document.body;

    body.classList.remove("theme-light", "theme-terminal", "theme-catppuccin");
    body.classList.add(cssTheme);

    if (saveToStorage) {
      localStorage.setItem("expensify-theme", themeName);
    } else {
      localStorage.removeItem("expensify-theme");
    }

    updateFavicon(cssTheme);
  };

  const updateFavicon = (themeName) => {
    let accentColor = "#f5a97f";
    let bgColor = "#141414";
    let textColor = "#ffffff";

    if (themeName === "theme-light") {
      accentColor = "#ea580c";
      bgColor = "#ffffff";
      textColor = "#111111";
    } else if (themeName === "theme-terminal") {
      accentColor = "#22c55e";
      bgColor = "#0a0a0a";
      textColor = "#ffffff";
    } else if (themeName === "theme-catppuccin") {
      accentColor = "#f5a97f";
      bgColor = "#24273a";
      textColor = "#cad3f5";
    }

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="24" fill="${bgColor}" /><text x="50" y="68" font-family="monospace, system-ui, -apple-system, sans-serif" font-size="46" font-weight="900" fill="${textColor}" text-anchor="middle" letter-spacing="-2"><tspan fill="${accentColor}">&lt;</tspan>E<tspan fill="${accentColor}">/&gt;</tspan></text></svg>`;

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

  useEffect(() => {
    applyTheme(currentTheme, currentTheme !== "theme-system");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (currentTheme === "theme-system") {
        applyTheme("theme-system", false);
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [currentTheme]);

  const handleToggle = () => {
    let currentIndex = themes.indexOf(currentTheme);
    let nextIndex = (currentIndex + 1) % themes.length;
    
    // Smart skip logic if system matches the next theme
    if (currentTheme === "theme-system") {
      const systemResolved = getSystemTheme();
      if (themes[nextIndex] === systemResolved) {
        nextIndex = (nextIndex + 1) % themes.length;
      }
    }
    
    setCurrentTheme(themes[nextIndex]);
  };

  return (
    <button
      className="button button--link theme-toggle"
      onClick={handleToggle}
      title="Toggle Theme"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "36px",
        height: "36px",
        padding: "0"
      }}
    >
      {currentTheme === "theme-system" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      )}
      {currentTheme === "theme-light" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      )}
      {currentTheme === "theme-terminal" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      )}
      {currentTheme === "theme-catppuccin" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.43-2.4 1-3.44 0 0-1.82-6.42-.42-7 1.39-.58 4.64.27 6.42 2.26.65-.17 1.33-.26 2-.26z"></path>
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
