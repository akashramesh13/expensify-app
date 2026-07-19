import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
  const startLogout = () => {
    return signOut(auth);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <Link className="header__logo" to="/dashboard">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="36" height="36">
              <rect width="100" height="100" rx="24" fill="var(--bg-elevated)" />
              <text x="50" y="68" fontFamily="monospace, system-ui" fontSize="46" fontWeight="900" fill="var(--text-main)" textAnchor="middle" letterSpacing="-2">
                <tspan fill="var(--accent)">&lt;</tspan>E<tspan fill="var(--accent)">/&gt;</tspan>
              </text>
            </svg>
            <span className="show-for-desktop">Expensify</span>
          </Link>
          <div className="header__actions">
            <ThemeToggle />
            <button className="button button--link" onClick={startLogout}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span className="show-for-desktop">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
