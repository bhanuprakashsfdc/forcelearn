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

export default function Relationships() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/relationships.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Relationships' }
          ]} />
          <article className="lesson-content">
            <h1>Relationships: Connecting Your Data</h1>
            <p className="lesson-intro">
              Relationships are the backbone of Salesforce data architecture. This comprehensive guide covers 
              Lookup, Master-Detail, and Many-to-Many relationships with real-world examples and best practices.
            </p>

            <section>
              <h2>1. Understanding Relationships</h2>
              <p>
                Relationships define how objects connect and share data. Proper relationship design is critical 
                for data integrity, reporting, and application performance.
              </p>

              <h3>1.1 Why Relationships Matter</h3>
              <ul>
                <li><strong>Data Integrity</strong> - Maintain accurate connections</li>
                <li><strong>Reporting</strong> - Analyze across related data</li>
                <li><strong>Automation</strong> - Trigger flows and processes</li>
                <li><strong>User Experience</strong> - Navigate related records</li>
                <li><strong>Data Modeling</strong> - Reflect real-world connections</li>
              </ul>

              <div className="info-box">
                <h4>🏗️ Architecture Principle</h4>
                <p>Good data architecture normalizes data—store information once, reference it many times. 
                Duplicate data creates inconsistencies and maintenance nightmares.</p>
              </div>
            </section>

            <section>
              <h2>2. Lookup Relationships</h2>
              <p>
                Lookup relationships create a loose association between objects. They're the most flexible 
                type of relationship in Salesforce.
              </p>

              <h3>2.1 Characteristics</h3>
              <ul>
                <li><strong>Optional Parent</strong> - Child record can exist without parent</li>
                <li><strong>Independent Deletion</strong> - Deleting parent doesn't affect children</li>
                <li><strong>Reparenting</strong> - Can change parent record</li>
                <li><strong>Custom Tab</strong> - Related list shows on both sides</li>
                <li><strong>No Roll-up Summary</strong> - Cannot aggregate to parent</li>
              </ul>

              <h3>2.2 When to Use Lookups</h3>
              <ul>
                <li>Records have optional relationship</li>
                <li>Child can be independent</li>
                <li>Reparenting is common</li>
                <li>No roll-up calculations needed</li>
                <li>Loose coupling appropriate</li>
              </ul>

              <h3>2.3 Lookup Configuration Options</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Option</th>
                      <th>Description</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Allow lookup</td>
                      <td>Users can search and select</td>
                      <td>Standard selection</td>
                    </tr>
                    <tr>
                      <td>Allow lookup</td>
                      <td>Users can search and select</td>
                      <td>Standard selection</td>
                    </tr>
                    <tr>
                      <td>Clear value when parent deleted</td>
                      <td>Lookup clears instead of delete</td>
                      <td>Keep history</td>
                    </tr>
                    <tr>
                      <td>Limit to one record type</td>
                      <td>Filter by record type</td>
                      <td>Simpler selection</td>
                    </tr>
                    <tr>
                      <td>Display as link/image</td>
                      <td>Show as link not input</td>
                      <td>Read-only display</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2.4 Real-World Example: Support Agent Assignment</h3>
              <p>Case to User (Support Agent) relationship:</p>
              <ul>
                <li>Case might not be assigned initially</li>
                <li>Case can be reassigned to different agent</li>
                <li>Agent might leave company, cases reassigned</li>
                <li>No need to delete cases when agent leaves</li>
              </ul>
            </section>

            <section>
              <h2>3. Master-Detail Relationships</h2>
              <p>
                Master-Detail creates a tightly coupled parent-child relationship where the child is dependent 
                on the parent.
              </p>

              <h3>3.1 Characteristics</h3>
              <ul>
                <li><strong>Required Parent</strong> - Child must have parent</li>
                <li><strong>Cascade Delete</strong> - Deleting parent deletes children</li>
                <li><strong>No Reparenting</strong> - Cannot change parent</li>
                <li><strong>Sharing Inherits</strong> - Child shares parent sharing</li>
                <li><strong>Roll-up Summary</strong> - Can aggregate to parent</li>
              </ul>

              <div className="info-box">
                <h4>⚠️ Important Limitation</h4>
                <p>Each object can have only two Master-Detail relationships. Plan carefully! 
                Consider using Lookup + Roll-up Summary instead if you need more.</p>
              </div>

              <h3>3.2 When to Use Master-Detail</h3>
              <ul>
                <li>Child cannot exist without parent</li>
                <li>Want roll-up summary fields</li>
                <li>Need cascade delete</li>
                <li>Child should inherit sharing</li>
                <li>Lifecycle is tied (e.g., line items to order)</li>
              </ul>

              <h3>3.3 Real-World Example: Order and Line Items</h3>
              <p>Order (Parent) → OrderItem (Child):</p>
              <ul>
                <li>Line items cannot exist without an order</li>
                <li>Total automatically calculated (SUM roll-up)</li>
                <li>Deleting order deletes all line items</li>
                <li>Line items inherit order's sharing rules</li>
              </ul>

              <h3>3.4 Share Access in Master-Detail</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Sharing Setting</th>
                      <th>Behavior</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Read/Write</td>
                      <td>Child inherits parent's access</td>
                    </tr>
                    <tr>
                      <td>Read-Only</td>
                      <td>Child is read-only regardless of sharing</td>
                    </tr>
                    <tr>
                      <td>Controlled by Parent</td>
                      <td>Child uses own sharing rules</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>4. Hierarchical Relationships</h2>
              <p>
                A special relationship type available only for the User object that creates 
                organizational hierarchy.
              </p>

              <h3>4.1 User Hierarchy</h3>
              <ul>
                <li>Only available on User object</li>
                <li>Creates manager-subordinate relationship</li>
                <li>Enables "above" access in role hierarchy</li>
                <li>Often populated from Manager field</li>
              </ul>

              <h3>4.2 Use Cases</h3>
              <ul>
                <li>Approval chain routing</li>
                <li>Manager notifications</li>
                <li>Territory assignments</li>
                <li>Quota roll-ups</li>
              </ul>
            </section>

            <section>
              <h2>5. Many-to-Many Relationships</h2>
              <p>
                Salesforce doesn't have native Many-to-Many objects, but you can create them using 
                a junction object with two Master-Detail relationships.
              </p>

              <h3>5.1 Creating Many-to-Many</h3>
              <ol>
                <li>Create junction object (e.g., OpportunityProduct__c)</li>
                <li>Add MD relationship to Object A</li>
                <li>Add MD relationship to Object B</li>
                <li>Configure relationships</li>
              </ol>

              <h3>5.2 Real-World Example: Students and Courses</h3>
              <p>Create Enrollment__c junction object:</p>
              <ul>
                <li>MD to Student__c</li>
                <li>MD to Course__c</li>
                <li>Add Enrollment_Date__c field</li>
                <li>Add Grade__c field</li>
                <li>Add Status__c field</li>
              </ul>

              <h3>5.3 Junction Object Characteristics</h3>
              <ul>
                <li>Each junction can relate one record from each parent</li>
                <li>Multiple junctions for same parent-child (e.g., student taking multiple courses)</li>
                <li>Roll-up summaries to both parents</li>
                <li>Cascade delete from either parent</li>
              </ul>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Example</th>
                      <th>Junction Object</th>
                      <th>Parents</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Products to Opportunities</td>
                      <td>OpportunityLineItem</td>
                      <td>Opportunity + Product2</td>
                    </tr>
                    <tr>
                      <td>Contacts to Campaigns</td>
                      <td>CampaignMember</td>
                      <td>Campaign + Contact</td>
                    </tr>
                    <tr>
                      <td>Accounts to Channels</td>
                      <td>AccountChannel__c</td>
                      <td>Account + Channel__c</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>6. Standard Object Relationships</h2>
              <p>Salesforce standard objects use these relationship types:</p>

              <h3>6.1 Standard Lookup Relationships</h3>
              <ul>
                <li>Account → Parent Account</li>
                <li>Contact → Reports To</li>
                <li>Opportunity → Primary Contact</li>
                <li>Case → Parent Case</li>
                <li>Task/Event → What (Related To)</li>
              </ul>

              <h3>6.2 Standard Master-Detail Relationships</h3>
              <ul>
                <li>OpportunityLineItem → Opportunity</li>
                <li>OpportunityLineItem → Product2</li>
                <li>Contract → Account</li>
              </ul>

              <h3>6.3 Junction Objects</h3>
              <ul>
                <li><strong>OpportunityContactRole</strong> - Opportunity ↔ Contact</li>
                <li><strong>CampaignMember</strong> - Campaign ↔ Lead/Contact</li>
              </ul>
            </section>

            <section>
              <h2>7. Creating Relationships</h2>

              <h3>7.1 Creating a Lookup Field</h3>
              <ol>
                <li>Go to Object Manager → Your Object</li>
                <li>Click Fields & Relationships</li>
                <li>Click New</li>
                <li>Select Lookup Relationship</li>
                <li>Choose related object</li>
                <li>Enter field label</li>
                <li>Configure optional settings</li>
                <li>Set field-level security</li>
                <li>Add to page layout</li>
              </ol>

              <h3>7.2 Creating a Master-Detail Field</h3>
              <ol>
                <li>Go to Object Manager → Your Object</li>
                <li>Click Fields & Relationships</li>
                <li>Click New</li>
                <li>Select Master-Detail Relationship</li>
                <li>Choose related object</li>
                <li>Enter field label</li>
                <li>Choose sharing settings</li>
                <li>Configure cascade delete</li>
                <li>Set field-level security</li>
                <li>Add to page layout</li>
              </ol>
            </section>

            <section>
              <h2>8. Cross-Object Formulas</h2>
              <p>Reference fields from related objects using cross-object formulas:</p>

              <h3>8.1 Syntax</h3>
              <CodeBlock language="apex" code={`Parent_Object__c.Field_Name__c`} />

              <h3>8.2 Examples</h3>
              
              <h4>Contact sees Account Rating</h4>
              <CodeBlock language="apex" code={`Account.Rating`} />

              <h4>Opportunity sees Account Industry</h4>
              <CodeBlock language="apex" code={`Account.Industry`} />

              <h4>Order Item sees Product Name</h4>
              <CodeBlock language="apex" code={`Product2.Name`} />

              <h4>Account sees Primary Contact Email</h4>
              <CodeBlock language="apex" code={`Primary_Contact__r.Email`} />

              <div className="info-box">
                <h4>💡 Formula Tip</h4>
                <p>Cross-object formulas display data but don't store it. Use them to avoid 
                duplicating data while showing related information.</p>
              </div>
            </section>

            <section>
              <h2>9. Roll-Up Summary Fields</h2>
              <p>Master-Detail relationships support roll-up summary fields on the parent:</p>

              <h3>9.1 Available Functions</h3>
              <ul>
                <li><strong>COUNT</strong> - Count of child records</li>
                <li><strong>SUM</strong> - Total of numeric field</li>
                <li><strong>MIN</strong> - Minimum value</li>
                <li><strong>MAX</strong> - Maximum value</li>
              </ul>

              <h3>9.2 Filter Options</h3>
              <ul>
                <li>All records (no filter)</li>
                <li>Specify filter conditions</li>
                <li>Use relative date filters (e.g., this month)</li>
              </ul>

              <h3>9.3 Real-World Example</h3>
              <p>Account: Total Open Opportunities</p>
              <CodeBlock language="apex" code={`COUNT(Open_Opportunities__r WHERE Stage_Name__c != 'Closed Won')`} />

              <p>Account: Total Opportunity Value</p>
              <CodeBlock language="apex" code={`SUM(Amount)`} />
            </section>

            <section>
              <h2>10. Relationship Limits</h2>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Relationship Type</th>
                      <th>Limit per Object</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lookup</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>Master-Detail</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Hierarchical</td>
                      <td>1 (User only)</td>
                    </tr>
                    <tr>
                      <td>External Lookup</td>
                      <td>5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>11. Best Practices</h2>

              <h3>11.1 Choosing Relationship Types</h3>
              <ul>
                <li><strong>Use Lookup when:</strong> Parent optional, reparenting needed, no roll-up</li>
                <li><strong>Use Master-Detail when:</strong> Parent required, cascade delete needed, roll-up required</li>
              </ul>

              <h3>11.2 Data Modeling</h3>
              <ul>
                <li>Start simple—add complexity only when needed</li>
                <li>Use junction objects for Many-to-Many</li>
                <li>Document your data model</li>
                <li>Consider reporting requirements</li>
              </ul>

              <h3>11.3 Performance</h3>
              <ul>
                <li>Avoid deep relationship chains</li>
                <li>Don't overuse cross-object formulas</li>
                <li>Consider indexing for large data volumes</li>
                <li>Test with production-level data volumes</li>
              </ul>

              <h3>11.4 Naming Conventions</h3>
              <ul>
                <li>Lookup field names end in __c or Id (e.g., AccountId, Project__c)</li>
                <li>Use descriptive names (e.g., Manager__c, not Lookup__c)</li>
                <li>Follow consistent naming across objects</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this lesson, you learned:</p>
              <ul>
                <li>Relationships connect objects and define data architecture</li>
                <li>Lookup relationships are loose, optional associations</li>
                <li>Master-Detail relationships are tight, required couplings</li>
                <li>Hierarchical relationships are for User organization</li>
                <li>Many-to-Many uses junction objects with two MD relationships</li>
                <li>Cross-object formulas reference related object fields</li>
                <li>Roll-up summaries aggregate child data to parents</li>
                <li>Each object has limits on relationship types</li>
                <li>Choose relationship type based on business requirements</li>
              </ul>
              <p>
                <strong>Next:</strong> Learn data import and export methods.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/field-types.html" className="nav-link">← Field Types</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/import-export.html" className="nav-link">Import/Export →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}