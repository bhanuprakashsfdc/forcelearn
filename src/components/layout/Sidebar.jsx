import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Sidebar({ modules = [], currentSlug = '' }) {
  const [expandedModules, setExpandedModules] = useState(
    modules.map(m => m.id)
  )

  const location = useLocation()

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => 
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    )
  }

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {modules.map(module => (
          <div key={module.id} className="sidebar-module">
            <button 
              className="sidebar-module-title"
              onClick={() => toggleModule(module.id)}
            >
              <span className="module-icon">
                {expandedModules.includes(module.id) ? '▼' : '▶'}
              </span>
              {module.title}
            </button>
            
            {expandedModules.includes(module.id) && (
              <ul className="sidebar-lessons">
                {module.lessons?.map(lesson => (
                  <li key={lesson.id}>
                    <Link 
                      to={lesson.slug}
                      className={`sidebar-lesson-link ${
                        location.pathname === lesson.slug ? 'active' : ''
                      }`}
                    >
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}