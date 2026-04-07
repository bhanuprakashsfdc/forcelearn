import { Link } from 'react-router-dom'
import ProgressBar from '../../components/content/ProgressBar'

const architectModules = [
  {
    id: 1,
    title: '1. System Design',
    description: 'Domain modeling and architecture patterns',
    lessons: [
      { id: 'arch-1-1', title: 'Architecture Overview', slug: '/architect-path/architecture-overview.html' },
      { id: 'arch-1-2', title: 'Domain Modeling', slug: '/architect-path/domain-modeling.html' },
      { id: 'arch-1-3', title: 'Design Patterns', slug: '/architect-path/design-patterns.html' },
    ]
  },
  {
    id: 2,
    title: '2. Data Architecture',
    description: 'Schema design and storage optimization',
    lessons: [
      { id: 'arch-2-1', title: 'Schema Design', slug: '/architect-path/schema-design.html' },
      { id: 'arch-2-2', title: 'Storage Optimization', slug: '/architect-path/storage-optimization.html' },
      { id: 'arch-2-3', title: 'Big Objects', slug: '/architect-path/big-objects.html' },
    ]
  },
  {
    id: 3,
    title: '3. Integration Patterns',
    description: 'MuleSoft and API design',
    lessons: [
      { id: 'arch-3-1', title: 'MuleSoft Basics', slug: '/architect-path/mulesoft-basics.html' },
      { id: 'arch-3-2', title: 'API Design', slug: '/architect-path/api-design.html' },
      { id: 'arch-3-3', title: 'Event-Driven Architecture', slug: '/architect-path/event-driven.html' },
    ]
  },
  {
    id: 4,
    title: '4. Security Architecture',
    description: 'Identity management and data protection',
    lessons: [
      { id: 'arch-4-1', title: 'Identity Management', slug: '/architect-path/identity-management.html' },
      { id: 'arch-4-2', title: 'SSO Implementation', slug: '/architect-path/sso-implementation.html' },
      { id: 'arch-4-3', title: 'Data Protection', slug: '/architect-path/data-protection.html' },
    ]
  }
]

export default function ArchitectPath() {
  const totalLessons = architectModules.reduce((sum, m) => sum + m.lessons.length, 0)

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Salesforce Architect Path</h1>
          <p className="section-subtitle">
            Design enterprise solutions, master integration patterns, and prepare 
            for Salesforce Architect certifications.
          </p>
        </div>

        <ProgressBar completed={0} total={totalLessons} />

        <div className="path-modules">
          {architectModules.map((module) => (
            <div className="path-module" key={module.id}>
              <div className="path-module-header">
                <h2 className="path-module-title">{module.title}</h2>
                <p className="path-module-desc">{module.description}</p>
              </div>
              <ul className="path-module-lessons">
                {module.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <Link to={lesson.slug} className="path-lesson-link">
                      <span className="lesson-icon">🏛️</span>
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="path-cta">
          <p>Ready to design enterprise solutions?</p>
          <Link to="/architect-path/architecture-overview.html" className="btn btn-primary">
            Start First Lesson →
          </Link>
        </div>
      </div>
    </section>
  )
}