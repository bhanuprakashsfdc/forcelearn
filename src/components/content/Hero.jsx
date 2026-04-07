import { Link } from 'react-router-dom'

export default function Hero({ 
  title = "Learn Salesforce Step-by-Step", 
  subtitle = "Master Salesforce through structured learning paths. From admin basics to architect certification — all free, all static.",
  ctaLinks = [] 
}) {
  const defaultCtas = [
    { to: '/admin-path', label: 'Start Admin Path', primary: true },
    { to: '/clouds', label: 'Explore Clouds', primary: false },
  ]

  const buttons = ctaLinks.length > 0 ? ctaLinks : defaultCtas

  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-actions">
          {buttons.map((cta, i) => (
            <Link 
              key={i} 
              to={cta.to} 
              className={`btn ${cta.primary ? 'btn-primary' : 'btn-secondary'}`}
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}