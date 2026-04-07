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

export default function CustomObjects() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/custom-objects" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Custom Objects' }
          ]} />
          <article className="lesson-content">
            <h1>Custom Objects</h1>
            <p className="lesson-intro">Learn how to create custom objects to store data unique to your business requirements.</p>

            <section>
              <h2>What are Custom Objects?</h2>
              <p>Custom objects are database tables that you create to store information specific to your organization. They work just like standard objects but are built to meet your unique business needs.</p>
            </section>

            <section>
              <h2>When to Create Custom Objects</h2>
              <ul>
                <li>When standard objects don't fit your data model</li>
                <li>To track custom business entities (e.g., Projects, Contracts, Assets)</li>
                <li>To establish relationships between multiple standard objects</li>
              </ul>
            </section>

            <section>
              <h2>Creating a Custom Object</h2>
              <ol>
                <li>Go to <strong>Setup → Object Manager</strong></li>
                <li>Click <strong>Create → Custom Object</strong></li>
                <li>Enter the label (singular and plural)</li>
                <li>Set the object name</li>
                <li>Configure options like "Launch New Custom Tab Wizard"</li>
                <li>Click <strong>Save</strong></li>
              </ol>
            </section>

            <section>
              <h2>Custom Object Features</h2>
              <ul>
                <li><strong>Custom Fields</strong> - Add your own data points</li>
                <li><strong>Custom Tabs</strong> - Create a tab in the UI</li>
                <li><strong>Custom Views</strong> - Define list views</li>
                <li><strong>Custom Buttons & Links</strong> - Add custom actions</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Custom objects store business-specific data</li>
                <li>Created through Setup → Object Manager</li>
                <li>They support all features of standard objects</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/standard-objects.html" className="nav-link">← Standard Objects</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/field-types.html" className="nav-link">Field Types →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}