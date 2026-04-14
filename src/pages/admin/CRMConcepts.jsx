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

export default function CRMConcepts() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/crm-concepts.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'CRM Concepts' }
          ]} />
          <article className="lesson-content">
            <h1>CRM Concepts: The Business Foundation</h1>
            <p className="lesson-intro">
              Before learning Salesforce configuration, you must understand CRM fundamentals. This lesson covers 
              customer relationship management from business principles to implementation.
            </p>

            <section>
              <h2>1. The Evolution of CRM</h2>
              <p>
                Customer Relationship Management has evolved through distinct eras:
              </p>

              <h3>1.1 Rolodex Era (1900s-1970s)</h3>
              <p>
                Physical cards for contacts. Limited, manual, error-prone.
              </p>

              <h3>1.2 Database Era (1980s-1990s)</h3>
              <p>
                Digital databases emerged. Act! and early CRMs appeared. Data became searchable.
              </p>

              <h3>1.3 Cloud Era (2000s-Present)</h3>
              <p>
                Cloud computing enabled anywhere access. Salesforce pioneered this shift in 1999.
              </p>

              <h3>1.4 AI Era (2015-Future)</h3>
              <p>
                Artificial intelligence transforms CRM with predictive insights, automated tasks, 
                and intelligent recommendations (Salesforce Einstein).
              </p>
            </section>

            <section>
              <h2>2. Types of CRM</h2>
              
              <h3>2.1 Operational CRM</h3>
              <p>Focuses on automating customer-facing processes:</p>
              <ul>
                <li><strong>Sales Automation</strong> - Lead management, opportunity tracking</li>
                <li><strong>Marketing Automation</strong> - Campaign management, lead scoring</li>
                <li><strong>Service Automation</strong> - Case management, support queues</li>
              </ul>

              <h3>2.2 Analytical CRM</h3>
              <p>Analyzes customer data for insights:</p>
              <ul>
                <li><strong>Descriptive Analytics</strong> - What happened? (Reports)</li>
                <li><strong>Diagnostic Analytics</strong> - Why did it happen? (Dashboards)</li>
                <li><strong>Predictive Analytics</strong> - What will happen? (AI/ML)</li>
                <li><strong>Prescriptive Analytics</strong> - How can we make it happen? (Recommendations)</li>
              </ul>

              <h3>2.3 Collaborative CRM</h3>
              <p>Shares customer information across channels:</p>
              <ul>
                <li>Internal collaboration (teams)</li>
                <li>Partner collaboration (channels)</li>
                <li>Customer collaboration (communities)</li>
              </ul>
            </section>

            <section>
              <h2>3. Salesforce CRM Data Model</h2>
              <p>
                Salesforce provides the most comprehensive CRM data model. Let's explore each entity:
              </p>

              <h3>3.1 Account Object</h3>
              <p>The foundation—represents businesses:</p>
              <ul>
                <li><strong>Type</strong> - Prospect, Customer, Partner, Competitor</li>
                <li><strong>Industry</strong> - Sector classification</li>
                <li><strong>Rating</strong> - Hot, Warm, Cold</li>
                <li><strong>Ownership</strong> - Record ownership</li>
                <li><strong>Annual Revenue</strong> - Financial metric</li>
                <li><strong>Number of Employees</strong> - Size indicator</li>
              </ul>

              <h3>3.2 Contact Object</h3>
              <p>People associated with accounts:</p>
              <ul>
                <li><strong>Name Fields</strong> - First, Last, Title</li>
                <li><strong>Contact Information</strong> - Email, Phone, Mobile</li>
                <li><strong>Department</strong> - Functional area</li>
                <li><strong>Reports To</strong> - Organizational hierarchy</li>
                <li><strong>Lead Source</strong> - Origin of contact</li>
              </ul>

              <h3>3.3 Lead Object</h3>
              <p>Prospective customers in the pipeline:</p>
              <ul>
                <li><strong>Status</strong> - Open, Contacted, Qualified, Converted</li>
                <li><strong>Rating</strong> - Hot, Warm, Cold</li>
                <li><strong>Industry</strong> - Target sector</li>
                <li><strong>Number of Employees</strong> - Company size</li>
                <li><strong>Annual Revenue</strong> - Fit indicator</li>
              </ul>

              <h3>3.4 Opportunity Object</h3>
              <p>Revenue-generating deals:</p>
              <ul>
                <li><strong>Stage</strong> - Sales process stage</li>
                <li><strong>Amount</strong> - Deal value</li>
                <li><strong>Close Date</strong> - Expected close</li>
                <li><strong>Probability</strong> - Win likelihood %</li>
                <li><strong>Type</strong> - New Business, Existing Account</li>
                <li><strong>Lead Source</strong> - Origin</li>
              </ul>

              <h3>3.5 Case Object</h3>
              <p>Customer service issues:</p>
              <ul>
                <li><strong>Status</strong> - New, Working, Escalated, Closed</li>
                <li><strong>Priority</strong> - High, Medium, Low</li>
                <li><strong>Origin</strong> - Email, Phone, Web, Social</li>
                <li><strong>Type</strong> - Problem, Question, Feature Request</li>
                <li><strong>Reason</strong> - Why customer reached out</li>
              </ul>
            </section>

            <section>
              <h2>4. The Salesforce Sales Process</h2>
              <p>
                Every organization has a unique sales process. Salesforce supports customization:
              </p>

              <h3>4.1 Standard Sales Path</h3>
              <p>Out-of-the-box stages include:</p>
              <ol>
                <li><strong>Prospecting</strong> - Identifying potential customers</li>
                <li><strong>Qualification</strong> - Assessing fit and budget</li>
                <li><strong>Needs Analysis</strong> - Understanding requirements</li>
                <li><strong>Value Proposition</strong> - Presenting solution value</li>
                <li><strong>Proposal/Quote</strong> - Formal offering</li>
                <li><strong>Negotiation</strong> - Final discussions</li>
                <li><strong>Closed Won</strong> - Successfully sold!</li>
                <li><strong>Closed Lost</strong> - Not successful</li>
              </ol>

              <h3>4.2 Customizing Sales Path</h3>
              <p>Through Sales Process settings, you can:</p>
              <ul>
                <li>Add/remove stages</li>
                <li>Set probabilities per stage</li>
                <li>Require fields at each stage</li>
                <li>Configure path highlights</li>
              </ul>

              <div className="info-box">
                <h4>💡 Best Practice</h4>
                <p>Map your actual sales process accurately. Don't use Salesforce's default 
                if it doesn't match your business—customize it immediately.</p>
              </div>
            </section>

            <section>
              <h2>5. Key CRM Metrics & KPIs</h2>
              <p>Measure your CRM success with these essential metrics:</p>

              <h3>5.1 Sales Metrics</h3>
              <ul>
                <li><strong>Total Revenue</strong> - Bookings, ARR, MRR</li>
                <li><strong>Win Rate</strong> - Closed Won / Total Closed</li>
                <li><strong>Average Deal Size</strong> - Total Revenue / Deals</li>
                <li><strong>Sales Cycle Length</strong> - Average days to close</li>
                <li><strong>Pipeline Coverage</strong> - Target x 3+ recommended</li>
                <li><strong>Quota Attainment</strong> - Reps hitting target</li>
              </ul>

              <h3>5.2 Pipeline Metrics</h3>
              <ul>
                <li><strong>Opportunities Created</strong> - Volume indicator</li>
                <li><strong>Qualified Pipelines</strong> - High probability deals</li>
                <li><strong>Average Age</strong> - Time in stage</li>
                <li><strong>Stage Progression</strong> - Win rate by stage</li>
              </ul>

              <h3>5.3 Marketing Metrics</h3>
              <ul>
                <li><strong>Lead Conversion Rate</strong> - Lead → Opportunity</li>
                <li><strong>MQL Rate</strong> - Marketing Qualified Leads</li>
                <li><strong>SQL Rate</strong> - Sales Qualified Leads</li>
                <li><strong>Cost per Lead</strong> - Marketing efficiency</li>
                <li><strong>Campaign ROI</strong> - Return on investment</li>
              </ul>

              <h3>5.4 Service Metrics</h3>
              <ul>
                <li><strong>Case Volume</strong> - Incoming issues</li>
                <li><strong>First Contact Resolution</strong> - FCR rate</li>
                <li><strong>Average Handle Time</strong> - Efficiency</li>
                <li><strong>Customer Satisfaction</strong> - CSAT score</li>
                <li><strong>Net Promoter Score</strong> - NPS</li>
              </ul>
            </section>

            <section>
              <h2>6. Record Types & Business Processes</h2>
              <p>
                Record Types enable different business processes for different segments:
              </p>

              <h3>6.1 When to Use Record Types</h3>
              <ul>
                <li>Different sales processes for B2B vs B2C</li>
                <li>Different stages for Products vs Services</li>
                <li>Different fields for different regions</li>
                <li>Varying picklist values by segment</li>
              </ul>

              <h3>6.2 Record Type Examples</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Record Type</th>
                      <th>Use Case</th>
                      <th>Stages</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Enterprise Sales</td>
                      <td>Large accounts</td>
                      <td>6 stages</td>
                    </tr>
                    <tr>
                      <td>SMB Sales</td>
                      <td>Small business</td>
                      <td>4 stages</td>
                    </tr>
                    <tr>
                      <td>Channel Sales</td>
                      <td>Partners</td>
                      <td>5 stages</td>
                    </tr>
                    <tr>
                      <td>Renewals</td>
                      <td>Subscription renewals</td>
                      <td>3 stages</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>7. Integrated Data Model</h2>
              <p>
                The true power of Salesforce lies in how objects relate:
              </p>

              <h3>7.1 Standard Relationships</h3>
              <ul>
                <li>Account → Contacts (One-to-Many)</li>
                <li>Account → Opportunities (One-to-Many)</li>
                <li>Account → Cases (One-to-Many)</li>
                <li>Lead → Account (Upon Conversion)</li>
                <li>Opportunity → Contacts (Roles)</li>
                <li>Contact → Cases (Many-to-One)</li>
              </ul>

              <h3>7.2 Custom Relationships</h3>
              <p>Create your own relationships:</p>
              <ul>
                <li><strong>Lookup</strong> - Loose relationship (optional)</li>
                <li><strong>Master-Detail</strong> - Tight relationship (required)</li>
                <li><strong>Hierarchical</strong> - Self-referential for users</li>
              </ul>

              <div className="info-box">
                <h4>🏗️ Architecture Principle</h4>
                <p>Good data architecture means minimal data redundancy. "Normalize" your data 
                like a database—when in doubt, relate rather than duplicate.</p>
              </div>
            </section>

            <section>
              <h2>8. Implementing CRM Success</h2>
              <p>Technology is only part of CRM success:</p>

              <h3>8.1 People & Process</h3>
              <ul>
                <li><strong>Leadership Buy-in</strong> - Executive sponsorship</li>
                <li><strong>Clear Processes</strong> - Documented workflows</li>
                <li><strong>User Adoption</strong> - Training and incentives</li>
                <li><strong>Governance</strong> - Ongoing oversight</li>
              </ul>

              <h3>8.2 Common CRM Failures</h3>
              <ul>
                <li>No executive sponsorship</li>
                <li>Poor data quality</li>
                <li>Lack of user adoption</li>
                <li>No ongoing governance</li>
                <li>Mismatched processes</li>
                <li>Unrealistic expectations</li>
              </ul>

              <h3>8.3 Success Factors</h3>
              <ul>
                <li>Start with clear objectives</li>
                <li>Define success metrics upfront</li>
                <li>Clean existing data first</li>
                <li>Train users thoroughly</li>
                <li>Monitor and iterate</li>
                <li>Celebrate wins</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this lesson, you learned:</p>
              <ul>
                <li>CRM has evolved from physical cards to AI-powered platforms</li>
                <li>Three types of CRM: Operational, Analytical, Collaborative</li>
                <li>Salesforce objects model common business entities</li>
                <li>Sales processes map to Opportunity stages</li>
                <li>Key metrics measure success at every level</li>
                <li>Record Types enable diverse processes</li>
                <li>Relationships create the data model</li>
                <li>Technology requires people and process for success</li>
              </ul>
              <p>
                <strong>Next:</strong> Learn to navigate Salesforce in the next lesson.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/salesforce-basics.html" className="nav-link">← What is Salesforce?</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/navigation-setup.html" className="nav-link">Navigation & Setup →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}