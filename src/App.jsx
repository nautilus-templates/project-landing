import React from 'react'
import './App.css'

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <a className="brand" href="#home">
            <span className="brand-dot" />
            <span>Nautilus‑JS</span>
          </a>
          <nav className="nav">
            <a href="#product">Product</a>
            <a href="#features">Features</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#support">Support</a>
            <a href="https://github.com/nautilus-templates/nautilus-js" target="_blank" rel="noopener">GitHub</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="section hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-text">
                <h1 className="title">Build Verifiable TEE Apps on Sui — with JavaScript</h1>
                <p className="subtitle">Lower the barrier for web developers while preserving verifiability, security, and fast iteration.</p>
                <div className="cta">
                  <a href="#product" className="btn primary">Start Exploring</a>
                  <a href="https://github.com/nautilus-templates/nautilus-js" target="_blank" rel="noopener" className="btn secondary">GitHub</a>
                  <a href="http://54.81.8.36:3000/openapi" target="_blank" rel="noopener" className="btn secondary">Live Demo</a>
                </div>
              </div>
              <div className="hero-visual" aria-hidden="true">
                <span className="orb orb-1" />
                <span className="orb orb-2" />
                <span className="orb ring" />
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="section product">
          <div className="container">
            <h2 className="section-title">A Developer‑Friendly TEE Framework</h2>
            <p className="section-desc">Keep verifiability while using JS to build services — less boilerplate, more focus on real product work.</p>
            <ul className="list features">
              <li>
                <h4>JS‑first workflow</h4>
                <p>No systems programming background required.</p>
              </li>
              <li>
                <h4>Modular design</h4>
                <p>Cuts cognitive load and speeds prototyping.</p>
              </li>
              <li>
                <h4>Verifiable defaults</h4>
                <p>Security retained with TEE flows and sane defaults.</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="features" className="section features">
          <div className="container">
            <h2 className="section-title">Core Features</h2>
            <ul className="list features">
              <li>Service templates with unified interfaces and conventions.</li>
              <li>Minimal configuration; best practices out of the box.</li>
              <li>Front‑end and CI friendly; integrates with modern tooling.</li>
              <li>Observability hooks for better debugging and operations.</li>
            </ul>
          </div>
        </section>

        <section id="roadmap" className="section roadmap">
          <div className="container">
            <h2 className="section-title">Roadmap</h2>
            <ol className="timeline">
              <li>
                <span className="dot" />
                <div className="item-head"><span className="badge" /><h4>Python Template</h4></div>
                <p>Designed for data science and AI developers to lower the language barrier.</p>
              </li>
              <li>
                <span className="dot" />
                <div className="item-head"><span className="badge" /><h4>Golang Template</h4></div>
                <p>Optimized for systems and backend developers with verifiable TEE flows.</p>
              </li>
              <li>
                <span className="dot" />
                <div className="item-head"><span className="badge" /><h4>Java Template</h4></div>
                <p>Enterprise‑friendly template for JVM ecosystems with TEE verification.</p>
              </li>
              <li>
                <span className="dot" />
                <div className="item-head"><span className="badge" /><h4>More Production Use Cases</h4></div>
                <p>JS‑first abstractions unlock verifiable services in real products across verticals.</p>
              </li>
              <li>
                <span className="dot" />
                <div className="item-head"><span className="badge" /><h4>TEE Module as Tooling (Walrus‑like)</h4></div>
                <p>Package TEE flows as plug‑and‑play tooling, lowering setup time and complexity.</p>
              </li>
              <li>
                <span className="dot" />
                <div className="item-head"><span className="badge" /><h4>TEE as a Service</h4></div>
                <p>A hosted platform offering trusted data pipelines and verification support out of the box.</p>
              </li>
              <li>
                <span className="dot" />
                <div className="item-head"><span className="badge" /><h4>Expanded Sui Capabilities</h4></div>
                <p>Privacy and cross‑chain improvements, stronger verification and performance.</p>
              </li>
              <li>
                <span className="dot" />
                <div className="item-head"><span className="badge" /><h4>Community</h4></div>
                <p>Open‑source collaboration, shared templates and best practices to reduce blockchain barriers.</p>
              </li>
            </ol>
          </div>
        </section>

        <section id="support" className="section support">
          <div className="container">
            <h2 className="section-title">Support & Collaboration</h2>
            <p className="section-desc">As adoption grows, we will tool‑ify the TEE module (Walrus‑like) and evolve towards TEE as a Service — delivering trusted data and verification support for production use cases.</p>
            <div className="cta">
              <a href="https://suivision.xyz/account/0x42ebe17a32756d7a73d003290b8894ca6e393bf45221af8b643ede72e85964e7" target="_blank" rel="noopener" className="btn primary">Sponsor Project</a>
              <a href="mailto:euraxluo@gmail.com" className="btn secondary">Contact Me</a>
              <a href="http://54.81.8.36:3000/openapi" target="_blank" rel="noopener" className="btn tertiary">See Demo</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © Nautilus‑JS · Verifiable TEE Apps on Sui · <a href="https://github.com/nautilus-templates/nautilus-js" target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'underline' }}>GitHub</a>
      </footer>
    </div>
  )
}

export default App
