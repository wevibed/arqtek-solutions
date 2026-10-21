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
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    alt: 'Contemporary residential interior with clean architectural lines'
  },
  {
    number: '02',
    category: 'CONTEMPORARY · RESIDENTIAL',
    title: 'Light, space and proportion',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern home with glass doors opening to a garden'
  },
  {
    number: '03',
    category: 'ARCHITECTURAL VISUALISATION',
    title: 'The idea before the build',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern minimalist home and landscaped exterior'
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
  const [form, setForm] = useState({ name: '', project: 'Architectural design', location: '', budget: '', details: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submitEnquiry = (e) => {
    e.preventDefault()
    const message = `Hello ArqTek Solutions, I would like to make an enquiry.%0A%0AName: ${form.name}%0AProject: ${form.project}%0ALocation: ${form.location}%0ABudget range: ${form.budget || 'Not specified'}%0ADetails: ${form.details || 'I would like to discuss my project.'}`
    window.open(`https://wa.me/${PHONE}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="topline"><span>ARCHITECTURE · VISUALISATION · CONSTRUCTION</span><span>HARARE, ZIMBABWE <span className="dot">●</span> AVAILABLE FOR ENQUIRIES</span></div>
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
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Start a project <ArrowRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-image" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90" alt="Contemporary architecture with warm materials and clean geometry" />
          <div className="hero-shade"></div>
          <div className="hero-content">
            <div className="eyebrow light"><span className="eyebrow-line"></span> BUILT AROUND YOUR VISION</div>
            <h1>Design with<br/><em>purpose.</em> Build<br/>with confidence.</h1>
            <p>We bring architectural ideas to life through considered design, clear visualisation and dependable construction services.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#contact">Discuss your project <ArrowRight size={17}/></a>
              <a className="text-link light-link" href="#projects">Explore selected work <ArrowDownRight size={17}/></a>
            </div>
          </div>
          <div className="hero-caption"><span>01 / 03</span><span>SPACES THAT FEEL LIKE THEY BELONG</span><span>HARARE, ZW</span></div>
          <a className="scroll-indicator" href="#about" aria-label="Scroll to about section"><ArrowDownRight size={20}/></a>
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
              <a href="#contact" aria-label={`Enquire about ${s.title}`}><ArrowUpRightIcon /></a>
            </article>)}
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-heading project-heading">
            <div><div className="section-index">03 <span>—</span> SELECTED WORK</div><h2>Ideas made <em>visible.</em></h2></div>
            <p>A glimpse into the forms, materials and spaces that inspire our approach.</p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => <a className={`project-card project-${i + 1}`} href="#contact" key={p.number}>
              <div className="project-image-wrap"><img src={p.image} alt={p.alt} loading="lazy"/><span className="project-open"><MoveUpRight size={20}/></span></div>
              <div className="project-meta"><span>{p.number} / {p.category}</span><h3>{p.title}</h3></div>
            </a>)}
          </div>
          <p className="portfolio-note">Portfolio imagery is illustrative. Replace with ArqTek Solutions' verified projects, renders and drawings before launch.</p>
        </section>

        <section className="statement">
          <div className="statement-bg"></div>
          <div className="statement-inner"><div className="eyebrow light"><span className="eyebrow-line"></span> YOUR PROJECT, YOUR PRIORITIES</div>
            <h2>Make room for<br/><em>what matters.</em></h2>
            <a className="button button-outline" href="#contact">Let's talk about your project <ArrowRight size={17}/></a>
          </div>
        </section>

        <section className="process section-pad">
          <div className="section-heading"><div><div className="section-index">04 <span>—</span> THE PROCESS</div><h2>Clear steps.<br/><em>Better decisions.</em></h2></div><p>A straightforward starting point, with space to ask questions and align expectations.</p></div>
          <div className="process-grid">
            <div><span>01</span><h3>Tell us about it</h3><p>Share your vision, location, priorities and what you need to achieve.</p></div>
            <div><span>02</span><h3>Explore the options</h3><p>Discuss suitable services, project scope, timing and budget considerations.</p></div>
            <div><span>03</span><h3>Plan the next step</h3><p>Agree on the right way forward before work begins.</p></div>
          </div>
        </section>

        <section className="faq section-pad">
          <div><div className="section-index">05 <span>—</span> GOOD TO KNOW</div><h2>Questions before<br/><em>we begin?</em></h2></div>
          <div className="faq-list">
            {[
              ['Can I enquire before I have a complete plan?', 'Yes. Share what you have in mind and where the project is located. The first conversation can help clarify what you need next.'],
              ['Can you help with architectural concepts and 3D visuals?', 'ArqTek Solutions lists architectural and construction services. Confirm the exact scope and deliverables with the team when making your enquiry.'],
              ['How do I get a quotation?', 'Use the enquiry form below or contact the team on WhatsApp. Include your location, project type and any plans or references you already have.']
            ].map(([q, a], i) => <div className={`faq-item ${faqOpen === i ? 'faq-active' : ''}`} key={q}>
              <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}><span>{q}</span>{faqOpen === i ? <X size={18}/> : <Plus size={18}/>}</button>
              {faqOpen === i && <p>{a}</p>}
            </div>)}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-copy">
            <div className="section-index">06 <span>—</span> START A CONVERSATION</div>
            <h2>Have a project<br/>in <em>mind?</em></h2>
            <p>Tell us a little about what you're planning. We'll open WhatsApp with your enquiry ready to send.</p>
            <div className="contact-detail"><Phone size={17}/><a href="tel:+263783534609">+263 78 353 4609</a></div>
            <div className="contact-detail"><MapPin size={17}/><span>Harare, Zimbabwe</span></div>
            <a className="contact-wa" href={waLink()} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Chat directly on WhatsApp <ArrowRight size={16}/></a>
          </div>
          <form className="enquiry-form" onSubmit={submitEnquiry}>
            <div className="form-top"><span>PROJECT ENQUIRY</span><span>LET'S GET STARTED</span></div>
            <label>Your name<input name="name" value={form.name} onChange={update} required placeholder="Name and surname"/></label>
            <label>What are you planning?
              <select name="project" value={form.project} onChange={update}>
                <option>Architectural design</option><option>3D visualisation</option><option>Construction services</option><option>Project consultation</option><option>Other / not sure yet</option>
              </select>
            </label>
            <div className="form-split">
              <label>Project location<input name="location" value={form.location} onChange={update} required placeholder="e.g. Borrowdale, Harare"/></label>
              <label>Budget range <span className="optional">(optional)</span><select name="budget" value={form.budget} onChange={update}><option value="">Choose range</option><option>Under US$5,000</option><option>US$5,000–15,000</option><option>US$15,000–50,000</option><option>US$50,000+</option><option>Need guidance</option></select></label>
            </div>
            <label>Tell us a little more <span className="optional">(optional)</span><textarea name="details" value={form.details} onChange={update} rows="3" placeholder="Your ideas, requirements or timeline…"/></label>
            <button className="button button-dark" type="submit">Send enquiry via WhatsApp <ArrowRight size={17}/></button>
            <p className="form-privacy"><Check size={13}/> Your message is prepared in WhatsApp. It is not stored on this website.</p>
          </form>
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
