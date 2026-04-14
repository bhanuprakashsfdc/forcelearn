import { Link } from 'react-router-dom'
import { useState } from 'react'

const projects = [
  { 
    title: 'Lead Management App', 
    desc: 'Build a complete lead management system with Lightning Web Components. Includes lead capture, assignment, and tracking.', 
    level: 'Beginner', 
    icon: '📋',
    technologies: ['LWC', 'Apex', 'SOQL'],
    duration: '4-6 hours',
    slug: '/developer-path.html'
  },
  { 
    title: 'Case Management System', 
    desc: 'Create a custom case management solution with automated routing and escalation rules.', 
    level: 'Intermediate', 
    icon: '🎫',
    technologies: ['Flow Builder', 'Apex', 'Lightning Pages'],
    duration: '6-8 hours',
    slug: '/admin-path/flow-builder.html'
  },
  { 
    title: 'Order Processing App', 
    desc: 'Build an end-to-end order processing system with inventory management and approval workflows.', 
    level: 'Advanced', 
    icon: '📦',
    technologies: ['Apex', 'LWC', 'Flow', 'Integration'],
    duration: '10-12 hours',
    slug: '/developer-path.html'
  },
  { 
    title: 'Customer Portal', 
    desc: 'Develop a customer self-service portal using Experience Cloud with case tracking and knowledge base.', 
    level: 'Intermediate', 
    icon: '🌐',
    technologies: ['Experience Cloud', 'LWC', 'Sharing Sets'],
    duration: '8-10 hours',
    slug: '/clouds.html'
  },
  { 
    title: 'Sales Dashboard', 
    desc: 'Create an interactive sales dashboard with real-time analytics and forecasting visualizations.', 
    level: 'Beginner', 
    icon: '📊',
    technologies: ['Reports', 'Dashboards', 'Einstein Analytics'],
    duration: '3-4 hours',
    slug: '/admin-path/dashboards.html'
  },
  { 
    title: 'Integration Hub', 
    desc: 'Build a middleware solution to integrate Salesforce with external ERP and accounting systems.', 
    level: 'Advanced', 
    icon: '🔗',
    technologies: ['MuleSoft', 'REST API', 'Platform Events'],
    duration: '12-16 hours',
    slug: '/architect-path/mulesoft-basics.html'
  },
  { 
    title: 'Mobile Field Service App', 
    desc: 'Develop a mobile app for field technicians with offline capabilities and GPS tracking.', 
    level: 'Advanced', 
    icon: '📱',
    technologies: ['Salesforce Mobile', 'LWC', 'Offline First'],
    duration: '10-14 hours',
    slug: '/clouds.html'
  },
  { 
    title: 'Marketing Automation', 
    desc: 'Set up automated marketing campaigns with lead scoring and nurturing workflows.', 
    level: 'Intermediate', 
    icon: '📧',
    technologies: ['Marketing Cloud', 'Journey Builder', 'AMPscript'],
    duration: '6-8 hours',
    slug: '/clouds.html'
  },
  { 
    title: 'Data Migration Tool', 
    desc: 'Create a robust data migration solution with data validation and error handling.', 
    level: 'Intermediate', 
    icon: '🔄',
    technologies: ['Data Loader', 'Apex', 'Batch Processing'],
    duration: '5-7 hours',
    slug: '/admin-path/data-loader.html'
  }
]

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.level === filter)

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Hands-on Projects</h1>
          <p className="section-subtitle">
            Build real-world Salesforce applications to practice your skills. 
            Each project links to relevant learning paths where you can build similar functionality.
          </p>
        </div>

        {/* Level Filter */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          marginBottom: '48px' 
        }}>
          {levels.map((level, i) => (
            <button 
              key={i}
              className={`btn ${filter === level ? 'btn-primary' : 'btn-secondary'} btn-sm`}
              style={{ borderRadius: 'var(--radius-full)' }}
              onClick={() => setFilter(level)}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="cards-grid">
          {filteredProjects.map((project, i) => (
            <div className="path-card" key={i}>
              <div className="path-card-header">
                <span className="path-card-icon">{project.icon}</span>
                <h3 className="path-card-title">{project.title}</h3>
              </div>
              <p className="card-desc">{project.desc}</p>
              
              <div style={{ marginTop: '16px', marginBottom: '16px' }}>
                <div className="project-tags">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <span className="badge">{project.level}</span>
                <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
                  {project.duration}
                </span>
              </div>
              
              <Link to={project.slug} className="card-link">
                Start Project →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{ 
          marginTop: '64px', 
          textAlign: 'center',
          padding: '48px',
          background: 'linear-gradient(135deg, var(--color-brand-light) 0%, var(--color-background) 100%)',
          borderRadius: 'var(--radius-xl)'
        }}>
          <h2 style={{ marginBottom: '16px', fontSize: '28px' }}>Ready to Build?</h2>
          <p style={{ marginBottom: '24px', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 24px' }}>
            Choose a project that matches your skill level and start building real-world Salesforce applications today.
          </p>
          <Link to="/admin-path.html" className="btn btn-primary btn-lg">
            Start Learning →
          </Link>
        </div>
      </div>
    </section>
  )
}