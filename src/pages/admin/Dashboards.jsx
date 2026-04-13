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

export default function Dashboards() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/admin-path/dashboards.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/admin-path.html', label: 'Admin Path' },
            { label: 'Dashboards' }
          ]} />
          <article className="lesson-content">
            <h1>Dashboards: Complete Guide</h1>
            <p className="lesson-intro">
              Dashboards transform your data into visual representations that drive business decisions. 
              This comprehensive guide covers everything from dashboard components and layout to 
              advanced filtering and best practices for creating effective dashboards.
            </p>

            <section>
              <h2>1. Introduction to Dashboards</h2>
              <p>
                A Dashboard is a visual display of data from reports that provides at-a-glance views of 
                key metrics and trends. While reports show detailed data in tabular or chart form, 
                dashboards combine multiple data visualizations into a single view, enabling users to 
                monitor business health without analyzing raw data.
              </p>
              <p>
                Dashboards in Salesforce are built on top of reports. Each dashboard component displays 
                data from a single report. The dashboard itself doesn't store data - it simply 
                aggregates and visualizes the underlying report data. This means dashboards always 
                reflect the current state of the data in your reports.
              </p>

              <div className="info-box">
                <h4>📊 Dashboard vs Report</h4>
                <p>Think of reports as the raw data source and dashboards as the visual presentation layer. 
                Dashboards can show data from multiple reports simultaneously, giving users a 
                comprehensive view across different business areas.</p>
              </div>
            </section>

            <section>
              <h2>2. Dashboard Components</h2>
              <p>Salesforce dashboards support several component types, each designed for specific data visualization needs:</p>

              <h3>2.1 Charts</h3>
              <p>Charts are the most common dashboard component, converting report data into visual formats:</p>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Chart Type</th>
                      <th>Best For</th>
                      <th>Example Use Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bar (Horizontal/Vertical)</td>
                      <td>Comparing categories</td>
                      <td>Sales by region, opportunities by stage</td>
                    </tr>
                    <tr>
                      <td>Line</td>
                      <td>Trend analysis over time</td>
                      <td>Monthly revenue trend, case volume over time</td>
                    </tr                    >
                    <tr>
                      <td>Pie/Donut</td>
                      <td>Showing distribution/percentage</td>
                      <td>Market share, opportunity distribution by type</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>Showing volume over time</td>
                      <td>Cumulative sales, pipeline value trend</td>
                    </tr>
                    <tr>
                      <td>Funnel</td>
                      <td>Conversion visualization</td>
                      <td>Sales pipeline stages, lead conversion</td>
                    </tr>
                    <tr>
                      <td>Scatter</td>
                      <td>Correlation analysis</td>
                      <td>Deals size vs. close rate, cases by priority</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2.2 Tables</h3>
              <p>Table components display report data in a tabular format within a dashboard:</p>
              <ul>
                <li><strong>Compact Tables</strong> - Show summary data with minimal detail</li>
                <li><strong>Detailed Tables</strong> - Display more rows and columns</li>
                <li><strong>Conditional Formatting</strong> - Highlight cells based on values</li>
                <li><strong>Drill-Down</strong> - Link to underlying report for details</li>
              </ul>

              <h3>2.3 Metrics</h3>
              <p>Metrics display a single key value prominently:</p>
              <ul>
                <li><strong>Single Number</strong> - Total sales, open cases count</li>
                <li><strong>With Trend</strong> - Shows change from previous period</li>
                <li><strong>With Gauge</strong> - Visual progress indicator</li>
                <li><strong>Custom Formatting</strong> - Currency, percentage, conditional colors</li>
              </ul>

              <h3>2.4 Gauges</h3>
              <p>Gauge components show progress toward a goal or threshold:</p>
              <ul>
                <li><strong>Angular Gauges</strong> - Traditional speedometer style</li>
                <li><strong>Solid Gauges</strong> - Modern progress bar style</li>
                <li><strong>Regions</strong> - Color-coded zones (red, yellow, green)</li>
                <li><strong>Thresholds</strong> - Configurable boundaries</li>
              </ul>

              <h3>2.5 Rich Text</h3>
              <p>Rich text components add context and branding to dashboards:</p>
              <ul>
                <li>Dashboard titles and descriptions</li>
                <li>Instructions or annotations</li>
                <li>Company logos and branding</li>
                <li>Links to related resources</li>
                <li>Static text and HTML formatting</li>
              </ul>
            </section>

            <section>
              <h2>3. Creating Dashboards</h2>

              <h3>3.1 Dashboard Creation Process</h3>
              <ol>
                <li>Navigate to the <strong>Dashboards</strong> tab in Lightning Experience</li>
                <li>Click <strong>New Dashboard</strong></li>
                <li>Enter a name for the dashboard in the "Dashboard Name" field</li>
                <li>Add an optional description in the "Description" field</li>
                <li>Choose a folder to save the dashboard (or create a new one)</li>
                <li>Click <strong>Create</strong> to open the Dashboard Builder</li>
              </ol>

              <h3>3.2 Dashboard Builder Interface</h3>
              <p>The Dashboard Builder is where you configure your dashboard:</p>
              <ul>
                <li><strong>Canvas</strong> - The main area where you arrange components</li>
                <li><strong>Components Panel</strong> - List of available components to add</li>
                <li><strong>Properties Panel</strong> - Settings for the selected component</li>
                <li><strong>Filter Bar</strong> - Optional dashboard-wide filters</li>
                <li><strong>Preview Mode</strong> - See how dashboard looks to users</li>
              </ul>

              <h3>3.3 Adding Components</h3>
              <ol>
                <li>Click <strong>Add Component</strong> in the Dashboard Builder</li>
                <li>Select a source report from the report picker</li>
                <li>Choose the component type (chart, table, metric, gauge, or rich text)</li>
                <li>Configure the component properties</li>
                <li>Position and resize the component on the canvas</li>
                <li>Save the dashboard</li>
              </ol>

              <div className="info-box">
                <h4>💡 Quick Start</h4>
                <p>Create your underlying reports before building a dashboard. Each component requires 
                a pre-built report that provides the data. Plan your reports first, then build the 
                dashboard to visualize them.</p>
              </div>
            </section>

            <section>
              <h2>4. Dashboard Filtering</h2>
              <p>Filtering makes dashboards dynamic and allows users to focus on specific data.</p>

              <h3>4.1 Dashboard-Level Filters</h3>
              <p>Apply a filter to all components simultaneously:</p>
              <ol>
                <li>Click <strong>Add Filter</strong> in the dashboard filter bar</li>
                <li>Select the field to filter on (from any source report)</li>
                <li>Choose the filter operator (equals, contains, greater than, etc.)</li>
                <li>Enter the filter value</li>
                <li>The filter applies to all components using that field</li>
              </ol>

              <h3>4.2 Component-Level Filters</h3>
              <p>Apply filters to individual components only:</p>
              <ol>
                <li>Select the component in the Dashboard Builder</li>
                <li>Click the filter icon in the component header</li>
                <li>Add filter criteria specific to that component</li>
                <li>The filter only affects this component</li>
              </ol>

              <h3>4.3 Filter Types</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Filter Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Relative Date</td>
                      <td>Dynamic dates based on today</td>
                      <td>This Month, Last 7 Days, This Quarter</td>
                    </tr>
                    <tr>
                      <td>Relative Value</td>
                      <td>Based on running user</td>
                      <td>My Accounts, My Opportunities</td>
                    </tr>
                    <tr>
                      <td>Static Value</td>
                      <td>Fixed filter value</td>
                      <td>Region = "North America"</td>
                    </tr>
                    <tr>
                      <td>Multiple Values</td>
                      <td>Select multiple options</td>
                      <td>Industry in ("Technology", "Finance")</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box">
                <h4>⚠️ Filter Limitations</h4>
                <p>Dashboard filters only work with fields that exist in the source reports. 
                If you want to filter on a field, ensure it's included in at least one of 
                your underlying reports.</p>
              </div>
            </section>

            <section>
              <h2>5. Dashboard Layout and Design</h2>

              <h3>5.1 Grid System</h3>
              <p>Salesforce dashboards use a responsive grid system:</p>
              <ul>
                <li><strong>12-Column Grid</strong> - Flexible layout options</li>
                <li><strong>Snap to Grid</strong> - Components align automatically</li>
                <li><strong>Resize Handles</strong> - Drag to adjust component size</li>
                <li><strong>Responsive Breakpoints</strong> - Adapts to screen size</li>
              </ul>

              <h3>5.2 Layout Best Practices</h3>
              <ul>
                <li>Place most important metrics in the top-left (first impression area)</li>
                <li>Use consistent sizing for similar components</li>
                <li>Group related components together</li>
                <li>Leave white space between component groups</li>
                <li>Consider the reading flow (left to right, top to bottom)</li>
              </ul>

              <h3>5.3 Component Sizing Guidelines</h3>
              <ul>
                <li><strong>Metrics</strong> - Typically 2-4 columns wide</li>
                <li><strong>Charts</strong> - Usually 4-6 columns for readability</li>
                <li><strong>Tables</strong> - Best at 6-12 columns (full width)</li>
                <li><strong>Gauges</strong> - 3-4 columns work well</li>
              </ul>
            </section>

            <section>
              <h2>6. Dashboard Folders and Sharing</h2>

              <h3>6.1 Folder Management</h3>
              <p>Organize dashboards into folders for easy access and security:</p>
              <ol>
                <li>Go to <strong>Setup → Dashboards</strong></li>
                <li>Click <strong>New Folder</strong></li>
                <li>Enter a folder name and description</li>
                <li>Choose the access level (Public, Shared, or Private)</li>
                <li>Assign users or roles to the folder</li>
                <li>Save the folder</li>
              </ol>

              <h3>6.2 Folder Access Levels</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Access Level</th>
                      <th>Description</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Public</td>
                      <td>Anyone can view</td>
                      <td>Company-wide dashboards</td>
                    </tr>
                    <tr>
                      <td>Shared</td>
                      <td>Specific users/roles can view</td>
                      <td>Team-specific dashboards</td>
                    </tr>
                    <tr>
                      <td>Private</td>
                      <td>Only owner can view</td>
                      <td>Personal dashboards in development</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>6.3 Dashboard Running User</h3>
              <p>The "Running User" determines what data the dashboard displays:</p>
              <ul>
                <li><strong>Specific User</strong> - Dashboard always uses that user's permissions</li>
                <li><strong>Dashboard Viewer</strong> - Each viewer sees data based on their permissions</li>
                <li><strong>Restrictions Apply</strong> - Users only see data they have access to</li>
              </ul>

              <div className="info-box">
                <h4>🔑 Important</h4>
                <p>For dynamic dashboards that show personalized data, use "Dashboard Viewer" as 
                the running user. For fixed views visible to everyone, specify a user with 
                appropriate access.</p>
              </div>
            </section>

            <section>
              <h2>7. Dashboard Refresh Options</h2>

              <h3>7.1 Refresh Types</h3>
              <ul>
                <li><strong>Manual Refresh</strong> - Users click refresh button</li>
                <li><strong>Scheduled Refresh</strong> - Auto-refresh on schedule (requires Salesforce CRM Analytics)</li>
                <li><strong>View Refresh</strong> - Refreshes when dashboard is viewed</li>
              </ul>

              <h3>7.2 Caching Behavior</h3>
              <ul>
                <li>Dashboards cache data for performance</li>
                <li>Refresh interval is controlled at the user level</li>
                <li>Use "Refresh" button to get latest data</li>
                <li>API users can trigger refresh programmatically</li>
              </ul>
            </section>

            <section>
              <h2>8. Dashboard Best Practices</h2>

              <h3>8.1 Design Principles</h3>
              <ul>
                <li><strong>Start with Purpose</strong> - Define the business question the dashboard answers</li>
                <li><strong>Know Your Audience</strong> - Design for the specific user's needs</li>
                <li><strong>Limit Components</strong> - 4-8 components per dashboard is ideal</li>
                <li><strong>Use Consistent Colors</strong> - Same metrics should use same colors across dashboards</li>
                <li><strong>Add Context</strong> - Include titles, descriptions, and annotations</li>
              </ul>

              <h3>8.2 Content Guidelines</h3>
              <ul>
                <li>Each dashboard should tell a coherent story</li>
                <li>Prioritize key metrics at the top</li>
                <li>Use appropriate chart types for data relationships</li>
                <li>Include comparison metrics when relevant (vs. last period, vs. target)</li>
                <li>Add drill-down capability for detailed analysis</li>
              </ul>

              <h3>8.3 Performance Optimization</h3>
              <ul>
                <li>Use summary or matrix reports as data sources (not tabular)</li>
                <li>Limit the number of components per dashboard</li>
                <li>Avoid complex formulas in underlying reports</li>
                <li>Schedule heavy dashboards during off-peak hours</li>
                <li>Use dashboard components instead of embedding individual reports</li>
              </ul>

              <div className="info-box">
                <h4>🎯 Dashboard Purpose</h4>
                <p>Every dashboard should answer a specific business question. If a user can't 
                understand the dashboard's purpose in 10 seconds, it needs simplification. 
                Remove decorative elements and focus on actionable insights.</p>
              </div>
            </section>

            <section>
              <h2>9. Dashboard Examples by Department</h2>

              <h3>9.1 Sales Dashboards</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Source Report</th>
                      <th>Visualization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total Revenue</td>
                      <td>Opportunities - Closed Won</td>
                      <td>Metric</td>
                    </tr>
                    <tr>
                      <td>Pipeline by Stage</td>
                      <td>Open Opportunities</td>
                      <td>Funnel Chart</td>
                    </tr>
                    <tr>
                      <td>Top Accounts</td>
                      <td>Opportunities by Account</td>
                      <td>Horizontal Bar Chart</td>
                    </tr>
                    <tr>
                      <td>Win Rate Trend</td>
                      <td>Historical Opportunity Data</td>
                      <td>Line Chart</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>9.2 Service Dashboards</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Source Report</th>
                      <th>Visualization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Open Cases</td>
                      <td>Cases by Status</td>
                      <td>Metric</td>
                    </tr>
                    <tr>
                      <td>Cases by Priority</td>
                      <td>Case Distribution</td>
                      <td>Donut Chart</td>
                    </tr>
                    <tr>
                      <td>Avg Resolution Time</td>
                      <td>Closed Cases Analysis</td>
                      <td>Gauge</td>
                    </tr>
                    <tr>
                      <td>CSAT Score</td>
                      <td>Survey Results</td>
                      <td>Metric with Trend</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>9.3 Executive Dashboards</h3>
              <ul>
                <li>High-level KPIs prominently displayed</li>
                <li>Traffic light indicators for status (on track/at risk/below target)</li>
                <li>Trend charts showing performance over time</li>
                <li>Drill-down capability to departmental details</li>
                <li>Comparison to targets and previous periods</li>
              </ul>
            </section>

            <section>
              <h2>10. Dynamic Dashboards</h2>

              <h3>10.1 What Are Dynamic Dashboards?</h3>
              <p>Dynamic dashboards adjust their content based on the viewing user:</p>
              <ul>
                <li>Each user sees data based on their security settings</li>
                <li>Uses "Dashboard Viewer" as running user</li>
                <li>Filters can use "$USER" and "$USERROLE" variables</li>
                <li>Enables personalized dashboards without creating multiple versions</li>
              </ul>

              <h3>10.2 Dynamic Dashboard Variables</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Variable</th>
                      <th>Returns</th>
                      <th>Example Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>$USER</td>
                      <td>Current user ID</td>
                      <td>Filter: Owner ID = $USER</td>
                    </tr>
                    <tr>
                      <td>$USERROLE</td>
                      <td>Current user's role ID</td>
                      <td>Filter: Region = $USERROLE.Region__c</td>
                    </tr>
                    <tr>
                      <td>$PROFILE</td>
                      <td>Current user's profile ID</td>
                      <td>Show/hide components based on profile</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>11. Troubleshooting Dashboards</h2>

              <h3>11.1 Common Issues</h3>
              <ul>
                <li><strong>No data showing</strong> - Check source report has data and user has access</li>
                <li><strong>Inconsistent data</strong> - Verify report filters and dashboard filters align</li>
                <li><strong>Slow loading</strong> - Simplify underlying reports, reduce components</li>
                <li><strong>Wrong user seeing data</strong> - Check running user setting</li>
                <li><strong>Filter not working</strong> - Verify field exists in source report</li>
              </ul>

              <h3>11.2 Debugging Steps</h3>
              <ol>
                <li>Open the underlying report and verify it has data</li>
                <li>Run the report as the dashboard running user</li>
                <li>Check component settings in Dashboard Builder</li>
                <li>Review dashboard folder sharing settings</li>
                <li>Test dashboard with a user who has full access</li>
              </ol>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on Dashboards, you learned:</p>
              <ul>
                <li>Dashboards visualize report data in a consolidated view</li>
                <li>Component types: Charts, Tables, Metrics, Gauges, and Rich Text</li>
                <li>Step-by-step process to create dashboards in Lightning Experience</li>
                <li>Dashboard and component-level filtering capabilities</li>
                <li>Layout principles and best practices for dashboard design</li>
                <li>Folder management and sharing settings</li>
                <li>Design best practices for different business scenarios</li>
                <li>Dynamic dashboards and personalization options</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to Analytics to learn about Salesforce's advanced 
                analytics capabilities including Einstein Analytics and Tableau.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/admin-path/report-types.html" className="nav-link">← Report Types</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/admin-path/analytics.html" className="nav-link">Analytics →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}