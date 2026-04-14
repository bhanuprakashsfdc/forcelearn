import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function SelfRelationship() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Self Relationship' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>Self Relationship in Salesforce</h1>
            <p className="lesson-intro">
              A self-relationship in Salesforce is a lookup relationship that links an object to itself, allowing records to relate to other records of the same object.
            </p>

            <section>
              <h2>What is Self Relationship</h2>
              <p>A self-relationship links a record to another record of the same object. This is useful for hierarchical or grouped data structures.</p>
            </section>

            <section>
              <h2>Use Cases</h2>
              <ul>
                <li>Employee Reporting Structure (Manager-Employee)</li>
                <li>Account Hierarchies</li>
                <li>Organizational Structures</li>
              </ul>
            </section>

            <section>
              <h2>Creating Self Relationship</h2>
              <ol>
                <li>Click Gear icon → Setup</li>
                <li>Click Object Manager</li>
                <li>Select an Object</li>
                <li>Create New Field</li>
                <li>Select Lookup Relationship</li>
                <li>Select the same object as related object</li>
                <li>Configure and Save</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/junction-relationship-in-salesforce.html">Learn about Junction Relationship</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}