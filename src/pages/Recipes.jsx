import PageHeader from '../components/PageHeader'
import { popularRecipes, bakingRecipes, categories } from '../data'
import { ReadMore } from '../components/Expandable'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Recipes() {
  const all = [...popularRecipes, ...bakingRecipes]
  const [q, setQ] = useState('')
  const filtered = all.filter((r) => r.title.toLowerCase().includes(q.toLowerCase()))
  return (
    <>
      <PageHeader title="All Recipes" subtitle="Browse our complete collection of family recipes — sorted, searchable, and ready for tonight's dinner." />
      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap gap-3 justify-between items-center mb-8">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search recipes..." className="px-4 py-3 rounded-full border border-brown-light/40 bg-white w-full sm:w-80 focus:outline-none focus:border-vintage" />
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 4).map((c) => (
                <Link key={c.slug} to={`/category/${c.slug}`} className="text-sm px-3 py-1.5 rounded-full bg-cream2 text-brown-dark hover:bg-gold/40">{c.name}</Link>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <article key={r.title} className="card">
                <img src={r.img} alt={r.title} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="font-heading text-xl text-brown-dark">{r.title}</h3>
                  <div className="mt-2"><ReadMore short={r.excerpt} full={r.full} /></div>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-brown/70 mt-8">No recipes match "{q}". Try another search.</p>}
        </div>
      </section>
    </>
  )
}
