import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, Mail, Sparkles, Terminal as TermIcon, ExternalLink, Trophy } from 'lucide-react'
import Boot from './components/Boot'
import Terminal from './components/Terminal'
import { profile, skills, projects, timeline, Status } from './data'

const label: Record<Status, string> = { interest: 'Interest', learning: 'Learning', verified: 'Verified' }

function Magnetic({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const move = (e: React.MouseEvent) => {
    const el = ref.current; if (!el || reduce) return
    const b = el.getBoundingClientRect()
    const x = e.clientX - b.left, y = e.clientY - b.top
    el.style.setProperty('--mx', `${x}px`); el.style.setProperty('--my', `${y}px`)
    el.style.transform = `translate(${(x / b.width - .5) * 8}px, ${(y / b.height - .5) * 8}px)`
  }
  return <div ref={ref} className={className} onMouseMove={move} onMouseLeave={() => { if (ref.current) ref.current.style.transform = '' }}>{children}</div>
}

function HeroTerminal() {
  const mx = useMotionValue(0), my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 80, damping: 15 }), sy = useSpring(my, { stiffness: 80, damping: 15 })
  const ry = useTransform(sx, [-1, 1], [-10, 10]), rx = useTransform(sy, [-1, 1], [8, -8])
  const reduce = useReducedMotion()
  return (
    <div className="stage" onMouseMove={e => { if (reduce) return; const b = e.currentTarget.getBoundingClientRect(); mx.set(((e.clientX - b.left) / b.width) * 2 - 1); my.set(((e.clientY - b.top) / b.height) * 2 - 1) }}>
      <motion.pre className="hero-term" style={{ rotateX: rx, rotateY: ry }} aria-hidden="true">{`$ uname -a
HogallalaOS 1.0 x86_64
$ whoami
${profile.handle}
$ ls ~/interests
linux/  security/  redhat/
blender/  optimization/
$ ./learn --never-stop
[##########>.....] running`}</motion.pre>
    </div>
  )
}

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="sec"><h2>{title}</h2>{children}</section>
)

export default function App() {
  const [booted, setBooted] = useState(() => sessionStorage.getItem('booted') === '1')
  const [fx, setFx] = useState(true)
  const [open, setOpen] = useState<string | null>(null)
  const cur = useRef<HTMLDivElement>(null)
  const done = () => { sessionStorage.setItem('booted', '1'); setBooted(true) }
  useEffect(() => { document.body.classList.toggle('fx-off', !fx) }, [fx])
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const m = (e: MouseEvent) => { if (cur.current) cur.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)` }
    window.addEventListener('mousemove', m); return () => window.removeEventListener('mousemove', m)
  }, [])
  const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: .5 } }

  return (
    <>
      {!booted && <Boot onDone={done} />}
      <div className="grain" aria-hidden="true" /><div className="grid-bg" aria-hidden="true" /><div className="cursor" ref={cur} aria-hidden="true" />
      <header className="nav">
        <a href="#top" className="logo">&gt;_ hogallala</a>
        <nav aria-label="Primary">
          {['about', 'arsenal', 'projects', 'lab', 'journey', 'contact'].map(s => <a key={s} href={`#${s}`}>{s}</a>)}
          <button onClick={() => setFx(!fx)} aria-pressed={!fx} title="Toggle visual effects"><Sparkles size={16} /> FX {fx ? 'on' : 'off'}</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <p className="g mono">guest@hogallala:~$ ./start</p>
            <h1 className="glitch"><span>I don't just use the system.</span> <em>I understand it.</em></h1>
            <p className="lead"><b>{profile.name}</b>: Linux enthusiast, cybersecurity learner and aspiring engineer. I take systems apart to see how they work, then make them faster.</p>
            <div className="btns"><a className="btn pri" href="#projects">Explore my work</a><a className="btn" href="#contact">Contact me</a></div>
          </div>
          <HeroTerminal />
        </section>

        <Section id="about" title="About me">
          <motion.div {...reveal} className="about">
            <div>{profile.about.map((p, i) => <p key={i}>{p}</p>)}</div>
            <ul className="tags">{profile.interests.map(i => <li key={i}>{i}</li>)}</ul>
          </motion.div>
        </Section>

        <Section id="arsenal" title="Tech arsenal">
          <p className="note"><span className="dot interest" /> Interest <span className="dot learning" /> Learning <span className="dot verified" /> Verified. No fake percentages: a skill is only “verified” when I can show it.</p>
          <div className="skills">
            {skills.map(s => (
              <button key={s.name} className={`skill ${s.status} ${open === s.name ? 'open' : ''}`} aria-expanded={open === s.name} onClick={() => setOpen(open === s.name ? null : s.name)}>
                <span className="dot" /><strong>{s.name}</strong><small>{label[s.status]}</small>
                {open === s.name && <motion.span className="sn" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{s.note}</motion.span>}
              </button>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Featured projects">
          <div className="cards">
            {projects.map(p => (
              <Magnetic key={p.title} className="card">
                {p.sample && <span className="badge">Sample: edit in data.ts</span>}
                <h3>{p.title}</h3><p>{p.desc}</p>
                <ul className="tags">{p.stack.map(t => <li key={t}>{t}</li>)}</ul>
                <div className="links">
                  <a href={p.repo} target="_blank" rel="noreferrer"><Github size={16} /> Repository</a>
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</a>}
                </div>
              </Magnetic>
            ))}
          </div>
        </Section>

        <Section id="lab" title="My lab">
          <p className="note"><TermIcon size={14} /> A simulated shell with a fixed set of safe commands. Try <code>help</code>.</p>
          <Terminal />
        </Section>

        <Section id="journey" title="Experience & learning">
          <ol className="tl">{timeline.map(t => <motion.li key={t.title} {...reveal}><time>{t.when}</time><h3>{t.title}</h3><p>{t.body}</p></motion.li>)}</ol>
        </Section>

        <Section id="contact" title="Contact">
          <p className="lead">Want to talk Linux, security or a project? Reach out.</p>
          <div className="contact">
            <a href={`mailto:${profile.email}`}><Mail /> {profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github /> github.com/{profile.handle}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          </div>
        </Section>
      </main>
      <footer className="foot"><span className="g">guest@hogallala</span>:~$ exit &nbsp;·&nbsp; © {new Date().getFullYear()} {profile.name} &nbsp;·&nbsp; built with React, Vite & curiosity</footer>
    </>
  )
}
