import { useState, type ReactNode } from 'react'
import './App.css'

type IconProps = {
  className?: string
  size?: number
}

const navItems = [
  { label: 'How it works', href: '#how' },
  { label: 'Approach', href: '#clear' },
  { label: 'For schools', href: '#schools' },
  { label: 'FAQ', href: '#faq' },
]

const trustPoints = [
  { label: 'No streaks to lose', icon: <IconHeart /> },
  { label: 'Picks up where you left off', icon: <IconBookmark /> },
  { label: 'Adapts to your day', icon: <IconSliders /> },
  { label: 'Private and calm', icon: <IconShield /> },
]

const assumptions = [
  "You'll remember where you left off.",
  "You'll push through when it's hard.",
  'A broken streak will motivate you.',
]

const steps = [
  {
    number: '1',
    title: "Tell it what you're studying",
    body: 'Add a course or drop in a task. A quick note is enough - it saves as you type.',
    demo: 'input',
  },
  {
    number: '2',
    title: 'Get one small next step',
    body: 'Apulza turns it into a short, doable plan. Never a wall of tasks, never a red badge.',
    demo: 'task',
  },
  {
    number: '3',
    title: 'Come back whenever',
    body: "It remembers your place, your progress, and what's next. There's no catching up.",
    demo: 'resume',
  },
] as const

const showcasePoints = [
  'Opens on where you left off - scroll, notes and next step restored.',
  "Today's focus is short by design. Half of it still counts.",
  'Progress is reframed as encouragement, never a scoreboard.',
]

const showcaseTasks = [
  {
    title: 'Essay outline draft',
    badge: 'Complete',
    tone: 'success',
    checked: true,
    struck: true,
    icon: <IconCheck size={12} />,
  },
  {
    title: 'Practice set 3.2',
    badge: 'Needs a look',
    tone: 'attention',
    checked: false,
    struck: false,
    icon: <IconClock size={12} />,
  },
  {
    title: 'Read Ch. 4 - Memory',
    badge: 'In plan',
    tone: 'primary',
    checked: false,
    struck: false,
    icon: <IconInfo size={12} />,
  },
]

