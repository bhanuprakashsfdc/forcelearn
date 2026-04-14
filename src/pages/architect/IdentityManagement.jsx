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

export default function IdentityManagement() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/architect-path/identity-management.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/architect-path.html', label: 'Architect Path' },
            { label: 'Identity Management' }
          ]} />
          <article className="lesson-content">
            <h1>Identity Management</h1>
            <p className="lesson-intro">Learn how to implement robust identity management in Salesforce.</p>

            <section>
              <h2>Salesforce Identity</h2>
              <p>Salesforce Identity provides identity and access management:</p>
              <ul>
                <li><strong>Authentication</strong> - Verify user identity</li>
                <li><strong>Authorization</strong> - Grant appropriate access</li>
                <li><strong>Single Sign-On</strong> - Integrate with external IdPs</li>
                <li><strong>Multi-Factor Authentication</strong> - Additional security layer</li>
              </ul>
            </section>

            <section>
              <h2>User Management</h2>
              <ul>
                <li><strong>User Provisioning</strong> - Automated user creation</li>
                <li><strong>De-provisioning</strong> - Revoke access when employees leave</li>
                <li><strong>User Life Cycle</strong> - Manage from hire to retire</li>
                <li><strong>Delegated Administration</strong> - Distribute admin tasks</li>
              </ul>
            </section>

            <section>
              <h2>Identity Provider (IdP)</h2>
              <p>Salesforce can act as SP or IdP:</p>
              <ul>
                <li><strong>As Service Provider</strong> - Use external IdP (Okta, Azure AD)</li>
                <li><strong>As Identity Provider</strong> - Provide identity to other apps</li>
              </ul>
            </section>

            <section>
              <h2>Connected App Security</h2>
              <p>Configure security for connected apps:</p>
              <ul>
                <li>OAuth scopes and policies</li>
                <li>Session policies</li>
                <li>IP relaxation rules</li>
                <li>Pin requirements</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Salesforce Identity manages authentication/authorization</li>
                <li>Implement user life cycle management</li>
                <li>Configure Connected App security</li>
                <li>Plan IdP integration strategy</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/architect-path/event-driven.html" className="nav-link">← Event-Driven Architecture</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/architect-path/sso-implementation.html" className="nav-link">SSO Implementation →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}