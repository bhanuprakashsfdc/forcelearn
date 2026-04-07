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

export default function FieldLevelSecurity() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/field-level-security" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Field-Level Security' }
          ]} />
          <article className="lesson-content">
            <h1>Field-Level Security</h1>
            <p className="lesson-intro">Learn how to control access to specific fields on objects.</p>

            <section>
              <h2>What is Field-Level Security?</h2>
              <p>Field-level security restricts access to specific fields, regardless of the user's object-level permissions. It ensures sensitive data is visible only to authorized users.</p>
            </section>

            <section>
              <h2>Security Settings</h2>
              <p>Each field can have three levels of access:</p>
              <ul>
                <li><strong>Visible</strong> - Users can see the field</li>
                <li><strong>Read Only</strong> - Users can see but not edit</li>
                <li><strong>Hidden</strong> - Users cannot see or edit</li>
              </ul>
            </section>

            <section>
              <h2>Setting Field-Level Security</h2>
              <ol>
                <li>Go to <strong>Setup → Object Manager</strong></li>
                <li>Select the object</li>
                <li>Click <strong>Fields & Relationships</strong></li>
                <li>Click the field name</li>
                <li>Click <strong>Set Field-Level Security</strong></li>
                <li>Configure visibility for each profile</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Field-Level Security vs Page Layouts</h2>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Field-Level Security</th>
                      <th>Page Layouts</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Enforced everywhere (API, reports, etc.)</td>
                      <td>Only affects UI</td>
                    </tr>
                    <tr>
                      <td>Controls visibility and editability</td>
                      <td>Controls field placement and order</td>
                    </tr>
                    <tr>
                      <td>Set per profile</td>
                      <td>Set per record type</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Common Use Cases</h2>
              <ul>
                <li><strong>Salary fields</strong> - Only visible to HR</li>
                <li><strong>Discount fields</strong> - Only managers can edit</li>
                <li><strong>SSN/IDs</strong> - Restricted to compliance team</li>
                <li><strong>Internal notes</strong> - Hide from external users</li>
              </ul>
            </section>

            <section>
              <h2>Order of Precedence</h2>
              <p>When field security conflicts occur:</p>
              <ol>
                <li>Field-Level Security is always enforced</li>
                <li>Page Layouts are only for UI</li>
                <li>Profile FLS overrides Permission Set FLS</li>
              </ol>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Field-level security controls field visibility</li>
                <li>Set per profile for each field</li>
                <li>Enforced everywhere, not just UI</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/profiles-permissions.html" className="nav-link">← Profiles & Permissions</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/report-types.html" className="nav-link">Report Types →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}