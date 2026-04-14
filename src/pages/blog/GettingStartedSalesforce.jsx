import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function GettingStartedSalesforce() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Getting Started with Salesforce' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Beginner</span>
            <h1>Getting Started with Salesforce: A Complete Guide</h1>
            <p className="lesson-intro">
              Everything you need to know to start your Salesforce journey, from signing up to your first configuration.
            </p>

            <section>
              <h2>What is Salesforce?</h2>
              <p>Salesforce is the world's #1 Customer Relationship Management (CRM) platform. It helps businesses manage customer data, track interactions, and automate sales, service, and marketing processes.</p>
              
              <p>Founded in 1999, Salesforce pioneered the concept of cloud-based CRM and has grown into a comprehensive platform serving millions of users worldwide.</p>
            </section>

            <section>
              <h2>Why Learn Salesforce?</h2>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Benefit</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>High Demand</strong></td>
                      <td>Salesforce administrators and developers are in high demand globally</td>
                    </tr>
                    <tr>
                      <td><strong>Career Growth</strong></td>
                      <td>Clear certification paths from admin to architect</td>
                    </tr>
                    <tr>
                      <td><strong>Good Salary</strong></td>
                      <td>Salesforce professionals command competitive salaries</td>
                    </tr>
                    <tr>
                      <td><strong>Future-Proof</strong></td>
                      <td>Cloud CRM skills remain relevant as businesses digitize</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Getting Your Free Salesforce Account</h2>
              <p>You can start learning Salesforce for free using Salesforce Developer Edition (DE):</p>
              
              <ol>
                <li>Visit <strong>developer.salesforce.com</strong></li>
                <li>Click <strong>Sign Up</strong></li>
                <li>Enter your email and information</li>
                <li>Verify your email</li>
                <li>Login to Salesforce at <strong>login.salesforce.com</strong></li>
              </ol>

              <div className="info-box">
                <h4>💡 Pro Tip</h4>
                <p>Sign up for a Developer Edition org - it's free forever and gives you access to most Salesforce features for learning!</p>
              </div>
            </section>

            <section>
              <h2>Understanding the Salesforce Interface</h2>
              <p>When you first login, you'll see the Salesforce Lightning Experience. Here are the key areas:</p>

              <h3>1. App Launcher</h3>
              <p>The nine-dot icon in the top-left gives you access to all apps in your org. Start with the "Sales" app for basic CRM functionality.</p>

              <h3>2. Navigation Bar</h3>
              <p>Tabs like Home, Accounts, Contacts, Opportunities, and more help you navigate between different areas of Salesforce.</p>

              <h3>3. Utility Bar</h3>
              <p>The bottom bar provides quick access to tools like Notes, Calendar, and History.</p>

              <h3>4. Setup Menu</h3>
              <p>The gear icon in the top-right opens Setup, where you configure your org's settings, objects, and security.</p>
            </section>

            <section>
              <h2>Core Salesforce Objects</h2>
              <p>Objects are database tables that store your data. Salesforce has two types:</p>

              <h3>Standard Objects</h3>
              <p>Built-in objects that come with Salesforce:</p>
              <ul>
                <li><strong>Accounts</strong> - Companies you do business with</li>
                <li><strong>Contacts</strong> - People at those companies</li>
                <li><strong>Leads</strong> - Prospective customers</li>
                <li><strong>Opportunities</strong> - Sales deals in progress</li>
                <li><strong>Cases</strong> - Customer service requests</li>
                <li><strong>Tasks</strong> - To-do items</li>
              </ul>

              <h3>Custom Objects</h3>
              <p>Objects you create for your specific business needs. For example, a real estate company might create a "Property" object.</p>
            </section>

            <section>
              <h2>Your First Salesforce Configuration</h2>
              <p>Let's create your first custom object - a simple "Project" tracker:</p>

              <ol>
                <li>Click the <strong>gear icon</strong> → <strong>Setup</strong></li>
                <li>In the Quick Find box, type <strong>Object Manager</strong></li>
                <li>Click <strong>Object Manager</strong></li>
                <li>Click <strong>Create</strong> → <strong>Custom Object</strong></li>
                <li>Enter label: <strong>Project</strong></li>
                <li>Enter plural label: <strong>Projects</strong></li>
                <li>Check <strong>Launch New Custom Tab Wizard</strong> after saving</li>
                <li>Click <strong>Save</strong></li>
              </ol>

              <div className="info-box">
                <h4>🎯 Practice Exercise</h4>
                <p>Create a custom object for something relevant to you - maybe a "Training" tracker or "Equipment" inventory!</p>
              </div>
            </section>

            <section>
              <h2>Next Steps</h2>
              <p>Now that you have your Salesforce org and understand the basics, continue your journey:</p>
              
              <ul>
                <li><Link to="/admin-path.html">Start the Admin Path</Link> - Learn configuration</li>
                <li><Link to="/roadmap.html">View the Roadmap</Link> - Plan your learning</li>
                <li>Earn your <strong>Salesforce Administrator</strong> certification</li>
              </ul>

              <p>Salesforce offers a comprehensive platform with endless learning opportunities. Start with the fundamentals, practice in your free Developer Edition org, and progressively tackle more advanced topics.</p>
            </section>
          </article>
        </div>
      </main>
    </div>
  )
}
