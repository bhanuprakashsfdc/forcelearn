import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function CertificationGuide() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Salesforce Certification Guide' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Career</span>
            <h1>Salesforce Certification Guide: Which One to Choose?</h1>
            <p className="lesson-intro">
              Navigate the Salesforce certification landscape and choose the right path for your career goals.
            </p>

            <section>
              <h2>Why Get Certified?</h2>
              <p>Salesforce certifications validate your skills and demonstrate your expertise to employers:</p>
              <ul>
                <li><strong>Industry Recognition</strong> - Certifications are recognized globally</li>
                <li><strong>Career Advancement</strong> - Certified professionals earn more</li>
                <li><strong>Skill Validation</strong> - Prove your abilities</li>
                <li><strong>Employer Confidence</strong> - Hiring managers trust certifications</li>
              </ul>
            </section>

            <section>
              <h2>Certification Paths</h2>
              <p>Salesforce offers three main certification tracks:</p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Track</th>
                      <th>Best For</th>
                      <th>First Certification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Admin</strong></td>
                      <td>Configuration, users, reports</td>
                      <td>Salesforce Administrator</td>
                    </tr>
                    <tr>
                      <td><strong>Developer</strong></td>
                      <td>Apex, LWC, integrations</td>
                      <td>Platform Developer I</td>
                    </tr>
                    <tr>
                      <td><strong>Architect</strong></td>
                      <td>System design, enterprise</td>
                      <td>Application Architect</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Top Certifications</h2>

              <h3>1. Salesforce Administrator (ADM-201)</h3>
              <p><strong>Level:</strong> Beginner | <strong>Cost:</strong> $200</p>
              <p>The foundational certification. Tests knowledge of Salesforce setup, configuration, and management.</p>
              <ul>
                <li>Organization setup</li>
                <li>User management</li>
                <li>Security and access</li>
                <li>Objects and fields</li>
                <li>Reports and dashboards</li>
              </ul>

              <h3>2. Platform App Builder (CRT-101)</h3>
              <p><strong>Level:</strong> Intermediate | <strong>Cost:</strong> $200</p>
              <p>For those who build declarative solutions. Tests ability to design and build apps.</p>

              <h3>3. Platform Developer I (PDI)</h3>
              <p><strong>Level:</strong> Intermediate | <strong>Cost:</strong> $200</p>
              <p>For developers who write Apex and Lightning components. Tests programming skills.</p>

              <h3>4. Platform Developer II (PDII)</h3>
              <p><strong>Level:</strong> Advanced | <strong>Cost:</strong> $400</p>
              <p>Advanced development skills including asynchronous Apex and integration.</p>
            </section>

            <section>
              <h2>How to Prepare</h2>
              <ol>
                <li><strong>Use ForceLearn</strong> - Follow our free learning paths</li>
                <li><strong>Trailhead</strong> - Official Salesforce training (free)</li>
                <li><strong>Hands-on Practice</strong> - Use a Developer Edition org</li>
                <li><strong>Take Practice Tests</strong> - Know the exam format</li>
                <li><strong>Join Community</strong> - Salesforce Success Community</li>
              </ol>
            </section>

            <section>
              <h2>Exam Tips</h2>
              <div className="info-box">
                <h4>💡 Exam Strategy</h4>
                <ul>
                  <li>Read questions carefully - look for keywords like "NOT", "EXCEPT"</li>
                  <li>Eliminate wrong answers first</li>
                  <li>Manage time - don't spend too long on one question</li>
                  <li>Trust your first instinct</li>
                </ul>
              </div>
            </section>

            <section>
              <h2>Summary</h2>
              <p>Choose your certification based on your career goals:</p>
              <ul>
                <li>Start with <strong>Salesforce Administrator</strong> for admin track</li>
                <li>Choose <strong>Platform Developer I</strong> for developer track</li>
                <li>Build experience before pursuing architect certifications</li>
              </ul>
              <p>Start learning: <Link to="/admin-path.html">Admin Path</Link> | <Link to="/developer-path.html">Developer Path</Link></p>
            </section>
          </article>
        </div>
      </main>
    </div>
  )
}
