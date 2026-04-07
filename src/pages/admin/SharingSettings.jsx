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
  ]}
]

export default function SharingSettings() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/sharing-settings" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Sharing Settings' }
          ]} />
          <article className="lesson-content">
            <h1>Sharing Settings</h1>
            <p className="lesson-intro">Learn how to control record access through Salesforce's sharing model.</p>

            <section>
              <h2>Salesforce Sharing Model</h2>
              <p>The sharing model controls which users can see and edit which records. Key components:</p>
              <ul>
                <li><strong>Organization-Wide Defaults (OWD)</strong> - Base level of access</li>
                <li><strong>Role Hierarchy</strong> - Provides access based on position</li>
                <li><strong>Sharing Rules</strong> - Exceptions to OWD</li>
                <li><strong>Manual Sharing</strong> - Record-level sharing by users</li>
              </ul>
            </section>

            <section>
              <h2>Organization-Wide Defaults</h2>
              <p>Set the baseline access for each object:</p>
              <ul>
                <li><strong>Public Read/Write</strong> - Everyone can see and edit</li>
                <li><strong>Public Read Only</strong> - Everyone can see, only owner can edit</li>
                <li><strong>Private</strong> - Only owner can see and edit</li>
                <li><strong>Controlled by Parent</strong> - For master-detail relationships</li>
              </ul>
            </section>

            <section>
              <h2>Sharing Rules</h2>
              <p>Create exceptions to OWD based on criteria:</p>
              <ul>
                <li><strong>Owner-based</strong> - Share with role/role-and-subordinates</li>
                <li><strong>Criteria-based</strong> - Share records matching certain conditions</li>
                <li><strong>Guest User Rules</strong> - For Experience Cloud</li>
              </ul>
            </section>

            <section>
              <h2>Role Hierarchy</h2>
              <p>The role hierarchy lets users at higher levels access records owned by subordinates:</p>
              <ul>
                <li>CEO → VP Sales → Regional Manager → Sales Rep</li>
                <li>Each level inherits access to records below</li>
                <li>Can be customized in Setup → Role Hierarchy</li>
              </ul>
            </section>

            <section>
              <h2>Manual Sharing</h2>
              <p>Users can share individual records with specific users:</p>
              <ul>
                <li>Available on record detail page</li>
                <li>"Sharing" button allows manual sharing</li>
                <li>Can grant Read or Read/Write access</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>OWD sets baseline access for objects</li>
                <li>Sharing rules create exceptions</li>
                <li>Role hierarchy provides positional access</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/approval-processes.html" className="nav-link">← Approval Processes</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/profiles-permissions.html" className="nav-link">Profiles & Permissions →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}