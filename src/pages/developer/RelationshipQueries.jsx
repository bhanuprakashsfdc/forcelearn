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

export default function RelationshipQueries() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/relationship-queries.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'Relationship Queries' }
          ]} />
          <article className="lesson-content">
            <h1>Relationship Queries in SOQL: Complete Guide</h1>
            <p className="lesson-intro">
              Salesforce's relational data model allows you to query related records through parent-child 
              and child-parent relationships. This comprehensive guide covers querying up and down the 
              relationship hierarchy, filtering subqueries, and optimizing relationship queries.
            </p>

            <section>
              <h2>1. Understanding Salesforce Relationships</h2>
              <p>Salesforce objects connect through two types of relationships:</p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Relationship Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Lookup</strong></td>
                      <td>Optional, looser connection</td>
                      <td>Contact → Account (lookup)</td>
                    </tr>
                    <tr>
                      <td><strong>Master-Detail</strong></td>
                      <td>Required, cascading control</td>
                      <td>Line Item → Opportunity (M-D)</td>
                    </tr>
                    <tr>
                      <td><strong>Self-Referential</strong></td>
                      <td>Object relates to itself</td>
                      <td>Account → Parent Account</td>
                    </tr>
                    <tr>
                      <td><strong>Hierarchical</strong></td>
                      <td>Only for User object</td>
                      <td>User → Manager</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>1.1 Relationship Names</h3>
              <ul>
                <li><strong>Standard Lookup:</strong> Uses relationship name like <code>Account</code> on Contact</li>
                <li><strong>Custom Lookup:</strong> Ends with <code>__r</code>, e.g., <code>Project__r</code></li>
                <li><strong>Child Relationship:</strong> Plural API name, e.g., <code>Contacts</code>, <code>Opportunities</code></li>
              </ul>
            </section>

            <section>
              <h2>2. Querying Parent Fields (Child to Parent)</h2>
              <p>Access parent object fields from a child using dot notation:</p>

              <h3>2.1 Basic Parent Field Access</h3>
              <CodeBlock language="apex" code={`// Query parent fields from child object
List&lt;Contact&gt; contacts = [
    SELECT Name, Email, Account.Name, Account.Industry 
    FROM Contact 
    WHERE Account.Industry = 'Technology'
];

for (Contact c : contacts) {
    // Access parent fields directly on the relationship
    System.debug(c.Name + ' at ' + c.Account.Name + ' (' + c.Account.Industry + ')');
}

// Query with multiple parent fields
List&lt;Opportunity&gt; opps = [
    SELECT Name, Amount, 
    Account.Name,           // Parent Account
    Account.BillingCity,   // Parent Account field
    Owner.Name,            // Parent User (Owner)
    Owner.Department       // Parent User field
    FROM Opportunity
];`} />

              <h3>2.2 Handling Null Parent References</h3>
              <CodeBlock language="apex" code={`// Check for null parent before accessing
List&lt;Contact&gt; contacts = [SELECT Name, Account.Name FROM Contact];

for (Contact c : contacts) {
    if (c.Account != null) {
        System.debug(c.Account.Name);
    } else {
        System.debug('No account associated');
    }
}

// Alternative: Use conditional access (API 58.0+)
for (Contact c : contacts) {
    String accountName = c.Account?.Name;
    System.debug(accountName);  // null if Account is null
}`} />

              <h3>2.3 Custom Relationship Queries</h3>
              <CodeBlock language="apex" code={`// Custom lookup relationship
// For Project__c with a lookup to Account called Account__c
List&lt;Project__c&gt; projects = [
    SELECT Name, Budget__c, Account__r.Name, Account__r.Industry 
    FROM Project__c
    WHERE Status__c = 'Active'
];

// Note: Custom lookups use __r suffix, not __c`} />

              <div className="info-box">
                <h4>💡 Key Concept</h4>
                <p>For custom relationship fields, use the <code>__r</code> suffix (relationship name) 
                to access parent fields, not the <code>__c</code> field name.</p>
              </div>
            </section>

            <section>
              <h2>3. Querying Child Records (Parent to Child)</h2>
              <p>Use subqueries to retrieve child records in a single query:</p>

              <h3>3.1 Basic Subquery Syntax</h3>
              <CodeBlock language="apex" code={`// Subquery for child records - note the plural relationship name
List&lt;Account&gt; accounts = [
    SELECT Name, Industry, 
    (SELECT Name, Email, Phone FROM Contacts) 
    FROM Account
];

for (Account acc : accounts) {
    System.debug('Account: ' + acc.Name);
    // Access child records through the relationship
    for (Contact c : acc.Contacts) {
        System.debug('  Contact: ' + c.Name + ' - ' + c.Email);
    }
}`} />

              <h3>3.2 Subqueries with Multiple Child Types</h3>
              <CodeBlock language="apex" code={`// Query multiple child relationships
List&lt;Account&gt; accounts = [
    SELECT Name, 
    (SELECT Name, Email FROM Contacts),           // Child relationship 1
    (SELECT Name, StageName, Amount FROM Opportunities),  // Child relationship 2
    (SELECT Subject, Status FROM Cases)          // Child relationship 3
    FROM Account
];

for (Account acc : accounts) {
    System.debug('Account: ' + acc.Name);
    
    // Iterate through Contacts
    for (Contact c : acc.Contacts) {
        System.debug('  Contact: ' + c.Name);
    }
    
    // Iterate through Opportunities
    for (Opportunity opp : acc.Opportunities) {
        System.debug('  Opportunity: ' + opp.Name + ' ($' + opp.Amount + ')');
    }
    
    // Iterate through Cases
    for (Case cs : acc.Cases) {
        System.debug('  Case: ' + cs.Subject + ' - ' + cs.Status);
    }
}`} />
            </section>

            <section>
              <h2>4. Filtering in Subqueries</h2>
              <p>Add WHERE and ORDER BY clauses directly in subqueries:</p>

              <h3>4.1 WHERE in Subquery</h3>
              <CodeBlock language="apex" code={`// Filter child records in the subquery
List&lt;Account&gt; accountsWithCEOs = [
    SELECT Name, 
    (SELECT Name, Title FROM Contacts WHERE Title = 'CEO') 
    FROM Account
];

// Only accounts with CEO contacts will have populated subqueries
for (Account acc : accountsWithCEOs) {
    if (!acc.Contacts.isEmpty()) {
        System.debug('CEO at ' + acc.Name + ': ' + acc.Contacts[0].Name);
    }
}

// Filter with multiple conditions
List&lt;Account&gt; accounts = [
    SELECT Name, 
    (SELECT Name, Amount FROM Opportunities 
     WHERE StageName = 'Closed Won' AND Amount &gt; 10000) 
    FROM Account
];`} />

              <h3>4.2 ORDER BY in Subquery</h3>
              <CodeBlock language="apex" code={`// Order and limit child records
List&lt;Account&gt; accounts = [
    SELECT Name, 
    (SELECT Name, Amount FROM Opportunities 
     ORDER BY Amount DESC LIMIT 3) 
    FROM Account
];

// This gets top 3 opportunities by amount for each account
for (Account acc : accounts) {
    System.debug('Top opportunities for ' + acc.Name);
    for (Opportunity opp : acc.Opportunities) {
        System.debug('  ' + opp.Name + ': $' + opp.Amount);
    }
}`} />

              <h3>4.3 Multiple Filters</h3>
              <CodeBlock language="apex" code={`// Combined WHERE and ORDER BY with LIMIT
List&lt;Account&gt; accounts = [
    SELECT Name, 
    (SELECT Name, CloseDate FROM Opportunities 
     WHERE StageName = 'Closed Won'
     ORDER BY CloseDate DESC 
     LIMIT 5) 
    FROM Account
];`} />
            </section>

            <section>
              <h2>5. Multi-Level Relationship Queries</h2>
              <p>Query across multiple relationship levels in a single query:</p>

              <h3>5.1 Three Levels Deep</h3>
              <CodeBlock language="apex" code={`// Query: Contact → Account → Parent Account
List&lt;Contact&gt; contacts = [
    SELECT Name, 
    Account.Name,                    // Level 1: Parent
    Account.Parent.Name,             // Level 2: Grandparent
    Account.Parent.Parent.Name       // Level 3: Great-grandparent
    FROM Contact
    WHERE Account.Parent != NULL
];

for (Contact c : contacts) {
    String hierarchy = c.Name;
    hierarchy += ' → ' + c.Account.Name;
    hierarchy += ' → ' + c.Account.Parent.Name;
    hierarchy += ' → ' + c.Account.Parent.Parent.Name;
    System.debug(hierarchy);
}`} />

              <h3>5.2 Parent and Children Together</h3>
              <CodeBlock language="apex" code={`// Query parent fields AND child subqueries together
List&lt;Contact&gt; contacts = [
    SELECT Name, 
    Account.Name,                           // Parent field
    Account.Industry,                      // Parent field
    (SELECT Name, Amount FROM Opportunities WHERE StageName = 'Closed Won')  // Children
    FROM Contact
];

for (Contact c : contacts) {
    if (c.Account != null) {
        System.debug('Contact: ' + c.Name + ' at ' + c.Account.Name);
        for (Opportunity opp : c.Opportunities) {
            System.debug('  Won Deal: ' + opp.Name + ' - $' + opp.Amount);
        }
    }
}`} />

              <h3>5.3 Deep Query with Subqueries</h3>
              <CodeBlock language="apex" code={`// Query Account with Contacts, and Contacts with Opportunities
List&lt;Account&gt; accounts = [
    SELECT Name, 
    (SELECT Name, 
     Account.Name,                           // Parent field on Contact
     (SELECT Name, Amount FROM Opportunities)  // Sub-sub-query
     FROM Contacts) 
    FROM Account
];

for (Account acc : accounts) {
    for (Contact c : acc.Contacts) {
        for (Opportunity opp : c.Opportunities) {
            System.debug(acc.Name + ' → ' + c.Name + ' → ' + opp.Name);
        }
    }
}`} />
            </section>

            <section>
              <h2>6. Aggregate Results with Relationships</h2>
              
              <h3>6.1 Counting Child Records</h3>
              <CodeBlock language="apex" code={`// COUNT in subquery
List&lt;Account&gt; accounts = [
    SELECT Name, 
    (SELECT Id FROM Contacts), 
    (SELECT Id FROM Opportunities), 
    (SELECT Id FROM Cases) 
    FROM Account
];

// Count child records after querying
for (Account acc : accounts) {
    Integer contactCount = acc.Contacts.size();
    Integer oppCount = acc.Opportunities.size();
    Integer caseCount = acc.Cases.size();
    System.debug(acc.Name + ': ' + contactCount + ' contacts, ' + oppCount + ' opps');
}

// Use COUNT with GROUP BY on parent
List&lt;AggregateResult&gt; contactCounts = [
    SELECT Account.Industry, COUNT(Id) totalContacts
    FROM Contact
    WHERE Account.Industry != NULL
    GROUP BY Account.Industry
];`} />

              <h3>6.2 Aggregating Child Values</h3>
              <CodeBlock language="apex" code={`// Use aggregate on child through parent query
List&lt;AggregateResult&gt; oppSums = [
    SELECT Account.Name, SUM(Amount) totalAmount, COUNT(Id) dealCount
    FROM Opportunity
    WHERE StageName = 'Closed Won'
    GROUP BY Account.Name
    ORDER BY SUM(Amount) DESC
];

for (AggregateResult ar : oppSums) {
    System.debug(ar.get('Name') + ': $' + ar.get('totalAmount') + 
                ' across ' + ar.get('dealCount') + ' deals');
}`} />
            </section>

            <section>
              <h2>7. Working with Aggregate Results</h2>
              
              <h3>7.1 Accessing Aggregate Results</h3>
              <CodeBlock language="apex" code={`// AggregateResult returns Object - must cast
List&lt;AggregateResult&gt; results = [
    SELECT Industry, 
           COUNT(Id) count, 
           SUM(AnnualRevenue) revenue, 
           AVG(AnnualRevenue) avgRevenue
    FROM Account
    WHERE Industry != NULL
    GROUP BY Industry
];

for (AggregateResult ar : results) {
    String industry = (String)ar.get('Industry');
    Integer count = (Integer)ar.get('count');
    Decimal revenue = (Decimal)ar.get('revenue');
    Decimal avg = (Decimal)ar.get('avgRevenue');
    
    System.debug(industry + ': ' + count + ' accounts, $' + revenue + ' total, $' + avg + ' avg');
}`} />

              <h3>7.2 Aliases for Aggregate Fields</h3>
              <CodeBlock language="apex" code={`// Use aliases for cleaner code
List&lt;AggregateResult&gt; results = [
    SELECT Industry ind, 
           COUNT(Id) cnt, 
           SUM(AnnualRevenue) total, 
           MIN(AnnualRevenue) minRev,
           MAX(AnnualRevenue) maxRev
    FROM Account
    WHERE Industry != NULL
    GROUP BY Industry
    ORDER BY SUM(AnnualRevenue) DESC
];

for (AggregateResult ar : results) {
    System.debug('Industry: ' + ar.get('ind'));
    System.debug('  Count: ' + ar.get('cnt'));
    System.debug('  Total: ' + ar.get('total'));
    System.debug('  Min: ' + ar.get('minRev'));
    System.debug('  Max: ' + ar.get('maxRev'));
}`} />
            </section>

            <section>
              <h2>8. Relationship Query Best Practices</h2>
              
              <h3>8.1 Query Efficiency</h3>
              <ul>
                <li>Use relationship queries instead of multiple separate queries</li>
                <li>Filter in the WHERE clause at parent level when possible</li>
                <li>Use LIMIT in subqueries to control data volume</li>
                <li>Only query the fields you need</li>
              </ul>

              <h3>8.2 Avoiding Pitfalls</h3>
              <div className="info-box">
                <h4>⚠️ Common Mistakes</h4>
                <ul>
                  <li>Don't query more than 5 levels of parent-child relationships</li>
                  <li>Don't use subqueries on more than 2 child types per query</li>
                  <li>Always check for null parent references</li>
                  <li>Be aware of query row limits when expanding relationships</li>
                </ul>
              </div>

              <h3>8.3 Alternative: Two-Pass Query</h3>
              <CodeBlock language="apex" code={`// Sometimes two separate queries are more efficient
// Pass 1: Get accounts with high revenue
List&lt;Account&gt; topAccounts = [
    SELECT Id, Name, AnnualRevenue 
    FROM Account 
    ORDER BY AnnualRevenue DESC 
    LIMIT 100
];

// Pass 2: Get contacts for those accounts
Set&lt;ID&gt; accountIds = new Map&lt;ID, Account&gt;(topAccounts).keySet();
Map&lt;ID, List&lt;Contact&gt;&gt; contactsByAccount = new Map&lt;ID, List&lt;Contact&gt;&gt;();

for (Contact c : [SELECT Id, Name, AccountId FROM Contact WHERE AccountId IN :accountIds]) {
    if (!contactsByAccount.containsKey(c.AccountId)) {
        contactsByAccount.put(c.AccountId, new List&lt;Contact&gt;());
    }
    contactsByAccount.get(c.AccountId).add(c);
}

// Now process combined data
for (Account acc : topAccounts) {
    List&lt;Contact&gt; related = contactsByAccount.get(acc.Id);
    // Process...
}`} />
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on relationship queries, you learned:</p>
              <ul>
                <li>Understanding Salesforce relationship types: Lookup, Master-Detail</li>
                <li>Querying parent fields using dot notation (child-to-parent)</li>
                <li>Using subqueries to retrieve child records (parent-to-child)</li>
                <li>Filtering and ordering within subqueries</li>
                <li>Querying across multiple relationship levels</li>
                <li>Working with AggregateResult from grouped queries</li>
                <li>Best practices and performance optimization</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to SOSL Search to learn Salesforce's search language for 
                finding data across multiple objects.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/soql-basics.html" className="nav-link">← SOQL Basics</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/sosl-search.html" className="nav-link">SOSL Search →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}