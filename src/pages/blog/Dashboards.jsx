import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function Dashboards() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Dashboards' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Dashboards in Salesforce</h1>
            <p className="lesson-intro">
              Dashboards in Salesforce are visual representations of data that pull information from reports to provide real-time insights.
            </p>

            <section>
              <h2>Key Components</h2>
              <ul>
                <li><strong>Charts</strong> - Visual representations like bar, line, pie</li>
                <li><strong>Tables</strong> - Data in rows and columns</li>
                <li><strong>Gauges</strong> - Metrics with thresholds</li>
                <li><strong>Metrics</strong> - Standalone numbers</li>
              </ul>
            </section>

            <section>
              <h2>Benefits</h2>
              <ul>
                <li>Real-Time Insights</li>
                <li>Improved Productivity</li>
                <li>Enhanced Decision-Making</li>
                <li>Team Collaboration</li>
              </ul>
            </section>

            <section>
              <h2>Creating a Dashboard</h2>
              <ol>
                <li>Click Dashboards tab</li>
                <li>Click New Dashboard</li>
                <li>Choose a template</li>
                <li>Add components from reports</li>
                <li>Save</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-dynamic-dashboard-in-salesforce.html">Learn about Dynamic Dashboard</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}