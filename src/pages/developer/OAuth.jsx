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

export default function OAuth() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/oauth.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'OAuth 2.0' }
          ]} />
          <article className="lesson-content">
            <h1>OAuth 2.0 in Salesforce</h1>
            <p className="lesson-intro">Learn how to implement OAuth 2.0 authentication for secure API access.</p>

            <section>
              <h2>What is OAuth 2.0?</h2>
              <p>OAuth 2.0 is the industry-standard protocol for authorization. It enables third-party applications to access Salesforce data without sharing passwords.</p>
            </section>

            <section>
              <h2>OAuth Flow Types</h2>
              <ul>
                <li><strong>Web Server Flow</strong> - For server-side web apps</li>
                <li><strong>User-Agent Flow</strong> - For client-side apps (SPA)</li>
                <li><strong>JWT Bearer Flow</strong> - For server-to-server integration</li>
                <li><strong>Client Credentials Flow</strong> - For background services</li>
              </ul>
            </section>

            <section>
              <h2>Setting Up OAuth</h2>
              <ol>
                <li>Create a <strong>Connected App</strong> in Salesforce</li>
                <li>Configure OAuth Settings</li>
                <li>Set callback URL</li>
                <li>Select OAuth scopes</li>
                <li>Save and get Consumer Key/Secret</li>
              </ol>
            </section>

            <section>
              <h2>Web Server Flow</h2>
              <ol>
                <li>Redirect user to authorization URL</li>
                <li>User logs in and approves</li>
                <li>Receive authorization code</li>
                <li>Exchange code for access token</li>
                <li>Use access token for API calls</li>
              </ol>
              <p>Authorization URL:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`https://login.salesforce.com/services/oauth2/authorize
  ?response_type=code
  &client_id=YOUR_CONSUMER_KEY
  &redirect_uri=YOUR_CALLBACK_URL`}
              </pre>
            </section>

            <section>
              <h2>Token Exchange</h2>
              <p>Exchange authorization code for tokens:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`POST https://login.salesforce.com/services/oauth2/token

grant_type=authorization_code
&code=AUTHORIZATION_CODE
&client_id=CONSUMER_KEY
&client_secret=CONSUMER_SECRET
&redirect_uri=CALLBACK_URL`}
              </pre>
              <p>Response:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`{
  "access_token": "...",
  "refresh_token": "...",
  "instance_url": "https://yourinstance.salesforce.com",
  "issued_at": "...",
  "token_type": "Bearer"
}`}
              </pre>
            </section>

            <section>
              <h2>OAuth Scopes</h2>
              <ul>
                <li><strong>Access and manage your data (api)</strong> - Full API access</li>
                <li><strong>Perform requests on your behalf at any time (refresh_token, offline_access)</strong> - Keep access after logout</li>
                <li><strong>Access custom permissions (custom_permissions)</strong> - Custom permissions</li>
                <li><strong>Allow access to your unique identifier (openid)</strong> - OpenID Connect</li>
              </ul>
            </section>

            <section>
              <h2>JWT Bearer Flow</h2>
              <p>For server-to-server without user interaction:</p>
              <ol>
                <li>Create Connected App with JWT</li>
                <li>Create a self-signed certificate</li>
                <li>Create JWT with claims</li>
                <li>Sign JWT with private key</li>
                <li>Exchange JWT for access token</li>
              </ol>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>OAuth 2.0 enables secure API access</li>
                <li>Use Web Server Flow for web apps</li>
                <li>Use JWT Bearer Flow for server-to-server</li>
                <li>Configure scopes for proper access</li>
                <li>Use refresh tokens for long-lived access</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/rest-api.html" className="nav-link">← REST API</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/webhooks.html" className="nav-link">Webhooks →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}