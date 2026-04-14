import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function MailMergeTemplates() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Mail Merge Templates' }]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>Mail Merge Templates in Salesforce</h1>
            <p className="lesson-intro">Mail Merge Templates allow you to create personalized documents by merging Salesforce data with Microsoft Word or PDF templates.</p>

            <section>
              <h2>What is Mail Merge</h2>
              <p>Mail merge combines data from Salesforce with template documents to create personalized letters, labels, or envelopes.</p>
            </section>

            <section>
              <h2>Creating Mail Merge Template</h2>
              <ol>
                <li>Install Mail Merge App from AppExchange (optional)</li>
                <li>Create template in Word/Google Docs</li>
                <li>Add merge fields</li>
                <li>Upload to Salesforce</li>
                <li>Test template</li>
              </ol>
            </section>

            <section>
              <h2>Use Cases</h2>
              <ul>
                <li>Customer letters</li>
                <li>Mailing labels</li>
                <li>Contracts</li>
                <li>Quotes and proposals</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-email-alerts-in-salesforce.html">Learn about Email Alerts</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}