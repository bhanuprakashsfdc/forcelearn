import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function CompactLayout() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Compact Layout' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Compact Layout in Salesforce</h1>
            <p className="lesson-intro">
              Compact Layout in Salesforce controls how records appear in the Salesforce mobile app, Lightning Experience, and in the Chatter feed.
            </p>

            <section>
              <h2>Key Points</h2>
              <ul>
                <li>Display key fields at a glance</li>
                <li>Mobile-optimized view</li>
                <li>First 4-6 fields visible</li>
                <li>Can have multiple layouts</li>
              </ul>
            </section>

            <section>
              <h2>Creating Compact Layout</h2>
              <ol>
                <li>Setup → Object Manager</li>
                <li>Select object</li>
                <li>Compact Layouts</li>
                <li>New</li>
                <li>Add fields</li>
                <li>Save</li>
                <li>Assign to record types</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-search-layouts-salesforce.html">Learn about Search Layouts</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}