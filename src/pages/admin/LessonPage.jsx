import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'
import CodeBlock from '../../components/content/CodeBlock'

const lessonSidebarModules = [
  {
    id: 1,
    title: '1. Salesforce Basics',
    lessons: [
      { id: 'admin-1-1', title: 'What is Salesforce?', slug: '/admin-path/salesforce-basics' },
      { id: 'admin-1-2', title: 'CRM Concepts', slug: '/admin-path/crm-concepts' },
      { id: 'admin-1-3', title: 'Navigation & Setup', slug: '/admin-path/navigation-setup' },
    ]
  },
  {
    id: 2,
    title: '2. Objects & Fields',
    lessons: [
      { id: 'admin-2-1', title: 'Standard Objects', slug: '/admin-path/standard-objects' },
      { id: 'admin-2-2', title: 'Custom Objects', slug: '/admin-path/custom-objects' },
      { id: 'admin-2-3', title: 'Field Types', slug: '/admin-path/field-types' },
      { id: 'admin-2-4', title: 'Relationships', slug: '/admin-path/relationships' },
    ]
  },
  {
    id: 3,
    title: '3. Data Management',
    lessons: [
      { id: 'admin-3-1', title: 'Import/Export', slug: '/admin-path/import-export' },
      { id: 'admin-3-2', title: 'Data Loader', slug: '/admin-path/data-loader' },
      { id: 'admin-3-3', title: 'Validation Rules', slug: '/admin-path/validation-rules' },
    ]
  }
]

export default function LessonPage() {
  const breadcrumbItems = [
    { to: '/', label: 'Home' },
    { to: '/admin-path', label: 'Admin Path' },
    { label: 'What is Salesforce?' }
  ]

  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/salesforce-basics" />
      
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          
          <article className="lesson-content">
            <h1>What is Salesforce?</h1>
            <p className="lesson-intro">
              In this lesson, you'll learn what Salesforce is, how it fits into the world of CRM, 
              and why it has become the leading cloud-based customer relationship management platform.
            </p>

            <section>
              <h2>Introduction to Salesforce</h2>
              <p>
                Salesforce is a cloud-based customer relationship management (CRM) platform that helps 
                businesses manage their customer data, track interactions, and automate sales and service processes.
                Founded in 1999, Salesforce pioneered the concept of cloud-based CRM and has since grown 
                into one of the most influential software companies in the world.
              </p>
            </section>

            <section>
              <h2>What is CRM?</h2>
              <p>
                CRM (Customer Relationship Management) is a technology for managing a company's 
                relationships and interactions with current and potential customers. A CRM system 
                helps businesses:
              </p>
              <ul>
                <li><strong>Centralize customer data</strong> - Store all customer information in one place</li>
                <li><strong>Track interactions</strong> - Monitor every touchpoint with customers</li>
                <li><strong>Improve communication</strong> - Ensure consistent and personalized messaging</li>
                <li><strong>Increase productivity</strong> - Automate repetitive tasks</li>
              </ul>
            </section>

            <section>
              <h2>Salesforce Platform Overview</h2>
              <p>
                Salesforce offers a comprehensive suite of cloud-based applications organized around 
                different "Clouds":
              </p>
              <ul>
                <li><strong>Sales Cloud</strong> - Sales automation and pipeline management</li>
                <li><strong>Service Cloud</strong> - Customer support and case management</li>
                <li><strong>Marketing Cloud</strong> - Marketing automation and customer engagement</li>
                <li><strong>Commerce Cloud</strong> - E-commerce solutions</li>
                <li><strong>Experience Cloud</strong> - Partner and customer portal creation</li>
              </ul>
            </section>

            <section>
              <h2>Key Salesforce Concepts</h2>
              
              <h3>Objects</h3>
              <p>
                Objects are database tables that store data in Salesforce. There are two types:
              </p>
              <ul>
                <li><strong>Standard Objects</strong> - Pre-built objects like Accounts, Contacts, and Opportunities</li>
                <li><strong>Custom Objects</strong> - Objects you create to store data unique to your business</li>
              </ul>

              <h3>Fields</h3>
              <p>
                Fields are individual pieces of data within an object. Like objects, there are 
                standard fields (built-in) and custom fields (user-created).
              </p>

              <h3>Records</h3>
              <p>
                Records are individual instances of data within an object. For example, a single 
                Account record represents one customer or company.
              </p>
            </section>

            <section>
              <h2>Lightning Experience</h2>
              <p>
                Lightning Experience is Salesforce's modern, responsive user interface. It provides:
              </p>
              <ul>
                <li>Enhanced navigation and search capabilities</li>
                <li>Customizable home pages with key metrics</li>
                <li>Drag-and-drop page builder (Lightning Page Builder)</li>
                <li>Lightning Web Components for custom development</li>
              </ul>
            </section>

            <section>
              <h2>Salesforce Editions</h2>
              <p>
                Salesforce offers various editions with different features and pricing:
              </p>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Edition</th>
                      <th>Key Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Essentials</td>
                      <td>Basic CRM for small businesses</td>
                    </tr>
                    <tr>
                      <td>Professional</td>
                      <td>Full-featured CRM for growing businesses</td>
                    </tr>
                    <tr>
                      <td>Enterprise</td>
                      <td>Advanced features for large organizations</td>
                    </tr>
                    <tr>
                      <td>Unlimited</td>
                      <td>Maximum features with unlimited support</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Summary</h2>
              <p>
                In this lesson, you learned the fundamentals of Salesforce:
              </p>
              <ul>
                <li>Salesforce is a cloud-based CRM platform</li>
                <li>CRM helps manage customer relationships and interactions</li>
                <li>Salesforce offers multiple clouds for different business needs</li>
                <li>Objects, Fields, and Records are the core data structure components</li>
                <li>Lightning Experience is the modern Salesforce interface</li>
              </ul>
            </section>
          </article>

          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path.html" className="nav-link">← Admin Path Overview</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/crm-concepts.html" className="nav-link">CRM Concepts →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}