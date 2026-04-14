import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function CustomLinks() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Custom Links' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Custom Links in Salesforce</h1>
            <p className="lesson-intro">
              Custom Links in Salesforce are user-defined links that can be added to record pages for quick navigation.
            </p>

            <section>
              <h2>Types of Custom Links</h2>
              <ul>
                <li><strong>Internal Links</strong> - Navigate within Salesforce</li>
                <li><strong>External Links</strong> - Navigate to outside URLs</li>
                <li><strong>Function Links</strong> - Execute JavaScript</li>
              </ul>
            </section>

            <section>
              <h2>Creating Custom Links</h2>
              <ol>
                <li>Setup → Object Manager</li>
                <li>Select object</li>
                <li>Buttons, Links, Actions</li>
                <li>New Button or Link</li>
                <li>Configure behavior</li>
                <li>Add to page layout</li>
              </ol>
            </section>

            <section>
              <h2>Best Practices</h2>
              <ul>
                <li>Use descriptive labels</li>
                <li>Test thoroughly</li>
                <li>Consider mobile users</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-task-in-salesforce.html">Learn about Tasks</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}