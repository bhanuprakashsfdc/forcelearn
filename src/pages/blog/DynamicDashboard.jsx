import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function DynamicDashboard() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Dynamic Dashboard' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Dynamic Dashboard in Salesforce</h1>
            <p className="lesson-intro">
              Dynamic Dashboards in Salesforce allow users to view data specific to their roles or permissions without requiring additional configuration.
            </p>

            <section>
              <h2>Understanding Dynamic Dashboards</h2>
              <p>Dynamic Dashboards personalize data visibility based on the viewer's profile, role, or territories.</p>
            </section>

            <section>
              <h2>How to Create</h2>
              <ol>
                <li>Click Dashboards tab</li>
                <li>Click New Dashboard</li>
                <li>Enable "Dynamic Dashboard"</li>
                <li>Select visibility options</li>
                <li>Add components</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Use Cases</h2>
              <ul>
                <li>Role-based data viewing</li>
                <li>Territory-specific dashboards</li>
                <li>Personalized sales views</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-bucketing-reports-in-salesforce.html">Learn about Bucketing Reports</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}