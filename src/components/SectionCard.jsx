export default function SectionCard({ id, title, children }) {
  return (
    <section id={id} className="container mb-8">
      <div className="card">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}

