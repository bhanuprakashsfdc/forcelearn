import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function FieldLevelSecurity() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Field Level Security' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Field Level Security in Salesforce</h1>
            <p className="lesson-intro">
              Field Level Security in Salesforce controls which profiles can view or edit specific fields on an object.
            </p>

            <section>
              <h2>Purpose</h2>
              <p>Field Level Security ensures that sensitive fields are only accessible to authorized users, providing an additional layer of security.</p>
            </section>

            <section>
              <h2>Setting Field Level Security</h2>
              <ol>
                <li>Setup → Object Manager</li>
                <li>Select object</li>
                <li>Click Field Level Security</li>
                <li>Click on field</li>
                <li>Check/uncheck visibility for profiles</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Best Practices</h2>
              <ul>
                <li>Restrict sensitive data fields</li>
                <li>Use permission sets for field access</li>
                <li>Review security regularly</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-compact-layout-salesforce.html">Learn about Compact Layout</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}