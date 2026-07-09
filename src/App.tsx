import './App.css'

const features = [
  {
    title: 'Launch clarity',
    body: 'Keep product positioning, proof points, and launch tasks in one crisp operating view.',
  },
  {
    title: 'Fast iteration',
    body: 'Adjust the message, test new sections, and ship updates without turning the page into an app.',
  },
  {
    title: 'Conversion-ready',
    body: 'Start with a focused story, clear calls to action, and room for analytics or forms later.',
  },
]

function App() {
  return (
    <main className="app">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Apulza home">
          <span className="brand-mark">A</span>
          Apulza
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="mailto:hello@example.com">Contact</a>
          <a className="button secondary" href="#waitlist">
            Join waitlist
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Product marketing, simplified</p>
          <h1>Turn product momentum into a page that sells.</h1>
          <p>
            Apulza helps teams shape a sharper launch story, explain the value
            fast, and guide visitors toward the next step.
          </p>
          <div className="actions" id="waitlist">
            <a className="button" href="mailto:hello@example.com">
              Start a conversation
            </a>
            <a className="button secondary" href="#features">
              See the approach
            </a>
          </div>

          <div className="metric-row" aria-label="Product highlights">
            <div className="metric">
              <strong>1 page</strong>
              <span>Focused marketing flow</span>
            </div>
            <div className="metric">
              <strong>Fast</strong>
              <span>Static, lightweight build</span>
            </div>
            <div className="metric">
              <strong>SEO</strong>
              <span>Ready for discovery</span>
            </div>
          </div>
        </div>

        <aside className="product-panel" aria-label="Apulza workflow preview">
          <div className="panel-top" aria-hidden="true">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="panel-body">
            <div className="status-line">
              <strong>Launch page workflow</strong>
              <span className="pill">On track</span>
            </div>
            <div className="workflow">
              <article className="task">
                <span className="task-icon">1</span>
                <div>
                  <h2>Position the product</h2>
                  <p>Clarify the promise, audience, and main conversion goal.</p>
                </div>
              </article>
              <article className="task">
                <span className="task-icon">2</span>
                <div>
                  <h2>Build trust quickly</h2>
                  <p>Use benefits, proof, and visual detail without clutter.</p>
                </div>
              </article>
              <article className="task">
                <span className="task-icon">3</span>
                <div>
                  <h2>Guide the next step</h2>
                  <p>Make the call to action obvious from top to bottom.</p>
                </div>
              </article>
            </div>
          </div>
        </aside>
      </section>

      <section className="features" id="features" aria-label="Features">
        {features.map((feature) => (
          <article className="feature" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
