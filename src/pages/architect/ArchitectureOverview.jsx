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

export default function ArchitectureOverview() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/architect-path/architecture-overview.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/architect-path.html', label: 'Architect Path' },
            { label: 'Architecture Overview' }
          ]} />
          <article className="lesson-content">
            <h1>Salesforce Architecture Overview</h1>
            <p className="lesson-intro">Learn the fundamental concepts of Salesforce architecture and the different architectural layers.</p>

            <section>
              <h2>Salesforce Architecture Layers</h2>
              <p>Salesforce operates as a multi-tenant architecture with several distinct layers:</p>
              <ul>
                <li><strong>Database Layer</strong> - Multi-tenant database with shared tables</li>
                <li><strong>Application Layer</strong> - Business logic via Apex and Flow</li>
                <li><strong>Presentation Layer</strong> - Lightning Experience and UI</li>
                <li><strong>Integration Layer</strong> - APIs for external connectivity</li>
                <li><strong>Security Layer</strong> - Identity and access management</li>
              </ul>
            </section>

            <section>
              <h2>Multi-Tenant Overview</h2>
              <p>Salesforce uses a multi-tenant architecture where:</p>
              <ul>
                <li>Single codebase serves all customers</li>
                <li>Shared infrastructure with logical isolation</li>
                <li>Resource allocation managed by Salesforce</li>
                <li>Customers share upgrades and releases</li>
              </ul>
            </section>

            <section>
              <h2>Key Architectural Components</h2>
              <ul>
                <li><strong>Metadata</strong> - Configuration that defines the application</li>
                <li><strong>Apex</strong> - Programmatic business logic</li>
                <li><strong>Governor Limits</strong> - Resource constraints for fair sharing</li>
                <li><strong>Platform Events</strong> - Event-driven communication</li>
              </ul>
            </section>

            <section>
              <h2>Architect Decision Framework</h2>
              <p>When making architectural decisions, consider:</p>
              <ol>
                <li><strong>Requirements</strong> - What business needs are we solving?</li>
                <li><strong>Constraints</strong> - What are the limitations?</li>
                <li><strong>Trade-offs</strong> - What are we trading off?</li>
                <li><strong>Future State</strong> - How will this scale?</li>
              </ol>
            </section>

            <section>
              <h2>Architecture Roles</h2>
              <ul>
                <li><strong>Solution Architect</strong> - Overall solution design</li>
                <li><strong>Technical Architect</strong> - Platform technical decisions</li>
                <li><strong>Application Architect</strong> - Application-level design</li>
                <li><strong>Data Architect</strong> - Data model and strategy</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Salesforce is a multi-tenant platform</li>
                <li>Multiple architectural layers work together</li>
                <li>Governor limits enforce resource sharing</li>
                <li>Architects must consider trade-offs</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/architect-path.html" className="nav-link">← Architect Path</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/architect-path/domain-modeling.html" className="nav-link">Domain Modeling →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}