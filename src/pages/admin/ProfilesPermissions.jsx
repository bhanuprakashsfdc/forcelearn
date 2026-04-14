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
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/profiles-permissions.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Profiles & Permissions' }
          ]} />
          <article className="lesson-content">
            <h1>Profiles & Permission Sets: User Access Control</h1>
            <p className="lesson-intro">
              Profiles and Permission Sets are fundamental to Salesforce security. This comprehensive guide 
              covers how to control user access at the profile level and grant additional permissions.
            </p>

            <section>
              <h2>1. Understanding User Access Control</h2>
              <p>
                User access in Salesforce is controlled through two main mechanisms: Profiles and 
                Permission Sets. Understanding how they work together is essential for proper security.
              </p>

              <h3>1.1 Profiles</h3>
              <ul>
                <li>Define baseline permissions for users</li>
                <li>Each user has exactly ONE profile</li>
                <li>Control object and field permissions</li>
                <li>Control tab and app access</li>
                <li>Set system permissions</li>
              </ul>

              <h3>1.2 Permission Sets</h3>
              <ul>
                <li>Grant additional permissions beyond profile</li>
                <li>Users can have MULTIPLE permission sets</li>
                <li>Used for specific features or temporary access</li>
                <li>Can be assigned/deassigned without changing profile</li>
              </ul>

              <div className="info-box">
                <h4>💡 Key Principle</h4>
                <p>Use Profiles for baseline access (job function), and Permission Sets for 
                additional capabilities (special features, temporary access, elevated permissions).</p>
              </div>
            </section>

            <section>
              <h2>2. Standard Profiles</h2>
              <p>Salesforce provides several standard profiles:</p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>Use Case</th>
                      <th>Key Permissions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>System Administrator</td>
                      <td>Full admin access</td>
                      <td>Manage all data, Setup</td>
                    </tr>
                    <tr>
                      <td>Standard User</td>
                      <td>Regular employees</td>
                      <td>Edit own records, reports</td>
                    </tr>
                    <tr>
                      <td>Marketing User</td>
                      <td>Marketing team</td>
                      <td>Create campaigns, leads</td>
                    </tr>
                    <tr>
                      <td>Sales User</td>
                      <td>Sales team</td>
                      <td>Full sales object access</td>
                    </tr>
                    <tr>
                      <td>Contract Manager</td>
                      <td>Contract management</td>
                      <td>Contract object access</td>
                    </tr>
                    <tr>
                      <td>Read Only</td>
                      <td>View-only access</td>
                      <td>Read all, edit none</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>3. Profile Configuration</h2>

              <h3>3.1 Object Permissions</h3>
              <ul>
                <li><strong>Create</strong> - Can create new records</li>
                <li><strong>Read</strong> - Can view records</li>
                <li><strong>Edit</strong> - Can modify records</li>
                <li><strong>Delete</strong> - Can remove records</li>
                <li><strong>View All</strong> - See all records regardless of sharing</li>
                <li><strong>Modify All</strong> - Edit all records regardless of sharing</li>
              </ul>

              <h3>3.2 Field-Level Security</h3>
              <p>Control access to specific fields:</p>
              <ul>
                <li><strong>Visible</strong> - Field can be seen</li>
                <li><strong>Read Only</strong> - Field visible but not editable</li>
                <li><strong>Hidden</strong> - Field not visible</li>
              </ul>

              <h3>3.3 Tab Settings</h3>
              <ul>
                <li>Default On - Tab shows by default</li>
                <li>Default On - Tab shows by default</li>
                <li>Tab Hidden - Tab hidden but accessible via URL</li>
              </ul>
            </section>

            <section>
              <h2>4. Custom Profiles</h2>

              <h3>4.1 When to Create Custom Profiles</h3>
              <ul>
                <li>Standard profiles don't match job functions</li>
                <li>Need different access levels for roles</li>
                <li>Security requirements vary by department</li>
              </ul>

              <h3>4.2 Creating Custom Profiles</h3>
              <ol>
                <li>Go to <strong>Setup → Profiles</strong></li>
                <li>Click "New Profile"</li>
                <li>Select profile to clone</li>
                <li>Enter profile name</li>
                <li>Configure permissions</li>
                <li>Save</li>
              </ol>

              <h3>4.3 Profile Best Practices</h3>
              <ul>
                <li>Limit number of profiles (5-10 max)</li>
                <li>Clone from standard profiles</li>
                <li>Document profile purpose</li>
                <li>Use naming conventions</li>
              </ul>
            </section>

            <section>
              <h2>5. Permission Sets</h2>

              <h3>5.1 When to Use Permission Sets</h3>
              <ul>
                <li>Grant specific feature access (e.g., Live Agent)</li>
                <li>Temporary elevated permissions</li>
                <li>One-off special access requirements</li>
                <li>Grant access without changing profile</li>
              </ul>

              <h3>5.2 Creating Permission Sets</h3>
              <ol>
                <li>Go to <strong>Setup → Permission Sets</strong></li>
                <li>Click "New"</li>
                <li>Enter name and description</li>
                <li>Configure permissions</li>
                <li>Save</li>
              </ol>

              <h3>5.3 Assigning Permission Sets</h3>
              <ol>
                <li>Open permission set</li>
                <li>Click "Manage Assignments"</li>
                <li>Click "Add Assignments"</li>
                <li>Select users</li>
                <li>Click "Assign"</li>
              </ol>
            </section>

            <section>
              <h2>6. System Permissions</h2>
              <p>Special permissions beyond object access:</p>

              <h3>6.1 Administrative Permissions</h3>
              <ul>
                <li>Manage Users</li>
                <li>Manage Profiles and Permission Sets</li>
                <li>View Setup and Configuration</li>
                <li>Customize Application</li>
              </ul>

              <h3>6.2 Data Management Permissions</h3>
              <ul>
                <li>Mass Email from Lists</li>
                <li>Import Personal Contacts</li>
                <li>Edit Read Only Fields</li>
                <li>Manage Data Categories</li>
              </ul>

              <h3>6.3 Feature-Specific Permissions</h3>
              <ul>
                <li>Sales Cloud User</li>
                <li>Service Cloud User</li>
                <li>Marketing User</li>
                <li>Live Agent User</li>
              </ul>
            </section>

            <section>
              <h2>7. Profile vs Permission Set Comparison</h2>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Profile</th>
                      <th>Permission Set</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Number per User</td>
                      <td>Exactly 1</td>
                      <td>Multiple</td>
                    </tr>
                    <tr>
                      <td>Use Case</td>
                      <td>Baseline access</td>
                      <td>Additional access</td>
                    </tr>
                    <tr>
                      <td>Assignment</td>
                      <td>User record</td>
                      <td>Explicit assignment</td>
                    </tr>
                    <tr>
                      <td>Revocable</td>
                      <td>Requires profile change</td>
                      <td>Simple de-assignment</td>
                    </tr>
                    <tr>
                      <td>Deactivation</td>
                      <td>Can't be deactivated</td>
                      <td>Can be deactivated</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>8. Best Practices</h2>

              <h3>8.1 Profile Best Practices</h3>
              <ul>
                <li>Create profiles based on job functions, not individuals</li>
                <li>Use descriptive names (e.g., "Sales Rep - Standard")</li>
                <li>Limit administrative profiles to IT staff</li>
                <li>Document each profile's purpose</li>
              </ul>

              <h3>8.2 Permission Set Best Practices</h3>
              <ul>
                <li>Name by feature (e.g., "Live Agent Access")</li>
                <li>Grant specific permissions, not full access</li>
                <li>Use for temporary access with clear expiration</li>
                <li>Clean up unused permission sets</li>
              </ul>

              <h3>8.3 Security Best Practices</h3>
              <ul>
                <li>Follow principle of least privilege</li>
                <li>Regularly audit user permissions</li>
                <li>Remove access when roles change</li>
                <li>Use View All / Modify All sparingly</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this lesson, you learned:</p>
              <ul>
                <li>Profiles define baseline user permissions</li>
                <li>Standard profiles and their use cases</li>
                <li>Object, field, and tab permissions</li>
                <li>Creating custom profiles</li>
                <li>Permission Sets for additional access</li>
                <li>System permissions beyond CRUD</li>
                <li>When to use profiles vs permission sets</li>
                <li>Best practices for access control</li>
              </ul>
              <p>
                <strong>Next:</strong> Learn about Field-Level Security.
              </p>
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