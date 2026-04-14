import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function SecurityToken() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Reset Security Token' }]} />
          <article className="lesson-content">
            <span className="blog-category">Security</span>
            <h1>How to Reset Security Token in Salesforce</h1>
            <p className="lesson-intro">Reset your security token when you need to access Salesforce via API or third-party tools.</p>

            <section>
              <h2>What is Security Token</h2>
              <p>A security token is an extra string of characters added to your password when logging in from untrusted IPs.</p>
            </section>

            <section>
              <h2>When to Reset</h2>
              <ul>
                <li>Lost your token</li>
                <li>New device/location</li>
                <li>Security concern</li>
                <li>After password change</li>
              </ul>
            </section>

            <section>
              <h2>How to Reset</h2>
              <ol>
                <li>Click avatar → Settings</li>
                <li>Click "Reset Security Token" in sidebar</li>
                <li>Click "Reset Security Token" button</li>
                <li>Check your email for new token</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/salesforce-security-guide.html">Learn about Salesforce Security</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}