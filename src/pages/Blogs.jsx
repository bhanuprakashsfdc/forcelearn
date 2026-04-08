import { Link } from 'react-router-dom'
import { useState } from 'react'

const blogs = [ 
  { 
    title: 'Getting Started with Salesforce: A Complete Guide', 
    date: '2026-04-01', 
    category: 'Beginner', 
    excerpt: 'Everything you need to know to start your Salesforce journey, from signing up to your first configuration.', 
    readTime: '8 min read',
    slug: '/blogs/getting-started-salesforce.html'
  },
  { 
    title: 'Apex Best Practices: Writing Clean, Efficient Code', 
    date: '2026-03-28', 
    category: 'Developer', 
    excerpt: 'Learn how to write Apex code that follows Salesforce best practices and avoids common pitfalls.', 
    readTime: '12 min read',
    slug: '/blogs/apex-best-practices.html'
  },
  { 
    title: 'Salesforce Security: Protecting Your Org', 
    date: '2026-03-25', 
    category: 'Admin', 
    excerpt: 'Essential security practices every Salesforce administrator needs to implement to keep data safe.', 
    readTime: '10 min read',
    slug: '/blogs/salesforce-security-guide.html'
  },
  { 
    title: 'Lightning Web Components: From Zero to Hero', 
    date: '2026-03-20', 
    category: 'Developer', 
    excerpt: 'Build modern, responsive UI components with LWC using this comprehensive tutorial.', 
    readTime: '15 min read',
    slug: '/blogs/lwc-tutorial.html'
  },
  { 
    title: 'Certification Guide: Which One to Choose?', 
    date: '2026-03-01', 
    category: 'Career', 
    excerpt: 'Navigate the Salesforce certification landscape and choose the right path for your career.', 
    readTime: '9 min read',
    slug: '/blogs/certification-guide.html'
  },
]

const categories = ['All', 'Beginner', 'Admin', 'Developer', 'Architect', 'Career']

export default function Blogs() {
  const [filter, setFilter] = useState('All')
  
  const filteredBlogs = filter === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === filter)

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

        {/* Category Filter */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          marginBottom: '48px' 
        }}>
          {categories.map((category, i) => (
            <button 
              key={i}
              className={`btn ${filter === category ? 'btn-primary' : 'btn-secondary'} btn-sm`}
              style={{ borderRadius: 'var(--radius-full)' }}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="cards-grid">
          {filteredBlogs.map((blog, i) => (
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

        {/* CTA */}
        <div style={{ 
          marginTop: '64px', 
          padding: '48px', 
          background: 'var(--color-surface)', 
          borderRadius: 'var(--radius-xl)', 
          textAlign: 'center' 
        }}>
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