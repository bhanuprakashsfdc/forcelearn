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

export default function FlowBuilder() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/flow-builder" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Flow Builder' }
          ]} />
          <article className="lesson-content">
            <h1>Flow Builder</h1>
            <p className="lesson-intro">Learn how to build powerful automations using Flow Builder, Salesforce's declarative automation tool.</p>

            <section>
              <h2>What is Flow Builder?</h2>
              <p>Flow Builder is Salesforce's point-and-click tool for building automations. It's the modern replacement for Process Builder and Workflow Rules.</p>
            </section>

            <section>
              <h2>Flow Types</h2>
              <ul>
                <li><strong>Screen Flow</strong> - Interactive flows with user interface</li>
                <li><strong>Record-Triggered Flow</strong> - Runs when a record is created/updated</li>
                <li><strong>Schedule-Triggered Flow</strong> - Runs on a schedule</li>
                <li><strong>Platform Event-Triggered Flow</strong> - Runs when an event occurs</li>
                <li><strong>Autolaunched Flow</strong> - Called from other processes</li>
              </ul>
            </section>

            <section>
              <h2>Creating a Record-Triggered Flow</h2>
              <ol>
                <li>Go to <strong>Setup → Flows</strong></li>
                <li>Click <strong>New Flow</strong></li>
                <li>Select "Record-Triggered Flow"</li>
                <li>Configure the object and trigger conditions</li>
                <li>Add elements (actions, decisions, loops)</li>
                <li>Activate the flow</li>
              </ol>
            </section>

            <section>
              <h2>Flow Elements</h2>
              <ul>
                <li><strong>Decision</strong> - Branch logic based on conditions</li>
                <li><strong>Assignment</strong> - Set variable values</li>
                <li><strong>Action</strong> - Perform operations (Create, Update, Delete)</li>
                <li><strong>Loop</strong> - Iterate through collections</li>
                <li><strong>Subflow</strong> - Call another flow</li>
              </ul>
            </section>

            <section>
              <h2>Example: Auto-Close Old Cases</h2>
              <p>Create a Flow that automatically closes cases older than 30 days:</p>
              <ul>
                <li>Trigger: Scheduled (Daily)</li>
                <li>Condition: Status != 'Closed' AND CreatedDate &lt; Last 30 Days</li>
                <li>Action: Update Status to 'Closed'</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Flow Builder is the modern declarative automation tool</li>
                <li>Multiple flow types for different use cases</li>
                <li>Build without code using point-and-click</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/validation-rules.html" className="nav-link">← Validation Rules</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/process-builder.html" className="nav-link">Process Builder →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}