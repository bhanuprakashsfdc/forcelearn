import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function FreezeDeactivate() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Freeze vs Deactivate' }]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>Difference Between Freeze and Deactivate in Salesforce</h1>
            <p className="lesson-intro">Understanding when to freeze vs deactivate user accounts in Salesforce.</p>

            <section>
              <h2>Freeze User</h2>
              <p>Freezing prevents a user from logging in while preserving their access and data. The user cannot access the system but remains in the org.</p>
              <ul>
                <li>Login blocked</li>
                <li>Data intact</li>
                <li>Can unfreeze anytime</li>
              </ul>
            </section>

            <section>
              <h2>Deactivate User</h2>
              <p>Deactivating removes all login access permanently. The user record remains but cannot log in.</p>
              <ul>
                <li>No login access</li>
                <li>May reassign records</li>
                <li>More permanent</li>
              </ul>
            </section>

            <section>
              <h2>When to Use Each</h2>
              <ul>
                <li><strong>Freeze</strong>: Temporary leave, investigation</li>
                <li><strong>Deactivate</strong>: Employee departure, role change</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-field-level-security-salesforce.html">Learn about Field Level Security</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}