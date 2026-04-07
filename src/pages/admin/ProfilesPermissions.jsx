import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'

const sidebarModules = [
  { id: 1, title: '1. Salesforce Basics', lessons: [
    { id: 'admin-1-1', title: 'What is Salesforce?', slug: '/admin-path/salesforce-basics.html' },
    { id: 'admin-1-2', title: 'CRM Concepts', slug: '/admin-path/crm-concepts.html' },
    { id: 'admin-1-3', title: 'Navigation & Setup', slug: '/admin-path/navigation-setup.html' },
  ]},
  { id: 2, title: '2. Objects & Fields', lessons: [
    { id: 'admin-2-1', title: 'Standard Objects', slug: '/admin-path/standard-objects.html' },
    { id: 'admin-2-2', title: 'Custom Objects', slug: '/admin-path/custom-objects.html' },
    { id: 'admin-2-3', title: 'Field Types', slug: '/admin-path/field-types.html' },
    { id: 'admin-2-4', title: 'Relationships', slug: '/admin-path/relationships.html' },
  ]},
  { id: 3, title: '3. Data Management', lessons: [
    { id: 'admin-3-1', title: 'Import/Export', slug: '/admin-path/import-export.html' },
    { id: 'admin-3-2', title: 'Data Loader', slug: '/admin-path/data-loader.html' },
    { id: 'admin-3-3', title: 'Validation Rules', slug: '/admin-path/validation-rules.html' },
  ]},
  { id: 4, title: '4. Automation', lessons: [
    { id: 'admin-4-1', title: 'Flow Builder', slug: '/admin-path/flow-builder.html' },
    { id: 'admin-4-2', title: 'Process Builder', slug: '/admin-path/process-builder.html' },          
    { id: 'admin-4-3', title: 'Approval Processes', slug: '/admin-path/approval-processes.html' },
  ]},
  { id: 5, title: '5. Security', lessons: [
    { id: 'admin-5-1', title: 'Sharing Settings', slug: '/admin-path/sharing-settings.html' },
    { id: 'admin-5-2', title: 'Profiles & Permissions', slug: '/admin-path/profiles-permissions.html' },
    { id: 'admin-5-3', title: 'Field-Level Security', slug: '/admin-path/field-level-security.html' },
  ]}
]

export default function ProfilesPermissions() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/profiles-permissions" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Profiles & Permissions' }
          ]} />
          <article className="lesson-content">
            <h1>Profiles & Permissions</h1>
            <p className="lesson-intro">Learn how to control user access through profiles and permission sets.</p>

            <section>
              <h2>What are Profiles?</h2>
              <p>Profiles define what users can do in Salesforce. They control:</p>
              <ul>
                <li>Object-level permissions (CRUD)</li>
                <li>Field-level security</li>
                <li>Tab visibility</li>
                <li>App access</li>
                <li>User permissions</li>
              </ul>
              <p>Each user has exactly one profile.</p>
            </section>

            <section>
              <h2>Standard Profiles</h2>
              <ul>
                <li><strong>System Administrator</strong> - Full access to all features</li>
                <li><strong>Standard User</strong> - Can view/edit own and team records</li>
                <li><strong>Marketing User</strong> - Can create campaigns and leads</li>
                <li><strong>Contract Manager</strong> - Manages contracts</li>
                <li><strong>Read Only</strong> - View only access</li>
              </ul>
            </section>

            <section>
              <h2>Permission Sets</h2>
              <p>Permission sets grant additional permissions beyond the profile:</p>
              <ul>
                <li>Used when multiple users need specific permissions</li>
                <li>Users can have multiple permission sets</li>
                <li>Great for temporary access or special features</li>
                <li>Created in Setup → Permission Sets</li>
              </ul>
            </section>

            <section>
              <h2>Profile vs Permission Sets</h2>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>Permission Set</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>One per user</td>
                      <td>Multiple per user</td>
                    </tr>
                    <tr>
                      <td>Base permissions</td>
                      <td>Additional permissions</td>
                    </tr>
                    <tr>
                      <td>Can't be deactivated</td>
                      <td>Can be assigned/deassigned</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Creating a Custom Profile</h2>
              <ol>
                <li>Go to <strong>Setup → Profiles</strong></li>
                <li>Click <strong>New Profile</strong></li>
                <li>Select an existing profile to clone</li>
                <li>Enter profile name and settings</li>
                <li>Configure object permissions, field security, etc.</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Profiles define baseline user permissions</li>
                <li>Permission sets add additional access</li>
                <li>Users have one profile but can have multiple permission sets</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/sharing-settings.html" className="nav-link">← Sharing Settings</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/field-level-security.html" className="nav-link">Field-Level Security →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}