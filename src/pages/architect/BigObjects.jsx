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

export default function BigObjects() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/architect-path/big-objects.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/architect-path.html', label: 'Architect Path' },
            { label: 'Big Objects' }
          ]} />
          <article className="lesson-content">
            <h1>Big Objects</h1>
            <p className="lesson-intro">Learn how to use Big Objects to store and manage massive amounts of historical data.</p>

            <section>
              <h2>What are Big Objects?</h2>
              <p>Big Objects are designed to store and manage massive amounts of data - billions of records. They provide dedicated storage for historical data that doesn't fit in standard objects.</p>
            </section>

            <section>
              <h2>Big Object Types</h2>
              <ul>
                <li><strong>Standard Big Objects</strong> - Built by Salesforce (Async API, Platform Events)</li>
                <li><strong>Custom Big Objects</strong> - Created for specific business needs</li>
              </ul>
            </section>

            <section>
              <h2>Use Cases</h2>
              <ul>
                <li><strong>Historical Archive</strong> - Store old records from standard objects</li>
                <li><strong>Audit Logging</strong> - Track all data changes</li>
                <li><strong>IoT Data</strong> - Store sensor data</li>
                <li><strong>Analytics</strong> - Large-scale reporting data</li>
              </ul>
            </section>

            <section>
              <h2>Creating a Custom Big Object</h2>
              <ol>
                <li>Go to Setup → Big Objects → New Custom Big Object</li>
                <li>Define Label, Plural Label, and Object Name</li>
                <li>Configure Data Type (History or Custom)</li>
                <li>Add fields (Index and custom fields)</li>
                <li>Deploy</li>
              </ol>
            </section>

            <section>
              <h2>API Access</h2>
              <p>Big Objects are accessed via API:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`// Using Composite API to query Big Object
POST /services/data/v58.0/composite
{
  "compositeRequest": [{
    "method": "GET",
    "url": "/services/data/v58.0/sobjects/Order_History__b",
    "referenceId": "OrderHistory"
  }]
}

// Insert data into Big Object
POST /services/data/v58.0/sobjects/Order_History__b
{
  "OrderId__c": "12345",
  "OrderDate__c": "2024-01-01",
  "TotalAmount__c": 1000.00
}`}
              </pre>
            </section>

            <section>
              <h2>Index Fields</h2>
              <p>Every Big Object requires an Index field:</p>
              <ul>
                <li>One or more fields that define uniqueness</li>
                <li>Used for query performance</li>
                <li>Cannot be changed after creation</li>
                <li>Maximum 5 fields in composite index</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Big Objects store billions of records</li>
                <li>Use for historical data and analytics</li>
                <li>Accessed via API only</li>
                <li>Requires careful index design</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/architect-path/storage-optimization.html" className="nav-link">← Storage Optimization</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/architect-path/mulesoft-basics.html" className="nav-link">MuleSoft Basics →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}