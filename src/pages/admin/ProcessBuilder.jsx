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
  ]}
]

export default function ProcessBuilder() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/process-builder" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Process Builder' }
          ]} />
          <article className="lesson-content">
            <h1>Process Builder</h1>
            <p className="lesson-intro">Learn how to use Process Builder for complex automation scenarios.</p>

            <section>
              <h2>What is Process Builder?</h2>
              <p>Process Builder is a drag-and-drop tool for building automated processes. While Flow is now recommended for new development, Process Builder still works for existing processes.</p>
              <p><strong>Note:</strong> Salesforce recommends using Flow for new automations.</p>
            </section>

            <section>
              <h2>When to Use Process Builder</h2>
              <ul>
                <li>Complex processes with multiple criteria</li>
                <li>When you need to update related records</li>
                <li>Creating records based on triggers</li>
                <li>Invoking Apex or flows</li>
              </ul>
            </section>

            <section>
              <h2>Creating a Process</h2>
              <ol>
                <li>Go to <strong>Setup → Process Builder</strong></li>
                <li>Click <strong>New</strong></li>
                <li>Enter name and description</li>
                <li>Choose "the process starts when" option</li>
                <li>Add criteria and actions</li>
                <li>Activate</li>
              </ol>
            </section>

            <section>
              <h2>Components</h2>
              <ul>
                <li><strong>Criteria</strong> - Define when the process runs</li>
                <li><strong>Immediate Actions</strong> - Execute right away</li>
                <li><strong>Scheduled Actions</strong> - Execute at a specific time</li>
                <li><strong>Reziable Actions</strong> - Wait for an event before continuing</li>
              </ul>
            </section>

            <section>
              <h2>Migrating to Flow</h2>
              <p>Salesforce provides tools to migrate Process Builder to Flow:</p>
              <ul>
                <li>Use the "Migrate to Flow" button in Process Builder</li>
                <li>Test thoroughly after migration</li>
                <li>Keep Process Builder active until Flow is validated</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Process Builder is being replaced by Flow</li>
                <li>Still works for existing implementations</li>
                <li>Use Flow for new development</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/flow-builder.html" className="nav-link">← Flow Builder</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/approval-processes.html" className="nav-link">Approval Processes →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}