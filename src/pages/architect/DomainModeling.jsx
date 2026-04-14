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

export default function DomainModeling() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/architect-path/domain-modeling.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/architect-path.html', label: 'Architect Path' },
            { label: 'Domain Modeling' }
          ]} />
          <article className="lesson-content">
            <h1>Domain Modeling</h1>
            <p className="lesson-intro">Learn how to design effective domain models for complex Salesforce implementations.</p>

            <section>
              <h2>What is Domain Modeling?</h2>
              <p>Domain modeling is the process of representing real-world business concepts as software objects. In Salesforce, this translates to creating a schema of objects, fields, and relationships.</p>
            </section>

            <section>
              <h2>Core Domain Concepts</h2>
              <ul>
                <li><strong>Entities</strong> - Business objects (Account, Opportunity, etc.)</li>
                <li><strong>Attributes</strong> - Properties of entities (Name, Amount, etc.)</li>
                <li><strong>Relationships</strong> - Connections between entities</li>
                <li><strong>Behaviors</strong> - Actions and processes</li>
              </ul>
            </section>

            <section>
              <h2>Domain Model Patterns</h2>
              <ul>
                <li><strong>Account-centric</strong> - Everything relates to Account</li>
                <li><strong>Transaction-centric</strong> - Focus on transactions/orders</li>
                <li><strong>Case-centric</strong> - For service organizations</li>
                <li><strong>Hybrid</strong> - Combination based on business needs</li>
              </ul>
            </section>

            <section>
              <h2>Steps to Create Domain Model</h2>
              <ol>
                <li><strong>Identify Business Entities</strong> - What objects exist in the business?</li>
                <li><strong>Define Attributes</strong> - What properties does each have?</li>
                <li><strong>Map Relationships</strong> - How do entities relate?</li>
                <li><strong>Validate with Users</strong> - Does it match their mental model?</li>
              </ol>
            </section>

            <section>
              <h2>Example: E-commerce Domain</h2>
              <p>A simplified e-commerce domain model:</p>
              <ul>
                <li>Account (Customer) ← Order (1:M)</li>
                <li>Order ← Order Item (1:M)</li>
                <li>Product ← Order Item (1:M)</li>
                <li>Account ← Address (1:M)</li>
              </ul>
            </section>

            <section>
              <h2>Salesforce-Specific Considerations</h2>
              <ul>
                <li>Leverage standard objects where possible</li>
                <li>Use Custom Objects for business-specific needs</li>
                <li>Consider future extensibility</li>
                <li>Plan for data migration and integration</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Domain modeling translates business to software</li>
                <li>Identify entities, attributes, and relationships</li>
                <li>Use appropriate patterns for your business</li>
                <li>Salesforce schema should match domain model</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/architect-path/architecture-overview.html" className="nav-link">← Architecture Overview</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/architect-path/design-patterns.html" className="nav-link">Design Patterns →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}