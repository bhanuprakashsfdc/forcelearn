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

export default function Relationships() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/relationships" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Relationships' }
          ]} />
          <article className="lesson-content">
            <h1>Relationships</h1>
            <p className="lesson-intro">Learn how to connect objects together using relationship fields in Salesforce.</p>

            <section>
              <h2>Types of Relationships</h2>
              
              <h3>Lookup Relationship</h3>
              <p>A loosely connected relationship where child records can exist without the parent. Example: Contact to Account.</p>
              <ul>
                <li>Optional - parent can be blank</li>
                <li>No cascading deletes</li>
                <li>Custom tab for related records</li>
              </ul>

              <h3>Master-Detail Relationship</h3>
              <p>A tightly coupled relationship where the child is dependent on the parent. Example: Line Items to Opportunity.</p>
              <ul>
                <li>Required - parent is mandatory</li>
                <li>Cascading deletes</li>
                <li>Roll-up summary fields supported</li>
              </ul>

              <h3>Many-to-Many Relationship</h3>
              <p>Created using a junction object with two master-detail relationships.</p>
            </section>

            <section>
              <h2>Creating Relationships</h2>
              <ol>
                <li>Go to Object Manager → Your Object</li>
                <li>Click "Fields & Relationships"</li>
                <li>Click "New" and select relationship type</li>
                <li>Configure the related object and field properties</li>
                <li>Save</li>
              </ol>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Lookup - loose relationship, optional parent</li>
                <li>Master-Detail - tight relationship, required parent</li>
                <li>Many-to-Many uses junction objects</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/field-types.html" className="nav-link">← Field Types</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/import-export.html" className="nav-link">Import/Export →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}