import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function ValidationRules() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Validation Rules' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Validation Rules in Salesforce</h1>
            <p className="lesson-intro">
              Validation Rules in Salesforce ensure that data entered meets specific standards before it can be saved.
            </p>

            <section>
              <h2>Purpose</h2>
              <p>Validation rules verify that data entered by users meets your organization's standards before allowing the record to be saved.</p>
            </section>

            <section>
              <h2>Creating Validation Rule</h2>
              <ol>
                <li>Setup → Validation Rules</li>
                <li>New</li>
                <li>Select object</li>
                <li>Enter rule name</li>
                <li>Define error condition formula</li>
                <li>Enter error message</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Common Examples</h2>
              <ul>
                <li>Required fields not blank</li>
                <li>Email format validation</li>
                <li>Phone number format</li>
                <li>Date ranges</li>
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