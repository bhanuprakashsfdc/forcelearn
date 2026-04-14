import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function DynamicForms() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Dynamic Forms' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Dynamic Forms in Salesforce</h1>
            <p className="lesson-intro">
              Dynamic Forms is a Salesforce feature that enables sections and fields to be displayed conditionally on record pages.
            </p>

            <section>
              <h2>Benefits</h2>
              <ul>
                <li>Conditional field display</li>
                <li>Improved user experience</li>
                <li>Reduced visual clutter</li>
                <li>Better mobile experience</li>
              </ul>
            </section>

            <section>
              <h2>Enabling Dynamic Forms</h2>
              <ol>
                <li>Lightning App Builder</li>
                <li>Create/Edit Record Page</li>
                <li>Activate Dynamic Forms</li>
                <li>Add field sections</li>
                <li>Set visibility conditions</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Use Cases</h2>
              <ul>
                <li>Show fields based on record type</li>
                <li>Display based on user profile</li>
                <li>Stage-dependent fields</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-custom-links-salesforce.html">Learn about Custom Links</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}