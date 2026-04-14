import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function ScopingRules() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Scoping Rules' }]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Scoping Rules in Salesforce</h1>
            <p className="lesson-intro">Scoping Rules define a subset of data visible to specific users without affecting sharing settings.</p>

            <section>
              <h2>Purpose</h2>
              <p>Scoping Rules filter record visibility based on field values, giving users access to relevant data sets.</p>
            </section>

            <section>
              <h2>Creating Scoping Rule</h2>
              <ol>
                <li>Setup → Scoping Rules</li>
                <li>New Rule</li>
                <li>Select object</li>
                <li>Define filter criteria</li>
                <li>Assign to profiles</li>
                <li>Activate</li>
              </ol>
            </section>

            <section>
              <h2>Best Practices</h2>
              <ul>
                <li>Use with Multi-Factor Authentication</li>
                <li>Test thoroughly before activating</li>
                <li>Document rule rationale</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-lookup-filters-salesforce.html">Learn about Lookup Filters</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}