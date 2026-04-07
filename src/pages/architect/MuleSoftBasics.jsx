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

export default function MuleSoftBasics() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/architect-path/mulesoft-basics.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/architect-path.html', label: 'Architect Path' },
            { label: 'MuleSoft Basics' }
          ]} />
          <article className="lesson-content">
            <h1>MuleSoft Basics</h1>
            <p className="lesson-intro">Learn the fundamentals of MuleSoft and how it integrates with Salesforce.</p>

            <section>
              <h2>What is MuleSoft?</h2>
              <p>MuleSoft is Salesforce's integration platform (iPaaS) that connects applications, data, and devices across on-premises and cloud environments.</p>
            </section>

            <section>
              <h2>Anypoint Platform Components</h2>
              <ul>
                <li><strong>Anypoint Exchange</strong> - Asset repository</li>
                <li><strong>Anypoint Studio</strong> - Visual development IDE</li>
                <li><strong>API Designer</strong> - Design and document APIs</li>
                <li><strong>API Gateway</strong> - Manage API traffic</li>
                <li><strong>Flow Designer</strong> - Low-code integration</li>
              </ul>
            </section>

            <section>
              <h2>Integration Patterns</h2>
              <ul>
                <li><strong>Point-to-Point</strong> - Direct system-to-system</li>
                <li><strong>Hub-and-Spoke</strong> - Central hub connects systems</li>
                <li><strong>Event-Driven</strong> - Asynchronous messaging</li>
                <li><strong>API-Led</strong> - Experience, Process, System APIs</li>
              </ul>
            </section>

            <section>
              <h2>Salesforce Connectors</h2>
              <p>MuleSoft provides connectors for Salesforce:</p>
              <ul>
                <li><strong>Salesforce Connector</strong> - CRUD operations</li>
                <li><strong>Platform Events</strong> - Event-driven integration</li>
                <li><strong>Streaming API</strong> - Real-time data</li>
                <li><strong>Bulk API</strong> - High-volume data</li>
              </ul>
            </section>

            <section>
              <h2>API-Led Architecture</h2>
              <p>Three-layer approach:</p>
              <ol>
                <li><strong>System APIs</strong> - Connect to backend systems</li>
                <li><strong>Process APIs</strong> - Orchestrate and transform</li>
                <li><strong>Experience APIs</strong> - Tailor for consumers</li>
              </ol>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>MuleSoft is Salesforce's integration platform</li>
                <li>Use Anypoint Platform for design and management</li>
                <li>API-led approach for scalable integration</li>
                <li>Salesforce connectors enable deep integration</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/architect-path/big-objects.html" className="nav-link">← Big Objects</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/architect-path/api-design.html" className="nav-link">API Design →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}