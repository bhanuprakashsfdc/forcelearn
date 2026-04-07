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

export default function ImportExport() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/import-export" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Import/Export' }
          ]} />
          <article className="lesson-content">
            <h1>Import & Export</h1>
            <p className="lesson-intro">Learn how to bring data into Salesforce and export data for reporting or backup.</p>

            <section>
              <h2>Data Import</h2>
              <p>Salesforce provides multiple ways to import data:</p>
              <ul>
                <li><strong>Data Import Wizard</strong> - Built-in tool for simple imports</li>
                <li><strong>Data Loader</strong> - For larger or complex imports</li>
                <li><strong>Import Wizard</strong> - For leads, contacts, accounts</li>
              </ul>
              <p>Data Import Wizard supports: Accounts, Contacts, Leads, Solutions, Custom Objects</p>
            </section>

            <section>
              <h2>Data Export</h2>
              <ul>
                <li><strong>Data Export (Weekly/Monthly)</strong> - Scheduled exports</li>
                <li><strong>Data Loader Export</strong> - On-demand CSV exports</li>
                <li><strong>Report Exports</strong> - Export to Excel/PDF</li>
              </ul>
            </section>

            <section>
              <h2>Import Process</h2>
              <ol>
                <li>Prepare your data in CSV format</li>
                <li>Clean and validate data</li>
                <li>Map CSV columns to Salesforce fields</li>
                <li>Run import and review results</li>
              </ol>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Data Import Wizard - UI-based, simple imports</li>
                <li>Data Loader - CLI/GUI, complex imports</li>
                <li>Always prepare and validate data before import</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/relationships.html" className="nav-link">← Relationships</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/data-loader.html" className="nav-link">Data Loader →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}