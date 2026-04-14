import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function Workflow() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Workflow Rules' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Workflow Rules in Salesforce</h1>
            <p className="lesson-intro">
              Workflow Rules in Salesforce automate business processes by triggering actions when specific criteria are met.
            </p>

            <section>
              <h2>Workflow Actions</h2>
              <ul>
                <li><strong>Task</strong> - Assign a task to someone</li>
                <li><strong>Email Alert</strong> - Send an email</li>
                <li><strong>Field Update</strong> - Update a field value</li>
                <li><strong>Outbound Message</strong> - Send data to external system</li>
              </ul>
            </section>

            <section>
              <h2>Creating Workflow Rule</h2>
              <ol>
                <li>Setup → Workflow Rules</li>
                <li>New Rule</li>
                <li>Select object</li>
                <li>Define evaluation criteria</li>
                <li>Add workflow actions</li>
                <li>Activate</li>
              </ol>
            </section>

            <section>
              <h2>Evaluation Criteria</h2>
              <ul>
                <li>Created</li>
                <li>Created, and every time it's edited</li>
                <li>Created, and any time it's edited to meet criteria</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-process-builder-salesforce.html">Learn about Process Builder</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}