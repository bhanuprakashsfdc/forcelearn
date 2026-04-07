import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/admin-path.html', label: 'Admin Path' },
  { to: '/developer-path.html', label: 'Developer Path' },
  { to: '/architect-path.html', label: 'Architect Path' },
  { to: '/clouds.html', label: 'Clouds' },
  { to: '/blogs.html', label: 'Blogs' },
  { to: '/projects.html', label: 'Projects' },
  { to: '/roadmap.html', label: 'Roadmap' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            Force<span>Learn</span>
          </Link>
          
          <nav className={`nav ${mobileOpen ? 'nav-open' : ''}`}>
            {navLinks.map(link => (
              <Link 
                key={link.to} 
                to={link.to} 
                className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`hamburger ${mobileOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  )
}