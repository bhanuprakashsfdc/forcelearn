import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'

const lessonSidebarModules = [
  { id: 1, title: '1. Salesforce Basics', lessons: [
    { id: 'admin-1-1', title: 'What is Salesforce?', slug: '/admin-path/salesforce-basics.html' },
    { id: 'admin-1-2', title: 'CRM Concepts', slug: '/admin-path/crm-concepts.html' },
    { id: 'admin-1-3', title: 'Navigation & Setup', slug: '/admin-path/navigation-setup.html' },
  ]},
  { id: 2, title: '2. Objects & Fields', lessons: [
    { id: 'admin-2-1', title: 'Standard Objects', slug: '/admin-path/standard-objects.html' },
    { id: 'admin-2-2', title: 'Custom Objects', slug: '/admin-path/custom-objects.html' },
    { id: 'admin-2-3', title: 'Field Types', slug: '/admin-path/field-types.html' },
    { id: 'admin-2-4', title: 'Relationships', slug: '/admin-path/relationships.html' },
  ]},
  { id: 3, title: '3. Data Management', lessons: [
    { id: 'admin-3-1', title: 'Import/Export', slug: '/admin-path/import-export.html' },
    { id: 'admin-3-2', title: 'Data Loader', slug: '/admin-path/data-loader.html' },
    { id: 'admin-3-3', title: 'Validation Rules', slug: '/admin-path/validation-rules.html' },
  ]}
]

