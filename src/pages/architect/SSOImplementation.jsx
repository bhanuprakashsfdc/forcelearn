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

export default function SSOImplementation() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/architect-path/sso-implementation.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/architect-path.html', label: 'Architect Path' },
            { label: 'SSO Implementation' }
          ]} />
          <article className="lesson-content">
            <h1>SSO Implementation</h1>
            <p className="lesson-intro">Learn how to implement Single Sign-On in Salesforce for seamless authentication.</p>

            <section>
              <h2>What is SSO?</h2>
              <p>Single Sign-On allows users to access multiple applications with one set of credentials. Users log in once and can access all authorized systems.</p>
            </section>

            <section>
              <h2>SSO Protocols</h2>
              <ul>
                <li><strong>SAML 2.0</strong> - Most common enterprise SSO</li>
                <li><strong>OpenID Connect</strong> - Modern OAuth-based</li>
                <li><strong>OAuth 2.0</strong> - API authentication</li>
                <li><strong>Central Identity</strong> - Salesforce as IdP</li>
              </ul>
            </section>

            <section>
              <h2>SAML Configuration</h2>
              <ol>
                <li>Enable SAML in Salesforce (Setup → SAML Settings)</li>
                <li>Configure SSO Provider metadata</li>
                <li>Create Connected App for SAML</li>
                <li>Map users to Identity Provider</li>
                <li>Test SSO configuration</li>
              </ol>
            </section>

            <section>
              <h2>My Domain</h2>
              <p>My Domain is required for SSO:</p>
              <ul>
                <li>Register custom domain</li>
                <li>Configure login redirect</li>
                <li>Enable for all users</li>
              </ul>
            </section>

            <section>
              <h2>Just-in-Time (JIT) Provisioning</h2>
              <p>Automatically create users on first SSO login:</p>
              <ul>
                <li>Enable JIT in Connected App</li>
                <li>Map SAML attributes to user fields</li>
                <li>Handle user creation/update</li>
              </ul>
            </section>

            <section>
              <h2>SSO Best Practices</h2>
              <ul>
                <li>Always have a fallback login method</li>
                <li>Test thoroughly before enabling for all users</li>
                <li>Document the SSO configuration</li>
                <li>Monitor login history</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>SAML 2.0 is the common protocol</li>
                <li>My Domain required for SSO</li>
                <li>JIT automates user provisioning</li>
                <li>Always have fallback authentication</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/architect-path/identity-management.html" className="nav-link">← Identity Management</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/architect-path/data-protection.html" className="nav-link">Data Protection →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}