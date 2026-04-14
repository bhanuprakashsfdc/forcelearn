import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function SalesforceSimplified() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Salesforce Simplified' }]} />
          <article className="lesson-content">
            <span className="blog-category">Chrome Extension</span>
            <h1>Salesforce Simplified Chrome Extension</h1>
            <p className="lesson-intro">A cleaner, simplified interface for Salesforce users.</p>

            <section>
              <h2>What is Salesforce Simplified</h2>
              <p>A Chrome extension that removes clutter and simplifies the Salesforce interface for a better user experience.</p>
            </section>

            <section>
              <h2>Features</h2>
              <ul>
                <li>Cleaner page layouts</li>
                <li>Remove ads/promos</li>
                <li>Simplified navigation</li>
                <li>Better mobile view</li>
              </ul>
            </section>

            <section>
              <h2>Installation</h2>
              <ol>
                <li>Open Chrome Web Store</li>
                <li>Search "Salesforce Simplified"</li>
                <li>Click Add to Chrome</li>
                <li>Enable in Salesforce</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/salesforce-dx-commands-list.html">Learn Salesforce DX</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}