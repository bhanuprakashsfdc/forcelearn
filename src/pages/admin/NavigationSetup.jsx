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

export default function NavigationSetup() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/navigation-setup" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path', label: 'Admin Path' },
            { label: 'Navigation & Setup' }
          ]} />
          <article className="lesson-content">
            <h1>Navigation & Setup</h1>
            <p className="lesson-intro">Learn how to navigate Salesforce and configure your account settings.</p>

            <section>
              <h2>Lightning Experience Navigation</h2>
              <p>Lightning Experience provides a modern, intuitive interface. Key navigation elements include:</p>
              <ul>
                <li><strong>App Launcher</strong> - The grid icon (⊞) to access all apps</li>
                <li><strong>Navigation Bar</strong> - Quick access to objects and recently viewed items</li>
                <li><strong>Search</strong> - Global search to find records, objects, and help</li>
                <li><strong>User Menu</strong> - Profile settings, logout, and personal settings</li>
              </ul>
            </section>

            <section>
              <h2>Salesforce Setup</h2>
              <p>The Setup menu is where administrators configure Salesforce. Access it by:</p>
              <ol>
                <li>Click on the gear icon (⚙️) in the top right</li>
                <li>Select "Setup" from the menu</li>
              </ol>
              <p>Key Setup areas include:</p>
              <ul>
                <li><strong>Object Manager</strong> - Configure objects and fields</li>
                <li><strong>Users</strong> - Manage user accounts and permissions</li>
                <li><strong>Profiles</strong> - Define user access levels</li>
                <li><strong>Sharing Settings</strong> - Control record access</li>
                <li><strong>Flows</strong> - Build automation</li>
              </ul>
            </section>

            <section>
              <h2>Personal Setup</h2>
              <p>Customize your personal Salesforce experience:</p>
              <ul>
                <li><strong>Personal Information</strong> - Name, email, timezone</li>
                <li><strong>Display & Layout</strong> - Dashboard, list views, tabs</li>
                <li><strong>Email Settings</strong> - Email signature, out-of-office</li>
                <li><strong>Calendar Settings</strong> - Working hours, events</li>
              </ul>
            </section>

            <section>
              <h2>Keyboard Shortcuts</h2>
              <p>Speed up your work with keyboard shortcuts:</p>
              <ul>
                <li><strong>Ctrl + /</strong> - Open global search</li>
                <li><strong>Ctrl + S</strong> - Save current record</li>
                <li><strong>?</strong> - Show keyboard shortcuts help</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>You learned:</p>
              <ul>
                <li>How to navigate Lightning Experience</li>
                <li>Where to find Setup for administrative tasks</li>
                <li>How to personalize your Salesforce experience</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/crm-concepts.html" className="nav-link">← CRM Concepts</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/standard-objects.html" className="nav-link">Standard Objects →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}