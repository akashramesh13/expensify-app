import React, { useState } from "react";
import './LoginPage.scss';
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../firebase/firebase";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startLogin = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleAuthProvider).catch((error) => {
      console.error("Login failed:", error);
      setIsLoading(false);
    });
  };

  return (
    <div className="login">
      <div className="login__card">
        <div className="login__logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="64" height="64">
            <rect width="100" height="100" rx="24" fill="var(--bg-elevated)" />
            <text x="50" y="68" fontFamily="monospace, system-ui" fontSize="46" fontWeight="900" fill="var(--text-main)" textAnchor="middle" letterSpacing="-2">
              <tspan fill="var(--accent)">&lt;</tspan>E<tspan fill="var(--accent)">/&gt;</tspan>
            </text>
          </svg>
        </div>
        <h1 className="login__title">Expensify</h1>
        <p className="login__tagline">Track your expenses effortlessly</p>
        <button className="login__google-btn" onClick={startLogin} disabled={isLoading}>
          {isLoading ? (
            <div className="loader__spinner" style={{ width: '20px', height: '20px', borderWidth: '2px' }}></div>
          ) : (
            <>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span>Continue with Google</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
