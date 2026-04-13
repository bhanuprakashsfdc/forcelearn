import { Link } from 'react-router-dom'

const roadmapSteps = [
  { 
    phase: 'Phase 1', 
    title: 'Salesforce Foundations', 
    duration: '2-3 weeks', 
    description: 'Understand CRM concepts and navigate the Salesforce platform',
    topics: ['CRM Concepts', 'Platform Navigation', 'Setup Menu', 'Lightning Experience'],
    outcomes: ['Navigate Salesforce confidently', 'Understand CRM terminology', 'Configure personal settings']
  },
  { 
    phase: 'Phase 2', 
    title: 'Admin Fundamentals', 
    duration: '4-6 weeks', 
    description: 'Master objects, fields, and basic configuration',
    topics: ['Objects & Fields', 'Data Management', 'Security Basics', 'Reports'],
    outcomes: ['Create custom objects', 'Manage user access', 'Build reports and dashboards']
  },
  { 
    phase: 'Phase 3', 
    title: 'Automation & Advanced Admin', 
    duration: '4-6 weeks', 
    description: 'Implement business processes and automation',
    topics: ['Flow Builder', 'Validation Rules', 'Approval Processes', 'Advanced Security'],
    outcomes: ['Automate business processes', 'Implement complex validations', 'Manage data quality']
  },
  { 
    phase: 'Phase 4', 
    title: 'Developer Path', 
    duration: '8-12 weeks', 
    description: 'Learn Apex programming and Lightning Web Components',
    topics: ['Apex Basics', 'SOQL & SOSL', 'Triggers', 'LWC Development'],
    outcomes: ['Write Apex code', 'Build custom components', 'Implement integrations']
  },
  { 
    phase: 'Phase 5', 
    title: 'Architect Path', 
    duration: '12-16 weeks', 
    description: 'Design enterprise solutions and master integration patterns',
    topics: ['System Design', 'Data Architecture', 'Integration Patterns', 'Security Architecture'],
    outcomes: ['Design scalable solutions', 'Plan enterprise integrations', 'Ensure security compliance']
  }
]

const certifications = [
  {
    name: 'Salesforce Administrator',
    code: 'ADM-201',
    level: 'Beginner',
    prerequisites: 'None',
    examFee: '$200',
    path: '/admin-path.html'
  },
  {
    name: 'Platform App Builder',
    code: 'CRTA',
    level: 'Intermediate',
    prerequisites: 'Admin certification recommended',
    examFee: '$200',
    path: '/admin-path.html'
  },
  {
    name: 'Platform Developer I',
    code: 'PDI',
    level: 'Intermediate',
    prerequisites: '6+ months development experience',
    examFee: '$200',
    path: '/developer-path.html'
  },
  {
    name: 'Platform Developer II',
    code: 'PDII',
    level: 'Advanced',
    prerequisites: 'Platform Developer I',
    examFee: '$200',
    path: '/developer-path.html'
  }
]

export default function Roadmap() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Your Salesforce Learning Roadmap</h1>
          <p className="section-subtitle">
            Follow this structured path to become a Salesforce professional. 
            Each phase builds on the previous one, taking you from beginner to expert.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ 
          position: 'relative', 
          maxWidth: '800px', 
          margin: '0 auto 64px'
        }}>
          {/* Center line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '100%',
            background: 'var(--color-border)',
            top: 0
          }} />

          {/* Steps */}
          {roadmapSteps.map((step, i) => (
            <div 
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '32px',
                position: 'relative',
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse'
              }}
            >
              {/* Content */}
              <div style={{
                flex: 1,
                padding: '24px',
                background: 'var(--color-background)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                marginRight: i % 2 === 0 ? '32px' : 0,
                marginLeft: i % 2 !== 0 ? '32px' : 0
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-brand)' }}>{step.phase}</span>
                  <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>{step.duration}</span>
                </div>
                <h3 style={{ marginBottom: '8px', fontSize: '18px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>
                  {step.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                  {step.topics.map((topic, j) => (
                    <span key={j} className="badge">{topic}</span>
                  ))}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  <strong>Outcomes:</strong> {step.outcomes.join(', ')}
                </div>
              </div>

              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--color-brand)',
                border: '3px solid var(--color-background)',
                zIndex: 1
              }} />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginBottom: '64px' }}>
          <div className="section-header">
            <h2 className="section-title">Certification Path</h2>
            <p className="section-subtitle">
              Validate your skills with industry-recognized Salesforce certifications.
            </p>
          </div>

          <div className="cards-grid">
            {certifications.map((cert, i) => (
              <div className="path-card" key={i}>
                <div className="path-card-header">
                  <span className="path-card-icon">🏆</span>
                  <h3 className="path-card-title">{cert.name}</h3>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                  {cert.code}
                </p>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <span className="badge">{cert.level}</span>
                  <span className="badge">{cert.examFee}</span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                  <strong>Prerequisites:</strong> {cert.prerequisites}
                </p>
                <Link to={cert.path} className="card-link">
                  Prepare for this exam →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ 
          textAlign: 'center',
          padding: '48px',
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-xl)'
        }}>
          <h2 style={{ marginBottom: '16px', fontSize: '28px' }}>Ready to Start Your Journey?</h2>
          <p style={{ marginBottom: '24px', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 24px' }}>
            Choose your starting point based on your current experience level and career goals.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admin-path.html" className="btn btn-primary btn-lg">
              Start Admin Path
            </Link>
            <Link to="/developer-path.html" className="btn btn-secondary btn-lg">
              Start Developer Path
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}