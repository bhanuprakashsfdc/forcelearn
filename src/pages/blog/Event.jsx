import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function EventBlog() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Event' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Event in Salesforce</h1>
            <p className="lesson-intro">
              Events in Salesforce represent time-based activities like meetings, calls, or appointments.
            </p>

            <section>
              <h2>Event Fields</h2>
              <ul>
                <li><strong>Subject</strong> - Short description</li>
                <li><strong>Start Date/Time</strong> - When it starts</li>
                <li><strong>End Date/Time</strong> - When it ends</li>
                <li><strong>Location</strong> - Where it's held</li>
                <li><strong>Assigned To</strong> - Owner</li>
              </ul>
            </section>

            <section>
              <h2>Creating an Event</h2>
              <ol>
                <li>Click Calendar tab</li>
                <li>Click New Event</li>
                <li>Fill in details</li>
                <li>Add invitees</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Events vs Tasks</h2>
              <p>Events have a specific time duration, while tasks represent to-do items with due dates.</p>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-field-tracking-history-salesforce.html">Learn about Field Tracking</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}