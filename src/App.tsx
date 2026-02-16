import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbar__inner">
          <div className="brand">
            <div className="brand__logo">A</div>
            <div>
              <div className="brand__name">Alex — Assignment 02</div>
              <div className="brand__tag">Vite + React + TS · Static Web</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#preview">Preview</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Aplicación web estática lista para desplegar en AWS CloudFront</h1>
          <p>
            Esta app es un ejemplo simple con interfaz agradable. Se construye con Vite y se
            publica como archivos estáticos (dist/) en S3 + CloudFront.
          </p>

          <div className="hero__cta">
            <a className="btn primary" href="#preview">Ver sección</a>
            <a className="btn" href="#features">Qué incluye</a>
          </div>

          <div className="hero__stats">
            <div className="card">
              <div className="card__title">Build</div>
              <div className="card__value">dist/</div>
              <div className="card__hint">Salida de Vite para despliegue</div>
            </div>
            <div className="card">
              <div className="card__title">CDN</div>
              <div className="card__value">CloudFront</div>
              <div className="card__hint">URL pública para acceso</div>
            </div>
            <div className="card">
              <div className="card__title">Pipeline</div>
              <div className="card__value">GitHub Actions</div>
              <div className="card__hint">Build → Upload → Invalidate</div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <h2>Características</h2>
          <div className="grid">
            <div className="tile">
              <h3>Interfaz estática</h3>
              <p>Diseño limpio con tarjetas y secciones. No requiere backend.</p>
            </div>
            <div className="tile">
              <h3>Deploy automático</h3>
              <p>Al hacer push a <b>assignment-02</b> se construye y se publica.</p>
            </div>
            <div className="tile">
              <h3>Caché actualizada</h3>
              <p>Se invalida CloudFront para ver cambios inmediatamente.</p>
            </div>
          </div>
        </section>

        <section id="preview" className="section">
          <h2>Vista previa</h2>
          <div className="panel">
            <div>
              <h3>Checklist</h3>
              <ul>
                <li>✅ Vite (React + TS)</li>
                <li>✅ Build genera <code>dist/</code></li>
                <li>✅ S3 + CloudFront</li>
                <li>✅ Doppler → GitHub Secrets</li>
                <li>✅ GitHub Actions pipeline</li>
              </ul>
            </div>
            <div className="badge">
              <div className="badge__top">Status</div>
              <div className="badge__big">Ready</div>
              <div className="badge__small">Static + CDN</div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p className="muted">
            Proyecto académico para desplegar una app estática usando CDN en AWS.
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} · Assignment 02</span>
          <span className="muted">Vite · React · TypeScript</span>
        </div>
      </footer>
    </div>
  );
}
