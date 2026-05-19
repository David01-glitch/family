import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!localStorage.getItem('frl-cookie')) setShow(true)
  }, [])
  if (!show) return null
  const accept = () => { localStorage.setItem('frl-cookie', '1'); setShow(false) }
  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-4 md:max-w-md z-50 bg-white shadow-soft rounded-2xl p-4 border border-cream2">
      <p className="text-sm text-brown-dark">
        We use cookies to improve your experience and analyze site traffic. Read our <a href="/privacy" className="underline text-vintage">Privacy Policy</a>.
      </p>
      <div className="mt-3 flex gap-2 justify-end">
        <button onClick={accept} className="btn btn-primary text-sm">Accept</button>
      </div>
    </div>
  )
}
