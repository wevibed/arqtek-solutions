import { useState } from 'react'
import { ArrowDownRight, ArrowRight, Menu, X, MoveUpRight, MapPin, Phone, MessageCircle, Check, Plus } from 'lucide-react'

const PHONE = '263783534609'
const waLink = (message = 'Hello ArqTek Solutions, I would like to discuss a project.') =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`

const projects = [
  {
    number: '01',
    category: 'RESIDENTIAL · CONCEPT DESIGN',
    title: 'A home with a point of view',
    image: '/images/projects/project-01.webp',
    alt: 'Modern residential compound entrance and boundary design visualization'
  },
  {
    number: '02',
    category: 'CONTEMPORARY · RESIDENTIAL',
    title: 'Light, space and proportion',
    image: '/images/projects/project-02.webp',
    alt: 'Residential house construction progress photograph'
  },
  {
    number: '03',
    category: 'ARCHITECTURAL VISUALISATION',
    title: 'The idea before the build',
    image: '/images/projects/project-03.webp',
    alt: 'Residential house exterior and perimeter wall photograph'
  }
]

const services = [
  { n: '01', title: 'Architectural design', text: 'Thoughtful layouts and considered design solutions shaped around your site, needs and vision.' },
  { n: '02', title: '3D visualisation', text: 'See the character of your future space before construction begins, with clear visual concepts.' },
  { n: '03', title: 'Construction services', text: 'Practical project delivery focused on workmanship, communication and attention to detail.' },
  { n: '04', title: 'Project consultation', text: 'Discuss your ideas, site, budget and next steps with a team that helps turn plans into action.' }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(0)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#home" aria-label="ArqTek Solutions home" onClick={closeMenu}>
          <span className="brand-mark"><span></span><span></span><span></span></span>
          <span className="brand-text">ARQTEK<span>SOLUTIONS</span></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#about" onClick={closeMenu}>Approach</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#projects" onClick={closeMenu}>Selected work</a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="nav-cta" onClick={closeMenu}>Start a project <ArrowRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-image" src="/images/hero/arqtek-hero.webp" alt="Modern white and charcoal residential house exterior architectural visualization" />
          <div className="hero-shade"></div>
          <div className="hero-content">
            <h1>Design with<br/><em>purpose.</em> Build<br/>with confidence.</h1>
            <p>We bring architectural ideas to life through considered design, clear visualisation and dependable construction services.</p>
            <div className="hero-actions">
              <a className="button button-light" href={waLink()} target="_blank" rel="noreferrer">Discuss your project <ArrowRight size={17}/></a>
              <a className="text-link light-link" href="#projects">Explore selected work <ArrowDownRight size={17}/></a>
            </div>
          </div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-index">01 <span>—</span> OUR APPROACH</div>
          <div className="intro-main">
            <h2>Good spaces start<br/>with <em>good thinking.</em></h2>
            <div className="intro-copy">
              <p className="lead">At ArqTek Solutions, we believe a successful project begins with understanding how you want to live, work and grow.</p>
              <p>From the first sketch to the final details, our focus is on purposeful design, practical decisions and a process that keeps your vision at the centre.</p>
              <a className="underlined-link" href="#services">Get to know our services <ArrowRight size={16}/></a>
            </div>
          </div>
          <div className="stats-row">
            <div><span className="stat-number">01</span><span className="stat-label">One clear vision</span></div>
            <div><span className="stat-number">02</span><span className="stat-label">Thoughtful planning</span></div>
            <div><span className="stat-number">03</span><span className="stat-label">A considered result</span></div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading">
            <div><div className="section-index">02 <span>—</span> WHAT WE DO</div><h2>From first idea<br/>to <em>real space.</em></h2></div>
            <p>Services shaped to help you make confident decisions at every stage of your project.</p>
          </div>
          <div className="service-list">
            {services.map((s) => <article className="service-item" key={s.n}>
              <span className="service-number">{s.n}</span><h3>{s.title}</h3><p>{s.text}</p>
              <a href={waLink(`Hello ArqTek Solutions, I would like to enquire about ${s.title}.`)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${s.title}`}><ArrowUpRightIcon /></a>
            </article>)}
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-heading project-heading">
            <div><div className="section-index">03 <span>—</span> SELECTED WORK</div><h2>Ideas made <em>visible.</em></h2></div>
            <p>A glimpse into the forms, materials and spaces that inspire our approach.</p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => <a className={`project-card project-${i + 1}`} href={waLink(`Hello ArqTek Solutions, I would like to discuss a project similar to: ${p.title}.`)} target="_blank" rel="noreferrer" key={p.number}>
              <div className="project-image-wrap"><img src={p.image} alt={p.alt} loading="lazy"/><span className="project-open"><MoveUpRight size={20}/></span></div>
              <div className="project-meta"><span>{p.number} / {p.category}</span><h3>{p.title}</h3></div>
            </a>)}
          </div>
        </section>

        <section className="statement">
          <div className="statement-bg"></div>
          <div className="statement-inner"><div className="eyebrow light"><span className="eyebrow-line"></span> YOUR PROJECT, YOUR PRIORITIES</div>
            <h2>Make room for<br/><em>what matters.</em></h2>
            <a className="button button-outline" href={waLink()} target="_blank" rel="noreferrer">Let's talk about your project <ArrowRight size={17}/></a>
          </div>
        </section>

        <section className="faq section-pad">
          <div><div className="section-index">04 <span>—</span> GOOD TO KNOW</div><h2>Questions before<br/><em>we begin?</em></h2></div>
          <div className="faq-list">
            {[
              ['Can I enquire before I have a complete plan?', 'Yes. Share what you have in mind and where the project is located. The first conversation can help clarify what you need next.'],
              ['Can you help with architectural concepts and 3D visuals?', 'ArqTek Solutions lists architectural and construction services. Confirm the exact scope and deliverables with the team when making your enquiry.'],
              ['How do I get a quotation?', 'Contact the team on WhatsApp. Include your location, project type and any plans or references you already have.']
            ].map(([q, a], i) => <div className={`faq-item ${faqOpen === i ? 'faq-active' : ''}`} key={q}>
              <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}><span>{q}</span>{faqOpen === i ? <X size={18}/> : <Plus size={18}/>}</button>
              {faqOpen === i && <p>{a}</p>}
            </div>)}
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><span></span><span></span><span></span></span><span className="brand-text">ARQTEK<span>SOLUTIONS</span></span></a>
        <span className="footer-line">DESIGNED AROUND YOUR VISION.</span>
        <div className="footer-right"><span>HARARE, ZIMBABWE</span><span>© {new Date().getFullYear()} ARQTEK SOLUTIONS</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </div>
  )
}

function ArrowUpRightIcon() {
  return <MoveUpRight size={19} strokeWidth={1.5}/>
}

export default App
