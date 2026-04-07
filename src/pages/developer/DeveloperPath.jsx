import { Link } from 'react-router-dom'
import ProgressBar from '../../components/content/ProgressBar'

const developerModules = [
  {
    id: 1,
    title: '1. Apex Fundamentals',
    description: 'Learn Apex programming basics, syntax, and classes',
    lessons: [
      { id: 'dev-1-1', title: 'Getting Started with Apex', slug: '/developer-path/apex-introduction.html' },
      { id: 'dev-1-2', title: 'Data Types & Variables', slug: '/developer-path/data-types.html' },
      { id: 'dev-1-3', title: 'Classes & Methods', slug: '/developer-path/classes-methods.html' },
      { id: 'dev-1-4', title: 'Collections', slug: '/developer-path/collections.html' },
    ]
  },
  {
    id: 2,
    title: '2. SOQL & SOSL',
    description: 'Master query languages for Salesforce',
    lessons: [
      { id: 'dev-2-1', title: 'SOQL Basics', slug: '/developer-path/soql-basics.html' },
      { id: 'dev-2-2', title: 'Relationship Queries', slug: '/developer-path/relationship-queries.html' },
      { id: 'dev-2-3', title: 'SOSL Search', slug: '/developer-path/sosl-search.html' },
    ]
  },
  {
    id: 3,
    title: '3. Triggers',
    description: 'Apex triggers and automation logic',
    lessons: [
      { id: 'dev-3-1', title: 'Trigger Basics', slug: '/developer-path/trigger-basics.html' },
      { id: 'dev-3-2', title: 'Trigger Context Variables', slug: '/developer-path/context-variables.html' },
      { id: 'dev-3-3', title: 'Trigger Best Practices', slug: '/developer-path/trigger-best-practices.html' },
    ]
  },
  {
    id: 4,
    title: '4. Lightning Web Components',
    description: 'Build modern Salesforce UI with LWC',
    lessons: [
      { id: 'dev-4-1', title: 'LWC Overview', slug: '/developer-path/lwc-overview.html' },
      { id: 'dev-4-2', title: 'HTML Templates', slug: '/developer-path/html-templates.html' },
      { id: 'dev-4-3', title: 'JavaScript Controller', slug: '/developer-path/js-controller.html' },
      { id: 'dev-4-4', title: 'Wire Service', slug: '/developer-path/wire-service.html' },
    ]
  },
  {
    id: 5,
    title: '5. Integration',
    description: 'APIs and integration patterns',
    lessons: [
      { id: 'dev-5-1', title: 'REST API', slug: '/developer-path/rest-api.html' },
      { id: 'dev-5-2', title: 'OAuth 2.0', slug: '/developer-path/oauth.html' },
      { id: 'dev-5-3', title: 'Webhooks', slug: '/developer-path/webhooks.html' },
    ]
  },
  {
    id: 6,
    title: '6. Testing',
    description: 'Unit tests and test best practices',
    lessons: [
      { id: 'dev-6-1', title: 'Unit Tests', slug: '/developer-path/unit-tests.html' },
      { id: 'dev-6-2', title: 'Test Data Factory', slug: '/developer-path/test-data-factory.html' },
    ]
  }
]

export default function DeveloperPath() {
  const totalLessons = developerModules.reduce((sum, m) => sum + m.lessons.length, 0)

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Salesforce Developer Path</h1>
          <p className="section-subtitle">
            Master Apex programming, Lightning Web Components, and integration. 
            Build custom applications on the Salesforce platform.
          </p>
        </div>

        <ProgressBar completed={0} total={totalLessons} />

        <div className="path-modules">
          {developerModules.map((module) => (
            <div key={module.id} className="path-module">
              <div className="path-module-header">
                <h2 className="path-module-title">{module.title}</h2>
                <p className="path-module-desc">{module.description}</p>
              </div>
              <ul className="path-module-lessons">
                {module.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <Link to={lesson.slug} className="path-lesson-link">
                      <span className="lesson-icon">💻</span>
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="path-cta">
          <p>Ready to start building?</p>
          <Link to="/developer-path/apex-introduction.html" className="btn btn-primary">
            Start First Lesson →
          </Link>
        </div>
      </div>
    </section>
  )
}