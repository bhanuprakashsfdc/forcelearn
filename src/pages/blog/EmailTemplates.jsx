import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function EmailTemplates() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Lightning Email Templates' }]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>Lightning Email Templates in Salesforce</h1>
            <p className="lesson-intro">Lightning Email Templates provide a modern way to create and manage email communications in Salesforce.</p>

            <section>
              <h2>Types of Email Templates</h2>
              <ul>
                <li><strong>Text</strong> - Plain text emails</li>
                <li><strong>HTML</strong> - Custom styled emails</li>
                <li><strong>Visualforce</strong> - Highly customized templates</li>
                <li><strong>Custom</strong> - Leveraging merge fields</li>
              </ul>
            </section>

            <section>
              <h2>Creating Email Template</h2>
              <ol>
                <li>Setup → Email Templates</li>
                <li>New Template</li>
                <li>Choose template type</li>
                <li>Enter subject and body</li>
                <li>Add merge fields</li>
                <li>Save</li>
              </ol>
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