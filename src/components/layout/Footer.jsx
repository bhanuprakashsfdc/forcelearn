import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/admin-path.html', label: 'Admin Path' },
  { to: '/developer-path.html', label: 'Developer Path' },
  { to: '/architect-path.html', label: 'Architect Path' },
  { to: '/clouds.html', label: 'Clouds' },
  { to: '/blogs.html', label: 'Blogs' },
  { to: '/projects.html', label: 'Projects' },
  { to: '/roadmap.html', label: 'Roadmap' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-links">
            {footerLinks.map(link => (
              <Link key={link.to} to={link.to} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="footer-copyright">
            © 2026 ForceLearn. Built for the Salesforce community.
          </p>
        </div>
      </div>
    </footer>
  )
}