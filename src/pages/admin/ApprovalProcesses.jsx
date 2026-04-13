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
  ]}
]

export default function ApprovalProcesses() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/approval-processes.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Approval Processes' }
          ]} />
          <article className="lesson-content">
            <h1>Approval Processes: Complete Guide</h1>
            <p className="lesson-intro">
              Approval Processes automate the routing of records to approvers for review and 
              authorization. This comprehensive guide covers everything from basic configuration 
              to advanced features like parallel approvals, dynamic approvers, and approval actions.
            </p>

            <section>
              <h2>1. Introduction to Approval Processes</h2>
              <p>
                Approval Processes in Salesforce provide a way to automate the review and 
                authorization of records by designated approvers. They are essential for 
                enforcing governance and ensuring that critical business decisions require 
                appropriate oversight before records are finalized or changed.
              </p>
              <p>
                Unlike simple workflow rules, Approval Processes are interactive - they 
                involve human decision-makers who can approve, reject, or reassign records. 
                This makes them ideal for scenarios requiring managerial review, compliance 
                checkpoints, or multi-level authorization.
              </p>

              <h3>1.1 When to Use Approval Processes</h3>
              <ul>
                <li>Expense reports requiring manager approval</li>
                <li>Discounts exceeding certain thresholds</li>
                <li>Contracts and legal agreements</li>
                <li>Large deal approvals</li>
                <li>New user provisioning requests</li>
                <li>Budget approvals</li>
                <li>Quality control sign-offs</li>
              </ul>

              <div className="info-box">
                <h4>📋 Approval vs. Workflow</h4>
                <p>Approval Processes require human intervention - someone must make a decision. 
                Workflow Rules can be fully automated. Use Approval Processes when you need 
                a person to review and authorize something.</p>
              </div>
            </section>

            <section>
              <h2>2. Approval Process Components</h2>
              <p>Approval Processes consist of several key components that work together:</p>

              <h3>2.1 Entry Criteria</h3>
              <p>Entry criteria determine which records enter the approval process:</p>
              <ul>
                <li><strong>Conditions</strong> - Specific field values must be met</li>
                <li><strong>Formula</strong> - A formula returns true</li>
                <li><strong>None</strong> - All records can be submitted</li>
              </ul>

              <h3>2.2 Initial Submission Actions</h3>
              <p>Actions that execute when a record is first submitted:</p>
              <ul>
                <li>Field updates</li>
                <li>Email alerts</li>
                <li>Create tasks</li>
                <li>Send outbound messages</li>
                <li>Flow triggers</li>
              </ul>

              <h3>2.3 Approval Steps</h3>
              <p>Sequential stages that records must pass through:</p>
              <ul>
                <li><strong>Step Name</strong> - Descriptive identifier</li>
                <li><strong>Criteria</strong> - Which records need this step</li>
                <li><strong>Approver</strong> - Who approves (manual, dynamic, or queue)</li>
                <li><strong>Step Actions</strong> - What happens at this step</li>
              </ul>

              <h3>2.4 Final Approval/Rejection Actions</h3>
              <p>Actions that execute when the process completes:</p>
              <ul>
                <li><strong>Final Approval Actions</strong> - Execute when approved</li>
                <li><strong>Final Rejection Actions</strong> - Execute when rejected</li>
                <li><strong>Recall Actions</strong> - Execute when user recalls submission</li>
              </ul>
            </section>

            <section>
              <h2>3. Creating an Approval Process</h2>

              <h3>3.1 Pre-Requisites</h3>
              <ul>
                <li>Determine which object needs approval</li>
                <li>Identify approval criteria and steps</li>
                <li>Decide who the approvers will be</li>
                <li>Plan what actions occur at each stage</li>
              </ul>

              <h3>3.2 Step-by-Step Creation</h3>
              <ol>
                <li>Navigate to <strong>Setup → Approval Processes</strong></li>
                <li>Select the object (e.g., Opportunity, Custom Object)</li>
                <li>Click <strong>Create New Approval Process</strong></li>
                <li>Choose <strong>Use Jump Start Wizard</strong> (for simple processes) or 
                    <strong>Use Standard Setup Wizard</strong> (for complex processes)</li>
              </ol>

              <h3>3.3 Using the Jump Start Wizard</h3>
              <p>The Jump Start Wizard creates a basic approval process quickly:</p>
              <ol>
                <li><strong>Step 1:</strong> Enter process name and unique name</li>
                <li><strong>Step 2:</strong> Select the approval field (e.g., Status)</li>
                <li><strong>Step 3:</strong> Choose the entry condition (e.g., when Status equals "Submitted")</li>
                <li><strong>Step 4:</strong> Select the approver (manager, user, or dynamic)</li>
                <li><strong>Step 5:</strong> Enter email template for notifications</li>
                <li><strong>Step 6:</strong> Activate the process</li>
              </ol>

              <h3>3.4 Using the Standard Setup Wizard</h3>
              <p>For more complex approval processes:</p>
              <ol>
                <li><strong>Step 1:</strong> Enter basic information (name, description)</li>
                <li><strong>Step 2:</strong> Set entry criteria</li>
                <li><strong>Step 3:</strong> Configure initial submission actions</li>
                <li><strong>Step 4:</strong> Add approval steps</li>
                <li><strong>Step 5:</strong> Configure final approval and rejection actions</li>
                <li><strong>Step 6:</strong> Set recall options</li>
                <li><strong>Step 7:</strong> Activate the process</li>
              </ol>

              <div className="info-box">
                <h4>⚠️ Important</h4>
                <p>Approval processes must be activated before they can be used. An inactive 
                approval process will not be available for submissions.</p>
              </div>
            </section>

            <section>
              <h2>4. Approver Selection Methods</h2>
              <p>Salesforce provides several ways to determine who approves records:</p>

              <h3>4.1 Manual Approval</h3>
              <p>Users select an approver when submitting:</p>
              <ul>
                <li>Submitter chooses from a list of users</li>
                <li>Flexibility for different scenarios</li>
                <li>Requires submitter to know appropriate approver</li>
              </ul>

              <h3>4.2 Manager</h3>
              <p>Record owner's manager is automatically selected:</p>
              <ul>
                <li>Uses the "Manager" field on User record</li>
                <li>Automatic - no manual selection needed</li>
                <li>Works well for hierarchical organizations</li>
                <li>May fail if manager is not defined</li>
              </ul>

              <h3>4.3 Role</h3>
              <p>Any user with a specific role can approve:</p>
              <ul>
                <li>Select users by their role</li>
                <li>Any user in that role can approve</li>
                <li>Useful for department-level approvals</li>
              </ul>

              <h3>4.4 Specific User</h3>
              <p>A named individual always approves:</p>
              <ul>
                <li>Fixed approver regardless of record</li>
                <li>Good for specialized approvals</li>
                <li>Not flexible - use carefully</li>
              </ul>

              <h3>4.5 Dynamic Approver</h3>
              <p>Approver determined by record fields:</p>
              <ul>
                <li>Uses custom field to specify approver</li>
                <li>Most flexible option</li>
                <li>Allows different approvers per record</li>
              </ul>

              <h3>4.6 Queue</h3>
              <p>A queue receives the approval request:</p>
              <ul>
                <li>Group of users can claim approvals</li>
                <li>Useful for team-based approvals</li>
                <li>Requires queue maintenance</li>
              </ul>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Best For</th>
                      <th>Considerations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Manual</td>
                      <td>Flexible routing</td>
                      <td>Requires user knowledge</td>
                    </tr>
                    <tr>
                      <td>Manager</td>
                      <td>Hierarchical approval</td>
                      <td>Manager must be set</td>
                    </tr>
                    <tr>
                      <td>Role</td>
                      <td>Department approvals</td>
                      <td>Role must be populated</td>
                    </tr>
                    <tr>
                      <td>Dynamic</td>
                      <td>Complex routing</td>
                      <td>Field must be maintained</td>
                    </tr>
                    <tr>
                      <td>Queue</td>
                      <td>Team approvals</td>
                      <td>Requires queue management</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>5. Approval Actions</h2>
              <p>Actions automate responses during the approval process:</p>

              <h3>5.1 Field Update Actions</h3>
              <ul>
                <li>Change field values on the record</li>
                <li>Update status to "Approved" or "Rejected"</li>
                <li>Set timestamps or tracking fields</li>
                <li>Can update related records</li>
              </ul>

              <h3>5.2 Email Alerts</h3>
              <ul>
                <li>Notify approvers of pending approval</li>
                <li>Inform submitters of status changes</li>
                <li>Send notifications to stakeholders</li>
                <li>Use templates for consistent messaging</li>
              </ul>

              <h3>5.3 Tasks</h3>
              <ul>
                <li>Create follow-up tasks for approvers</li>
                <li>Assign tasks to submitters</li>
                <li>Create tasks for compliance documentation</li>
              </ul>

              <h3>5.4 Flows</h3>
              <ul>
                <li>Trigger complex business logic</li>
                <li>Update multiple records</li>
                <li>Integrate with external systems</li>
              </ul>

              <h3>5.5 Post to Chatter</h3>
              <ul>
                <li>Announce approval status</li>
                <li>Tag relevant stakeholders</li>
                <li>Create discussion threads</li>
              </ul>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Action Type</th>
                      <th>When Available</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Field Update</td>
                      <td>Initial, Step, Final</td>
                    </tr>
                    <tr>
                      <td>Email Alert</td>
                      <td>Initial, Step, Final</td>
                    </tr>
                    <tr>
                      <td>Task</td>
                      <td>Initial, Step, Final</td>
                    </tr>
                    <tr>
                      <td>Flow</td>
                      <td>Initial, Step, Final</td>
                    </tr>
                    <tr>
                      <td>Chatter</td>
                      <td>Initial, Step, Final</td>
                    </tr>
                    <tr>
                      <td>Outbound Message</td>
                      <td>Initial, Step, Final</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>6. Advanced Approval Features</h2>

              <h3>6.1 Parallel Approval</h3>
              <p>Multiple approvers review simultaneously:</p>
              <ul>
                <li>Configure in approval step settings</li>
                <li>Select "Approver selection" as "Approver(s)"</li>
                <li>Choose whether "All approvers must respond" or "First response"</li>
                <li>Useful when multiple stakeholders must approve</li>
              </ul>

              <h3>6.2 Step Criteria</h3>
              <p>Not all records need every approval step:</p>
              <ul>
                <li>Configure step criteria per step</li>
                <li>Records meeting criteria go through the step</li>
                <li>Others skip to next step</li>
                <li>Example: Only deals over $100K need VP approval</li>
              </ul>

              <h3>6.3 Approval History Tracking</h3>
              <p>Salesforce automatically tracks the approval process:</p>
              <ul>
                <li><strong>Approval History</strong> - Shows all approval steps</li>
                <li><strong>Process Instance</strong> - Stores process metadata</li>
                <li><strong>Process Instance Step</strong> - Records each approval action</li>
                <li><strong>Process Instance Workitem</strong> - Pending approvals</li>
              </ul>

              <h3>6.4 E-Mail Notifications</h3>
              <p>Configure automatic email triggers:</p>
              <ul>
                <li>When record is submitted</li>
                <li>When record is approved/rejected</li>
                <li>When record is reassigned</li>
                <li>When approval is recalled</li>
              </ul>

              <div className="info-box">
                <h4>💡 Pro Tip</h4>
                <p>Use the "Send notification to selected approvers" checkbox in step settings 
                to control whether emails go to all potential approvers or just the assigned one.</p>
              </div>
            </section>

            <section>
              <h2>7. Approval Process Example Scenarios</h2>

              <h3>7.1 Example: Opportunity Deal Approval</h3>
              <p>Approve deals based on amount and territory:</p>
              <ul>
                <li><strong>Entry Criteria:</strong> Amount &gt;= $50,000</li>
                <li><strong>Initial Actions:</strong> Update Status to "Pending Approval"</li>
                <li><strong>Step 1 - Manager Approval:</strong>
                  <ul>
                    <li>Criteria: Amount &lt; $100,000</li>
                    <li>Approver: Manager of Owner</li>
                  </ul>
                </li>
                <li><strong>Step 2 - VP Approval:</strong>
                  <ul>
                    <li>Criteria: Amount &gt;= $100,000</li>
                    <li>Approver: VP of Sales</li>
                  </ul>
                </li>
                <li><strong>Final Approval Actions:</strong>
                  <ul>
                    <li>Update Status to "Approved"</li>
                    <li>Email alert to Legal team</li>
                  </ul>
                </li>
                <li><strong>Final Rejection Actions:</strong>
                  <ul>
                    <li>Update Status to "Rejected"</li>
                    <li>Email alert to owner with reason</li>
                  </ul>
                </li>
              </ul>

              <h3>7.2 Example: Expense Report Approval</h3>
              <p>Multi-level approval for expenses:</p>
              <ul>
                <li><strong>Entry Criteria:</strong> Expense_Amount__c &gt; 0</li>
                <li><strong>Step 1 - Direct Manager:</strong>
                  <ul>
                    <li>Approver: Manager</li>
                  </ul>
                </li>
                <li><strong>Step 2 - Finance Review:</strong>
                  <ul>
                    <li>Approver: Finance Queue</li>
                    <li>Criteria: Amount &gt; $1,000</li>
                  </ul>
                </li>
                <li><strong>Final Approval:</strong> Update to "Approved", create payment record</li>
              </ul>
            </section>

            <section>
              <h2>8. Submitting Records for Approval</h2>

              <h3>8.1 Submit for Approval Button</h3>
              <p>Users can submit records through the UI:</p>
              <ol>
                <li>Open the record</li>
                <li>Click <strong>Submit for Approval</strong> button</li>
                <li>System checks if record meets entry criteria</li>
                <li>If eligible, record enters the approval process</li>
              </ol>

              <h3>8.2 Programmatic Submission</h3>
              <p>Submit records through Apex or Flow:</p>
              <ul>
                <li>Use Approval.ProcessSubmitRequest class in Apex</li>
                <li>Invoke from Flow using "Submit for Approval" action</li>
                <li>Use Process Builder to auto-submit (deprecated)</li>
              </ul>

              <h3>8.3 Approval Actions Available to Users</h3>
              <ul>
                <li><strong>Approve</strong> - Approve and proceed to next step or finalize</li>
                <li><strong>Reject</strong> - Reject and end the process</li>
                <li><strong>Removed</strong> - Remove from approval (remove from queue)</li>
                <li><strong>Recall</strong> - Cancel the submission (initiator only)</li>
                <li><strong>Delegate</strong> - Send to another user</li>
              </ul>
            </section>

            <section>
              <h2>9. Managing Approval Processes</h2>

              <h3>9.1 Monitoring Pending Approvals</h3>
              <ul>
                <li><strong>My Pending Approvals</strong> - Home page component showing items to approve</li>
                <li><strong>Approval Queue</strong> - View all pending items (for admins)</li>
                <li><strong>ProcessInstanceWorkitem</strong> - Query pending approvals</li>
              </ul>

              <h3>9.2 Process Monitoring</h3>
              <ul>
                <li>View approval history on each record</li>
                <li>Use the Approval Processes list view in Setup</li>
                <li>Check Apex Jobs for scheduled actions</li>
                <li>Review debug logs for issues</li>
              </ul>

              <h3>9.3 Deactivating Approval Processes</h3>
              <ol>
                <li>Navigate to the approval process in Setup</li>
                <li>Click <strong>Deactivate</strong></li>
                <li>Confirm the deactivation</li>
                <li>Pending items will be cancelled</li>
              </ol>

              <div className="info-box">
                <h4>⚠️ Warning</h4>
                <p>Deactivating an approval process does not delete it - records can no longer 
                be submitted for approval. Pending items in the process will be cancelled.</p>
              </div>
            </section>

            <section>
              <h2>10. Approval Process Limits and Considerations</h2>

              <h3>10.1 Limits</h3>
              <ul>
                <li>50 active approval processes per object</li>
                <li>25 steps per approval process</li>
                <li>5 parallel approvers per step</li>
                <li>10 actions per step</li>
              </ul>

              <h3>10.2 Considerations</h3>
              <ul>
                <li>User must have "Approve" permission on object</li>
                <li>Record must meet entry criteria to be submitted</li>
                <li>Approvers see records they have access to (sharing rules apply)</li>
                <li>Approval email templates must be active to send notifications</li>
              </ul>

              <h3>10.3 Best Practices</h3>
              <ul>
                <li>Keep approval processes simple and focused</li>
                <li>Use step criteria to skip unnecessary steps</li>
                <li>Test thoroughly with different user scenarios</li>
                <li>Document the approval process for users</li>
                <li>Monitor pending approvals to prevent bottlenecks</li>
                <li>Use parallel approvals when multiple stakeholders must approve</li>
              </ul>
            </section>

            <section>
              <h2>11. Troubleshooting Approval Processes</h2>

              <h3>11.1 Common Issues</h3>
              <ul>
                <li><strong>Submit button not appearing</strong> - Check entry criteria, user permissions</li>
                <li><strong>Email notifications not sending</strong> - Verify email templates active, check deliverability</li>
                <li><strong>Approver not receiving approvals</strong> - Check approver selection, sharing settings</li>
                <li><strong>Record stuck in approval</strong> - Check step criteria, approver availability</li>
                <li><strong>Actions not executing</strong> - Verify action configuration, check debug logs</li>
              </ul>

              <h3>11.2 Debugging Tools</h3>
              <ul>
                <li>Review the approval history on the record</li>
                <li>Check debug logs for execution details</li>
                <li>Query ProcessInstance and related objects</li>
                <li>Verify email deliverability in Setup</li>
                <li>Check user permissions and profile settings</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on Approval Processes, you learned:</p>
              <ul>
                <li>Approval Processes automate record review and authorization</li>
                <li>Key components: Entry criteria, submission actions, steps, final actions</li>
                <li>Approver selection methods: Manual, Manager, Role, Dynamic, Queue</li>
                <li>Available actions: Field updates, emails, tasks, flows, chatter</li>
                <li>Advanced features: parallel approvals, step criteria, history tracking</li>
                <li>How to submit records for approval and manage approval actions</li>
                <li>Monitoring and troubleshooting techniques</li>
                <li>Best practices for approval process design</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to Security to learn about Sharing Settings, 
                which control record-level access in Salesforce.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/process-builder.html" className="nav-link">← Process Builder</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/sharing-settings.html" className="nav-link">Sharing Settings →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}