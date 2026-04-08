import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'
import CodeBlock from '../../components/content/CodeBlock'

const developerSidebarModules = [
  { id: 1, title: '1. Apex Fundamentals', lessons: [
    { id: 'dev-1-1', title: 'Getting Started with Apex', slug: '/developer-path/apex-introduction.html' },
    { id: 'dev-1-2', title: 'Data Types & Variables', slug: '/developer-path/data-types.html' },
    { id: 'dev-1-3', title: 'Classes & Methods', slug: '/developer-path/classes-methods.html' },
    { id: 'dev-1-4', title: 'Collections', slug: '/developer-path/collections.html' },
  ]},
  { id: 2, title: '2. SOQL & SOSL', lessons: [
    { id: 'dev-2-1', title: 'SOQL Basics', slug: '/developer-path/soql-basics.html' },
    { id: 'dev-2-2', title: 'Relationship Queries', slug: '/developer-path/relationship-queries.html' },
    { id: 'dev-2-3', title: 'SOSL Search', slug: '/developer-path/sosl-search.html' },
  ]},
  { id: 3, title: '3. Triggers', lessons: [
    { id: 'dev-3-1', title: 'Trigger Basics', slug: '/developer-path/trigger-basics.html' },
    { id: 'dev-3-2', title: 'Trigger Context Variables', slug: '/developer-path/context-variables.html' },
    { id: 'dev-3-3', title: 'Trigger Best Practices', slug: '/developer-path/trigger-best-practices.html' },
  ]},
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
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/lwc-overview.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'LWC Overview' }
          ]} />
          <article className="lesson-content">
            <h1>Lightning Web Components: Complete Guide</h1>
            <p className="lesson-intro">
              Lightning Web Components (LWC) is Salesforce's modern, standards-based framework for building 
              custom user interfaces. This comprehensive guide covers the architecture, component model, 
              development workflow, and best practices for creating enterprise-grade Lightning components.
            </p>

            <section>
              <h2>1. Understanding Lightning Web Components</h2>
              <p>Lightning Web Components are built on web standards - standard HTML, CSS, and JavaScript - 
              with Salesforce-specific enhancements for working within the Lightning platform.</p>

              <h3>1.1 Why LWC?</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Web Standards</strong></td>
                      <td>Uses native DOM APIs, ES6+, standard web components</td>
                    </tr>
                    <tr>
                      <td><strong>Performance</strong></td>
                      <td>Lightweight, fast rendering with Shadow DOM</td>
                    </tr>
                    <tr>
                      <td><strong>Reusability</strong></td>
                      <td>Share components across projects and AppExchange</td>
                    </tr>
                    <tr>
                      <td><strong>Modern Development</strong></td>
                      <td>IDE support, modular architecture, easy testing</td>
                    </tr>
                    <tr>
                      <td><strong>Base Components</strong></td>
                      <td>70+ ready-to-use UI components from Salesforce</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>1.2 LWC vs Aura Components</h3>
              <p>Salesforce originally had Aura components. LWC is the modern replacement:</p>
              <CodeBlock language="javascript" code={`// Aura Components (Legacy)
// Component: myAuraComponent.cmp
<aura:component>
    <aura:attribute name="message" type="String" default="Hello"/>
    <p>{!v.message}</p>
    <button onclick="{!c.handleClick}">Click</button>
</aura:component>

// Lightning Web Components (Modern)
// Template: myLwcComponent.html
<template>
    <p>{message}</p>
    <lightning-button label="Click" onclick={handleClick}></lightning-button>
</template>

// Controller: myLwcComponent.js
import { LightningElement } from 'lwc';

export default class MyLwcComponent extends LightningElement {
    message = 'Hello';
    
    handleClick() {
        this.message = 'World';
    }
}`} />

              <div className="info-box">
                <h4>💡 Recommendation</h4>
                <p>Always choose Lightning Web Components for new development. Aura is in maintenance 
                mode and won't receive new features.</p>
              </div>
            </section>

            <section>
              <h2>2. Component Architecture</h2>
              <p>Each LWC consists of several files working together:</p>

              <h3>2.1 Required Files</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>File</th>
                      <th>Purpose</th>
                      <th>Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>.html</td>
                      <td>Template defining the component's UI</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>.js</td>
                      <td>Component logic and behavior</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>.js-meta.xml</td>
                      <td>Metadata configuration</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>.css</td>
                      <td>Component-specific styles</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>.svg</td>
                      <td>Custom SVG icon</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2.2 Component Folder Structure</h3>
              <CodeBlock language="text" code={`lwc/
└── myComponent/
    ├── myComponent.html       # Template (required)
    ├── myComponent.js         # Controller (required)
    ├── myComponent.css        # Styles (optional)
    ├── myComponent.svg       # Icon (optional)
    └── myComponent.js-meta.xml # Configuration (required)`} />
            </section>

            <section>
              <h2>3. Creating Your First Component</h2>
              
              <h3>3.1 HTML Template</h3>
              <CodeBlock language="html" code={`<!-- helloWorld.html -->
<template>
    <lightning-card title="Hello World" icon-name="standard:account">
        <div class="slds-p-around_medium">
            <p>Welcome to Lightning Web Components!</p>
            
            <lightning-input 
                label="Enter your name" 
                value={greeting}
                onchange={handleGreetingChange}>
            </lightning-input>
            
            <p class="slds-m-top_medium">
                Hello, {greeting}!
            </p>
            
            <lightning-button 
                label="Say Hello" 
                variant="brand"
                onclick={handleClick}>
            </lightning-button>
        </div>
    </lightning-card>
</template>`} />

              <h3>3.2 JavaScript Controller</h3>
              <CodeBlock language="javascript" code={`// helloWorld.js
import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'World';
    
    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }
    
    handleClick() {
        console.log('Hello, ' + this.greeting + '!');
    }
}`} />

              <h3>3.3 Metadata Configuration</h3>
              <CodeBlock language="xml" code={`<!-- helloWorld.js-meta.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>58.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
    </targets>
    <targetConfigs>
        <targetConfig targets="lightning__RecordPage">
            <objects>
                <object>Account</object>
            </objects>
        </targetConfig>
    </targetConfigs>
</LightningComponentBundle>`} />
            </section>

            <section>
              <h2>4. Component Properties and Data Flow</h2>
              
              <h3>4.1 Public Properties with @api</h3>
              <CodeBlock language="javascript" code={`// Properties exposed to parent components
import { LightningElement, api } from 'lwc';

export default class AccountCard extends LightningElement {
    // Public property - can be set by parent
    @api accountName;
    
    @api accountIndustry;
    
    @api rating = 'Cold';  // Default value
    
    // Read-only public property
    @api get accountDescription() {
        return this.accountName + ' - ' + this.accountIndustry;
    }
}`} />

              <h3>4.2 Public Methods</h3>
              <CodeBlock language="javascript" code={`// Public methods callable by parent
import { LightningElement, api } from 'lwc';

export default class ModalComponent extends LightningElement {
    @api show() {
        // Show the modal
        this.template.querySelector('dialog').showModal();
    }
    
    @api hide() {
        // Hide the modal
        this.template.querySelector('dialog').close();
    }
    
    @api
    showWithMessage(message) {
        this.message = message;
        this.show();
    }
}`} />

              <h3>4.1 Parent to Child Communication</h3>
              <CodeBlock language="javascript" code={`// Parent component passing data to child
// Parent.html
<template>
    <c-child-component 
        account-name={accountName}
        account-industry="Technology"
        onchildclick={handleChildClick}>
    </c-child-component>
</template>

// Parent.js
import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    accountName = 'Acme Corp';
    
    handleChildClick(event) {
        console.log('Child clicked: ' + event.detail);
    }
}

// Child.js
import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api accountName;
    @api accountIndustry;
    
    handleClick() {
        // Dispatch custom event to parent
        const event = new CustomEvent('childclick', {
            detail: this.accountName
        });
        this.dispatchEvent(event);
    }
}`} />
            </section>

            <section>
              <h2>5. Salesforce Base Components</h2>
              <p>LWC includes 70+ base components for common UI patterns:</p>

              <h3>5.1 Input Components</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>lightning-input</td>
                      <td>Text, number, email, password inputs</td>
                    </tr>
                    <tr>
                      <td>lightning-textarea</td>
                      <td>Multi-line text input</td>
                    </tr>
                    <tr>
                      <td>lightning-combobox</td>
                      <td>Dropdown with search</td>
                    </tr>
                    <tr>
                      <td>lightning-checkbox</td>
                      <td>Checkbox input</td>
                    </tr>
                    <tr>
                      <td>lightning-radio-group</td>
                      <td>Radio button group</td>
                    </tr>
                    <tr>
                      <td>lightning-datepicker</td>
                      <td>Date selection</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>5.2 Display Components</h3>
              <CodeBlock language="html" code={`<!-- Display components example -->
<template>
    <lightning-card title="Display Components">
        
        <!-- Data display -->
        <lightning-formatted-text value="Formatted text"></lightning-formatted-text>
        <lightning-formatted-number value="12345"></lightning-formatted-number>
        <lightning-formatted-date-time value={dateValue}></lightning-formatted-date-time>
        
        <!-- Visual indicators -->
        <lightning-progress-bar value="75"></lightning-progress-bar>
        <lightning-progress-step label="Step 1" value="1"></lightning-progress-step>
        
        <!-- Icons -->
        <lightning-icon icon-name="standard:account" alternative-text="Account"></lightning-icon>
        
        <!-- Badges -->
        <lightning-badge label="New"></lightning-badge>
        
    </lightning-card>
</template>`} />

              <h3>5.3 Layout Components</h3>
              <CodeBlock language="html" code={`<!-- Layout components -->
<template>
    <!-- Grid layout -->
    <div class="slds-grid slds-gutters">
        <div class="slds-col">
            <span>Column 1</span>
        </div>
        <div class="slds-col">
            <span>Column 2</span>
        </div>
    </div>
    
    <!-- Card -->
    <lightning-card>
        <span slot="title">Card Title</span>
        <p>Card content</p>
        <p slot="footer">Card footer</p>
    </lightning-card>
    
    <!-- Modal -->
    <lightning-modal>
        <lightning-modal-header>Modal Title</lightning-modal-header>
        <lightning-modal-body>Content</lightning-modal-body>
        <lightning-modal-footer>Footer</lightning-modal-footer>
    </lightning-modal>
</template>`} />
            </section>

            <section>
              <h2>6. Lifecycle Hooks</h2>
              <p>Components have lifecycle methods called at different stages:</p>

              <h3>6.1 Lifecycle Sequence</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Hook</th>
                      <th>When Called</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>constructor()</td>
                      <td>When component is created</td>
                    </tr>
                    <tr>
                      <td>connectedCallback()</td>
                      <td>When added to DOM</td>
                    </tr>
                    <tr>
                      <td>renderedCallback()</td>
                      <td>After rendering completes</td>
                    </tr>
                    <tr>
                      <td>disconnectedCallback()</td>
                      <td>When removed from DOM</td>
                    </tr>
                    <tr>
                      <td>errorCallback()</td>
                      <td>When child component has error</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>6.2 Lifecycle Example</h3>
              <CodeBlock language="javascript" code={`import { LightningElement } from 'lwc';

export default class LifecycleExample extends LightningElement {
    
    constructor() {
        super();
        console.log('Constructor called');
    }
    
    connectedCallback() {
        console.log('Component added to DOM');
        // Fetch initial data
        this.fetchData();
    }
    
    renderedCallback() {
        console.log('Rendering complete');
    }
    
    disconnectedCallback() {
        console.log('Component removed from DOM');
        // Cleanup
    }
    
    errorCallback(error, stack) {
        console.error('Error in component:', error);
    }
    
    fetchData() {
        // Initial data loading
    }
}`} />
            </section>

            <section>
              <h2>7. Component Communication Patterns</h2>
              
              <h3>7.1 Using Events</h3>
              <CodeBlock language="javascript" code={`// Dispatch custom event
const event = new CustomEvent('search', {
    detail: { searchTerm: this.searchTerm },
    bubbles: true,       // Bubbles up through DOM
    composed: true      // Crosses shadow DOM boundary
});
this.dispatchEvent(event);

// Handle in parent
handleSearch(event) {
    const { searchTerm } = event.detail;
    // Process search
}`} />

              <h3>7.2 Using Pub/Sub</h3>
              <CodeBlock language="javascript" code={`// pubsub.js - Event bus
const eventMap = {};

export function subscribe(eventName, callback) {
    if (!eventMap[eventName]) {
        eventMap[eventName] = [];
    }
    eventMap[eventName].push(callback);
}

export function publish(eventName, payload) {
    if (eventMap[eventName]) {
        eventMap[eventName].forEach(callback => callback(payload));
    }
}

// Component A publishes
import { publish } from 'c/pubsub';
publish('recordChange', { id: '123', action: 'update' });

// Component B subscribes
import { subscribe } from 'c/pubsub';
connectedCallback() {
    subscribe('recordChange', this.handleRecordChange);
}`} />
            </section>

            <section>
              <h2>8. Deployment and Development</h2>
              
              <h3>8.1 Using Salesforce CLI</h3>
              <CodeBlock language="bash" code={`# Create new component
sf generate lightning component --type lwc -n myComponent

# Deploy to org
sf project deploy start -d force-app/main/default/lwc/myComponent

# Retrieve from org
sf project retrieve start -m lightning-component-bundle:myComponent

# Run tests
sf apex run test -n myComponentTest`} />

              <h3>8.2 VS Code Setup</h3>
              <ol>
                <li>Install Salesforce Extension Pack in VS Code</li>
                <li>Install Salesforce CLI</li>
                <li>Authorize your org: <code>sf org login web</code></li>
                <li>Create project: <code>sf project init</code></li>
                <li>Develop and deploy</li>
              </ol>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on Lightning Web Components, you learned:</p>
              <ul>
                <li>What Lightning Web Components are and why they're preferred over Aura</li>
                <li>Component file structure: .html, .js, .js-meta.xml</li>
                <li>Creating your first component with properties</li>
                <li>Salesforce base components for UI development</li>
                <li>Component lifecycle hooks</li>
                <li>Communication patterns: events, pub/sub</li>
                <li>Deployment and development workflow</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to HTML Templates to learn about template syntax, 
                directives, and conditional rendering in LWC.
              </p>
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