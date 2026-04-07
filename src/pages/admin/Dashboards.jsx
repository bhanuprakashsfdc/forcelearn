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

export default function Dashboards() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/dashboards" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Dashboards' }
          ]} />
          <article className="lesson-content">
            <h1>Dashboards</h1>
            <p className="lesson-intro">Learn how to create visual dashboards to monitor key business metrics.</p>

            <section>
              <h2>What are Dashboards?</h2>
              <p>Dashboards are visual representations of data from reports. They display multiple metrics in a single view, making it easy to monitor business health at a glance.</p>
            </section>

            <section>
              <h2>Dashboard Components</h2>
              <ul>
                <li><strong>Charts</strong> - Visual representations (bar, line, pie, etc.)</li>
                <li><strong>Tables</strong> - Tabular data from reports</li>
                <li><strong>Metrics</strong> - Single value displays</li>
                <li><strong>Gauges</strong> - Visual progress indicators</li>
                <li><strong>Rich Text</strong> - Custom text and images</li>
              </ul>
            </section>

            <section>
              <h2>Creating a Dashboard</h2>
              <ol>
                <li>Go to the <strong>Dashboards</strong> tab in Lightning</li>
                <li>Click <strong>New Dashboard</strong></li>
                <li>Enter a name and description</li>
                <li>Click <strong>Add Component</strong></li>
                <li>Select a source report</li>
                <li>Choose chart type and configure</li>
                <li>Arrange and resize components</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Dashboard Filters</h2>
              <p>Add dynamic filtering to dashboards:</p>
              <ul>
                <li><strong>Dashboard Filter</strong> - Filter all components at once</li>
                <li><strong>Component Filter</strong> - Filter specific charts</li>
                <li><strong>Relative Date Filter</strong> - Show data relative to today</li>
              </ul>
            </section>

            <section>
              <h2>Dashboard Folders</h2>
              <p>Organize dashboards into folders:</p>
              <ul>
                <li>Create folders in Setup → Dashboards</li>
                <li>Set folder visibility (Public, Private, Shared)</li>
                <li>Assign users to folders</li>
              </ul>
            </section>

            <section>
              <h2>Dashboard Best Practices</h2>
              <ul>
                <li>Keep dashboards simple and focused</li>
                <li>Use consistent color schemes</li>
                <li>Place most important metrics at top</li>
                <li>Add context with titles and descriptions</li>
                <li>Use drill-down for detailed data</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Dashboards visualize report data</li>
                <li>Include charts, tables, metrics, and gauges</li>
                <li>Use filters for dynamic data views</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/report-types.html" className="nav-link">← Report Types</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/analytics.html" className="nav-link">Analytics →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}