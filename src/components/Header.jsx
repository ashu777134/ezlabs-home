import React from "react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">EZ Labs</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </div>
    </header>
  );
}
