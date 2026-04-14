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

export default function ImportExport() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/import-export.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Import/Export' }
          ]} />
          <article className="lesson-content">
            <h1>Import & Export: Managing Salesforce Data</h1>
            <p className="lesson-intro">
              This comprehensive lesson covers all methods for getting data into and out of Salesforce. 
              From the built-in wizards to command-line tools, master the art of data migration.
            </p>

            <section>
              <h2>1. Understanding Data Migration</h2>
              <p>
                Data migration is a critical skill for Salesforce administrators. Whether you're migrating 
                from another CRM, importing new data, or performing regular data updates, understanding 
                the available tools is essential.
              </p>

              <h3>1.1 Common Data Migration Scenarios</h3>
              <ul>
                <li><strong>Initial Migration</strong> - First-time data load from legacy systems</li>
                <li><strong>Data Integration</strong> - Ongoing sync with external systems</li>
                <li><strong>Data Refresh</strong> - Updating test environments</li>
                <li><strong>Data Recovery</strong> - Restoring from backups</li>
                <li><strong>Data Consolidation</strong> - Merging data from multiple sources</li>
              </ul>

              <div className="info-box">
                <h4>💡 Migration Planning</h4>
                <p>Always plan your migration: Map fields, clean data first, test with small batches, 
                and always have a rollback plan. Never migrate without testing first!</p>
              </div>
            </section>

            <section>
              <h2>2. Salesforce Data Import Wizard</h2>
              <p>
                The Data Import Wizard is Salesforce's built-in, guided tool for importing data. 
                It's accessible from Setup and designed for simpler import scenarios.
              </p>

              <h3>2.1 Supported Objects</h3>
              <ul>
                <li>Accounts</li>
                <li>Contacts</li>
                <li>Leads</li>
                <li>Solutions (Knowledge Articles)</li>
                <li>Custom Objects</li>
              </ul>

              <h3>2.2 Key Features</h3>
              <ul>
                <li>Step-by-step wizard interface</li>
                <li>Automatic field mapping</li>
                <li>Duplicate matching rules</li>
                <li>Error handling and reporting</li>
                <li>Import up to 50,000 records</li>
              </ul>

              <h3>2.3 Data Import Wizard Process</h3>
              <ol>
                <li>Go to <strong>Setup → Data Management → Data Import Wizard</strong></li>
                <li>Select the object to import</li>
                <li>Choose to add new records or update existing</li>
                <li>Upload CSV file or specify field values</li>
                <li>Map CSV columns to Salesforce fields</li>
                <li>Review and start import</li>
                <li>Monitor results</li>
              </ol>
            </section>

            <section>
              <h2>3. Data Export Methods</h2>

              <h3>3.1 Data Export Service</h3>
              <p>Salesforce provides built-in export capabilities:</p>
              
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Weekly Export</th>
                      <th>Monthly Export</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Availability</td>
                      <td>All editions</td>
                      <td>Enterprise+</td>
                    </tr>
                    <tr>
                      <td>Frequency</td>
                      <td>Every 7 days</td>
                      <td>Every 29 days</td>
                    </tr>
                    <tr>
                      <td>Includes</td>
                      <td>All data</td>
                      <td>All data + attachments</td>
                    </tr>
                    <tr>
                      <td>Format</td>
                      <td>CSV</td>
                      <td>CSV + ZIP</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.2 Exporting from Reports</h3>
              <ul>
                <li>Run any report</li>
                <li>Click "Export"</li>
                <li>Choose format (CSV, Excel, PDF)</li>
                <li>Download immediately</li>
              </ul>

              <h3>3.3 Data Loader Export</h3>
              <p>For bulk exports, use Data Loader (covered in next lesson).</p>
            </section>

            <section>
              <h2>4. CSV File Preparation</h2>
              <p>Proper CSV preparation is crucial for successful imports:</p>

              <h3>4.1 CSV Format Requirements</h3>
              <ul>
                <li>UTF-8 encoding recommended</li>
                <li>First row must be headers</li>
                <li>No formulas or macros</li>
                <li>Date format: MM/DD/YYYY or YYYY-MM-DD</li>
                <li>Email addresses must be valid format</li>
              </ul>

              <h3>4.2 Field Mapping</h3>
              <p>Map your CSV columns to Salesforce fields:</p>
              <ul>
                <li>Use API names for accuracy</li>
                <li>Match data types (text to text, number to number)</li>
                <li>Handle required fields appropriately</li>
                <li>Account for picklist values</li>
              </ul>

              <h3>4.3 Common Field Mappings</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>CSV Header</th>
                      <th>Salesforce Field</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Account Name</td>
                      <td>Name</td>
                      <td>Required for Accounts</td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td>LastName</td>
                      <td>Required for Contacts/Leads</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>Email</td>
                      <td>Must be unique if specified</td>
                    </tr>
                    <tr>
                      <td>External ID</td>
                      <td>Your_Custom_ID__c</td>
                      <td>Used for upsert operations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>5. Duplicate Management</h2>

              <h3>5.1 Duplicate Rules</h3>
              <p>Prevent duplicates during import:</p>
              <ul>
                <li>Create matching rules by object</li>
                <li>Define criteria for "duplicate"</li>
                <li>Set actions on match</li>
              </ul>

              <h3>5.2 Import Options</h3>
              <ul>
                <li><strong>Add New Records Only</strong> - Skip existing</li>
                <li><strong>Update Existing Records</strong> - Modify matches</li>
                <li><strong>Upsert</strong> - Create or update using External ID</li>
              </ul>

              <div className="info-box">
                <h4>💡 Upsert is Your Friend</h4>
                <p>Always use External ID for upsert operations. This allows Salesforce to match 
                records without email or name, and is the most reliable approach for migrations.</p>
              </div>
            </section>

            <section>
              <h2>6. Data Quality Best Practices</h2>

              <h3>6.1 Before Import</h3>
              <ul>
                <li>Clean and validate data</li>
                <li>Remove duplicates</li>
                <li>Standardize formats (phone, date)</li>
                <li>Verify picklist values match</li>
                <li>Check required fields</li>
              </ul>

              <h3>6.2 During Import</h3>
              <ul>
                <li>Start with small test batch</li>
                <li>Monitor errors closely</li>
                <li>Review field mappings</li>
                <li>Track progress</li>
              </ul>

              <h3>6.3 After Import</h3>
              <ul>
                <li>Verify record counts</li>
                <li>Check related data</li>
                <li>Validate calculations</li>
                <li>Run validation reports</li>
                <li>Test automation triggers</li>
              </ul>
            </section>

            <section>
              <h2>7. Import Strategy by Scenario</h2>

              <h3>7.1 Initial Migration</h3>
              <ol>
                <li>Export all data from source system</li>
                <li>Map fields between systems</li>
                <li>Clean data in spreadsheet</li>
                <li>Create External IDs for matching</li>
                <li>Import in dependency order (Accounts before Contacts)</li>
                <li>Validate after each batch</li>
              </ol>

              <h3>7.2 Ongoing Integration</h3>
              <ol>
                <li>Establish External IDs</li>
                <li>Schedule regular imports</li>
                <li>Automate where possible</li>
                <li>Monitor for errors</li>
                <li>Document exception handling</li>
              </ol>

              <h3>7.3 Test Data Refresh</h3>
              <ol>
                <li>Use sandbox environment</li>
                <li>Export production data</li>
                <li>Sanitize sensitive data</li>
                <li>Import to sandbox</li>
                <li>Verify functionality</li>
              </ol>
            </section>

            <section>
              <h2>8. Common Import Errors</h2>

              <h3>8.1 Field Validation Errors</h3>
              <ul>
                <li>Required fields missing</li>
                <li>Invalid picklist values</li>
                <li>Data type mismatches</li>
                <li>Field length exceeded</li>
              </ul>

              <h3>8.2 Duplicate Errors</h3>
              <ul>
                <li>Duplicate email addresses</li>
                <li>Duplicate External IDs</li>
                <li>Unique field violations</li>
              </ul>

              <h3>8.3 Relationship Errors</h3>
              <ul>
                <li>Invalid lookup values</li>
                <li>Parent record not found</li>
                <li>Master-Detail without parent</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this lesson, you learned:</p>
              <ul>
                <li>Data Import Wizard for simple imports up to 50,000 records</li>
                <li>Data Export options (weekly, monthly, reports)</li>
                <li>CSV preparation and field mapping</li>
                <li>Duplicate management and matching rules</li>
                <li>Data quality best practices</li>
                <li>Import strategies for different scenarios</li>
                <li>Common error handling</li>
              </ul>
              <p>
                <strong>Next:</strong> Learn about Data Loader for more advanced operations.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/relationships.html" className="nav-link">← Relationships</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/data-loader.html" className="nav-link">Data Loader →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}