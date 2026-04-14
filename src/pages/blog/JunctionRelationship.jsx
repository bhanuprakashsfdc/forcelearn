import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function JunctionRelationship() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Junction Relationship' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>Junction Relationship in Salesforce</h1>
            <p className="lesson-intro">
              A Junction Relationship is a special type of relationship in Salesforce designed to handle many-to-many relationships using a junction object.
            </p>

            <section>
              <h2>Understanding Junction Relationships</h2>
              <p>A junction object connects two objects through master-detail relationships, enabling many-to-many data relationships.</p>
            </section>

            <section>
              <h2>Why Use Junction Objects</h2>
              <p>Junction objects are invaluable when business processes require complex relationships that cannot be handled by simple one-to-one or one-to-many connections.</p>
            </section>

            <section>
              <h2>Practical Examples</h2>
              <ul>
                <li>Students and Courses (Enrollment)</li>
                <li>Projects and Resources (ProjectAssignment)</li>
                <li>Doctors and Patients (Appointment)</li>
              </ul>
            </section>

            <section>
              <h2>Creating Junction Object</h2>
              <ol>
                <li>Create a custom object</li>
                <li>Create first Master-Detail to Object A</li>
                <li>Create second Master-Detail to Object B</li>
                <li>Add any additional fields</li>
                <li>Save</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/dependent-picklist-in-salesforce.html">Learn about Dependent Picklist</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}