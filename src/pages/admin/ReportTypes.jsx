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

export default function ReportTypes() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/report-types.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Report Types' }
          ]} />
          <article className="lesson-content">
            <h1>Report Types: Comprehensive Guide</h1>
            <p className="lesson-intro">
              Report Types are the foundation of Salesforce reporting. This guide covers everything from 
              understanding standard report types to creating custom report types that perfectly align 
              with your organization's data model and reporting needs.
            </p>

            <section>
              <h2>1. Introduction to Report Types</h2>
              <p>
                Report Types define the data structure available for reports in Salesforce. They determine 
                which objects and fields can be used, how objects relate to each other, and what data 
                combinations are possible in a single report. When you create a report, you first select 
                a Report Type, which acts as the template for your report's structure.
              </p>
              <p>
                Understanding Report Types is essential because they directly impact what data users can 
                analyze, how relationships between objects are exposed in reports, and what fields are 
                available for filtering, grouping, and displaying in reports.
              </p>

              <div className="info-box">
                <h4>📊 Report Type vs Report</h4>
                <p>Think of Report Types as the blueprint and Reports as the houses built from that blueprint. 
                One Report Type can be used to create many different Reports with different filters, 
                groupings, and visualizations.</p>
              </div>
            </section>

            <section>
              <h2>2. Standard Report Types</h2>
              <p>
                Salesforce provides numerous built-in Report Types for standard objects. These cover the 
                most common reporting scenarios and are automatically available to all organizations.
              </p>

              <h3>2.1 Accounts and Contacts Report Types</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Report Type</th>
                      <th>Description</th>
                      <th>Use Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Accounts</td>
                      <td>Single Account records with all standard fields</td>
                      <td>Account lists, account analysis</td>
                    </tr>
                    <tr>
                      <td>Accounts with Contacts</td>
                      <td>Accounts and their related Contacts</td>
                      <td>Contact engagement, account coverage</td>
                    </tr>
                    <tr>
                      <td>Contacts</td>
                      <td>Single Contact records</td>
                      <td>Contact directories, contact analytics</td>
                    </tr>
                    <tr>
                      <td>Accounts with Partners</td>
                      <td>Accounts and their Partner records</td>
                      <td>Partner program analysis</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2.2 Sales Report Types</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Report Type</th>
                      <th>Description</th>
                      <th>Use Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Opportunities</td>
                      <td>Single Opportunity records</td>
                      <td>Pipeline analysis, sales forecasting</td>
                    </tr>
                    <tr>
                      <td>Opportunities with Products</td>
                      <td>Opportunities and their Line Items</td>
                      <td>Product analysis, revenue tracking</td>
                    </tr>
                    <tr>
                      <td>Accounts with Opportunities</td>
                      <td>Accounts and their Opportunities</td>
                      <td>Account-based sales analysis</td>
                    </tr>
                    <tr>
                      <td>Quotes</td>
                      <td>Quote records with details</td>
                      <td>Quote-to-cash analysis</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2.3 Service Report Types</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Report Type</th>
                      <th>Description</th>
                      <th>Use Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cases</td>
                      <td>Single Case records</td>
                      <td>Case volume analysis, SLA tracking</td>
                    </tr>
                    <tr>
                      <td>Cases with Solutions</td>
                      <td>Cases that have associated Solutions</td>
                      <td>Knowledge base effectiveness</td>
                    </tr>
                    <tr>
                      <td>Service Contracts</td>
                      <td>Contract and entitlement records</td>
                      <td>Contract management, renewal tracking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>3. Understanding Report Type Relationships</h2>
              <p>
                Report Types define how objects relate to each other. Understanding these relationships 
                is key to building effective reports.
              </p>

              <h3>3.1 Primary Object Selection</h3>
              <p>
                Every Report Type has a primary (base) object. The primary object determines the records 
                that will appear in the report and controls what other objects can be related to it.
              </p>
              <ul>
                <li><strong>Primary Object</strong> - The main object driving the report rows</li>
                <li><strong>Related Objects</strong> - Objects that can be joined to the primary</li>
                <li><strong>Relationship Type</strong> - How objects are connected (lookup, master-detail)</li>
              </ul>

              <h3>3.2 Relationship Types</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Primary with Related</td>
                      <td>One-to-One or One-to-Many via lookup</td>
                      <td>Account → Contact (many contacts per account)</td>
                    </tr>
                    <tr>
                      <td>Primary with Children</td>
                      <td>One-to-Many via master-detail</td>
                      <td>Account → Opportunity (many opportunities)</td>
                    </tr>
                    <tr>
                      <td>Self-Referential</td>
                      <td>Object relates to itself</td>
                      <td>Account → Parent Account</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.3 Join Types</h3>
              <ul>
                <li><strong>Inner Join</strong> - Only records with matches in both objects</li>
                <li><strong>Left Outer Join</strong> - All primary records, with related data where available</li>
                <li><strong>Outer Join with Required</strong> - Requires matching records in related object</li>
              </ul>
            </section>

            <section>
              <h2>4. Creating Custom Report Types</h2>
              <p>
                Custom Report Types extend reporting capabilities beyond standard objects and relationships. 
                They're essential for reporting on custom objects and complex data models.
              </p>

              <h3>4.1 When to Create Custom Report Types</h3>
              <ul>
                <li>You have custom objects that need dedicated report types</li>
                <li>You need to report on custom relationships between objects</li>
                <li>Standard report types don't meet your data access requirements</li>
                <li>You want to simplify report creation for end users</li>
                <li>You're building a managed package for AppExchange</li>
              </ul>

              <h3>4.2 Creating a Custom Report Type</h3>
              <ol>
                <li>Navigate to <strong>Setup → Report Types</strong></li>
                <li>Click <strong>New Custom Report Type</strong></li>
                <li><strong>Step 1:</strong> Select the primary object from the dropdown</li>
                <li><strong>Step 2:</strong> Enter a label and unique name for the report type</li>
                <li><strong>Step 3:</strong> Assign it to a category (e.g., Custom Report Types)</li>
                <li><strong>Step 4:</strong> Choose whether to deploy or store as inactive</li>
                <li><strong>Step 5:</strong> Click Save to create the basic report type</li>
                <li><strong>Step 6:</strong> Click "Edit Layout" to add related objects and fields</li>
              </ol>

              <div className="info-box">
                <h4>💡 Pro Tip</h4>
                <p>Create a custom report type during custom object creation. This ensures users can 
                immediately report on the new object without additional setup.</p>
              </div>
            </section>

            <section>
              <h2>5. Configuring Custom Report Types</h2>

              <h3>5.1 Adding Related Objects</h3>
              <p>After creating the basic report type, you can add related objects:</p>
              <ol>
                <li>Click <strong>Edit Layout</strong> on your custom report type</li>
                <li>In the "Relationships" section, click <strong>Add Related Objects</strong></li>
                <li>Select objects that have relationships to your primary object</li>
                <li>Choose the join type (default is usually appropriate)</li>
                <li>Save the changes</li>
              </ol>

              <h3>5.2 Selecting Fields for the Report Type</h3>
              <p>Control which fields appear in reports built on this type:</p>
              <ol>
                <li>In Edit Layout, navigate to the "Fields Available for Reports" section</li>
                <li>Click on a section to see available fields</li>
                <li>Check the boxes next to fields to make them available</li>
                <li>Organize fields into logical sections</li>
                <li>Save your field selections</li>
              </ol>

              <h3>5.3 Setting Deployment Status</h3>
              <ul>
                <li><strong>Deployed</strong> - Available to all users in the report builder</li>
                <li><strong>Draft</strong> - Under development, not visible to end users</li>
                <li><strong>Inactive</strong> - No longer available for new reports</li>
              </ul>

              <div className="info-box">
                <h4>⚠️ Important</h4>
                <p>Only deployed report types appear in the report builder for end users. Keep custom 
                report types in "Draft" status while developing, then deploy when ready.</p>
              </div>
            </section>

            <section>
              <h2>6. Report Type Builder Interface</h2>
              <p>The Report Type Builder has several key areas:</p>

              <h3>6.1 Main Layout Areas</h3>
              <ul>
                <li><strong>Object Tree</strong> - Shows primary object and available relationships</li>
                <li><strong>Section List</strong> - Groups fields by object and category</li>
                <li><strong>Preview Pane</strong> - Shows sample data from the report type</li>
                <li><strong>Field Selection</strong> - Checkboxes to include/exclude fields</li>
              </ul>

              <h3>6.2 Custom Report Type Actions</h3>
              <ul>
                <li><strong>Edit Label</strong> - Change the report type display name</li>
                <li><strong>Edit Layout</strong> - Add objects and configure fields</li>
                <li><strong>Replace</strong> - Swap primary object (rarely used)</li>
                <li><strong>Delete</strong> - Remove the report type (only if not in use)</li>
              </ul>
            </section>

            <section>
              <h2>7. Creating Reports from Custom Report Types</h2>

              <h3>7.1 Report Builder Process</h3>
              <ol>
                <li>Go to the <strong>Reports</strong> tab</li>
                <li>Click <strong>New Report</strong></li>
                <li>Find your custom report type in the list (usually in "Custom Report Types" category)</li>
                <li>Click on the report type to create a new report</li>
                <li>The report opens in the Report Builder with your selected fields</li>
              </ol>

              <h3>7.2 Report Type in Report Builder</h3>
              <p>When working with a custom report type, you can:</p>
              <ul>
                <li>Add fields from primary object and related objects</li>
                <li>Filter on any field included in the report type</li>
                <li>Group by primary or related object fields</li>
                <li>Create summary and matrix reports</li>
                <li>Add charts and visualizations</li>
              </ul>

              <h3>7.3 Example: Project Management Report Type</h3>
              <p>Create a "Projects with Tasks" report type:</p>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Setting</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Primary Object</td>
                      <td>Project__c (custom object)</td>
                    </tr>
                    <tr>
                      <td>Related Object</td>
                      <td>Task__c (via Lookup to Project)</td>
                    </tr>
                    <tr>
                      <td>Relationship Type</td>
                      <td>One-to-Many (lookup)</td>
                    </tr>
                    <tr>
                      <td>Join Type</td>
                      <td>Outer Join (show projects even without tasks)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>8. Report Type Best Practices</h2>

              <h3>8.1 Design Guidelines</h3>
              <ul>
                <li>Create separate report types for major business processes</li>
                <li>Include commonly used fields in the default field selection</li>
                <li>Organize fields into logical sections matching business areas</li>
                <li>Use clear, descriptive labels for report types and sections</li>
                <li>Test report types with real data before deploying</li>
              </ul>

              <h3>8.2 Naming Conventions</h3>
              <ul>
                <li>Use consistent prefixes: "CRT" for custom report types</li>
                <li>Include the primary object name: "CRT - Projects with Tasks"</li>
                <li>Document the purpose in the description field</li>
              </ul>

              <h3>8.3 Field Selection Strategy</h3>
              <ul>
                <li>Include all commonly used fields from the primary object</li>
                <li>Add key fields from related objects (account name, contact name)</li>
                <li>Consider what fields users need for filtering and grouping</li>
                <li>Don't include every field - focus on business-relevant fields</li>
              </ul>

              <div className="info-box">
                <h4>🔄 Report Type Maintenance</h4>
                <p>Regularly review custom report types to ensure they still meet business needs. 
                Remove unused fields, add new ones as requirements change, and update labels 
                if business terminology changes.</p>
              </div>
            </section>

            <section>
              <h2>9. Common Report Type Scenarios</h2>

              <h3>9.1 Multi-Entity Reporting</h3>
              <p>For organizations with multiple business units:</p>
              <ul>
                <li>Create separate report types per business unit</li>
                <li>Use custom fields to filter by business unit</li>
                <li>Consider using Dynamic Dashboard for multi-entity views</li>
              </ul>

              <h3>9.2 Cross-Object Reporting</h3>
              <p>When standard objects don't have direct relationships:</p>
              <ul>
                <li>Identify the common object (usually Account)</li>
                <li>Build report type with Account as primary</li>
                <li>Include both objects through their Account relationship</li>
              </ul>

              <h3>9.3 Historical Reporting</h3>
              <p>For tracking changes over time:</p>
              <ul>
                <li>Use report types that support historical data</li>
                <li>Consider using Territory Management report types</li>
                <li>Enable Field History Tracking for key fields</li>
              </ul>
            </section>

            <section>
              <h2>10. Troubleshooting Report Types</h2>

              <h3>10.1 Common Issues</h3>
              <ul>
                <li><strong>Report type not appearing in list</strong> - Check deployment status</li>
                <li><strong>Missing fields in report builder</strong> - Verify field is included in report type</li>
                <li><strong>Can't add related object</strong> - Check if relationship exists between objects</li>
                <li><strong>Report returns no data</strong> - Verify join type and data availability</li>
              </ul>

              <h3>10.2 Report Type Diagnostics</h3>
              <ul>
                <li>Preview the report type to see sample data</li>
                <li>Check object relationships in Object Manager</li>
                <li>Verify field-level security allows user access</li>
                <li>Review sharing rules for data visibility</li>
              </ul>

              <div className="info-box">
                <h4>🛠️ Quick Fix</h4>
                <p>If users can't see expected data in reports, check three things: (1) Report Type 
                includes the right objects, (2) Field-Level Security allows field access, (3) Sharing 
                Rules allow record visibility.</p>
              </div>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on Report Types, you learned:</p>
              <ul>
                <li>Report Types define the data structure and available fields for reports</li>
                <li>Standard Report Types cover common scenarios for built-in objects</li>
                <li>Custom Report Types enable reporting on custom objects and relationships</li>
                <li>How to create and configure custom report types step by step</li>
                <li>The Report Type Builder interface and its key components</li>
                <li>Best practices for designing and maintaining report types</li>
                <li>Common scenarios and troubleshooting techniques</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to Dashboards to learn how to create visual dashboards 
                that transform your report data into actionable insights.
              </p>
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