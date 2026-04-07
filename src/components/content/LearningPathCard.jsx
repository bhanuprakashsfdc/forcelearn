import { Link } from 'react-router-dom'

export default function LearningPathCard({ 
  title, 
  description, 
  icon, 
  meta,
  badges = [],
  to = '#',
  modules = []
}) {
  const displayBadges = badges.length > 0 ? badges : modules

  return (
    <div className="path-card">
      <div className="path-card-header">
        {icon && <span className="path-card-icon">{icon}</span>}
        <h3 className="path-card-title">{title}</h3>
      </div>
      {meta && <p className="path-card-meta">{meta}</p>}
      {description && <p className="card-desc">{description}</p>}
      {displayBadges.length > 0 && (
        <div className="path-card-modules">
          {displayBadges.map((badge, i) => (
            <span key={i} className="badge">{badge}</span>
          ))}
        </div>
      )}
      <Link to={to} className="card-link">
        Start Learning →
      </Link>
    </div>
  )
}