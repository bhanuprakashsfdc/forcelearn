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

export default function DataLoader() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/data-loader" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Data Loader' }
          ]} />
          <article className="lesson-content">
            <h1>Data Loader</h1>
            <p className="lesson-intro">Master the Data Loader tool for bulk data operations in Salesforce.</p>

            <section>
              <h2>What is Data Loader?</h2>
              <p>Data Loader is a client application for bulk import/export of data. It's used when:</p>
              <ul>
                <li>Importing more than 50,000 records</li>
                <li>Complex data transformations needed</li>
                <li>Scheduled automated operations</li>
                <li>Deleting large numbers of records</li>
              </ul>
            </section>

            <section>
              <h2>Installation</h2>
              <ol>
                <li>Go to Setup → Data Management → Data Loader</li>
                <li>Download the appropriate version for your OS</li>
                <li>Install following the wizard prompts</li>
              </ol>
            </section>

            <section>
              <h2>Key Operations</h2>
              <ul>
                <li><strong>Insert</strong> - Add new records</li>
                <li><strong>Update</strong> - Modify existing records</li>
                <li><strong>Upsert</strong> - Insert or update based on ID</li>
                <li><strong>Delete</strong> - Remove records</li>
                <li><strong>Export</strong> - Extract data to CSV</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Data Loader handles bulk operations (50K+ records)</li>
                <li>Available as GUI and command-line</li>
                <li>Supports all data operations</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/import-export.html" className="nav-link">← Import/Export</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/validation-rules.html" className="nav-link">Validation Rules →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}