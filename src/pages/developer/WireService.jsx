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

export default function WireService() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/wire-service.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'Wire Service' }
          ]} />
          <article className="lesson-content">
            <h1>Wire Service in LWC</h1>
            <p className="lesson-intro">Learn how to use the @wire decorator to fetch data in Lightning Web Components.</p>

            <section>
              <h2>What is Wire Service?</h2>
              <p>The Wire Service is a reactive data service that automatically provisions data to your component when the underlying data changes. It uses the <code>@wire</code> decorator.</p>
            </section>

            <section>
              <h2>Wire to Lightning Data Service</h2>
              <p>Use @wire with standard Lightning UI APIs:</p>
              <CodeBlock language="javascript" code={`import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class AccountDisplay extends LightningElement {
    @wire(getRecord, { recordId: '001xxxxxxxxxxxxxxx', fields: ['Account.Name', 'Account.Industry'] })
    account;
    
    get name() {
        return this.account.data ? this.account.data.fields.Name.value : '';
    }
}`} />

              <p>HTML:</p>
              <CodeBlock language="html" code={`<template>
    <lightning-card title="Account Details">
        <p if:true={account.data}>
            Name: {name}
        </p>
    </lightning-card>
</template>`} />
            </section>

            <section>
              <h2>Wire to Apex Methods</h2>
              <p>Call Apex methods using @wire:</p>
              <CodeBlock language="javascript" code={`import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AccountList extends LightningElement {
    @wire(getAccounts)
    accounts;
    
    // Or with parameters
    @wire(getAccounts, { industry: 'Technology' })
    techAccounts;
}`} />

              <p>Apex Controller:</p>
              <CodeBlock language="apex" code={`public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Industry FROM Account LIMIT 10];
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsByIndustry(String industry) {
        return [SELECT Id, Name FROM Account WHERE Industry = :industry];
    }
}`} />
            </section>

            <section>
              <h2>Handling Wire Errors</h2>
              <CodeBlock language="javascript" code={`import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AccountList extends LightningElement {
    @wire(getAccounts)
    accounts;
    
    get error() {
        return this.accounts.error;
    }
    
    get hasError() {
        return this.accounts.error ? true : false;
    }
}`} />

              <p>In HTML:</p>
              <CodeBlock language="html" code={`<template>
    <template if:true={hasError}>
        <p class="error">Error: {error.body.message}</p>
    </template>
</template>`} />
            </section>

            <section>
              <h2>Using Wire Adapters</h2>
              <p>Wire adapters are functions that retrieve data. Salesforce provides built-in adapters:</p>
              <ul>
                <li><strong>getRecord</strong> - Single record</li>
                <li><strong>getRecords</strong> - Multiple records</li>
                <li><strong>getListUi</strong> - List view data</li>
                <li><strong>getPicklistValues</strong> - Picklist options</li>
                <li><strong>getObjectInfo</strong> - Object metadata</li>
              </ul>
            </section>

            <section>
              <h2>Wiring a Property vs Method</h2>
              <p>You can wire to a property or a method:</p>
              <CodeBlock language="javascript" code={`// Wire to property - data is stored in property
@wire(getAccounts)
accounts;

// Wire to method - get full control over data processing
@wire(getAccounts)
wiredAccounts({ error, data }) {
    if (data) {
        // Custom processing
        this.filteredAccounts = data.filter(acc => acc.Industry === 'Tech');
    } else if (error) {
        this.error = error;
    }
}`} />
            </section>

            <section>
              <h2>Imperative Apex Calls</h2>
              <p>For more control, call Apex imperatively:</p>
              <CodeBlock language="javascript" code={`import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AccountSearch extends LightningElement {
    searchTerm = '';
    
    handleSearch() {
        getAccounts({ searchTerm: this.searchTerm })
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}`} />
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Use @wire for reactive data fetching</li>
                <li>Wire to LDS (Lightning Data Service) or Apex</li>
                <li>Handle errors with .error property</li>
                <li>Use method form for custom processing</li>
                <li>Use imperative calls when needed</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/js-controller.html" className="nav-link">← JavaScript Controller</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/rest-api.html" className="nav-link">REST API →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}