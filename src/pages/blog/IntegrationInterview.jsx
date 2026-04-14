import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function IntegrationInterview() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Integration Interview' }]} />
          <article className="lesson-content">
            <span className="blog-category">Interview</span>
            <h1>Salesforce Integration Interview Questions</h1>
            <p className="lesson-intro">Top integration interview questions and answers for Salesforce developers.</p>

            <section>
              <h2>API Types</h2>
              <ul>
                <li><strong>REST API</strong> - Lightweight, JSON</li>
                <li><strong>SOAP API</strong> - Enterprise, XML</li>
                <li><strong>Bulk API</strong> - Large data sets</li>
                <li><strong>Streaming API</strong> - Real-time</li>
              </ul>
            </section>

            <section>
              <h2>Common Questions</h2>
              <h3>Q: What is OAuth?</h3>
              <p>OAuth is an authorization framework enabling third-party access without sharing passwords.</p>
              
              <h3>Q: Difference between callout and inbound?</h3>
              <p>Callout sends data out; inbound receives data.</p>
              
              <h3>Q: What is WSDL?</h3>
              <p>Web Services Description Language - defines service operations.</p>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/salesforce-lightning-interview-questions.html">Learn Lightning Interview Questions</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}