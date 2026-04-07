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

export default function ValidationRules() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/validation-rules" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Validation Rules' }
          ]} />
          <article className="lesson-content">
            <h1>Validation Rules</h1>
            <p className="lesson-intro">Learn how to ensure data quality by creating validation rules in Salesforce.</p>

            <section>
              <h2>What are Validation Rules?</h2>
              <p>Validation rules verify that data entered by users meets specific criteria before it's saved. If the data doesn't meet the criteria, users see an error message.</p>
            </section>

            <section>
              <h2>Creating a Validation Rule</h2>
              <ol>
                <li>Go to Object Manager → Your Object</li>
                <li>Click "Validation Rules"</li>
                <li>Click "New"</li>
                <li>Enter rule name and description</li>
                <li>Build the validation formula</li>
                <li>Create error message</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Example Validation Rules</h2>
              <ul>
                <li><strong>Email format:</strong> NOT(REGEX(Email, "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"))</li>
                <li><strong>Phone required:</strong> ISBLANK(Phone) && ISBLANK(MobilePhone)</li>
                <li><strong>Date in future:</strong> CloseDate &lt; TODAY()</li>
                <li><strong>Amount positive:</strong> Amount &lt;= 0</li>
              </ul>
            </section>

            <section>
              <h2>Best Practices</h2>
              <ul>
                <li>Test rules thoroughly before activation</li>
                <li>Use clear, helpful error messages</li>
                <li>Don't duplicate existing system validation</li>
                <li>Document complex rules</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Validation rules ensure data quality</li>
                <li>Built using formulas with error messages</li>
                <li>Test thoroughly before activating</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/data-loader.html" className="nav-link">← Data Loader</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path.html" className="nav-link">Back to Admin Path →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}