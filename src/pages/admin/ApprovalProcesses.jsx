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

export default function ApprovalProcesses() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/approval-processes" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Approval Processes' }
          ]} />
          <article className="lesson-content">
            <h1>Approval Processes</h1>
            <p className="lesson-intro">Learn how to create automated approval workflows for records in Salesforce.</p>

            <section>
              <h2>What are Approval Processes?</h2>
              <p>Approval processes automate the process of submitting records for approval and routing them to approvers based on defined criteria.</p>
            </section>

            <section>
              <h2>Approval Process Components</h2>
              <ul>
                <li><strong>Entry Criteria</strong> - When a record enters the process</li>
                <li><strong>Initial Submission Actions</strong> - Actions when submitted</li>
                <li><strong>Approval Steps</strong> - Sequential approval stages</li>
                <li><strong>Final Approval Actions</strong> - Actions when approved</li>
                <li><strong>Final Rejection Actions</strong> - Actions when rejected</li>
              </ul>
            </section>

            <section>
              <h2>Creating an Approval Process</h2>
              <ol>
                <li>Go to <strong>Setup → Approval Processes</strong></li>
                <li>Select the object (e.g., Opportunity)</li>
                <li>Click <strong>Create New Approval Process</strong></li>
                <li>Enter process details</li>
                <li>Define entry criteria</li>
                <li>Add approval steps with approvers</li>
                <li>Configure actions for each step</li>
                <li>Activate</li>
              </ol>
            </section>

            <section>
              <h2>Approval Actions</h2>
              <ul>
                <li><strong>Field Update</strong> - Change field values</li>
                <li><strong>Email Alert</strong> - Send email notifications</li>
                <li><strong>Task</strong> - Create a task for the approver</li>
                <li><strong>Flow</strong> - Trigger a flow</li>
                <li><strong>Process Builder</strong> - Invoke a process</li>
              </ul>
            </section>

            <section>
              <h2>Approver Selection Methods</h2>
              <ul>
                <li><strong>Manual</strong> - User selects approver at submission</li>
                <li><strong>Automated</strong> - Manager, role, or specific user</li>
                <li><strong>Dynamic</strong> - Based on record field</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Approval processes automate record approval workflows</li>
                <li>Configure entry criteria, steps, and actions</li>
                <li>Approvers can be manual or automated</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/process-builder.html" className="nav-link">← Process Builder</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/sharing-settings.html" className="nav-link">Sharing Settings →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}