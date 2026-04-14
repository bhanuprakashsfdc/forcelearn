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
  ]},
  { id: 6, title: '6. Reporting', lessons: [
    { id: 'admin-6-1', title: 'Report Types', slug: '/admin-path/report-types.html' },
    { id: 'admin-6-2', title: 'Dashboards', slug: '/admin-path/dashboards.html' },
    { id: 'admin-6-3', title: 'Analytics', slug: '/admin-path/analytics.html' },
  ]}
]

export default function FieldLevelSecurity() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/field-level-security.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Field-Level Security' }
          ]} />
          <article className="lesson-content">
            <h1>Field-Level Security: Complete Guide</h1>
            <p className="lesson-intro">
              Field-Level Security (FLS) is one of the most critical components of Salesforce security. 
              This comprehensive guide covers everything you need to know about controlling access to 
              individual fields across profiles and permission sets.
            </p>

            <section>
              <h2>1. Understanding Field-Level Security</h2>
              <p>
                Field-Level Security is the most granular level of data access control in Salesforce. 
                While object-level security (Controlled by Permission) determines whether a user can 
                access an entire object, and record-level security (Controlled by Sharing Rules) determines 
                which records a user can see, Field-Level Security controls which specific fields within 
                those records a user can view and edit.
              </p>
              <p>
                FLS operates independently of page layouts. A field can be visible on a page layout but 
                hidden through FLS, or hidden on the layout but accessible through the API. This separation 
                allows administrators to maintain security regardless of how the interface is configured.
              </p>

              <div className="info-box">
                <h4>🔒 Security Pyramid</h4>
                <p>Salesforce security follows a pyramid hierarchy: Organization-Wide Defaults (OWD) at 
                the base, then Sharing Rules, then Profile/Permission Set permissions, and finally 
                Field-Level Security at the apex. Each level builds upon the previous.</p>
              </div>
            </section>

            <section>
              <h2>2. Field-Level Security Settings Explained</h2>
              <p>Each field in Salesforce can be configured with three distinct access levels:</p>

              <h3>2.1 Visible</h3>
              <p>
                The Visible setting allows users to both see and edit the field. This is the default 
                setting for most fields and provides the highest level of access. When a field is 
                marked as Visible, users with the appropriate object permissions can view the field 
                value on record pages, in reports, through the API, and can modify the field value 
                when they have edit permissions for the object.
              </p>

              <h3>2.2 Read Only</h3>
              <p>
                The Read Only setting allows users to view the field but prevents them from editing it. 
                This setting is commonly used for fields that should be visible for reference but 
                shouldn't be modified by most users. For example, system-generated fields like Created 
                Date or fields calculated by formulas are typically set to Read Only for regular users.
              </p>

              <h3>2.3 Hidden</h3>
              <p>
                The Hidden setting completely removes the field from the user's view. The field won't 
                appear on record pages, list views, reports, or through the API. This is the most 
                restrictive setting and should be used for sensitive data that specific users or roles 
                should never access. Hidden fields are completely inaccessible - users can't even see 
                that the field exists on the object.
              </p>

              <div className="info-box">
                <h4>⚠️ Important Note</h4>
                <p>Field-Level Security is always enforced - regardless of the user interface. Even if 
                a field is visible on a page layout, if FLS is set to Hidden for that profile, the field 
                will not be displayed. This is different from page layout assignments, which only affect 
                the UI.</p>
              </div>
            </section>

            <section>
              <h2>3. Configuring Field-Level Security</h2>

              <h3>3.1 Setting FLS Through Object Manager</h3>
              <ol>
                <li>Navigate to <strong>Setup → Object Manager</strong></li>
                <li>Search for and select the object containing the field</li>
                <li>Click on <strong>Fields & Relationships</strong></li>
                <li>Click on the field name you want to configure</li>
                <li>Click <strong>Set Field-Level Security</strong></li>
                <li>For each profile, set the appropriate access level (Visible, Read Only, or Hidden)</li>
                <li>Click <strong>Save</strong></li>
              </ol>

              <h3>3.2 Setting FLS Through Profile</h3>
              <ol>
                <li>Go to <strong>Setup → Profiles</strong></li>
                <li>Click on the profile name</li>
                <li>Scroll to the <strong>Field-Level Security</strong> section</li>
                <li>Click <strong>View</strong> next to the object</li>
                <li>Edit the field permissions for each field</li>
                <li>Save your changes</li>
              </ol>

              <h3>3.3 Setting FLS Through Permission Sets</h3>
              <ol>
                <li>Go to <strong>Setup → Permission Sets</strong></li>
                <li>Click on the permission set name</li>
                <li>Click <strong>Field Permissions</strong></li>
                <li>Click <strong>Edit</strong></li>
                <li>Configure field access for each field</li>
                <li>Save the changes</li>
              </ol>
            </section>

            <section>
              <h2>4. Field-Level Security vs Page Layouts</h2>
              <p>Understanding the difference between FLS and Page Layouts is crucial for proper security implementation:</p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Field-Level Security</th>
                      <th>Page Layouts</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Enforcement</strong></td>
                      <td>Enforced everywhere - UI, API, Reports, Data Loader</td>
                      <td>Only affects the UI in Lightning Experience and Classic</td>
                    </tr>
                    <tr>
                      <td><strong>Function</strong></td>
                      <td>Controls visibility and editability</td>
                      <td>Controls field placement, order, and required status</td>
                    </tr>
                    <tr>
                      <td><strong>Assignment</strong></td>
                      <td>Set per Profile or Permission Set</td>
                      <td>Set per Record Type and Profile</td>
                    </tr>
                    <tr>
                      <td><strong>Default</strong></td>
                      <td>Inherits from profile</td>
                      <td>All fields visible by default</td>
                    </tr>
                    <tr>
                      <td><strong>API Impact</strong></td>
                      <td>Blocks API access when hidden</td>
                      <td>No impact on API access</td>
                    </tr>
                    <tr>
                      <td><strong>Report Impact</strong></td>
                      <td>Hidden fields don't appear in reports</td>
                      <td>Fields can be added to reports regardless of layout</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box">
                <h4>💡 Best Practice</h4>
                <p>Always use Field-Level Security for security requirements. Use Page Layouts only for 
                user experience improvements (organization, field order, making fields read-only for UI 
                simplicity). Never rely on Page Layouts alone to hide sensitive data.</p>
              </div>
            </section>

            <section>
              <h2>5. Permission Set Field Permissions</h2>
              <p>
                While Profile-level FLS provides the baseline security, Permission Sets allow you to 
                grant additional field access to specific users without modifying their profile. This 
                is particularly useful for granting elevated access to select individuals.
              </p>

              <h3>5.1 How Permission Set FLS Works</h3>
              <ul>
                <li><strong>Additive Only</strong> - Permission Sets can only add more access, never restrict</li>
                <li><strong>Profile as Baseline</strong> - FLS from profile is the starting point</li>
                <li><strong>Cumulative</strong> - Users can have multiple permission sets</li>
                <li><strong>Highest Wins</strong> - Most permissive setting takes precedence</li>
              </ul>

              <h3>5.2 Permission Set FLS Example</h3>
              <p>Scenario: A Sales Manager needs to see and edit the Discount field on Opportunities, 
              but regular Sales Reps can only view it:</p>
              <ul>
                <li>Profile FLS: Sales Rep profile has Read Only access to Discount</li>
                <li>Permission Set: Create "Discount Edit" permission set with Visible access</li>
                <li>Assignment: Assign the permission set to Sales Manager users</li>
                <li>Result: Sales Managers can edit, Sales Reps can only view</li>
              </ul>
            </section>

            <section>
              <h2>6. Common Use Cases for Field-Level Security</h2>

              <h3>6.1 HR and Compensation Data</h3>
              <ul>
                <li><strong>Salary Field</strong> - Visible to HR and Executives only</li>
                <li><strong>Bonus Information</strong> - Read Only for managers, Hidden for employees</li>
                <li><strong>SSN/Social Security Number</strong> - Hidden from most users, Visible to Payroll</li>
                <li><strong>Performance Ratings</strong> - Visible to HR and direct managers only</li>
              </ul>

              <h3>6.2 Financial Data</h3>
              <ul>
                <li><strong>Discount Fields</strong> - Read Only for sales team, Visible for managers</li>
                <li><strong>Cost Fields</strong> - Hidden from sales, Visible to Finance</li>
                <li><strong>Margin Calculations</strong> - Read Only for sales, editable by finance</li>
                <li><strong>Credit Card Information</strong> - Hidden from most, Visible to billing</li>
              </ul>

              <h3>6.3 Customer Data</h3>
              <ul>
                <li><strong>Internal Notes</strong> - Hidden from external users</li>
                <li><strong>Customer Health Score</strong> - Read Only for CSM team</li>
                <li><strong>Renewal Probability</strong> - Visible to leadership only</li>
                <li><strong>Account Tier</strong> - Controlled by specific profiles</li>
              </ul>

              <h3>6.4 System Fields</h3>
              <ul>
                <li><strong>Created Date</strong> - Generally Read Only for all</li>
                <li><strong>Last Modified By</strong> - Read Only for most users</li>
                <li><strong>Owner ID</strong> - Controlled by sharing rules</li>
                <li><strong>Record Type</strong> - Often Hidden from end users</li>
              </ul>
            </section>

            <section>
              <h2>7. Order of Precedence</h2>
              <p>When multiple security settings interact, Salesforce follows a specific order:</p>

              <h3>7.1 Security Precedence Hierarchy</h3>
              <ol>
                <li><strong>Organization-Wide Defaults (OWD)</strong> - Base level control</li>
                <li><strong>Role Hierarchy</strong> - Defines record access through hierarchy</li>
                <li><strong>Sharing Rules</strong> - Additional record access</li>
                <li><strong>Profile Object Permissions</strong> - Create, Read, Edit, Delete, View All, Modify All</li>
                <li><strong>Profile Field-Level Security</strong> - Field visibility and editability</li>
                <li><strong>Permission Set Field Permissions</strong> - Additional field access</li>
                <li><strong>Page Layout Assignments</strong> - UI field display</li>
              </ol>

              <div className="info-box">
                <h4>⚠️ Critical Rule</h4>
                <p>Users cannot access fields they don't have permission to see, even if they have 
                object-level permissions. If a field is Hidden at the profile level, no amount of 
                permission set grants can make it visible - you must modify the profile first.</p>
              </div>
            </section>

            <section>
              <h2>8. Field-Level Security in Different Contexts</h2>

              <h3>8.1 Reports and Dashboards</h3>
              <p>Field-Level Security directly impacts what users can see in reports:</p>
              <ul>
                <li>Hidden fields don't appear in report builder field list</li>
                <li>Read Only fields appear but users can't modify them</li>
                <li>FLS applies to report filters - users can't filter on hidden fields</li>
                <li>Dashboard components respect FLS for all users</li>
              </ul>

              <h3>8.2 Salesforce Mobile App</h3>
              <p>FLS is enforced in the Salesforce mobile app:</p>
              <ul>
                <li>Fields hidden by FLS won't display on mobile</li>
                <li>Read Only fields display as non-editable</li>
                <li>Mobile layout assignments work with FLS (both must allow access)</li>
              </ul>

              <h3>8.3 Salesforce API</h3>
              <p>API access is fully controlled by FLS:</p>
              <ul>
                <li>Hidden fields return null in API calls</li>
                <li>Read Only fields can be queried but not updated</li>
                <li>SOQL queries respect FLS - users can't query hidden fields</li>
                <li>REST and SOAP APIs both enforce FLS</li>
              </ul>

              <h3>8.4 Flow and Process Builder</h3>
              <p>Automated processes also respect Field-Level Security:</p>
              <ul>
                <li>Flow Get Records only returns fields user can access</li>
                <li>Flow Update Records respects field edit permissions</li>
                <li>Process Builder actions follow FLS</li>
                <li>Consider FLS when building screen flows</li>
              </ul>
            </section>

            <section>
              <h2>9. Best Practices</h2>

              <h3>9.1 Security Design</h3>
              <ul>
                <li>Default to minimum access - use Hidden by default for sensitive fields</li>
                <li>Audit FLS regularly - review field access during quarterly reviews</li>
                <li>Use Permission Sets for exceptions - don't modify profiles for temporary needs</li>
                <li>Document field security rationale - maintain a security matrix</li>
                <li>Test with different users - verify FLS works as expected</li>
              </ul>

              <h3>9.2 Implementation Tips</h3>
              <ul>
                <li>Plan field security during object design phase</li>
                <li>Create a field security matrix document</li>
                <li>Use naming conventions for permission sets granting field access</li>
                <li>Test thoroughly in sandbox before production deployment</li>
                <li>Monitor field usage after changes - watch for broken automations</li>
              </ul>

              <h3>9.3 Common Mistakes to Avoid</h3>
              <ul>
                <li>Relying on page layouts instead of FLS for security</li>
                <li>Forgetting to set FLS for custom fields</li>
                <li>Not considering API access when setting FLS</li>
                <li>Granting Edit access when Read Only is sufficient</li>
                <li>Ignoring FLS impact on reports and dashboards</li>
              </ul>
            </section>

            <section>
              <h2>10. Troubleshooting Field-Level Security</h2>

              <h3>10.1 Common Issues</h3>
              <ul>
                <li><strong>Field not visible but should be</strong> - Check profile FLS, then permission sets</li>
                <li><strong>Field editable but shouldn't be</strong> - Review both profile and permission sets</li>
                <li><strong>Field appears in report but not on page</strong> - Check page layout assignment</li>
                <li><strong>Field hidden in API but visible in UI</strong> - Verify profile FLS, not just layout</li>
              </ul>

              <h3>10.2 Using Field Accessibility Checker</h3>
              <ol>
                <li>Go to <strong>Setup → Field Accessibility</strong></li>
                <li>Select the object</li>
                <li>Review field accessibility by profile</li>
                <li>Identify fields with unexpected permissions</li>
              </ol>

              <h3>10.3 Debugging FLS Issues</h3>
              <ul>
                <li>Use "View Field Accessibility" in Object Manager</li>
                <li>Check user profile and permission set assignments</li>
                <li>Review sharing rules that might affect visibility</li>
                <li>Test with a user who has the expected permissions</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on Field-Level Security, you learned:</p>
              <ul>
                <li>Field-Level Security controls visibility and editability at the field level</li>
                <li>Three access levels: Visible, Read Only, and Hidden</li>
                <li>How to configure FLS through Object Manager, Profiles, and Permission Sets</li>
                <li>The critical difference between FLS and Page Layouts</li>
                <li>Common use cases for FLS across different business scenarios</li>
                <li>How FLS interacts with reports, mobile, API, and automation tools</li>
                <li>Best practices for implementing and maintaining field security</li>
                <li>Troubleshooting techniques for FLS issues</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to Report Types to learn how to create custom report 
                types that align with your data model and security settings.
              </p>
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