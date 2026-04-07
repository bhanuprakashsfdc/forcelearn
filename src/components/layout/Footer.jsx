import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/admin-path', label: 'Admin Path' },
  { to: '/developer-path', label: 'Developer Path' },
  { to: '/architect-path', label: 'Architect Path' },
  { to: '/clouds', label: 'Clouds' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/projects', label: 'Projects' },
  { to: '/roadmap', label: 'Roadmap' },
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