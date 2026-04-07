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

export default function RESTAPI() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/rest-api.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'REST API' }
          ]} />
          <article className="lesson-content">
            <h1>Salesforce REST API</h1>
            <p className="lesson-intro">Learn how to use the Salesforce REST API to integrate with external systems.</p>

            <section>
              <h2>What is REST API?</h2>
              <p>The Salesforce REST API provides a powerful, convenient way to interact with Salesforce data. It uses HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations.</p>
            </section>

            <section>
              <h2>Base URL</h2>
              <CodeBlock language="text" code={`Base URL: https://yourinstance.salesforce.com/services/data/v58.0/

Common endpoints:
- /sobjects/ - List all objects
- /sobjects/Account - Account sObject operations
- /query/ - Run SOQL queries
- /search/ - Run SOSL searches`} />
            </section>

            <section>
              <h2>Authentication</h2>
              <p>Include Authorization header with access token:</p>
              <CodeBlock language="text" code={`Authorization: Bearer YOUR_ACCESS_TOKEN`} />
            </section>

            <section>
              <h2>Query Data (GET)</h2>
              <CodeBlock language="apex" code={`// Using REST API to query
Http http = new Http();
HttpRequest request = new HttpRequest();
request.setEndpoint('https://yourinstance.salesforce.com/services/data/v58.0/query/?q=SELECT+Id,Name+FROM+Account+LIMIT+5');
request.setMethod('GET');
request.setHeader('Authorization', 'Bearer ' + token);

HttpResponse response = http.send(request);
System.debug(response.getBody());`} />
            </section>

            <section>
              <h2>Create Record (POST)</h2>
              <CodeBlock language="apex" code={`HttpRequest request = new HttpRequest();
request.setEndpoint('https://yourinstance.salesforce.com/services/data/v58.0/sobjects/Account');
request.setMethod('POST');
request.setHeader('Content-Type', 'application/json');
request.setHeader('Authorization', 'Bearer ' + token);

String body = '{"Name": "New Account", "Industry": "Technology"}';
request.setBody(body);

HttpResponse response = new Http().send(request);`} />
            </section>

            <section>
              <h2>Update Record (PATCH)</h2>
              <CodeBlock language="apex" code={`HttpRequest request = new HttpRequest();
request.setEndpoint('https://yourinstance.salesforce.com/services/data/v58.0/sobjects/Account/001xxxxxxxxxxxxxxx');
request.setMethod('PATCH');
request.setHeader('Content-Type', 'application/json');
request.setHeader('Authorization', 'Bearer ' + token);

String body = '{"Name": "Updated Name", "Industry": "Finance"}';
request.setBody(body);`} />
            </section>

            <section>
              <h2>Delete Record (DELETE)</h2>
              <CodeBlock language="apex" code={`HttpRequest request = new HttpRequest();
request.setEndpoint('https://yourinstance.salesforce.com/services/data/v58.0/sobjects/Account/001xxxxxxxxxxxxxxx');
request.setMethod('DELETE');
request.setHeader('Authorization', 'Bearer ' + token);`} />
            </section>

            <section>
              <h2>Composite API</h2>
              <p>Execute multiple requests in one call:</p>
              <CodeBlock language="apex" code={`// POST to /composite endpoint
{
  "compositeRequests": [
    {
      "method": "GET",
      "url": "/services/data/v58.0/sobjects/Account/001xx0000000000",
      "referenceId": "GetAccount"
    },
    {
      "method": "PATCH",
      "url": "/services/data/v58.0/sobjects/Contact",
      "referenceId": "CreateContact",
      "body": {
        "FirstName": "John",
        "LastName": "Doe",
        "AccountId": "@{GetAccount.Id}"
      }
    }
  ]
}`} />
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>REST API uses HTTP methods for CRUD operations</li>
                <li>Base URL: /services/data/v58.0/</li>
                <li>Requires OAuth access token</li>
                <li>Query with SOQL via /query endpoint</li>
                <li>Use Composite API for multiple operations</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/wire-service.html" className="nav-link">← Wire Service</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/oauth.html" className="nav-link">OAuth 2.0 →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}