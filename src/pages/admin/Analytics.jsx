import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'

const sidebarModules = [
  { id: 1, title: '1. Salesforce Basics', lessons: [
    { id: 'admin-1-1', title: 'What is Salesforce?', slug: '/admin-path/salesforce-basics.html' },
    { id: 'admin-1-2', title: 'CRM Concepts', slug: '/admin-path/crm-concepts.html' },
    { id: 'admin-1-3', title: 'Navigation & Setup', slug: '/admin-path/navigation-setup.html' },
  ]},
  { id: 2, title: '2. Objects & Fields', lessons: [
    { id: 'admin-2-1', title: 'Standard Objects', slug: '/admin-path/standard-objects.html' },
    { id: 'admin-2-2', title: 'Custom Objects', slug: '/admin-path/custom-objects.html' },
    { id: 'admin-2-3', title: 'Field Types', slug: '/admin-path/field-types.html' },
    { id: 'admin-2-4', title: 'Relationships', slug: '/admin-path/relationships.html' },
  ]},
  { id: 3, title: '3. Data Management', lessons: [
    { id: 'admin-3-1', title: 'Import/Export', slug: '/admin-path/import-export.html' },
    { id: 'admin-3-2', title: 'Data Loader', slug: '/admin-path/data-loader.html' },
    { id: 'admin-3-3', title: 'Validation Rules', slug: '/admin-path/validation-rules.html' },
  ]},
  { id: 4, title: '4. Automation', lessons: [
    { id: 'admin-4-1', title: 'Flow Builder', slug: '/admin-path/flow-builder.html' },
    { id: 'admin-4-2', title: 'Process Builder', slug: '/admin-path/process-builder.html' },
    { id: 'admin-4-3', title: 'Approval Processes', slug: '/admin-path/approval-processes.html' },
  ]},
  { id: 5, title: '5. Security', lessons: [
    { id: 'admin-5-1', title: 'Sharing Settings', slug: '/admin-path/sharing-settings.html' },
    { id: 'admin-5-2', title: 'Profiles & Permissions', slug: '/admin-path/profiles-permissions.html' },
    { id: 'admin-5-3', title: 'Field-Level Security', slug: '/admin-path/field-level-security.html' },
  ]},
  { id: 6, title: '6. Reporting', lessons: [
    { id: 'admin-6-1', title: 'Report Types', slug: '/admin-path/report-types.html' },
    { id: 'admin-6-2', title: 'Dashboards', slug: '/admin-path/dashboards.html' },
    { id: 'admin-6-3', title: 'Analytics', slug: '/admin-path/analytics.html' },
  ]}
]

