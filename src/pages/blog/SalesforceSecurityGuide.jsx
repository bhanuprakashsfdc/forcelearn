import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function SalesforceSecurityGuide() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Salesforce Security Guide' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Admin</span>
            <h1>Salesforce Security: Protecting Your Org</h1>
            <p className="lesson-intro">
              Essential security practices every Salesforce administrator needs to implement to keep data safe.
            </p>

            <section>
              <h2>Why Salesforce Security Matters</h2>
              <p>Salesforce holds sensitive customer data. A security breach can lead to:</p>
              <ul>
                <li>Data loss or exposure</li>
                <li>Compliance violations (GDPR, HIPAA, SOC2)</li>
                <li>Financial penalties</li>
                <li>Reputation damage</li>
                <li>Loss of customer trust</li>
              </ul>
            </section>

            <section>
              <h2>1. User Authentication</h2>
              <p>The first line of defense - controlling who can access your org.</p>

              <h3>Strong Password Policies</h3>
              <p>Configure in: <strong>Setup → User Management Settings → Password Policies</strong></p>
              <ul>
                <li>Minimum password length (8+ characters)</li>
                <li>Require mix of characters</li>
                <li>Password expiration policies</li>
                <li>Limit failed login attempts</li>
              </ul>

              <h3>Multi-Factor Authentication (MFA)</h3>
              <div className="info-box">
                <h4>🔒 Security Best Practice</h4>
                <p>Enable MFA for all users! This is the single most effective security measure you can implement.</p>
              </div>

              <p>Configure in: <strong>Setup → Identity Verification</strong> or use Salesforce Shield.</p>
            </section>

            <section>
              <h2>2. Profile-Based Access Control</h2>
              <p>Profiles determine what users can see and do in Salesforce.</p>

              <h3>Standard Profiles</h3>
              <ul>
                <li><strong>System Administrator</strong> - Full access</li>
                <li><strong>Standard User</strong> - Read/write own records</li>
                <li><strong>Customer Portal User</strong> - Limited portal access</li>
                <li><strong>Marketing User</strong> - Marketing-only access</li>
              </ul>

              <h3>Best Practices</h3>
              <ul>
                <li>Create custom profiles for specific roles</li>
                <li>Assign minimum necessary permissions</li>
                <li>Regularly audit profile assignments</li>
                <li>Remove inactive users promptly</li>
              </ul>
            </section>

            <section>
              <h2>3. Permission Sets</h2>
              <p>Permission sets grant additional permissions without creating new profiles.</p>

              <p><strong>When to use Permission Sets:</strong></p>
              <ul>
                <li>Grant extra permissions to specific users</li>
                <li>Enable features temporarily</li>
                <li>Avoid profile proliferation</li>
              </ul>

              <p>Configure in: <strong>Setup → Permission Sets</strong></p>
            </section>

            <section>
              <h2>4. Role Hierarchy</h2>
              <p>The role hierarchy controls data visibility based on reporting structure.</p>

              <h3>How It Works</h3>
              <ul>
                <li>Users can see records owned by subordinates</li>
                <li>Typically mirrors organizational structure</li>
                <li>CEO at top, individual contributors at bottom</li>
              </ul>

              <div className="info-box">
                <h4>💡 Tip</h4>
                <p>Don't overcomplicate the role hierarchy. It primarily affects data visibility, not functionality.</p>
              </div>
            </section>

            <section>
              <h2>5. Sharing Rules</h2>
              <p>Sharing rules grant additional access beyond role hierarchy.</p>

              <h3>Types of Sharing Rules</h3>
              <ul>
                <li><strong>Owner-based</strong> - Share records owned by certain users</li>
                <li><strong>Criteria-based</strong> - Share records matching certain criteria</li>
              </ul>

              <h3>Example Use Case</h3>
              <p>Share all Accounts in "Technology" industry with the "Sales Team" group.</p>
            </section>

            <section>
              <h2>6. Field-Level Security</h2>
              <p>Control visibility of specific fields within an object.</p>

              <h3>Field Access Levels</h3>
              <ul>
                <li><strong>Visible</strong> - User can see the field</li>
                <li><strong>Read-Only</strong> - User can see but not edit</li>
                <li><strong>Hidden</strong> - User cannot see the field</li>
              </ul>

              <p>Configure in: <strong>Setup → Field-Level Security</strong> on each field.</p>
            </section>

            <section>
              <h2>7. Data Classification</h2>
              <p>Identify and protect sensitive data.</p>

              <h3>Types of Sensitive Data</h3>
              <ul>
                <li><strong>PII</strong> - Personally Identifiable Information (SSN, email)</li>
                <li><strong>PCI</strong> - Payment Card Information</li>
                <li><strong>PHI</strong> - Protected Health Information</li>
                <li><strong>Confidential</strong> - Business-sensitive data</li>
              </ul>

              <h3>Actions to Take</h3>
              <ol>
                <li>Identify sensitive fields using Salesforce Shield or Field Audit Trail</li>
                <li>Use Field-Level Security to restrict access</li>
                <li>Implement Data Loss Prevention policies</li>
                <li>Enable Event Monitoring to track access</li>
              </ol>
            </section>

            <section>
              <h2>8. Security Checklist</h2>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Security Measure</th>
                      <th>Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Enable MFA for all users</td>
                      <td>Critical</td>
                    </tr>
                    <tr>
                      <td>Review and clean up inactive users</td>
                      <td>Critical</td>
                    </tr>
                    <tr>
                      <td>Implement strong password policies</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Set up Field-Level Security</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Configure sharing rules appropriately</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Enable Login IP ranges</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Set up Session Settings</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Review OAuth connected apps</td>
                      <td>Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Summary</h2>
              <p>Salesforce security is layered - implement multiple controls for defense in depth.</p>
              <ul>
                <li>Start with MFA and user management</li>
                <li>Use profiles and permission sets for access control</li>
                <li>Implement sharing rules and field-level security</li>
                <li>Regularly audit your security settings</li>
              </ul>
              <p>Continue learning: <Link to="/admin-path/sharing-settings.html">Sharing Settings</Link></p>
            </section>
          </article>
        </div>
      </main>
    </div>
  )
}
