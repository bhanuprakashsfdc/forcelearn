import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function SFDXInstall() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'SFDX Installation' }]} />
          <article className="lesson-content">
            <span className="blog-category">Developer</span>
            <h1>How to Install Salesforce DX</h1>
            <p className="lesson-intro">Step-by-step guide to installing Salesforce CLI for Salesforce DX development.</p>

            <section>
              <h2>Prerequisites</h2>
              <ul>
                <li>Node.js 18 or later</li>
                <li>Git</li>
                <li>Salesforce Developer account</li>
              </ul>
            </section>

            <section>
              <h2>Installation Steps</h2>
              <h3>macOS/Linux</h3>
              <ol>
                <li>Install Node.js: <code>npm install -g sfdx-cli</code></li>
                <li>Verify: <code>sf --version</code></li>
              </ol>

              <h3>Windows</h3>
              <ol>
                <li>Download installer from Salesforce</li>
                <li>Run the installer</li>
                <li>Open command prompt</li>
                <li>Verify: <code>sf --version</code></li>
              </ol>
            </section>

            <section>
              <h2>Authenticating</h2>
              <ol>
                <li><code>sf org login</code></li>
                <li>Login with your credentials</li>
                <li>Name your alias</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/salesforce-dx-commands-list.html">Learn DX Commands</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}