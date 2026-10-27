import { useEffect, useState } from 'react'
const lines = ['Initializing HogallalaOS...', 'Loading developer modules...', 'Mounting /home/harsh ... [ OK ]', 'Access granted.']
export default function Boot({ onDone }: { onDone: () => void }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (n >= lines.length) { const t = setTimeout(onDone, 350); return () => clearTimeout(t) }
    const t = setTimeout(() => setN(n + 1), 380); return () => clearTimeout(t)
  }, [n, onDone])
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') onDone() }
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [onDone])
  return (
    <div className="boot" role="dialog" aria-label="Boot sequence">
      {lines.slice(0, n).map((l, i) => <p key={i} className={i === 3 ? 'g' : ''}>{l}</p>)}
      <span className="caret" />
      <button className="skip" onClick={onDone}>Skip intro (Esc)</button>
    </div>
  )
}
