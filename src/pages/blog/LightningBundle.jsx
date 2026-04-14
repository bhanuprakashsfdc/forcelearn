import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function LightningBundle() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Lightning Bundle' }]} />
          <article className="lesson-content">
            <span className="blog-category">Lightning</span>
            <h1>Lightning Bundle in Salesforce</h1>
            <p className="lesson-intro">Understanding Lightning Component Bundle - the collection of resources that make up a Lightning component.</p>

            <section>
              <h2>What is Lightning Bundle</h2>
              <p>A Lightning Bundle contains all the resources needed for a Lightning component, including the component itself, controller, helper, style, and more.</p>
            </section>

            <section>
              <h2>Bundle Components</h2>
              <ul>
                <li><strong>.cmp</strong> - Component markup</li>
                <li><strong>Controller.js</strong> - Client-side logic</li>
                <li><strong>Helper.js</strong> - Shared functions</li>
                <li><strong>CSS</strong> - Styling</li>
                <li><strong>SVG</strong> - Custom icons</li>
                <li><strong>Documentation</strong> - Description</li>
              </ul>
            </section>

            <section>
              <h2>Creating a Bundle</h2>
              <ol>
                <li>Developer Console → File → New Lightning Component</li>
                <li>Enter name and description</li>
                <li>Add component markup</li>
                <li>Add JavaScript controller</li>
                <li>Style as needed</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/lwc-tutorial.html">Learn Lightning Web Components</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}