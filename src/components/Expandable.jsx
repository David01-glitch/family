import { useState } from 'react'

export function ReadMore({ short, full, label = 'Read more' }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <p className="text-brown/80 leading-relaxed">{short}</p>
      <div className={`expandable ${open ? 'open' : ''}`}>
        <div>
          <p className="text-brown/80 leading-relaxed pt-3">{full}</p>
        </div>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="mt-3 text-vintage text-sm font-semibold hover:underline"
      >
        {open ? 'Show less' : label}
      </button>
    </div>
  )
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-cream2 bg-white rounded-2xl shadow-soft overflow-hidden">
      {items.map((it, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full px-5 py-4 flex justify-between items-center text-left"
          >
            <span className="font-medium text-brown-dark">{it.q}</span>
            <span className={`transition-transform ${open === i ? 'rotate-45' : ''} text-vintage text-2xl leading-none`}>+</span>
          </button>
          <div className={`expandable ${open === i ? 'open' : ''}`}>
            <div className="px-5 pb-5 text-brown/80 text-sm leading-relaxed">{it.a}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
