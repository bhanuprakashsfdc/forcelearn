import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function ForceComLogins() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Force.com Logins' }]} />
          <article className="lesson-content">
            <span className="blog-category">Chrome Extension</span>
            <h1>Force.com Logins Chrome Extension</h1>
            <p className="lesson-intro">Easily manage multiple Salesforce org credentials with Force.com Logins extension.</p>

            <section>
              <h2>What is Force.com Logins</h2>
              <p>A Chrome extension that lets Salesforce developers quickly switch between multiple orgs without remembering passwords.</p>
            </section>

            <section>
              <h2>Features</h2>
              <ul>
                <li>Store multiple credentials</li>
                <li>One-click login</li>
                <li>Organize by environment</li>
                <li>Production and sandbox separation</li>
              </ul>
            </section>

            <section>
              <h2>Installation</h2>
              <ol>
                <li>Open Chrome Web Store</li>
                <li>Search "Force.com Logins"</li>
                <li>Click Add to Chrome</li>
                <li>Pin to toolbar</li>
              </ol>
            </section>

            <section>
              <h2>Usage</h2>
              <ol>
                <li>Click extension icon</li>
                <li>Add new login</li>
                <li>Enter org details</li>
                <li>Click to login</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/salesforce-simplified-chrome-extension.html">Try Salesforce Simplified</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}