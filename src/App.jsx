import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, ArrowRight, ArrowUpRight, BedDouble, Building2, Check, ChevronDown, Compass, KeyRound, MapPin, Menu, MoveUpRight, Search, ShieldCheck, Sparkles, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const homes = [
  { name: 'The quiet corner', area: 'West Village · New York', price: '$1,280,000', beds: '2 beds', baths: '2 baths', size: '1,460 sq ft', image: 'photo-1600210492486-724fe5c67fb0', tag: 'Just listed' },
  { name: 'A little more sky', area: 'Silver Lake · Los Angeles', price: '$945,000', beds: '3 beds', baths: '2 baths', size: '1,820 sq ft', image: 'photo-1600607687939-ce8a6c25118c', tag: 'Open Sunday' },
  { name: 'Room to exhale', area: 'Cobble Hill · Brooklyn', price: '$2,150,000', beds: '4 beds', baths: '3 baths', size: '2,340 sq ft', image: 'photo-1600566753086-00f18fb6b3ea', tag: 'New price' },
]
const services = [
  { icon: KeyRound, n: '01', title: 'Buy with confidence', text: 'A clear plan, thoughtful advice, and a steady hand from first viewing to keys.' },
  { icon: MoveUpRight, n: '02', title: 'Sell with intention', text: 'Position your home beautifully and bring the right people to the table.' },
  { icon: Building2, n: '03', title: 'Lease with ease', text: 'Find a place that fits your life, with the details handled along the way.' },
  { icon: ShieldCheck, n: '04', title: 'Manage with care', text: 'Attentive property management that protects your investment and your time.' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])
  return <>
    <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#top" className="brand" aria-label="Cityscape home"><span className="brand-mark">C</span><span>cityscape</span></a>
      <nav className="nav-links"><a href="#homes">Homes</a><a href="#approach">Our approach</a><a href="#services">Services</a><a href="#journal">Journal</a></nav>
      <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
    {open && <div className="mobile-menu"><a onClick={() => setOpen(false)} href="#homes">Homes</a><a onClick={() => setOpen(false)} href="#approach">Our approach</a><a onClick={() => setOpen(false)} href="#services">Services</a><a onClick={() => setOpen(false)} href="#contact">Let’s talk <ArrowUpRight size={18} /></a></div>}
  </>
}

function Hero() {
  const root = useRef(null)
  useEffect(() => { const ctx = gsap.context(() => { gsap.from('.hero-reveal', { y: 28, opacity: 0, duration: 1, stagger: 0.13, ease: 'power3.out', delay: .15 }); gsap.from('.hero-photo', { scale: 1.06, duration: 1.8, ease: 'power2.out', delay: .05 }) }, root); return () => ctx.revert() }, [])
  return <section className="hero" id="top" ref={root}>
    <img className="hero-photo" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=88" alt="Sunlit modern home framed by greenery" />
    <div className="hero-shade" />
    <Navbar />
    <div className="hero-content">
      <p className="eyebrow hero-reveal"><span className="eyebrow-dot" /> A MORE PERSONAL REAL ESTATE EXPERIENCE</p>
      <h1 className="hero-reveal">Find your place<br />in the <em>city.</em></h1>
      <p className="hero-copy hero-reveal">Good moves start with feeling understood. We bring local knowledge, considered advice, and a little more humanity to your next chapter.</p>
      <div className="hero-actions hero-reveal"><a href="#homes" className="button button-light">Explore homes <ArrowUpRight size={16} /></a><a href="#approach" className="hero-secondary">Get to know us <ArrowDown size={15} /></a></div>
    </div>
    <div className="hero-bottom"><span>PROPERTY, WITH PERSPECTIVE</span><span className="hero-location"><MapPin size={14} /> Your city, your next chapter</span></div>
    <div className="hero-index">01 <span /> 04</div>
  </section>
}

function SearchBar() {
  const [type, setType] = useState('Buy')
  return <div className="search-card">
    <div className="search-tabs">{['Buy', 'Rent', 'Sell'].map(x => <button key={x} className={type === x ? 'active' : ''} onClick={() => setType(x)}>{x}</button>)}</div>
    <div className="search-fields"><label className="search-location"><span>LOCATION</span><div><MapPin size={17} /><input aria-label="Location" placeholder="Neighborhood, city, or ZIP" /></div></label><label><span>PROPERTY TYPE</span><div><select aria-label="Property type"><option>Any property</option><option>Apartment</option><option>House</option><option>Townhouse</option></select><ChevronDown size={15} /></div></label><label><span>PRICE RANGE</span><div><select aria-label="Price range"><option>Any price</option><option>Under $500k</option><option>$500k – $1m</option><option>$1m+</option></select><ChevronDown size={15} /></div></label><button className="search-submit" aria-label="Search homes"><Search size={19} /><span>Find a home</span></button></div>
  </div>
}

