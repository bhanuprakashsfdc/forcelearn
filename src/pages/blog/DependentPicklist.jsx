import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function DependentPicklist() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Dependent Picklist' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>Dependent Picklist in Salesforce</h1>
            <p className="lesson-intro">
              A dependent picklist is a type of picklist that relies on another picklist's value to determine its available options.
            </p>

            <section>
              <h2>Understanding Picklists</h2>
              <p>Picklists are fields that provide a list of options for users to select from, helping standardize data entry and reduce errors.</p>
            </section>

            <section>
              <h2>What is Dependent Picklist</h2>
              <p>The values in a dependent picklist are filtered based on the selection made in the controlling picklist.</p>
            </section>

            <section>
              <h2>How Dependent Picklists Work</h2>
              <p>When you select a value in a controlling picklist, the dependent picklist updates its available options based on that selection.</p>
            </section>

            <section>
              <h2>Creating Dependent Picklist</h2>
              <ol>
                <li>Click Gear icon → Setup</li>
                <li>Click Object Manager</li>
                <li>Select Field & Relationship</li>
                <li>Click New</li>
                <li>Select Picklist</li>
                <li>Check "Use controlling checkbox"</li>
                <li>Select Controlling field</li>
                <li>Configure values</li>
                <li>Save</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-reports-in-salesforce.html">Learn about Reports</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}