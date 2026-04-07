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

export default function TriggerBasics() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/trigger-basics" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path', label: 'Developer Path' },
            { label: 'Trigger Basics' }
          ]} />
          <article className="lesson-content">
            <h1>Trigger Basics</h1>
            <p className="lesson-intro">Learn how to write Apex triggers to execute custom logic before or after Salesforce record operations.</p>

            <section>
              <h2>What are Triggers?</h2>
              <p>Triggers are Apex code that executes before or after DML operations (insert, update, delete, undelete) on Salesforce records.</p>
            </section>

            <section>
              <h2>Trigger Syntax</h2>
              <CodeBlock language="apex" code={`trigger TriggerName on ObjectName (trigger_events) {
    // Trigger body
}`} />

              <p>Example:</p>
              <CodeBlock language="apex" code={`trigger AccountTrigger on Account (before insert, after insert, before update, after update) {
    if (Trigger.isBefore) {
        if (Trigger.isInsert) {
            // Handle before insert
        }
    }
}`} />
            </section>

            <section>
              <h2>Trigger Events</h2>
              <ul>
                <li><strong>before insert</strong> - Before records are inserted</li>
                <li><strong>after insert</strong> - After records are inserted</li>
                <li><strong>before update</strong> - Before records are updated</li>
                <li><strong>after update</strong> - After records are updated</li>
                <li><strong>before delete</strong> - Before records are deleted</li>
                <li><strong>after delete</strong> - After records are deleted</li>
                <li><strong>after undelete</strong> - After records are restored from recycle bin</li>
              </ul>
            </section>

            <section>
              <h2>Before vs After Triggers</h2>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Before Triggers</th>
                      <th>After Triggers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Can modify field values</td>
                      <td>Cannot modify field values</td>
                    </tr>
                    <tr>
                      <td>No committed data yet</td>
                      <td>Data is already committed</td>
                    </tr>
                    <tr>
                      <td>Use for validation</td>
                      <td>Use for related record operations</td>
                    </tr>
                    <tr>
                      <td>Lower governor limits</td>
                      <td>Higher governor limits</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Example: Set Default Account Rating</h2>
              <CodeBlock language="apex" code={`trigger SetDefaultRating on Account (before insert) {
    for (Account acc : Trigger.new) {
        if (acc.Rating == null) {
            acc.Rating = 'Warm';
        }
    }
}`} />
            </section>

            <section>
              <h2>Example: Update Contact on Account Update</h2>
              <CodeBlock language="apex" code={`trigger UpdateContactsOnAccount on Account (after update) {
    List<Contact> contactsToUpdate = new List<Contact>();
    
    for (Account acc : Trigger.new) {
        Account oldAcc = Trigger.oldMap.get(acc.Id);
        
        // If industry changed, update related contacts
        if (acc.Industry != oldAcc.Industry) {
            for (Contact c : [SELECT Id, Account_Industry__c FROM Contact 
                             WHERE AccountId = :acc.Id]) {
                c.Account_Industry__c = acc.Industry;
                contactsToUpdate.add(c);
            }
        }
    }
    
    if (!contactsToUpdate.isEmpty()) {
        update contactsToUpdate;
    }
}`} />
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Triggers execute before or after DML operations</li>
                <li>Use before triggers for field modifications</li>
                <li>Use after triggers for related record operations</li>
                <li>Always use bulk-friendly patterns</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/sosl-search" className="nav-link">← SOSL Search</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/context-variables" className="nav-link">Trigger Context Variables →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}