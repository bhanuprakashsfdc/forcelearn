import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function ProcessBuilder() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Process Builder' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Process Builder in Salesforce</h1>
            <p className="lesson-intro">
              Process Builder in Salesforce is a powerful automation tool that allows you to build complex business processes with a visual interface.
            </p>

            <section>
              <h2>Key Features</h2>
              <ul>
                <li>Point-and-click interface</li>
                <li>Multiple triggering events</li>
                <li>Immediate and scheduled actions</li>
                <li>Process can update related records</li>
              </ul>
            </section>

            <section>
              <h2>Creating a Process</h2>
              <ol>
                <li>Setup → Process Builder</li>
                <li>New → Process</li>
                <li>Add triggering object</li>
                <li>Define criteria</li>
                <li>Add actions</li>
                <li>Activate</li>
              </ol>
            </section>

            <section>
              <h2>Process Builder vs Workflow</h2>
              <p>Process Builder is the modern replacement for Workflow Rules, offering more capabilities and a visual interface.</p>
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