import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function OWD() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'OWD in Salesforce' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is OWD in Salesforce</h1>
            <p className="lesson-intro">
              OWD stands for Organization-Wide Default. It is the baseline security setting that controls the default level of access users have to records they do not own.
            </p>

            <section>
              <h2>Why OWD Matters</h2>
              <p>OWD is essential because it governs data visibility across the entire organization. It is particularly important for companies that need to manage large teams, various user roles, or departments where sensitive information must be protected.</p>
              <p>OWD ensures that data is only accessible to those who should see it.</p>
            </section>

            <section>
              <h2>Types of OWD Settings</h2>
              <ul>
                <li><strong>Private</strong> - Only record owners and users above them in the role hierarchy can view or edit the record</li>
                <li><strong>Public Read Only</strong> - All users can view records but only owners can edit</li>
                <li><strong>Public Read/Write</strong> - All users can view and edit records</li>
              </ul>
            </section>

            <section>
              <h2>How to Configure OWD</h2>
              <ol>
                <li>Go to Setup in Salesforce</li>
                <li>In the Quick Find box, type "Sharing Settings"</li>
                <li>Scroll down to the OWD settings</li>
                <li>Choose the default access levels for each object</li>
                <li>Click Save</li>
              </ol>
            </section>

            <section>
              <h2>Best Practices</h2>
              <p>Start with the most restrictive OWD settings and then open up access through sharing rules, role hierarchy, or manual sharing as needed.</p>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-sharing-rules-in-salesforce.html">Learn about Sharing Rules</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}