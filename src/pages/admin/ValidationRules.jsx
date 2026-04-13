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

export default function ValidationRules() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/validation-rules.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Validation Rules' }
          ]} />
          <article className="lesson-content">
            <h1>Validation Rules: Ensuring Data Quality</h1>
            <p className="lesson-intro">
              Validation Rules are one of the most important declarative tools in Salesforce. This 
              comprehensive guide covers how to build effective validation rules to maintain data 
              quality and integrity.
            </p>

            <section>
              <h2>1. Introduction to Validation Rules</h2>
              <p>
                Validation Rules verify that data entered by users meets specific criteria before 
                it can be saved. If the data doesn't meet your criteria, users see an error message 
                and the record isn't saved.
              </p>

              <h3>1.1 Why Validation Rules Matter</h3>
              <ul>
                <li><strong>Data Quality</strong> - Prevent invalid data entry</li>
                <li><strong>Business Logic</strong> - Enforce business requirements</li>
                <li><strong>Integration</strong> - Ensure clean data for integrations</li>
                <li><strong>User Guidance</strong> - Provide helpful error messages</li>
                <li><strong>Compliance</strong> - Meet regulatory requirements</li>
              </ul>

              <div className="info-box">
                <h4>💡 Best Practice</h4>
                <p>Use validation rules alongside other data quality tools: field requiredness, 
                picklists, and duplicate rules. Defense in depth is key to data quality.</p>
              </div>
            </section>

            <section>
              <h2>2. Creating Validation Rules</h2>

              <h3>2.1 Step-by-Step Process</h3>
              <ol>
                <li>Go to <strong>Setup → Object Manager</strong></li>
                <li>Click on the object (e.g., Account)</li>
                <li>Click <strong>Validation Rules</strong></li>
                <li>Click <strong>New</strong></li>
                <li>Enter rule name and description</li>
                <li>Build the validation formula</li>
                <li>Create error message</li>
                <li>Set error location</li>
                <li>Save and activate</li>
              </ol>

              <h3>2.2 Validation Rule Components</h3>
              <ul>
                <li><strong>Rule Name</strong> - Internal identifier (no spaces)</li>
                <li><strong>Description</strong> - Explain the rule's purpose</li>
                <li><strong>Active</strong> - Enable/disable the rule</li>
                <li><strong>Error Condition Formula</strong> - The logic</li>
                <li><strong>Error Message</strong> - User-friendly message</li>
                <li><strong>Error Location</strong> - Where to show the error</li>
              </ul>
            </section>

            <section>
              <h2>3. Building Formulas</h2>

              <h3>3.1 Basic Formula Concepts</h3>
              <p>Validation formulas return true when there's an error:</p>
              <CodeBlock language="apex" code={`/* This formula checks if Amount is negative */
Amount < 0`} />

              <h3>3.2 Common Formula Functions</h3>
              
              <h4>ISBLANK - Check if field is empty</h4>
              <CodeBlock language="apex" code={`ISBLANK(Email)`} />

              <h4>LEN - Check field length</h4>
              <CodeBlock language="apex" code={`LEN(Phone) < 10`} />

              <h4>REGEX - Match patterns</h4>
              <CodeBlock language="apex" code={`NOT(REGEX(Email, "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}"))`} />

              <h4>AND/OR - Combine conditions</h4>
              <CodeBlock language="apex" code={`AND(
  AnnualRevenue < 0,
  Type = 'Customer'
)`} />
            </section>

            <section>
              <h2>4. Common Validation Rule Examples</h2>

              <h3>4.1 Required Field Combinations</h3>
              <p>Require at least one phone number:</p>
              <CodeBlock language="apex" code={`AND(
  ISBLANK(Phone),
  ISBLANK(MobilePhone),
  ISBLANK(HomePhone)
)`} />

              <h3>4.2 Date Validation</h3>
              <p>Close date must be in the future for opportunities:</p>
              <CodeBlock language="apex" code={`AND(
  StageName = 'Prospecting',
  CloseDate < TODAY()
)`} />

              <h3>4.3 Cross-Field Validation</h3>
              <p>Shipping address must match billing if "Same as Billing" is checked:</p>
              <CodeBlock language="apex" code={`AND(
  BillingAddress != ShippingAddress,
  Shipping_Address_Same_as_Billing__c = TRUE
)`} />

              <h3>4.4 Picklist Validation</h3>
              <p>Require reason when closing lost:</p>
              <CodeBlock language="apex" code={`AND(
  ISPICKVAL(StageName, 'Closed Lost'),
  ISBLANK(Lost_Reason__c)
)`} />

              <h3>4.5 Email Format Validation</h3>
              <CodeBlock language="apex" code={`NOT(OR(
  ISBLANK(Email),
  REGEX(Email, "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}")
))`} />
            </section>

            <section>
              <h2>5. Advanced Validation Techniques</h2>

              <h3>5.1 Validation Based on Record Type</h3>
              <CodeBlock language="apex" code={`AND(
  RecordType.DeveloperName = 'Enterprise_Account',
  AnnualRevenue < 1000000
)`} />

              <h3>5.2 Date Comparisons</h3>
              <p>Contract end date must be after start date:</p>
              <CodeBlock language="apex" code={`Contract_End_Date__c < Contract_Start_Date__c`} />

              <h3>5.3 Time-Based Validation</h3>
              <p>Check if case is overdue based on priority:</p>
              <CodeBlock language="apex" code={`AND(
  Status != 'Closed',
  Priority = 'High',
  CreatedDate < NOW() - 1
)`} />

              <h3>5.4 User Field Validation</h3>
              <p>Only allow certain users to set specific values:</p>
              <CodeBlock language="apex" code={`AND(
  Price__c > 10000,
  $User.Profile.Name != 'System Administrator'
)`} />
            </section>

            <section>
              <h2>6. Error Message Best Practices</h2>

              <h3>6.1 Writing Effective Messages</h3>
              <ul>
                <li>Be specific about what's wrong</li>
                <li>Tell users what to fix</li>
                <li>Avoid technical jargon</li>
                <li>Use professional tone</li>
              </ul>

              <h3>6.2 Good vs Bad Examples</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Bad Message</th>
                      <th>Good Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Invalid input</td>
                      <td>Please enter a valid email address</td>
                    </tr>
                    <tr>
                      <td>Error</td>
                      <td>Close date cannot be in the past</td>
                    </tr>
                    <tr>
                      <td>Validation failed</td>
                      <td>Annual revenue must be greater than $0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>6.3 Error Location</h3>
              <ul>
                <li><strong>Top of Page</strong> - General errors</li>
                <li><strong>Field</strong> - Specific field errors</li>
              </ul>
            </section>

            <section>
              <h2>7. Validation Rule Considerations</h2>

              <h3>7.1 Impact on Users</h3>
              <ul>
                <li>Validation rules prevent saves</li>
                <li>Users need clear guidance</li>
                <li>Balance strictness with usability</li>
              </ul>

              <h3>7.2 API Behavior</h3>
              <ul>
                <li>Validation runs on all saves (UI, API)</li>
                <li>Can't bypass via Apex without special handling</li>
                <li>Consider API-only field updates</li>
              </ul>

              <div className="info-box">
                <h4>⚠️ Important</h4>
                <p>Validation rules affect both UI and API. If you need to bypass validation 
                programmatically, use Apex with validation bypass methods or create a custom field 
                to bypass rules.</p>
              </div>
            </section>

            <section>
              <h2>8. Testing Validation Rules</h2>

              <h3>8.1 Test Scenarios</h3>
              <ul>
                <li>Valid data should save</li>
                <li>Invalid data should fail</li>
                <li>Edge cases are covered</li>
                <li>Error messages display correctly</li>
              </ul>

              <h3>8.2 Testing Process</h3>
              <ol>
                <li>Create test records with valid data</li>
                <li>Attempt to save with invalid data</li>
                <li>Verify error message appears</li>
                <li>Check error location</li>
              </ol>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this lesson, you learned:</p>
              <ul>
                <li>Validation Rules ensure data quality and business logic</li>
                <li>How to create and configure validation rules</li>
                <li>Formula functions for building conditions</li>
                <li>Common validation rule examples</li>
                <li>Advanced techniques using record types and user fields</li>
                <li>Best practices for error messages</li>
                <li>How validation rules behave with API</li>
                <li>Testing validation rules</li>
              </ul>
              <p>
                <strong>Next:</strong> Learn about Flow Builder for automation.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/data-loader.html" className="nav-link">← Data Loader</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/flow-builder.html" className="nav-link">Flow Builder →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}