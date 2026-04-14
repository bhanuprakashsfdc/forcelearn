import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function SearchLayouts() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Search Layouts' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What are Search Layouts in Salesforce</h1>
            <p className="lesson-intro">
              Search Layouts in Salesforce control what fields appear in search results, list views, and lookup dialogs.
            </p>

            <section>
              <h2>Types of Search Layouts</h2>
              <ul>
                <li><strong>Search Results</strong> - Fields shown in search results</li>
                <li><strong>List Views</strong> - Columns in list views</li>
                <li><strong>Lookup Dialogs</strong> - Fields in lookup search</li>
                <li><strong>Search Filter Fields</strong> - Filter options in search</li>
              </ul>
            </section>

            <section>
              <h2>Editing Search Layouts</h2>
              <ol>
                <li>Setup → Object Manager</li>
                <li>Select object</li>
                <li>Search Layouts</li>
                <li>Edit desired layout</li>
                <li>Add/remove fields</li>
                <li>Save</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/how-to-create-tabs-salesforce.html">Learn about Tabs</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}