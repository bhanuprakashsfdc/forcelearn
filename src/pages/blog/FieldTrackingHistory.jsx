import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function FieldTrackingHistory() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Field Tracking History' }]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Field Tracking History in Salesforce</h1>
            <p className="lesson-intro">Track changes to specific fields over time for audit and compliance purposes.</p>

            <section>
              <h2>What is Field History Tracking</h2>
              <p>Field History Tracking records when field values change, capturing old and new values, plus who made the change.</p>
            </section>

            <section>
              <h2>Enabling Field History</h2>
              <ol>
                <li>Setup → Object Manager</li>
                <li>Select object</li>
                <li>Click Field History Tracking</li>
                <li>Select fields to track</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Best Practices</h2>
              <ul>
                <li>Track only essential fields</li>
                <li>Review history regularly</li>
                <li>Use for compliance audits</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/how-to-track-login-history-salesforce.html">Learn about Login History</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}