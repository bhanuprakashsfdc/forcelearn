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

export default function EventDriven() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/architect-path/event-driven.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/architect-path.html', label: 'Architect Path' },
            { label: 'Event-Driven Architecture' }
          ]} />
          <article className="lesson-content">
            <h1>Event-Driven Architecture</h1>
            <p className="lesson-intro">Learn how to implement event-driven architectures using Salesforce Platform Events.</p>

            <section>
              <h2>What is Event-Driven Architecture?</h2>
              <p>EDA is an architectural style where components communicate through events - notifications that something has happened. This creates loose coupling between systems.</p>
            </section>

            <section>
              <h2>Salesforce Platform Events</h2>
              <p>Platform Events are the foundation for event-driven integration in Salesforce:</p>
            <ul>
              <li><strong>Publish</strong> - Emit events when something happens</li>
              <li><strong>Subscribe</strong> - Listen for and react to events</li>
              <li><strong>Decoupled</strong> - Publishers don't know about subscribers</li>
            </ul>
            </section>

            <section>
              <h2>Creating Platform Events</h2>
              <ol>
                <li>Setup → Platform Events → New Platform Event</li>
                <li>Define Label and Plural Label</li>
                <li>Add fields (event payload)</li>
                <li>Save and deploy</li>
              </ol>
            </section>

            <section>
              <h2>Publishing Events</h2>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`// Create and publish event
Order_Placed__e event = new Order_Placed__e(
    OrderId__c = '12345',
    CustomerId__c = '001xxxxxxxxxxxx',
    Amount__c = 500.00
);

EventBus.publish(event);`}
              </pre>
            </section>

            <section>
              <h2>Subscribing to Events</h2>
              <ul>
                <li><strong>Apex Trigger</strong> - Trigger on Platform Event</li>
                <li><strong>Flow</strong> - Trigger a Flow when event occurs</li>
                <li><strong>External</strong> - CometD subscription for external systems</li>
              </ul>
            </section>

            <section>
              <h2>Use Cases</h2>
              <ul>
                <li>Sync data with external systems</li>
                <li>Trigger downstream processes</li>
                <li>Real-time notifications</li>
                <li>Audit logging</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Platform Events enable EDA in Salesforce</li>
                <li>Publish/subscribe pattern for decoupling</li>
                <li>Apex, Flow, or external subscriptions</li>
                <li>Use for real-time integration</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/architect-path/api-design.html" className="nav-link">← API Design</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/architect-path/identity-management.html" className="nav-link">Identity Management →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}