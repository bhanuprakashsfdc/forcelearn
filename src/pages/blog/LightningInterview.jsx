import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function LightningInterview() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Lightning Interview' }]} />
          <article className="lesson-content">
            <span className="blog-category">Interview</span>
            <h1>Salesforce Lightning Interview Questions</h1>
            <p className="lesson-intro">Top Salesforce Lightning interview questions and answers.</p>

            <section>
              <h2>Basic Questions</h2>
              <h3>Q: What is Lightning Component Framework?</h3>
              <p>A: A UI framework for building dynamic web apps for mobile and desktop.</p>

              <h3>Q: Difference between Aura and LWC?</h3>
              <p>A: Aura is older (component-based), LWC is newer (standards-based, closer to web standards).</p>
            </section>

            <section>
              <h2>LWC Questions</h2>
              <h3>Q: What is @track decorator?</h3>
              <p>A: Makes a property reactive in the template.</p>

              <h3>Q: What is @wire?</h3>
              <p>A: Adapts Salesforce data for use in components.</p>

              <h3>Q: How to call Apex from LWC?</h3>
              <p>A: Using @wire with imperative method.</p>
            </section>

            <section>
              <h2>Events Questions</h2>
              <h3>Q: Standard vs Custom Events?</h3>
              <p>A: Standard are built-in, custom are created by developer.</p>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/lwc-tutorial.html">Learn LWC</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}