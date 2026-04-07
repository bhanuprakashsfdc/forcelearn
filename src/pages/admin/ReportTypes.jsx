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

export default function ReportTypes() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/report-types" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Report Types' }
          ]} />
          <article className="lesson-content">
            <h1>Report Types</h1>
            <p className="lesson-intro">Learn how to create and manage report types to control what data appears in reports.</p>

            <section>
              <h2>What are Report Types?</h2>
              <p>Report types define which objects and fields are available in a report. They determine the structure and relationships of data you can report on.</p>
            </section>

            <section>
              <h2>Standard Report Types</h2>
              <p>Salesforce provides built-in report types for standard objects:</p>
              <ul>
                <li><strong>Accounts</strong> - Account details, relationships</li>
                <li><strong>Contacts</strong> - Contact information</li>
                <li><strong>Opportunities</strong> - Sales pipeline</li>
                <li><strong>Cases</strong> - Support cases</li>
                <li><strong>Activities</strong> - Tasks and events</li>
              </ul>
            </section>

            <section>
              <h2>Custom Report Types</h2>
              <p>Create custom report types for custom objects or unique relationships:</p>
              <ol>
                <li>Go to <strong>Setup → Report Types</strong></li>
                <li>Click <strong>New Custom Report Type</strong></li>
                <li>Select the primary object</li>
                <li>Choose related objects to include</li>
                <li>Define deployment status</li>
                <li>Save and label</li>
              </ol>
            </section>

            <section>
              <h2>Report Type Categories</h2>
              <ul>
                <li><strong>Tabular</strong> - Simple list with columns</li>
                <li><strong>Summary</strong> - Grouped data with subtotals</li>
                <li><strong>Matrix</strong> - Cross-tabular with row/column grouping</li>
              </ul>
            </section>

            <section>
              <h2>Creating a Custom Report Type</h2>
              <p>Example: Create a report type for "Projects with Tasks":</p>
              <ul>
                <li>Primary Object: Project__c</li>
                <li>Related Object: Task (via Lookup)</li>
                <li>Relationship: One-to-Many</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Report types define available objects for reporting</li>
                <li>Standard report types come with Salesforce</li>
                <li>Custom report types can include custom objects and relationships</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/field-level-security.html" className="nav-link">← Field-Level Security</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/dashboards.html" className="nav-link">Dashboards →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}