import { Link } from 'react-router-dom'

export default function Breadcrumb({ items = [] }) {
  if (items.length === 0) return null

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item.to ? (
              <Link to={item.to} className="breadcrumb-link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="breadcrumb-separator">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}