import { ArrowDown, ArrowRight, ArrowUpRight, Instagram, Mail, Menu, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const whatsappUrl = 'https://wa.me/917302175080'
const emailUrl = 'mailto:catejasvaagarwal@gmail.com'

const creatorMoments = [
  {
    number: '01',
    title: 'A brand deal is taking shape',
    text: 'You need to understand what to include in your invoice, agreement, and payment records.',
    icon: '✳',
  },
  {
    number: '02',
    title: 'Your income comes from different places',
    text: 'Platform payouts, affiliate links, sponsorships, or overseas payments make tracking harder.',
    icon: '↗',
  },
  {
    number: '03',
    title: 'Tax time feels uncertain',
    text: 'You want to know which records to gather and what questions to ask before filing.',
    icon: '◫',
  },
]

const serviceTiers = [
  {
    name: 'Creator Start',
    audience: 'For creators building a clear tax-filing routine.',
    items: ['Income-tax return support', 'Income organised by source', 'Advance-tax estimate', 'One planning discussion'],
  },
  {
    name: 'Creator Pro',
    audience: 'For established creators with GST or recurring brand work.',
    badge: 'MOST CREATOR NEEDS',
    items: ['Everything in Start', 'GST review and applicable filings', 'Foreign-income records review', 'Brand-deal invoice guidance', 'Advance-tax check-ins', 'TDS credit reconciliation'],
  },
  {
    name: 'Creator Business',
    audience: 'For creator-led businesses with a team or product line.',
    items: ['Everything in Pro', 'Entity setup discussion', 'Bookkeeping support', 'TDS and payment-record review', 'Annual compliance coordination'],
  },
]

const steps = [
  ['01', 'Tell me about your work', 'Share what you create, how you earn, and what you want help with.'],
  ['02', 'Review your situation', 'We’ll discuss relevant records, questions, and possible requirements.'],
  ['03', 'Agree on scope and fees', 'You’ll know what support is proposed before any work begins.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Creator Tax home" onClick={closeMenu}>
          <span className="wordmark-symbol">c<span>.</span></span>
          <span className="wordmark-name">CA for Creators</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={22} />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#support-areas" onClick={closeMenu}>Support options</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Chartered accountancy for creators in India</div>
            <h1>Create freely.<br /><em>File correctly.</em></h1>
            <p className="hero-description">
              Practical tax and compliance support for creators earning through brand partnerships, platforms, and their own products.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
                Tell me what you need <ArrowUpRight size={16} />
              </a>
              <a className="text-link" href="#situations">See when I can help <ArrowDown size={15} /></a>
            </div>
            <div className="hero-note"><span className="note-dot" /> Chartered Accountant · Creator-focused practice</div>
          </div>

          <div className="hero-art" aria-label="Illustration of creator income streams">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-stamp"><span>MAKE</span><span>IT</span><span>COUNT</span></div>
            <div className="art-center">
              <div className="art-center-top"><span className="tiny-mark">c.</span><span>CREATOR INCOME</span></div>
              <div className="art-center-title">Many streams.<br /><em>One clear view.</em></div>
              <div className="art-lines"><span /><span /><span /></div>
              <div className="art-center-footer"><span>YOUR WORK, IN FOCUS</span><ArrowUpRight size={16} /></div>
            </div>
            <div className="income-tag tag-video"><span className="tag-icon platform-icon">▶</span><span>Platform income</span></div>
            <div className="income-tag tag-brand"><span className="tag-icon brand-icon">✳</span><span>Brand deals</span></div>
            <div className="income-tag tag-products"><span className="tag-icon product-icon">◇</span><span>Your products</span></div>
            <span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✦</span>
          </div>
          <a className="hero-scroll" href="#situations"><span>Scroll to explore</span><ArrowDown size={15} /></a>
        </section>

        <section className="support-section section-shell" id="situations">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> Does this sound familiar?</p>
              <h2>Creator work brings<br /><em>new money questions.</em></h2>
            </div>
            <p className="section-heading-aside">As your work grows, so can the admin behind it. Here are a few moments when a conversation with a CA may help.</p>
          </div>
          <div className="service-grid situation-grid">
            {creatorMoments.map((moment) => (
              <article className="service-card situation-card" key={moment.number}>
                <div className="service-card-top"><span>{moment.number}</span><span className="service-icon" aria-hidden="true">{moment.icon}</span></div>
                <h3>{moment.title}</h3>
                <p>{moment.text}</p>
                <span className="card-rule" />
              </article>
            ))}
            <div className="service-cta-card situation-next">
              <span className="cta-card-icon"><ArrowRight size={19} /></span>
              <span className="cta-card-title">Start with<br />your question.</span>
              <span className="cta-card-copy">No need to have it all figured out.</span>
              <a className="cta-card-link" href="#contact">Contact options <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <p className="fine-print">What applies depends on your individual facts and current requirements.</p>
        </section>

        <section className="plans-section" id="support-areas">
          <div className="section-shell plans-inner">
            <div className="plans-heading">
              <p className="eyebrow"><span className="eyebrow-line" /> How we work</p>
              <h2>Support that grows<br /><em>with your channel.</em></h2>
              <p>Choose a starting point. We’ll confirm what fits your income sources and needs before work begins.</p>
            </div>
            <div className="plans-grid">
              {serviceTiers.map((tier, index) => (
                <article className={`plan-card${index === 1 ? ' plan-featured' : ''}`} key={tier.name}>
                  <div className="plan-card-heading">
                    <h3>{tier.name}</h3>
                    {tier.badge && <span className="plan-badge">{tier.badge}</span>}
                  </div>
                  <p className="plan-audience">{tier.audience}</p>
                  <ul>{tier.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <p className="plans-note">Fees are shared after we understand your income sources and the scope of support. Final services depend on your circumstances and applicable requirements.</p>
          </div>
        </section>

        <section className="process-section">
          <div className="section-shell process-inner">
            <div className="process-heading">
              <p className="eyebrow"><span className="eyebrow-line" /> What to expect</p>
              <h2>A straightforward<br /><em>way to get started.</em></h2>
              <p>First, we understand the question. Then we agree on the right scope and next steps for you.</p>
              <a className="text-link" href="#contact">See contact options <ArrowDown size={15} /></a>
            </div>
            <div className="steps-list">
              {steps.map(([number, title, description]) => (
                <article className="step" key={number}>
                  <span className="step-number">{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="about-art" aria-hidden="true">
            <div className="about-art-circle"><span>CA</span><span>CREATOR<br />FOCUSED</span></div>
            <div className="about-art-caption">A PRACTICE WITH<br />A HUMAN SIDE</div>
            <span className="about-art-star">✳</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Who we are</p>
            <h2>Agarwal Tejasva &amp; Associates,<br /><em>Chartered Accountants</em></h2>
            <p className="about-placeholder">We are a CA firm based in Delhi NCR, serving creators across India. We already handle export compliance, GST, and incorporations for startups and D2C brands.</p>
            <p className="about-placeholder">That means we see both sides of a brand deal: how brands pay creators, and what creators need to report.</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-inner">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Contact</p>
              <h2>Have a question?<br /><em>Get in touch.</em></h2>
              <p>Send a short note about your creator work and what you’d like help with. I’ll get back to you to discuss next steps.</p>
            </div>
            <div className="contact-actions">
              <a className="contact-card whatsapp-card" href={whatsappUrl} target="_blank" rel="noreferrer">
                <span className="contact-card-icon"><MessageCircle size={19} /></span>
                <span className="contact-card-label">A quick message</span>
                <span className="contact-card-title">Message on WhatsApp</span>
                <span className="contact-card-detail">+91 7302175080</span>
                <ArrowUpRight className="contact-arrow" size={19} />
              </a>
              <a className="contact-card email-card" href={emailUrl}>
                <span className="contact-card-icon"><Mail size={19} /></span>
                <span className="contact-card-label">Prefer email?</span>
                <span className="contact-card-title">Write me a note</span>
                <span className="contact-card-detail">catejasvaagarwal@gmail.com</span>
                <ArrowUpRight className="contact-arrow" size={19} />
              </a>
            </div>
          </div>
          <div className="contact-decoration" aria-hidden="true">C.</div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-top">
          <a className="wordmark footer-wordmark" href="#top"><span className="wordmark-symbol">c<span>.</span></span><span className="wordmark-name">CA for Creators</span></a>
          <p>Chartered accountancy for content creators.</p>
          <div className="footer-socials"><a href={whatsappUrl} aria-label="WhatsApp" target="_blank" rel="noreferrer"><MessageCircle size={17} /></a><a href={emailUrl} aria-label="Email"><Mail size={17} /></a><a href="#contact" aria-label="Instagram contact"><Instagram size={17} /></a></div>
        </div>
        <div className="section-shell footer-bottom">
          <span>© {new Date().getFullYear()} CA for Creators</span>
          <p>Website content is general information, not advice for your specific circumstances.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
