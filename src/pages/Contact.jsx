import PageHeader from '../components/PageHeader'
import { useState } from 'react'
import { trackEvent } from '../utils/analytics'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => { e.preventDefault(); trackEvent('contact_form_submit'); setSent(true); setForm({ name: '', email: '', message: '' }) }
  return (
    <>
      <PageHeader title="Get in Touch" subtitle="We'd love to hear from you — recipe questions, kitchen disasters, or family stories." />
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading text-2xl text-brown-dark">Visit our kitchen</h2>
            <ul className="mt-4 space-y-3 text-brown-dark">
              <li><strong className="block text-brown/60 text-sm">Address</strong>921 Magnolia Street, Baton Rouge, LA 70802, USA</li>
              <li><strong className="block text-brown/60 text-sm">Email</strong><a href="mailto:familyrecipelegacy@gmail.com" className="text-vintage hover:underline">familyrecipelegacy@gmail.com</a></li>
              <li><strong className="block text-brown/60 text-sm">Phone</strong><a href="tel:+12255553771" className="text-vintage hover:underline">(225) 555-3771</a></li>
              <li><strong className="block text-brown/60 text-sm">Hours</strong>Mon–Fri · 9 AM – 5 PM CT</li>
            </ul>
          </div>
          <form onSubmit={submit} className="card p-6 space-y-4">
            <div>
              <label className="text-sm text-brown-dark font-medium">Name</label>
              <input required name="name" value={form.name} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-xl border border-brown-light/40 bg-white focus:outline-none focus:border-vintage" />
            </div>
            <div>
              <label className="text-sm text-brown-dark font-medium">Email</label>
              <input required type="email" name="email" value={form.email} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-xl border border-brown-light/40 bg-white focus:outline-none focus:border-vintage" />
            </div>
            <div>
              <label className="text-sm text-brown-dark font-medium">Message</label>
              <textarea required rows="5" name="message" value={form.message} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-xl border border-brown-light/40 bg-white focus:outline-none focus:border-vintage" />
            </div>
            <button className="btn btn-primary w-full">Send message</button>
            {sent && <p className="text-vintage text-sm">Thanks — we'll get back to you within 2 business days.</p>}
          </form>
        </div>
      </section>
    </>
  )
}
