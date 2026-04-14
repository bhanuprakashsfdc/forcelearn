import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function SharingRules() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Sharing Rules' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Sharing Rules in Salesforce</h1>
            <p className="lesson-intro">
              Sharing rules are a powerful feature in Salesforce that allow you to extend the sharing capabilities beyond the standard role hierarchy.
            </p>

            <section>
              <h2>Types of Sharing Rules</h2>
              <ul>
                <li><strong>Owner-Based Sharing Rules</strong> - Grant access to records based on the owner's role or group</li>
                <li><strong>Criteria-Based Sharing Rules</strong> - Grant access based on record criteria or field values</li>
              </ul>
            </section>

            <section>
              <h2>How Sharing Rules Work</h2>
              <p>Salesforce sharing rules are defined at the object level and can be set to either Read-Only or Read/Write. These rules extend data visibility beyond the standard role hierarchy.</p>
            </section>

            <section>
              <h2>Creating Sharing Rules</h2>
              <ol>
                <li>Click Gear icon → Setup</li>
                <li>Search "Sharing Settings"</li>
                <li>Click New to create a new rule</li>
                <li>Select rule type (Owner-Based or Criteria-Based)</li>
                <li>Define the criteria and share with users</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Best Practices</h2>
              <ul>
                <li>Use OWD as your baseline</li>
                <li>Create sharing rules only when needed</li>
                <li>Regularly audit sharing rules</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/lookup-relationship-in-salesforce.html">Learn about Lookup Relationship</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}