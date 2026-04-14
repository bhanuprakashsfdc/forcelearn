import { Link } from 'react-router-dom'

const footerSections = [
  {
    title: 'Learning Paths',
    links: [
      { to: '/admin-path.html', label: 'Admin Path' },
      { to: '/developer-path.html', label: 'Developer Path' },
      { to: '/architect-path.html', label: 'Architect Path' },
      { to: '/roadmap.html', label: 'Roadmap' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { to: '/blogs.html', label: 'Blog' },
      { to: '/projects.html', label: 'Projects' },
      { to: '/clouds.html', label: 'Clouds' },
    ]
  },
  {
    title: 'Company',
    links: [
      { to: '/about.html', label: 'About' },
      { to: '/contact.html', label: 'Contact' },
      { to: '/privacy-policy.html', label: 'Privacy Policy' },
      { to: '/terms-of-service.html', label: 'Terms of Service' },
    ]
  }
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              ForceLearn
            </Link>
            <p className="footer-desc">
              Free Salesforce learning platform. From admin to architect - all in one place.
            </p>
            <div className="footer-social">
              <a href="https://github.com/bhanuprakashsfdc/forcelearn" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.894 1.845 1.235 1.08 1.74 2.805 1.23 3.495 1.035.105-.805.42-1.23.765-1.515-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {footerSections.map(section => (
            <div key={section.title} className="footer-section">
              <h3 className="footer-title">{section.title}</h3>
              <ul className="footer-list">
                {section.links.map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 ForceLearn. Built for the Salesforce community.
          </p>
        </div>
      </div>
    </footer>
  )
}