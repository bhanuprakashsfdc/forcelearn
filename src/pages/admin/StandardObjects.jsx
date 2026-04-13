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

export default function StandardObjects() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/standard-objects.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Standard Objects' }
          ]} />
          <article className="lesson-content">
            <h1>Standard Objects: The Foundation of Salesforce CRM</h1>
            <p className="lesson-intro">
              Standard Objects are the pre-built database tables that come with Salesforce. Understanding these objects 
              is fundamental to configuring any Salesforce org. This comprehensive lesson covers every standard object, 
              their relationships, and how to use them effectively.
            </p>

            <section>
              <h2>1. Understanding Standard Objects</h2>
              <p>
                Standard Objects are database tables that Salesforce provides out-of-the-box. They're optimized 
                for common business processes and form the backbone of any Salesforce implementation. Unlike 
                custom objects, standard objects have been refined over decades based on millions of implementations.
              </p>
              
              <h3>1.1 Key Characteristics</h3>
              <ul>
                <li><strong>Pre-built</strong> - Available immediately in every org</li>
                <li><strong>Optimized</strong> - Performance-tuned for typical operations</li>
                <li><strong>Supported</strong> - Guaranteed backward compatibility</li>
                <li><strong>Integrated</strong> - Work seamlessly with other objects</li>
                <li><strong>Upgradeable</strong> - Improve with Salesforce releases</li>
              </ul>

              <div className="info-box">
                <h4>💡 Architecture Insight</h4>
                <p>Standard Objects use the best practices from millions of CRM implementations. 
                Always prefer standard objects over custom ones when they meet your needs—the 
                Salesforce ecosystem has optimized them over 20+ years.</p>
              </div>
            </section>

            <section>
              <h2>2. Core Standard Objects Deep Dive</h2>

              <h3>2.1 Account Object</h3>
              <p>The Account object is the cornerstone of most Salesforce implementations—it represents companies or businesses you have a relationship with.</p>
              
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Field Category</th>
                      <th>Fields</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Identification</td>
                      <td>Name, Account Number, D-U-N-S</td>
                      <td>Unique identification</td>
                    </tr>
                    <tr>
                      <td>Classification</td>
                      <td>Type, Industry, Rating</td>
                      <td>Categorization</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>Billing Address, Shipping Address</td>
                      <td>Geographic data</td>
                    </tr>
                    <tr>
                      <td>Financial</td>
                      <td>Annual Revenue, Number of Employees</td>
                      <td>Business metrics</td>
                    </tr>
                    <tr>
                      <td>Ownership</td>
                      <td>Owner, Parent Account</td>
                      <td>Access and hierarchy</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4>Account Record Types</h4>
              <p>Common record type configurations:</p>
              <ul>
                <li><strong>Prospect</strong> - Potential new accounts</li>
                <li><strong>Customer</strong> - Active customers</li>
                <li><strong>Partner</strong> - Channel partners</li>
                <li><strong>Competitor</strong> - Competitive companies</li>
              </ul>

              <h3>2.2 Contact Object</h3>
              <p>Contacts represent individual people associated with accounts. The relationship is typically one-to-many (one Account can have many Contacts).</p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Field Category</th>
                      <th>Key Fields</th>
                      <th>Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>First Name, Last Name, Salutation</td>
                      <td>Contact identification</td>
                    </tr>
                    <tr>
                      <td>Contact Info</td>
                      <td>Email, Phone, Mobile Phone</td>
                      <td>Communication</td>
                    </tr>
                    <tr>
                      <td>Professional</td>
                      <td>Title, Department, Reports To</td>
                      <td>Organizational role</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>Mailing Address, Other Address</td>
                      <td>Location data</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4>Contact Roles</h4>
              <p>Contact Roles define the relationship between Contacts and Opportunities/Cases:</p>
              <ul>
                <li>Business Sponsor</li>
                <li>Decision Maker</li>
                <li>Evaluator</li>
                <li>End User</li>
                <li>Influencer</li>
              </ul>

              <h3>2.3 Lead Object</h3>
              <p>Leads represent prospective customers—people or companies who have shown interest but haven't been qualified yet.</p>

              <h4>Lead Status Values</h4>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Meaning</th>
                      <th>Next Step</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>New</td>
                      <td>Recently created</td>
                      <td>Initial outreach</td>
                    </tr>
                    <tr>
                      <td>Contacted</td>
                      <td>First contact made</td>
                      <td>Qualification</td>
                    </tr>
                    <tr>
                      <td>Open</td>
                      <td>In progress</td>
                      <td>Continue nurturing</td>
                    </tr>
                    <tr>
                      <td>Qualified</td>
                      <td>Meets criteria</td>
                      <td>Convert to Opportunity</td>
                    </tr>
                    <tr>
                      <td>Unqualified</td>
                      <td>Not a fit</td>
                      <td>Mark closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4>Lead Fields for Qualification</h4>
              <ul>
                <li><strong>Rating</strong> - Hot, Warm, Cold</li>
                <li><strong>Annual Revenue</strong> - Company financial fit</li>
                <li><strong>Number of Employees</strong> - Company size</li>
                <li><strong>Industry</strong> - Target market match</li>
              </ul>

              <h3>2.4 Opportunity Object</h3>
              <p>Opportunities represent potential revenue-generating sales. They're the heart of the sales process.</p>

              <h4>Standard Sales Pipeline Stages</h4>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Stage</th>
                      <th>Probability</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Prospecting</td>
                      <td>10%</td>
                      <td>Finding potential customers</td>
                    </tr>
                    <tr>
                      <td>Qualification</td>
                      <td>25%</td>
                      <td>Assessing fit and budget</td>
                    </tr>
                    <tr>
                      <td>Needs Analysis</td>
                      <td>50%</td>
                      <td>Understanding requirements</td>
                    </tr>
                    <tr>
                      <td>Value Proposition</td>
                      <td>65%</td>
                      <td>Presenting solution value</td>
                    </tr>
                    <tr>
                      <td>Proposal/Quote</td>
                      <td>75%</td>
                      <td>Formal offering</td>
                    </tr>
                    <tr>
                      <td>Negotiation</td>
                      <td>90%</td>
                      <td>Final discussions</td>
                    </tr>
                    <tr>
                      <td>Closed Won</td>
                      <td>100%</td>
                      <td>Successfully sold!</td>
                    </tr>
                    <tr>
                      <td>Closed Lost</td>
                      <td>0%</td>
                      <td>Not successful</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4>Key Opportunity Fields</h4>
              <ul>
                <li><strong>Amount</strong> - Total deal value</li>
                <li><strong>Close Date</strong> - Expected close</li>
                <li><strong>Stage</strong> - Current sales stage</li>
                <li><strong>Probability</strong> - Win likelihood</li>
                <li><strong>Type</strong> - New Business, Existing, Renewals</li>
                <li><strong>Lead Source</strong> - Origin of opportunity</li>
                <li><strong>Next Step</strong> - Planned action</li>
              </ul>

              <h3>2.5 Case Object</h3>
              <p>Cases represent customer service requests or support issues. They're the foundation of Service Cloud.</p>

              <h4>Case Lifecycle</h4>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Usage</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>New</td>
                      <td>Fresh case</td>
                      <td>Initial intake</td>
                    </tr>
                    <tr>
                      <td>Working</td>
                      <td>Being addressed</td>
                      <td>Active resolution</td>
                    </tr>
                    <tr>
                      <td>Escalated</td>
                      <td>Needs attention</td>
                      <td>Priority handling</td>
                    </tr>
                    <tr>
                      <td>On Hold</td>
                      <td>Waiting for info</td>
                      <td>Customer follow-up</td>
                    </tr>
                    <tr>
                      <td>Closed</td>
                      <td>Resolved</td>
                      <td>Complete</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4>Case Priority Levels</h4>
              <ul>
                <li><strong>High</strong> - Critical impact, urgent</li>
                <li><strong>Medium</strong> - Moderate impact</li>
                <li><strong>Low</strong> - Minor impact</li>
              </ul>

              <h4>Case Origins</h4>
              <ul>
                <li>Phone</li>
                <li>Email</li>
                <li>Web</li>
                <li>Social</li>
                <li>Chat</li>
              </ul>
            </section>

            <section>
              <h2>3. Activity Objects</h2>
              <p>Activity objects track interactions with customers—tasks and events.</p>

              <h3>3.1 Task Object</h3>
              <p>Tasks represent to-do items:</p>
              <ul>
                <li><strong>Subject</strong> - What needs doing</li>
                <li><strong>Status</strong> - Not Started, In Progress, Completed</li>
                <li><strong>Priority</strong> - High, Normal, Low</li>
                <li><strong>Due Date</strong> - When it's due</li>
                <li><strong>Related To</strong> - Associated record</li>
                <li><strong>Assigned To</strong> - Owner</li>
              </ul>

              <h3>3.2 Event Object</h3>
              <p>Events represent calendar entries:</p>
              <ul>
                <li><strong>Subject</strong> - Event title</li>
                <li><strong>Start Date/Time</strong> - When it begins</li>
                <li><strong>End Date/Time</strong> - When it ends</li>
                <li><strong>All Day Event</strong> - Full day checkbox</li>
                <li><strong>Location</strong> - Where</li>
                <li><strong>Related To</strong> - Associated record</li>
              </ul>

              <h3>3.3 Activity Relations</h3>
              <p>Activities can be related to:</p>
              <ul>
                <li>Accounts</li>
                <li>Contacts</li>
                <li>Leads</li>
                <li>Opportunities</li>
                <li>Cases</li>
                <li>Contracts</li>
                <li>Custom objects</li>
              </ul>
            </section>

            <section>
              <h2>4. Supporting Standard Objects</h2>

              <h3>4.1 Campaign Object</h3>
              <p>Campaigns track marketing initiatives:</p>
              <ul>
                <li><strong>Name</strong> - Campaign title</li>
                <li><strong>Type</strong> - Conference, Webinar, Email, etc.</li>
                <li><strong>Status</strong> - Planned, In Progress, Completed</li>
                <li><strong>Start Date / End Date</strong> - Campaign timing</li>
                <li><strong>Budgeted Cost / Actual Cost</strong> - Financial tracking</li>
                <li><strong>Expected Response / Number Responded</strong> - ROI metrics</li>
              </ul>

              <h4>Campaign Influence</h4>
              <p>Track which campaigns influenced opportunities:</p>
              <ul>
                <li>Primary Campaign Source on Opportunities</li>
                <li>Campaign Member history</li>
                <li>Attribution modeling</li>
              </ul>

              <h3>4.2 Contract Object</h3>
              <p>Contracts manage agreements:</p>
              <ul>
                <li><strong>Contract Number</strong> - Unique identifier</li>
                <li><strong>Account</strong> - Associated account</li>
                <li><strong>Start Date / End Date</strong> - Contract period</li>
                <li><strong>Status</strong> - Draft, In Approval, Activated</li>
                <li><strong>Contract Term</strong> - Duration in months</li>
                <li><strong>Total Contract Value</strong> - Financial value</li>
              </ul>

              <h3>4.3 Order Object</h3>
              <p>Orders track purchases:</p>
              <ul>
                <li><strong>Order Number</strong> - Unique identifier</li>
                <li><strong>Account</strong> - Customer</li>
                <li><strong>Contract</strong> - Associated contract</li>
                <li><strong>Effective Date</strong> - When order starts</li>
                <li><strong>Status</strong> - Draft, Activated, Invoiced</li>
                <li><strong>Total Amount</strong> - Order value</li>
              </ul>

              <h3>4.4 Asset Object</h3>
              <p>Assets track products owned by customers:</p>
              <ul>
                <li><strong>Product</strong> - Product detail</li>
                <li><strong>Account</strong> - Owner</li>
                <li><strong>Quantity</strong> - Units owned</li>
                <li><strong>Purchase Date / Install Date</strong></li>
                <li><strong>Status</strong> - Active, Inactive, Obsolete</li>
              </ul>
            </section>

            <section>
              <h2>5. Standard Object Relationships</h2>
              <p>Understanding relationships is critical for data architecture:</p>

              <h3>5.1 Standard Relationship Types</h3>
              <ul>
                <li><strong>Account → Contact</strong> - One-to-Many</li>
                <li><strong>Account → Opportunity</strong> - One-to-Many</li>
                <li><strong>Account → Case</strong> - One-to-Many</li>
                <li><strong>Contact → Case</strong> - One-to-Many</li>
                <li><strong>Opportunity → Contact (Role)</strong> - Many-to-Many</li>
                <li><strong>Lead → Account (Convert)</strong> - Creation relationship</li>
              </ul>

              <h3>5.2 Junction Objects</h3>
              <p>Salesforce provides built-in junction objects:</p>
              <ul>
                <li><strong>CampaignMember</strong> - Links Leads/Contacts to Campaigns</li>
                <li><strong>OpportunityContactRole</strong> - Links Contacts to Opportunities</li>
              </ul>

              <div className="info-box">
                <h4>🏗️ Data Modeling</h4>
                <p>When designing your data model, always leverage existing standard relationships 
                before creating custom ones. The pre-built relationships have been optimized 
                for performance and integrate with standard reports/dashboards.</p>
              </div>
            </section>

            <section>
              <h2>6. Common Configurations</h2>

              <h3>6.1 Record Types</h3>
              <p>Configure different business processes:</p>
              <ul>
                <li>Different Opportunity stages for Sales vs Renewals</li>
                <li>Different Case types for Support vs Implementation</li>
                <li>Different Account types for B2B vs B2C</li>
              </ul>

              <h3>6.2 Page Layouts</h3>
              <p>Customize what users see:</p>
              <ul>
                <li>Field visibility by profile</li>
                <li>Field order and sectioning</li>
                <li>Custom buttons and links</li>
                <li>Related lists configuration</li>
              </ul>

              <h3>6.3 Field-Level Security</h3>
              <p>Control field access:</p>
              <ul>
                <li>Restrict sensitive fields to specific profiles</li>
                <li>Make fields read-only for certain users</li>
                <li>Hide fields completely</li>
              </ul>
            </section>

            <section>
              <h2>7. Best Practices</h2>

              <h3>7.1 Account Configuration</h3>
              <ul>
                <li>Always populate both Billing and Shipping addresses</li>
                <li>Use Parent Account for hierarchical organizations</li>
                <li>Set Account owner to the account manager</li>
                <li>Use Type to distinguish Customer vs Prospect</li>
              </ul>

              <h3>7.2 Contact Configuration</h3>
              <ul>
                <li>Always include email for each contact</li>
                <li>Use Reports To for organizational hierarchy</li>
                <li>Keep title updated for org chart accuracy</li>
              </ul>

              <h3>7.3 Opportunity Configuration</h3>
              <ul>
                <li>Always set Close Date to realistic target</li>
                <li>Update Stage sequentially (never skip stages)</li>
                <li>Update Probability to match Stage (or use Sales Process)</li>
                <li>Always add Next Step for active opportunities</li>
              </ul>

              <h3>7.4 Case Configuration</h3>
              <ul>
                <li>Set Priority appropriately based on business impact</li>
                <li>Use Assignment Rules for automatic routing</li>
                <li>Enable Web-to-Case for self-service</li>
                <li>Use Entitlements for SLA tracking</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson, you learned:</p>
              <ul>
                <li>Standard Objects are pre-built, optimized database tables</li>
                <li>Account is the central object for business relationships</li>
                <li>Contacts represent individuals linked to Accounts</li>
                <li>Leads are prospective customers in the pipeline</li>
                <li>Opportunities track revenue-generating deals</li>
                <li>Cases manage customer service requests</li>
                <li>Activities (Tasks/Events) track interactions</li>
                <li>Campaigns track marketing initiatives</li>
                <li>Relationships connect objects for data architecture</li>
                <li>Record Types enable different business processes</li>
              </ul>
              <p>
                <strong>Next:</strong> Learn to create Custom Objects for unique business needs.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/navigation-setup.html" className="nav-link">← Navigation & Setup</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/custom-objects.html" className="nav-link">Custom Objects →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}