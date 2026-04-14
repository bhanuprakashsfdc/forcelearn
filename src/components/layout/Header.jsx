import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

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

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header className="header">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link" style={{
        position: 'absolute',
        left: '-9999px',
        zIndex: 999,
        padding: '8px 16px',
        background: 'var(--color-brand)',
        color: 'white',
        textDecoration: 'none',
        borderRadius: 'var(--radius-sm)',
        top: '8px'
      }}
      onFocus={(e) => e.target.style.left = '8px'}
      onBlur={(e) => e.target.style.left = '-9999px'}
      >
        Skip to main content
      </a>
      
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            <img src="/logo.jpeg" alt="ForceLearn" />
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