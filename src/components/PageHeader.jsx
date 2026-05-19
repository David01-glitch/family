export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-cream2 border-b border-cream2">
      <div className="container-x py-14 sm:py-20 text-center">
        <h1 className="heading">{title}</h1>
        {subtitle && <p className="subheading mt-3 mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
