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

export default function FieldTypes() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/field-types" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Field Types' }
          ]} />
          <article className="lesson-content">
            <h1>Field Types</h1>
            <p className="lesson-intro">Learn about the different field types available in Salesforce and when to use each one.</p>

            <section>
              <h2>Text Fields</h2>
              <ul>
                <li><strong>Text</strong> - Single line of text (max 255 chars)</li>
                <li><strong>Text Area</strong> - Multi-line text (max 32K chars)</li>
                <li><strong>Email</strong> - Validates email format</li>
                <li><strong>URL</strong> - Validates URL format</li>
                <li><strong>Phone</strong> - Stores phone numbers</li>
              </ul>
            </section>

            <section>
              <h2>Number Fields</h2>
              <ul>
                <li><strong>Number</strong> - Numeric values (up to 18 digits)</li>
                <li><strong>Currency</strong> - Money values with currency symbol</li>
                <li><strong>Percent</strong> - Percentage values</li>
              </ul>
            </section>

            <section>
              <h2>Date & Time</h2>
              <ul>
                <li><strong>Date</strong> - Calendar date only</li>
                <li><strong>Date/Time</strong> - Date and time together</li>
              </ul>
            </section>

            <section>
              <h2>Selection Fields</h2>
              <ul>
                <li><strong>Picklist</strong> - Single value from predefined list</li>
                <li><strong>Multi-Select Picklist</strong> - Multiple values from list</li>
                <li><strong>Checkbox</strong> - Boolean (true/false) value</li>
              </ul>
            </section>

            <section>
              <h2>Other Fields</h2>
              <ul>
                <li><strong>Lookup Relationship</strong> - Link to another record</li>
                <li><strong>Master-Detail</strong> - Parent-child with cascading</li>
                <li><strong>Formula</strong> - Calculated value</li>
                <li><strong>Roll-up Summary</strong> - Aggregate from child records</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Salesforce offers diverse field types for different data</li>
                <li>Choose appropriate types based on data requirements</li>
                <li>Formula fields calculate values automatically</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/custom-objects.html" className="nav-link">← Custom Objects</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/relationships.html" className="nav-link">Relationships →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}