import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const blogs = [
  { title: 'What is Dynamic Forms in Salesforce', date: '2026-04-14', category: 'Admin', excerpt: 'Show fields conditionally with Dynamic Forms feature.', readTime: '7 min read', slug: '/what-is-dynamic-forms-in-salesforce.html' },
  { title: 'Task in Salesforce', date: '2026-04-13', category: 'Admin', excerpt: 'Track day-to-day activities with tasks and events.', readTime: '6 min read', slug: '/what-is-task-in-salesforce.html' },
  { title: 'Field Level Security in Salesforce', date: '2026-04-13', category: 'Admin', excerpt: 'Control field visibility at the profile level with field level security.', readTime: '6 min read', slug: '/what-is-field-level-security-salesforce.html' },
  { title: 'Process Builder in Salesforce', date: '2026-04-13', category: 'Admin', excerpt: 'Build complex automation with Process Builder visual interface.', readTime: '9 min read', slug: '/what-is-process-builder-salesforce.html' },
  { title: 'Workflow Rules in Salesforce', date: '2026-04-12', category: 'Admin', excerpt: 'Automate processes with workflow rules and email alerts.', readTime: '8 min read', slug: '/what-is-workflows-salesforce.html' },
  { title: 'Record Types in Salesforce', date: '2026-04-12', category: 'Admin', excerpt: 'Create different business processes with record types and page layouts.', readTime: '8 min read', slug: '/what-is-record-types-salesforce.html' },
  { title: 'Validation Rules in Salesforce', date: '2026-04-12', category: 'Admin', excerpt: 'Ensure data quality with validation rules and custom formulas.', readTime: '8 min read', slug: '/what-is-validation-rules-salesforce.html' },
  { title: 'Dynamic Dashboard in Salesforce', date: '2026-04-11', category: 'Admin', excerpt: 'Create personalized dashboards based on user roles and permissions.', readTime: '7 min read', slug: '/what-is-dynamic-dashboard-in-salesforce.html' },
  { title: 'Dashboards in Salesforce', date: '2026-04-11', category: 'Admin', excerpt: 'Visualize your data with interactive dashboards and charts.', readTime: '8 min read', slug: '/what-is-dashboards-in-salesforce.html' },
  { title: 'Reports in Salesforce', date: '2026-04-11', category: 'Admin', excerpt: 'Create and customize reports to analyze your data effectively.', readTime: '8 min read', slug: '/what-is-reports-in-salesforce.html' },
  { title: 'Dependent Picklist in Salesforce', date: '2026-04-10', category: 'Admin', excerpt: 'Create dynamic picklist values that depend on other field selections.', readTime: '7 min read', slug: '/dependent-picklist-in-salesforce.html' },
  { title: 'Master-Detail Relationship in Salesforce', date: '2026-04-10', category: 'Admin', excerpt: 'Learn about tightly coupled relationships and roll-up summary fields.', readTime: '8 min read', slug: '/master-detail-relationship-in-salesforce.html' },
  { title: 'Lookup Relationship in Salesforce', date: '2026-04-10', category: 'Admin', excerpt: 'Understand lookup relationships and when to use them for linking objects.', readTime: '8 min read', slug: '/lookup-relationship-in-salesforce.html' },
  { title: 'What is Sharing Rules in Salesforce', date: '2026-04-10', category: 'Admin', excerpt: 'Learn how to extend data access beyond the role hierarchy using sharing rules.', readTime: '7 min read', slug: '/what-is-sharing-rules-in-salesforce.html' },
  { title: 'What is OWD in Salesforce', date: '2026-04-10', category: 'Admin', excerpt: 'Understand Organization-Wide Default settings and how they control data access across your org.', readTime: '6 min read', slug: '/what-is-owd-in-salesforce.html' },
  { title: 'Salesforce Simplified Chrome Extension', date: '2026-04-09', category: 'Tools', excerpt: 'A cleaner, simplified interface for Salesforce users.', readTime: '5 min read', slug: '/salesforce-simplified-chrome-extension.html' },
  { title: 'Force.com Logins Chrome Extension', date: '2026-04-09', category: 'Tools', excerpt: 'Easily manage multiple Salesforce org credentials with Force.com Logins extension.', readTime: '6 min read', slug: '/force-com-logins-chrome-extension.html' },
  { title: 'Salesforce Lightning Interview Questions', date: '2026-04-09', category: 'Interview', excerpt: 'Top Salesforce Lightning interview questions and answers.', readTime: '10 min read', slug: '/salesforce-lightning-interview-questions.html' },
  { title: 'How to Install Salesforce DX', date: '2026-04-09', category: 'Developer', excerpt: 'Step-by-step guide to installing Salesforce CLI for Salesforce DX development.', readTime: '8 min read', slug: '/how-to-install-salesforce-dx.html' },
  { title: 'Lightning Bundle in Salesforce', date: '2026-04-09', category: 'Lightning', excerpt: 'Understanding Lightning Component Bundle - the collection of resources.', readTime: '7 min read', slug: '/lightning-bundle-in-salesforce-lightning.html' },
  { title: 'Salesforce Integration Interview Questions', date: '2026-04-08', category: 'Interview', excerpt: 'Top integration interview questions and answers for Salesforce developers.', readTime: '12 min read', slug: '/salesforce-integration-interview-questions.html' },
  { title: 'How to Reset Security Token', date: '2026-04-08', category: 'Security', excerpt: 'Reset your security token when you need to access Salesforce via API.', readTime: '5 min read', slug: '/how-to-reset-security-token-salesforce.html' },
  { title: 'Salesforce DX Commands List', date: '2026-04-08', category: 'Developer', excerpt: 'Essential Salesforce CLI commands for developers working with Salesforce DX.', readTime: '10 min read', slug: '/salesforce-dx-commands-list.html' },
  { title: 'Difference Between Freeze and Deactivate', date: '2026-04-07', category: 'Admin', excerpt: 'Understanding when to freeze vs deactivate user accounts in Salesforce.', readTime: '6 min read', slug: '/difference-between-freeze-deactivate-salesforce.html' },
  { title: 'What is What ID in Salesforce', date: '2026-04-07', category: 'Admin', excerpt: 'Understanding the What ID - the identifier for object-related records.', readTime: '5 min read', slug: '/what-is-what-id-salesforce.html' },
  { title: 'What is Who ID in Salesforce', date: '2026-04-07', category: 'Admin', excerpt: 'Understanding the Who ID - the identifier for people-related records.', readTime: '5 min read', slug: '/what-is-who-id-salesforce.html' },
  { title: 'How to Track Login History', date: '2026-04-06', category: 'Admin', excerpt: 'Monitor user login activity for security and compliance.', readTime: '6 min read', slug: '/how-to-track-login-history-salesforce.html' },
  { title: 'Field Tracking History in Salesforce', date: '2026-04-06', category: 'Admin', excerpt: 'Track changes to specific fields over time for audit and compliance.', readTime: '7 min read', slug: '/what-is-field-tracking-history-salesforce.html' },
  { title: 'Custom Buttons in Salesforce', date: '2026-04-06', category: 'Admin', excerpt: 'Custom Buttons provide quick actions to streamline user workflows.', readTime: '6 min read', slug: '/what-is-custom-buttons-salesforce.html' },
  { title: 'Lookup Filters in Salesforce', date: '2026-04-05', category: 'Admin', excerpt: 'Lookup Filters control which records appear in lookup fields.', readTime: '6 min read', slug: '/what-is-lookup-filters-salesforce.html' },
  { title: 'Scoping Rules in Salesforce', date: '2026-04-05', category: 'Admin', excerpt: 'Scoping Rules define a subset of data visible to specific users.', readTime: '6 min read', slug: '/what-is-scoping-rules-salesforce.html' },
  { title: 'Storage Usage in Salesforce', date: '2026-04-05', category: 'Admin', excerpt: 'Understanding how Salesforce stores data and managing storage.', readTime: '6 min read', slug: '/what-is-storage-usage-salesforce.html' },
  { title: 'Mail Merge Templates in Salesforce', date: '2026-04-04', category: 'Admin', excerpt: 'Mail Merge Templates for creating personalized documents.', readTime: '6 min read', slug: '/mail-merge-templates-salesforce.html' },
  { title: 'Lightning Email Templates', date: '2026-04-04', category: 'Admin', excerpt: 'Lightning Email Templates provide a modern way to create emails.', readTime: '6 min read', slug: '/lightning-email-templates-salesforce.html' },
  { title: 'Bucketing Reports in Salesforce', date: '2026-04-04', category: 'Admin', excerpt: 'Bucketing Reports group records into ranges for better analysis.', readTime: '6 min read', slug: '/what-is-bucketing-reports-in-salesforce.html' },
  { title: 'Event in Salesforce', date: '2026-04-03', category: 'Admin', excerpt: 'Events in Salesforce represent time-based activities.', readTime: '6 min read', slug: '/what-is-event-salesforce.html' },
  { title: 'Custom Links in Salesforce', date: '2026-04-03', category: 'Admin', excerpt: 'Custom Links in Salesforce are user-defined links.', readTime: '6 min read', slug: '/what-is-custom-links-salesforce.html' },
  { title: 'Dynamic Forms in Salesforce', date: '2026-04-03', category: 'Admin', excerpt: 'Show fields conditionally with Dynamic Forms feature.', readTime: '7 min read', slug: '/what-is-dynamic-forms-in-salesforce.html' },
  { title: 'How to Create Tabs in Salesforce', date: '2026-04-02', category: 'Admin', excerpt: 'Tabs in Salesforce provide navigation to different areas.', readTime: '6 min read', slug: '/how-to-create-tabs-salesforce.html' },
  { title: 'Search Layouts in Salesforce', date: '2026-04-02', category: 'Admin', excerpt: 'Search Layouts control what fields appear in search results.', readTime: '6 min read', slug: '/what-is-search-layouts-salesforce.html' },
  { title: 'Compact Layout in Salesforce', date: '2026-04-02', category: 'Admin', excerpt: 'Compact Layout controls how records appear in mobile app.', readTime: '6 min read', slug: '/what-is-compact-layout-salesforce.html' },
  { title: 'Self Relationship in Salesforce', date: '2026-04-01', category: 'Admin', excerpt: 'A lookup relationship that links an object to itself.', readTime: '6 min read', slug: '/self-relationship-in-salesforce.html' },
  { title: 'Junction Relationship in Salesforce', date: '2026-04-01', category: 'Admin', excerpt: 'Handle many-to-many relationships using a junction object.', readTime: '7 min read', slug: '/junction-relationship-in-salesforce.html' },
  { title: 'Email Alerts in Salesforce', date: '2026-04-01', category: 'Admin', excerpt: 'Automated messages sent to users triggered by specific events.', readTime: '7 min read', slug: '/what-is-email-alerts-in-salesforce.html' },
  { title: 'Certification Guide: Which One to Choose?', date: '2026-03-01', category: 'Career', excerpt: 'Navigate the Salesforce certification landscape and choose the right path.', readTime: '9 min read', slug: '/blogs/certification-guide.html' },
  { title: 'Lightning Web Components: From Zero to Hero', date: '2026-03-20', category: 'Developer', excerpt: 'Build modern, responsive UI components with LWC.', readTime: '15 min read', slug: '/blogs/lwc-tutorial.html' },
  { title: 'Salesforce Security: Protecting Your Org', date: '2026-03-25', category: 'Admin', excerpt: 'Essential security practices every Salesforce administrator needs.', readTime: '10 min read', slug: '/blogs/salesforce-security-guide.html' },
  { title: 'Apex Best Practices: Writing Clean, Efficient Code', date: '2026-03-28', category: 'Developer', excerpt: 'Learn how to write Apex code that follows best practices.', readTime: '12 min read', slug: '/blogs/apex-best-practices.html' },
  { title: 'Getting Started with Salesforce: A Complete Guide', date: '2026-04-01', category: 'Beginner', excerpt: 'Everything you need to know to start your Salesforce journey.', readTime: '8 min read', slug: '/blogs/getting-started-salesforce.html' },
]

