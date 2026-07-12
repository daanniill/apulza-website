import { useEffect, useState, type FormEvent, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react'
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

const trustEvidence = [
  {
    title: 'A visible product standard',
    body: 'CLEAR is the rubric used to review every screen: cognitive load, re-entry, emotional safety, adaptation, and reliable memory.',
    icon: <IconBookmark />,
  },
  {
    title: 'Accessibility is a release check',
    body: 'Strong contrast, 44px touch targets, clear focus states, and optional motion are treated as requirements, not extras.',
    icon: <IconHeart />,
  },
  {
    title: 'Privacy without surveillance',
    body: 'Apulza is designed as a student companion—not a leaderboard, behavior score, or tool for watching students work.',
    icon: <IconShield />,
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

function handleTilePointerMove(event: ReactPointerEvent<HTMLElement>) {
  if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const tile = event.currentTarget
  const bounds = tile.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width
  const y = (event.clientY - bounds.top) / bounds.height

  tile.style.setProperty('--tilt-x', `${(0.5 - y) * 7}deg`)
  tile.style.setProperty('--tilt-y', `${(x - 0.5) * 7}deg`)
  tile.style.setProperty('--cursor-x', `${x * 100}%`)
  tile.style.setProperty('--cursor-y', `${y * 100}%`)
}

function resetTileTilt(event: ReactPointerEvent<HTMLElement>) {
  event.currentTarget.style.setProperty('--tilt-x', '0deg')
  event.currentTarget.style.setProperty('--tilt-y', '0deg')
}

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

function IconMenu({ className, size = 20 }: IconProps) {
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
      strokeWidth="2.2"
    >
      <line x1="4" x2="20" y1="7" y2="7" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="17" y2="17" />
    </svg>
  )
}

function IconClose({ className, size = 20 }: IconProps) {
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
      strokeWidth="2.2"
    >
      <line x1="6" x2="18" y1="6" y2="18" />
      <line x1="18" x2="6" y1="6" y2="18" />
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
      <img className="brand-logo" src="/assets/apulza-logo.png" alt="" aria-hidden="true" />
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
          <ButtonLink href="#try">
            <IconPlay />
            Try a small step
          </ButtonLink>
          <ButtonLink href="#how" variant="secondary">
            See how it works
          </ButtonLink>
        </div>
        <div className="audience-paths" aria-label="Choose your path">
          <a href="#try">
            <span>For students</span>
            Start with what is on your mind <IconArrow size={14} />
          </a>
          <a href="#schools">
            <span>For schools & counselors</span>
            See how Apulza supports your students <IconArrow size={14} />
          </a>
        </div>
        <div className="pulse-note">
          <PulseLine />
          <span>Try it here — no account needed</span>
        </div>
      </div>
      <a className="hero-scroll-cue" href="#promises" aria-label="Scroll to learn more">
        <IconChevron open />
      </a>
    </section>
  )
}

function DashboardPreview() {
  return (
    <aside
      className="dashboard-preview interactive-tile motion-reveal"
      aria-label="Dashboard preview"
      onPointerMove={handleTilePointerMove}
      onPointerLeave={resetTileTilt}
    >
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

function TinyDemo() {
  const [task, setTask] = useState('')
  const [nextStep, setNextStep] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const normalized = task.trim().toLowerCase()

    if (normalized.includes('read') || normalized.includes('chapter')) {
      setNextStep('Open it and read the first three pages. Stop there if that is enough for today.')
    } else if (normalized.includes('essay') || normalized.includes('write')) {
      setNextStep('Write three rough bullet points. They do not need to be complete sentences.')
    } else if (normalized.includes('practice') || normalized.includes('problem')) {
      setNextStep('Try the first two questions, then take a short pause.')
    } else {
      setNextStep('Work on it for ten gentle minutes. You can decide what comes next after that.')
    }
  }

  return (
    <section className="tiny-demo" id="try" aria-labelledby="tiny-demo-title">
      <div className="tiny-demo-copy">
        <p className="eyebrow">Try it now</p>
        <h2 id="tiny-demo-title">Turn something heavy into one small step.</h2>
        <p>No account and no setup. Type one thing that is on your mind.</p>
      </div>
      <form
        className="tiny-demo-card interactive-tile motion-reveal"
        onSubmit={handleSubmit}
        onPointerMove={handleTilePointerMove}
        onPointerLeave={resetTileTilt}
      >
        <label htmlFor="tiny-task">What do you need to do?</label>
        <div className="tiny-demo-input-row">
          <input
            id="tiny-task"
            type="text"
            value={task}
            onChange={(event) => {
              setTask(event.target.value)
              setNextStep('')
            }}
            placeholder="Read chapter 4"
            required
          />
          <button className="button" type="submit">Show my next step</button>
        </div>
        <div className="tiny-demo-result" aria-live="polite" data-visible={Boolean(nextStep)}>
          {nextStep ? (
            <>
              <span><IconSpark size={16} /> Your next small step</span>
              <strong>{nextStep}</strong>
            </>
          ) : (
            <span>Your suggestion will appear here.</span>
          )}
        </div>
      </form>
    </section>
  )
}

function DemoRequestForm() {
  const [emailOpened, setEmailOpened] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const role = String(form.get('role') || '')
    const subject = encodeURIComponent(`Apulza walkthrough request from ${name}`)
    const body = encodeURIComponent(
      [
        'Hi Apulza team,',
        '',
        "I'd like to request an Apulza walkthrough.",
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `I am a: ${role}`,
      ].join('\n'),
    )

    setEmailOpened(true)
    window.location.href = `mailto:hello@apulza.com?subject=${subject}&body=${body}`
  }

  return (
    <form className="demo-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Alex Morgan" required />
        </label>
        <label>
          <span>Email address</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="alex@school.edu"
            required
          />
        </label>
      </div>
      <label>
        <span>I am a...</span>
        <select name="role" defaultValue="" required>
          <option value="" disabled>Select your role</option>
          <option>Parent or guardian</option>
          <option>Teacher or counselor</option>
          <option>School leader</option>
          <option>Other</option>
        </select>
      </label>
      <button className="button demo-submit" type="submit">
        Request a walkthrough
        <IconArrow />
      </button>
      <p className="form-note">
        No commitment. Your email app will open with your request ready to send.
      </p>
      {emailOpened ? (
        <p className="form-status" role="status">
          Your request is ready in your email app. Send it when you're ready.
        </p>
      ) : null}
    </form>
  )
}

function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [calmerView, setCalmerView] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('.motion-reveal'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveals.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -9% 0px', threshold: 0.12 },
    )

    reveals.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main className={`app${calmerView ? ' is-calm' : ''}`}>
      <header className="site-header">
        <Brand />
        <nav
          className={`nav${mobileMenuOpen ? ' is-open' : ''}`}
          id="mobile-navigation"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <button
            className="calm-toggle"
            type="button"
            aria-pressed={calmerView}
            onClick={() => {
              setCalmerView((current) => !current)
              setMobileMenuOpen(false)
            }}
          >
            <IconSpark size={16} />
            <span>{calmerView ? 'Full view' : 'Calmer view'}</span>
          </button>
          <a className="nav-cta" href="#try" onClick={() => setMobileMenuOpen(false)}>
            Try it now
          </a>
        </nav>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMobileMenuOpen((current) => !current)}
        >
          {mobileMenuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </header>

      <EditorialHero />

      <section className="trust-strip" id="promises" aria-label="Product promises">
        {trustPoints.map((point) => (
          <span key={point.label}>
            {point.icon}
            {point.label}
          </span>
        ))}
      </section>

      <section className="section-band" id="how">
        <div className="section centered">
          <p className="eyebrow motion-reveal">How it works</p>
          <h2 className="motion-reveal">Three small steps. That's the whole thing.</h2>
          <p className="section-lede motion-reveal">
            No setup marathon, no productivity system to learn. Start where you are.
          </p>
          <div className="step-grid">
            {steps.map((step) => (
              <article
                className="step-card interactive-tile motion-reveal"
                key={step.title}
                onPointerMove={handleTilePointerMove}
                onPointerLeave={resetTileTilt}
              >
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

      <TinyDemo />

      <section className="section product-showcase" id="product">
        <div className="dashboard-copy motion-reveal">
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

      <section className="section school-section" id="schools">
        <div className="school-card motion-reveal">
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
            <ButtonLink href="#demo">Request a school demo</ButtonLink>
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
          <div className="section-intro motion-reveal">
            <p className="eyebrow">Our foundation</p>
            <h2>Everything is built on CLEAR.</h2>
            <p className="section-lede">
              Five principles act as the acceptance test for every screen. A feature isn't finished
              until it satisfies all five.
            </p>
          </div>
          <div className="clear-grid" aria-label="CLEAR principles">
            {clearPrinciples.map((principle) => (
              <article
                className="clear-card interactive-tile motion-reveal"
                key={principle.letter}
                onPointerMove={handleTilePointerMove}
                onPointerLeave={resetTileTilt}
              >
                <span>{principle.letter}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
          <div className="trust-proof motion-reveal" id="proof">
            <div className="trust-proof-intro">
              <p className="eyebrow">What we can say today</p>
              <h2>Trust should be specific.</h2>
              <p>
                Apulza is still growing, so we will not borrow credibility from anonymous success
                stories. These are the product commitments you can evaluate now.
              </p>
            </div>
            <div className="evidence-grid" aria-label="Product commitments">
              {trustEvidence.map((item) => (
                <article key={item.title}>
                  <span>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <p className="evidence-note">
              Apulza is a study support tool, not medical care or a replacement for a counselor.
            </p>
          </div>
        </div>
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
                <div className="faq-item motion-reveal" data-open={isOpen} key={faq.question}>
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

      <section className="closing" id="demo">
        <div className="closing-inner">
          <div className="demo-copy motion-reveal">
            <PulseLine />
            <p className="eyebrow">A closer look</p>
            <h2>Bring calmer study support to your students.</h2>
            <p>
              Schools, counselors, and families can request a calm, personal walkthrough. Students
              can try the small-step experience above without filling out a form.
            </p>
            <ul className="demo-promises">
              <li>
                <IconCheck /> A calm, personal walkthrough
              </li>
              <li>
                <IconCheck /> Time for your questions
              </li>
              <li>
                <IconCheck /> No pressure or commitment
              </li>
            </ul>
          </div>
          <div className="motion-reveal">
            <DemoRequestForm />
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
