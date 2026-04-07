import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'

const sidebarModules = [
  { id: 1, title: '1. System Design', lessons: [
    { id: 'arch-1-1', title: 'Architecture Overview', slug: '/architect-path/architecture-overview.html' },
    { id: 'arch-1-2', title: 'Domain Modeling', slug: '/architect-path/domain-modeling.html' },
    { id: 'arch-1-3', title: 'Design Patterns', slug: '/architect-path/design-patterns.html' },
  ]},
  { id: 2, title: '2. Data Architecture', lessons: [
    { id: 'arch-2-1', title: 'Schema Design', slug: '/architect-path/schema-design.html' },
    { id: 'arch-2-2', title: 'Storage Optimization', slug: '/architect-path/storage-optimization.html' },
    { id: 'arch-2-3', title: 'Big Objects', slug: '/architect-path/big-objects.html' },
  ]},
  { id: 3, title: '3. Integration Patterns', lessons: [
    { id: 'arch-3-1', title: 'MuleSoft Basics', slug: '/architect-path/mulesoft-basics.html' },
    { id: 'arch-3-2', title: 'API Design', slug: '/architect-path/api-design.html' },
    { id: 'arch-3-3', title: 'Event-Driven Architecture', slug: '/architect-path/event-driven.html' },
  ]},
  { id: 4, title: '4. Security Architecture', lessons: [
    { id: 'arch-4-1', title: 'Identity Management', slug: '/architect-path/identity-management.html' },
    { id: 'arch-4-2', title: 'SSO Implementation', slug: '/architect-path/sso-implementation.html' },
    { id: 'arch-4-3', title: 'Data Protection', slug: '/architect-path/data-protection.html' },
  ]}
]

export default function StorageOptimization() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/architect-path/storage-optimization.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/architect-path.html', label: 'Architect Path' },
            { label: 'Storage Optimization' }
          ]} />
          <article className="lesson-content">
            <h1>Storage Optimization</h1>
            <p className="lesson-intro">Learn strategies to optimize data storage and manage storage limits effectively.</p>

            <section>
              <h2>Understanding Salesforce Storage</h2>
              <p>Salesforce provides different storage types:</p>
              <ul>
                <li><strong>Data Storage</strong> - Records (Contact, Account, Custom Objects)</li>
                <li><strong>File Storage</strong> - Documents, Attachments, Content</li>
                <li><strong>Big Objects</strong> - Historical data (separate allocation)</li>
              </ul>
            </section>

            <section>
              <h2>Storage Calculation</h2>
              <p>Storage is calculated based on:</p>
              <ul>
                <li>Number of records</li>
                <li>Average record size</li>
                <li>Attachment sizes</li>
              </ul>
              <p>Most editions include 10GB data storage + 10GB file storage.</p>
            </section>

            <section>
              <h2>Optimization Strategies</h2>
              <ul>
                <li><strong>Archive old data</strong> - Move inactive records to Big Objects</li>
                <li><strong>Delete unused records</strong> - Clean up test data and old records</li>
                <li><strong>Use external IDs</strong> - For integration efficiency</li>
                <li><strong>Limit attachments</strong> - Use external storage for large files</li>
                <li><strong>Optimize field types</strong> - Use efficient data types</li>
              </ul>
            </section>

            <section>
              <h2>Data Retention Policies</h2>
              <p>Implement retention policies:</p>
              <ol>
                <li>Identify data that can be archived</li>
                <li>Define retention periods</li>
                <li>Create archive objects or Big Objects</li>
                <li>Automate archival with Flows or Apex</li>
              </ol>
            </section>

            <section>
              <h2>Storage Monitoring</h2>
              <p>Use built-in tools to monitor storage:</p>
              <ul>
                <li>Storage Usage page in Setup</li>
                <li>Storage Monitoring reports</li>
                <li>Big Object consumption tracking</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Monitor storage usage regularly</li>
                <li>Implement data retention policies</li>
                <li>Archive old data to Big Objects</li>
                <li>Use efficient field types</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/architect-path/schema-design.html" className="nav-link">← Schema Design</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/architect-path/big-objects.html" className="nav-link">Big Objects →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}