const categories = ['All', 'Admin', 'Developer', 'Lightning', 'Security', 'Career', 'Tools', 'Interview']

const BLOGS_PER_PAGE = 12

export default function Blogs() {
  const [filter, setFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  
  const filteredBlogs = filter === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === filter)
  
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE)
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + BLOGS_PER_PAGE)
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage, filter])
  
  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Salesforce Blog</h1>
          <p className="section-subtitle">
            Insights, tutorials, and best practices from the Salesforce community.
            Learn from real-world experiences and expert guidance.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
          {categories.map((category) => (
            <button 
              key={category}
              className={`btn ${filter === category ? 'btn-primary' : 'btn-secondary'} btn-sm`}
              style={{ borderRadius: 'var(--radius-full)' }}
              onClick={() => { setFilter(category); setCurrentPage(1); }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="cards-grid">
          {paginatedBlogs.map((blog, i) => (
            <div className="path-card" key={i}>
              <div className="path-card-header">
                <span className="blog-category">{blog.category}</span>
              </div>
              <h3 className="path-card-title">{blog.title}</h3>
              <p className="card-desc">{blog.excerpt}</p>
              <div className="blog-meta">
                <span className="blog-date">{blog.date}</span>
                <span className="blog-read-time">{blog.readTime}</span>
              </div>
              <Link to={blog.slug} className="card-link">
                Read Article →
              </Link>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '48px' }}>
            <button 
              className="btn btn-secondary btn-sm"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              ← Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button 
                key={page}
                className={`btn ${currentPage === page ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            <button 
              className="btn btn-secondary btn-sm"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next →
            </button>
          </div>
        )}

        <div style={{ marginTop: '64px', padding: '48px', background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px', fontSize: '24px' }}>Join Our Community</h2>
          <p style={{ marginBottom: '24px', color: 'var(--color-text-muted)' }}>
            Follow our learning paths, practice in a free Developer Edition org, and earn your Salesforce certification.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admin-path.html" className="btn btn-primary">Start Admin Path</Link>
            <Link to="/developer-path.html" className="btn btn-secondary">Start Developer Path</Link>
          </div>
        </div>
      </div>
    </section>
  )
}