const features = [
  {
    title: 'Nothing to lose',
    body: 'No streaks, no leaderboards, no shame. Miss a day and nothing breaks - you just pick back up.',
    tone: 'calm',
    icon: <IconHeart />,
  },
  {
    title: 'Right where you left off',
    body: 'Scroll position, half-typed notes, and your last step are restored every single time you return.',
    tone: 'primary',
    icon: <IconBookmark />,
  },
  {
    title: 'Adapts to your day',
    body: 'Light, dark, or low-stimulation. Comfortable or compact. Set it up for the brain you brought today.',
    tone: 'attention',
    icon: <IconSliders />,
  },
  {
    title: 'Kind by default',
    body: 'Every message is warm and instructional. "Needs attention," never "overdue." No guilt, ever.',
    tone: 'success',
    icon: <IconChat />,
  },
  {
    title: 'Time, externalized',
    body: "Deadlines and next steps live in context, so you don't have to hold them in your head to stay on track.",
    tone: 'primary',
    icon: <IconClock size={20} />,
  },
  {
    title: 'Calm by design',
    body: 'Soft motion, generous space, one clear action per screen - and every animation can be turned off.',
    tone: 'calm',
    icon: <IconSpark />,
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
  {
    letter: 'E',
    title: 'Emotional safety',
    body: 'Compassionate, never blaming. Celebrate partial progress.',
  },
  { letter: 'A', title: 'Adaptive', body: 'Density, theme, and input controls for every brain.' },
  {
    letter: 'R',
    title: 'Reliable memory',
    body: 'Externalize time and autosave. Assume nothing is remembered.',
  },
]

const quotes = [
  {
    text: "It's the first study app that doesn't make me feel behind the second I open it.",
    who: 'Second-year student',
    detail: 'Psychology',
    initials: 'S',
    tone: 'primary',
  },
  {
    text: 'My students actually come back to it. It meets them where they are instead of nagging.',
    who: 'School counselor',
    detail: 'Sixth-form college',
    initials: 'C',
    tone: 'calm',
  },
  {
    text: 'The low-stim mode is the only reason I can open anything at all on a bad day.',
    who: 'First-year student',
    detail: 'Diagnosed ADHD',
    initials: 'J',
    tone: 'success',
  },
]

const faqs = [
  {
    question: 'Is Apulza free?',
    answer:
      'Yes - it is free to start, with no card required. You can use the core study companion for as long as you like.',
  },
  {
    question: 'Is it only for students with ADHD?',
    answer:
      'No. It is designed around ADHD, anxiety, and low-energy days, but any student can use it when study feels heavy.',
  },
  {
    question: 'Will it nag me?',
    answer:
      'Never. Notifications are gentle, opt-in, and framed as ready when you are. You are always in control.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Your study data is yours. Apulza is built as a calm companion, not a tracking or reporting tool.',
  },
  {
    question: 'Can my school use it?',
    answer:
      'Yes. Schools and counselors can bring Apulza to students as a shame-free support between sessions.',
  },
  {
    question: 'What if I fall behind?',
    answer:
      'There is no behind in Apulza. Streaks do not exist, plans reset quietly, and you simply pick up wherever you actually are.',
  },
]

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#how' },
      { label: 'Features', href: '#features' },
      { label: 'For schools', href: '#schools' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our approach', href: '#clear' },
      { label: 'Manifesto', href: '#why' },
      { label: 'Contact', href: '#start' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Design language', href: '#clear' },
      { label: 'Dashboard', href: '#product' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
]

function IconCheck({ className, size = 15 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.4"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function IconClock({ className, size = 15 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
    >
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  )
}

function IconInfo({ className, size = 13 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="12" x2="12" y1="11" y2="16" />
      <circle cx="12" cy="7.5" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconHeart({ className, size = 17 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
    >
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </svg>
  )
}

function IconPlay({ className, size = 14 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M8 5.5v13l11-6.5z" />
    </svg>
  )
}

function IconX({ className, size = 15 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.4"
    >
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  )
}

function IconArrow({ className, size = 16 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
    >
      <line x1="5" x2="19" y1="12" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  )
}

function IconBookmark({ className, size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
    >
      <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
    </svg>
  )
}

function IconSliders({ className, size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
    >
      <line x1="4" x2="20" y1="8" y2="8" />
      <circle cx="9" cy="8" r="2.6" fill="var(--bg)" />
      <line x1="4" x2="20" y1="16" y2="16" />
      <circle cx="15" cy="16" r="2.6" fill="var(--bg)" />
    </svg>
  )
}

function IconChat({ className, size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
    >
      <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4V6a1 1 0 0 1 1-1z" />
    </svg>
  )
}

function IconSpark({ className, size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5 9 9M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5" />
    </svg>
  )
}

function IconShield({ className, size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
    >
      <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6z" />
    </svg>
  )
}

function IconChevron({ className, open }: { className?: string; open: boolean }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.4"
      data-open={open}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Apulza home">
      <span className="brand-mark" aria-hidden="true">
        A
      </span>
      <span>Apulza</span>
    </a>
  )
}

function ButtonLink({
  children,
  href,
  variant = 'primary',
}: {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
}) {
  return (
    <a className={`button ${variant === 'secondary' ? 'button-secondary' : ''}`} href={href}>
      {children}
    </a>
  )
}

function PulseLine({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 28" aria-hidden="true">
      <polyline points="0,14 50,14 64,14 74,4 86,24 96,8 106,17 118,14 160,14" />
    </svg>
  )
}

function StepDemo({ kind }: { kind: (typeof steps)[number]['demo'] }) {
  if (kind === 'input') {
    return (
      <div className="step-demo step-demo-input">
        <span>Cognitive Psychology - Ch. 4</span>
        <IconCheck size={12} />
      </div>
    )
  }

  if (kind === 'task') {
    return (
      <div className="step-demo step-demo-task">
        <span className="demo-checkbox" aria-hidden="true" />
        <strong>Read pages 112-118</strong>
        <em>~25 min</em>
      </div>
    )
  }

  return (
    <div className="step-demo step-demo-resume">
      <span>Picks up at</span>
      <strong>Page 112 - right where you left off</strong>
    </div>
  )
}

function EditorialHero() {
  return (
    <section className="hero hero-editorial" id="top">
      <img src="/assets/hero-landscape.png" alt="" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-inner">
        <p className="eyebrow">A supportive study buddy</p>
        <h1>
          A calm place
          <br />
          to keep going.
        </h1>
        <p className="hero-lede">
          Apulza is a study companion for students who carry ADHD, anxiety, or low days. No
          streaks to lose, no pressure to perform - just the next small step, whenever you're
          ready.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#start">
            <IconPlay />
            Start free
          </ButtonLink>
          <ButtonLink href="#how" variant="secondary">
            See how it works
          </ButtonLink>
        </div>
        <div className="pulse-note">
          <PulseLine />
          <span>Free to start - nothing to lose</span>
        </div>
      </div>
    </section>
  )
}

function DashboardPreview() {
  return (
    <aside className="dashboard-preview" aria-label="Dashboard preview">
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <strong>Good afternoon, Maya</strong>
      </div>
      <div className="dashboard-body">
        <div className="ready-card">
          <div className="small-label">
            <IconHeart />
            Ready when you are
          </div>
          <h3>Read Ch. 4 - Memory and Attention</h3>
          <button type="button">
            <IconPlay />
            Continue
          </button>
        </div>
        <div className="focus-card">
          <div className="focus-header">
            <h3>Today's focus</h3>
            <span>3 items - half counts</span>
          </div>
          {showcaseTasks.map((task) => (
            <div className="focus-row" data-tone={task.tone} key={task.title}>
              <span className={`focus-check ${task.checked ? 'is-checked' : ''}`}>
                {task.checked ? <IconCheck size={12} /> : null}
              </span>
              <strong className={task.struck ? 'is-struck' : ''}>{task.title}</strong>
              <em>
                {task.icon}
                {task.badge}
              </em>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

function App() {
  const [openFaq, setOpenFaq] = useState(0)

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
          <a className="nav-cta" href="#start">
            Start free
          </a>
        </nav>
      </header>

      <EditorialHero />

      <section className="trust-strip" aria-label="Product promises">
        {trustPoints.map((point) => (
          <span key={point.label}>
            {point.icon}
            {point.label}
          </span>
        ))}
      </section>

      <section className="section split-section why-section" id="why">
        <div>
          <p className="eyebrow">Why Apulza</p>
          <h2>Most study tools assume you're not overwhelmed.</h2>
        </div>
        <div className="copy-stack">
          <p>
            They're built for a calm, consistent, well-rested student - one who never loses their
            place and pushes through when it's hard. That's not always who shows up, especially with
            ADHD, anxiety, or depression in the picture.
          </p>
          <p className="assumption-label">The usual assumptions</p>
          <ul className="assumption-list">
            {assumptions.map((assumption) => (
              <li key={assumption}>
                <IconX />
                <span>{assumption}</span>
              </li>
            ))}
          </ul>
          <div className="standout-card">
            <IconHeart />
            <p>We don't build for any of that. We build for the day you're actually having.</p>
          </div>
        </div>
      </section>

      <section className="section-band" id="how">
        <div className="section centered">
          <p className="eyebrow">How it works</p>
          <h2>Three small steps. That's the whole thing.</h2>
          <p className="section-lede">
            No setup marathon, no productivity system to learn. Start where you are.
          </p>
          <div className="step-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.title}>
                <div className="step-card-heading">
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                </div>
                <p>{step.body}</p>
                <StepDemo kind={step.demo} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-showcase" id="product">
        <div className="dashboard-copy">
          <p className="eyebrow">The dashboard</p>
          <h2>It always shows the next small step.</h2>
          <p>
            Open Apulza and there's no blank page, no wall of overdue tasks. Just where you left
            off, a short plan for today, and gentle proof that you're moving.
          </p>
          <ul className="check-list">
            {showcasePoints.map((point) => (
              <li key={point}>
                <IconCheck />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <DashboardPreview />
      </section>

      <section className="section-band" id="features">
        <div className="section features-section">
          <div className="section-intro">
            <p className="eyebrow">What makes it different</p>
            <h2>Designed to reduce load, not add to it.</h2>
            <p className="section-lede">
              Every feature answers to one rule: protect the student's attention and their feelings.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" data-tone={feature.tone} key={feature.title}>
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section school-section" id="schools">
        <div className="school-card">
          <div className="school-copy">
            <p className="eyebrow">For schools and counselors</p>
            <h2>Support that works alongside you.</h2>
            <p>
              Apulza gives students a steady place to keep going between sessions - built on
              evidence-informed, shame-free principles you can stand behind.
            </p>
            <ul className="check-list">
              {schoolPoints.map((point) => (
                <li key={point}>
                  <IconCheck />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="#start">Talk to us about your school</ButtonLink>
          </div>
          <div className="school-image">
            <img
              src="/assets/school-study-room.png"
              alt="A calm, sunlit study space with students working quietly."
            />
          </div>
        </div>
      </section>

      <section className="clear-band" id="clear">
        <div className="section clear-inner">
          <div className="section-intro">
            <p className="eyebrow">Our foundation</p>
            <h2>Everything is built on CLEAR.</h2>
            <p className="section-lede">
              Five principles act as the acceptance test for every screen. A feature isn't finished
              until it satisfies all five.
            </p>
          </div>
          <div className="clear-grid" aria-label="CLEAR principles">
            {clearPrinciples.map((principle) => (
              <article className="clear-card" key={principle.letter}>
                <span>{principle.letter}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
          <a className="text-link" href="#why">
            Read the full design language
            <IconArrow />
          </a>
        </div>
      </section>

      <section className="section voices-section" id="voices">
        <div className="section-intro">
          <p className="eyebrow">In their words</p>
          <h2>The feeling we're going for.</h2>
        </div>
        <div className="quote-grid">
          {quotes.map((quote) => (
            <figure className="quote-card" data-tone={quote.tone} key={quote.who}>
              <span aria-hidden="true">"</span>
              <blockquote>{quote.text}</blockquote>
              <figcaption>
                <span>{quote.initials}</span>
                <div>
                  <strong>{quote.who}</strong>
                  <p>{quote.detail}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="quote-note">Illustrative - replace with real student and counselor voices.</p>
      </section>

      <section className="section-band faq-band" id="faq">
        <div className="section faq-section">
          <div className="section-intro centered">
            <p className="eyebrow">Questions</p>
            <h2>The things people ask first.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div className="faq-item" data-open={isOpen} key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <IconChevron open={isOpen} />
                  </button>
                  <div id={`faq-answer-${index}`} hidden={!isOpen}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="closing" id="start">
        <div className="closing-inner">
          <PulseLine />
          <h2>Start where you are.</h2>
          <p>
            No streak to keep, no perfect moment to wait for. Open Apulza and take one small step -
            that's more than enough.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#top">
              <IconPlay />
              Start free
            </ButtonLink>
            <ButtonLink href="#how" variant="secondary">
              See how it works
            </ButtonLink>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Brand />
            <p>
              A supportive study buddy. Built to reduce load, protect feeling, and always show the
              next small step.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <strong>{column.title}</strong>
              {column.links.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
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
