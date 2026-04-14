import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function SFDXCommands() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Salesforce DX Commands' }]} />
          <article className="lesson-content">
            <span className="blog-category">Developer</span>
            <h1>Salesforce DX Commands List</h1>
            <p className="lesson-intro">Essential Salesforce CLI commands for developers working with Salesforce DX.</p>

            <section>
              <h2>Org Commands</h2>
              <ul>
                <li><code>sf org list</code> - List all orgs</li>
                <li><code>sf org create</code> - Create scratch org</li>
                <li><code>sf org open</code> - Open org in browser</li>
                <li><code>sf org display</code> - Show org info</li>
              </ul>
            </section>

            <section>
              <h2>Source Commands</h2>
              <ul>
                <li><code>sf source pull</code> - Pull from org</li>
                <li><code>sf source push</code> - Push to org</li>
                <li><code>sf source convert</code> - Convert to/from MDAPI</li>
              </ul>
            </section>

            <section>
              <h2>Apex Commands</h2>
              <ul>
                <li><code>sf apex run</code> - Execute anonymous Apex</li>
                <li><code>sf apex test</code> - Run Apex tests</li>
                <li><code>sf apex class create</code> - Create Apex class</li>
              </ul>
            </section>

            <section>
              <h2>Data Commands</h2>
              <ul>
                <li><code>sf data query</code> - Run SOQL query</li>
                <li><code>sf data record</code> - CRUD operations</li>
                <li><code>sf data tree</code> - Export/import data</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/how-to-install-salesforce-dx.html">Learn Salesforce DX Installation</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}