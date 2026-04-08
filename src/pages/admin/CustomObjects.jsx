import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'

const lessonSidebarModules = [
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
  ]}
]

export default function CustomObjects() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/custom-objects.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Custom Objects' }
          ]} />
          <article className="lesson-content">
            <h1>Custom Objects: Building Your Data Model</h1>
            <p className="lesson-intro">
              When standard objects don't meet your business needs, custom objects provide the flexibility 
              to model unique processes. This comprehensive lesson covers everything from planning to 
              implementation of custom objects.
            </p>

            <section>
              <h2>1. Understanding Custom Objects</h2>
              <p>
                Custom objects are database tables you create to store information specific to your organization's 
                unique business requirements. They're the foundation for building custom applications 
                on the Salesforce platform.
              </p>

              <h3>1.1 When to Create Custom Objects</h3>
              <ul>
                <li><strong>No Standard Object Exists</strong> - Track something unique (e.g., Scholarships, Properties)</li>
                <li><strong>Standard Objects Don't Fit</strong> - Business process differs significantly</li>
                <li><strong>Complex Relationships</strong> - Need custom junction objects</li>
                <li><strong>Industry-Specific Data</strong> - Healthcare, real estate, finance, etc.</li>
                <li><strong>Custom Applications</strong> - Building a custom app on the platform</li>
              </ul>

              <div className="info-box">
                <h4>💡 Best Practice</h4>
                <p>Before creating a custom object, thoroughly evaluate if a standard object or 
                combination of standard objects can meet your needs. Custom objects require 
                ongoing maintenance and add complexity.</p>
              </div>

              <h3>1.2 Custom Object Terminology</h3>
              <ul>
                <li><strong>Label</strong> - Display name (e.g., "Project")</li>
                <li><strong>Plural Label</strong> - Collection name (e.g., "Projects")</li>
                <li><strong>API Name</strong> - Internal name ending in __c (e.g., Project__c)</li>
                <li><strong>Record Name</strong> - Primary identifier field</li>
              </ul>
            </section>

            <section>
              <h2>2. Creating a Custom Object</h2>

              <h3>2.1 Step-by-Step Process</h3>
              <ol>
                <li>Navigate to <strong>Setup → Object Manager</strong></li>
                <li>Click <strong>Create → Custom Object</strong></li>
                <li>Define label and plural label</li>
                <li>Set the record name with auto-number or text</li>
                <li>Configure optional features (optional)</li>
                <li>Set deployment status</li>
                <li>Save and create tab (optional)</li>
              </ol>

              <h3>2.2 Object Creation Options</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Option</th>
                      <th>Description</th>
                      <th>When to Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Launch New Custom Tab Wizard</td>
                      <td>Create a tab immediately</td>
                      <td>Users need UI access</td>
                    </tr>
                    <tr>
                      <td>Allow Reports</td>
                      <td>Enable reporting on this object</td>
                      <td>Analytics needed</td>
                    </tr>
                    <tr>
                      <td>Allow Activities</td>
                      <td>Enable Tasks and Events</td>
                      <td>Track activities</td>
                    </tr>
                    <tr>
                      <td>Allow Tracking</td>
                      <td>Enable field history tracking</td>
                      <td>Audit requirements</td>
                    </tr>
                    <tr>
                      <td>Allow Bulk API</td>
                      <td>Enable bulk operations</td>
                      <td>Integration needs</td>
                    </tr>
                    <tr>
                      <td>Allow Streaming API</td>
                      <td>Enable real-time events</td>
                      <td>Complex integrations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>3. Record Names and Auto-Numbers</h2>
              <p>Every object needs a record name—the primary identifier users see in lists and reports.</p>

              <h3>3.1 Text Record Names</h3>
              <ul>
                <li>Users type the name manually</li>
                <li>Up to 80 characters</li>
                <li>Must be unique (optional setting)</li>
                <li>Use for: Project names, Case numbers, etc.</li>
              </ul>

              <h3>3.2 Auto-Number Record Names</h3>
              <ul>
                <li>Salesforce generates automatically</li>
                <li>Format: {`PREFIX-{0000}`} (e.g., PROJ-0001)</li>
                <li>Display format customizable</li>
                <li>Starting number adjustable</li>
                <li>Use for: Tickets, Applications, Grants, etc.</li>
              </ul>

              <h3>3.3 Auto-Number Configuration</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Setting</th>
                      <th>Example</th>
                    <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Display Format</td>
                      <td>PROJ-{0000}</td>
                      <td>PROJ-0001</td>
                    </tr>
                    <tr>
                      <td>Starting Number</td>
                      <td>1</td>
                      <td>First record is PROJ-0001</td>
                    </tr>
                    <tr>
                      <td>Pad with Zeros</td>
                      <td>Yes</td>
                      <td>0001 instead of 1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>4. Custom Object Features</h2>

              <h3>4.1 Custom Fields</h3>
              <p>Add fields to capture your unique data:</p>
              <ul>
                <li>Up to 500 fields per object (Enterprise+)</li>
                <li>100 fields per object (Professional)</li>
                <li>Various field types supported</li>
                <li>Field-level security available</li>
              </ul>

              <h3>4.2 Custom Tabs</h3>
              <p>Tabs provide UI access to objects:</p>
              <ul>
                <li>Custom tab appears in app navigation</li>
                <li>Lightning page creation available</li>
                <li>Can include related lists</li>
                <li>Custom app assignment possible</li>
              </ul>

              <h3>4.3 Custom Page Layouts</h3>
              <p>Control field arrangement:</p>
              <ul>
                <li>Drag-and-drop field positioning</li>
                <li>Section creation for grouping</li>
                <li>Custom buttons and links</li>
                <li>Related lists configuration</li>
              </ul>

              <h3>4.4 Custom List Views</h3>
              <p>Create filtered views:</p>
              <ul>
                <li>Define filter criteria</li>
                <li>Select displayed columns</li>
                <li>Set default view</li>
                <li>Share with specific users/groups</li>
              </ul>
            </section>

            <section>
              <h2>5. Custom Object Limits</h2>
              <p>Understanding limits helps with planning:</p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Essentials</th>
                      <th>Professional</th>
                      <th>Enterprise</th>
                      <th>Unlimited</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Custom Objects</td>
                      <td>10</td>
                      <td>200</td>
                      <td>400</td>
                      <td>800</td>
                    </tr>
                    <tr>
                      <td>Custom Fields/Object</td>
                      <td>50</td>
                      <td>100</td>
                      <td>200</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>Custom Tabs</td>
                      <td>3</td>
                      <td>25</td>
                      <td>500</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>Total Custom Fields</td>
                      <td>500</td>
                      <td>20,000</td>
                      <td>80,000</td>
                      <td>200,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>6. Custom Object Security</h2>

              <h3>6.1 Object-Level Security</h3>
              <p>Profile and Permission Set settings:</p>
              <ul>
                <li><strong>Create</strong> - Can create new records</li>
                <li><strong>Read</strong> - Can view records</li>
                <li><strong>Edit</strong> - Can modify records</li>
                <li><strong>Delete</strong> - Can remove records</li>
                <li><strong>View All</strong> - See all records regardless of sharing</li>
                <li><strong>Modify All</strong> - Edit all records</li>
              </ul>

              <h3>6.2 Field-Level Security</h3>
              <p>Restrict specific fields:</p>
              <ul>
                <li><strong>Visible</strong> - Users can see and edit</li>
                <li><strong>Read Only</strong> - Users can see but not edit</li>
                <li><strong>Hidden</strong> - Users cannot see</li>
              </ul>

              <h3>6.3 Sharing Settings</h3>
              <p>Control record access:</p>
              <ul>
                <li>Organization-Wide Defaults</li>
                <li>Role Hierarchy</li>
                <li>Sharing Rules</li>
                <li>Manual Sharing</li>
              </ul>
            </section>

            <section>
              <h2>7. Building Custom Applications</h2>
              <p>Custom objects are the foundation of custom apps:</p>

              <h3>7.1 Custom App Development</h3>
              <ol>
                <li>Define the business requirement</li>
                <li>Design the data model</li>
                <li>Create custom objects</li>
                <li>Add custom fields</li>
                <li>Configure relationships</li>
                <li>Set up automation (if needed)</li>
                <li>Create page layouts</li>
                <li>Build Lightning pages (optional)</li>
              </ol>

              <h3>7.2 Managed Packages</h3>
              <p>For ISV development:</p>
              <ul>
                <li>Create namespace</li>
                <li>Package components</li>
                <li>AppExchange listing</li>
                <li>Version control</li>
              </ul>
            </section>

            <section>
              <h2>8. Common Custom Object Patterns</h2>

              <h3>8.1 Project Management</h3>
              <ul>
                <li>Project__c</li>
                <li>Project_Task__c (MD to Project)</li>
                <li>Project_Milestone__c (MD to Project)</li>
                <li>Resource__c</li>
                <li>Time_Entry__c (MD to Project + Resource)</li>
              </ul>

              <h3>8.2 Event Management</h3>
              <ul>
                <li>Event__c</li>
                <li>Session__c (MD to Event)</li>
                <li>Speaker__c</li>
                <li>Attendee__c (MD to Event + Contact)</li>
              </ul>

              <h3>8.3 Equipment Rental</h3>
              <ul>
                <li>Equipment__c</li>
                <li>Rental_Agreement__c</li>
                <li>Rental_Line_Item__c (MD to Agreement)</li>
              </ul>
            </section>

            <section>
              <h2>9. Best Practices</h2>

              <h3>9.1 Naming Conventions</h3>
              <ul>
                <li>Use clear, descriptive labels</li>
                <li>Follow consistent naming (e.g., __c suffix)</li>
                <li>Avoid reserved words</li>
                <li>Use meaningful API names</li>
              </ul>

              <h3>9.2 Data Modeling</h3>
              <ul>
                <li>Normalize your data (relate don't duplicate)</li>
                <li>Start simple, expand as needed</li>
                <li>Document your data model</li>
                <li>Consider future scalability</li>
              </ul>

              <h3>9.3 Testing and Deployment</h3>
              <ul>
                <li>Always test in sandbox first</li>
                <li>Create sample data</li>
                <li>Test all user scenarios</li>
                <li>Validate reporting requirements</li>
                <li>Document configurations for change management</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this lesson, you learned:</p>
              <ul>
                <li>Custom objects store business-specific data not covered by standard objects</li>
                <li>Create custom objects through Object Manager</li>
                <li>Configure record names as text or auto-number</li>
                <li>Add tabs, fields, and layouts for full UI configuration</li>
                <li>Object limits vary by Salesforce edition</li>
                <li>Secure custom objects using profiles and field-level security</li>
                <li>Custom objects form the foundation of custom applications</li>
                <li>Follow best practices for naming and data modeling</li>
              </ul>
              <p>
                <strong>Next:</strong> Explore field types in detail.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/standard-objects.html" className="nav-link">← Standard Objects</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/field-types.html" className="nav-link">Field Types →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}