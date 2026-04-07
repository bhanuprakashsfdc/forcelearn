import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'

const sidebarModules = [
  { id: 1, title: '1. Salesforce Basics', lessons: [
    { id: 'admin-1-1', title: 'What is Salesforce?', slug: '/admin-path/salesforce-basics' },
    { id: 'admin-1-2', title: 'CRM Concepts', slug: '/admin-path/crm-concepts' },
    { id: 'admin-1-3', title: 'Navigation & Setup', slug: '/admin-path/navigation-setup' },
  ]},
  { id: 2, title: '2. Objects & Fields', lessons: [
    { id: 'admin-2-1', title: 'Standard Objects', slug: '/admin-path/standard-objects' },
    { id: 'admin-2-2', title: 'Custom Objects', slug: '/admin-path/custom-objects' },
    { id: 'admin-2-3', title: 'Field Types', slug: '/admin-path/field-types' },
    { id: 'admin-2-4', title: 'Relationships', slug: '/admin-path/relationships' },
  ]},
  { id: 3, title: '3. Data Management', lessons: [
    { id: 'admin-3-1', title: 'Import/Export', slug: '/admin-path/import-export' },
    { id: 'admin-3-2', title: 'Data Loader', slug: '/admin-path/data-loader' },
    { id: 'admin-3-3', title: 'Validation Rules', slug: '/admin-path/validation-rules' },
  ]},
  { id: 4, title: '4. Automation', lessons: [
    { id: 'admin-4-1', title: 'Flow Builder', slug: '/admin-path/flow-builder' },
    { id: 'admin-4-2', title: 'Process Builder', slug: '/admin-path/process-builder' },
    { id: 'admin-4-3', title: 'Approval Processes', slug: '/admin-path/approval-processes' },
  ]},
  { id: 5, title: '5. Security', lessons: [
    { id: 'admin-5-1', title: 'Sharing Settings', slug: '/admin-path/sharing-settings' },
    { id: 'admin-5-2', title: 'Profiles & Permissions', slug: '/admin-path/profiles-permissions' },
    { id: 'admin-5-3', title: 'Field-Level Security', slug: '/admin-path/field-level-security' },
  ]},
  { id: 6, title: '6. Reporting', lessons: [
    { id: 'admin-6-1', title: 'Report Types', slug: '/admin-path/report-types' },
    { id: 'admin-6-2', title: 'Dashboards', slug: '/admin-path/dashboards' },
    { id: 'admin-6-3', title: 'Analytics', slug: '/admin-path/analytics' },
  ]}
]

export default function Analytics() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/analytics" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Analytics' }
          ]} />
          <article className="lesson-content">
            <h1>Analytics</h1>
            <p className="lesson-intro">Learn about Salesforce's advanced analytics capabilities for data-driven decision making.</p>

            <section>
              <h2>Salesforce Analytics Overview</h2>
              <p>Salesforce offers multiple analytics tools:</p>
              <ul>
                <li><strong>Salesforce Reports & Dashboards</strong> - Basic analytics</li>
                <li><strong>Einstein Analytics</strong> - AI-powered analytics</li>
                <li><strong>Tableau</strong> - Advanced data visualization</li>
                <li><strong>Data Cloud</strong> - Unified data platform</li>
              </ul>
            </section>

            <section>
              <h2>Einstein Analytics</h2>
              <p>Einstein brings AI to analytics:</p>
              <ul>
                <li><strong>Einstein Discovery</strong> - AI-powered insights</li>
                <li><strong>Einstein Prediction Builder</strong> - Build ML predictions</li>
                <li><strong>AI-powered recommendations</strong> - Next best actions</li>
              </ul>
            </section>

            <section>
              <h2>Sales Cloud Analytics</h2>
              <p>Key sales metrics to track:</p>
              <ul>
                <li><strong>Pipeline Value</strong> - Total opportunity value</li>
                <li><strong>Win Rate</strong> - Percentage of closed-won deals</li>
                <li><strong>Average Deal Size</strong> - Mean opportunity value</li>
                <li><strong>Sales Cycle Length</strong> - Average time to close</li>
                <li><strong>Quota Attainment</strong> - Target vs actual</li>
              </ul>
            </section>

            <section>
              <h2>Service Cloud Analytics</h2>
              <p>Key service metrics:</p>
              <ul>
                <li><strong>Case Volume</strong> - Number of cases by type</li>
                <li><strong>Resolution Time</strong> - Average time to resolve</li>
                <li><strong>First Contact Resolution</strong> - Cases resolved on first contact</li>
                <li><strong>Customer Satisfaction (CSAT)</strong> - Satisfaction scores</li>
                <li><strong>Service Level Agreement (SLA)</strong> - Compliance tracking</li>
              </ul>
            </section>

            <section>
              <h2>Analytics Best Practices</h2>
              <ul>
                <li>Start with clear business questions</li>
                <li>Use consistent data definitions</li>
                <li>Build dashboards for specific audiences</li>
                <li>Schedule regular data review meetings</li>
                <li>Share insights with stakeholders</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Salesforce offers multiple analytics tools</li>
                <li>Einstein brings AI-powered insights</li>
                <li>Track key metrics for sales and service</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/dashboards.html" className="nav-link">← Dashboards</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path.html" className="nav-link">Back to Admin Path →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}