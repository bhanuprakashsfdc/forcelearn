import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import AdminPath from './pages/admin/AdminPath'
import DeveloperPath from './pages/developer/DeveloperPath'
import ArchitectPath from './pages/architect/ArchitectPath'
import LessonPage from './pages/admin/LessonPage'
import CRMConcepts from './pages/admin/CRMConcepts'
import NavigationSetup from './pages/admin/NavigationSetup'
import StandardObjects from './pages/admin/StandardObjects'
import CustomObjects from './pages/admin/CustomObjects'
import FieldTypes from './pages/admin/FieldTypes'
import Relationships from './pages/admin/Relationships'
import ImportExport from './pages/admin/ImportExport'
import DataLoader from './pages/admin/DataLoader'
import ValidationRules from './pages/admin/ValidationRules'
import FlowBuilder from './pages/admin/FlowBuilder'
import ProcessBuilder from './pages/admin/ProcessBuilder'
import ApprovalProcesses from './pages/admin/ApprovalProcesses'
import SharingSettings from './pages/admin/SharingSettings'
import ProfilesPermissions from './pages/admin/ProfilesPermissions'
import FieldLevelSecurity from './pages/admin/FieldLevelSecurity'
import ReportTypes from './pages/admin/ReportTypes'
import Dashboards from './pages/admin/Dashboards'
import Analytics from './pages/admin/Analytics'
import ApexIntroduction from './pages/developer/ApexIntroduction'
import DataTypes from './pages/developer/DataTypes'
import ClassesMethods from './pages/developer/ClassesMethods'
import Collections from './pages/developer/Collections'
import SOQLBasics from './pages/developer/SOQLBasics'
import RelationshipQueries from './pages/developer/RelationshipQueries'
import SOSLSearch from './pages/developer/SOSLSearch'
import TriggerBasics from './pages/developer/TriggerBasics'
import TriggerContextVariables from './pages/developer/TriggerContextVariables'
import TriggerBestPractices from './pages/developer/TriggerBestPractices'
import LWCOverview from './pages/developer/LWCOverview'
import HTMLTemplates from './pages/developer/HTMLTemplates'
import JSController from './pages/developer/JSController'
import WireService from './pages/developer/WireService'
import RESTAPI from './pages/developer/RESTAPI'
import OAuth from './pages/developer/OAuth'
import Webhooks from './pages/developer/Webhooks'
import ArchitectureOverview from './pages/architect/ArchitectureOverview'
import DomainModeling from './pages/architect/DomainModeling'
import DesignPatterns from './pages/architect/DesignPatterns'
import SchemaDesign from './pages/architect/SchemaDesign'
import StorageOptimization from './pages/architect/StorageOptimization'
import BigObjects from './pages/architect/BigObjects'
import MuleSoftBasics from './pages/architect/MuleSoftBasics'
import APIDesign from './pages/architect/APIDesign'
import EventDriven from './pages/architect/EventDriven'
import IdentityManagement from './pages/architect/IdentityManagement'
import SSOImplementation from './pages/architect/SSOImplementation'
import DataProtection from './pages/architect/DataProtection'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin-path.html" element={<AdminPath />} />
            <Route path="/admin-path/salesforce-basics.html" element={<LessonPage />} />
            <Route path="/admin-path/crm-concepts.html" element={<CRMConcepts />} />
            <Route path="/admin-path/navigation-setup.html" element={<NavigationSetup />} />
            <Route path="/admin-path/standard-objects.html" element={<StandardObjects />} />
            <Route path="/admin-path/custom-objects.html" element={<CustomObjects />} />
            <Route path="/admin-path/field-types.html" element={<FieldTypes />} />
            <Route path="/admin-path/relationships.html" element={<Relationships />} />
            <Route path="/admin-path/import-export.html" element={<ImportExport />} />
            <Route path="/admin-path/data-loader.html" element={<DataLoader />} />
            <Route path="/admin-path/validation-rules.html" element={<ValidationRules />} />
            <Route path="/admin-path/flow-builder.html" element={<FlowBuilder />} />
            <Route path="/admin-path/process-builder.html" element={<ProcessBuilder />} />
            <Route path="/admin-path/approval-processes.html" element={<ApprovalProcesses />} />
            <Route path="/admin-path/sharing-settings.html" element={<SharingSettings />} />
            <Route path="/admin-path/profiles-permissions.html" element={<ProfilesPermissions />} />
            <Route path="/admin-path/field-level-security.html" element={<FieldLevelSecurity />} />
            <Route path="/admin-path/report-types.html" element={<ReportTypes />} />
            <Route path="/admin-path/dashboards.html" element={<Dashboards />} />
            <Route path="/admin-path/analytics.html" element={<Analytics />} />
            <Route path="/developer-path.html" element={<DeveloperPath />} />
            <Route path="/developer-path/apex-introduction.html" element={<ApexIntroduction />} />
            <Route path="/developer-path/data-types.html" element={<DataTypes />} />
            <Route path="/developer-path/classes-methods.html" element={<ClassesMethods />} />
            <Route path="/developer-path/collections.html" element={<Collections />} />
            <Route path="/developer-path/soql-basics.html" element={<SOQLBasics />} />
            <Route path="/developer-path/relationship-queries.html" element={<RelationshipQueries />} />
            <Route path="/developer-path/sosl-search.html" element={<SOSLSearch />} />
            <Route path="/developer-path/trigger-basics.html" element={<TriggerBasics />} />
            <Route path="/developer-path/context-variables.html" element={<TriggerContextVariables />} />
            <Route path="/developer-path/trigger-best-practices.html" element={<TriggerBestPractices />} />
            <Route path="/developer-path/lwc-overview.html" element={<LWCOverview />} />
            <Route path="/developer-path/html-templates.html" element={<HTMLTemplates />} />
            <Route path="/developer-path/js-controller.html" element={<JSController />} />
            <Route path="/developer-path/wire-service.html" element={<WireService />} />
            <Route path="/developer-path/rest-api.html" element={<RESTAPI />} />
            <Route path="/developer-path/oauth.html" element={<OAuth />} />
            <Route path="/developer-path/webhooks.html" element={<Webhooks />} />
            <Route path="/architect-path.html" element={<ArchitectPath />} />
            <Route path="/architect-path/architecture-overview.html" element={<ArchitectureOverview />} />
            <Route path="/architect-path/domain-modeling.html" element={<DomainModeling />} />
            <Route path="/architect-path/design-patterns.html" element={<DesignPatterns />} />
            <Route path="/architect-path/schema-design.html" element={<SchemaDesign />} />
            <Route path="/architect-path/storage-optimization.html" element={<StorageOptimization />} />
            <Route path="/architect-path/big-objects.html" element={<BigObjects />} />
            <Route path="/architect-path/mulesoft-basics.html" element={<MuleSoftBasics />} />
            <Route path="/architect-path/api-design.html" element={<APIDesign />} />
            <Route path="/architect-path/event-driven.html" element={<EventDriven />} />
            <Route path="/architect-path/identity-management.html" element={<IdentityManagement />} />
            <Route path="/architect-path/sso-implementation.html" element={<SSOImplementation />} />
            <Route path="/architect-path/data-protection.html" element={<DataProtection />} />
            <Route path="/clouds.html" element={<CloudsPage />} />
            <Route path="/blogs.html" element={<BlogsPage />} />
            <Route path="/projects.html" element={<ProjectsPage />} />
            <Route path="/roadmap.html" element={<RoadmapPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

function CloudsPage() {
  const clouds = [
    { name: 'Sales Cloud', desc: 'Manage sales processes, leads, opportunities, and customer relationships.', icon: '💼', modules: ['Lead Management', 'Opportunity Management', 'Account Management'] },
    { name: 'Service Cloud', desc: 'Deliver exceptional customer service across any channel.', icon: '🎧', modules: ['Case Management', 'Service Console', 'Knowledge Base'] },
    { name: 'Marketing Cloud', desc: 'Create personalized customer journeys across all marketing channels.', icon: '📢', modules: ['Email Marketing', 'Social Marketing', 'Journey Builder'] },
    { name: 'Commerce Cloud', desc: 'Build seamless e-commerce experiences for B2B and B2C.', icon: '🛒', modules: ['Storefront', 'Order Management', 'Inventory'] },
    { name: 'Experience Cloud', desc: 'Create branded digital experiences for customers, partners, and employees.', icon: '🌐', modules: ['Community Builder', 'Lightning Bolts', 'Content Management'] },
    { name: 'Data Cloud', desc: 'Unify customer data from all sources for actionable insights.', icon: '📊', modules: ['Data Ingestion', 'Identity Resolution', 'Segmentation'] },
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Salesforce Clouds</h1>
          <p className="section-subtitle">Explore the different Salesforce clouds and their capabilities.</p>
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
                {cloud.modules.map((m, j) => <span key={j} className="badge">{m}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogsPage() {
  const blogs = [
    { title: 'Getting Started with Salesforce', date: '2024-01-15', category: 'Beginner', excerpt: 'Everything you need to know to start your Salesforce journey.', readTime: '5 min read' },
    { title: 'Apex Best Practices', date: '2024-02-01', category: 'Developer', excerpt: 'Write clean, efficient Apex code with these best practices.', readTime: '8 min read' },
    { title: 'Salesforce Security Guide', date: '2024-02-15', category: 'Admin', excerpt: 'Keep your Salesforce org secure with these essential tips.', readTime: '6 min read' },
    { title: 'Lightning Web Components Tutorial', date: '2024-03-01', category: 'Developer', excerpt: 'Build modern UI with LWC from scratch.', readTime: '10 min read' },
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Salesforce Blogs</h1>
          <p className="section-subtitle">Latest insights, tutorials, and tips for Salesforce professionals.</p>
        </div>
        <div className="cards-grid">
          {blogs.map((blog, i) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsPage() {
  const projects = [
    { title: 'Lead Management App', desc: 'Build a complete lead management system with LWC', level: 'Beginner', icon: '📋' },
    { title: 'Case Management System', desc: 'Create a custom case management solution', level: 'Intermediate', icon: '🎫' },
    { title: 'Order Processing App', desc: 'Build order processing with Apex and LWC', level: 'Advanced', icon: '📦' },
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Salesforce Projects</h1>
          <p className="section-subtitle">Build real-world Salesforce applications to practice your skills.</p>
        </div>
        <div className="cards-grid">
          {projects.map((project, i) => (
            <div className="path-card" key={i}>
              <div className="path-card-header">
                <span className="path-card-icon">{project.icon}</span>
                <h3 className="path-card-title">{project.title}</h3>
              </div>
              <p className="card-desc">{project.desc}</p>
              <span className="badge">{project.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RoadmapPage() {
  const steps = [
    { phase: 'Phase 1', title: 'Salesforce Basics', duration: '2 weeks', topics: ['CRM Concepts', 'Platform Navigation', 'Setup Menu'] },
    { phase: 'Phase 2', title: 'Admin Fundamentals', duration: '4 weeks', topics: ['Objects & Fields', 'Data Management', 'Security'] },
    { phase: 'Phase 3', title: 'Automation', duration: '3 weeks', topics: ['Flow Builder', 'Process Builder', 'Apex'] },
    { phase: 'Phase 4', title: 'Developer Path', duration: '8 weeks', topics: ['Apex', 'LWC', 'Integration'] },
    { phase: 'Phase 5', title: 'Architect Path', duration: '12 weeks', topics: ['System Design', 'Data Architecture', 'Security'] },
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Your Salesforce Roadmap</h1>
          <p className="section-subtitle">Follow this structured path to become a Salesforce professional.</p>
        </div>
        <div className="roadmap-steps" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          {steps.map((step, i) => (
            <div key={i} className="roadmap-step" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '20px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '12px' }}>
                <span style={{ fontWeight: 600 }}>{step.phase}: {step.title}</span>
                <span style={{ color: 'var(--color-text-muted)' }}>{step.duration}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {step.topics.map((t, j) => <span key={j} className="badge">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}