export default function Analytics() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/analytics.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Analytics' }
          ]} />
          <article className="lesson-content">
            <h1>Analytics: Complete Guide</h1>
            <p className="lesson-intro">
              This comprehensive guide covers Salesforce's complete analytics capabilities - from basic 
              reporting to advanced AI-powered insights with Einstein Analytics and Tableau. Learn how 
              to transform raw data into actionable business intelligence.
            </p>

            <section>
              <h2>1. Salesforce Analytics Overview</h2>
              <p>
                Salesforce offers a comprehensive analytics ecosystem that scales from basic reporting 
                to enterprise-grade business intelligence. The platform provides multiple tools designed 
                for different skill levels and use cases, enabling organizations to derive insights from 
                their customer data at every level of complexity.
              </p>

              <h3>1.1 Analytics Tool Comparison</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Tool</th>
                      <th>Complexity</th>
                      <th>Best For</th>
                      <th>Key Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Reports & Dashboards</td>
                      <td>Basic</td>
                      <td>End users, analysts</td>
                      <td>Quick insights, operational reporting</td>
                    </tr>
                    <tr>
                      <td>Einstein Analytics</td>
                      <td>Intermediate</td>
                      <td>Business analysts</td>
                      <td>AI-powered insights, interactive dashboards</td>
                    </tr>
                    <tr>
                      <td>Tableau</td>
                      <td>Advanced</td>
                      <td>Data scientists, analysts</td>
                      <td>Complex visualizations, data blending</td>
                    </tr>
                    <tr>
                      <td>CRM Analytics</td>
                      <td>Advanced</td>
                      <td>Enterprise analytics</td>
                      <td>Custom apps, predictive models</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>1.2 Key Analytics Terminology</h3>
              <ul>
                <li><strong>KPI (Key Performance Indicator)</strong> - Measurable value demonstrating effectiveness</li>
                <li><strong>Metric</strong> - Quantitative measurement of a specific activity</li>
                <li><strong>Dimension</strong> - Categorical data used for grouping and filtering</li>
                <li><strong>Measure</strong> - Numeric data that can be aggregated</li>
                <li><strong>Trend</strong> - Direction of change over time</li>
                <li><strong>Benchmark</strong> - Standard for comparison</li>
              </ul>

              <div className="info-box">
                <h4>📊 Einstein Branding Change</h4>
                <p>Salesforce has rebranded "Einstein Analytics" to "CRM Analytics" and "Tableau CRM" 
                to "Tableau CRM". The core AI-powered capabilities remain, but the naming has evolved 
                to reflect the broader analytics platform.</p>
              </div>
            </section>

            <section>
              <h2>2. Einstein Analytics / CRM Analytics</h2>
              <p>
                CRM Analytics (formerly Einstein Analytics) brings the power of artificial intelligence 
                to business analytics, enabling users to discover insights without needing technical 
                expertise. The platform combines data exploration, visualization, and predictive 
                capabilities in a unified experience.
              </p>

              <h3>2.1 Key Capabilities</h3>
              <ul>
                <li><strong>AI-Powered Insights</strong> - Automatic discovery of important patterns</li>
                <li><strong>Interactive Dashboards</strong> - Dynamic exploration of data</li>
                <li><strong>Predictive Models</strong> - Forecast outcomes and probabilities</li>
                <li><strong>Data Prep</strong> - Transform and blend data from multiple sources</li>
                <li><strong>Mobile Analytics</strong> - Access insights on any device</li>
              </ul>

              <h3>2.2 Einstein Discovery</h3>
              <p>Einstein Discovery automatically analyzes data to find patterns and trends:</p>
              <ul>
                <li><strong>Automated Analysis</strong> - Scans millions of data points</li>
                <li><strong>Key Drivers</strong> - Identifies factors most influencing outcomes</li>
                <li><strong>Recommendations</strong> - Suggests actions based on insights</li>
                <li><strong>Natural Language</strong> - Explains findings in plain language</li>
              </ul>

              <h3>2.3 Einstein Prediction Builder</h3>
              <p>Build machine learning predictions without code:</p>
              <ol>
                <li>Go to <strong>Setup → Prediction Builder</strong></li>
                <li>Click <strong>New Prediction</strong></li>
                <li>Select the object to predict</li>
                <li>Choose the outcome you want to predict</li>
                <li>Select the fields to analyze</li>
                <li>Train the model and review results</li>
                <li>Activate and use in flows or reports</li>
              </ol>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Prediction Type</th>
                      <th>Use Case</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Binary</td>
                      <td>Yes/No outcomes</td>
                      <td>Will this lead convert?</td>
                    </tr>
                    <tr>
                      <td>Multi-Class</td>
                      <td>Multiple outcomes</td>
                      <td>Which stage will close?</td>
                    </tr>
                    <tr>
                      <td>Regression</td>
                      <td>Numeric predictions</td>
                      <td>What will revenue be?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>3. Sales Cloud Analytics</h2>
              <p>Sales analytics helps organizations understand their sales performance and forecast 
              accurately. Key metrics and dashboards provide visibility into pipeline health, 
              rep performance, and revenue trends.</p>

              <h3>3.1 Essential Sales Metrics</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Definition</th>
                      <th>Target Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Pipeline Value</strong></td>
                      <td>Total value of all open opportunities</td>
                      <td>3-4x quota</td>
                    </tr>
                    <tr>
                      <td><strong>Win Rate</strong></td>
                      <td>% of opportunities won vs. closed</td>
                      <td>25-40%</td>
                    </tr>
                    <tr>
                      <td><strong>Average Deal Size</strong></td>
                      <td>Mean value of closed opportunities</td>
                      <td>Varies by industry</td>
                    </tr>
                    <tr>
                      <td><strong>Sales Cycle Length</strong></td>
                      <td>Avg days from lead to close</td>
                      <td>60-90 days typical</td>
                    </tr>
                    <tr>
                      <td><strong>Quota Attainment</strong></td>
                      <td>% of reps hitting quota</td>
                      <td>60-80% healthy</td>
                    </tr>
                    <tr>
                      <td><strong>Activity Metrics</strong></td>
                      <td>Calls, emails, meetings per rep</td>
                      <td>Industry dependent</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.2 Sales Analytics Dashboards</h3>
              <p>Key dashboard components for sales teams:</p>
              <ul>
                <li><strong>Pipeline Overview</strong> - Total value, opportunity count, average age</li>
                <li><strong>Stage Distribution</strong> - Opportunities by stage with value</li>
                <li><strong>Forecast vs Actuals</strong> - Predicted vs. closed revenue</li>
                <li><strong>Rep Performance</strong> - Individual metrics and rankings</li>
                <li><strong>Win/Loss Analysis</strong> - Reasons for wins and losses</li>
                <li><strong>Activity Tracking</strong> - Calls, emails, meetings by rep</li>
              </ul>

              <h3>3.3 Sales Forecasting</h3>
              <p>Salesforce provides multiple forecasting tools:</p>
              <ul>
                <li><strong>Collaborative Forecasting</strong> - Reps and managers adjust predictions</li>
                <li><strong>Quota Management</strong> - Set and track team quotas</li>
                <li><strong>Forecast Categories</strong> - Commit, Best Case, Pipeline</li>
                <li><strong>Historical Forecasting</strong> - Compare predictions to outcomes</li>
                <li><strong>Einstein Forecasting</strong> - AI-powered predictions</li>
              </ul>

              <div className="info-box">
                <h4>💡 Best Practice</h4>
                <p>Use the "Commit" forecast category for realistic expectations and "Best Case" 
                for optimistic scenarios. Managers should review forecasts weekly with their 
                teams to identify deals at risk.</p>
              </div>
            </section>

            <section>
              <h2>4. Service Cloud Analytics</h2>
              <p>Service analytics helps organizations optimize customer support operations, 
              reduce costs, and improve customer satisfaction. Tracking the right metrics 
              enables proactive management of service teams.</p>

              <h3>4.1 Essential Service Metrics</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Definition</th>
                      <th>Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Case Volume</strong></td>
                      <td>Number of cases by period</td>
                      <td>Within capacity</td>
                    </tr>
                    <tr>
                      <td><strong>First Contact Resolution (FCR)</strong></td>
                      <td>% resolved on first interaction</td>
                      <td>70-80%+</td>
                    </tr>
                    <tr>
                      <td><strong>Average Handle Time (AHT)</strong></td>
                      <td>Avg time to resolve case</td>
                      <td>Lower is better</td>
                    </tr>
                    <tr>
                      <td><strong>Average Resolution Time</strong></td>
                      <td>Avg time from open to close</td>
                      <td>Meet SLA targets</td>
                    </tr>
                    <tr>
                      <td><strong>Customer Satisfaction (CSAT)</strong></td>
                      <td>Customer rating post-interaction</td>
                      <td>90%+</td>
                    </tr>
                    <tr>
                      <td><strong>Net Promoter Score (NPS)</strong></td>
                      <td>Customer loyalty measurement</td>
                      <td>50+</td>
                    </tr>
                    <tr>
                      <td><strong>SLA Compliance</strong></td>
                      <td>% of cases meeting SLA</td>
                      <td>95%+</td>
                    </tr>
                    <tr>
                      <td><strong>Backlog</strong></td>
                      <td>Open cases over SLA threshold</td>
                      <td>Minimized</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>4.2 Service Dashboard Components</h3>
              <ul>
                <li><strong>Case Queue Dashboard</strong> - Workload distribution by agent/queue</li>
                <li><strong>SLA Monitoring</strong> - Cases approaching/exceeding SLA</li>
                <li><strong>Escalation Tracking</strong> - Escalated cases requiring attention</li>
                <li><strong>CSAT Trends</strong> - Satisfaction scores over time</li>
                <li><strong>Agent Performance</strong> - Individual metrics and rankings</li>
                <li><strong>Knowledge Base Usage</strong> - Article views and effectiveness</li>
              </ul>

              <h3>4.3 Service Analytics Use Cases</h3>
              <ul>
                <li><strong>Workforce Planning</strong> - Staffing based on case volume trends</li>
                <li><strong>Process Improvement</strong> - Identify bottlenecks and inefficiencies</li>
                <li><strong>Self-Service Optimization</strong> - Measure knowledge base effectiveness</li>
                <li><strong>Escalation Analysis</strong> - Understand why cases escalate</li>
                <li><strong>Agent Coaching</strong> - Identify training needs from metrics</li>
              </ul>
            </section>

            <section>
              <h2>5. Tableau Integration</h2>
              <p>Tableau provides enterprise-grade visual analytics capabilities for organizations 
              requiring advanced data visualization and complex data blending.</p>

              <h3>5.1 Tableau Products</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Description</th>
                      <th>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tableau Creator</td>
                      <td>Full analytics capabilities</td>
                      <td>Analysts, data scientists</td>
                    </tr>
                    <tr>
                      <td>Tableau Explorer</td>
                      <td>Browse and view content</td>
                      <td>Business users</td>
                    </tr>
                    <tr>
                      <td>Tableau Viewer</td>
                      <td>View-only access</td>
                      <td>Consumers</td>
                    </tr>
                    <tr>
                      <td>Tableau Server</td>
                      <td>On-premise deployment</td>
                      <td>Enterprise with compliance needs</td>
                    </tr>
                    <tr>
                      <td>Tableau Online</td>
                      <td>Cloud-based deployment</td>
                      <td>Cloud-first organizations</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>5.2 Tableau Features</h3>
              <ul>
                <li><strong>Data Blending</strong> - Combine data from multiple sources</li>
                <li><strong>Calculated Fields</strong> - Custom calculations and logic</li>
                <li><strong>Advanced Visualizations</strong> - Complex chart types</li>
                <li><strong>Parameters</strong> - Interactive user controls</li>
                <li><strong>Sets and Groups</strong> - Define data subsets</li>
                <li><strong>Story Points</strong> - Sequential visualizations for narratives</li>
              </ul>

              <h3>5.3 Salesforce + Tableau Integration</h3>
              <ul>
                <li><strong>Tableau CRM</strong> - Embedded analytics in Salesforce</li>
                <li><strong>Lightning Integration</strong> - Tableau dashboards in Lightning pages</li>
                <li><strong>Data Connector</strong> - Sync data between platforms</li>
                <li><strong>Single Sign-On</strong> - Unified authentication</li>
              </ul>
            </section>

            <section>
              <h2>6. Data Cloud for Analytics</h2>
              <p>Data Cloud (formerly Customer Data Platform) unifies data from all sources to 
              enable comprehensive analytics across the entire customer journey.</p>

              <h3>6.1 Data Cloud Capabilities</h3>
              <ul>
                <li><strong>Data Unification</strong> - Merge data from multiple sources</li>
                <li><strong>Identity Resolution</strong> - Connect customer records</li>
                <li><strong>Data Transformation</strong> - Clean and prepare data</li>
                <li><strong>Audience Segmentation</strong> - Build targeted groups</li>
                <li><strong>Real-Time Sync</strong> - Keep data current</li>
              </ul>

              <h3>6.2 Analytics with Data Cloud</h3>
              <ul>
                <li><strong>Unified Profiles</strong> - Complete customer view</li>
                <li><strong>Cross-Channel Attribution</strong> - Track touchpoints</li>
                <li><strong>Predictive Scoring</strong> - AI-powered predictions</li>
                <li><strong>Journey Analytics</strong> - Customer journey analysis</li>
              </ul>

              <div className="info-box">
                <h4>🚀 Real-Time Analytics</h4>
                <p>Data Cloud enables real-time analytics by processing data as it enters the 
                platform. This allows for immediate response to customer behaviors and events, 
                such as triggering personalized offers when a customer browses your website.</p>
              </div>
            </section>

            <section>
              <h2>7. Analytics Best Practices</h2>

              <h3>7.1 Data Quality Foundation</h3>
              <ul>
                <li>Ensure data is accurate, complete, and consistent</li>
                <li>Implement validation rules at data entry</li>
                <li>Regularly audit data for quality issues</li>
                <li>Document data definitions and business rules</li>
                <li>Train users on proper data entry</li>
              </ul>

              <h3>7.2 Dashboard Design Principles</h3>
              <ul>
                <li><strong>Know Your Audience</strong> - Design for the specific user's needs</li>
                <li><strong>Start with Questions</strong> - Define what business questions to answer</li>
                <li><strong>Simplify</strong> - Avoid clutter, focus on key insights</li>
                <li><strong>Tell a Story</strong> - Create logical flow through data</li>
                <li><strong>Provide Context</strong> - Include comparisons and benchmarks</li>
              </ul>

              <h3>7.3 Governance and Security</h3>
              <ul>
                <li>Control access to sensitive data through profiles and FLS</li>
                <li>Use folder sharing appropriately for dashboards</li>
                <li>Document all custom metrics and calculations</li>
                <li>Schedule regular reviews of analytics content</li>
                <li>Archive outdated reports and dashboards</li>
              </ul>

              <h3>7.4 Adoption and Training</h3>
              <ul>
                <li>Start with simple dashboards and progress to complex</li>
                <li>Provide role-specific training</li>
                <li>Create a center of excellence for analytics</li>
                <li>Share success stories and use cases</li>
                <li>Establish metrics for analytics adoption</li>
              </ul>

              <div className="info-box">
                <h4>📈 Measure ROI</h4>
                <p>Track the business impact of analytics: time saved on reporting, improved 
                decision-making speed, revenue from insights-driven actions, and reduced 
                operational costs from better visibility.</p>
              </div>
            </section>

            <section>
              <h2>8. Building an Analytics Strategy</h2>

              <h3>8.1 Strategy Framework</h3>
              <ol>
                <li><strong>Assess Current State</strong> - What analytics do you have today?</li>
                <li><strong>Define Business Objectives</strong> - What decisions need better data?</li>
                <li><strong>Identify Gaps</strong> - What capabilities are missing?</li>
                <li><strong>Prioritize Initiatives</strong> - What provides highest value?</li>
                <li><strong>Develop Roadmap</strong> - What to build and in what order?</li>
                <li><strong>Measure Success</strong> - Track adoption and business impact</li>
              </ol>

              <h3>8.2 Analytics Maturity Model</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Description</th>
                      <th>Characteristics</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 - Ad Hoc</td>
                      <td>Basic reporting</td>
                      <td>Manual, inconsistent, individual effort</td>
                    </tr>
                    <tr>
                      <td>2 - Foundational</td>
                      <td>Standard reports</td>
                      <td>Consistent definitions, scheduled delivery</td>
                    </tr>
                    <tr>
                      <td>3 - Intermediate</td>
                      <td>Self-service analytics</td>
                      <td>User-friendly tools, data democratization</td>
                    </tr>
                    <tr>
                      <td>4 - Advanced</td>
                      <td>Predictive analytics</td>
                      <td>AI/ML, forecasting, automated insights</td>
                    </tr>
                    <tr>
                      <td>5 - Leading</td>
                      <td>Real-time intelligence</td>
                      <td>Real-time data, embedded analytics, data-driven culture</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>9. Common Analytics Challenges</h2>

              <h3>9.1 Data Challenges</h3>
              <ul>
                <li><strong>Data Silos</strong> - Information trapped in separate systems</li>
                <li><strong>Data Quality</strong> - Inaccurate or inconsistent data</li>
                <li><strong>Data Volume</strong> - Too much data to analyze effectively</li>
                <li><strong>Data Access</strong> - Users can't get the data they need</li>
              </ul>

              <h3>9.2 Organizational Challenges</h3>
              <ul>
                <li><strong>Lack of Skills</strong> - No one knows how to analyze data</li>
                <li><strong>Tool Adoption</strong> - Users don't use available tools</li>
                <li><strong>Analysis Paralysis</strong> - Too much data, no action</li>
                <li><strong>Insight Translation</strong> - Findings don't drive action</li>
              </ul>

              <h3>9.3 Solutions</h3>
              <ul>
                <li>Invest in data quality and integration</li>
                <li>Provide training and support for users</li>
                <li>Focus on actionable insights, not just data</li>
                <li>Create feedback loops from decisions to data</li>
              </ul>
            </section>

            <section>
              <h2>10. Troubleshooting Analytics Issues</h2>

              <h3>10.1 Report/Dashboard Problems</h3>
              <ul>
                <li><strong>No data showing</strong> - Check filters, data access, date ranges</li>
                <li><strong>Incorrect totals</strong> - Verify grouping and summary fields</li>
                <li><strong>Slow performance</strong> - Simplify report, reduce data volume</li>
                <li><strong>Permission errors</strong> - Check profile/permission set access</li>
              </ul>

              <h3>10.2 Data Issues</h3>
              <ul>
                <li><strong>Duplicate records</strong> - Use matching rules and duplicate management</li>
                <li><strong>Missing data</strong> - Check data entry processes, required fields</li>
                <li><strong>Inconsistent values</strong> - Implement picklist values, validation rules</li>
                <li><strong>Historical data issues</strong> - Use Field History Tracking</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on Salesforce Analytics, you learned:</p>
              <ul>
                <li>The complete analytics tool landscape: Reports, CRM Analytics, and Tableau</li>
                <li>Einstein Analytics/CRM Analytics capabilities and AI-powered features</li>
                <li>Essential sales metrics: pipeline, win rate, sales cycle, quota attainment</li>
                <li>Service Cloud metrics: FCR, AHT, CSAT, SLA compliance</li>
                <li>Tableau integration for enterprise visual analytics</li>
                <li>Data Cloud for unified customer data and real-time analytics</li>
                <li>Best practices for data quality, dashboard design, and governance</li>
                <li>How to build an analytics strategy and measure success</li>
              </ul>
              <p>
                <strong>Congratulations!</strong> You've completed the Admin Path curriculum. You now 
                have comprehensive knowledge of Salesforce administration from basics to advanced topics.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/dashboards.html" className="nav-link">← Dashboards</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path.html" className="nav-link">Back to Admin Path →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}