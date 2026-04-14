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

export default function DataLoader() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/data-loader.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Data Loader' }
          ]} />
          <article className="lesson-content">
            <h1>Data Loader: Enterprise-Grade Data Operations</h1>
            <p className="lesson-intro">
              Data Loader is Salesforce's most powerful tool for bulk data operations. This comprehensive 
              guide covers both the graphical interface and command-line options for enterprise-scale 
              data migrations.
            </p>

            <section>
              <h2>1. Introduction to Data Loader</h2>
              <p>
                Data Loader is a client application that can import up to 5 million records at a time 
                and export data from any Salesforce object. It's designed for scenarios where the 
                Import Wizard isn't sufficient.
              </p>

              <h3>1.1 When to Use Data Loader</h3>
              <ul>
                <li>Importing more than 50,000 records</li>
                <li>Need scheduled automated imports</li>
                <li>Complex data transformations required</li>
                <li>Deleting large numbers of records</li>
                <li>Working with all objects (including those not in Import Wizard)</li>
              </ul>

              <h3>1.2 Data Loader vs Import Wizard</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Import Wizard</th>
                      <th>Data Loader</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Record Limit</td>
                      <td>50,000</td>
                      <td>5,000,000</td>
                    </tr>
                    <tr>
                      <td>Objects Supported</td>
                      <td>Limited</td>
                      <td>All Objects</td>
                    </tr>
                    <tr>
                      <td>Interface</td>
                      <td>GUI Wizard</td>
                      <td>GUI + Command Line</td>
                    </tr>
                    <tr>
                      <td>Scheduling</td>
                      <td>No</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>API Used</td>
                      <td>REST API</td>
                      <td>Bulk API</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>2. Installing Data Loader</h2>

              <h3>2.1 System Requirements</h3>
              <ul>
                <li>Windows 10+ or macOS 10.14+</li>
                <li>Java 8 or higher (for command line)</li>
                <li>2GB RAM minimum</li>
                <li>Network access to Salesforce</li>
              </ul>

              <h3>2.2 Installation Steps</h3>
              <ol>
                <li>Go to <strong>Setup → Data Management → Data Loader</strong></li>
                <li>Click "Download Data Loader"</li>
                <li>Run the installer for your OS</li>
                <li>Launch Data Loader from Start Menu / Applications</li>
              </ol>

              <h3>2.3 First-Time Configuration</h3>
              <ol>
                <li>Enter your Salesforce login URL</li>
                <li>Log in with your credentials</li>
                <li>Configure encryption settings</li>
                <li>Set default export location</li>
              </ol>
            </section>

            <section>
              <h2>3. Data Loader Operations</h2>

              <h3>3.1 Insert - Adding New Records</h3>
              <ol>
                <li>Select "Insert" from the menu</li>
                <li>Choose the Salesforce object</li>
                <li>Browse and select your CSV file</li>
                <li>Map CSV columns to Salesforce fields</li>
                <li>Click "Next" and then "Insert"</li>
                <li>Review results and errors</li>
              </ol>

              <h3>3.2 Update - Modifying Existing Records</h3>
              <ol>
                <li>Select "Update" from the menu</li>
                <li>Choose the Salesforce object</li>
                <li>Browse and select your CSV file</li>
                <li>Map fields (must include ID)</li>
                <li>Click "Next" and then "Update"</li>
                <li>Review results</li>
              </ol>

              <h3>3.3 Upsert - Insert or Update</h3>
              <p>Upsert is powerful for migrations as it automatically creates or updates:</p>
              <ol>
                <li>Select "Upsert" from the menu</li>
                <li>Choose the Salesforce object</li>
                <li>Select the External ID field for matching</li>
                <li>Browse and select your CSV file</li>
                <li>Map fields (include External ID)</li>
                <li>Click "Upsert"</li>
              </ol>

              <div className="info-box">
                <h4>💡 Pro Tip</h4>
                <p>Always use External ID for upsert! Without it, matching is limited and unreliable. 
                Create a custom External ID field before any major migration.</p>
              </div>

              <h3>3.4 Delete - Removing Records</h3>
              <ol>
                <li>Select "Delete" from the menu</li>
                <li>Choose the Salesforce object</li>
                <li>Browse and select CSV with record IDs</li>
                <li>Map the ID field</li>
                <li>Click "Delete"</li>
              </ol>

              <h3>3.5 Export - Extracting Data</h3>
              <ol>
                <li>Select "Export" from the menu</li>
                <li>Choose the Salesforce object</li>
                <li>Enter a SOQL query or use query builder</li>
                <li>Select output CSV location</li>
                <li>Click "Export"</li>
              </ol>
            </section>

            <section>
              <h2>4. SOQL Queries for Export</h2>
              <p>Understanding SOQL is essential for Data Loader exports:</p>

              <h3>4.1 Basic Query Structure</h3>
              <CodeBlock language="sql" code={`SELECT Id, Name, Email, Phone FROM Contact WHERE AccountId = '001xxxxxxxxxxxx'`} />

              <h3>4.2 Common Export Queries</h3>
              
              <h4>All Accounts</h4>
              <CodeBlock language="sql" code={`SELECT Id, Name, Industry, Type, BillingCity FROM Account`} />

              <h4>Contacts without Accounts</h4>
              <CodeBlock language="sql" code={`SELECT Id, Name, Email FROM Contact WHERE AccountId = NULL`} />

              <h4>Opportunities in Specific Stage</h4>
              <CodeBlock language="sql" code={`SELECT Id, Name, Amount, CloseDate FROM Opportunity WHERE StageName = 'Closed Won'`} />
            </section>

            <section>
              <h2>5. Using the Command Line Interface</h2>
              <p>Data Loader's command line enables scheduling and automation:</p>

              <h3>5.1 Process.conf Configuration</h3>
              <p>Create a configuration file for automated processes:</p>
              <CodeBlock language="xml" code={`<entry key="sfdc.endpoint" value="login.salesforce.com"/>
<entry key="sfdc.username" value="admin@company.com"/>
<entry key="sfdc.password" value="password+securitytoken"/>
<entry key="sfdc.useGlobalSavings" value="true"/>
<entry key="sfdc.timezone" value="America/Los_Angeles"/>`} />

              <h3>5.2 Command Line Examples</h3>
              
              <h4>Insert Command</h4>
              <CodeBlock language="bash" code={`cd dataloader/bin
process.bat ../config insertAccount`} />

              <h4>Export Command</h4>
              <CodeBlock language="bash" code={`process.bat ../config exportAccounts`} />
            </section>

            <section>
              <h2>6. Data Loader Settings</h2>

              <h3>6.1 Performance Settings</h3>
              <ul>
                <li><strong>Batch Size</strong> - Records per API call (default: 200)</li>
                <li><strong>Load Batch Size</strong> - Records per load (default: 200)</li>
                <li><strong>MaxFileSize</strong> - Maximum CSV file size</li>
                <li><strong>Timeout</strong> - Operation timeout</li>
              </ul>

              <h3>6.2 Error Handling</h3>
              <ul>
                <li>Create error CSV file</li>
                <li>Log to file</li>
                <li>Email results to admin</li>
              </ul>

              <h3>6.3 Data Loader Configuration File</h3>
              <p>Key settings in process-conf.xml:</p>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Setting</th>
                      <th>Description</th>
                      <th>Recommended</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>batchSize</td>
                      <td>Records per batch</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>commitRate</td>
                      <td>Commit frequency</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>useBulkAPI</td>
                      <td>Use Bulk API</td>
                      <td>true</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>7. Bulk API for Large Data Sets</h2>
              <p>For very large operations, enable Bulk API:</p>

              <h3>7.1 Benefits</h3>
              <ul>
                <li>Process millions of records</li>
                <li>Parallel processing</li>
                <li>Faster completion</li>
              </ul>

              <h3>7.2 Configuration</h3>
              <ol>
                <li>Go to Data Loader Settings</li>
                <li>Enable "Use Bulk API"</li>
                <li>Select API version</li>
                <li>Configure batch size</li>
              </ol>
            </section>

            <section>
              <h2>8. Troubleshooting Common Issues</h2>

              <h3>8.1 Connection Issues</h3>
              <ul>
                <li>Verify credentials and security token</li>
                <li>Check network connectivity</li>
                <li>Verify IP addresses are whitelisted</li>
              </ul>

              <h3>8.2 Data Validation Errors</h3>
              <ul>
                <li>Required fields missing</li>
                <li>Invalid field values</li>
                <li>Duplicate records</li>
              </ul>

              <h3>8.3 Performance Issues</h3>
              <ul>
                <li>Reduce batch size if timing out</li>
                <li>Enable Bulk API for large files</li>
                <li>Schedule during off-peak hours</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this lesson, you learned:</p>
              <ul>
                <li>Data Loader is for enterprise-scale operations (millions of records)</li>
                <li>Installation and first-time configuration</li>
                <li>Five main operations: Insert, Update, Upsert, Delete, Export</li>
                <li>Using SOQL queries for targeted exports</li>
                <li>Command line interface for automation</li>
                <li>Configuration and performance tuning</li>
                <li>Bulk API for large-scale operations</li>
                <li>Troubleshooting common issues</li>
              </ul>
              <p>
                <strong>Next:</strong> Learn how to validate data with Validation Rules.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/import-export.html" className="nav-link">← Import/Export</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/validation-rules.html" className="nav-link">Validation Rules →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}