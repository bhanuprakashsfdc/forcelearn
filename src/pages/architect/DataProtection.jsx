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

export default function DataProtection() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/architect-path/data-protection.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/architect-path.html', label: 'Architect Path' },
            { label: 'Data Protection' }
          ]} />
          <article className="lesson-content">
            <h1>Data Protection</h1>
            <p className="lesson-intro">Learn how to implement comprehensive data protection in Salesforce.</p>

            <section>
              <h2>Data Classification</h2>
              <p>Classify data based on sensitivity:</p>
              <ul>
                <li><strong>Public</strong> - No restrictions</li>
                <li><strong>Internal</strong> - Company-only</li>
                <li><strong>Confidential</strong> - Restricted access</li>
                <li><strong>Restricted</strong> - Highly sensitive (PII, PHI)</li>
              </ul>
            </section>

            <section>
              <h2>Salesforce Shield</h2>
              <p>Enterprise-grade security add-on:</p>
              <ul>
                <li><strong>Platform Encryption</strong> - Encrypt data at rest</li>
                <li><strong>Event Monitoring</strong> - Track user activity</li>
                <li><strong>Field Audit Trail</strong> - Track field changes</li>
                <li><strong>Data Cloud Governance</strong> - Data governance</li>
              </ul>
            </section>

            <section>
              <h2>Field-Level Encryption</h2>
              <p>Encrypt sensitive fields:</p>
              <ol>
                <li>Enable Platform Encryption</li>
                <li>Define encryption key</li>
                <li>Select fields to encrypt</li>
                <li>Configure access policies</li>
              </ol>
            </section>

            <section>
              <h2>Data Masking</h2>
              <p>Mask sensitive data in non-production environments:</p>
              <ul>
                <li>Use Salesforce Data Mask app</li>
                <li>Configure masking rules</li>
                <li>Apply to sandboxes</li>
                <li>Test with masked data</li>
              </ul>
            </section>

            <section>
              <h2>Compliance Frameworks</h2>
              <ul>
                <li><strong>GDPR</strong> - EU data protection</li>
                <li><strong>CCPA</strong> - California privacy</li>
                <li><strong>HIPAA</strong> - Healthcare data</li>
                <li><strong>SOX</strong> - Financial reporting</li>
              </ul>
            </section>

            <section>
              <h2>Data Loss Prevention</h2>
              <ul>
                <li>Configure Data Classification</li>
                <li>Implement Salesforce Shield</li>
                <li>Set up DLP policies</li>
                <li>Regular security reviews</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Classify data by sensitivity</li>
                <li>Use Salesforce Shield for encryption</li>
                <li>Implement compliance controls</li>
                <li>Regular security assessments</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/architect-path/sso-implementation.html" className="nav-link">← SSO Implementation</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/architect-path.html" className="nav-link">Back to Architect Path →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}