import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="topline">
      <a className="wordmark" href="#top">
        F / O<span className="green-dot">●</span>
      </a>
      <span className="top-note">
        INDEPENDENT DEVELOPER <span className="slash">/</span>NG
      </span>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "CLOSE −" : "MENU +"}
      </button>
      <nav className={menuOpen ? "nav open" : "nav"}>
        <a href="#work" onClick={() => setMenuOpen(false)}>
          WORK <sup>05</sup>
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          ABOUT
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          SAY HELLO ↗
        </a>
      </nav>
    </div>
  );
}
