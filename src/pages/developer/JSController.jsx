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
            <h1>JavaScript Controller in LWC: Complete Developer Guide</h1>
            <p className="lesson-intro">
              The JavaScript controller is the heart of every Lightning Web Component. This comprehensive
              guide covers component architecture, reactive properties, lifecycle hooks, decorators, and
              communication patterns needed to build enterprise-grade LWC applications.
            </p>

            <section>
              <h2>1. Component Architecture</h2>
              <p>Every LWC JavaScript file defines a component class that extends LightningElement. This
              provides the foundation for reactive rendering and component lifecycle management.</p>

              <h3>1.1 LightningElement Base Class</h3>
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
                      <td><strong>Reactive Rendering</strong></td>
                      <td>UI automatically updates when properties change</td>
                    </tr>
                    <tr>
                      <td><strong>Shadow DOM</strong></td>
                      <td>Styles are encapsulated within the component</td>
                    </tr>
                    <tr>
                      <td><strong>Event System</strong></td>
                      <td>Built-in support for custom events</td>
                    </tr>
                    <tr>
                      <td><strong>Template Access</strong></td>
                      <td>Query and manipulate template elements</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>2. Properties and Fields</h2>
              <p>Properties are the reactive data stores in your component. When properties change, the template
              automatically re-renders to reflect the new values.</p>

              <h3>2.1 Property Declaration</h3>
              <CodeBlock language="javascript" code={`import { LightningElement } from 'lwc';

export default class PropertyDemo extends LightningElement {
    // Primitive types - automatically reactive
    message = 'Welcome';
    count = 0;
    isActive = true;
    price = 99.99;
    
    // Arrays - automatically reactive
    items = ['Item 1', 'Item 2', 'Item 3'];
    
    // Objects - needs @track for deep reactivity
    account = {
        name: 'Acme Corp',
        industry: 'Technology',
        rating: 'Hot'
    };
}`} />

              <h3>2.2 Property Initialization Patterns</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Pattern</th>
                      <th>Example</th>
                      <th>Reactivity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Inline Initialize</strong></td>
                      <td>count = 0</td>
                      <td>Automatic</td>
                    </tr>
                    <tr>
                      <td><strong>Constructor Init</strong></td>
                      <td>constructor() { this.items = [] }</td>
                      <td>Automatic</td>
                    </tr>
                    <tr>
                      <td><strong>Lazy Init (getter)</strong></td>
                      <td>get data() &#123; return this._data &#125;</td>
                      <td>On access</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>3. Methods and Event Handlers</h2>
              <p>Methods are the functions that define component behavior. They're called from the template
              via event handlers or can be invoked by parent components.</p>

              <h3>3.1 Basic Method Definition</h3>
              <CodeBlock language="javascript" code={`import { LightningElement } from 'lwc';

export default class MethodDemo extends LightningElement {
    handleButtonClick(event) {
        console.log('Button clicked!');
        console.log('Event target:', event.target.label);
    }
    
    handleInputChange(event) {
        const value = event.target.value;
        console.log('Input value:', value);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log('Form submitted');
    }
}`} />

              <h3>3.2 Method Parameters</h3>
              <CodeBlock language="javascript" code={`import { LightningElement } from 'lwc';

export default class ParameterDemo extends LightningElement {
    // Method with parameters
    calculateTotal(price, quantity) {
        return price * quantity;
    }
    
    // Using parameters in template
    handleAddToCart(product) {
        const total = this.calculateTotal(product.price, product.quantity);
        console.log('Total:', total);
    }
    
    // Method returning values
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }
}`} />
            </section>

            <section>
              <h2>4. Getters</h2>
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