import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'

const sidebarModules = [
  { id: 4, title: '4. Lightning Web Components', lessons: [
    { id: 'dev-4-1', title: 'LWC Overview', slug: '/developer-path/lwc-overview.html' },
    { id: 'dev-4-2', title: 'HTML Templates', slug: '/developer-path/html-templates.html' },
    { id: 'dev-4-3', title: 'JavaScript Controller', slug: '/developer-path/js-controller.html' },
    { id: 'dev-4-4', title: 'Wire Service', slug: '/developer-path/wire-service.html' },
  ]},
  { id: 5, title: '5. Integration', lessons: [
    { id: 'dev-5-1', title: 'REST API', slug: '/developer-path/rest-api.html' },
    { id: 'dev-5-2', title: 'OAuth 2.0', slug: '/developer-path/oauth.html' },
    { id: 'dev-5-3', title: 'Webhooks', slug: '/developer-path/webhooks.html' },
  ]}
]

export default function LWCOverview() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/lwc-overview.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'LWC Overview' }
          ]} />
          <article className="lesson-content">
            <h1>Lightning Web Components Overview</h1>
            <p className="lesson-intro">Learn the basics of Lightning Web Components (LWC) - Salesforce's modern framework for building UI.</p>

            <section>
              <h2>What are LWC?</h2>
              <p>Lightning Web Components (LWC) is a JavaScript framework for building enterprise applications on the Salesforce platform. It uses standard HTML, CSS, and JavaScript with some Salesforce-specific enhancements.</p>
            </section>

            <section>
              <h2>Component Structure</h2>
              <p>Each LWC consists of three core files:</p>
              <ul>
                <li><strong>.html</strong> - The template (HTML markup)</li>
                <li><strong>.js</strong> - The controller (JavaScript logic)</li>
                <li><strong>.js-meta.xml</strong> - Configuration metadata</li>
              </ul>
              <p>Optional files:</p>
              <ul>
                <li><strong>.css</strong> - Component-specific styles</li>
                <li><strong>.svg</strong> - Custom icons</li>
              </ul>
            </section>

            <section>
              <h2>Component Folder Structure</h2>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`myComponent/
├── myComponent.html      # Template
├── myComponent.js        # Controller
├── myComponent.css       # Styles
├── myComponent.js-meta.xml  # Metadata`}
              </pre>
            </section>

            <section>
              <h2>Hello World Component</h2>
              <p><strong>myComponent.html:</strong></p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`<template>
    <lightning-card title="Hello World">
        <p>Welcome to Lightning Web Components!</p>
    </lightning-card>
</template>`}
              </pre>

              <p><strong>myComponent.js:</strong></p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    
}`}
              </pre>

              <p><strong>myComponent.js-meta.xml:</strong></p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>58.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
    </targets>
</LightningComponentBundle>`}
              </pre>
            </section>

            <section>
              <h2>Salesforce UI Components</h2>
              <p>LWC provides base components for building UI:</p>
              <ul>
                <li><strong>lightning-card</strong> - Container with title</li>
                <li><strong>lightning-button</strong> - Interactive button</li>
                <li><strong>lightning-input</strong> - Form input field</li>
                <li><strong>lightning-datatable</strong> - Data table</li>
                <li><strong>lightning-modal</strong> - Modal dialog</li>
                <li><strong>lightning-tab</strong> - Tab navigation</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>LWC uses standard HTML, CSS, JavaScript</li>
                <li>Each component has .html, .js, and .js-meta.xml files</li>
                <li>Salesforce provides base UI components</li>
                <li>Components are deployed to Salesforce orgs</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/trigger-best-practices.html" className="nav-link">← Trigger Best Practices</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/html-templates.html" className="nav-link">HTML Templates →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}