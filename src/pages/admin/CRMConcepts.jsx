import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'

const lessonSidebarModules = [
  { id: 1, title: '1. Salesforce Basics', lessons: [
    { id: 'admin-1-1', title: 'What is Salesforce?', slug: '/admin-path/salesforce-basics' },
    { id: 'admin-1-2', title: 'CRM Concepts', slug: '/admin-path/crm-concepts' },
    { id: 'admin-1-3', title: 'Navigation & Setup', slug: '/admin-path/navigation-setup' },
  ]},
  { id: 2, title: '2. Objects & Fields', lessons: [
    { id: 'admin-2-1', title: 'Standard Objects', slug: '/admin-path/standard-objects' },
    { id: 'admin-2-2', title: 'Custom Objects', slug: '/admin-path/custom-objects' },
    { id: 'admin-2-3', title: 'Field Types', slug: '/admin-path/field-types' },
    { id: 'admin-2-4', title: 'Relationships', slug: '/admin-path/relationships' },
  ]},
  { id: 3, title: '3. Data Management', lessons: [
    { id: 'admin-3-1', title: 'Import/Export', slug: '/admin-path/import-export' },
    { id: 'admin-3-2', title: 'Data Loader', slug: '/admin-path/data-loader' },
    { id: 'admin-3-3', title: 'Validation Rules', slug: '/admin-path/validation-rules' },
  ]}
]

export default function CRMConcepts() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/crm-concepts" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'CRM Concepts' }
          ]} />
          <article className="lesson-content">
            <h1>CRM Concepts</h1>
            <p className="lesson-intro">Understanding Customer Relationship Management fundamentals and how Salesforce implements these concepts.</p>

            <section>
              <h2>What is CRM?</h2>
              <p>CRM (Customer Relationship Management) is a strategy and technology for managing a company's relationships and interactions with customers and potential customers. It helps businesses:</p>
              <ul>
                <li><strong>Improve customer relationships</strong> - Understanding customer needs and preferences</li>
                <li><strong>Increase customer retention</strong> - Keeping customers happy and loyal</li>
                <li><strong>Drive sales growth</strong> - Identifying and converting leads into customers</li>
                <li><strong>Enhance customer service</strong> - Resolving issues quickly and effectively</li>
              </ul>
            </section>

            <section>
              <h2>CRM Data Model</h2>
              <p>Salesforce implements CRM using a relational data model with key entities:</p>
              <ul>
                <li><strong>Accounts</strong> - Companies or businesses you have a relationship with</li>
                <li><strong>Contacts</strong> - Individual people associated with accounts</li>
                <li><strong>Leads</strong> - Potential customers you're actively pursuing</li>
                <li><strong>Opportunities</strong> - Potential deals or revenue-generating activities</li>
                <li><strong>Cases</strong> - Customer service requests or issues</li>
              </ul>
            </section>

            <section>
              <h2>Sales Process</h2>
              <p>A typical sales process in Salesforce follows these stages:</p>
              <ol>
                <li><strong>Prospecting</strong> - Finding potential customers (Leads)</li>
                <li><strong>Qualification</strong> - Determining if the lead is a good fit</li>
                <li><strong>Needs Analysis</strong> - Understanding customer requirements</li>
                <li><strong>Proposal</strong> - Presenting your solution</li>
                <li><strong>Negotiation</strong> - Discussing terms and pricing</li>
                <li><strong>Closed Won</strong> - Sale completed successfully</li>
                <li><strong>Closed Lost</strong> - Sale was not completed</li>
              </ol>
            </section>

            <section>
              <h2>Key CRM Metrics</h2>
              <p>Important metrics to track in any CRM system:</p>
              <ul>
                <li><strong>Conversion Rate</strong> - Percentage of leads that become customers</li>
                <li><strong>Sales Cycle Length</strong> - Average time to close a deal</li>
                <li><strong>Customer Lifetime Value</strong> - Total revenue expected from a customer</li>
                <li><strong>Churn Rate</strong> - Percentage of customers who leave</li>
                <li><strong>Customer Satisfaction (CSAT)</strong> - How satisfied customers are</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this lesson, you learned:</p>
              <ul>
                <li>CRM is about managing customer relationships strategically</li>
                <li>Salesforce provides a complete data model for CRM</li>
                <li>The sales process can be customized to your business</li>
                <li>Key metrics help measure CRM success</li>
              </ul>
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