import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function StorageUsage() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Storage Usage' }]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Storage Usage in Salesforce</h1>
            <p className="lesson-intro">Understanding how Salesforce stores data and managing your storage allocation effectively.</p>

            <section>
              <h2>Storage Types</h2>
              <ul>
                <li><strong>Data Storage</strong> - Records in standard and custom objects</li>
                <li><strong>File Storage</strong> - Attachments, documents, images</li>
                <li><strong>Big Object Storage</strong> - Historical data</li>
              </ul>
            </section>

            <section>
              <h2>Checking Storage</h2>
              <ol>
                <li>Setup → Storage Usage</li>
                <li>View storage by object</li>
                <li>Identify largest consumers</li>
              </ol>
            </section>

            <section>
              <h2>Freeing Up Storage</h2>
              <ul>
                <li>Delete old records</li>
                <li>Archive data to big objects</li>
                <li>Remove unused attachments</li>
                <li>Compress data</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-scoping-rules-salesforce.html">Learn about Scoping Rules</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}