import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function MasterDetailRelationship() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Master-Detail Relationship' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>Master-Detail Relationship in Salesforce</h1>
            <p className="lesson-intro">
              A Master-Detail Relationship in Salesforce is a special type of relationship that creates a tightly coupled bond between two objects.
            </p>

            <section>
              <h2>Key Characteristics</h2>
              <ul>
                <li><strong>Hierarchical Structure</strong> - Master controls the detail object</li>
                <li><strong>Ownership Inheritance</strong> - Detail inherits ownership from master</li>
                <li><strong>Cascade Delete</strong> - Deleting master deletes all details</li>
                <li><strong>Roll-Up Summary Fields</strong> - Perform calculations on details</li>
              </ul>
            </section>

            <section>
              <h2>Comparison with Lookup</h2>
              <p>Unlike Lookup Relationship, Master-Detail enforces strict rules. The detail object cannot exist without the master.</p>
            </section>

            <section>
              <h2>Creating a Master-Detail Relationship</h2>
              <ol>
                <li>Click Gear icon → Setup</li>
                <li>Click Object Manager</li>
                <li>Select Fields & Relationships</li>
                <li>Create New Field</li>
                <li>Select Master-Detail Relationship</li>
                <li>Select Related Object</li>
                <li>Configure and Save</li>
              </ol>
            </section>

            <section>
              <h2>Use Cases</h2>
              <ul>
                <li>Sales and Opportunities</li>
                <li>Projects and Tasks</li>
                <li>Custom Objects with parent-child relationship</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/self-relationship-in-salesforce.html">Learn about Self Relationship</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}