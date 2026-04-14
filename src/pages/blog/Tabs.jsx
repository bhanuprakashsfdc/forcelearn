import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function Tabs() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Tabs' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>How to Create Tabs in Salesforce</h1>
            <p className="lesson-intro">
              Tabs in Salesforce provide navigation to different objects and areas within the Salesforce interface.
            </p>

            <section>
              <h2>Creating a Custom Tab</h2>
              <ol>
                <li>Setup → Tabs</li>
                <li>Click New</li>
                <li>Select object (or Visualforce)</li>
                <li>Choose tab style</li>
                <li>Set visibility</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Types of Tabs</h2>
              <ul>
                <li><strong>Custom Object Tabs</strong> - For custom objects</li>
                <li><strong>Visualforce Tabs</strong> - For custom pages</li>
                <li><strong>Web Tabs</strong> - External URLs</li>
              </ul>
            </section>

            <section>
              <h2>Best Practices</h2>
              <ul>
                <li>Keep navigation simple</li>
                <li>Use consistent naming</li>
                <li>Set appropriate visibility</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-dynamic-forms-in-salesforce.html">Learn about Dynamic Forms</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}