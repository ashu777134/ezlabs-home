import React from "react";
import Header from "./components/Header";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-inner">
            <h1>EZ Labs — Build smarter, faster</h1>
            <p>Create faster prototypes and ship with confidence.</p>
            <a className="cta" href="#contact">Get in touch</a>
          </div>
          <div className="hero-visual" aria-hidden="true" />
        </section>

        <ContactSection />
      </main>

      <footer className="site-footer">
        <div>© {new Date().getFullYear()} EZ Labs — Demo assignment</div>
      </footer>
    </div>
  );
}