function Listings() {
  const [saved, setSaved] = useState([])
  return <section className="section listings" id="homes"><div className="section-head"><div><p className="eyebrow">A FEW PLACES TO BEGIN</p><h2>Somewhere that<br /><em>feels like you.</em></h2></div><a className="text-link" href="#contact">View all homes <ArrowUpRight size={16} /></a></div>
    <div className="home-grid">{homes.map((home, i) => <article className="home-card" key={home.name}>
      <a className="home-image" href="#contact"><img src={`https://images.unsplash.com/${home.image}?auto=format&fit=crop&w=1100&q=82`} alt={`${home.name}, a home in ${home.area}`} loading="lazy"/><span className="home-tag">{home.tag}</span><span className="home-number">0{i + 1}</span></a>
      <div className="home-info"><div><p className="home-area"><MapPin size={13} /> {home.area}</p><h3>{home.name}</h3></div><button className={`save-home ${saved.includes(i) ? 'saved' : ''}`} aria-label={saved.includes(i) ? 'Remove saved home' : 'Save home'} onClick={() => setSaved(saved.includes(i) ? saved.filter(x => x !== i) : [...saved, i])}><span>♡</span></button></div>
      <div className="home-specs"><span>{home.beds}</span><i /> <span>{home.baths}</span><i /><span>{home.size}</span><strong>{home.price}</strong></div>
    </article>)}</div>
  </section>
}

function Story() {
  return <section className="story" id="approach"><div className="story-image"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85" alt="Warm, thoughtfully designed home interior" loading="lazy"/><span className="image-caption">A HOME IS MORE THAN AN ADDRESS.</span><div className="story-seal"><Compass size={22} strokeWidth={1.3}/><span>HERE FOR<br/>THE WHOLE<br/>JOURNEY</span></div></div><div className="story-copy"><p className="eyebrow">A BETTER WAY TO MOVE</p><h2>Real estate is<br />about <em>real life.</em></h2><p className="story-lead">The right home changes how a day feels. The right guide makes the journey feel different, too.</p><p className="body-copy">At Cityscape, we take time to understand what matters to you. Then we bring the neighborhood knowledge, honest perspective, and thoughtful follow-through to help you make your next move with confidence.</p><a className="text-link" href="#services">The Cityscape difference <ArrowUpRight size={16} /></a><div className="story-note"><span className="note-line"/><span>Good things happen<br/>when you feel at home.</span></div></div></section>
}

function ServiceFeatures() {
  const states = ['Finding your next place', 'A thoughtful offer, made', 'A fresh start, in motion', 'Settled in. We’re still here.']
  const [step, setStep] = useState(0)
  useEffect(() => { const timer = setInterval(() => setStep(s => (s + 1) % states.length), 2600); return () => clearInterval(timer) }, [])
  return <section className="feature-band"><div className="feature-intro"><p className="eyebrow">THOUGHTFUL AT EVERY TURN</p><h2>From first thought<br />to <em>feels like home.</em></h2><p>Big decisions deserve personal attention. We make the process feel clear, considered, and entirely your own.</p><a className="text-link" href="#contact">How we work <ArrowUpRight size={16}/></a></div>
    <div className="journey-card"><div className="journey-top"><span>YOUR CITYSCAPE JOURNEY</span><span className="journey-live"><i/> IN GOOD HANDS</span></div><div className="journey-scene"><div className="journey-sky"/><div className="sky-sun"/><svg className="skyline" viewBox="0 0 590 230" preserveAspectRatio="xMidYMax meet" aria-hidden="true"><path d="M0 178h42v-52h34v31h27V83h48v92h31v-67h35v-39h43v106h31v-61h42v-42h48v103h33v-74h40v-38h38v112h32v-56h34v81H0z" fill="currentColor"/><path d="M0 207h590" stroke="currentColor" strokeWidth="2" opacity=".25"/></svg><div className="journey-home"><Building2 size={28} strokeWidth={1.1}/></div><div className="journey-step"><span className="step-ring"><span/></span><span>{states[step]}</span></div></div><div className="journey-progress">{states.map((s,i)=><span key={s} className={i <= step ? 'complete' : ''}/>)}</div><div className="journey-bottom"><span>PERSONAL GUIDANCE, ALL THE WAY THROUGH</span><Sparkles size={16}/></div></div>
  </section>
}

