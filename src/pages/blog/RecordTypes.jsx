import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function RecordTypes() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Record Types' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Record Types in Salesforce</h1>
            <p className="lesson-intro">
              Record Types in Salesforce allow you to offer different business processes, page layouts, and picklist values for different user groups.
            </p>

            <section>
              <h2>Why Use Record Types</h2>
              <ul>
                <li>Different page layouts for different teams</li>
                <li>Different picklist values per record type</li>
                <li>Different business processes</li>
                <li>Tailored user experience</li>
              </ul>
            </section>

            <section>
              <h2>Creating Record Type</h2>
              <ol>
                <li>Setup → Object Manager</li>
                <li>Select object</li>
                <li>Click Record Types</li>
                <li>New</li>
                <li>Enter details</li>
                <li>Assign to profiles</li>
                <li>Assign page layouts</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Best Practice</h2>
              <p>Create Record Types based on business processes rather than user roles for better maintainability.</p>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-validation-rules-salesforce.html">Learn about Validation Rules</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}