import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function CustomButtons() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Custom Buttons' }]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Custom Buttons in Salesforce</h1>
            <p className="lesson-intro">Custom Buttons provide quick actions to streamline user workflows.</p>

            <section>
              <h2>Button Types</h2>
              <ul>
                <li><strong>Detail Page Button</strong> - On record page</li>
                <li><strong>List Button</strong> - In list views</li>
                <li><strong>Custom Link</strong> - Similar to buttons</li>
              </ul>
            </section>

            <section>
              <h2>Creating Custom Button</h2>
              <ol>
                <li>Setup → Object Manager</li>
                <li>Select object</li>
                <li>Buttons, Links, Actions</li>
                <li>New Button or Link</li>
                <li>Choose display behavior</li>
                <li>Add to page layout</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-compact-layout-salesforce.html">Learn about Compact Layout</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}