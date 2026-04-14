import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function LookupRelationship() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Lookup Relationship' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>Lookup Relationship in Salesforce</h1>
            <p className="lesson-intro">
              A Lookup Relationship in Salesforce is a type of relationship that links two objects together, allowing you to associate one object with another.
            </p>

            <section>
              <h2>When to Use Lookup Relationship</h2>
              <ul>
                <li>When the related record may or may not be present</li>
                <li>For reporting flexibility</li>
                <li>When sharing records across multiple objects</li>
              </ul>
            </section>

            <section>
              <h2>Creating a Lookup Relationship</h2>
              <ol>
                <li>Click Gear icon → Setup</li>
                <li>Click Object Manager</li>
                <li>Select an object</li>
                <li>Go to Fields & Relationships</li>
                <li>Create New Relationship Field</li>
                <li>Choose Lookup Relationship</li>
                <li>Select Related Object</li>
                <li>Fill details and Save</li>
              </ol>
            </section>

            <section>
              <h2>Lookup Relationship Features</h2>
              <ul>
                <li><strong>Record Access</strong> - Can influence record access</li>
                <li><strong>Lookup Filters</strong> - Restrict related records</li>
                <li><strong>Optional/Required</strong> - Control if lookup is mandatory</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/master-detail-relationship-in-salesforce.html">Learn about Master-Detail Relationship</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}