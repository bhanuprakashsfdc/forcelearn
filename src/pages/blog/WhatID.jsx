import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function WhatID() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'What ID' }]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is What ID in Salesforce</h1>
            <p className="lesson-intro">Understanding the What ID - the identifier for object-related records in Salesforce activities.</p>

            <section>
              <h2>What is What ID</h2>
              <p>What ID refers to objects like Accounts, Opportunities, or Custom objects. It's used to identify "what" record an activity is related to.</p>
            </section>

            <section>
              <h2>Where to Use What ID</h2>
              <ul>
                <li>Tasks linked to records</li>
                <li>Events linked to records</li>
                <li>Activity history</li>
              </ul>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/difference-between-freeze-deactivate-salesforce.html">Learn about Freeze vs Deactivate</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}