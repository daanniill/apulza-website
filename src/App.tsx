import './App.css'

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Approach', href: '#approach' },
  { label: 'For schools', href: '#schools' },
]

const trustPoints = [
  'No streaks to lose',
  'Picks up where you left off',
  'Adapts to your day',
  'Private & calm',
]

const assumptions = [
  "You'll remember where you left off.",
  "You'll push through when it's hard.",
  'A broken streak will motivate you.',
]

const steps = [
  {
    title: 'Tell it what you are studying',
    body: 'Add a course, a chapter, or just the thing you need to face next.',
    action: 'Open your course',
  },
  {
    title: 'Get one next small step',
    body: 'Apulza breaks the work down until it feels possible to begin.',
    action: 'Start today',
  },
  {
    title: 'Come back whenever',
    body: 'Your place, notes, and next step are restored when you return.',
    action: 'Pick up again',
  },
]

const dashboardRows = [
  { title: 'Read pages 21-26', meta: '12 minutes', tone: 'primary' },
  { title: 'Practice quiz', meta: '8 minutes', tone: 'mint' },
  { title: 'Restate 4 definitions', meta: 'Optional', tone: 'warm' },
]

const dashboardBenefits = [
  'Opens on where you left off - scroll, notes and next step restored.',
  "Today's focus is short by design. Half of it still counts.",
  'Progress is reframed as encouragement, never a scoreboard.',
]

const qualities = [
  {
    title: 'Nothing to lose',
    body: 'No streaks, leaderboards, or shame loops. If the week went sideways, you can still come back.',
  },
  {
    title: 'High schoolers get a soft lift',
    body: 'Each session starts small, names the next action, and keeps the interface quiet.',
  },
  {
    title: 'Adapts to your day',
    body: 'Density, color, and input controls help Apulza meet the student who showed up today.',
  },
  {
    title: 'Built for schools',
    body: 'Evidence-informed, accessible, and private enough to support students between sessions.',
  },
  {
    title: 'State is remembered',
    body: 'Apulza restores context because remembering the system should not become more work.',
  },
  {
    title: 'Gentle by default',
    body: 'No noisy pressure, no panic language, and no interface that treats struggle as failure.',
  },
]

const schoolPoints = [
  'No streaks or leaderboards - nothing that shames a student who is struggling.',
  'Accessible by default: strong contrast, 44px touch targets, motion always optional.',
  'Private and calm - a companion between sessions, not a surveillance tool.',
  'Adapts to a wide range of needs, one student at a time.',
]

const clearPrinciples = [
  { letter: 'C', title: 'Cognitive load', body: 'Only what the step needs. One primary action.' },
  { letter: 'L', title: 'Low re-entry', body: 'Restore state and surface the likely next action.' },
  { letter: 'E', title: 'Emotional safety', body: 'Compassionate, never blaming. Celebrate partial progress.' },
  { letter: 'A', title: 'Adaptive', body: 'Density, theme, and input controls for every brain.' },
  { letter: 'R', title: 'Reliable memory', body: 'Externalise time and autosave. Assume nothing is remembered.' },
]

const quotes = [
  {
    body: "It's the first study app that doesn't make me feel behind the second I open it.",
    source: 'Student voice',
  },
  {
    body: 'My students actually come back to it. It meets them where they are instead of wagging a finger.',
    source: 'School counsellor',
  },
  {
    body: 'The plan is tiny enough to be real and clear enough to start.',
    source: 'Parent advocate',
  },
]

const faqs = [
  {
    question: 'Is Apulza free?',
    answer:
      "Yes - it is free to start, with no card required. You can use the core study companion for as long as you like.",
  },
  {
    question: 'Is it only for students with ADHD?',
    answer:
      'No. Apulza is designed around ADHD, anxiety, and low-energy days, but any student can use it when study feels heavy.',
  },
  {
    question: 'Will it nag me?',
    answer:
      'No. Apulza uses gentle reminders and clear next steps, not pressure loops or streak anxiety.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Privacy is part of the product promise. Apulza is a companion for the student, not a surveillance tool.',
  },
  {
    question: 'Can my school use it?',
    answer:
      'Yes. Schools and counsellors can talk with us about supporting students between sessions.',
  },
  {
    question: 'What if I fall behind?',
    answer:
      'Apulza always lets you start from where you are. No perfect reset, no guilt trip, just the next possible step.',
  },
]

function Brand() {
  return (
    <a className="brand" href="/" aria-label="Apulza home">
      <span className="brand-mark" aria-hidden="true">
        A
      </span>
      <span>Apulza</span>
    </a>
  )
}

