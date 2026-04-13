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

export default function TriggerBestPractices() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/trigger-best-practices.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'Trigger Best Practices' }
          ]} />
          <article className="lesson-content">
            <h1>Trigger Best Practices: Writing Efficient, Maintainable Triggers</h1>
            <p className="lesson-intro">
              This comprehensive guide covers the essential best practices for writing Apex triggers 
              that are efficient, maintainable, and follow Salesforce development standards. Learn about 
              bulkification, handler patterns, recursion prevention, and more.
            </p>

            <section>
              <h2>1. Bulkification - The Foundation</h2>
              <p>Triggers must handle multiple records efficiently. Bulkification is the practice of writing 
              code that processes all records in a trigger, not just one at a time.</p>

              <h3>1.1 Anti-Patterns to Avoid</h3>
              <CodeBlock language="apex" code={`// BAD - Query inside loop
trigger BadTrigger on Account (after insert) {
    for (Account acc : Trigger.new) {
        // BAD: Query for each account - hits SOQL limit!
        List&lt;Contact&gt; contacts = [
            SELECT Id FROM Contact 
            WHERE AccountId = :acc.Id
        ];
        acc.Contact_Count__c = contacts.size();
    }
}

// BAD - DML inside loop
trigger AnotherBadTrigger on Account (before insert) {
    for (Account acc : Trigger.new) {
        // BAD: DML for each record - hits DML limit!
        Task t = new Task(Subject = 'Welcome', WhatId = acc.Id);
        insert t;
    }
}`} />

              <h3>1.2 Bulk-Friendly Pattern</h3>
              <CodeBlock language="apex" code={`// GOOD - Single query outside loop
trigger GoodTrigger on Account (after insert) {
    // Collect all Account IDs first
    Set&lt;ID&gt; accountIds = new Set&lt;ID&gt;();
    for (Account acc : Trigger.new) {
        accountIds.add(acc.Id);
    }
    
    // Single query for all accounts
    Map&lt;ID, List&lt;Contact&gt;&gt; contactsByAccount = new Map&lt;ID, List&lt;Contact&gt;&gt;();
    for (Contact c : [
        SELECT Id, AccountId FROM Contact 
        WHERE AccountId IN :accountIds
    ]) {
        if (!contactsByAccount.containsKey(c.AccountId)) {
            contactsByAccount.put(c.AccountId, new List&lt;Contact&gt;());
        }
        contactsByAccount.get(c.AccountId).add(c);
    }
    
    // Bulk update
    List&lt;Account&gt; accountsToUpdate = new List&lt;Account&gt;();
    for (Account acc : Trigger.new) {
        Integer count = contactsByAccount.containsKey(acc.Id) 
            ? contactsByAccount.get(acc.Id).size() 
            : 0;
        acc.Contact_Count__c = count;
        accountsToUpdate.add(acc);
    }
}`} />

              <h3>1.3 Bulk DML Pattern</h3>
              <CodeBlock language="apex" code={`// GOOD - Collect DML operations and execute once
trigger CreateTasksOnAccount on Account (after insert) {
    List&lt;Task&gt; tasksToCreate = new List&lt;Task&gt;();
    
    // Collect all tasks to create
    for (Account acc : Trigger.new) {
        Task welcome = new Task(
            Subject = 'Welcome to ' + acc.Name,
            WhatId = acc.Id,
            Priority = 'Normal',
            Status = 'Not Started'
        );
        tasksToCreate.add(welcome);
    }
    
    // Single DML statement
    if (!tasksToCreate.isEmpty()) {
        insert tasksToCreate;
    }
}`} />

              <div className="info-box">
                <h4>💡 Golden Rule</h4>
                <p>Never execute queries or DML statements inside loops. Always collect 
                records first, then perform operations in bulk.</p>
              </div>
            </section>

            <section>
              <h2>2. Trigger Handler Pattern</h2>
              <p>The trigger handler pattern moves business logic from triggers into separate classes, 
              making code easier to test, maintain, and reuse.</p>

              <h3>2.1 Simple Handler Class</h3>
              <CodeBlock language="apex" code={`// Trigger - keep it minimal
trigger AccountTrigger on Account (
    before insert, before update, 
    after insert, after update,
    before delete, after delete
) {
    AccountTriggerHandler.handle(
        Trigger.new, 
        Trigger.old, 
        Trigger.newMap, 
        Trigger.oldMap,
        Trigger.operationType
    );
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
            when AFTER_INSERT {
                afterInsert(newRecords);
            }
            when BEFORE_UPDATE {
                beforeUpdate(newRecords, oldMap);
            }
            when AFTER_UPDATE {
                afterUpdate(newRecords, oldMap);
            }
            when BEFORE_DELETE {
                beforeDelete(oldRecords);
            }
            when AFTER_DELETE {
                afterDelete(oldRecords);
            }
            when else {
                // Handle remaining cases
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
        // Create related records
    }
    
    private static void beforeUpdate(Map&lt;ID, Account&gt; newMap) {
        // Validate updates
    }
    
    private static void afterUpdate(Map&lt;ID, Account&gt; newMap) {
        // Process updates
    }
    
    private static void beforeDelete(List&lt;Account&gt; accounts) {
        // Validate deletion
    }
    
    private static void afterDelete(List&lt;Account&gt; accounts) {
        // Cleanup related records
    }
}`} />
            </section>

            <section>
              <h2>3. Preventing Recursive Triggers</h2>
              <p>Infinite trigger loops occur when a trigger updates a record, which fires another 
              trigger, which updates again, creating an endless cycle.</p>

              <h3>3.1 Static Variable Pattern</h3>
              <CodeBlock language="apex" code={`// Handler with recursion guard
public with sharing class AccountTriggerHandler {
    
    // Static variable to track execution
    private static Boolean hasExecuted = false;
    
    public static void handleAfterUpdate(
        List&lt;Account&gt; newRecords, 
        Map&lt;ID, Account&gt; oldMap
    ) {
        // Prevent recursion
        if (hasExecuted) {
            return;
        }
        
        // Process only records that changed
        List&lt;Account&gt; changedAccounts = new List&lt;Account&gt;();
        for (Account acc : newRecords) {
            Account old = oldMap.get(acc.Id);
            if (acc.Industry != old.Industry) {
                changedAccounts.add(acc);
            }
        }
        
        if (changedAccounts.isEmpty()) {
            return;
        }
        
        // Set flag before making updates
        hasExecuted = true;
        
        // Make updates that would otherwise cause recursion
        for (Account acc : changedAccounts) {
            acc.Industry_History__c = acc.Industry + ';' + System.now();
        }
    }
}`} />

              <h3>3.2 Field-Based Recursion Prevention</h3>
              <CodeBlock language="apex" code={`// More granular control - check specific field changes
public static void handleAfterUpdate(
    List&lt;Account&gt; newRecords, 
    Map&lt;ID, Account&gt; oldMap
) {
    List&lt;Account&gt; accountsWithChanges = new List&lt;Account&gt;();
    
    for (Account acc : newRecords) {
        Account old = oldMap.get(acc.Id);
        // Only process if specific field changed
        if (acc.Rating != old.Rating || acc.Industry != old.Industry) {
            accountsWithChanges.add(acc);
        }
    }
    
    if (accountsWithChanges.isEmpty()) {
        return;
    }
    
    // Process only the changed accounts
    // Safe from recursive updates to same fields
}`} />

              <h3>3.3 Custom Setting Toggle</h3>
              <CodeBlock language="apex" code={`// Use custom setting to enable/disable trigger
public with sharing class TriggerHelper {
    
    public static Boolean isTriggerEnabled(String triggerName) {
        Trigger_Settings__c settings = Trigger_Settings__c.getInstance();
        
        return triggerName == 'AccountTrigger' 
            ? settings.Enable_Account_Trigger__c
            : triggerName == 'OpportunityTrigger'
                ? settings.Enable_Opportunity_Trigger__c
                : true;
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
              <h2>4. Error Handling and addError</h2>
              
              <h3>4.1 Using addError for Validation</h3>
              <CodeBlock language="apex" code={`trigger ValidateAccount on Account (before insert, before update) {
    for (Account acc : Trigger.new) {
        List&lt;String&gt; errors = new List&lt;String&gt;();
        
        // Check required fields
        if (String.isBlank(acc.Name)) {
            errors.add('Account Name is required');
        }
        
        // Check business rules
        if (acc.Type == 'Customer' && acc.Industry == null) {
            errors.add('Industry is required for Customer accounts');
        }
        
        if (acc.AnnualRevenue != null && acc.AnnualRevenue &lt; 0) {
            errors.add('Annual Revenue cannot be negative');
        }
        
        // Add error to specific field
        if (acc.Type == 'Prospect' && acc.Industry == null) {
            acc.Industry.addError('Industry is required for Prospect accounts');
        }
        
        // Add error to entire record
        if (!errors.isEmpty()) {
            acc.addError(String.join(errors, '; '));
        }
    }
}`} />

              <h3>4.2 Try-Catch for Unexpected Errors</h3>
              <CodeBlock language="apex" code={`public with sharing class AccountTriggerHandler {
    
    public static void handleAfterInsert(List&lt;Account&gt; accounts) {
        try {
            processAccounts(accounts);
        } catch (Exception e) {
            // Log error for debugging
            System.debug(LoggingLevel.ERROR, 'Error processing accounts: ' + e.getMessage());
            
            // Add user-friendly error
            for (Account acc : accounts) {
                acc.addError('An error occurred while processing your request. Please contact support.');
            }
        }
    }
    
    private static void processAccounts(List&lt;Account&gt; accounts) {
        // Business logic
    }
}`} />
            </section>

            <section>
              <h2>5. Governor Limit Awareness</h2>
              
              <h3>5.1 Common Limits in Triggers</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Limit</th>
                      <th>Value</th>
                      <th>Best Practice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>SOQL Queries</strong></td>
                      <td>100 per transaction</td>
                      <td>Use Maps, query once outside loops</td>
                    </tr>
                    <tr>
                      <td><strong>DML Statements</strong></td>
                      <td>150 per transaction</td>
                      <td>Collect and bulk DML</td>
                    </tr>
                    <tr>
                      <td><strong>CPU Time</strong></td>
                      <td>10,000ms</td>
                      <td>Avoid nested loops, optimize logic</td>
                    </tr>
                    <tr>
                      <td><strong>Heap Size</strong></td>
                      <td>6MB</td>
                      <td>Clear unused collections, lazy load</td>
                    </tr>
                    <tr>
                      <td><strong>Callouts</strong></td>
                      <td>100 per transaction</td>
                      <td>Batch callouts, use queueable</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>5.2 Checking Limits in Code</h3>
              <CodeBlock language="apex" code={`public with sharing class LimitHelper {
    
    public static void checkLimits() {
        // Check SOQL usage
        Integer queriesUsed = Limits.getQueries();
        Integer queriesLimit = Limits.getLimitQueries();
        System.debug('SOQL Queries: ' + queriesUsed + ' / ' + queriesLimit);
        
        // Check DML usage
        Integer dmlUsed = Limits.getDMLStatements();
        Integer dmlLimit = Limits.getLimitDMLStatements();
        System.debug('DML Statements: ' + dmlUsed + ' / ' + dmlLimit);
        
        // Check CPU time
        Integer cpuUsed = Limits.getCPUTime();
        Integer cpuLimit = Limits.getLimitCPUTime();
        System.debug('CPU Time: ' + cpuUsed + ' / ' + cpuLimit);
    }
    
    public static Boolean isApproachingLimit(String type) {
        if (type == 'SOQL') {
            return Limits.getQueries() &gt; Limits.getLimitQueries() * 0.8;
        } else if (type == 'DML') {
            return Limits.getDMLStatements() &gt; Limits.getLimitDMLStatements() * 0.8;
        }
        return false;
    }
}`} />
            </section>

            <section>
              <h2>6. Testing Triggers</h2>
              
              <h3>6.1 Basic Trigger Test</h3>
              <CodeBlock language="apex" code={`@isTest
public class AccountTriggerTest {
    
    @isTest
    public static void testBeforeInsertRating() {
        Account acc = new Account(
            Name = 'Test Account',
            Industry = 'Technology'
        );
        
        Test.startTest();
        insert acc;
        Test.stopTest();
        
        // Verify trigger set default rating
        Account result = [SELECT Rating FROM Account WHERE Id = :acc.Id];
        System.assertEquals('Warm', result.Rating);
    }
    
    @isTest
    public static void testBeforeUpdateIndustry() {
        Account acc = new Account(Name = 'Test');
        insert acc;
        
        acc.Industry = 'Technology';
        
        Test.startTest();
        update acc;
        Test.stopTest();
        
        // Verify update
        Account result = [SELECT Industry FROM Account WHERE Id = :acc.Id];
        System.assertEquals('Technology', result.Industry);
    }
}`} />

              <h3>6.2 Bulk Test</h3>
              <CodeBlock language="apex" code={`@isTest
public class AccountTriggerBulkTest {
    
    @isTest
    public static void testBulkInsert() {
        List&lt;Account&gt; accounts = new List&lt;Account&gt;();
        
        // Create 200 accounts (trigger limit is 200)
        for (Integer i = 0; i &lt; 200; i++) {
            accounts.add(new Account(
                Name = 'Test Account ' + i,
                Industry = 'Technology'
            ));
        }
        
        Test.startTest();
        insert accounts;
        Test.stopTest();
        
        // Verify all accounts were processed
        Integer count = [SELECT COUNT() FROM Account WHERE Name LIKE 'Test Account%'];
        System.assertEquals(200, count);
    }
}`} />
            </section>

            <section>
              <h2>7. Summary</h2>
              <p>In this comprehensive lesson on trigger best practices, you learned:</p>
              <ul>
                <li>Bulkification - always use collections, never query or DML in loops</li>
                <li>Trigger handler pattern for maintainable code</li>
                <li>Preventing recursive triggers with static variables</li>
                <li>Using custom settings to toggle triggers on/off</li>
                <li>Error handling with addError method</li>
                <li>Governor limits and how to check them</li>
                <li>Writing effective trigger tests</li>
              </ul>
              <p>
                <strong>Congratulations!</strong> You've completed the Developer Path basics. 
                Continue to LWC Overview to learn about building modern Salesforce UI components.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/context-variables.html" className="nav-link">← Trigger Context Variables</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/lwc-overview.html" className="nav-link">LWC Overview →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}