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

export default function StandardObjects() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/standard-objects" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Standard Objects' }
          ]} />
          <article className="lesson-content">
            <h1>Standard Objects</h1>
            <p className="lesson-intro">Learn about the pre-built objects that come with Salesforce and how to use them effectively.</p>

            <section>
              <h2>What are Standard Objects?</h2>
              <p>Standard Objects are pre-built objects provided by Salesforce out of the box. They represent the most common CRM data types and are optimized for typical business processes.</p>
            </section>

            <section>
              <h2>Core Standard Objects</h2>
              
              <h3>Account</h3>
              <p>Represents a company or business you have a relationship with. The primary object in most Salesforce implementations.</p>
              <ul>
                <li>Key fields: Name, Industry, Website, Phone, Billing Address</li>
                <li>Related to: Contacts, Opportunities, Cases</li>
              </ul>

              <h3>Contact</h3>
              <p>Represents an individual person associated with an Account.</p>
              <ul>
                <li>Key fields: First Name, Last Name, Email, Phone, Title</li>
                <li>Related to: Account (master-detail or lookup)</li>
              </ul>

              <h3>Lead</h3>
              <p>Represents a prospective customer - someone who has shown interest but hasn't been qualified yet.</p>
              <ul>
                <li>Key fields: Name, Company, Email, Phone, Status</li>
                <li>Can be converted to: Account, Contact, Opportunity</li>
              </ul>

              <h3>Opportunity</h3>
              <p>Represents a potential sale or revenue-generating activity.</p>
              <ul>
                <li>Key fields: Name, Stage, Amount, Close Date, Probability</li>
                <li>Related to: Account, Contact (roles)</li>
              </ul>

              <h3>Case</h3>
              <p>Represents a customer service request or support issue.</p>
              <ul>
                <li>Key fields: Subject, Status, Priority, Origin</li>
                <li>Related to: Account, Contact</li>
              </ul>

              <h3>Task & Event</h3>
              <p>Represent to-do items and calendar events.</p>
              <ul>
                <li>Task: Subject, Due Date, Status, Priority</li>
                <li>Event: Subject, Start Date/Time, End Date/Time</li>
              </ul>
            </section>

            <section>
              <h2>Object Relationships</h2>
              <p>Understanding how objects relate to each other is crucial:</p>
              <ul>
                <li>Account → Contact (One-to-Many)</li>
                <li>Account → Opportunity (One-to-Many)</li>
                <li>Lead → Account/Contact (During conversion)</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>You learned:</p>
              <ul>
                <li>Standard Objects are pre-built CRM entities</li>
                <li>The core objects: Account, Contact, Lead, Opportunity, Case</li>
                <li>How objects relate to each other</li>
              </ul>
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