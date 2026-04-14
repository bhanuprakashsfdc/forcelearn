import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function EmailAlerts() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Email Alerts' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What are Email Alerts in Salesforce</h1>
            <p className="lesson-intro">
              An email alert in Salesforce is an automated message sent to users, contacts, or other recipients triggered by specific events.
            </p>

            <section>
              <h2>Key Benefits</h2>
              <ul>
                <li>Increased Customer Satisfaction</li>
                <li>Automated Communication</li>
                <li>Improved Efficiency</li>
                <li>Timely Notifications</li>
              </ul>
            </section>

            <section>
              <h2>How Email Alerts Work</h2>
              <p>Email alerts operate on a trigger-and-action mechanism. When specific conditions are met, an automated email is sent.</p>
            </section>

            <section>
              <h2>Creating Email Alert</h2>
              <ol>
                <li>Setup → Email Alerts</li>
                <li>New Email Alert</li>
                <li>Select object</li>
                <li>Enter email details</li>
                <li>Select recipients</li>
                <li>Save</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-record-types-salesforce.html">Learn about Record Types</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}