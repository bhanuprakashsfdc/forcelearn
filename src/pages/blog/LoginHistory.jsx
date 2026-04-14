import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function LoginHistory() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Login History' }]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>How to Track Login History in Salesforce</h1>
            <p className="lesson-intro">Monitor user login activity for security and compliance reasons.</p>

            <section>
              <h2>What is Login History</h2>
              <p>Login History captures every login attempt including successful and failed attempts, IP addresses, and browser info.</p>
            </section>

            <section>
              <h2>Viewing Login History</h2>
              <ol>
                <li>Setup → Login History</li>
                <li>View recent logins</li>
                <li>Filter by user, date</li>
                <li>Export for analysis</li>
              </ol>
            </section>

            <section>
              <h2>Security Monitoring</h2>
              <ul>
                <li>Identify unauthorized access</li>
                <li>Track suspicious IPs</li>
                <li>Review failed login attempts</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-field-level-security-salesforce.html">Learn about Field Level Security</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}