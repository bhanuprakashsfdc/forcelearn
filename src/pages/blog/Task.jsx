import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function TaskBlog() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Task' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Task in Salesforce</h1>
            <p className="lesson-intro">
              Tasks in Salesforce are trackable activities that help users stay organized and manage their day-to-day work.
            </p>

            <section>
              <h2>Task Fields</h2>
              <ul>
                <li><strong>Subject</strong> - Short description</li>
                <li><strong>Due Date</strong> - When it's due</li>
                <li><strong>Priority</strong> - High or Low</li>
                <li><strong>Status</strong> - Not Started, In Progress, Completed</li>
                <li><strong>Assigned To</strong> - Owner of the task</li>
              </ul>
            </section>

            <section>
              <h2>Creating a Task</h2>
              <ol>
                <li>Navigate to a record</li>
                <li>Click New Task</li>
                <li>Fill in details</li>
                <li>Assign to user</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Automating Tasks</h2>
              <p>Tasks can be automated using Process Builder, Flow, or Workflow Rules.</p>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-event-salesforce.html">Learn about Events</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}