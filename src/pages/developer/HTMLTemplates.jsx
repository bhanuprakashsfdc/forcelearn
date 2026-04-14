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
            <h1>HTML Templates in LWC: Complete Template Guide</h1>
            <p className="lesson-intro">
              Lightning Web Components use a powerful template syntax that enables conditional rendering,
              iteration, and event handling. This comprehensive guide covers all aspects of LWC templates
              including template directives, data binding, conditional rendering, and iteration patterns.
            </p>

            <section>
              <h2>1. Template Fundamentals</h2>
              <p>LWC templates use the HTML template element as the root container. Unlike standard HTML,
              LWC templates support special directives for dynamic behavior and can reference JavaScript
              properties directly.</p>

              <h3>1.1 Template Structure</h3>
              <CodeBlock language="html" code={`<!-- myComponent.html -->
<template>
    <!-- All template content goes here -->
    <div class="container">
        <h1>Welcome to LWC Templates</h1>
        <p>This is the template root element</p>
    </div>
</template>`} />

              <h3>1.2 Template Tag Requirements</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Requirement</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Single Root</strong></td>
                      <td>Template must have one root element</td>
                      <td>Use wrapper div or slot</td>
                    </tr>
                    <tr>
                      <td><strong>Lowercase Tags</strong></td>
                      <td>All tags must be lowercase</td>
                      <td>&lt;lightning-button&gt; not &lt;lightning-Button&gt;</td>
                    </tr>
                    <tr>
                      <td><strong>Closed Tags</strong></td>
                      <td>All tags must be properly closed</td>
                      <td>&lt;img /&gt; for self-closing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>2. Data Binding</h2>
              <p>Data binding allows you to display JavaScript property values in your template and
              respond to user interactions.</p>

              <h3>2.1 Property Binding</h3>
              <CodeBlock language="html" code={`<!-- template.html -->
<template>
    <!-- Simple property binding -->
    <p>Hello, {greeting}!</p>
    
    <!-- Binding to computed values via getter -->
    <p>Full Name: {fullName}</p>
    
    <!-- Binding to object properties -->
    <p>Account Name: {account.name}</p>
    
    <!-- Binding to nested object properties -->
    <p>City: {account.address.city}</p>
</template>`} />

              <CodeBlock language="javascript" code={`// template.js
import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    greeting = 'World';
    
    // Getter for computed values
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    
    // Object binding
    account = {
        name: 'Acme Corp',
        address: {
            city: 'San Francisco',
            state: 'CA'
        }
    };
}`} />

              <h3>2.2 HTML vs Property Interpolation</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Syntax</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Text Interpolation</strong></td>
                      <td>{'{property}'}</td>
                      <td>Display text content</td>
                    </tr>
                    <tr>
                      <td><strong>Attribute Binding</strong></td>
                      <td>{'property={value}'}</td>
                      <td>Set HTML attributes</td>
                    </tr>
                    <tr>
                      <td><strong>Boolean Attributes</strong></td>
                      <td>{'disabled={isDisabled}'}</td>
                      <td>Toggle boolean attributes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2.3 Attribute Binding Examples</h3>
              <CodeBlock language="html" code={`<!-- template.html -->
<template>
    <!-- String attribute binding -->
    <input type="text" value={inputValue} />
    
    <!-- Class binding -->
    <div class={dynamicClass}>Dynamic Class</div>
    
    <!-- Style binding -->
    <div style={dynamicStyle}>Dynamic Style</div>
    
    <!-- Boolean attribute binding -->
    <button disabled={isDisabled}>Click Me</button>
    
    <!-- Data attribute binding -->
    <div data-id={recordId}>Record ID: {recordId}</div>
</template>`} />

              <CodeBlock language="javascript" code={`// template.js
import { LightningElement } from 'lwc';

export default class AttributeBinding extends LightningElement {
    inputValue = 'Default Text';
    dynamicClass = 'slds-box slds-theme_default';
    dynamicStyle = 'color: blue; font-size: 16px;';
    isDisabled = false;
    recordId = '001ABC123';
}`} />
            </section>

            <section>
              <h2>3. Conditional Rendering</h2>
              <p>LWC provides two directives for conditional rendering: if:true and if:false. These
              directives control whether elements are rendered in the DOM.</p>

              <h3>3.1 Basic Conditional Rendering</h3>
              <CodeBlock language="html" code={`<!-- template.html -->
<template>
    <!-- Show element when isVisible is true -->
    <p if:true={isVisible}>This text is visible</p>
    
    <!-- Hide element when isVisible is false -->
    <p if:false={isVisible}>This text is hidden</p>
    
    <!-- Toggle between two elements -->
    <p if:true={isLoggedIn}>Welcome back, {userName}!</p>
    <p if:false={isLoggedIn}>Please log in to continue</p>
</template>`} />

              <CodeBlock language="javascript" code={`// template.js
import { LightningElement } from 'lwc';

export default class ConditionalDemo extends LightningElement {
    isVisible = true;
    isLoggedIn = false;
    userName = 'John';
}`} />
            </section>

            <section>
              <h2>4. Template Conditionals vs Showing/Hiding</h2>
              <p>Understanding when to use conditional rendering vs CSS visibility is crucial for performance.</p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Use Case</th>
                      <th>Performance Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>if:true/if:false</strong></td>
                      <td>Content changes rarely, affects layout</td>
                      <td>Removes from DOM - lower memory</td>
                    </tr>
                    <tr>
                      <td><strong>CSS display:none</strong></td>
                      <td>Content toggles frequently</td>
                      <td>Keeps in DOM - faster toggles</td>
                    </tr>
                    <tr>
                      <td><strong>CSS visibility:hidden</strong></td>
                      <td>Reserve space in layout</td>
                      <td>Keeps in DOM - maintains layout</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>5. Iteration with for:each</h2>
              <p>The for:each directive iterates over an array and renders the template for each item.</p>

              <h3>5.1 Basic Iteration</h3>
              <CodeBlock language="html" code={`<!-- template.html -->
<template>
    <ul>
        <template for:each={items} for:item="item">
            <li key={item.id}>{item.name}</li>
        </template>
    </ul>
</template>`} />

              <CodeBlock language="javascript" code={`// template.js
import { LightningElement } from 'lwc';

export default class IterationDemo extends LightningElement {
    items = [
        { id: '1', name: 'Apple' },
        { id: '2', name: 'Banana' },
        { id: '3', name: 'Cherry' }
    ];
}`} />

              <h3>5.2 Iteration with Index</h3>
              <CodeBlock language="html" code={`<!-- template.html -->
<template>
    <ul>
        <template for:each={contacts} for:item="contact" for:index="index">
            <li key={contact.id}>
                {index + 1}. {contact.name} - {contact.email}
            </li>
        </template>
    </ul>
</template>`} />
            </section>

            <section>
              <h2>6. Iterator Directive: iterator</h2>
              <p>The iterator directive provides additional control over iteration with access to first, last, and index properties.</p>

              <h3>6.1 Using iterator:it</h3>
              <CodeBlock language="html" code={`<!-- template.html -->
<template>
    <div class="contact-list">
        <template iterator:it={contacts}>
            <div key={it.value.id} class:list-item={it.first ? 'first-item' : ''}>
                <p if:true={it.first}>First Contact:</p>
                <p>{it.value.name}</p>
                <p if:true={it.last}>Last Contact!</p>
            </div>
        </template>
    </div>
</template>`} />

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>it.value</strong></td>
                      <td>The current item in iteration</td>
                    </tr>
                    <tr>
                      <td><strong>it.index</strong></td>
                      <td>Zero-based index of current item</td>
                    </tr>
                    <tr>
                      <td><strong>it.first</strong></td>
                      <td>True if this is the first item</td>
                    </tr>
                    <tr>
                      <td><strong>it.last</strong></td>
                      <td>True if this is the last item</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>7. Event Handling</h2>
              <p>LWC templates use standard HTML event attributes with JavaScript handler references.</p>

              <h3>7.1 Basic Event Handling</h3>
              <CodeBlock language="html" code={`<!-- template.html -->
<template>
    <lightning-button label="Click Me" onclick={handleClick}></lightning-button>
    
    <lightning-input 
        label="Enter Text" 
        onchange={handleInputChange}>
    </lightning-input>
    
    <input 
        type="text" 
        oninput={handleInput} 
        onblur={handleBlur} />
</template>`} />

              <CodeBlock language="javascript" code={`// template.js
import { LightningElement } from 'lwc';

export default class EventDemo extends LightningElement {
    handleClick(event) {
        console.log('Button clicked!');
        console.log('Event target:', event.target.label);
    }
    
    handleInputChange(event) {
        const value = event.detail.value;
        console.log('Input changed:', value);
    }
    
    handleInput(event) {
        console.log('Input value:', event.target.value);
    }
    
    handleBlur(event) {
        console.log('Input blurred');
    }
}`} />

              <h3>7.2 Event Bubbling</h3>
              <CodeBlock language="html" code={`<!-- template.html -->
<template>
    <div onclick={handleParentClick}>
        <button onclick={handleButtonClick}>Click Me</button>
    </div>
</template>`} />

              <CodeBlock language="javascript" code={`// template.js
import { LightningElement } from 'lwc';

export default class EventBubbling extends LightningElement {
    handleButtonClick(event) {
        console.log('Button clicked');
        event.stopPropagation();
    }
    
    handleParentClick(event) {
        console.log('Parent div clicked');
    }
}`} />
            </section>

            <section>
              <h2>8. Lightning Base Components</h2>
              <p>Salesforce provides 70+ base components that follow Lightning Design System patterns.</p>

              <h3>8.1 Input Components</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Tag</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Input</td>
                      <td>lightning-input</td>
                      <td>Text, number, email, checkbox</td>
                    </tr>
                    <tr>
                      <td>Textarea</td>
                      <td>lightning-textarea</td>
                      <td>Multi-line text input</td>
                    </tr>
                    <tr>
                      <td>Combobox</td>
                      <td>lightning-combobox</td>
                      <td>Dropdown with search</td>
                    </tr>
                    <tr>
                      <td>Checkbox Group</td>
                      <td>lightning-checkbox-group</td>
                      <td>Multiple checkbox selection</td>
                    </tr>
                    <tr>
                      <td>Radio Group</td>
                      <td>lightning-radio-group</td>
                      <td>Single selection from options</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>8.2 Display Components</h3>
              <CodeBlock language="html" code={`<!-- template.html -->
<template>
    <lightning-card title="Account Details">
        
        <!-- Formatted output -->
        <lightning-formatted-text value="Some text"></lightning-formatted-text>
        <lightning-formatted-number value={amount}></lightning-formatted-number>
        <lightning-formatted-date-time value={dateValue}></lightning-formatted-date-time>
        
        <!-- Visual components -->
        <lightning-icon icon-name="standard:account" alternative-text="Account"></lightning-icon>
        <lightning-badge label="New"></lightning-badge>
        <lightning-progress-bar value="75"></lightning-progress-bar>
        
    </lightning-card>
</template>`} />

              <h3>8.3 Layout Components</h3>
              <CodeBlock language="html" code={`<!-- template.html -->
<template>
    <!-- Card with sections -->
    <lightning-card title="My Card" icon-name="standard:account">
        <lightning-button slot="actions" label="New"></lightning-button>
        
        <div class="slds-p-horizontal_medium">
            <p>Card content goes here</p>
        </div>
        
        <p slot="footer">Card Footer</p>
    </lightning-card>
    
    <!-- Modal -->
    <lightning-modal open={showModal}>
        <lightning-modal-header>Modal Title</lightning-modal-header>
        <lightning-modal-body>Content here</lightning-modal-body>
        <lightning-modal-footer>Footer</lightning-modal-footer>
    </lightning-modal>
</template>`} />
            </section>

            <section>
              <h2>9. Slots and Composition</h2>
              <p>Slots enable component composition by allowing parent components to pass content into child components.</p>

              <h3>9.1 Named Slots</h3>
              <CodeBlock language="html" code={`<!-- childComponent.html -->
<template>
    <div class="card">
        <header class="card-header">
            <slot name="header">Default Header</slot>
        </header>
        <div class="card-body">
            <slot></slot>
        </div>
        <footer class="card-footer">
            <slot name="footer">Default Footer</slot>
        </footer>
    </div>
</template>`} />

              <CodeBlock language="html" code={`<!-- parentComponent.html -->
<template>
    <c-child-component>
        <span slot="header">Custom Header</span>
        
        <p>This goes into the default slot</p>
        
        <button slot="footer">Action Button</button>
    </c-child-component>
</template>`} />

              <h3>9.2 Slot Attributes</h3>
              <CodeBlock language="html" code={`<!-- childComponent.html -->
<template>
    <div class="wrapper">
        <slot name="header" slot-attribute="header-slot"></slot>
        <slot></slot>
    </div>
</template>`} />
            </section>

            <section>
              <h2>10. Conditional Classes and Styles</h2>
              <p>Apply dynamic classes and styles based on component state.</p>

              <h3>10.1 Dynamic Class Binding</h3>
              <CodeBlock language="html" code={`<!-- template.html -->
<template>
    <!-- Boolean class toggle -->
    <div class={containerClass}>
        Content
    </div>
    
    <!-- Class list with conditional -->
    <div class={computedClass}>
        Computed classes
    </div>
</template>`} />

              <CodeBlock language="javascript" code={`// template.js
import { LightningElement } from 'lwc';

export default class DynamicClasses extends LightningElement {
    isActive = true;
    isHighlighted = false;
    
    get containerClass() {
        return this.isActive ? 'active-container' : 'inactive-container';
    }
    
    get computedClass() {
        const classes = ['base-class'];
        if (this.isActive) classes.push('active');
        if (this.isHighlighted) classes.push('highlighted');
        return classes.join(' ');
    }
}`} />

              <h3>10.2 Dynamic Style Binding</h3>
              <CodeBlock language="html" code={`<!-- template.html -->
<template>
    <div style={dynamicStyles}>Dynamic Style</div>
</template>`} />

              <CodeBlock language="javascript" code={`// template.js
import { LightningElement } from 'lwc';

export default class DynamicStyles extends LightningElement {
    fontSize = '16px';
    backgroundColor = '#f0f0f0';
    
    get dynamicStyles() {
        return \`font-size: \${this.fontSize}; background-color: \${this.backgroundColor};\`;
    }
}`} />
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on LWC HTML Templates, you learned:</p>
              <ul>
                <li>Template fundamentals and structure requirements</li>
                <li>Data binding with property and attribute interpolation</li>
                <li>Conditional rendering with if:true and if:false directives</li>
                <li>Iteration with for:each and iterator directives</li>
                <li>Event handling and event bubbling</li>
                <li>Lightning base components for consistent UI</li>
                <li>Slots for component composition</li>
                <li>Dynamic classes and styles</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to JavaScript Controller to learn about component logic and
                the reactive system in LWC.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/lwc-overview..html" className="nav-link">← LWC Overview</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/js-controller.>" className="nav-link">JavaScript Controller →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}