import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'
import CodeBlock from '../../components/content/CodeBlock'

const lessonSidebarModules = [
  {
    id: 1,
    title: '1. Salesforce Basics',
    lessons: [
      { id: 'admin-1-1', title: 'What is Salesforce?', slug: '/admin-path/salesforce-basics.html' },
      { id: 'admin-1-2', title: 'CRM Concepts', slug: '/admin-path/crm-concepts.html' },
      { id: 'admin-1-3', title: 'Navigation & Setup', slug: '/admin-path/navigation-setup.html' },
    ]
  },
  {
    id: 2,
    title: '2. Objects & Fields',
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
    lessons: [
      { id: 'admin-3-1', title: 'Import/Export', slug: '/admin-path/import-export.html' },
      { id: 'admin-3-2', title: 'Data Loader', slug: '/admin-path/data-loader.html' },
      { id: 'admin-3-3', title: 'Validation Rules', slug: '/admin-path/validation-rules.html' },
    ]
  }
]

export default function LessonPage() {
  const breadcrumbItems = [
    { to: '/', label: 'Home' },
    { to: '/admin-path.html', label: 'Admin Path' },
    { label: 'What is Salesforce?' }
  ]

  return (
    <div className="lesson-page-layout">
      <Sidebar modules={lessonSidebarModules} currentSlug="/admin-path/salesforce-basics.html" />
      
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          
          <article className="lesson-content">
            <h1>What is Salesforce? A Comprehensive Introduction</h1>
            <p className="lesson-intro">
              Welcome to your Salesforce journey. This comprehensive lesson will take you from absolute fundamentals 
              to understanding why Salesforce has become the world's #1 CRM platform, powering over 150,000+ businesses worldwide.
            </p>

            <section>
              <h2>1. The Genesis and Evolution of Salesforce</h2>
              <p>
                In 1999, Marc Benioff, a former Oracle executive, had a revolutionary idea: what if enterprise software 
                could be delivered as a service over the internet? Instead of customers purchasing expensive 
                hardware, installing complex software, and maintaining their own servers, what if they could simply 
                log in and use the software?
              </p>
              <p>
                This vision, termed "cloud computing," transformed the enterprise software industry. 
                Salesforce began as a simple CRM tool but has evolved into the <strong>Salesforce Economy</strong>— 
                a complete ecosystem valued at over $300 billion, supporting millions of jobs globally.
              </p>
              <div className="info-box">
                <h4>💡 Did You Know?</h4>
                <p>Salesforce coined the phrase "The End of Software" in 2000, predicting the shift from 
                installed software to cloud-based services. This vision is now reality.</p>
              </div>
            </section>

            <section>
              <h2>2. Understanding Cloud Computing</h2>
              <p>
                Before diving deeper into Salesforce, it's essential to understand what makes it unique—the cloud 
                computing model.
              </p>
              
              <h3>2.1 Traditional Software vs. Cloud</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Traditional On-Premise</th>
                      <th>Cloud (Salesforce)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Upfront Cost</td>
                      <td>High (Hardware + Licenses)</td>
                      <td>Low (Subscription)</td>
                    </tr>
                    <tr>
                      <td>Implementation Time</td>
                      <td>Months to Years</td>
                      <td>Days to Weeks</td>
                    </tr>
                    <tr>
                      <td>Maintenance</td>
                      <td>In-house IT Team</td>
                      <td>Handled by Vendor</td>
                    </tr>
                    <tr>
                      <td>Scalability</td>
                      <td>Requires New Hardware</td>
                      <td>Instant Elastic Scale</td>
                    </tr>
                    <tr>
                      <td>Accessibility</td>
                      <td>Office Only</td>
                      <td>Anywhere (Internet)</td>
                    </tr>
                    <tr>
                      <td>Security</td>
                      <td>Self-managed</td>
                      <td>Enterprise-grade (SOC, ISO)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2.2 Multi-Tenant Architecture</h3>
              <p>
                One of Salesforce's most powerful concepts is <strong>multi-tenancy</strong>. Unlike traditional 
                software where each company has their own dedicated server, Salesforce's multi-tenant architecture 
                allows thousands of companies to share the same infrastructure while keeping their data completely 
                isolated and secure.
              </p>
              <ul>
                <li><strong>Shared Infrastructure</strong> - One set of servers serves many customers</li>
                <li><strong>Isolated Data</strong> - Each organization's data is strictly separated</li>
                <li><strong>Automatic Updates</strong> - All customers receive updates simultaneously</li>
                <li><strong>Resource Optimization</strong> - Efficient use of computing resources</li>
              </ul>
            </section>

            <section>
              <h2>3. The Salesforce Platform Architecture</h2>
              <p>
                Salesforce operates on a metadata-driven architecture. Every Screen, Field, and Configuration 
                is stored as metadata (data about data), not hard-coded. This is what enables:
              </p>
              <ul>
                <li>Point-and-click configuration without code</li>
                <li>Easy customization to each organization's needs</li>
                <li>Automatic platform updates without breaking customizations</li>
                <li>Package-based deployment between environments</li>
              </ul>

              <h3>3.1 The Metadata API</h3>
              <p>
                Every configuration in Salesforce can be retrieved, modified, and deployed programmatically. This 
                makes Salesforce ideal for:
              </p>
              <ul>
                <li><strong>Version Control</strong> - Store configuration in Git</li>
                <li><strong>CI/CD Pipelines</strong> - Automate deployments</li>
                <li><strong>Sandbox Environments</strong> - Test safely before production</li>
                <li><strong>Package Distribution</strong> - AppExchange products</li>
              </ul>
            </section>

            <section>
              <h2>4. Salesforce Clouds: The Complete Suite</h2>
              <p>
                Salesforce offers specialized "Clouds" for different business functions. Understanding these 
                helps you choose the right solutions:
              </p>

              <h3>4.1 Sales Cloud</h3>
              <p>The foundation of Salesforce—everything sales-related:</p>
              <ul>
                <li><strong>Lead Management</strong> - Track potential customers</li>
                <li><strong>Opportunity Management</strong> - Pipeline and deal tracking</li>
                <li><strong>Account Management</strong> - Company/customer records</li>
                <li><strong>Contact Management</strong> - Individual relationships</li>
                <li><strong>Forecasting</strong> - Revenue predictions</li>
                <li><strong>Territory Management</strong> - Geographic/account assignment</li>
              </ul>

              <h3>4.2 Service Cloud</h3>
              <p>Customer support and service excellence:</p>
              <ul>
                <li><strong>Case Management</strong> - Track customer issues</li>
                <li><strong>Service Console</strong> - Unified agent workspace</li>
                <li><strong>Knowledge Base</strong> - Articles and solutions</li>
                <li><strong>Omni-Channel</strong> - Intelligent routing</li>
                <li><strong>Field Service</strong> - Mobile workforce management</li>
                <li><strong>Customer Portal</strong> - Self-service support</li>
              </ul>

              <h3>4.3 Marketing Cloud</h3>
              <p>Customer engagement across channels:</p>
              <ul>
                <li><strong>Email Studio</strong> - Sophisticated email campaigns</li>
                <li><strong>Mobile Studio</strong> - SMS and push notifications</li>
                <li><strong>Advertising Studio</strong> - Ad platform integration</li>
                <li><strong>Journey Builder</strong> - Multi-channel journeys</li>
                <li><strong>Pardot</strong> - B2B marketing automation</li>
                <li><strong>Marketing Cloud Intelligence</strong> - Analytics and attribution</li>
              </ul>

              <h3>4.4 Commerce Cloud</h3>
              <p>E-commerce capabilities:</p>
              <ul>
                <li><strong>Product Catalog</strong> - Inventory management</li>
                <li><strong>Shopping Cart</strong> - Order management</li>
                <li><strong>Payment Processing</strong> - Integrated payments</li>
                <li><strong>Order Management</strong> - Fulfillment tracking</li>
                <li><strong>B2B Commerce</strong> - Business-to-business features</li>
              </ul>

              <h3>4.5 Experience Cloud</h3>
              <p> portals and communities:</p>
              <ul>
                <li><strong>Customer Portal</strong> - External customer access</li>
                <li><strong>Partner Community</strong> - Channel partner management</li>
                <li><strong>Lightning Bolts</strong> - Pre-built templates</li>
                <li><strong>CMS</strong> - Content management</li>
                <li><strong>Digital Experiences</strong> - Web experiences</li>
              </ul>

              <h3>4.6 Platform Cloud (Heroku & MuleSoft)</h3>
              <p>Extended platform capabilities:</p>
              <ul>
                <li><strong>Heroku</strong> - Cloud application platform</li>
                <li><strong>MuleSoft</strong> - Integration and APIs</li>
                <li><strong>Tableau</strong> - Data visualization</li>
                <li><strong>Einstein AI</strong> - Artificial intelligence</li>
                <li><strong>Data Cloud</strong> - Customer Data Platform</li>
              </ul>
            </section>

            <section>
              <h2>5. Key Salesforce Concepts: Objects, Fields, and Records</h2>
              <p>
                These three concepts form the foundation of all Salesforce data architecture:
              </p>

              <h3>5.1 Objects (Database Tables)</h3>
              <p>
                <strong>Objects</strong> are database tables that store data. Think of them as digital filing cabinets:
              </p>
              <ul>
                <li><strong>Standard Objects</strong> - Pre-built by Salesforce (Account, Contact, Lead, Opportunity, Case, etc.)</li>
                <li><strong>Custom Objects</strong> - Created by administrators for unique business needs</li>
                <li><strong>External Objects</strong> - Data stored outside Salesforce</li>
                <li><strong>Big Objects</strong> - Historical/archive data at scale</li>
              </ul>
              <div className="info-box">
                <h4>🏗️ Architecture Note</h4>  
                <p>When designing custom objects, think about your data model holistically. Proper object design 
                from the start prevents costly migrations later. Every custom object supports:</p>
                <ul>
                  <li>Custom fields (up to 800 per object)</li>
                  <li>Page layouts</li>
                  <li>Record types</li>
                  <li>Validation rules</li>
                  <li>Sharing settings</li>
                  <li>Approval processes</li>
                </ul>
              </div>

              <h3>5.2 Fields (Columns)</h3>
              <p>
                <strong>Fields</strong> are the individual data elements within an object. Each field 
                stores a specific piece of information:
              </p>
              <ul>
                <li><strong>Standard Fields</strong> - Pre-created (Name, CreatedDate, OwnerId, etc.)</li>
                <li><strong>Custom Fields</strong> - Created for specific needs</li>
                <li><strong>Formula Fields</strong> - Calculated values</li>
                <li><strong>Roll-up Summary</strong> - Aggregated child data</li>
              </ul>

              <h3>5.3 Records (Rows)</h3>
              <p>
                <strong>Records</strong> are individual entries in an object. Each record represents 
                one entity:
              </p>
              <ul>
                <li>One Account record = One customer/company</li>
                <li>One Contact record = One person</li>
                <li>One Opportunity record = One deal</li>
                <li>One Case record = One support issue</li>
              </ul>
            </section>

            <section>
              <h2>6. Salesforce Architecture: The Technical View</h2>
              
              <h3>6.1 The Salesforce Trust</h3>
              <p>
                Salesforce maintains a world-class infrastructure called "Trust" (trust.salesforce.com). 
                This provides:
              </p>
              <ul>
                <li><strong>99.99% Uptime</strong> - Guaranteed availability</li>
                <li><strong>Real-time Status</strong> - Current system health</li>
                <li><strong>Performance History</strong> - Historical uptime data</li>
                <li><strong>Maintenance Windows</strong> - Scheduled upgrades</li>
              </ul>

              <h3>6.2 Security & Compliance</h3>
              <p>
                Salesforce meets the highest security standards. As an administrator, you'll need 
                to understand:
              </p>
              <ul>
                <li><strong>SOC 1 Type II</strong> - Financial reporting controls</li>
                <li><strong>ISO 27001</strong> - Information security</li>
                <li><strong>ISO 27017</strong> - Cloud security</li>
                <li><strong>ISO 27018</strong> - Privacy in the cloud</li>
                <li><strong>SOC 2</strong> - Security, availability, confidentiality</li>
                <li><strong>GDPR</strong> - European data protection</li>
                <li><strong>HIPAA</strong> - Healthcare data (add-on)</li>
                <li><strong>FedRAMP</strong> - US government (Government Cloud)</li>
              </ul>

              <h3>6.3 Data Centers & Availability Zones</h3>
              <p>
                Salesforce replicates data across multiple data centers for fault tolerance. Enterprise and 
                Unlimited editions can choose their primary data center region (US, EU, APAC).
              </p>
            </section>

            <section>
              <h2>7. Salesforce Editions: Choosing the Right One</h2>
              <p>
                Understanding editions helps you plan for future growth. Here's a comprehensive comparison:
              </p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Essentials</th>
                      <th>Professional</th>
                      <th>Enterprise</th>
                      <th>Unlimited</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>User License</td>
                      <td>Up to 10</td>
                      <td>Unlimited</td>
                      <td>Unlimited</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <td>Custom Objects</td>
                      <td>10</td>
                      <td>200</td>
                      <td>400</td>
                      <td>800</td>
                    </tr>
                    <tr>
                      <td>Custom Fields/Object</td>
                      <td>50</td>
                      <td>100</td>
                      <td>200</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>API Access</td>
                      <td>❌</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <td>Sandbox</td>
                      <td>❌</td>
                      <td>❌</td>
                      <td>✓</td>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <td>Forecasting</td>
                      <td>Basic</td>
                      <td>Basic</td>
                      <td>Advanced</td>
                      <td>Advanced</td>
                    </tr>
                    <tr>
                      <td>Service Cloud</td>
                      <td>Add-on</td>
                      <td>Add-on</td>
                      <td>Included</td>
                      <td>Included</td>
                    </tr>
                    <tr>
                      <td>Live Agent</td>
                      <td>❌</td>
                      <td>❌</td>
                      <td>Add-on</td>
                      <td>Included</td>
                    </tr>
                    <tr>
                      <td>Einstein AI</td>
                      <td>❌</td>
                      <td>Add-on</td>
                      <td>Add-on</td>
                      <td>Included</td>
                    </tr>
                    <tr>
                      <td>24/7 Support</td>
                      <td>❌</td>
                      <td>Business Hours</td>
                      <td>24/7 Premier</td>
                      <td>24/7 Premier</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box">
                <h4>💰 Pricing Insight (Approximate)</h4>
                <p>Salesforce uses per-user, per-month pricing. Expect $150/user/month for Professional, 
                $165/user/month for Enterprise, and $210/user/month for Unlimited (varies by contract). 
                Prices increase annually.</p>
              </div>
            </section>

            <section>
              <h2>8. Lightning Experience: The Modern UI</h2>
              <p>
                Lightning Experience, introduced in 2015, is Salesforce's modern interface. Key components:
              </p>

              <h3>8.1 Lightning UI Components</h3>
              <ul>
                <li><strong>Lightning App Launcher</strong> - Access all apps from one place</li>
                <li><strong>Lightning Layouts</strong> - Customizable record pages</li>
                <li><strong>Lightning Actions</strong> - Quick action buttons</li>
                <li><strong>Path</strong> - Guided processes with visual milestones</li>
                <li><strong>Kanban</strong> - Drag-and-drop opportunity boards</li>
                <li><strong>List Views</strong> - Customizable filtered lists</li>
              </ul>

              <h3>8.2 Lightning Web Components (LWC)</h3>
              <p>
                For developers, Salesforce introduced Lightning Web Components in 2019—a modern JavaScript framework 
                for building custom components. This is now the recommended approach (replacing Aura components).
              </p>
              <ul>
                <li>Based on Web Components standards</li>
                <li>60% faster than Aura components</li>
                <li>Native HTML elements</li>
                <li>Shadow DOM support</li>
                <li>ES6+ JavaScript</li>
              </ul>

              <h3>8.3 Salesforce Mobile App</h3>
              <p>
                The Salesforce mobile app brings Lightning Experience to iOS and Android:
              </p>
              <ul>
                <li>Full CRM access on mobile</li>
                <li>Camera and location integration</li>
                <li>Offline access with Smart Sync</li>
                <li>Push notifications</li>
                <li>Mobile-specific components</li>
              </ul>
            </section>

            <section>
              <h2>9. The Salesforce Ecosystem: Career Opportunities</h2>
              <p>
                Understanding the ecosystem helps you see the bigger picture:
              </p>

              <h3>9.1 Salesforce Certifications</h3>
              <p>Industry-recognized credentials:</p>
              <ul>
                <li><strong>Admin</strong> - Salesforce Administrator (ADM-201)</li>
                <li><strong>Platform App Builder</strong> - Platform Builder (ADM-201 + PD-101)</li>
                <li><strong>Platform Developer I</strong> - Apex & LWC (PDI)</li>
                <li><strong>Platform Developer II</strong> - Advanced Development (PDII)</li>
                <li><strong>Marketing Cloud Email</strong> - Marketing Specialist</li>
                <li><strong>Marketing Cloud Developer</strong> - Technical Marketing</li>
                <li><strong>Sales Cloud Consultant</strong> - Sales Implementation</li>
                <li><strong>Service Cloud Consultant</strong> - Service Implementation</li>
                <li><strong>Technical Architect</strong> - Solution Design</li>
                <li><strong>Application Architect</strong> - Data & Design</li>
              </ul>

              <h3>9.2 The AppExchange</h3>
              <p>
                Salesforce's marketplace with 6,000+ apps:
              </p>
              <ul>
                <li>Pre-built solutions</li>
                <li>ISV partner apps</li>
                <li>Components and Lightning components</li>
                <li>Consulting partner solutions</li>
              </ul>

              <h3>9.3 Trailhead</h3>
              <p>
                Salesforce's free learning platform:
              </p>
              <ul>
                <li>1,500+ interactive trails</li>
                <li>Hands-on challenges</li>
                <li>Superbadges for advanced skills</li>
                <li>Community recognition</li>
              </ul>
            </section>

            <section>
              <h2>10. Getting Started: Your First Salesforce Org</h2>
              <p>
                Now that you understand the concepts, let's get practical:
              </p>

              <h3>10.1 Claiming Your Free Developer Edition</h3>
              <ol>
                <li>Go to <strong>developer.salesforce.com</strong></li>
                <li>Click "Sign Up"</li>
                <li>Enter your email (must be unique)</li>
                <li>Check your email for the verification link</li>
                <li>Set your password</li>
                <li>You'll land in Lightning Experience!</li>
              </ol>
              <div className="info-box">
                <h4>🎯 Important: Developer Edition Limits</h4>
                <p>Your free Developer Edition (DE) has some limits: Maximum 2 licenses, partial storage, 
                no production data. But it includes MOST Enterprise features—perfect for learning!</p>
              </div>

              <h3>10.2 Key Setup Areas</h3>
              <p>Bookmark these in Setup (gear icon → Setup):</p>
              <ul>
                <li><strong>Object Manager</strong> - Configure objects and fields</li>
                <li><strong>Users</strong> - Manage user accounts</li>
                <li><strong>Profiles</strong> - Permission sets</li>
                <li><strong>Sharing Settings</strong> - Record access</li>
                <li><strong>Flows</strong> - Build automation</li>
                <li><strong>Process Builder</strong> - (Legacy, use Flows)</li>
                <li><strong>Email Templates</strong> - Communication templates</li>
                <li><strong>Home</strong> - Setup home quick access</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>
                In this comprehensive lesson, you learned:
              </p>
              <ul>
                <li>Salesforce pioneered cloud-based enterprise CRM</li>
                <li>Multi-tenant architecture enables shared infrastructure with isolated data</li>
                <li>The Platform follows metadata-driven architecture</li>
                <li>Salesforce offers specialized Clouds for Sales, Service, Marketing, Commerce</li>
                <li>Objects, Fields, and Records form the data foundation</li>
                <li>Security and compliance meet enterprise standards</li>
                <li>Editions determine feature access—choose based on requirements</li>
                <li>Lightning Experience is the modern interface</li>
                <li>The ecosystem offers careers and certifications</li>
                <li>Developer Edition provides free learning environment</li>
              </ul>
              <p>
                <strong>Next Step:</strong> Continue to "CRM Concepts" to understand the business foundations 
                before diving into Salesforce administration.
              </p>
            </section>
          </article>

          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path.html" className="nav-link">← Admin Path Overview</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/crm-concepts.html" className="nav-link">CRM Concepts →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}