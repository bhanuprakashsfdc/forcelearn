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

export default function ProcessBuilder() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/process-builder.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Process Builder' }
          ]} />
          <article className="lesson-content">
            <h1>Process Builder: Complete Guide</h1>
            <p className="lesson-intro">
              Process Builder is a drag-and-drop visual workflow tool that automates complex business 
              processes. While now considered a legacy tool in favor of Flow Builder, understanding 
              Process Builder is essential for maintaining existing implementations and understanding 
              the evolution of Salesforce automation.
            </p>

            <section>
              <h2>1. Introduction to Process Builder</h2>
              <p>
                Process Builder (introduced in Spring '15) was Salesforce's primary declarative 
                automation tool for building complex processes that couldn't be handled by simpler 
                tools like Workflow Rules. It provided a visual interface for defining criteria, 
                executing actions, and controlling process flow without writing code.
              </p>
              <p>
                The tool allowed administrators to create processes that could evaluate records, 
                make decisions, and perform multiple actions - all through a point-and-click interface. 
                For years, it was the recommended tool for complex automation scenarios.
              </p>

              <div className="info-box">
                <h4>📢 Important Announcement</h4>
                <p>Salesforce has announced that Process Builder will eventually be retired. 
                All new automation should be built in Flow Builder. Existing Process Builder 
                processes will continue to work, but organizations should plan to migrate to Flow. 
                Use Process Builder only for maintaining existing implementations.</p>
              </div>
            </section>

            <section>
              <h2>2. Process Builder vs. Flow Builder</h2>
              <p>Understanding the relationship between these tools is crucial for modern Salesforce administration:</p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Process Builder</th>
                      <th>Flow Builder</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Status</strong></td>
                      <td>Legacy/Maintenance Mode</td>
                      <td>Active Development</td>
                    </tr>
                    <tr>
                      <td><strong>Interface</strong></td>
                      <td>Visual flow diagram</td>
                      <td>Modern drag-and-drop canvas</td>
                    </tr>
                    <tr>
                      <td><strong>Screen Flows</strong></td>
                      <td>Limited capability</td>
                      <td>Full-featured</td>
                    </tr>
                    <tr>
                      <td><strong>Debugging</strong></td>
                      <td>Basic</td>
                      <td>Advanced Debugger</td>
                    </tr>
                    <tr>
                      <td><strong>Bulkification</strong></td>
                      <td>Manual handling required</td>
                      <td>Built-in collection handling</td>
                    </tr>
                    <tr>
                      <td><strong>Transaction Control</strong></td>
                      <td>Limited</td>
                      <td>Full control</td>
                    </tr>
                    <tr>
                      <td><strong>Future</strong></td>
                      <td>Being Retired</td>
                      <td>Current Standard</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2.1 When to Use Process Builder (Legacy)</h3>
              <p>You may still encounter Process Builder in these scenarios:</p>
              <ul>
                <li>Maintaining existing production processes</li>
                <li>Legacy orgs that haven't migrated to Flow</li>
                <li>Supporting older implementations</li>
                <li>Migration planning and assessment</li>
              </ul>

              <h3>2.2 When to Use Flow Builder (Current)</h3>
              <p>All new automation should use Flow:</p>
              <ul>
                <li>Any new automation requirements</li>
                <li>Migrating existing Process Builder processes</li>
                <li>Building complex business logic</li>
                <li>Creating interactive user interfaces</li>
              </ul>
            </section>

            <section>
              <h2>3. Process Builder Components</h2>
              <p>Process Builder consists of several key components that work together to define automation:</p>

              <h3>3.1 Process</h3>
              <p>The overall container for your automation:</p>
              <ul>
                <li><strong>Process Name</strong> - Unique identifier</li>
                <li><strong>API Name</strong> - System reference name</li>
                <li><strong>Description</strong> - Documentation of purpose</li>
                <li><strong>The process starts when</strong> - Trigger configuration</li>
              </ul>

              <h3>3.2 Triggering Options</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Trigger</th>
                      <th>Description</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A record is created</td>
                      <td>Triggers when new record inserted</td>
                      <td>New lead processing, record creation</td>
                    </tr>
                    <tr>
                      <td>A record is created or edited</td>
                      <td>Triggers on insert or update</td>
                      <td>Status changes, field updates</td>
                    </tr>
                    <tr>
                      <td>A platform event message is received</td>
                      <td>Triggers on event occurrence</td>
                      <td>External system integration</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.3 Criteria</h3>
              <p>Conditions that determine when the process executes actions:</p>
              <ul>
                <li><strong>Conditions are met</strong> - Specific field criteria must be true</li>
                <li><strong>Formula evaluates to true</strong> - Custom formula logic</li>
                <li><strong>No criteria - always execute</strong> - Run for all triggers</li>
              </ul>

              <h3>3.4 Actions</h3>
              <p>What the process does when criteria are met:</p>
              <ul>
                <li><strong>Immediate Actions</strong> - Execute immediately when criteria is true</li>
                <li><strong>Scheduled Actions</strong> - Execute at a specified time in the future</li>
                <li><strong>Action Groups</strong> - Group multiple actions together</li>
              </ul>
            </section>

            <section>
              <h2>4. Creating a Process Builder Process</h2>

              <h3>4.1 Step-by-Step Process</h3>
              <ol>
                <li>Navigate to <strong>Setup → Process Builder</strong></li>
                <li>Click <strong>New</strong> to create a new process</li>
                <li><strong>Step 1:</strong> Enter the process name and description</li>
                <li><strong>Step 2:</strong> Choose "The process starts when" option:
                  <ul>
                    <li>A record is created</li>
                    <li>A record is created or edited</li>
                  </ul>
                </li>
                <li><strong>Step 3:</strong> Click <strong>Save</strong> to create the process</li>
                <li>Click <strong>+ Add Object</strong> to select the object to monitor</li>
                <li>Define criteria for when actions should execute</li>
                <li>Add immediate and/or scheduled actions</li>
                <li><strong>Activate</strong> the process when ready</li>
              </ol>

              <div className="info-box">
                <h4>⚠️ Important</h4>
                <p>Processes must be activated before they execute. You can have multiple 
                versions of a process, but only one can be active at a time.</p>
              </div>
            </section>

            <section>
              <h2>5. Action Types in Process Builder</h2>

              <h3>5.1 Record Actions</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Create a Record</strong></td>
                      <td>Creates a new record</td>
                      <td>Create a Task when Opportunity stage changes</td>
                    </tr>
                    <tr>
                      <td><strong>Update Records</strong></td>
                      <td>Updates the triggering record or related records</td>
                      <td>Update Account when Contact is modified</td>
                    </tr>
                    <tr>
                      <td><strong>Quick Action</strong></td>
                      <td>Executes a pre-defined action</td>
                      <td>Send email, create record, update record</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>5.2 Communication Actions</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Send Email</strong></td>
                      <td>Sends an email alert</td>
                      <td>Notify manager of new lead</td>
                    </tr>
                    <tr>
                      <td><strong>Post to Chatter</strong></td>
                      <td>Posts to Chatter feed</td>
                      <td>Announce new opportunity</td>
                    </tr>
                    <tr>
                      <td><strong>Submit for Approval</strong></td>
                      <td>Submits record to approval process</td>
                      <td>Submit large deals for approval</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>5.3 Flow and Apex Actions</h3>
              <ul>
                <li><strong>Launch a Flow</strong> - Triggers an autolaunched flow</li>
                <li><strong>Invoke Apex</strong> - Calls an @InvocableMethod Apex class</li>
                <li><strong>Custom Notification</strong> - Sends a custom notification</li>
              </ul>

              <h3>5.4 Process Actions</h3>
              <ul>
                <li><strong>Lock/Unlock Record</strong> - Controls record editing</li>
                <li><strong>Generate Flow</strong> - Creates a flow from process (deprecated)</li>
              </ul>
            </section>

            <section>
              <h2>6. Scheduled Actions</h2>
              <p>Scheduled actions execute at a specified time after the process triggers:</p>

              <h3>6.1 Scheduling Options</h3>
              <ul>
                <li><strong>Number of days/hours after</strong> - Fixed time offset</li>
                <li><strong>Specific Time</strong> - Exact date/time</li>
                <li><strong>Based on Date Field</strong> - Dynamic based on record date</li>
              </ul>

              <h3>6.2 Scheduled Action Example</h3>
              <p>Follow-up reminder for new leads:</p>
              <ol>
                <li>Trigger: Lead created</li>
                <li>Criteria: Status equals "Open"</li>
                <li>Action: Send email alert - scheduled 3 days after trigger</li>
              </ol>

              <h3>6.3 Scheduled Actions in Process Builder</h3>
              <ul>
                <li>Add a <strong>Scheduled Action</strong> to your criteria node</li>
                <li>Set the <strong>Action Name</strong> (descriptive identifier)</li>
                <li>Choose <strong>Time Source</strong> (trigger date or specific field)</li>
                <li>Set <strong>Offset Count</strong> and <strong>Unit</strong> (days/hours)</li>
                <li>Configure the action to execute</li>
              </ul>

              <div className="info-box">
                <h4>💡 Tip</h4>
                <p>Scheduled actions use the organization's default time zone. Consider this 
                when setting up time-based automation.</p>
              </div>
            </section>

            <section>
              <h2>7. Process Builder Example Scenarios</h2>

              <h3>7.1 Example: Opportunity Stage Update</h3>
              <p>When an opportunity reaches "Closed Won", create related records:</p>
              <ul>
                <li><strong>Trigger:</strong> Opportunity is created or edited</li>
                <li><strong>Criteria:</strong> Stage equals "Closed Won"</li>
                <li><strong>Immediate Actions:</strong>
                  <ul>
                    <li>Update Account: Set "Customer Status" to "Active"</li>
                    <li>Create Task: "Schedule implementation call"</li>
                    <li>Send Email: Congratulations template to owner</li>
                  </ul>
                </li>
              </ul>

              <h3>7.2 Example: Case Escalation</h3>
              <p>Automate escalation for high-priority cases:</p>
              <ul>
                <li><strong>Trigger:</strong> Case is created or edited</li>
                <li><strong>Criteria:</strong> Priority equals "High" and Status is "New"</li>
                <li><strong>Immediate Actions:</strong>
                  <ul>
                    <li>Update Case: Set Owner to "Escalation Queue"</li>
                    <li>Send Email: Alert escalation team</li>
                  </ul>
                </li>
                <li><strong>Scheduled Actions:</strong>
                  <ul>
                    <li>2 hours later: Send reminder if not yet contacted</li>
                  </ul>
                </li>
              </ul>

              <h3>7.3 Example: Lead Reassignment</h3>
              <p>Automate lead distribution after inactivity:</p>
              <ul>
                <li><strong>Trigger:</strong> Lead is created or edited</li>
                <li><strong>Criteria:</strong> Status is "Open" and Days_Open__c &#62; 7</li>
                <li><strong>Scheduled Actions:</strong>
                  <ul>
                    <li>7 days later: Reassign to round-robin queue</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2>8. Managing Processes</h2>

              <h3>8.1 Version Control</h3>
              <ul>
                <li>Each time you edit and save a process, a new version is created</li>
                <li>Only one version can be active at a time</li>
                <li>Previous versions can be viewed but not edited</li>
                <li>You can deactivate a process to stop it from running</li>
              </ul>

              <h3>8.2 Process List View</h3>
              <p>The Process Builder list view shows:</p>
              <ul>
                <li><strong>Process Name</strong> - The process identifier</li>
                <li><strong>Object</strong> - The object the process monitors</li>
                <li><strong>Active</strong> - Whether the process is running</li>
                <li><strong>Last Modified</strong> - When last updated</li>
                <li><strong>Status</strong> - Active, Inactive, or Draft</li>
              </ul>

              <h3>8.3 Deactivating Processes</h3>
              <ol>
                <li>Open the process in Process Builder</li>
                <li>Click <strong>Deactivate</strong> button</li>
                <li>Confirm the deactivation</li>
                <li>The process will no longer execute</li>
              </ol>

              <div className="info-box">
                <h4>⚠️ Warning</h4>
                <p>When you deactivate a process, all scheduled actions that haven't executed 
                yet will be cancelled. Make sure to plan deactivations carefully.</p>
              </div>
            </section>

            <section>
              <h2>9. Migrating to Flow</h2>
              <p>Salesforce provides tools to help migrate Process Builder to Flow:</p>

              <h3>9.1 Migration Options</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Built-in Migrate to Flow</td>
                      <td>Salesforce auto-conversion tool</td>
                      <td>Low - simple processes</td>
                    </tr>
                    <tr>
                      <td>Manual Rebuild</td>
                      <td>Build equivalent in Flow Builder</td>
                      <td>High - full control</td>
                    </tr>
                    <tr>
                      <td>Hybrid Approach</td>
                      <td>Migrate in stages, run both</td>
                      <td>Medium - gradual transition</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>9.2 Migration Steps</h3>
              <ol>
                <li><strong>Inventory:</strong> List all Process Builder processes</li>
                <li><strong>Analyze:</strong> Document what each process does</li>
                <li><strong>Design:</strong> Plan equivalent Flow implementation</li>
                <li><strong>Build:</strong> Create new flow in Flow Builder</li>
                <li><strong>Test:</strong> Thoroughly test the flow</li>
                <li><strong>Deploy:</strong> Activate flow, monitor closely</li>
                <li><strong>Decommission:</strong> Deactivate Process Builder process</li>
              </ol>

              <h3>9.3 Migration Best Practices</h3>
              <ul>
                <li>Start with simplest processes first</li>
                <li>Test flows thoroughly before deactivating Process Builder</li>
                <li>Run both during transition period</li>
                <li>Document all automation for knowledge transfer</li>
                <li>Monitor for unexpected behavior after migration</li>
              </ul>

              <div className="info-box">
                <h4>🔄 Migration Support</h4>
                <p>The "Migrate to Flow" button in Process Builder provides an automated starting 
                point for migration, but most complex processes will require manual refinement 
                and testing.</p>
              </div>
            </section>

            <section>
              <h2>10. Troubleshooting Process Builder</h2>

              <h3>10.1 Common Issues</h3>
              <ul>
                <li><strong>Process not triggering</strong> - Check trigger conditions and criteria</li>
                <li><strong>Actions not executing</strong> - Verify action configuration and permissions</li>
                <li><strong>Scheduled actions not running</strong> - Check time-based queue status</li>
                <li><strong>Too many SOQL queries</strong> - Add criteria to limit executions</li>
                <li><strong>Governor limit errors</strong> - Reduce action count or optimize logic</li>
              </ul>

              <h3>10.2 Debugging Tips</h3>
              <ul>
                <li>Check <strong>Time-Based Workflow</strong> in Setup to see pending actions</li>
                <li>Use debug logs to trace execution</li>
                <li>Review <strong>Paused Flow Interviews</strong> for stuck flows</li>
                <li>Check <strong>Apex Jobs</strong> for scheduled action status</li>
              </ul>

              <h3>10.3 Known Limitations</h3>
              <ul>
                <li>Cannot handle bulk records efficiently without custom code</li>
                <li>Limited to one trigger per object</li>
                <li>No native looping capability</li>
                <li>Screen flows very limited compared to Flow Builder</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on Process Builder, you learned:</p>
              <ul>
                <li>Process Builder is a legacy automation tool being replaced by Flow Builder</li>
                <li>Key components: Processes, Triggers, Criteria, and Actions</li>
                <li>Various action types: Record actions, Communication, Flow/Apex</li>
                <li>Scheduled actions for time-based automation</li>
                <li>Real-world example scenarios and use cases</li>
                <li>Process version management and deactivation</li>
                <li>Migration strategies to Flow Builder</li>
                <li>Troubleshooting techniques and limitations</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to Approval Processes to learn how to create 
                automated approval workflows for records in Salesforce.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/flow-builder.html" className="nav-link">← Flow Builder</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/approval-processes.html" className="nav-link">Approval Processes →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}