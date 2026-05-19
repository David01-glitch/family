import PageHeader from '../components/PageHeader'
import { testimonials, images } from '../data'

export default function Community() {
  return (
    <>
      <PageHeader title="Our Community" subtitle="Home cooks across the country swapping recipes, stories, and the occasional secret ingredient." />
      <section className="section">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="card p-6">
              <blockquote className="text-brown-dark leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img src={t.img} alt={t.name} loading="lazy" className="w-12 h-12 rounded-full object-cover" />
                <span className="font-medium text-brown-dark">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="section bg-cream2/40">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <img src={images.k3} alt="Community potluck" loading="lazy" className="rounded-3xl shadow-soft h-[380px] w-full object-cover" />
          <div>
            <h2 className="heading">Share your family recipe</h2>
            <p className="subheading mt-3">Every Friday we feature a recipe submitted by a reader. Send us yours — with the story behind it — and we may publish it on the site (with full credit, of course).</p>
            <a href="mailto:familyrecipelegacy@gmail.com" className="btn btn-primary mt-6">Submit a recipe</a>
          </div>
        </div>
      </section>
    </>
  )
}
