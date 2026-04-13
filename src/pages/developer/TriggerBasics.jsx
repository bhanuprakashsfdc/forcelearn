import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'
import CodeBlock from '../../components/content/CodeBlock'

const developerSidebarModules = [
  { id: 1, title: '1. Apex Fundamentals', lessons: [
    { id: 'dev-1-1', title: 'Getting Started with Apex', slug: '/developer-path/apex-introduction.html' },
    { id: 'dev-1-2', title: 'Data Types & Variables', slug: '/developer-path/data-types.html' },
    { id: 'dev-1-3', title: 'Classes & Methods', slug: '/developer-path/classes-methods.html' },
    { id: 'dev-1-4', title: 'Collections', slug: '/developer-path/collections.html' },
  ]},
  { id: 2, title: '2. SOQL & SOSL', lessons: [
    { id: 'dev-2-1', title: 'SOQL Basics', slug: '/developer-path/soql-basics.html' },
    { id: 'dev-2-2', title: 'Relationship Queries', slug: '/developer-path/relationship-queries.html' },
    { id: 'dev-2-3', title: 'SOSL Search', slug: '/developer-path/sosl-search.html' },
  ]},
  { id: 3, title: '3. Triggers', lessons: [
    { id: 'dev-3-1', title: 'Trigger Basics', slug: '/developer-path/trigger-basics.html' },
    { id: 'dev-3-2', title: 'Trigger Context Variables', slug: '/developer-path/context-variables.html' },
    { id: 'dev-3-3', title: 'Trigger Best Practices', slug: '/developer-path/trigger-best-practices.html' },
  ]},
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

export default function TriggerBasics() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/trigger-basics.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'Trigger Basics' }
          ]} />
          <article className="lesson-content">
            <h1>Apex Triggers: Complete Guide to Declarative Automation</h1>
            <p className="lesson-intro">
              Apex Triggers are the backbone of custom automation in Salesforce. This comprehensive 
              guide covers trigger syntax, events, context variables, bulk patterns, and best practices 
              for writing efficient, maintainable triggers.
            </p>

            <section>
              <h2>1. Understanding Triggers</h2>
              <p>
                Triggers are pieces of Apex code that execute automatically before or after DML 
                (Data Manipulation Language) operations on Salesforce records. They respond to events 
                like inserting, updating, or deleting records, enabling you to implement complex 
                business logic that can't be achieved with declarative tools alone.
              </p>

              <h3>1.1 When to Use Triggers</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Use Case</th>
                      <th>Trigger Type</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Validation</strong></td>
                      <td>Before Insert/Update</td>
                      <td>Ensure required fields are populated</td>
                    </tr>
                    <tr>
                      <td><strong>Field Updates</strong></td>
                      <td>Before Insert/Update</td>
                      <td>Auto-populate derived fields</td>
                    </tr>
                    <tr>
                      <td><strong>Related Records</strong></td>
                      <td>After Insert/Update</td>
                      <td>Create child records on insert</td>
                    </tr>
                    <tr>
                      <td><strong>External Sync</strong></td>
                      <td>After Insert/Update</td>
                      <td>Call external APIs on changes</td>
                    </tr>
                    <tr>
                      <td><strong>Custom Workflow</strong></td>
                      <td>Before/After Delete</td>
                      <td>Delete related records</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box">
                <h4>💡 Design Decision</h4>
                <p>Before writing a trigger, consider whether Flow Builder can accomplish the same 
                task. Flow is the recommended declarative tool for new automation. Use triggers 
                when Flow can't handle the requirement or when performance is critical.</p>
              </div>
            </section>

            <section>
              <h2>2. Trigger Syntax</h2>
              
              <h3>2.1 Basic Trigger Structure</h3>
              <CodeBlock language="apex" code={`trigger TriggerName on SObject (trigger_events) {
    // Trigger logic goes here
}`} />

              <h3>2.2 Trigger Events</h3>
              <p>Triggers can fire on these events:</p>
              <ul>
                <li><strong>before insert</strong> - Before records are inserted into the database</li>
                <li><strong>after insert</strong> - After records have been inserted</li>
                <li><strong>before update</strong> - Before records are updated</li>
                <li><strong>after update</strong> - After records have been updated</li>
                <li><strong>before delete</strong> - Before records are deleted</li>
                <li><strong>after delete</strong> - After records have been deleted</li>
                <li><strong>after undelete</strong> - After records are restored from recycle bin</li>
              </ul>

              <h3>2.3 Example Trigger</h3>
              <CodeBlock language="apex" code={`trigger AccountTrigger on Account (before insert, after insert, before update, after update, before delete, after delete) {
    // Trigger body - code executes when any of the listed events occur
}`} />

              <h3>2.4 Conditional Execution</h3>
              <CodeBlock language="apex" code={`trigger AccountTrigger on Account (before insert) {
    // Check which trigger event is executing
    if (Trigger.isBefore) {
        System.debug('Running before trigger');
    }
    
    if (Trigger.isInsert) {
        System.debug('Running on insert');
    }
    
    // Multiple conditions
    if (Trigger.isBefore && Trigger.isInsert) {
        // Handle before insert logic
    }
}`} />
            </section>

            <section>
              <h2>3. Before vs After Triggers</h2>
              <p>Understanding when to use before vs after triggers is fundamental:</p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Before Triggers</th>
                      <th>After Triggers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Timing</strong></td>
                      <td>Executes before save to database</td>
                      <td>Executes after save to database</td>
                    </tr>
                    <tr>
                      <td><strong>Can Modify Fields</strong></td>
                      <td>Yes - changes are saved</td>
                      <td>No - record already saved</td>
                    </tr>
                    <tr>
                      <td><strong>Record ID</strong></td>
                      <td>Not available (before insert)</td>
                      <td>Available (after insert)</td>
                    </tr>
                    <tr>
                      <td><strong>Use Cases</strong></td>
                      <td>Validation, field defaults</td>
                      <td>Related records, external calls</td>
                    </tr>
                    <tr>
                      <td><strong>Governor Limits</strong></td>
                      <td>Tighter limits</td>
                      <td>More lenient limits</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.1 When to Use Before Triggers</h3>
              <CodeBlock language="apex" code={`// Use before triggers for:
// 1. Setting field values before save
trigger SetDefaultRating on Account (before insert) {
    for (Account acc : Trigger.new) {
        if (acc.Rating == null) {
            acc.Rating = 'Warm';  // Modify field directly
        }
        
        // Auto-populate derived fields
        if (acc.BillingCity != null && acc.ShippingCity == null) {
            acc.ShippingCity = acc.BillingCity;
        }
    }
}

// 2. Validation - prevent invalid data
trigger ValidateAccount on Account (before insert, before update) {
    for (Account acc : Trigger.new) {
        // Reject invalid data
        if (acc.AnnualRevenue != null && acc.AnnualRevenue &lt; 0) {
            acc.addError('Annual Revenue cannot be negative');
        }
        
        // Require industry for certain account types
        if (acc.Type == 'Customer' && acc.Industry == null) {
            acc.Industry.addError('Industry is required for Customer accounts');
        }
    }
}`} />

              <h3>3.2 When to Use After Triggers</h3>
              <CodeBlock language="apex" code={`// Use after triggers for:
// 1. Creating related records
trigger CreateDefaultContact on Account (after insert) {
    List&lt;Contact&gt; contacts = new List&lt;Contact&gt;();
    
    for (Account acc : Trigger.new) {
        Contact primary = new Contact();
        primary.AccountId = acc.Id;
        primary.LastName = acc.Name + ' Primary Contact';
        primary.Title = 'Primary Contact';
        primary.Email = 'primary@' + acc.Name.replace(' ', '').toLowerCase() + '.com';
        contacts.add(primary);
    }
    
    if (!contacts.isEmpty()) {
        insert contacts;
    }
}

// 2. Sending notifications
trigger NotifyOnStatusChange on Opportunity (after update) {
    for (Opportunity opp : Trigger.new) {
        Opportunity oldOpp = Trigger.oldMap.get(opp.Id);
        
        if (opp.StageName == 'Closed Won' && oldOpp.StageName != 'Closed Won') {
            // Send notification - Email, Custom Notification, etc.
            sendWinNotification(opp);
        }
    }
}`} />

              <div className="info-box">
                <h4>⚠️ Critical Rule</h4>
                <p>Never perform DML operations on the triggering records in before triggers - 
                the records haven't been saved yet. Use after triggers for creating/updating 
                related records.</p>
              </div>
            </section>

            <section>
              <h2>4. Trigger Context Variables</h2>
              <p>Salesforce provides built-in context variables to understand what's happening:</p>

              <h3>4.1 Event Context Variables</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Variable</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>Trigger.isBefore</code></td>
                      <td>Boolean</td>
                      <td>Returns true if trigger is before event</td>
                    </tr>
                    <tr>
                      <td><code>Trigger.isAfter</code></td>
                      <td>Boolean</td>
                      <td>Returns true if trigger is after event</td>
                    </tr>
                    <tr>
                      <td><code>Trigger.isInsert</code></td>
                      <td>Boolean</td>
                      <td>Returns true if trigger is on insert</td>
                    </tr>
                    <tr>
                      <td><code>Trigger.isUpdate</code></td>
                      <td>Boolean</td>
                      <td>Returns true if trigger is on update</td>
                    </tr>
                    <tr>
                      <td><code>Trigger.isDelete</code></td>
                      <td>Boolean</td>
                      <td>Returns true if trigger is on delete</td>
                    </tr>
                    <tr>
                      <td><code>Trigger.isUndelete</code></td>
                      <td>Boolean</td>
                      <td>Returns true if trigger is on undelete</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>4.2 Record Context Variables</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Variable</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>Trigger.new</code></td>
                      <td>List&lt;sObject&gt;</td>
                      <td>Records being processed (inserted/updated)</td>
                    </tr>
                    <tr>
                      <td><code>Trigger.old</code></td>
                      <td>List&lt;sObject&gt;</td>
                      <td>Old versions of records (update/delete)</td>
                    </tr>
                    <tr>
                      <td><code>Trigger.newMap</code></td>
                      <td>Map&lt;ID, sObject&gt;</td>
                      <td>Map of new records with IDs as keys</td>
                    </tr>
                    <tr>
                      <td><code>Trigger.oldMap</code></td>
                      <td>Map&lt;ID, sObject&gt;</td>
                      <td>Map of old records with IDs as keys</td>
                    </tr>
                    <tr>
                      <td><code>Trigger.size</code></td>
                      <td>Integer</td>
                      <td>Total number of records in trigger</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>5. Bulk Trigger Patterns</h2>
              <p>Triggers must handle multiple records efficiently - this is called bulkification:</p>

              <h3>5.1 Non-Bulk Pattern (AVOID)</h3>
              <CodeBlock language="apex" code={`// BAD - Queries inside loop - hits governor limits!
trigger BadAccountTrigger on Account (before insert) {
    for (Account acc : Trigger.new) {
        // Query for each account - BAD!
        List&lt;Contact&gt; contacts = [
            SELECT Id FROM Contact 
            WHERE AccountId = :acc.Id
        ];
        acc.Contact_Count__c = contacts.size();
    }
}`} />

              <h3>5.2 Bulk-Friendly Pattern</h3>
              <CodeBlock language="apex" code={`// GOOD - Query once outside loop
trigger GoodAccountTrigger on Account (before insert) {
    // Collect all account IDs
    Set&lt;ID&gt; accountIds = new Set&lt;ID&gt;();
    for (Account acc : Trigger.new) {
        accountIds.add(acc.Id);
    }
    
    // Single query for all accounts
    Map&lt;ID, Integer&gt; contactCounts = new Map&lt;ID, Integer&gt;();
    for (Account acc : [
        SELECT Id, (SELECT Id FROM Contacts) 
        FROM Account 
        WHERE Id IN :accountIds
    ]) {
        contactCounts.put(acc.Id, acc.Contacts.size());
    }
    
    // Update all accounts
    for (Account acc : Trigger.new) {
        Integer count = contactCounts.get(acc.Id);
        acc.Contact_Count__c = (count != null) ? count : 0;
    }
}`} />

              <h3>5.3 Handler Class Pattern</h3>
              <CodeBlock language="apex" code={`// Trigger
trigger AccountTrigger on Account (before insert, before update, before delete, after insert, after update, after delete) {
    AccountTriggerHandler.handle(Trigger.new, Trigger.old, Trigger.newMap, Trigger.oldMap, Trigger.operationType);
}

// Handler Class
public with sharing class AccountTriggerHandler {
    
    public static void handle(
        List&lt;Account&gt; newRecords, 
        List&lt;Account&gt; oldRecords,
        Map&lt;ID, Account&gt; newMap,
        Map&lt;ID, Account&gt; oldMap,
        System.TriggerOperation operationType
    ) {
        switch on operationType {
            when BEFORE_INSERT {
                beforeInsert(newRecords);
            }
            when BEFORE_UPDATE {
                beforeUpdate(newRecords, oldMap);
            }
            when AFTER_INSERT {
                afterInsert(newRecords);
            }
            when AFTER_UPDATE {
                afterUpdate(newRecords, oldMap);
            }
            when else {
                // Handle other operations
            }
        }
    }
    
    private static void beforeInsert(List&lt;Account&gt; accounts) {
        for (Account acc : accounts) {
            if (acc.Rating == null) {
                acc.Rating = 'Warm';
            }
        }
    }
    
    private static void afterInsert(List&lt;Account&gt; accounts) {
        // Create related records, etc.
    }
}`} />

              <div className="info-box">
                <h4>💡 Best Practice</h4>
                <p>Always use the handler pattern for triggers. It keeps trigger code clean, 
                enables easier testing, and makes maintenance simpler.</p>
              </div>
            </section>

            <section>
              <h2>6. Error Handling in Triggers</h2>
              
              <h3>6.1 addError Method</h3>
              <CodeBlock language="apex" code={`// Add error to specific field
trigger ValidateFields on Account (before insert, before update) {
    for (Account acc : Trigger.new) {
        if (acc.Industry == null) {
            acc.Industry.addError('Industry is required');
        }
        
        if (acc.AnnualRevenue != null && acc.AnnualRevenue &lt; 0) {
            acc.AnnualRevenue.addError('Revenue cannot be negative');
        }
    }
}

// Add error to entire record
trigger ValidateAccount on Account (before insert, before update) {
    for (Account acc : Trigger.new) {
        if (acc.Name != null && acc.Name.length() &gt; 100) {
            acc.addError('Account name cannot exceed 100 characters');
        }
    }
}`} />

              <h3>6.2 Conditional Error Messages</h3>
              <CodeBlock language="apex" code={`// Dynamic error messages
trigger ValidateIndustry on Account (before insert, before update) {
    for (Account acc : Trigger.new) {
        if (acc.Type == 'Prospect' && acc.Industry == null) {
            acc.Industry.addError(
                'Industry is required for ' + acc.Type + ' accounts'
            );
        }
    }
}

// Multiple field validation
trigger ValidateRequiredFields on Opportunity (before insert, before update) {
    for (Opportunity opp : Trigger.new) {
        List&lt;String&gt; errors = new List&lt;String&gt;();
        
        if (opp.StageName == 'Closed Won' && opp.Amount == null) {
            errors.add('Amount is required for Closed Won opportunities');
        }
        
        if (opp.StageName == 'Closed Won' && opp.CloseDate == null) {
            errors.add('Close Date is required for Closed Won opportunities');
        }
        
        if (!errors.isEmpty()) {
            opp.addError(String.join(errors, '; '));
        }
    }
}`} />
            </section>

            <section>
              <h2>7. Trigger Examples</h2>
              
              <h3>7.1 Auto-Assign Account Team</h3>
              <CodeBlock language="apex" code={`trigger AutoAssignAccountTeam on Account (after insert) {
    List&lt;AccountTeamMember&gt; teamMembers = new List&lt;AccountTeamMember&gt;();
    
    // Get default team roles from custom setting
    Map&lt;String, Default_Team_Role__c&gt; roles = Default_Team_Role__c.getAll();
    
    for (Account acc : Trigger.new) {
        for (Default_Team_Role__c role : roles.values()) {
            AccountTeamMember member = new AccountTeamMember();
            member.AccountId = acc.Id;
            member.UserId = role.User__c;
            member.TeamMemberRole = role.Role__c;
            teamMembers.add(member);
        }
    }
    
    if (!teamMembers.isEmpty()) {
        insert teamMembers;
    }
}`} />

              <h3>7.2 Cascade Deletion</h3>
              <CodeBlock language="apex" code={`trigger CascadeDelete on Account (before delete) {
    // Collect related records to delete
    List&lt;Opportunity&gt; oppsToDelete = new List&lt;Opportunity&gt;();
    List&lt;Contact&gt; contactsToDelete = new List&lt;Contact&gt;();
    
    for (Account acc : Trigger.old) {
        // Get related opportunities
        oppsToDelete.addAll(acc.Opportunities);
        // Get related contacts
        contactsToDelete.addAll(acc.Contacts);
    }
    
    // Delete related records
    if (!oppsToDelete.isEmpty()) {
        delete oppsToDelete;
    }
    if (!contactsToDelete.isEmpty()) {
        delete contactsToDelete;
    }
}`} />

              <h3>7.3 Track Field Changes</h3>
              <CodeBlock language="apex" code={`trigger TrackFieldChanges on Account (before update) {
    // Create field history records
    List&lt;Field_History__c&gt; history = new List&lt;Field_History__c&gt;();
    
    for (Account acc : Trigger.new) {
        Account oldAcc = Trigger.oldMap.get(acc.Id);
        
        // Check specific field changes
        if (acc.Industry != oldAcc.Industry) {
            history.add(new Field_History__c(
                Account__c = acc.Id,
                Field_Name__c = 'Industry',
                Old_Value__c = oldAcc.Industry,
                New_Value__c = acc.Industry,
                Changed_By__c = UserInfo.getUserId()
            ));
        }
        
        if (acc.Rating != oldAcc.Rating) {
            history.add(new Field_History__c(
                Account__c = acc.Id,
                Field_Name__c = 'Rating',
                Old_Value__c = oldAcc.Rating,
                New_Value__c = acc.Rating,
                Changed_By__c = UserInfo.getUserId()
            ));
        }
    }
    
    if (!history.isEmpty()) {
        insert history;
    }
}`} />
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on Apex triggers, you learned:</p>
              <ul>
                <li>What triggers are and when to use them</li>
                <li>Trigger syntax and event types (before/after insert/update/delete/undelete)</li>
                <li>When to use before vs after triggers</li>
                <li>Trigger context variables (isBefore, isAfter, isInsert, new, old, etc.)</li>
                <li>Bulk trigger patterns and why they matter</li>
                <li>Handler class pattern for maintainable code</li>
                <li>Error handling with addError method</li>
                <li>Real-world trigger examples</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to Trigger Context Variables to learn more about 
                working with trigger context and the differences between trigger events.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/sosl-search.html" className="nav-link">← SOSL Search</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/context-variables.html" className="nav-link">Trigger Context Variables →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}