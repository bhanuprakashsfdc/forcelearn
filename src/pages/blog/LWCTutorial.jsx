import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'
import CodeBlock from '../../components/content/CodeBlock'

export default function LWCTutorial() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Lightning Web Components Tutorial' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Developer</span>
            <h1>Lightning Web Components: From Zero to Hero</h1>
            <p className="lesson-intro">
              Build modern, responsive UI components with LWC using this comprehensive tutorial. Learn the fundamentals and create your first component.
            </p>

            <section>
              <h2>What are Lightning Web Components?</h2>
              <p>Lightning Web Components (LWC) is Salesforce's modern framework for building custom user interfaces. It uses standard HTML, CSS, and JavaScript with Salesforce-specific enhancements.</p>

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
                      <td>Built on native DOM and ES6+ JavaScript</td>
                    </tr>
                    <tr>
                      <td><strong>Shadow DOM</strong></td>
                      <td>Style encapsulation</td>
                    </tr>
                    <tr>
                      <td><strong>Reactive</strong></td>
                      <td>Automatic UI updates on data change</td>
                    </tr>
                    <tr>
                      <td><strong>Lightning Design System</strong></td>
                      <td>Pre-built, accessible components</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Anatomy of an LWC</h2>
              <p>Each LWC consists of three files:</p>

              <h3>1. HTML Template</h3>
              <CodeBlock language="html" code={`<!-- myComponent.html -->
<template>
    <lightning-card title="My Component">
        <p>Hello, {message}!</p>
        <lightning-button label="Click Me" onclick={handleClick}></lightning-button>
    </lightning-card>
</template>`} />

              <h3>2. JavaScript Controller</h3>
              <CodeBlock language="javascript" code={`// myComponent.js
import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    message = 'World';
    
    handleClick() {
        this.message = 'Salesforce';
    }
}`} />

              <h3>3. CSS (Optional)</h3>
              <CodeBlock language="css" code={`/* myComponent.css */
:host {
    display: block;
}

p {
    font-size: 16px;
    color: #333;
}`} />
            </section>

            <section>
              <h2>Core Concepts</h2>

              <h3>1. Reactive Properties</h3>
              <p>When a property changes, the component re-renders automatically.</p>
              <CodeBlock language="javascript" code={`// Automatic re-render when 'count' changes
count = 0;

increment() {
    this.count++;
}`} />

              <h3>2. @track Decorator</h3>
              <p>Use @track for nested objects to enable deep reactivity.</p>
              <CodeBlock language="javascript" code={`import { LightningElement, track } from 'lwc';

export default class Example extends LightningElement {
    @track
    account = {
        name: 'Acme Corp',
        industry: 'Technology'
    };
    
    updateName() {
        this.account.name = 'New Name'; // Will trigger re-render
    }
}`} />

              <h3>3. @api Decorator</h3>
              <p>Expose properties to parent components.</p>
              <CodeBlock language="javascript" code={`import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api
    recordId;
    
    @api
    title = 'Default Title';
}`} />
            </section>

            <section>
              <h2>Using Base Components</h2>
              <p>Salesforce provides 70+ base components that follow Lightning Design System.</p>

              <CodeBlock language="html" code={`<template>
    <lightning-card title="Form Example">
        <lightning-input label="Name" value={name} onchange={handleNameChange}></lightning-input>
        <lightning-input type="email" label="Email" value={email}></lightning-input>
        <lightning-combobox label="Industry" value={industry} options={industryOptions}></lightning-combobox>
        <lightning-button label="Save" onclick={handleSave}></lightning-button>
    </lightning-card>
</template>`} />
            </section>

            <section>
              <h2>Wire Service</h2>
              <p>Wire service automatically provisions data to your component.</p>

              <CodeBlock language="javascript" code={`import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class AccountDisplay extends LightningElement {
    @wire(getRecord, { recordId: '001xx0000000000', fields: ['Account.Name'] })
    account;
    
    get name() {
        return this.account.data?.fields.Name.value;
    }
}`} />
            </section>

            <section>
              <h2>Calling Apex</h2>
              <p>Use Apex controllers for complex business logic.</p>

              <h3>Apex Controller</h3>
              <CodeBlock language="apex" code={`public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name FROM Account LIMIT 10];
    }
}`} />

              <h3>LWC Component</h3>
              <CodeBlock language="javascript" code={`import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AccountList extends LightningElement {
    @wire(getAccounts) accounts;
}`} />
            </section>

            <section>
              <h2>Event Handling</h2>
              <p>Components communicate via custom events.</p>

              <CodeBlock language="javascript" code={`// Dispatch custom event
const event = new CustomEvent('mycustomevent', {
    detail: { message: 'Hello from child' }
});
this.dispatchEvent(event);

// In parent component HTML
// <c-child-component onmycustomevent={handleEvent}></c-child-component>`} />
            </section>

            <section>
              <h2>Your First LWC</h2>
              <p>Create a simple "Hello World" component:</p>

              <ol>
                <li>In VS Code, right-click in the force-app folder</li>
                <li>Select <strong>Lightning Web Component</strong></li>
                <li>Enter name: <strong>helloWorld</strong></li>
                <li>Replace the files with the code above</li>
                <li>Deploy to your org (Right-click → Deploy)</li>
              </ol>

              <div className="info-box">
                <h4>🎯 Practice Exercise</h4>
                <p>Create a component that displays a list of contacts from your org using the Wire service!</p>
              </div>
            </section>

            <section>
              <h2>Summary</h2>
              <p>LWC is Salesforce's modern, standards-based UI framework. Key takeaways:</p>
              <ul>
                <li>Uses standard HTML, CSS, JavaScript</li>
                <li>@track for reactive properties, @api for public API</li>
                <li>Base components provide consistent UI</li>
                <li>Wire service connects to data</li>
              </ul>
              <p>Continue learning: <Link to="/developer-path/lwc-overview.html">LWC Overview</Link></p>
            </section>
          </article>
        </div>
      </main>
    </div>
  )
}
