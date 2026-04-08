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
  ]}
]

export default function FlowBuilder() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/flow-builder.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Flow Builder' }
          ]} />
          <article className="lesson-content">
            <h1>Flow Builder: The Complete Guide</h1>
            <p className="lesson-intro">
              Flow Builder is Salesforce's powerful declarative automation tool. This comprehensive guide covers 
              all flow types, elements, and best practices for building enterprise-grade automations.
            </p>

            <section>
              <h2>1. Introduction to Flow Builder</h2>
              <p>
                Flow Builder is Salesforce's point-and-click automation tool that allows administrators and 
                developers to build complex business processes without writing code. As the successor to 
                Process Builder and Workflow Rules, Flow is the future of Salesforce automation.
              </p>

              <h3>1.1 Why Flow Builder?</h3>
              <ul>
                <li><strong>Modern Tool</strong> - Actively developed and enhanced</li>
                <li><strong>Flexible</strong> - Supports complex logic</li>
                <li><strong>Powerful</strong> - Handles almost any automation scenario</li>
                <li><strong>Low-Code</strong> - Point-and-click interface</li>
                <li><strong>Debugging</strong> - Built-in debugging tools</li>
              </ul>

              <div className="info-box">
                <h4>📢 Salesforce Direction</h4>
                <p>Salesforce has announced that Process Builder and Workflow Rules will eventually be 
                retired. All new automation should be built in Flow. This is the investment for the future.</p>
              </div>
            </section>

            <section>
              <h2>2. Flow Types</h2>
              <p>Flow Builder offers different flow types for different use cases:</p>

              <h3>2.1 Screen Flow</h3>
              <p>Interactive flows with user interface:</p>
              <ul>
                <li>Guided wizards</li>
                <li>Data entry forms</li>
                <li>Interactive tutorials</li>
                <li>Custom Lightning pages</li>
              </ul>

              <h3>2.2 Record-Triggered Flow</h3>
              <p>Triggered when records change:</p>
              <ul>
                <li>Created</li>
                <li>Updated</li>
                <li>Created or Updated</li>
                <li>Deleted (after delete)</li>
              </ul>

              <h3>2.3 Schedule-Triggered Flow</h3>
              <p>Runs on a schedule:</p>
              <ul>
                <li>Daily, weekly, monthly</li>
                <li>Batch processing</li>
                <li>Cleanup tasks</li>
                <li>Reminder automation</li>
              </ul>

              <h3>2.4 Platform Event-Triggered Flow</h3>
              <p>Responds to platform events:</p>
              <ul>
                <li>Real-time integration</li>
                <li>External system events</li>
                <li>Custom event publishing</li>
              </ul>

              <h3>2.5 Autolaunched Flow</h3>
              <p>Called from other processes:</p>
              <ul>
                <li>Called by other flows</li>
                <li>Invoked by Apex</li>
                <li>REST API invocation</li>
                <li>Custom button actions</li>
              </ul>
            </section>

            <section>
              <h2>3. Flow Elements</h2>

              <h3>3.1 Action Elements</h3>
              <ul>
                <li><strong>Create Records</strong> - Insert new records</li>
                <li><strong>Update Records</strong> - Modify existing records</li>
                <li><strong>Delete Records</strong> - Remove records</li>
                <li><strong>Send Email</strong> - Send email alerts</li>
                <li><strong>Post to Chatter</strong> - Feed posts</li>
                <li><strong>Submit for Approval</strong> - Initiate approval</li>
              </ul>

              <h3>3.2 Logic Elements</h3>
              <ul>
                <li><strong>Decision</strong> - Branch based on conditions</li>
                <li><strong>Assignment</strong> - Set variable values</li>
                <li><strong>Loop</strong> - Iterate through collections</li>
                <li><strong>Wait</strong> - Pause execution</li>
              </ul>

              <h3>3.3 Data Elements</h3>
              <ul>
                <li><strong>Get Records</strong> - Query Salesforce data</li>
                <li><strong>Create Records</strong> - Insert new data</li>
                <li><strong>Update Records</strong> - Modify data</li>
                <li><strong>Delete Records</strong> - Remove data</li>
                <li><strong>Action</strong> - Call external systems</li>
              </ul>

              <div className="info-box">
                <h4>💡 Element Naming</h4>
                <p>Use descriptive names for all elements. This helps with debugging and maintenance. 
                Instead of "Decision_1", use "Check Opportunity Stage".</p>
              </div>
            </section>

            <section>
              <h2>4. Building a Record-Triggered Flow</h2>

              <h3>4.1 Configuration</h3>
              <ol>
                <li>Go to Setup → Flows</li>
                <li>Click New Flow</li>
                <li>Select "Record-Triggered Flow"</li>
                <li>Choose the object</li>
                <li>Configure trigger conditions</li>
                <li>Define entry conditions (optional)</li>
                <li>Set when to run</li>
                <li>Save and Activate</li>
              </ol>

              <h3>4.2 Trigger Configuration Options</h3>
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
                      <td>A record is created</td>
                      <td>Triggers on insert</td>
                      <td>New record processing</td>
                    </tr>
                    <tr>
                      <td>A record is updated</td>
                      <td>Triggers on update</td>
                      <td>Change monitoring</td>
                    </tr>
                    <tr>
                      <td>A record is created or updated</td>
                      <td>Triggers on both</td>
                      <td>Comprehensive automation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>4.3 Entry Conditions</h3>
              <ul>
                <li><strong>None</strong> - Run for every trigger</li>
                <li><strong>Condition Requirements</strong> - Run when conditions met</li>
                <li><strong>Formula</strong> - Run when formula evaluates true</li>
              </ul>
            </section>

            <section>
              <h2>5. Flow Builder Examples</h2>

              <h3>5.1 Example: Welcome Email to New Contacts</h3>
              <ol>
                <li><strong>Trigger:</strong> Record-Triggered, Contact created</li>
                <li><strong>Decision:</strong> Check if Contact has email</li>
                <li><strong>Action:</strong> Send email template</li>
              </ol>

              <h3>5.2 Example: Update Account When Opportunity Closed</h3>
              <ol>
                <li><strong>Trigger:</strong> Opportunity updated</li>
                <li><strong>Condition:</strong> Stage = Closed Won</li>
                <li><strong>Get Records:</strong> Get related Account</li>
                <li><strong>Update Records:</strong> Update Account Rating to Hot</li>
              </ol>

              <h3>5.3 Example: Daily Case Age Reminder</h3>
              <ol>
                <li><strong>Trigger:</strong> Schedule, Daily at 9 AM</li>
                <li><strong>Get Records:</strong> Get open cases &gt; 5 days old</li>
                <li><strong>Loop:</strong> Iterate through cases</li>
                <li><strong>Action:</strong> Update case owner to escalation queue</li>
              </ol>
            </section>

            <section>
              <h2>6. Flow Resources</h2>

              <h3>6.1 Variables</h3>
              <ul>
                <li><strong>Variable</strong> - Single value container</li>
                <li><strong>Record Variable</strong> - Single sObject</li>
                <li><strong>Record Collection Variable</strong> - List of sObjects</li>
                <li><strong>Constant</strong> - Unchanging value</li>
                <li><strong>SObject Collection Variable</strong> - Complex collections</li>
              </ul>

              <h3>6.2 Formula in Flows</h3>
              <p>Use formulas to:</p>
              <ul>
                <li>Calculate values</li>
                <li>Format text</li>
                <li>Build dynamic queries</li>
                <li>Make decisions</li>
              </ul>

              <h3>6.3 Flow Interviews</h3>
              <p>Each flow execution creates an interview:</p>
              <ul>
                <li>Tracks execution state</li>
                <li>Maintains variable values</li>
                <li>Enables debugging</li>
                <li>Provides transaction context</li>
              </ul>
            </section>

            <section>
              <h2>7. Flow Best Practices</h2>

              <h3>7.1 Design Best Practices</h3>
              <ul>
                <li>Start with a clear requirements</li>
                <li>Map out the flow before building</li>
                <li>Keep flows focused on single purpose</li>
                <li>Use subflows for reusable logic</li>
                <li>Document complex flows</li>
              </ul>

              <h3>7.2 Performance Best Practices</h3>
              <ul>
                <li>Use entry conditions to limit executions</li>
                <li>Bulkify your flows (handle collections)</li>
                <li>Minimize SOQL queries (use Get Records efficiently)</li>
                <li>Use fast lookup要素 when possible</li>
                <li>Avoid unnecessary loops</li>
              </ul>

              <div className="info-box">
                <h4>⚠️ Flow Limits</h4>
                <p>Each flow can have a maximum of 2000 elements. For more complex automation, 
                split into multiple flows or use Apex.</p>
              </div>
            </section>

            <section>
              <h2>8. Debugging and Testing</h2>

              <h3>8.1 Debug Mode</h3>
              <ul>
                <li>Enable Debug Mode in flow detail page</li>
                <li>See detailed execution logs</li>
                <li>View variable values at each step</li>
                <li>Track decision outcomes</li>
              </ul>

              <h3>8.2 Flow Debugger</h3>
              <ul>
                <li>Click Debug in Flow Builder</li>
                <li>Select a record to test</li>
                <li>Step through each element</li>
                <li>View real-time values</li>
              </ul>

              <h3>8.3 Flow Troubleshooting</h3>
              <ul>
                <li>Check Flow Interview in Setup</li>
                <li>Review error messages</li>
                <li>Use Debug mode to trace issues</li>
                <li>Check limit usage</li>
              </ul>
            </section>

            <section>
              <h2>9. Migrating to Flow</h2>
              <p>When moving from Process Builder or Workflow Rules:</p>

              <h3>9.1 Migration Options</h3>
              <ul>
                <li><strong>Individual Migration</strong> - Migrate one at a time</li>
                <li><strong>Bulk Migration</strong> - Use migration tool</li>
                <li><strong>Parallel Running</strong> - Run both temporarily</li>
              </ul>

              <h3>9.2 Migration Tips</h3>
              <ul>
                <li>Test thoroughly before deactivating old automation</li>
                <li>Document what each automation does</li>
                <li>Consider running both during transition</li>
                <li>Monitor for unexpected behavior</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this lesson, you learned:</p>
              <ul>
                <li>Flow Builder is Salesforce's modern declarative automation tool</li>
                <li>Five flow types: Screen, Record-Triggered, Schedule, Platform Event, Autolaunched</li>
                <li>Flow elements: Actions, Logic, Data</li>
                <li>How to build Record-Triggered Flows</li>
                <li>Flow resources: Variables, Formulas, Constants</li>
                <li>Best practices for design and performance</li>
                <li>Debugging and troubleshooting flows</li>
                <li>Migrating from Process Builder to Flow</li>
              </ul>
              <p>
                <strong>Next:</strong> Learn about Process Builder (legacy tool).
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/validation-rules.html" className="nav-link">← Validation Rules</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/process-builder.html" className="nav-link">Process Builder →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}