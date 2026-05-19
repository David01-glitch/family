import PageHeader from '../components/PageHeader'
import { images } from '../data'
import { ReadMore } from '../components/Expandable'

export default function About() {
  return (
    <>
      <PageHeader title="About Family Recipe Legacy" subtitle="A small Baton Rouge kitchen, four generations of recipes, and a stubborn belief that home cooking is worth preserving." />
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <img src={images.k1} alt="Our family kitchen" loading="lazy" className="rounded-3xl shadow-soft h-[420px] w-full object-cover" />
          <div>
            <h2 className="heading">Our story</h2>
            <p className="mt-4 text-brown/80 leading-relaxed">Family Recipe Legacy started as a shoebox of index cards on top of my grandmother's refrigerator. Some were written in pencil, some in her looping cursive, and a few had splatters of vanilla and bacon grease that proved they had been used a thousand times.</p>
            <div className="mt-4">
              <ReadMore short="When she passed in 2018, my mother and I sat at the kitchen table and decided those cards needed a bigger home." full="We spent two years cooking through every recipe, photographing them in the same kitchen they were born in, and writing down the stories behind each one. This site is the result. Every recipe has been tested at least three times by home cooks — not chefs — using ingredients you can find at any grocery store in America. If a recipe came from a relative, we kept their name on it. If we adapted it, we said so. The goal is not perfection; the goal is preservation." />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream2/40">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { t: 'Tested in a home kitchen', d: 'Every recipe is cooked at least three times before it lands on the site — no studio lighting, no test chefs.' },
            { t: 'Written for real cooks', d: 'Plain language, common ingredients, and honest timings. No mystery jargon.' },
            { t: 'Family-first, always', d: 'We credit the relative each recipe came from. If a dish has a story, we tell it.' }
          ].map((v) => (
            <div key={v.t} className="card p-6">
              <h3 className="font-heading text-xl text-brown-dark">{v.t}</h3>
              <p className="text-brown/80 mt-2 text-sm leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