function App() {
  return (
    <main className="app">
      <header className="site-header">
        <Brand />
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a className="button compact" href="#start">
            Start free
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="foldscape" aria-hidden="true">
          <span className="fold fold-one" />
          <span className="fold fold-two" />
          <span className="fold fold-three" />
          <span className="fold fold-four" />
        </div>
        <div className="hero-inner">
          <p className="eyebrow">A supportive study buddy</p>
          <h1>A calm place to keep going.</h1>
          <p className="hero-lede">
            Apulza is a study companion for students who carry ADHD, anxiety, or low days. No
            streaks to lose, no pressure to perform - just the next small step, whenever you're
            ready.
          </p>
          <div className="hero-actions">
            <a className="button" href="#start">
              Start free
            </a>
            <a className="button ghost" href="#how-it-works">
              See how it works
            </a>
          </div>
          <p className="free-note">Free to start - nothing to lose</p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Product promises">
        {trustPoints.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </section>

      <section className="section split-section why-section" id="approach">
        <div>
          <p className="eyebrow">Why Apulza</p>
          <h2>Most study tools assume you're not overwhelmed.</h2>
        </div>
        <div className="copy-stack">
          <p>
            They're built for a calm, consistent, well-rested student - one who never loses their
            place and pushes through when it's hard.
          </p>
          <p>
            That's not always who shows up, especially with ADHD, anxiety, or depression in the
            picture.
          </p>
          <div className="assumption-card">
            <strong>The usual assumptions</strong>
            {assumptions.map((assumption) => (
              <span key={assumption}>{assumption}</span>
            ))}
          </div>
          <p className="standout">
            We don't build for any of that. We build for the day you're actually having.
          </p>
        </div>
      </section>

      <section className="section centered" id="how-it-works">
        <p className="eyebrow">How it works</p>
        <h2>Three small steps. That's the whole thing.</h2>
        <p className="section-lede">
          No setup marathon, no productivity system to learn. Start where you are.
        </p>
        <div className="step-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span className="number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <span className="card-action">{step.action}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section dashboard-section">
        <div className="dashboard-copy">
          <p className="eyebrow">The dashboard</p>
          <h2>It always shows the next small step.</h2>
          <p>
            Open Apulza and there's no blank page, no wall of overdue tasks. Just where you left
            off, a short plan for today, and gentle proof that you're moving.
          </p>
          <ul className="check-list">
            {dashboardBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <aside className="dashboard-preview" aria-label="Dashboard preview">
          <div className="preview-top">
            <span />
            <span />
            <span />
          </div>
          <div className="preview-body">
            <p className="preview-label">Today's focus</p>
            <h3>Read Ch. 4 - Memory & Attention</h3>
            <button type="button">Continue</button>
            <div className="progress">
              <span style={{ width: '58%' }} />
            </div>
            <div className="dashboard-list">
              {dashboardRows.map((row) => (
                <div className={`dashboard-row ${row.tone}`} key={row.title}>
                  <span />
                  <strong>{row.title}</strong>
                  <em>{row.meta}</em>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="section centered">
        <p className="eyebrow">What makes it different</p>
        <h2>Designed to reduce load, not add to it.</h2>
        <p className="section-lede">
          Every feature answers to one rule: protect the student's attention and their feelings.
        </p>
        <div className="quality-grid">
          {qualities.map((quality) => (
            <article className="quality-card" key={quality.title}>
              <span aria-hidden="true" />
              <h3>{quality.title}</h3>
              <p>{quality.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section school-section" id="schools">
        <div className="school-card">
          <div className="school-copy">
            <p className="eyebrow">For schools & counsellors</p>
            <h2>Support that works alongside you.</h2>
            <p>
              Apulza gives students a steady place to keep going between sessions - built on
              evidence-informed, shame-free principles you can stand behind.
            </p>
            <ul className="check-list">
              {schoolPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a className="button" href="mailto:hello@apulza.com">
              Talk to us about your school
            </a>
          </div>
          <div className="sunset-panel" aria-hidden="true">
            <span className="sun" />
            <span className="wave wave-one" />
            <span className="wave wave-two" />
            <span className="wave wave-three" />
            <span className="wave wave-four" />
          </div>
        </div>
      </section>

      <section className="clear-band">
        <div className="section clear-inner">
          <p className="eyebrow">Our foundation</p>
          <h2>Everything is built on CLEAR.</h2>
          <p className="section-lede">
            Five principles act as the acceptance test for every screen. A feature isn't finished
            until it satisfies all five.
          </p>
          <div className="clear-grid" aria-label="CLEAR principles">
            {clearPrinciples.map((principle) => (
              <article className="clear-card" key={principle.letter}>
                <span>{principle.letter}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
          <a className="text-link" href="#approach">
            Read the full design language
          </a>
        </div>
      </section>

      <section className="section centered">
        <p className="eyebrow">In their words</p>
        <h2>The feeling we're going for.</h2>
        <p className="section-lede">Illustrative - replace with real student and counsellor voices.</p>
        <div className="quote-grid">
          {quotes.map((quote) => (
            <figure className="quote-card" key={quote.source}>
              <blockquote>{quote.body}</blockquote>
              <figcaption>{quote.source}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <p className="eyebrow">Questions</p>
        <h2>The things people ask first.</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="closing" id="start">
        <div className="closing-inner">
          <p className="eyebrow">Start free</p>
          <h2>Start where you are.</h2>
          <p>
            No streak to keep, no perfect moment to wait for. Open Apulza and take one small step -
            that's more than enough.
          </p>
          <div className="hero-actions">
            <a className="button" href="mailto:hello@apulza.com">
              Start free
            </a>
            <a className="button ghost" href="#how-it-works">
              See how it works
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <Brand />
          <p>A supportive study buddy. Built to reduce load, protect feeling, and always show the next small step.</p>
        </div>
        <div className="footer-columns" aria-label="Footer navigation">
          <div>
            <strong>Product</strong>
            <a href="#how-it-works">How it works</a>
            <a href="#approach">Features</a>
            <a href="#schools">For schools</a>
          </div>
          <div>
            <strong>Company</strong>
            <a href="#approach">Our approach</a>
            <a href="#approach">Manifesto</a>
            <a href="mailto:hello@apulza.com">Contact</a>
          </div>
          <div>
            <strong>Resources</strong>
            <a href="#approach">Design language</a>
            <a href="#top">Dashboard</a>
            <a href="#start">FAQ</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Apulza - Built on CLEAR</span>
          <span>Made for the day you're actually having.</span>
        </div>
      </footer>
    </main>
  )
}

export default App
