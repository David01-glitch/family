import PageHeader from '../components/PageHeader'
import { blogPosts } from '../data'
import { ReadMore } from '../components/Expandable'

export default function Blog() {
  return (
    <>
      <PageHeader title="The Blog" subtitle="Kitchen tips, cookbook reviews, pantry guides, and the occasional family story." />
      <section className="section">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogPosts.map((p) => (
            <article key={p.id} className="card">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-52 object-cover" />
              <div className="p-5">
                <span className="text-xs text-brown/60">{p.date}</span>
                <h2 className="font-heading text-xl text-brown-dark mt-1">{p.title}</h2>
                <div className="mt-2"><ReadMore short={p.excerpt} full={p.full} /></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
