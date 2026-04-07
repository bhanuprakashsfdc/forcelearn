import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Learn Salesforce Step-by-Step<br />Beginner to Architect</h1>
          <p className="hero-subtitle">Master Salesforce through structured learning paths. From admin basics to architect certification — all free, all static.</p>
          <div className="hero-actions">
            <Link to="/admin-path" className="btn btn-primary">Start Admin Path</Link>
            <Link to="/clouds" className="btn btn-secondary">Explore Clouds</Link>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choose Your Learning Path</h2>
            <p className="section-subtitle">Structured tracks designed to take you from zero to certified Salesforce professional.</p>
          </div>
          <div className="cards-grid">
            <div className="path-card">
              <div className="path-card-header">
                <div className="path-card-icon">👤</div>
                <h3 className="path-card-title">Admin Path</h3>
              </div>
              <p className="path-card-meta">Beginner • 6-8 weeks</p>
              <p className="card-desc">Learn Salesforce configuration, objects, automation, and security. Perfect for those starting their Salesforce journey.</p>
              <div className="path-card-modules">
                <span className="badge">Salesforce Basics</span>
                <span className="badge">Objects & Fields</span>
                <span className="badge">Automation</span>
                <span className="badge">Security</span>
              </div>
              <Link to="/admin-path" className="card-link">Start Learning →</Link>
            </div>
            <div className="path-card">
              <div className="path-card-header">
                <div className="path-card-icon">💻</div>
                <h3 className="path-card-title">Developer Path</h3>
              </div>
              <p className="path-card-meta">Intermediate • 8-12 weeks</p>
              <p className="card-desc">Master Apex, Lightning Web Components, and integration. Build custom applications on the Salesforce platform.</p>
              <div className="path-card-modules">
                <span className="badge">Apex Basics</span>
                <span className="badge">Triggers</span>
                <span className="badge">LWC</span>
                <span className="badge">Integration</span>
              </div>
              <Link to="/developer-path" className="card-link">Start Learning →</Link>
            </div>
            <div className="path-card">
              <div className="path-card-header">
                <div className="path-card-icon">🏛️</div>
                <h3 className="path-card-title">Architect Path</h3>
              </div>
              <p className="path-card-meta">Advanced • 10-16 weeks</p>
              <p className="card-desc">Design enterprise solutions, master integration patterns, and prepare for Salesforce Architect certifications.</p>
              <div className="path-card-modules">
                <span className="badge">System Design</span>
                <span className="badge">Integration Patterns</span>
                <span className="badge">Data Architecture</span>
                <span className="badge">Governance</span>
              </div>
              <Link to="/architect-path" className="card-link">Start Learning →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="roadmap">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Your Salesforce Journey</h2>
            <p className="section-subtitle">A visual roadmap showing the path from beginner to certified architect.</p>
          </div>
          <div className="roadmap-steps">
            <div className="roadmap-step">
              <span className="roadmap-step-number">1</span>
              <span>Beginner</span>
            </div>
            <span className="roadmap-arrow">→</span>
            <div className="roadmap-step">
              <span className="roadmap-step-number">2</span>
              <span>Admin Certified</span>
            </div>
            <span className="roadmap-arrow">→</span>
            <div className="roadmap-step">
              <span className="roadmap-step-number">3</span>
              <span>Platform Developer</span>
            </div>
            <span className="roadmap-arrow">→</span>
            <div className="roadmap-step">
              <span className="roadmap-step-number">4</span>
              <span>Solution Architect</span>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/roadmap" className="btn btn-brand">View Full Roadmap</Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Real-World Projects</h2>
            <p className="section-subtitle">Apply your skills by building complete Salesforce applications.</p>
          </div>
          <div className="cards-grid">
            <div className="project-card">
              <div className="project-image">📊</div>
              <h3 className="project-title">CRM Dashboard</h3>
              <p className="project-desc">Build a custom sales dashboard with opportunity tracking and analytics.</p>
              <div className="project-tags">
                <span className="tag">Admin</span>
                <span className="tag">Reports</span>
                <span className="tag">Dashboards</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">🏦</div>
              <h3 className="project-title">Loan Management System</h3>
              <p className="project-desc">Create a complete loan processing system with approval workflows.</p>
              <div className="project-tags">
                <span className="tag">Flow Builder</span>
                <span className="tag">Apex</span>
                <span className="tag">LWC</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">🎧</div>
              <h3 className="project-title">Service Cloud Console</h3>
              <p className="project-desc">Implement a service console with case management and knowledge base.</p>
              <div className="project-tags">
                <span className="tag">Service Cloud</span>
                <span className="tag">Omni-Channel</span>
                <span className="tag">Knowledge</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/projects" className="btn btn-secondary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Why ForceLearn */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why ForceLearn?</h2>
          </div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">📚</div>
              <h3 className="feature-title">Free & Open</h3>
              <p className="feature-desc">All content is free. No login required. Learn at your own pace.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Structured Learning</h3>
              <p className="feature-desc">Follow proven paths from beginner to architect with clear milestones.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">Project-Based</h3>
              <p className="feature-desc">Build real projects to solidify your understanding.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">SEO Optimized</h3>
              <p className="feature-desc">Every lesson is a separate page, easy to find and share.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Mobile Friendly</h3>
              <p className="feature-desc">Learn on any device with our responsive design.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔄</div>
              <h3 className="feature-title">Always Current</h3>
              <p className="feature-desc">Content updated regularly for the latest Salesforce features.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function AdminPath() {
  const modules = [
    { title: '1. Salesforce Basics', desc: 'Understanding the Salesforce ecosystem, cloud computing basics, and the Salesforce architecture.' },
    { title: '2. Navigation & UI', desc: 'Getting around Salesforce, Lightning Experience, and customizing the user interface.' },
    { title: '3. Objects & Fields', desc: 'Mastering standard and custom objects, field types, and data modeling.' },
    { title: '4. Data Management', desc: 'Import, export, and manage data with Data Loader and mass operations.' },
    { title: '5. Reports & Dashboards', desc: 'Creating reports, dashboards, and analytics to visualize business data.' },
    { title: '6. Automation with Flow', desc: 'Build automated processes using Flow Builder without code.' },
    { title: '7. Workflow Rules', desc: 'Automate business processes with workflow rules and approval processes.' },
    { title: '8. Security Model', desc: 'Configure sharing rules, role hierarchy, and field-level security.' },
    { title: '9. User Management', desc: 'Managing users, licenses, and permissions in Salesforce.' },
    { title: '10. AppExchange', desc: 'Discover and install apps from the Salesforce AppExchange marketplace.' },
    { title: '11. Service Cloud Basics', desc: 'Introduction to Service Cloud, case management, and entitlements.' },
    { title: '12. Admin Certification Prep', desc: 'Prepare for the Salesforce Administrator certification exam.' },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Admin Learning Path</h1>
          <p className="section-subtitle">Master Salesforce administration from the ground up. This path is designed for beginners with no prior Salesforce experience.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
          <span className="badge" style={{ background: 'var(--color-brand-light)', color: 'var(--color-brand-deep)' }}>Beginner</span>
          <span className="badge">6-8 weeks</span>
          <span className="badge">12 Modules</span>
        </div>
        <div className="cards-grid">
          {modules.map((mod, i) => (
            <div className="card" key={i}>
              <h3 className="card-title">{mod.title}</h3>
              <p className="card-desc">{mod.desc}</p>
              <span className="card-link">Start Module →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DeveloperPath() {
  const modules = [
    { title: '1. Apex Basics', desc: 'Introduction to Apex programming, syntax, and the Salesforce development environment.' },
    { title: '2. Apex Data Types', desc: 'Variables, data types, operators, and control structures in Apex.' },
    { title: '3. SOQL & SOSL', desc: 'Query Salesforce data using SOQL and search with SOSL.' },
    { title: '4. DML Operations', desc: 'Insert, update, upsert, delete, and undelete records in Apex.' },
    { title: '5. Triggers', desc: 'Write triggers to execute logic before or after DML operations.' },
    { title: '6. Trigger Best Practices', desc: 'Bulkification, handler patterns, and avoiding common trigger pitfalls.' },
    { title: '7. Classes & Methods', desc: 'Create and use classes, constructors, and static/instance methods.' },
    { title: '8. Collection Types', desc: 'Lists, sets, and maps for handling collections of data.' },
    { title: '9. Testing', desc: 'Write unit tests to ensure your code quality and coverage.' },
    { title: '10. Lightning Web Components', desc: 'Build modern UI components with LWC framework.' },
    { title: '11. LWC Fundamentals', desc: 'Components, properties, events, and lifecycle hooks in LWC.' },
    { title: '12. LWC Data Binding', desc: 'Wire adapters, imperative calls, and data binding patterns.' },
    { title: '13. REST API', desc: 'Integrate with external systems using REST API.' },
    { title: '14. Developer Certification Prep', desc: 'Prepare for the Platform Developer I certification.' },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Developer Learning Path</h1>
          <p className="section-subtitle">Transform from a Salesforce administrator into a platform developer.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
          <span className="badge" style={{ background: 'var(--color-brand-light)', color: 'var(--color-brand-deep)' }}>Intermediate</span>
          <span className="badge">8-12 weeks</span>
          <span className="badge">14 Modules</span>
        </div>
        <div className="cards-grid">
          {modules.map((mod, i) => (
            <div className="card" key={i}>
              <h3 className="card-title">{mod.title}</h3>
              <p className="card-desc">{mod.desc}</p>
              <span className="card-link">Start Module →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArchitectPath() {
  const modules = [
    { title: '1. Solution Architecture Fundamentals', desc: 'Introduction to solution architecture, enterprise patterns, and architectural thinking.' },
    { title: '2. Data Architecture', desc: 'Designing data models, relationship types, and large data volume strategies.' },
    { title: '3. Integration Patterns', desc: 'MuleSoft, REST/SOAP APIs, Platform Events, and CDC integration strategies.' },
    { title: '4. Identity & Access', desc: 'SSO, OAuth, SAML, and identity management in Salesforce.' },
    { title: '5. Security Architecture', desc: 'Enterprise security design, encryption, and compliance patterns.' },
    { title: '6. Event-Driven Architecture', desc: 'Platform Events, Change Data Capture, and event-driven patterns.' },
    { title: '7. Performance Optimization', desc: 'Governor limits, query optimization, and performance tuning.' },
    { title: '8. Multi-Org Strategy', desc: 'Single vs. multi-org strategies, sandbox strategy, and CI/CD.' },
    { title: '9. Service Cloud Architecture', desc: 'Service Cloud design patterns, omni-channel, and case management.' },
    { title: '10. Marketing Cloud Integration', desc: 'Integrating Marketing Cloud with Sales and Service Cloud.' },
    { title: '11. Data Cloud Architecture', desc: 'Salesforce Data Cloud setup, data streams, and unification.' },
    { title: '12. Architect Certification Prep', desc: 'Prepare for the Application Architect and System Architect certifications.' },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Architect Learning Path</h1>
          <p className="section-subtitle">Master enterprise solution architecture on Salesforce.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
          <span className="badge" style={{ background: 'var(--color-brand-light)', color: 'var(--color-brand-deep)' }}>Advanced</span>
          <span className="badge">10-16 weeks</span>
          <span className="badge">12 Modules</span>
        </div>
        <div className="cards-grid">
          {modules.map((mod, i) => (
            <div className="card" key={i}>
              <h3 className="card-title">{mod.title}</h3>
              <p className="card-desc">{mod.desc}</p>
              <span className="card-link">Start Module →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    { title: 'CRM Dashboard', desc: 'Build a custom sales dashboard with opportunity tracking and analytics.', tags: ['Admin', 'Reports', 'Dashboards'], icon: '📊' },
    { title: 'Loan Management System', desc: 'Create a complete loan processing system with approval workflows.', tags: ['Flow Builder', 'Apex', 'LWC'], icon: '🏦' },
    { title: 'Service Cloud Console', desc: 'Implement a service console with case management and knowledge base.', tags: ['Service Cloud', 'Omni-Channel', 'Knowledge'], icon: '🎧' },
    { title: 'E-Commerce Store', desc: 'Build a B2B e-commerce solution with product catalog and order processing.', tags: ['Commerce Cloud', 'Order Management', 'LWC'], icon: '🛒' },
    { title: 'Employee Onboarding', desc: 'Create an automated onboarding system with task tracking and HR workflows.', tags: ['Flow', 'Approval', 'Quick Actions'], icon: '📋' },
    { title: 'Event Management App', desc: 'Build a mobile-first event management app with registration and check-in.', tags: ['LWC', 'Mobile', 'Experience Cloud'], icon: '📱' },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Real-World Projects</h1>
          <p className="section-subtitle">Apply your Salesforce skills by building complete, production-ready applications.</p>
        </div>
        <div className="cards-grid">
          {projects.map((proj, i) => (
            <div className="project-card" key={i}>
              <div className="project-image">{proj.icon}</div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tags">
                {proj.tags.map((tag, j) => <span className="tag" key={j}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Roadmap() {
  const phases = [
    { title: 'Phase 1: Beginner', weeks: 'Weeks 1-4', emoji: '🌱', skills: ['Salesforce Basics', 'Navigation', 'Objects & Fields', 'Data Types'], goal: '4 weeks' },
    { title: 'Phase 2: Admin Certified', weeks: 'Weeks 5-12', emoji: '👤', skills: ['Reports & Dashboards', 'Flow Builder', 'Security', 'Workflow', 'User Management', 'Data Loader'], goal: '8 weeks • Salesforce Administrator Certification' },
    { title: 'Phase 3: Platform Developer', weeks: 'Weeks 13-24', emoji: '💻', skills: ['Apex Basics', 'SOQL', 'Triggers', 'Apex Classes', 'LWC', 'Testing'], goal: '12 weeks • Platform Developer I Certification' },
    { title: 'Phase 4: Advanced Developer', weeks: 'Weeks 25-36', emoji: '🔒', skills: ['Async Apex', 'REST/SOAP API', 'Platform Events', 'Aura Components', 'CI/CD'], goal: '12 weeks • Platform Developer II Certification' },
    { title: 'Phase 5: Solution Architect', weeks: 'Weeks 37-52', emoji: '🏛️', skills: ['Solution Architecture', 'Data Architecture', 'Integration Patterns', 'Security Architecture', 'MuleSoft'], goal: '16 weeks • System Architect Certification' },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Your Salesforce Journey</h1>
          <p className="section-subtitle">A comprehensive roadmap from beginner to certified Salesforce Architect.</p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {phases.map((phase, i) => (
            <div key={i} style={{ display: 'flex', gap: '24px', marginBottom: '48px' }}>
              <div style={{ flex: '0 0 60px', textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', background: 'var(--color-brand-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto' }}>{phase.emoji}</div>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '8px' }}>{phase.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '16px' }}>{phase.weeks}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {phase.skills.map((skill, j) => <span className="badge" key={j}>{skill}</span>)}
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginTop: '12px' }}>⏱️ {phase.goal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Clouds() {
  const clouds = [
    { name: 'Sales Cloud', desc: 'Manage sales processes, leads, opportunities, and customer relationships.', icon: '💼', modules: ['Lead Management', 'Opportunity Management', 'Account Management', 'Contact Management', 'Sales Forecasting', 'Sales Analytics'] },
    { name: 'Service Cloud', desc: 'Deliver exceptional customer service across any channel.', icon: '🎧', modules: ['Case Management', 'Service Console', 'Knowledge Base', 'Omni-Channel', 'Field Service', 'Service Analytics'] },
    { name: 'Marketing Cloud', desc: 'Create personalized customer journeys across all marketing channels.', icon: '📢', modules: ['Email Marketing', 'Social Marketing', 'Advertising', 'Journey Builder', 'Marketing Analytics', 'Personalization'] },
    { name: 'Commerce Cloud', desc: 'Build seamless e-commerce experiences for B2B and B2C.', icon: '🛒', modules: ['Storefront', 'Order Management', 'Inventory', 'Pricing', 'Promotions', 'Checkout'] },
    { name: 'Experience Cloud', desc: 'Create branded digital experiences for customers, partners, and employees.', icon: '🌐', modules: ['Community Builder', 'Lightning Bolts', 'Content Management', 'User Engagement', 'Moderation', 'Analytics'] },
    { name: 'Data Cloud', desc: 'Unify customer data from all sources for actionable insights.', icon: '📊', modules: ['Data Ingestion', 'Identity Resolution', 'Segmentation', 'Activation', 'Analytics', 'CDP Integration'] },
    { name: 'Analytics Cloud', desc: 'Turn data into insights with interactive dashboards and reports.', icon: '📈', modules: ['Einstein Analytics', 'Tableau', 'Dashboard Builder', 'Data Visualization', 'Reporting', 'Mobile Analytics'] },
    { name: 'Integration Cloud', desc: 'Connect Salesforce with any system using MuleSoft.', icon: '🔗', modules: ['Anypoint Platform', 'API Management', 'Integration Patterns', 'Flow Designer', 'Connector Development', 'Middleware'] },
    { name: 'Financial Services Cloud', desc: 'Specialized solution for financial advisors and institutions.', icon: '🏦', modules: ['Client Management', 'Financial Planning', 'Wealth Management', 'Compliance', 'Task Management', 'Referral Tracking'] },
    { name: 'Health Cloud', desc: 'Build patient relationships and manage care coordination.', icon: '🏥', modules: ['Patient 360', 'Care Plan', 'Provider Network', 'Health Analytics', 'Patient Engagement', 'Telehealth'] },
    { name: 'Manufacturing Cloud', desc: 'Streamline manufacturing operations and dealer management.', icon: '🏭', modules: ['Order Management', 'Supply Chain', 'Dealer Management', 'Service Parts', 'Fleet Management', 'IoT Integration'] },
    { name: 'Nonprofit Cloud', desc: 'Empower nonprofits with constituent relationship management.', icon: '🤝', modules: ['Constituent Management', 'Program Management', 'Fundraising', 'Volunteer Management', 'Grant Management', 'Impact Tracking'] },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Salesforce Clouds</h1>
          <p className="section-subtitle">Explore the different Salesforce clouds and their capabilities. Each cloud addresses specific business needs.</p>
        </div>
        <div className="cards-grid">
          {clouds.map((cloud, i) => (
            <div className="path-card" key={i}>
              <div className="path-card-header">
                <div className="path-card-icon">{cloud.icon}</div>
                <h3 className="path-card-title">{cloud.name}</h3>
              </div>
              <p className="card-desc">{cloud.desc}</p>
              <div className="path-card-modules">
                {cloud.modules.slice(0, 3).map((mod, j) => <span className="badge" key={j}>{mod}</span>)}
                {cloud.modules.length > 3 && <span className="badge">+{cloud.modules.length - 3} more</span>}
              </div>
              <Link to={`/clouds/${cloud.name.toLowerCase().replace(' ', '-')}`} className="card-link">Explore Cloud →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/admin-path" className="footer-link">Admin Path</Link>
            <Link to="/developer-path" className="footer-link">Developer Path</Link>
            <Link to="/architect-path" className="footer-link">Architect Path</Link>
            <Link to="/clouds" className="footer-link">Clouds</Link>
            <Link to="/projects" className="footer-link">Projects</Link>
            <Link to="/roadmap" className="footer-link">Roadmap</Link>
          </div>
          <p className="footer-copyright">© 2026 ForceLearn. Built for the Salesforce community.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <div className="container">
            <div className="header-inner">
              <Link to="/" className="logo">Force<span>Learn</span></Link>
              <nav className="nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/admin-path" className="nav-link">Admin Path</Link>
                <Link to="/developer-path" className="nav-link">Developer Path</Link>
                <Link to="/architect-path" className="nav-link">Architect Path</Link>
                <Link to="/clouds" className="nav-link">Clouds</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/roadmap" className="nav-link">Roadmap</Link>
              </nav>
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin-path" element={<AdminPath />} />
            <Route path="/developer-path" element={<DeveloperPath />} />
            <Route path="/architect-path" element={<ArchitectPath />} />
            <Route path="/clouds" element={<Clouds />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App