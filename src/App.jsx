import React from 'react'
import './App.css'

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-dot" />
            <span>Nautilus‑JS</span>
          </div>
          <nav className="nav">
            <a href="#problem">Problem</a>
            <a href="#journey">Journey</a>
            <a href="#solution">Solution</a>
            <a href="#future">Vision</a>
            <a href="#cta">Sponsor</a>
          </nav>
        </div>
      </header>
      <section className="section hero">
        <div className="container">
          <h1 className="title">Nautilus‑JS: Unlock Sui TEE Apps for Everyone</h1>
          <p className="subtitle">From Rust’s deep waters to JavaScript’s fast lanes — a hackathon journey to make verifiable TEE apps on Sui simple and efficient.</p>
          <div className="cta">
            <a href="#journey" className="btn primary">Start Exploring</a>
          </div>
        </div>
      </section>

      <section id="problem" className="section problem">
        <div className="container">
          <h2 className="section-title">The Hidden Storm in Sui</h2>
          <p className="section-desc">TEE verifiable apps should be the treasure of privacy computing, yet high barriers, slow iteration, and scarce talent keep ideas from shipping.</p>
          <ul className="bullets">
            <li>Steep learning curve: Rust excludes many web developers.</li>
            <li>Deployment bottlenecks: long cycles from prototype to production.</li>
            <li>Ecosystem impact: few TEE apps; Sui’s privacy potential underused.</li>
          </ul>
        </div>
      </section>

      <section id="journey" className="section journey">
        <div className="container">
          <h2 className="section-title">From Rust to JS — A Bold Pivot</h2>
          <p className="section-desc">In this hackathon, I rebuilt the nautilus-server in JavaScript, keeping TEE verifiability while making development friendlier and more agile.</p>
          <ul className="bullets">
            <li>Refactor win: migrate the original Rust server to a JS implementation.</li>
            <li>Innovation highlights: modular design, rapid prototyping, far less boilerplate and cognitive load.</li>
            <li>Hackathon focus: the latest commit shows a full path from concept to a working prototype.</li>
          </ul>
        </div>
      </section>

      <section id="solution" className="section solution">
        <div className="container">
          <h2 className="section-title">Nautilus‑JS: Your TEE Navigation Guide</h2>
          <p className="section-desc">Like an advanced submarine, it brings developers into Sui’s TEE world — without heavy gear. A JS‑powered service framework that makes building verifiable apps intuitive and fast.</p>
          <ul className="bullets">
            <li>Simplified development: JS‑first interfaces; no systems programming background required.</li>
            <li>Security and speed: keep verifiability while accelerating iteration and deployment.</li>
            <li>Community impact: lower barriers drive more privacy apps in the Sui ecosystem.</li>
          </ul>
        </div>
      </section>

      <section id="future" className="section future">
        <div className="container">
          <h2 className="section-title">The Voyage Has Just Begun</h2>
          <p className="section-desc">I will expand the Nautilus ecosystem with a Python template and more language support — a multi‑language, low‑barrier framework for Sui TEE apps.</p>
          <ul className="bullets">
            <li>Coming next: Python template for data science and AI developers.</li>
            <li>Expansion: more Sui capabilities and cross‑chain verification.</li>
            <li>Long‑term vision: an open‑source community reducing blockchain barriers.</li>
          </ul>
        </div>
      </section>

      <section id="cta" className="section cta">
        <div className="container">
          <h2 className="section-title">Join the Nautilus Journey</h2>
          <p className="section-desc">Sponsorship will accelerate the Python template and ecosystem build‑out — bringing more verifiable apps to Sui. Let’s push privacy computing into the mainstream.</p>
          <div className="cta">
            <a href="https://suivision.xyz/account/0x42ebe17a32756d7a73d003290b8894ca6e393bf45221af8b643ede72e85964e7" target="_blank" rel="noopener" className="btn primary">Sponsor Project</a>
            <a href="mailto:euraxluo@gmail.com" className="btn secondary">Contact Me</a>
            <a href="http://54.81.8.36:3000/openapi" target="_blank" rel="noopener" className="btn tertiary">See Demo</a>
          </div>
        </div>
      </section>
      <footer className="footer">© Nautilus‑JS · Verifiable TEE Apps on Sui</footer>
    </div>
  )
}

export default App
