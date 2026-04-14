import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function WhoID() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Who ID' }]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What is Who ID in Salesforce</h1>
            <p className="lesson-intro">Understanding the Who ID - the identifier for people-related records in Salesforce activities.</p>

            <section>
              <h2>What is Who ID</h2>
              <p>Who ID specifically refers to a person, such as a Lead or Contact. It's used to identify "who" a task or event is related to.</p>
            </section>

            <section>
              <h2>Where to Use Who ID</h2>
              <ul>
                <li>Tasks</li>
                <li>Events</li>
                <li>calendar items</li>
              </ul>
            </section>

            <section>
              <h2>Common Uses</h2>
              <p>Who ID links activities to the person involved, enabling tracking who performed or received communications.</p>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-what-id-salesforce.html">Learn about What ID</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}