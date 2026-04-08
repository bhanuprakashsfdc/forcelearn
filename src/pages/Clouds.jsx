import { Link } from 'react-router-dom'

const clouds = [
  { 
    name: 'Sales Cloud', 
    desc: 'Manage sales processes, leads, opportunities, and customer relationships.', 
    icon: '💼', 
    modules: ['Lead Management', 'Opportunity Management', 'Account Management', 'Contact Management', 'Forecasting'] 
  },
  { 
    name: 'Service Cloud', 
    desc: 'Deliver exceptional customer service across any channel.', 
    icon: '🎧', 
    modules: ['Case Management', 'Service Console', 'Knowledge Base', 'Omni-Channel', 'Field Service'] 
  },
  { 
    name: 'Marketing Cloud', 
    desc: 'Create personalized customer journeys across all marketing channels.', 
    icon: '📢', 
    modules: ['Email Marketing', 'Social Marketing', 'Journey Builder', 'Advertising Studio', 'Pardot'] 
  },
  { 
    name: 'Commerce Cloud', 
    desc: 'Build seamless e-commerce experiences for B2B and B2C.', 
    icon: '🛒', 
    modules: ['Storefront', 'Order Management', 'Inventory', 'Product Catalog', 'Payments'] 
  },
  { 
    name: 'Experience Cloud', 
    desc: 'Create branded digital experiences for customers, partners, and employees.', 
    icon: '🌐', 
    modules: ['Community Builder', 'Lightning Bolts', 'Content Management', 'Partner Portal', 'Customer Portal'] 
  },
  { 
    name: 'Data Cloud', 
    desc: 'Unify customer data from all sources for actionable insights.', 
    icon: '📊', 
    modules: ['Data Ingestion', 'Identity Resolution', 'Segmentation', 'Analytics', 'AI Insights'] 
  },
  { 
    name: 'Platform', 
    desc: 'Build custom apps and extend Salesforce with code and low-code tools.', 
    icon: '🔧', 
    modules: ['App Builder', 'Flow Automation', 'Apex Development', 'LWC Components', 'Integration'] 
  },
  { 
    name: 'Tableau', 
    desc: 'Transform data into actionable insights with powerful visualizations.', 
    icon: '📈', 
    modules: ['Data Visualization', 'Dashboards', 'Data Prep', 'Analytics', 'Storytelling'] 
  },
  { 
    name: 'MuleSoft', 
    desc: 'Connect any system, data, or device with API-led integration.', 
    icon: '🔗', 
    modules: ['Anypoint Platform', 'API Design', 'Integration Patterns', 'DataWeave', 'Runtime Manager'] 
  }
]

export default function Clouds() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Salesforce Clouds</h1>
          <p className="section-subtitle">
            Explore the different Salesforce clouds and their capabilities. 
            Each cloud is designed to solve specific business challenges.
          </p>
        </div>
          <div className="cards-grid">
            {clouds.map((cloud, i) => (
              <div className="path-card" key={i}>
                <div className="path-card-header">
                  <span className="path-card-icon">{cloud.icon}</span>
                  <h3 className="path-card-title">{cloud.name}</h3>
                </div>
                <p className="card-desc">{cloud.desc}</p>
                <div className="path-card-modules">
                  {cloud.modules.map((m, j) => (
                    <span key={j} className="badge">{m}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
         
        <div style={{ textAlign: 'center', marginTop: '48px'}}>
          <p style={{ marginBottom: '16px', color: 'var(--color-text-secondary)'}}>
            Learn more about each cloud in our comprehensive learning paths.
          </p>
          <Link to="/roadmap.html" className="btn btn-primary">
            View Learning Roadmap
          </Link>
        </div>
      </div>
    </section>
  )
}