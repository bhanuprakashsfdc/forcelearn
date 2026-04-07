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

export default function TriggerContextVariables() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/context-variables" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path', label: 'Developer Path' },
            { label: 'Trigger Context Variables' }
          ]} />
          <article className="lesson-content">
            <h1>Trigger Context Variables</h1>
            <p className="lesson-intro">Learn about built-in system variables that provide information about the trigger execution context.</p>

            <section>
              <h2>Context Variables Overview</h2>
              <p>Trigger context variables provide information about the current trigger execution. They start with <code>Trigger.</code></p>
            </section>

            <section>
              <h2>Operation Context</h2>
              <CodeBlock language="apex" code={`// Check which operation is running
System.debug(Trigger.isBefore);   // true if before trigger
System.debug(Trigger.isAfter);   // true if after trigger
System.debug(Trigger.isInsert);  // true if insert operation
System.debug(Trigger.isUpdate);  // true if update operation
System.debug(Trigger.isDelete);  // true if delete operation
System.debug(Trigger.isUndelete); // true if undelete operation`} />
            </section>

            <section>
              <h2>Trigger New</h2>
              <p>Contains the new version of sObject records. Available in before and after triggers.</p>
              <CodeBlock language="apex" code={`// Trigger.new - list of new records
for (Account acc : Trigger.new) {
    System.debug('New Account: ' + acc.Name);
}

// Access specific record in bulk trigger
Account firstAccount = Trigger.new[0];`} />
            </section>

            <section>
              <h2>Trigger Old</h2>
              <p>Contains the old version of records. Available in update and delete triggers.</p>
              <CodeBlock language="apex" code={`// Trigger.old - list of old records
for (Account acc : Trigger.old) {
    System.debug('Old Account: ' + acc.Name);
}

// Compare old and new values
for (Account acc : Trigger.new) {
    Account oldAcc = Trigger.oldMap.get(acc.Id);
    if (acc.Name != oldAcc.Name) {
        System.debug('Name changed from ' + oldAcc.Name);
    }
}`} />
            </section>

            <section>
              <h2>Trigger NewMap and OldMap</h2>
              <p>Map versions of Trigger.new and Trigger.old for efficient lookups.</p>
              <CodeBlock language="apex" code={`// Trigger.newMap - Map<Id, sObject>
Map<Id, Account> newAccountsMap = Trigger.newMap;

// Get record by ID
Account acc = newAccountsMap.get(accountId);

// Trigger.oldMap - Map<Id, sObject>
Map<Id, Account> oldAccountsMap = Trigger.oldMap;

// Compare new vs old
for (Id accId : Trigger.newMap.keySet()) {
    Account newAcc = Trigger.newMap.get(accId);
    Account oldAcc = Trigger.oldMap.get(accId);
    // Compare fields
}`} />
            </section>

            <section>
              <h2>Size Variables</h2>
              <CodeBlock language="apex" code={`// Number of records in trigger
Integer size = Trigger.size;
System.debug('Records processed: ' + size);

// Use for validation
if (Trigger.size > 100) {
    // Handle bulk operation
}`} />
            </section>

            <section>
              <h2>Putting It All Together</h2>
              <CodeBlock language="apex" code={`trigger AccountTrigger on Account (before update) {
    // Only process if specific fields changed
    for (Account acc : Trigger.new) {
        Account oldAcc = Trigger.oldMap.get(acc.Id);
        
        // Check if description changed
        if (acc.Description != oldAcc.Description) {
            // Add timestamp to description
            acc.Description = acc.Description + 
                ' (Updated: ' + Datetime.now() + ')';
        }
        
        // Only process accounts that were modified
        System.debug('Processing: ' + acc.Name);
    }
}`} />
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Trigger.isBefore/isAfter - timing of trigger</li>
                <li>Trigger.isInsert/isUpdate/isDelete - operation type</li>
                <li>Trigger.new - new records being processed</li>
                <li>Trigger.old - old values before changes</li>
                <li>Trigger.newMap/Trigger.oldMap - map versions for lookups</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/trigger-basics" className="nav-link">← Trigger Basics</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/trigger-best-practices" className="nav-link">Trigger Best Practices →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}