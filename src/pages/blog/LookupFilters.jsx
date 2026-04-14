import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function LookupFilters() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Lookup Filters' }]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Lookup Filters in Salesforce</h1>
            <p className="lesson-intro">Lookup Filters control which records appear in lookup fields, ensuring data accuracy.</p>

            <section>
              <h2>Benefits</h2>
              <ul>
                <li>Improve data accuracy</li>
                <li>Reduce user errors</li>
                <li>Streamline search</li>
              </ul>
            </section>

            <section>
              <h2>Creating Lookup Filter</h2>
              <ol>
                <li>Setup → Object Manager</li>
                <li>Select object</li>
                <li>Find lookup field</li>
                <li>Edit Lookup Filter</li>
                <li>Define filter criteria</li>
                <li>Save</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-custom-buttons-salesforce.html">Learn about Custom Buttons</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}