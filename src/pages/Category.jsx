import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { categories, popularRecipes, bakingRecipes } from '../data'
import { ReadMore } from '../components/Expandable'

export default function Category() {
  const { slug } = useParams()
  const cat = categories.find((c) => c.slug === slug)
  if (!cat) {
    return (
      <>
        <PageHeader title="Category not found" subtitle="The category you're looking for doesn't exist yet." />
        <div className="container-x section text-center">
          <Link to="/recipes" className="btn btn-primary">Browse all recipes</Link>
        </div>
      </>
    )
  }
  const recipes = slug === 'baking-recipes' ? bakingRecipes : popularRecipes
  return (
    <>
      <PageHeader title={cat.name} subtitle={cat.desc} />
      <section className="section">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((r) => (
              <article key={r.id} className="card">
                <img src={r.img} alt={r.title} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="font-heading text-xl text-brown-dark">{r.title}</h3>
                  <div className="mt-2"><ReadMore short={r.excerpt} full={r.full} /></div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/recipes" className="btn btn-ghost">← Back to all recipes</Link>
          </div>
        </div>
      </section>
    </>
  )
}
