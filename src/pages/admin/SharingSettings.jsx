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

export default function SharingSettings() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/sharing-settings.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Sharing Settings' }
          ]} />
          <article className="lesson-content">
            <h1>Sharing Settings: Mastering Salesforce Access Control</h1>
            <p className="lesson-intro">
              Understanding Salesforce's sharing model is crucial for administrators. This comprehensive 
              guide covers Organization-Wide Defaults, Role Hierarchy, Sharing Rules, and Manual Sharing.
            </p>

            <section>
              <h2>1. Understanding the Sharing Model</h2>
              <p>
                Salesforce uses a role-based sharing model that controls record access at multiple levels. 
                Understanding this model is essential for proper security configuration.
              </p>

              <h3>1.1 Key Components</h3>
              <ul>
                <li><strong>Organization-Wide Defaults (OWD)</strong> - Baseline security setting</li>
                <li><strong>Role Hierarchy</strong> - Position-based access</li>
                <li><strong>Sharing Rules</strong> - Exceptions to OWD</li>
                <li><strong>Manual Sharing</strong> - Record-level exceptions</li>
                <li><strong>Profile & Permission Sets</strong> - Object/field access</li>
              </ul>

              <div className="info-box">
                <h4>🏗️ Architecture Principle</h4>
                <p>Always start with the most restrictive Organization-Wide Defaults and grant access 
                through sharing rules. This provides better security than starting open and trying to lock down.</p>
              </div>
            </section>

            <section>
              <h2>2. Organization-Wide Defaults</h2>
              <p>
                OWD sets the baseline access level for each object. It determines what users can see 
                and edit if no other sharing rules apply.
              </p>

              <h3>2.1 Access Levels</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Access Level</th>
                      <th>Description</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Public Read/Write</td>
                      <td>Everyone can view and edit</td>
                      <td>Knowledge base articles</td>
                    </tr>
                    <tr>
                      <td>Public Read Only</td>
                      <td>Everyone can view, owner can edit</td>
                      <td>Standard sales data</td>
                    </tr>
                    <tr>
                      <td>Private</td>
                      <td>Only owner can view and edit</td>
                      <td>Confidential data</td>
                    </tr>
                    <tr>
                      <td>Controlled by Parent</td>
                      <td>Access determined by parent record</td>
                      <td>Master-Detail relationships</td>
                    </tr>
                    <tr>
                      <td>Grant Access Using Hierarchies</td>
                      <td>Managers see subordinate records</td>
                      <td>Team-based access</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2.2 Common OWD Settings</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Object</th>
                      <th>Recommended OWD</th>
                      <th>Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Account</td>
                      <td>Public Read Only</td>
                      <td>Sales teams need visibility</td>
                    </tr>
                    <tr>
                      <td>Contact</td>
                      <td>Controlled by Parent</td>
                      <td>Follows Account access</td>
                    </tr>
                    <tr>
                      <td>Opportunity</td>
                      <td>Private</td>
                      <td>Pipeline confidentiality</td>
                    </tr>
                    <tr>
                      <td>Case</td>
                      <td>Private</td>
                      <td>Customer privacy</td>
                    </tr>
                    <tr>
                      <td>Lead</td>
                      <td>Private</td>
                      <td>Lead ownership model</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>3. Role Hierarchy</h2>
              <p>
                The Role Hierarchy mirrors your organization's structure and provides automatic access 
                to records owned by subordinates.
              </p>

              <h3>3.1 How It Works</h3>
              <ul>
                <li>Users see records they own</li>
                <li>Users see records owned by their subordinates</li>
                <li>Managers inherit access to subordinate records</li>
                <li>Hierarchy can be enabled/disabled per object</li>
              </ul>

              <h3>3.2 Creating Roles</h3>
              <ol>
                <li>Go to <strong>Setup → Users → Roles</strong></li>
                <li>Click "Add Role"</li>
                <li>Enter role name</li>
                <li>Select parent role (optional)</li>
                <li>Assign users to role</li>
                <li>Save</li>
              </ol>

              <h3>3.3 Role Example Structure</h3>
              <ul>
                <li>CEO</li>
                <li>VP of Sales</li>
                <li>Regional Sales Manager</li>
                <li>Sales Representative</li>
              </ul>

              <div className="info-box">
                <h4>💡 Tip</h4>
                <p>Create roles based on data access needs, not job titles. One role can have multiple 
                users with the same access requirements.</p>
              </div>
            </section>

            <section>
              <h2>4. Sharing Rules</h2>
              <p>
                Sharing Rules create exceptions to Organization-Wide Defaults, allowing you to grant 
                additional access to specific groups or criteria.
              </p>

              <h3>4.1 Types of Sharing Rules</h3>
              
              <h4>Owner-Based Sharing Rules</h4>
              <ul>
                <li>Share records owned by certain users/roles</li>
                <li>Grant access to other roles or public groups</li>
                <li>Use for: Team-based selling</li>
              </ul>

              <h4>Criteria-Based Sharing Rules</h4>
              <ul>
                <li>Share records matching specific criteria</li>
                <li>Use field values to determine sharing</li>
                <li>Use for: Regional data access, department-based</li>
              </ul>

              <h3>4.2 Creating Sharing Rules</h3>
              <ol>
                <li>Go to <strong>Setup → Sharing Settings</strong></li>
                <li>Click "New" next to the object</li>
                <li>Select rule type (Owner or Criteria)</li>
                <li>Define rule criteria</li>
                <li>Select users/roles to share with</li>
                <li>Choose access level</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>5. Manual Sharing</h2>
              <p>
                Manual Sharing allows users to share individual records with specific users or groups. 
                It's the most granular form of sharing.
              </p>

              <h3>5.1 Enabling Manual Sharing</h3>
              <ol>
                <li>Go to the record detail page</li>
                <li>Click "Sharing" button</li>
                <li>Click "Add" to share with others</li>
                <li>Select users/groups</li>
                <li>Choose access level (Read/Write)</li>
                <li>Save</li>
              </ol>

              <h3>5.2 Manual Sharing vs Sharing Rules</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Manual Sharing</th>
                      <th>Sharing Rules</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Per-record basis</td>
                      <td>Bulk, based on criteria</td>
                    </tr>
                    <tr>
                      <td>User-initiated</td>
                      <td>Automatic</td>
                    </tr>
                    <tr>
                      <td>Temporary/Ad-hoc</td>
                      <td>Permanent/Criteria-based</td>
                    </tr>
                    <tr>
                      <td>Not in effect when owner changes</td>
                      <td>Re-evaluated when criteria change</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>6. Sharing Rule Examples</h2>

              <h3>6.1 Share All Opportunities by Region</h3>
              <ul>
                <li>Rule Type: Criteria-Based</li>
                <li>Criteria: Region = "West"</li>
                <li>Share With: West Sales Team Group</li>
                <li>Access: Read/Write</li>
              </ul>

              <h3>6.2 Share Closed Won Opportunities with Finance</h3>
              <ul>
                <li>Rule Type: Criteria-Based</li>
                <li>Criteria: Stage = "Closed Won"</li>
                <li>Share With: Finance Role</li>
                <li>Access: Read Only</li>
              </ul>

              <h3>6.3 Share Cases with Support Managers</h3>
              <ul>
                <li>Rule Type: Owner-Based</li>
                <li>Owner: Support Team Role</li>
                <li>Share With: Support Manager Role</li>
                <li>Access: Read/Write</li>
              </ul>
            </section>

            <section>
              <h2>7. Best Practices</h2>

              <h3>7.1 Security Design</h3>
              <ul>
                <li>Start with Private OWD</li>
                <li>Open access only where needed</li>
                <li>Use Role Hierarchy for manager access</li>
                <li>Use Sharing Rules for team/group access</li>
              </ul>

              <h3>7.2 Performance Considerations</h3>
              <ul>
                <li>Too many sharing rules can impact performance</li>
                <li>Consider Public Groups for bulk sharing</li>
                <li>Review and clean up unused rules</li>
              </ul>

              <h3>7.3 Testing and Validation</h3>
              <ul>
                <li>Test with different user roles</li>
                <li>Verify record access expectations</li>
                <li>Document sharing architecture</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this lesson, you learned:</p>
              <ul>
                <li>Salesforce's multi-layered sharing model</li>
                <li>Organization-Wide Defaults set baseline access</li>
                <li>Role Hierarchy provides position-based access</li>
                <li>Sharing Rules create exceptions based on criteria or owners</li>
                <li>Manual Sharing for individual record exceptions</li>
                <li>Best practices for security and performance</li>
              </ul>
              <p>
                <strong>Next:</strong> Learn about Profiles and Permissions.
              </p>
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