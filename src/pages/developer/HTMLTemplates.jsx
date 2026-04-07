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

export default function HTMLTemplates() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/html-templates.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'HTML Templates' }
          ]} />
          <article className="lesson-content">
            <h1>HTML Templates in LWC</h1>
            <p className="lesson-intro">Learn how to create HTML templates for Lightning Web Components.</p>

            <section>
              <h2>Template Syntax</h2>
              <p>LWC uses <code>&lt;template&gt;</code> tag as the root element. It uses special directives for conditional rendering and iteration.</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`<template>
    <div>
        <!-- Content here -->
    </div>
</template>`}
              </pre>
            </section>

            <section>
              <h2>Displaying Data</h2>
              <p>Use curly braces <code>{'{property}'}</code> to display JavaScript values:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`<!-- In JavaScript, define: greeting = 'Hello World' -->
<template>
    <p>{greeting}</p>
    <p>Count: {count}</p>
</template>`}
              </pre>
            </section>

            <section>
              <h2>Conditional Rendering</h2>
              <p>Use <code>if:true</code> or <code>if:false</code> directives:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`<template>
    <p if:true={showMessage}>This is visible!</p>
    <p if:false={showMessage}>This is hidden!</p>
    
    <!-- Alternative with if:true -->
    <template if:true={isLoggedIn}>
        <p>Welcome back!</p>
    </template>
    <template if:false={isLoggedIn}>
        <p>Please log in.</p>
    </template>
</template>`}
              </pre>
            </section>

            <section>
              <h2>Looping with for:each</h2>
              <p>Use <code>for:each</code> to iterate over arrays:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`<template>
    <ul>
        <template for:each={items} for:item="item">
            <li key={item.id}>
                {item.name}
            </li>
        </template>
    </ul>
</template>`}
              </pre>
            </section>

            <section>
              <h2>Event Handling</h2>
              <p>Use <code>onclick</code>, <code>onchange</code>, etc. to handle events:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`<template>
    <lightning-button 
        label="Click Me" 
        onclick={handleClick}>
    </lightning-button>
    
    <input 
        type="text" 
        onchange={handleInputChange}>
</template>`}
              </pre>
            </section>

            <section>
              <h2>Lightning Base Components</h2>
              <p>Use Salesforce's base components for consistent UI:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`<template>
    <lightning-card title="My Card">
        <lightning-button label="Action"></lightning-button>
        <lightning-input label="Name"></lightning-input>
        <lightning-checkbox-label label="Option"></lightning-checkbox-label>
    </lightning-card>
</template>`}
              </pre>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Use &lt;template&gt; as root element</li>
                <li>Use {'{property}'} to display data</li>
                <li>Use if:true/if:false for conditional rendering</li>
                <li>Use for:each for iteration</li>
                <li>Use on* attributes for event handling</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/lwc-overview.html" className="nav-link">← LWC Overview</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/js-controller.html" className="nav-link">JavaScript Controller →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}