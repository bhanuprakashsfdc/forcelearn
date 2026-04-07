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

export default function APIDesign() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/architect-path/api-design.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/architect-path.html', label: 'Architect Path' },
            { label: 'API Design' }
          ]} />
          <article className="lesson-content">
            <h1>API Design</h1>
            <p className="lesson-intro">Learn best practices for designing RESTful APIs for Salesforce integrations.</p>

            <section>
              <h2>API Design Principles</h2>
              <ul>
                <li><strong>Consistency</strong> - Use standard patterns across all APIs</li>
                <li><strong>Simplicity</strong> - Keep APIs simple and intuitive</li>
                <li><strong>Discoverability</strong> - Make APIs easy to find and understand</li>
                <li><strong>Versioning</strong> - Plan for future changes</li>
              </ul>
            </section>

            <section>
              <h2>RESTful API Design</h2>
              <ul>
                <li><strong>Resources</strong> - Use nouns (accounts, contacts)</li>
                <li><strong>HTTP Methods</strong> - GET, POST, PUT, DELETE</li>
                <li><strong>Status Codes</strong> - 200, 201, 400, 404, 500</li>
                <li><strong>Pagination</strong> - Handle large datasets</li>
              </ul>
            </section>

            <section>
              <h2>API Versioning</h2>
              <p>Best practices for versioning:</p>
              <ul>
                <li>Use URL versioning (/v1/, /v2/)</li>
                <li>Plan for deprecation</li>
                <li>Document changes</li>
                <li>Support multiple versions during transition</li>
              </ul>
            </section>

            <section>
              <h2>Rate Limiting</h2>
              <p>Salesforce API limits:</p>
              <ul>
                <li>API calls per 24-hour period (based on license)</li>
                <li>Concurrent API requests</li>
                <li>Per-minute limits</li>
              </ul>
            </section>

            <section>
              <h2>API Security</h2>
              <ul>
                <li>Use OAuth 2.0 for authentication</li>
                <li>Implement rate limiting</li>
                <li>Validate all inputs</li>
                <li>Use HTTPS for all calls</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Follow RESTful design principles</li>
                <li>Implement proper versioning</li>
                <li>Respect API limits</li>
                <li>Secure all APIs</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/architect-path/mulesoft-basics.html" className="nav-link">← MuleSoft Basics</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/architect-path/event-driven.html" className="nav-link">Event-Driven Architecture →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}