export default function NavigationSetup() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/navigation-setup.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Navigation & Setup' }
          ]} />
          <article className="lesson-content">
            <h1>Navigation & Setup: Mastering the Salesforce Interface</h1>
            <p className="lesson-intro">
              This lesson teaches you to navigate Lightning Experience efficiently and access 
              the powerful Setup area for administrative configuration.
            </p>

            <section>
              <h2>1. Lightning Experience: The Modern UI</h2>
              <p>
                Lightning Experience, introduced in 2015 and now the default interface, provides 
                a dramatically improved user experience over the classic interface. Understanding 
                the interface components is essential for every administrator.
              </p>

              <h3>1.1 Header Components</h3>
              <ul>
                <li><strong>Salesforce Logo</strong> - Click to return to Home</li>
                <li><strong>App Launcher</strong> - Grid icon (⊞) - Access all apps</li>
                <li><strong>Search Box</strong> - Global search (Ctrl+/)</li>
                <li><strong>Notifications</strong> - Bell icon - Activity feed</li>
                <li><strong>User Settings</strong> - Avatar - Personal settings</li>
                <li><strong>Setup Menu</strong> - Gear icon - Quick setup access</li>
              </ul>

              <h3>1.2 Navigation Bar</h3>
              <p>The horizontal bar showing frequently used items:</p>
              <ul>
                <li>Object tabs (Home, Accounts, Contacts, etc.)</li>
                <li>Recently viewed records</li>
                <li>Custom tabs for your apps</li>
              </ul>

              <h3>1.3 Sidebar (Left Panel)</h3>
              <ul>
                <li><strong>Collapsible Navigation</strong> - Toggle with arrow</li>
                <li><strong>Recent Items</strong> - Quick access to viewed records</li>
                <li><strong>Favorite Items</strong> - Starred records</li>
                <li><strong>Search</strong> - Within the sidebar</li>
              </ul>
            </section>

            <section>
              <h2>2. The App Launcher</h2>
              <p>The App Launcher is your gateway to all applications:</p>

              <h3>2.1 Accessing Apps</h3>
              <ol>
                <li>Click the App Launcher (grid icon)</li>
                <li>View all available apps</li>
                <li>Click to switch apps</li>
              </ol>

              <h3>2.2 Standard Salesforce Apps</h3>
              <ul>
                <li><strong>Sales</strong> - Default sales application</li>
                <li><strong>Service</strong> - Customer service console</li>
                <li><strong>Marketing</strong> - Marketing activities</li>
                <li><strong>Salesforce Dashboards</strong> - Analytics</li>
                <li><strong>Platform</strong> - Custom applications</li>
              </ul>

              <div className="info-box">
                <h4>💡 Tip</h4>
                <p>Pin frequently used items in the "Favorites" section of the sidebar for even faster access.</p>
              </div>
            </section>

            <section>
              <h2>3. Global Search: Finding Anything</h2>
              <p>
                The global search (Ctrl+/) is one of the most powerful features in Salesforce. 
                It searches across all objects and records.
              </p>

              <h3>3.1 Search Syntax</h3>
              <ul>
                <li><strong>Direct Search</strong> - Type record name</li>
                <li><strong>Object Search</strong> - "Accounts in San Francisco"</li>
                <li><strong> SOSL</strong> - Use FIND {`{term}`} in API</li>
                <li><strong>Wildcards</strong> - Use * for partial matches</li>
              </ul>

              <h3>3.2 Search Filters</h3>
              <ul>
                <li>Filter by object type</li>
                <li>Recent searches</li>
                <li>Suggested records</li>
              </ul>

              <h3>3.3 Search Optimization</h3>
              <p>As an administrator, configure search:</p>
              <ul>
                <li>Search layouts to determine visible fields</li>
                <li>Enable search suggestions</li>
                <li>Configure searchable fields per object</li>
              </ul>
            </section>

            <section>
              <h2>4. The Setup Menu: Your Command Center</h2>
              <p>
                The Setup menu is where all administrative configuration happens. Understanding 
                its organization is critical for efficiency.
              </p>

              <h3>4.1 Accessing Setup</h3>
              <ol>
                <li>Click the gear icon (⚙️) in the top-right</li>
                <li>Select "Setup" for the full menu</li>
                <li>Select "Edit Layout" to customize Home</li>
              </ol>

              <h3>4.2 Setup Home</h3>
              <p>The Setup home provides quick access to recent items and tools:</p>
              <ul>
                <li>Recently viewed items</li>
                <li>Quick find (search within Setup)</li>
                <li>Recent items in Setup</li>
                <li>Links to common tasks</li>
              </ul>

              <h3>4.3 Quick Find</h3>
              <p>
                Use the Quick Find box at the top of Setup to search any feature. This is 
                much faster than navigating the sidebar—simply type what you're looking for.
              </p>
              <ul>
                <li>Search for any Setup feature</li>
                <li>Finds items across all categories</li>
                <li>Use keyboard navigation (arrows + Enter)</li>
              </ul>
            </section>

            <section>
              <h2>5. Key Setup Areas for Beginners</h2>
              <p>As a new administrator, you'll frequently use these areas:</p>

              <h3>5.1 Users Section</h3>
              <ul>
                <li><strong>Users</strong> - Create and manage user accounts</li>
                <li><strong>Profiles</strong> - Configure default permissions</li>
                <li><strong>Permission Sets</strong> - Grant additional permissions</li>
                <li><strong>Roles</strong> - Define hierarchy</li>
                <li><strong>Queues</strong> - Create record assignment queues</li>
              </ul>

              <h3>5.2 General Setup</h3>
              <ul>
                <li><strong>Company Information</strong> - Fiscal year, company details</li>
                <li><strong>Business Hours</strong> - Service hours definition</li>
                <li><strong>Holidays</strong> - Holiday calendar</li>
                <li><strong>Language Settings</strong> - Languages and locales</li>
                <li><strong>My Domain</strong> - Custom domain for your org</li>
              </ul>

              <h3>5.3 Data Management</h3>
              <ul>
                <li><strong>Data Import Wizard</strong> - GUI-based imports</li>
                <li><strong>Data Loader</strong> - Bulk data operations</li>
                <li><strong>Mass Transfer</strong> - Transfer records in bulk</li>
                <li><strong>Storage Usage</strong> - Monitor storage consumption</li>
              </ul>

              <h3>5.4 Process Automation</h3>
              <ul>
                <li><strong>Flows</strong> - Build automations</li>
                <li><strong>Process Builder</strong> - (Legacy, use Flows)</li>
                <li><strong>Approval Processes</strong> - Create approval workflows</li>
                <li><strong>Workflow Rules</strong> - (Legacy)</li>
              </ul>

              <h3>5.5 User Interface</h3>
              <ul>
                <li><strong>Tab and Fields</strong> - Configure tabs and fields</li>
                <li><strong>Lightning App Builder</strong> - Create Lightning pages</li>
                <li><strong>Global Actions</strong> - Configure global actions</li>
                <li><strong>Mobile Cards</strong> - Mobile layout configuration</li>
              </ul>

              <h3>5.6 Security</h3>
              <ul>
                <li><strong>Sharing Settings</strong> - OWD and sharing rules</li>
                <li><strong>Session Settings</strong> - Security configuration</li>
                <li><strong>Password Policies</strong> - Password requirements</li>
                <li><strong>Single Sign-On</strong> - SSO configuration</li>
                <li><strong>Identity Provider</strong> - Identity management</li>
              </ul>
            </section>

            <section>
              <h2>6. Personal Settings</h2>
              <p>Configure your personal Salesforce experience:</p>

              <h3>6.1 Personal Information</h3>
              <ul>
                <li>First/Last Name (contact HR for changes)</li>
                <li>Email and Username</li>
                <li>Time zone and Locale</li>
                <li>Language</li>
                <li>Currency</li>
              </ul>

              <h3>6.2 Display & Layout</h3>
              <ul>
                <li>Default landing tab</li>
                <li>Dashboard sidebar settings</li>
                <li>List views per page</li>
                <li>Tab limits</li>
              </ul>

              <h3>6.3 Email Settings</h3>
              <ul>
                <li>Email signature</li>
                <li>Out-of-office auto-replies</li>
                <li>Email encoding</li>
              </ul>

              <h3>6.4 Calendar Settings</h3>
              <ul>
                <li>Working hours</li>
                <li>Daily meeting limit</li>
                <li>Event reminders</li>
              </ul>
            </section>

            <section>
              <h2>7. Mobile Experience</h2>
              <p>Salesforce works on mobile devices:</p>

              <h3>7.1 Salesforce Mobile App</h3>
              <ul>
                <li>Available on iOS and Android</li>
                <li>Full CRM access on mobile</li>
                <li>Push notifications</li>
                <li>Offline access (with sync)</li>
              </ul>

              <h3>7.2 Mobile Features</h3>
              <ul>
                <li>Camera integration (capture photos)</li>
                <li>Location services (check-ins)</li>
                <li>Mobile-specific pages</li>
                <li>Quick actions</li>
              </ul>

              <h3>7.3 Mobile Configuration</h3>
              <p>Configure in Setup:</p>
              <ul>
                <li>Mobile card layouts</li>
                <li>Mobile navigation</li>
                <li>Push notifications settings</li>
              </ul>
            </section>

            <section>
              <h2>8. Keyboard Shortcuts for Power Users</h2>
              <p>Master these shortcuts to dramatically improve productivity:</p>

              <h3>8.1 Navigation Shortcuts</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Shortcut</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ctrl + /</td>
                      <td>Open global search</td>
                    </tr>
                    <tr>
                      <td>Ctrl + S</td>
                      <td>Save record</td>
                    </tr>
                    <tr>
                      <td>Alt + 1-9</td>
                      <td>Open tabs quickly</td>
                    </tr>
                    <tr>
                      <td>Ctrl + N</td>
                      <td>New record</td>
                    </tr>
                    <tr>
                      <td>Ctrl + Q</td>
                      <td>Quick search</td>
                    </tr>
                    <tr>
                      <td>?</td>
                      <td>Show all shortcuts</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>8.2 List View Shortcuts</h3>
              <ul>
                <li>Arrow keys - Navigate records</li>
                <li>Enter - Open selected record</li>
                <li>J/K - Move up/down</li>
                <li>R - Refresh</li>
              </ul>
            </section>

            <section>
              <h2>9. Environment Awareness</h2>
              <p>Understanding Salesforce environments is crucial:</p>

              <h3>9.1 Environment Types</h3>
              <ul>
                <li><strong>Production</strong> - Live, real customer data</li>
                <li><strong>Sandbox</strong> - Copy for testing (Enterprise+)</li>
                <li><strong>Developer</strong> - Free individual development</li>
                <li><strong>Scratch</strong> - CLI-created temporary orgs</li>
              </ul>

              <h3>9.2 Connection Indicators</h3>
              <ul>
                <li>Sandbox shows "Sandbox" in header</li>
                <li>Developer Edition shows "DE" indicator</li>
                <li>Production shows company name</li>
              </ul>

              <div className="info-box">
                <h4>⚠️ Important</h4>
                <p>Always test in sandbox before deploying to production. Never do 
                configuration directly in production without testing!</p>
              </div>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this lesson, you learned:</p>
              <ul>
                <li>Lightning Experience provides a modern, efficient interface</li>
                <li>App Launcher provides access to all applications</li>
                <li>Global search finds records across all objects</li>
                <li>Setup menu is the command center for configuration</li>
                <li>Quick Find speeds up Setup navigation</li>
                <li>Personal settings customize your experience</li>
                <li>Mobile app extends access to mobile devices</li>
                <li>Keyboard shortcuts dramatically improve efficiency</li>
                <li>Always work in the correct environment</li>
              </ul>
              <p>
                <strong>Next:</strong> Explore Standard Objects to understand the foundation.
              </p>
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