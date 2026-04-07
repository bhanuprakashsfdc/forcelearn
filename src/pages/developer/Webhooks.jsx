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

export default function Webhooks() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/webhooks.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'Webhooks' }
          ]} />
          <article className="lesson-content">
            <h1>Webhooks in Salesforce</h1>
            <p className="lesson-intro">Learn how to implement webhooks in Salesforce to receive real-time notifications from external systems.</p>

            <section>
              <h2>What are Webhooks?</h2>
              <p>Webhooks are HTTP callbacks that allow applications to receive real-time notifications. Instead of constantly polling an API, you receive updates immediately when events occur.</p>
            </section>

            <section>
              <h2>Receiving Webhooks in Salesforce</h2>
              <p>The easiest way to receive webhooks in Salesforce is using Apex REST endpoints:</p>
              <CodeBlock language="apex" code={`// Create a REST endpoint to receive webhooks
@RestResource(urlMapping='/webhook/*')
global with sharing class WebhookReceiver {
    
    @HttpPost
    global static void receiveWebhook() {
        RestRequest req = RestContext.request;
        String jsonBody = req.requestBody.toString();
        
        // Parse the JSON payload
        Map<String, Object> payload = (Map<String, Object>)JSON.deserializeUntyped(jsonBody);
        
        // Process the webhook data
        String eventType = (String)payload.get('event');
        String data = JSON.serialize(payload.get('data'));
        
        // Create a log record
        Webhook_Log__c log = new Webhook_Log__c();
        log.Event_Type__c = eventType;
        log.Payload__c = data;
        log.Status__c = 'Received';
        insert log;
    }
}`} />
            </section>

            <section>
              <h2>Sending Webhooks from Salesforce</h2>
              <p>Use Flow or Apex to send webhooks to external systems:</p>
              <CodeBlock language="apex" code={`public class WebhookSender {
    public static void sendWebhook(Map<String, Object> payload, String endpoint) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setHeader('Accept', 'application/json');
        
        String jsonPayload = JSON.serialize(payload);
        req.setBody(jsonPayload);
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        // Log the result
        System.debug('Webhook response: ' + res.getStatusCode());
    }
    
    // Example: Send when Opportunity is closed
    public static void onOpportunityUpdate(List<Opportunity> opps) {
        for (Opportunity opp : opps) {
            if (opp.StageName == 'Closed Won') {
                Map<String, Object> payload = new Map<String, Object>{
                    'event' => 'opportunity_closed',
                    'opportunity_id' => opp.Id,
                    'amount' => opp.Amount,
                    'account_name' => opp.Account.Name
                };
                
                sendWebhook(payload, 'https://api.example.com/webhook');
            }
        }
    }
}`} />
            </section>

            <section>
              <h2>Platform Events for Webhooks</h2>
              <p>Use Platform Events for a more robust event-driven architecture:</p>
              <CodeBlock language="apex" code={`// Create Platform Event
Event__e event = new Event__e(
    Event_Type__c = 'Order_Placed',
    Payload__c = JSON.serialize(newOrder)
);

// Publish event
EventBus.publish(event);

// Create Trigger on Platform Event
trigger OrderEventTrigger on Event__e (after insert) {
    for (Event__e event : Trigger.new) {
        if (event.Event_Type__c == 'Order_Placed') {
            // Callout to external system
            WebhookSender.sendOrderNotification(event.Payload__c);
        }
    }
}`} />
            </section>

            <section>
              <h2>Outbound Messages (Legacy)</h2>
              <p>Salesforce's classic way to send notifications:</p>
              <ol>
                <li>Create a Flow or Workflow Rule</li>
                <li>Add "Outbound Message" action</li>
                <li>Configure endpoint URL and headers</li>
                <li>Select fields to send</li>
              </ol>
              <p><strong>Note:</strong> Outbound Messages are being deprecated. Use Apex Callouts or Platform Events instead.</p>
            </section>

            <section>
              <h2>Security Considerations</h2>
              <ul>
                <li><strong>Verify webhook signatures</strong> - Always validate the request</li>
                <li><strong>Use HTTPS</strong> - Ensure encrypted communication</li>
                <li><strong>Implement idempotency</strong> - Handle duplicate deliveries</li>
                <li><strong>Log all requests</strong> - Track webhook deliveries</li>
                <li><strong>Validate source</strong> - Check sender is trusted</li>
              </ul>
            </section>

            <section>
              <h2>Example: Stripe Webhook Handler</h2>
              <CodeBlock language="apex" code={`@RestResource(urlMapping='/stripe/webhook/*')
global class StripeWebhookHandler {
    
    @HttpPost
    global static void handleStripeWebhook() {
        String payload = RestContext.request.requestBody.toString();
        String signature = RestContext.request.headers.get('Stripe-Signature');
        
        // Verify Stripe signature
        if (!verifySignature(payload, signature)) {
            throw new AuraHandledException('Invalid signature');
        }
        
        Map<String, Object> event = (Map<String, Object>)JSON.deserializeUntyped(payload);
        String eventType = (String)event.get('type');
        
        if (eventType == 'payment_intent.succeeded') {
            handlePaymentSuccess(event);
        } else if (eventType == 'payment_intent.payment_failed') {
            handlePaymentFailed(event);
        }
    }
    
    private static void handlePaymentSuccess(Map<String, Object> event) {
        Map<String, Object> data = (Map<String, Object>)event.get('data');
        String paymentId = (String)((Map<String, Object>)data.get('object')).get('id');
        // Update Salesforce record
    }
}`} />
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Webhooks provide real-time notifications</li>
                <li>Use Apex REST endpoints to receive webhooks</li>
                <li>Use Apex callouts to send webhooks</li>
                <li>Platform Events offer robust event-driven architecture</li>
                <li>Always verify signatures and validate sources</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/oauth.html" className="nav-link">← OAuth 2.0</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path.html" className="nav-link">Back to Developer Path →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}