function Services() {
  return <section className="services" id="services"><div className="services-head"><div><p className="eyebrow">HERE FOR WHAT’S NEXT</p><h2>Good guidance.<br/><em>Whatever the move.</em></h2></div><p>One trusted team, from the first conversation to the moment you settle in.</p></div><div className="service-grid">{services.map(({icon:Icon,n,title,text})=><a className="service-item" href="#contact" key={n}><div className="service-top"><span>{n} / 04</span><span className="service-icon"><Icon size={20} strokeWidth={1.5}/></span></div><h3>{title}</h3><p>{text}</p><span className="service-arrow"><ArrowUpRight size={18}/></span></a>)}</div></section>
}

function Values() {
  return <section className="values"><p className="eyebrow">THE CITYSCAPE WAY</p><h2>Less pressure.<br/>More <em>perspective.</em></h2><div className="values-grid"><article><span>01</span><h3>Listen first</h3><p>Your priorities shape the search. We start by understanding what home means to you.</p></article><article><span>02</span><h3>Know the details</h3><p>Local insight and clear answers help you make decisions with your eyes open.</p></article><article><span>03</span><h3>Stay in your corner</h3><p>From the first hello to the final signature, you’ll know who’s by your side.</p></article></div><div className="values-foot"><span>YOUR MOVE, AT YOUR PACE</span><span>GOOD PEOPLE. GOOD PLACES.</span><span>HERE WHEN YOU NEED US</span></div></section>
}

function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true) }
  return <section className="contact" id="contact"><div className="contact-left"><p className="eyebrow">START WITH A CONVERSATION</p><h2>Tell us what<br />home <em>means to you.</em></h2><p>Whether you have a plan or just a feeling, we’d love to hear what you’re looking for.</p><a className="contact-email" href="mailto:hello@cityscape.example">hello@cityscape.example <ArrowUpRight size={16}/></a><span className="contact-location"><MapPin size={15}/> Serving your city and its neighborhoods</span></div><div className="contact-form-wrap">{sent ? <div className="sent-state"><span><Check size={23}/></span><p className="eyebrow">MESSAGE RECEIVED</p><h3>We’ll be in touch.</h3><p>Thanks for reaching out to Cityscape. A member of our team will get back to you soon.</p></div> : <form onSubmit={submit}><div className="form-top"><span>LET’S GET TO KNOW YOU</span><span>01 — 03</span></div><label>Your name<input required name="name" placeholder="How should we address you?"/></label><label>Email address<input required type="email" name="email" placeholder="you@example.com"/></label><label>What are you thinking about?<select defaultValue=""><option value="" disabled>Select one</option><option>Buying a home</option><option>Selling a home</option><option>Finding a rental</option><option>Property management</option><option>Just exploring</option></select></label><label>A little more (optional)<textarea name="message" rows="3" placeholder="Tell us what’s on your mind"/></label><button className="button button-dark" type="submit">Send a note <ArrowUpRight size={16}/></button><p className="form-privacy"><ShieldCheck size={13}/> Your details stay between us.</p></form>}</div></section>
}

function Footer() {
  return <footer className="footer"><div className="footer-main"><div className="footer-brand"><a href="#top" className="brand"><span className="brand-mark">C</span><span>cityscape</span></a><p>Good moves start with<br/>feeling at home.</p><span className="footer-status"><i/> HERE WHEN YOU NEED US</span></div><div className="footer-col"><span className="footer-label">EXPLORE</span><a href="#homes">Find a home</a><a href="#services">Our services</a><a href="#approach">Our approach</a></div><div className="footer-col"><span className="footer-label">SAY HELLO</span><a href="#contact">Get in touch</a><a href="mailto:hello@cityscape.example">hello@cityscape.example</a><span>Your city, your neighborhood</span></div><div className="footer-note"><span>GOOD PLACES.<br/><em>GOOD PEOPLE.</em></span><ArrowUpRight size={22}/></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} CITYSCAPE REAL ESTATE</span><span>MADE FOR THE NEXT CHAPTER</span><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></div></footer>
}

export default function App() {
  useEffect(() => { const ctx = gsap.context(() => { gsap.utils.toArray('.section-reveal, .home-card, .service-item').forEach((el, i) => gsap.from(el, { y: 28, opacity: 0, duration: .75, delay: (i % 4) * .07, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } })) }); return () => ctx.revert() }, [])
  return <><Hero/><main><div className="search-section"><SearchBar/></div><Listings/><Story/><ServiceFeatures/><Services/><Values/><Contact/></main><Footer/></>
}
