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

export default function SchemaDesign() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/architect-path/schema-design.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/architect-path.html', label: 'Architect Path' },
            { label: 'Schema Design' }
          ]} />
          <article className="lesson-content">
            <h1>Schema Design</h1>
            <p className="lesson-intro">Learn best practices for designing scalable and performant Salesforce schemas.</p>

            <section>
              <h2>Schema Design Principles</h2>
              <ul>
                <li><strong>Simplicity</strong> - Start simple, add complexity only when needed</li>
                <li><strong>Reusability</strong> - Create generic objects that can be reused</li>
                <li><strong>Extensibility</strong> - Design for future growth</li>
                <li><strong>Performance</strong> - Consider query performance from the start</li>
              </ul>
            </section>

            <section>
              <h2>Object Types</h2>
              <ul>
                <li><strong>Standard Objects</strong> - Built-in (Account, Contact, etc.)</li>
                <li><strong>Custom Objects</strong> - User-created for business needs</li>
                <li><strong>External Objects</strong> - Reference data in external systems</li>
                <li><strong>Big Objects</strong> - Store large amounts of historical data</li>
              </ul>
            </section>

            <section>
              <h2>Relationship Design</h2>
              <ul>
                <li><strong>Lookup</strong> - Loose relationship, independent records</li>
                <li><strong>Master-Detail</strong> - Tight coupling, cascading operations</li>
                <li><strong>Hierarchical</strong> - Self-referencing (Account hierarchy)</li>
                <li><strong>Many-to-Many</strong> - Junction object pattern</li>
              </ul>
            </section>

            <section>
              <h2>Field Design Best Practices</h2>
              <ul>
                <li>Use appropriate field types for the data</li>
                <li>Limit custom fields on standard objects</li>
                <li>Use encrypted fields for sensitive data</li>
                <li>Set appropriate field-level security</li>
                <li>Consider indexed fields for filtering</li>
              </ul>
            </section>

            <section>
              <h2>Schema Builder</h2>
              <p>Use Schema Builder for visual schema design:</p>
              <ol>
                <li>Go to Setup → Schema Builder</li>
                <li>Drag and drop objects</li>
                <li>Create relationships visually</li>
                <li>Add fields directly</li>
              </ol>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Follow schema design principles</li>
                <li>Choose appropriate relationship types</li>
                <li>Use Schema Builder for visualization</li>
                <li>Consider performance implications</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/architect-path/design-patterns.html" className="nav-link">← Design Patterns</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/architect-path/storage-optimization.html" className="nav-link">Storage Optimization →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}