import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'
import CodeBlock from '../../components/content/CodeBlock'

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

export default function JSController() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/js-controller.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'JavaScript Controller' }
          ]} />
          <article className="lesson-content">
            <h1>JavaScript Controller in LWC</h1>
            <p className="lesson-intro">Learn how to write JavaScript logic for Lightning Web Components.</p>

            <section>
              <h2>Component Class Structure</h2>
              <p>Every LWC JavaScript file extends <code>LightningElement</code>:</p>
              <CodeBlock language="javascript" code={`import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    // Properties
    greeting = 'Hello World';
    count = 0;
    
    // Methods
    handleClick() {
        this.count++;
    }
}`} />
            </section>

            <section>
              <h2>Properties and Fields</h2>
              <p>Define reactive properties using class properties:</p>
              <CodeBlock language="javascript" code={`import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    // Simple property
    message = 'Welcome';
    
    // Array
    items = ['Item 1', 'Item 2', 'Item 3'];
    
    // Object
    account = {
        name: 'Acme Corp',
        industry: 'Technology'
    };
}`} />
            </section>

            <section>
              <h2>Methods and Event Handlers</h2>
              <p>Create methods to handle user interactions:</p>
              <CodeBlock language="javascript" code={`import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    handleButtonClick(event) {
        console.log('Button clicked!');
        console.log('Event:', event.target.label);
    }
    
    handleInputChange(event) {
        const value = event.target.value;
        console.log('Input value:', value);
    }
}`} />
            </section>

            <section>
              <h2>Getters</h2>
              <p>Use getters to compute values:</p>
              <CodeBlock language="javascript" code={`import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    firstName = 'John';
    lastName = 'Doe';
    
    // Computed property
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    
    // Conditional getter
    get isVIP() {
        return this.orderTotal > 1000;
    }
}`} />
            </section>

            <section>
              <h2>Lifecycle Hooks</h2>
              <p>Use lifecycle methods to execute code at different stages:</p>
              <CodeBlock language="javascript" code={`import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    // Called when component is inserted in DOM
    connectedCallback() {
        console.log('Component mounted');
    }
    
    // Called when component is removed from DOM
    disconnectedCallback() {
        console.log('Component unmounted');
    }
    
    // Called when a public property changes
    @api
    recordId;
    
    // Called after every render
    renderedCallback() {
        console.log('Component rendered');
    }
    
    // Called when error occurs
    errorCallback(error, stack) {
        console.error('Error:', error);
    }
}`} />
            </section>

            <section>
              <h2>Public Properties with @api</h2>
              <p>Use <code>@api</code> to make properties public:</p>
              <CodeBlock language="javascript" code={`import { LightningElement, api } from 'lwc';

export default class MyComponent extends LightningElement {
    // Public property - can be set from parent
    @api recordId;
    
    @api
    title = 'Default Title';
    
    // Public method
    @api
    handleReset() {
        this.value = '';
    }
}`} />
            </section>

            <section>
              <h2>Tracking Changes with @track</h2>
              <p>Use <code>@track</code> to make nested objects reactive:</p>
              <CodeBlock language="javascript" code={`import { LightningElement, track } from 'lwc';

export default class MyComponent extends LightningElement {
    // For primitives, @track is not needed
    simpleValue = 'Hello';
    
    // For nested objects, use @track
    @track
    account = {
        name: 'Acme',
        industry: 'Tech'
    };
    
    updateAccount() {
        // This will trigger re-render
        this.account.name = 'New Name';
    }
}`} />
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Extend LightningElement for component logic</li>
                <li>Use @api for public properties</li>
                <li>Use @track for reactive nested objects</li>
                <li>Use lifecycle hooks for initialization/cleanup</li>
                <li>Getters compute values from properties</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/html-templates.html" className="nav-link">← HTML Templates</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/wire-service.html" className="nav-link">Wire Service →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}