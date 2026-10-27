import { useRef, useState } from 'react'
import { profile, skills, projects } from '../data'
// Safe by design: input is only matched against this fixed table. Nothing is ever executed.
const cmds: Record<string, () => string[]> = {
  help: () => ['Available: help, about, skills, projects, contact, whoami, clear'],
  about: () => profile.about,
  whoami: () => [`${profile.handle} — Linux enthusiast, cybersecurity learner, aspiring engineer`],
  skills: () => skills.map(s => `[${s.status.padEnd(8)}] ${s.name}`),
  projects: () => projects.map(p => `${p.title}${p.sample ? ' (sample)' : ''} → ${p.repo}`),
  contact: () => [`email:    ${profile.email}`, `github:   ${profile.github}`, `linkedin: ${profile.linkedin}`],
}
type Row = { cmd?: string; out: string[] }
export default function Terminal() {
  const [rows, setRows] = useState<Row[]>([{ out: ['HogallalaOS lab shell. Type "help".'] }])
  const [v, setV] = useState('')
  const end = useRef<HTMLDivElement>(null)
  const run = (e: React.FormEvent) => {
    e.preventDefault()
    const c = v.trim().toLowerCase(); setV('')
    if (!c) return
    if (c === 'clear') return setRows([])
    const f = cmds[c]
    setRows(r => [...r, { cmd: c, out: f ? f() : [`bash: ${c}: command not found. Try "help".`] }])
    setTimeout(() => end.current?.scrollIntoView({ block: 'nearest' }), 0)
  }
  return (
    <div className="term" onClick={() => document.getElementById('lab-in')?.focus()}>
      <div className="term-bar"><i /><i /><i /><span>guest@hogallala: ~</span></div>
      <div className="term-body" aria-live="polite">
        {rows.map((r, i) => (
          <div key={i}>
            {r.cmd && <p><span className="g">guest@hogallala</span>:~$ {r.cmd}</p>}
            {r.out.map((o, j) => <p key={j} className={o.startsWith('bash:') ? 'r' : ''}>{o}</p>)}
          </div>
        ))}
        <form onSubmit={run} className="prompt">
          <label htmlFor="lab-in" className="g">guest@hogallala<span className="w">:~$</span></label>
          <input id="lab-in" value={v} onChange={e => setV(e.target.value)} autoComplete="off" spellCheck={false} autoCapitalize="off" />
        </form>
        <div ref={end} />
      </div>
      <div className="chips">{Object.keys(cmds).map(c => <button key={c} onClick={() => { setV(c); document.getElementById('lab-in')?.focus() }}>{c}</button>)}</div>
    </div>
  )
}
