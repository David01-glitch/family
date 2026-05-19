import { Link } from 'react-router-dom'
import { images, categories, popularRecipes, bakingRecipes, kitchenStories, testimonials, faqs } from '../data'
import { ReadMore, Accordion } from '../components/Expandable'
import { useState } from 'react'
import { trackEvent } from '../utils/analytics'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Popular />
      <Baking />
      <Stories />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <ContactSection />
    </>
  )
}

function Hero() {
  return (
    <section className="relative">
      <div className="container-x grid lg:grid-cols-2 gap-10 py-14 sm:py-20 items-center">
        <div>
          <span className="inline-block text-xs uppercase tracking-widest text-vintage font-semibold">A Family Cookbook, Online</span>
          <h1 className="heading mt-3">Recipes worth passing down — one Sunday dinner at a time.</h1>
          <p className="subheading mt-4">Traditional American comfort food, Southern classics, baked memories, and the kitchen stories that go with them. Cooked, tested, and loved across four generations of our family.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/recipes" className="btn btn-primary">Browse Recipes</Link>
            <Link to="/blog" className="btn btn-ghost">Read the Stories</Link>
          </div>
          <div className="mt-8 flex gap-6 text-sm text-brown/80">
            <div><strong className="block text-2xl font-heading text-brown-dark">200+</strong>Family recipes</div>
            <div><strong className="block text-2xl font-heading text-brown-dark">4</strong>Generations</div>
            <div><strong className="block text-2xl font-heading text-brown-dark">52</strong>Years cooking</div>
          </div>
        </div>
        <div className="relative">
          <img src={images.hero1} alt="Vintage family kitchen with fresh baked bread" loading="eager" className="rounded-3xl shadow-soft w-full h-[420px] object-cover" />
          <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-soft max-w-xs">
            <p className="text-sm text-brown-dark"><strong className="font-heading">"Cooking is love made visible."</strong></p>
            <p className="text-xs text-brown/70 mt-1">— A note from Grandma Ruth's recipe box</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Categories() {
  return (
    <section className="section bg-cream2/40">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading">Featured Recipe Categories</h2>
          <p className="subheading mt-3 mx-auto">Whether you're feeding a family or just craving the food you grew up on, there's a place to start.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {categories.map((c) => (
            <Link to={`/category/${c.slug}`} key={c.slug} className="card hover:shadow-lg transition-shadow group">
              <img src={c.img} alt={c.name} loading="lazy" className="w-full h-44 object-cover group-hover:scale-[1.02] transition-transform duration-500" />
              <div className="p-5">
                <h3 className="font-heading text-xl text-brown-dark">{c.name}</h3>
                <p className="text-sm text-brown/70 mt-1">{c.desc}</p>
                <span className="mt-3 inline-block text-vintage text-sm font-semibold">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Popular() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="heading">Popular Family Recipes</h2>
            <p className="subheading mt-2">Tried, tested, and on heavy rotation in our own kitchen.</p>
          </div>
          <Link to="/recipes" className="text-vintage font-semibold hover:underline">View all recipes →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {popularRecipes.map((r) => (
            <article key={r.id} className="card flex flex-col">
              <img src={r.img} alt={r.title} loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex gap-3 text-xs text-brown/60 mb-2"><span>⏱ {r.time}</span><span>· Serves {r.servings}</span></div>
                <h3 className="font-heading text-xl text-brown-dark">{r.title}</h3>
                <div className="mt-2 flex-1">
                  <ReadMore short={r.excerpt} full={r.full} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Baking() {
  return (
    <section className="section bg-cream2/40">
      <div className="container-x grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="heading">Baking & Desserts</h2>
          <p className="subheading mt-3">From porch-cooled pies to brown-buttered cookies, our sweetest traditions live here.</p>
          <Link to="/category/baking-recipes" className="btn btn-primary mt-6">All baking recipes</Link>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-3 gap-5">
          {bakingRecipes.map((b) => (
            <article key={b.id} className="card">
              <img src={b.img} alt={b.title} loading="lazy" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-heading text-lg text-brown-dark">{b.title}</h3>
                <ReadMore short={b.excerpt} full={b.full} label="See recipe" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stories() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading">Kitchen Memories</h2>
          <p className="subheading mt-3 mx-auto">Stories from our family's table — and the cooks who set it.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {kitchenStories.map((s) => (
            <article key={s.id} className="card">
              <img src={s.img} alt={s.title} loading="lazy" className="w-full h-52 object-cover" />
              <div className="p-5">
                <h3 className="font-heading text-xl text-brown-dark">{s.title}</h3>
                <div className="mt-2">
                  <ReadMore short={s.excerpt} full={s.full} label="Read the story" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section bg-brown-dark text-cream">
      <div className="container-x">
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-cream text-center">From Our Community</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-cream/5 border border-cream/10 rounded-2xl p-6">
              <blockquote className="text-cream/90 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img src={t.img} alt={t.name} loading="lazy" className="w-10 h-10 rounded-full object-cover" />
                <span className="text-cream font-medium">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const submit = (e) => { e.preventDefault(); if (!email) return; trackEvent('newsletter_signup', { method: 'home' }); setDone(true); setEmail('') }
  return (
    <section className="section">
      <div className="container-x">
        <div className="bg-cream2 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="heading">A new recipe in your inbox every Tuesday</h2>
          <p className="subheading mt-3 mx-auto">Join 18,000+ home cooks who get our weekly recipe, kitchen tip, and a little story from Magnolia Street.</p>
          <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full border border-brown-light/40 bg-white text-brown-dark focus:outline-none focus:border-vintage"
            />
            <button className="btn btn-primary">Subscribe</button>
          </form>
          {done && <p className="text-vintage mt-3 text-sm">Welcome to the table — check your inbox!</p>}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="section bg-cream2/40">
      <div className="container-x max-w-3xl">
        <h2 className="heading text-center">Frequently Asked Questions</h2>
        <p className="subheading mt-3 text-center mx-auto">Everything you might wonder about cooking from this site.</p>
        <div className="mt-8"><Accordion items={faqs} /></div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="section">
      <div className="container-x grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="heading">Stop by the kitchen</h2>
          <p className="subheading mt-3">Have a question, a recipe to share, or just want to say hello? We read every note.</p>
          <ul className="mt-6 space-y-2 text-brown-dark">
            <li>📍 921 Magnolia Street, Baton Rouge, LA 70802</li>
            <li>✉️ <a href="mailto:familyrecipelegacy@gmail.com" className="text-vintage hover:underline">familyrecipelegacy@gmail.com</a></li>
            <li>📞 <a href="tel:+12255553771" className="text-vintage hover:underline">(225) 555-3771</a></li>
          </ul>
          <Link to="/contact" className="btn btn-primary mt-6">Send a message</Link>
        </div>
        <img src={images.k2} alt="Inside our family kitchen" loading="lazy" className="rounded-3xl shadow-soft w-full h-[380px] object-cover" />
      </div>
    </section>
  )
}
