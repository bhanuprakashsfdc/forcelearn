import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'
import CodeBlock from '../../components/content/CodeBlock'

const sidebarModules = [
  { id: 1, title: '1. Apex Fundamentals', lessons: [
    { id: 'dev-1-1', title: 'Getting Started with Apex', slug: '/developer-path/apex-introduction' },
    { id: 'dev-1-2', title: 'Data Types & Variables', slug: '/developer-path/data-types' },
    { id: 'dev-1-3', title: 'Classes & Methods', slug: '/developer-path/classes-methods' },
    { id: 'dev-1-4', title: 'Collections', slug: '/developer-path/collections' },
  ]},
  { id: 2, title: '2. SOQL & SOSL', lessons: [
    { id: 'dev-2-1', title: 'SOQL Basics', slug: '/developer-path/soql-basics' },
    { id: 'dev-2-2', title: 'Relationship Queries', slug: '/developer-path/relationship-queries' },
    { id: 'dev-2-3', title: 'SOSL Search', slug: '/developer-path/sosl-search' },
  ]},
  { id: 3, title: '3. Triggers', lessons: [
    { id: 'dev-3-1', title: 'Trigger Basics', slug: '/developer-path/trigger-basics' },
    { id: 'dev-3-2', title: 'Trigger Context Variables', slug: '/developer-path/context-variables' },
    { id: 'dev-3-3', title: 'Trigger Best Practices', slug: '/developer-path/trigger-best-practices' },
  ]}
]

export default function TriggerBestPractices() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/trigger-best-practices" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path', label: 'Developer Path' },
            { label: 'Trigger Best Practices' }
          ]} />
          <article className="lesson-content">
            <h1>Trigger Best Practices</h1>
            <p className="lesson-intro">Learn the recommended patterns and practices for writing efficient, maintainable Apex triggers.</p>

            <section>
              <h2>Bulkify Your Triggers</h2>
              <p>Triggers must handle multiple records at once. Always use collections and loops.</p>
              <CodeBlock language="apex" code={`// BAD - Not bulk-friendly
trigger BadTrigger on Account (after insert) {
    for (Account acc : Trigger.new) {
        // Query inside loop - BAD!
        List<Contact> contacts = [SELECT Id FROM Contact 
            WHERE AccountId = :acc.Id];
        // Process each contact
    }
}

// GOOD - Bulk-friendly
trigger GoodTrigger on Account (after insert) {
    // Collect all Account IDs
    Set<Id> accountIds = Trigger.newMap.keySet();
    
    // Single query outside loop
    List<Contact> contacts = [SELECT Id, AccountId FROM Contact 
        WHERE AccountId IN :accountIds];
    
    // Process in bulk
    Map<Id, List<Contact>> accToContacts = new Map<Id, List<Contact>>();
    for (Contact c : contacts) {
        if (!accToContacts.containsKey(c.AccountId)) {
            accToContacts.put(c.AccountId, new List<Contact>());
        }
        accToContacts.get(c.AccountId).add(c);
    }
    
    // Process each account
    for (Account acc : Trigger.new) {
        List<Contact> relatedContacts = accToContacts.get(acc.Id);
        // Process relatedContacts
    }
}`} />
            </section>

            <section>
              <h2>Use Trigger Handler Pattern</h2>
              <p>Move trigger logic to a separate class for better maintainability.</p>
              <CodeBlock language="apex" code={`// Trigger
trigger AccountTrigger on Account (before insert, before update) {
    AccountTriggerHandler.handleBefore(Trigger.new, Trigger.oldMap);
}

// Handler Class
public class AccountTriggerHandler {
    public static void handleBefore(List<Account> newRecords, 
                                     Map<Id, Account> oldMap) {
        for (Account acc : newRecords) {
            // Business logic here
            if (acc.Industry == 'Technology' && 
                acc.Rating == null) {
                acc.Rating = 'Hot';
            }
        }
    }
}`} />
            </section>

            <section>
              <h2>Avoid Recursive Triggers</h2>
              <CodeBlock language="apex" code={`// Use static variable to prevent recursion
public class AccountTriggerHandler {
    private static Boolean hasRun = false;
    
    public static void handleAfterUpdate(List<Account> newRecords) {
        if (hasRun) return;
        hasRun = true;
        
        // Your logic here
    }
}

// Alternative: Use specific field check
public static void handleAfterUpdate(List<Account> newRecords, 
                                     Map<Id, Account> oldMap) {
    List<Account> accountsToProcess = new List<Account>();
    
    for (Account acc : newRecords) {
        Account old = oldMap.get(acc.Id);
        // Only process if specific field changed
        if (acc.Active__c != old.Active__c) {
            accountsToProcess.add(acc);
        }
    }
    
    if (!accountsToProcess.isEmpty()) {
        // Process
    }
}`} />
            </section>

            <section>
              <h2>Use Custom Settings for Toggle</h2>
              <CodeBlock language="apex" code={`// Create custom setting to enable/disable trigger
public class TriggerHelper {
    public static Boolean isTriggerEnabled(String triggerName) {
        Trigger_Settings__c settings = Trigger_Settings__c.getInstance();
        return settings.Enable_Account_Trigger__c;
    }
}

// In trigger
trigger AccountTrigger on Account (before insert) {
    if (!TriggerHelper.isTriggerEnabled('AccountTrigger')) {
        return;
    }
    // Trigger logic
}`} />
            </section>

            <section>
              <h2>Handle Exceptions Properly</h2>
              <CodeBlock language="apex" code={`trigger AccountTrigger on Account (before insert) {
    try {
        for (Account acc : Trigger.new) {
            if (acc.Name == 'Test') {
                // Validate and add error if needed
                acc.addError('Account name cannot be Test');
            }
        }
    } catch (Exception e) {
        // Log error
        System.debug('Error: ' + e.getMessage());
        // Don't expose internal errors to users
    }
}`} />
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Always bulkify - use collections, not loops with queries</li>
                <li>Use handler pattern for maintainability</li>
                <li>Prevent infinite recursion with static variables</li>
                <li>Use custom settings to toggle triggers</li>
                <li>Use addError() for validation errors</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/context-variables" className="nav-link">← Trigger Context Variables</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path" className="nav-link">Back to Developer Path →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}