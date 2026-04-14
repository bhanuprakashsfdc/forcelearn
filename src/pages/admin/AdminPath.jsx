import { Link } from 'react-router-dom'
import ProgressBar from '../../components/content/ProgressBar'
import useProgress from '../../hooks/useProgress'

const adminModules = [
  {
    id: 1,
    title: '1. Salesforce Basics',
    description: 'Learn CRM fundamentals and platform navigation',
    lessons: [
      { id: 'admin-1-1', title: 'What is Salesforce?', slug: '/admin-path/salesforce-basics.html' },
      { id: 'admin-1-2', title: 'CRM Concepts', slug: '/admin-path/crm-concepts.html' },
      { id: 'admin-1-3', title: 'Navigation & Setup', slug: '/admin-path/navigation-setup.html' },
    ]
  },
  {
    id: 2,
    title: '2. Objects & Fields',
    description: 'Master standard and custom objects, field types',
    lessons: [
      { id: 'admin-2-1', title: 'Standard Objects', slug: '/admin-path/standard-objects.html' },
      { id: 'admin-2-2', title: 'Custom Objects', slug: '/admin-path/custom-objects.html' },
      { id: 'admin-2-3', title: 'Field Types', slug: '/admin-path/field-types.html' },
      { id: 'admin-2-4', title: 'Relationships', slug: '/admin-path/relationships.html' },
    ]
  },
  {
    id: 3,
    title: '3. Data Management',
    description: 'Import, export, and validate data',
    lessons: [
      { id: 'admin-3-1', title: 'Import/Export', slug: '/admin-path/import-export.html' },
      { id: 'admin-3-2', title: 'Data Loader', slug: '/admin-path/data-loader.html' },
      { id: 'admin-3-3', title: 'Validation Rules', slug: '/admin-path/validation-rules.html' },
    ]
  },
  {
    id: 4,
    title: '4. Automation',
    description: 'Flow Builder, Process Builder, and approvals',
    lessons: [
      { id: 'admin-4-1', title: 'Flow Builder', slug: '/admin-path/flow-builder.html' },
      { id: 'admin-4-2', title: 'Process Builder', slug: '/admin-path/process-builder.html' },
      { id: 'admin-4-3', title: 'Approval Processes', slug: '/admin-path/approval-processes.html' },
    ]
  },
  {
    id: 5,
    title: '5. Security',
    description: 'Profiles, permissions, and sharing settings',
    lessons: [
      { id: 'admin-5-1', title: 'Sharing Settings', slug: '/admin-path/sharing-settings.html' },
      { id: 'admin-5-2', title: 'Profiles & Permissions', slug: '/admin-path/profiles-permissions.html' },
      { id: 'admin-5-3', title: 'Field-Level Security', slug: '/admin-path/field-level-security.html' },
    ]
  },
  {
    id: 6,
    title: '6. Reporting',
    description: 'Reports, dashboards, and analytics',
    lessons: [
      { id: 'admin-6-1', title: 'Report Types', slug: '/admin-path/report-types.html' },
      { id: 'admin-6-2', title: 'Dashboards', slug: '/admin-path/dashboards.html' },
      { id: 'admin-6-3', title: 'Analytics', slug: '/admin-path/analytics.html' },
    ]
  }
]

export default function AdminPath() {
  const totalLessons = adminModules.reduce((sum, m) => sum + m.lessons.length, 0)
  const { getPathProgress, isLessonCompleted, toggleLesson, completeLesson } = useProgress()
  const pathProgress = getPathProgress('admin', totalLessons)

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Salesforce Admin Path</h1>
          <p className="section-subtitle">
            Master Salesforce administration from basics to certification. 
            This path covers everything you need to become a Salesforce Administrator.
          </p>
        </div>

        <ProgressBar completed={pathProgress.completed} total={pathProgress.total} />

        <div className="path-modules">
          {adminModules.map((module) => (
            <div key={module.id} className="path-module">
              <div className="path-module-header">
                <h2 className="path-module-title">{module.title}</h2>
                <p className="path-module-desc">{module.description}</p>
              </div>
              <ul className="path-module-lessons">
                {module.lessons.map((lesson) => {
                  const isCompleted = isLessonCompleted(lesson.slug)
                  return (
                    <li key={lesson.id}>
                      <Link to={lesson.slug} className="path-lesson-link">
                        <span className="lesson-icon">{isCompleted ? '✅' : '📖'}</span>
                        <span style={{ flex: 1 }}>{lesson.title}</span>
                        <input
                          type="checkbox"
                          checked={isCompleted}
                          onChange={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            toggleLesson(lesson.slug, 'admin')
                          }}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                          }}
                          style={{
                            marginLeft: '8px',
                            cursor: 'pointer',
                            width: '18px',
                            height: '18px',
                            accentColor: 'var(--color-brand)'
                          }}
                          aria-label={`Mark ${lesson.title} as ${isCompleted ? 'incomplete' : 'complete'}`}
                        />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="path-cta">
          <p>Ready to start your Salesforce journey?</p>
          <Link to="/admin-path/salesforce-basics.html" className="btn btn-primary">
            Start First Lesson →
          </Link>
        </div>
      </div>
    </section>
  )
}