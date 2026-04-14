import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function Reports() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Reports in Salesforce' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Reports in Salesforce</h1>
            <p className="lesson-intro">
              Reports in Salesforce are analytical tools that allow you to view, filter, and analyze your data in a structured format.
            </p>

            <section>
              <h2>Types of Reports</h2>
              <ul>
                <li><strong>Tabular Reports</strong> - Simple list format</li>
                <li><strong>Matrix Reports</strong> - Group by rows and columns</li>
                <li><strong>Summary Reports</strong> - Grouped with summaries</li>
                <li><strong>Joined Reports</strong> - Multiple report blocks</li>
              </ul>
            </section>

            <section>
              <h2>Creating a Report</h2>
              <ol>
                <li>Click Reports tab</li>
                <li>Click New Report</li>
                <li>Select report type</li>
                <li>Add filters</li>
                <li>Group data</li>
                <li>Save and Run</li>
              </ol>
            </section>

            <section>
              <h2>Dashboard Components</h2>
              <p>Reports can be used to create dashboard components for visual data representation.</p>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-dashboards-in-salesforce.html">Learn about Dashboards</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}