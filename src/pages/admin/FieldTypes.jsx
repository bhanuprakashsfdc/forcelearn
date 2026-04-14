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

export default function FieldTypes() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/field-types.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Field Types' }
          ]} />
          <article className="lesson-content">
            <h1>Field Types: A Complete Reference</h1>
            <p className="lesson-intro">
              Understanding field types is essential for building effective data models. This comprehensive guide 
              covers every field type in Salesforce—when to use each, configuration options, and real-world examples.
            </p>

            <section>
              <h2>1. Field Type Overview</h2>
              <p>
                Salesforce provides diverse field types to handle different data requirements. Choosing the right 
                field type is critical for data quality, reporting, and user experience.
              </p>

              <h3>1.1 Field Type Categories</h3>
              <ul>
                <li><strong>Text Fields</strong> - Alphanumeric data</li>
                <li><strong>Number Fields</strong> - Numeric values</li>
                <li><strong>Date & Time</strong> - Temporal data</li>
                <li><strong>Selection Fields</strong> - Controlled values</li>
                <li><strong>Relationship Fields</strong> - Object connections</li>
                <li><strong>Formula Fields</strong> - Calculated values</li>
                <li><strong>Special Fields</strong> - Unique purposes</li>
              </ul>

              <div className="info-box">
                <h4>💡 Field Planning</h4>
                <p>Before creating fields, design your data model. Consider: What data will this field store? 
                How will it be used in reports? Who needs access? What validation is needed?</p>
              </div>
            </section>

            <section>
              <h2>2. Text Fields</h2>

              <h3>2.1 Text (Text Area)</h3>
              <p>Single line of text input:</p>
              <ul>
                <li><strong>Length</strong> - 1-255 characters</li>
                <li><strong>Use for</strong> - Names, codes, short descriptions</li>
                <li><strong>Example</strong> - Account Number, Project Code</li>
              </ul>

              <h3>2.2 Text Area (Long/Encrypted)</h3>
              <p>Multi-line text fields:</p>
              <ul>
                <li><strong>Long Text Area</strong> - Up to 131,072 characters</li>
                <li><strong>Rich Text Area</strong> - Supports formatting (bold, links, images)</li>
                <li><strong>Encrypted</strong> - Masked for security</li>
                <li><strong>Use for</strong> - Descriptions, notes, specifications</li>
              </ul>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Max Length</th>
                      <th>Searchable</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Text</td>
                      <td>255</td>
                      <td>Yes</td>
                      <td>Short values</td>
                    </tr>
                    <tr>
                      <td>Text Area</td>
                      <td>32,000</td>
                      <td>Yes</td>
                      <td>Medium descriptions</td>
                    </tr>
                    <tr>
                      <td>Text Area (Long)</td>
                      <td>131,072</td>
                      <td>No</td>
                      <td>Long content</td>
                    </tr>
                    <tr>
                      <td>Text Area (Rich)</td>
                      <td>131,072</td>
                      <td>No</td>
                      <td>Formatted content</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2.3 Email Field</h3>
              <p>Stores email addresses with validation:</p>
              <ul>
                <li>Validates email format automatically</li>
                <li>Triggers alerts if format invalid</li>
                <li>Works with mass email functionality</li>
                <li>Can be unique (no duplicates)</li>
              </ul>

              <h3>2.4 URL Field</h3>
              <p>Stores web addresses:</p>
              <ul>
                <li>Validates URL format</li>
                <li>Clickable in Salesforce</li>
                <li>External ID option available</li>
                <li>Use for: Website, LinkedIn, documentation links</li>
              </ul>

              <h3>2.5 Phone Field</h3>
              <p>Stores phone numbers:</p>
              <ul>
                <li>Format varies by locale</li>
                <li>Clickable on mobile</li>
                <li>Can validate format</li>
                <li>Multiple phone fields per object</li>
              </ul>
            </section>

            <section>
              <h2>3. Number Fields</h2>

              <h3>3.1 Number Field</h3>
              <p>General numeric values:</p>
              <ul>
                <li><strong>Length</strong> - 1-18 digits</li>
                <li><strong>Decimal Places</strong> - 0-9</li>
                <li><strong>Can be negative</strong> - Yes/No</li>
                <li><strong>External ID</strong> - Can be unique identifier</li>
              </ul>

              <h3>3.2 Currency Field</h3>
              <p>Monetary values with currency symbol:</p>
              <ul>
                <li>Respects organization currency settings</li>
                <li>Automatically formatted with symbol</li>
                <li>Supports multiple currencies (if enabled)</li>
                <li>16 digit precision</li>
              </ul>

              <h3>3.3 Percent Field</h3>
              <p>Percentage values:</p>
              <ul>
                <li>Displays with % symbol</li>
                <li>Values stored as decimals (0.25 = 25%)</li>
                <li>Max 6 decimal places</li>
                <li>Range: 0-100 by default</li>
              </ul>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Field Type</th>
                      <th>Max Digits</th>
                      <th>Decimals</th>
                      <th>Display</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Number</td>
                      <td>18</td>
                      <td>0-9</td>
                      <td>Raw number</td>
                    </tr>
                    <tr>
                      <td>Currency</td>
                      <td>16</td>
                      <td>2 (default)</td>
                      <td>Formatted with $</td>
                    </tr>
                    <tr>
                      <td>Percent</td>
                      <td>5</td>
                      <td>0-6</td>
                      <td>With % symbol</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>4. Date and Time Fields</h2>

              <h3>4.1 Date Field</h3>
              <p>Calendar dates without time:</p>
              <ul>
                <li>Format: MM/DD/YYYY (configurable)</li>
                <li>Date picker for selection</li>
                <li>Can require future/past dates</li>
                <li>Use for: Birth dates, due dates, effective dates</li>
              </ul>

              <h3>4.2 Date/Time Field</h3>
              <p>Dates with time component:</p>
              <ul>
                <li>Includes time zone</li>
                <li>Stores in UTC internally</li>
                <li>Displays in user's time zone</li>
                <li>Use for: Meeting times, deadlines, timestamps</li>
              </ul>

              <h3>4.3 Time Field</h3>
              <p>Time-only values:</p>
              <ul>
                <li>Stored as time only</li>
                <li>Includes seconds</li>
                <li>Use for: Business hours, appointment times</li>
              </ul>
            </section>

            <section>
              <h2>5. Selection Fields</h2>

              <h3>5.1 Picklist Field</h3>
              <p>Single-value selection from predefined list:</p>
              
              <h4>Configuration Options</h4>
              <ul>
                <li><strong>Values</strong> - Enter each option</li>
                <li><strong>Restrict to values</strong> - Prevent custom values</li>
                <li><strong>Sort values</strong> - Alphabetically or manually</li>
                <li><strong>Use first value</strong> - Default selection</li>
              </ul>

              <h4>Dependent Picklists</h4>
              <p>Create conditional picklist options:</p>
              <ul>
                <li><strong>Controlling Field</strong> - Parent picklist</li>
                <li><strong>Dependent Field</strong> - Child field</li>
                <li><strong>Visibility Rules</strong> - When options appear</li>
              </ul>

              <div className="info-box">
                <h4>💡 Picklist Best Practice</h4>
                <p>Use global picklists for values needed across multiple fields. This provides 
                single-point maintenance—when values change, update once.</p>
              </div>

              <h3>5.2 Multi-Select Picklist</h3>
              <p>Select multiple values:</p>
              <ul>
                <li>Uses semicolon delimiters (;)</li>
                <li>Visible values controlled by field length</li>
                <li>Limited in reporting (use junction objects instead)</li>
                <li>Not supported in all features</li>
              </ul>

              <h3>5.3 Checkbox Field</h3>
              <p>Boolean true/false values:</p>
              <ul>
                <li>Default unchecked</li>
                <li>No null values (always true/false)</li>
                <li>Use for: Boolean flags, enable/disable</li>
                <li>Excellent for formulas</li>
              </ul>
            </section>

            <section>
              <h2>6. Relationship Fields</h2>

              <h3>6.1 Lookup Relationship</h3>
              <p>Loosely connects records:</p>
              <ul>
                <li>Parent record optional</li>
                <li>Does not control child record lifecycle</li>
                <li>Can have multiple children per parent</li>
                <li>Allows reparenting</li>
                <li>No roll-up summary fields</li>
              </ul>

              <h3>6.2 Master-Detail Relationship</h3>
              <p>Tightly couples records:</p>
              <ul>
                <li>Parent required (cannot be blank)</li>
                <li>Deleting parent deletes children</li>
                <li>Roll-up summary fields available</li>
                <li>Sharing inherits from parent</li>
                <li>2 MD relationships per object max</li>
              </ul>

              <h3>6.3 Hierarchical Relationship</h3>
              <p>Self-referential on User object:</p>
              <ul>
                <li>Only available for User object</li>
                <li>Creates organization hierarchy</li>
                <li>Used for chain of command</li>
                <li>Automatic with role hierarchy</li>
              </ul>

              <h3>6.4 External Lookup Relationship</h3>
              <p>Links to external data:</p>
              <ul>
                <li>Connects to external objects</li>
                <li>Uses external ID field</li>
                <li>For integration scenarios</li>
              </ul>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Lookup</th>
                      <th>Master-Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Parent Required</td>
                      <td>No</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Cascade Delete</td>
                      <td>No</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Roll-up Summary</td>
                      <td>No</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Sharing Inherits</td>
                      <td>No</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Max per Object</td>
                      <td>40</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>7. Formula Fields</h2>

              <h3>7.1 Formula Field Overview</h3>
              <p>Calculated values computed at runtime:</p>
              <ul>
                <li>No storage—calculated when accessed</li>
                <li>Cannot be edited directly</li>
                <li>Supports many functions</li>
                <li>Can reference other formula fields</li>
              </ul>

              <h3>7.2 Formula Return Types</h3>
              <ul>
                <li>Text</li>
                <li>Number</li>
                <li>Currency</li>
                <li>Percent</li>
                <li>Date</li>
                <li>Date/Time</li>
                <li>Boolean (Checkbox)</li>
              </ul>

              <h3>7.3 Common Formula Examples</h3>
              
              <h4>Text Concatenation</h4>
              <CodeBlock language="apex" code={`Account_Number__c & "-" & Name`} />

              <h4>Date Calculation</h4>
              <CodeBlock language="apex" code={`CloseDate + 30`} />

              <h4>Conditional Logic</h4>
              <CodeBlock language="apex" code={`IF(Amount > 100000, "Enterprise", "SMB")`} />

              <h4>Year Extraction</h4>
              <CodeBlock language="apex" code={`YEAR(CloseDate)`} />
            </section>

            <section>
              <h2>8. Roll-Up Summary Fields</h2>
              <p>Aggregate child record data to parent:</p>

              <h3>8.1 Available Functions</h3>
              <ul>
                <li><strong>COUNT</strong> - Count of child records</li>
                <li><strong>SUM</strong> - Total of numeric field</li>
                <li><strong>MIN</strong> - Minimum value</li>
                <li><strong>MAX</strong> - Maximum value</li>
              </ul>

              <h3>8.2 Constraints</h3>
              <ul>
                <li>Only on Master-Detail relationships</li>
                <li>Max 10 per object</li>
                <li>Cannot roll up to itself</li>
                <li>Formula fields have some limitations</li>
              </ul>

              <div className="info-box">
                <h4>⚠️ Important</h4>
                <p>Roll-up summaries don't recalculate immediately. They update when: 
                a child record is created/updated/deleted, or via specific processes. 
                Use Flow for immediate calculations if needed.</p>
              </div>
            </section>

            <section>
              <h2>9. Special Field Types</h2>

              <h3>9.1 Auto-Number</h3>
              <p>System-generated sequential numbers:</p>
              <ul>
                <li>Read-only for users</li>
                <li>Format customizable</li>
                <li>Cannot be edited</li>
                <li>Use for: Case numbers, invoice numbers</li>
              </ul>

              <h3>9.2 External ID</h3>
              <p>Unique identifier from external system:</p>
              <ul>
                <li>Can be Text, Number, or Email</li>
                <li>Indexed for fast searching</li>
                <li>Required for upsert operations</li>
                <li>Must be unique</li>
              </ul>

              <h3>9.3 Geolocation</h3>
              <p>Geographic coordinates:</p>
              <ul>
                <li>Latitude and longitude</li>
                <li>Used for mapping</li>
                <li>Distance calculations possible</li>
                <li>Use for: Location tracking</li>
              </ul>
            </section>

            <section>
              <h2>10. Field Limits by Edition</h2>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Edition</th>
                      <th>Custom Fields</th>
                      <th>Characters/Field</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Essentials</td>
                      <td>50</td>
                      <td>131,072</td>
                    </tr>
                    <tr>
                      <td>Professional</td>
                      <td>100</td>
                      <td>131,072</td>
                    </tr>
                    <tr>
                      <td>Enterprise</td>
                      <td>200</td>
                      <td>131,072</td>
                    </tr>
                    <tr>
                      <td>Unlimited</td>
                      <td>500</td>
                      <td>131,072</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>11. Best Practices</h2>

              <h3>11.1 Choosing Field Types</h3>
              <ul>
                <li>Use the most specific type for your data</li>
                <li>Don't use text when number/currency is appropriate</li>
                <li>Use picklists for controlled vocabularies</li>
                <li>Use date fields for date logic and reporting</li>
              </ul>

              <h3>11.2 Validation</h3>
              <ul>
                <li>Use email field type for email validation</li>
                <li>Set appropriate field lengths</li>
                <li>Require critical fields</li>
                <li>Use validation rules for complex logic</li>
              </ul>

              <h3>11.3 Performance</h3>
              <ul>
                <li>External ID fields for fast lookups</li>
                <li>Avoid very long text fields when not needed</li>
                <li>Use formula carefully (performance impact)</li>
                <li>Index custom fields for large data volumes</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this lesson, you learned:</p>
              <ul>
                <li>Salesforce provides diverse field types for different data needs</li>
                <li>Text fields handle alphanumeric data with various lengths</li>
                <li>Number fields provide precision for calculations</li>
                <li>Date/Time fields handle temporal data</li>
                <li>Selection fields (picklist, checkbox) control data values</li>
                <li>Relationship fields connect objects</li>
                <li>Formula fields calculate values at runtime</li>
                <li>Roll-up summaries aggregate child data to parents</li>
                <li>Field limits vary by Salesforce edition</li>
              </ul>
              <p>
                <strong>Next:</strong> Learn how to connect objects with relationships.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/custom-objects.html" className="nav-link">← Custom Objects</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/relationships.html" className="nav-link">Relationships →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}