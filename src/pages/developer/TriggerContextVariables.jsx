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

export default function TriggerContextVariables() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/context-variables.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'Trigger Context Variables' }
          ]} />
          <article className="lesson-content">
            <h1>Trigger Context Variables: Complete Reference</h1>
            <p className="lesson-intro">
              Trigger context variables provide critical information about the current trigger execution, 
              including which records are being processed, whether it's before or after the database operation, 
              and the type of operation. This comprehensive guide covers all context variables and their usage.
            </p>

            <section>
              <h2>1. Understanding Trigger Context</h2>
              <p>When a trigger fires, Salesforce provides a wealth of information about the operation through 
              system-defined context variables. These variables tell you what records are involved, what operation 
              is occurring, and provide access to both new and old versions of data.</p>

              <h3>1.1 Context Variable Overview</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Variables</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Operation Context</strong></td>
                      <td>isBefore, isAfter</td>
                      <td>Timing of trigger execution</td>
                    </tr>
                    <tr>
                      <td><strong>Operation Type</strong></td>
                      <td>isInsert, isUpdate, isDelete, isUndelete</td>
                      <td>Type of DML operation</td>
                    </tr>
                    <tr>
                      <td><strong>Record Context</strong></td>
                      <td>new, old, newMap, oldMap</td>
                      <td>Records being processed</td>
                    </tr>
                    <tr>
                      <td><strong>Size</strong></td>
                      <td>size</td>
                      <td>Number of records</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>2. Operation Context Variables</h2>
              <p>These boolean variables identify when the trigger is executing:</p>

              <h3>2.1 Before/After Context</h3>
              <CodeBlock language="apex" code={`trigger AccountTrigger on Account (before insert, after insert) {
    if (Trigger.isBefore) {
        System.debug('Before insert - can modify fields');
        // Use for: field defaults, validation
    }
    
    if (Trigger.isAfter) {
        System.debug('After insert - record has ID');
        // Use for: creating related records, sending notifications
    }
}`} />

              <h3>2.2 Operation Type Context</h3>
              <CodeBlock language="apex" code={`trigger OpportunityTrigger on Opportunity (
    before insert, after insert, 
    before update, after update,
    before delete, after delete,
    after undelete
) {
    if (Trigger.isInsert) {
        System.debug('Insert operation');
    }
    
    if (Trigger.isUpdate) {
        System.debug('Update operation');
    }
    
    if (Trigger.isDelete) {
        System.debug('Delete operation');
    }
    
    if (Trigger.isUndelete) {
        System.debug('Record restored from recycle bin');
    }
}`} />

              <h3>2.3 Combining Context Checks</h3>
              <CodeBlock language="apex" code={`// Common pattern: combine context checks
trigger AccountTrigger on Account (before insert, before update, after insert, after update) {
    
    // Before insert
    if (Trigger.isBefore && Trigger.isInsert) {
        // Handle before insert logic
    }
    
    // Before update  
    if (Trigger.isBefore && Trigger.isUpdate) {
        // Handle before update logic
    }
    
    // After insert
    if (Trigger.isAfter && Trigger.isInsert) {
        // Handle after insert logic
    }
    
    // After update
    if (Trigger.isAfter && Trigger.isUpdate) {
        // Handle after update logic
    }
}`} />

              <h3>2.4 Using TriggerOperation Enum (Alternative)</h3>
              <CodeBlock language="apex" code={`// Modern approach - use Trigger.operationType
trigger AccountTrigger on Account (before insert, after insert, before update, after update) {
    System.debug('Operation: ' + Trigger.operationType);
    
    switch on Trigger.operationType {
        when BEFORE_INSERT {
            System.debug('Before insert');
        }
        when AFTER_INSERT {
            System.debug('After insert');
        }
        when BEFORE_UPDATE {
            System.debug('Before update');
        }
        when AFTER_UPDATE {
            System.debug('After update');
        }
        when BEFORE_DELETE {
            System.debug('Before delete');
        }
        when AFTER_DELETE {
            System.debug('After delete');
        }
        when AFTER_UNDELETE {
            System.debug('After undelete');
        }
    }
}`} />
            </section>

            <section>
              <h2>3. Record Context Variables</h2>
              <p>These variables provide access to the records being processed:</p>

              <h3>3.1 Trigger.new - New Records</h3>
              <CodeBlock language="apex" code={`// Trigger.new - List of records being processed
// Available in: before insert, after insert, before update, after update

trigger AccountTrigger on Account (before insert, after insert) {
    
    // Iterate through all new records
    for (Account acc : Trigger.new) {
        System.debug('Processing: ' + acc.Name);
        System.debug('ID: ' + acc.Id);  // Available in after insert, null in before insert
    }
    
    // Access by index (not recommended for bulk)
    if (!Trigger.new.isEmpty()) {
        Account first = Trigger.new[0];
    }
    
    // Check size
    System.debug('Records: ' + Trigger.new.size());
}`} />

              <h3>3.2 Trigger.old - Previous Values</h3>
              <CodeBlock language="apex" code={`// Trigger.old - List of records with their PREVIOUS values
// Available in: before update, after update, before delete, after delete
// NOT available in: before insert, after insert

trigger AccountTrigger on Account (before update, after update) {
    
    for (Account acc : Trigger.old) {
        System.debug('Old name: ' + acc.Name);
        // These are the values BEFORE the update
    }
    
    // Compare old vs new
    for (Account acc : Trigger.new) {
        Account oldVersion = Trigger.oldMap.get(acc.Id);
        System.debug('New: ' + acc.Name + ', Old: ' + oldVersion.Name);
    }
}`} />

              <div className="info-box">
                <h4>💡 Important</h4>
                <p>Trigger.old contains the values as they existed BEFORE the operation. 
                For insert, there's no old values. For delete, Trigger.old contains the 
                records being deleted.</p>
              </div>

              <h3>3.3 Trigger.newMap - New Records with IDs</h3>
              <CodeBlock language="apex" code={`// Trigger.newMap - Map<ID, sObject> of new records
// Available in: after insert, before update, after update

trigger AccountTrigger on Account (after insert) {
    
    // Access record by ID
    for (ID accId : Trigger.newMap.keySet()) {
        Account acc = Trigger.newMap.get(accId);
        System.debug('Account ID: ' + accId + ', Name: ' + acc.Name);
    }
    
    // Check if specific ID exists
    if (Trigger.newMap.containsKey(someAccountId)) {
        Account a = Trigger.newMap.get(someAccountId);
    }
}`} />

              <h3>3.4 Trigger.oldMap - Old Records with IDs</h3>
              <CodeBlock language="apex" code={`// Trigger.oldMap - Map<ID, sObject> of old records
// Available in: before update, after update, before delete, after delete

trigger AccountTrigger on Account (after update) {
    
    // Compare old vs new values
    for (ID accId : Trigger.newMap.keySet()) {
        Account newAcc = Trigger.newMap.get(accId);
        Account oldAcc = Trigger.oldMap.get(accId);
        
        // Check specific field changes
        if (newAcc.Industry != oldAcc.Industry) {
            System.debug('Industry changed from ' + oldAcc.Industry + ' to ' + newAcc.Industry);
        }
        
        if (newAcc.Rating != oldAcc.Rating) {
            System.debug('Rating changed from ' + oldAcc.Rating + ' to ' + newAcc.Rating);
        }
    }
}`} />
            </section>

            <section>
              <h2>4. Context Variables by Operation Type</h2>
              <p>Understanding which variables are available for each trigger type:</p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Operation</th>
                      <th>isBefore</th>
                      <th>isAfter</th>
                      <th>new</th>
                      <th>old</th>
                      <th>newMap</th>
                      <th>oldMap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>before insert</td>
                      <td>✓</td>
                      <td>-</td>
                      <td>✓</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>after insert</td>
                      <td>-</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>-</td>
                      <td>✓</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>before update</td>
                      <td>✓</td>
                      <td>-</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <td>after update</td>
                      <td>-</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <td>before delete</td>
                      <td>✓</td>
                      <td>-</td>
                      <td>-</td>
                      <td>✓</td>
                      <td>-</td>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <td>after delete</td>
                      <td>-</td>
                      <td>✓</td>
                      <td>-</td>
                      <td>✓</td>
                      <td>-</td>
                      <td>✓</td>
                    </tr>
                    <tr>
                      <td>after undelete</td>
                      <td>-</td>
                      <td>✓</td>
                      <td>✓</td>
                      <td>-</td>
                      <td>✓</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>5. Practical Examples</h2>
              
              <h3>5.1 Detecting Field Changes</h3>
              <CodeBlock language="apex" code={`// Detect what fields changed in update trigger
trigger TrackChanges on Account (before update) {
    for (Account acc : Trigger.new) {
        Account oldAcc = Trigger.oldMap.get(acc.Id);
        
        // Method 1: Check each field individually
        Boolean industryChanged = (acc.Industry != oldAcc.Industry);
        Boolean ratingChanged = (acc.Rating != oldAcc.Rating);
        Boolean revenueChanged = (acc.AnnualRevenue != oldAcc.AnnualRevenue);
        
        if (industryChanged || ratingChanged || revenueChanged) {
            // Log the changes
            System.debug('Account ' + acc.Name + ' was modified');
        }
        
        // Method 2: Build list of changed fields
        List&lt;String&gt; changedFields = new List&lt;String&gt;();
        if (acc.Name != oldAcc.Name) changedFields.add('Name');
        if (acc.Industry != oldAcc.Industry) changedFields.add('Industry');
        if (acc.Rating != oldAcc.Rating) changedFields.add('Rating');
        
        if (!changedFields.isEmpty()) {
            System.debug('Changed fields: ' + String.join(changedFields, ', '));
        }
    }
}`} />

              <h3>5.2 Finding New vs Old Values</h3>
              <CodeBlock language="apex" code={`// Find records where specific field changed TO a value
trigger ProcessHighValueOpps on Opportunity (after update) {
    List&lt;Opportunity&gt; highValueOpps = new List&lt;Opportunity&gt;();
    
    for (Opportunity opp : Trigger.new) {
        Opportunity oldOpp = Trigger.oldMap.get(opp.Id);
        
        // Opportunity changed to Closed Won AND amount is high
        if (opp.StageName == 'Closed Won' && 
            oldOpp.StageName != 'Closed Won' &&
            opp.Amount != null && opp.Amount &gt;= 100000) {
            highValueOpps.add(opp);
        }
    }
    
    // Process high-value opportunities
    if (!highValueOpps.isEmpty()) {
        notifySalesLeadership(highValueOpps);
    }
}`} />

              <h3>5.3 Handling Delete Operations</h3>
              <CodeBlock language="apex" code={`// Before delete - access records being deleted
trigger ValidateDelete on Account (before delete) {
    for (Account acc : Trigger.old) {
        // Check if account has open opportunities
        if (acc.Has_Open_Opportunities__c) {
            acc.addError('Cannot delete account with open opportunities');
        }
        
        // Check revenue threshold
        if (acc.AnnualRevenue != null && acc.AnnualRevenue &gt; 1000000) {
            acc.addError('Contact finance before deleting high-revenue accounts');
        }
    }
}

// After delete - handle related records
trigger DeleteRelatedRecords on Account (after delete) {
    List&lt;Task&gt; relatedTasks = new List&lt;Task&gt;();
    
    for (Account acc : Trigger.old) {
        // Find tasks related to deleted account
        for (Task t : [SELECT Id, Subject FROM Task WHERE WhatId = :acc.Id]) {
            relatedTasks.add(t);
        }
    }
    
    if (!relatedTasks.isEmpty()) {
        delete relatedTasks;
    }
}`} />

              <h3>5.4 Handling Undelete</h3>
              <CodeBlock language="apex" code={`// After undelete - restore related records from Recycle Bin
trigger RestoreRelatedRecords on Account (after undelete) {
    List&lt;Account&gt; restoredAccounts = new List&lt;Account&gt;();
    
    for (Account acc : Trigger.new) {
        // Query for related records that were also deleted
        // and restore them if needed
    }
}`} />

              <h3>5.5 Conditional Processing by Size</h3>
              <CodeBlock language="apex" code={`// Use Trigger.size for conditional logic
trigger ProcessAccounts on Account (before insert) {
    // Different logic for bulk vs single record
    if (Trigger.size == 1) {
        // Single record processing
        System.debug('Single record mode');
    } else {
        // Bulk processing - optimize for performance
        System.debug('Bulk processing ' + Trigger.size + ' records');
    }
    
    // Early exit if no records
    if (Trigger.new.isEmpty()) {
        return;
    }
}`} />
            </section>

            <section>
              <h2>6. Common Pitfalls</h2>
              
              <h3>6.1 Accessing Null Variables</h3>
              <div className="info-box">
                <h4>⚠️ Common Errors</h4>
                <ul>
                  <li><strong>Attempting to de-reference null object</strong> - Using Trigger.old in before insert</li>
                  <li><strong>System.NullPointerException</strong> - Accessing Trigger.newMap before insert</li>
                  <li><strong>Invalid account ID</strong> - Using acc.Id in before insert (not yet assigned)</li>
                </ul>
              </div>

              <h3>6.2 Safe Access Pattern</h3>
              <CodeBlock language="apex" code={`// Safe pattern - check operation type before accessing variables
trigger SafeAccountTrigger on Account (before insert, after insert, before update, after update) {
    
    if (Trigger.isInsert) {
        // Trigger.new is available, Trigger.old is not
        for (Account acc : Trigger.new) {
            // Before insert - no ID yet
            if (Trigger.isBefore) {
                acc.Description = 'Created: ' + Date.today();
            }
            // After insert - ID is available
            if (Trigger.isAfter) {
                System.debug('New Account ID: ' + acc.Id);
            }
        }
    }
    
    if (Trigger.isUpdate) {
        // Both Trigger.new and Trigger.old are available
        for (Account acc : Trigger.new) {
            Account oldAcc = Trigger.oldMap.get(acc.Id);
            // Safe to compare
        }
    }
}`} />

              <h3>6.3 Avoiding Common Mistakes</h3>
              <CodeBlock language="apex" code={`// Mistake 1: Assuming Trigger.old exists in insert
// WRONG
trigger BadInsertTrigger on Account (before insert) {
    for (Account acc : Trigger.old) {  // ERROR: Trigger.old is null!
        // This will fail
    }
}

// Mistake 2: Trying to modify records in after trigger
// WRONG
trigger BadAfterTrigger on Account (after insert) {
    for (Account acc : Trigger.new) {
        acc.Name = 'Modified';  // ERROR: Cannot modify in after trigger!
    }
}

// Correct approach - use before trigger for modifications
trigger GoodBeforeTrigger on Account (before insert, before update) {
    for (Account acc : Trigger.new) {
        acc.Name = acc.Name + ' (Modified)';  // This works
    }
}`} />
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on trigger context variables, you learned:</p>
              <ul>
                <li>Operation context: isBefore, isAfter, isInsert, isUpdate, isDelete, isUndelete</li>
                <li>Record context: new, old, newMap, oldMap - what they contain and when available</li>
                <li>Trigger.size for checking number of records</li>
                <li>Trigger.operationType enum as an alternative to boolean checks</li>
                <li>Practical examples of detecting field changes</li>
                <li>Handling different operation types safely</li>
                <li>Common pitfalls and how to avoid them</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to Trigger Best Practices to learn about writing 
                efficient, maintainable triggers that follow Salesforce best practices.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/trigger-basics.html" className="nav-link">← Trigger Basics</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/trigger-best-practices.html" className="nav-link">Trigger Best Practices →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}