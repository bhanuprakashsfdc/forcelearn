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

export default function SOQLBasics() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/soql-basics.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'SOQL Basics' }
          ]} />
          <article className="lesson-content">
            <h1>SOQL Basics: Complete Guide to Salesforce Object Query Language</h1>
            <p className="lesson-intro">
              SOQL (Salesforce Object Query Language) is the primary mechanism for retrieving data 
              from the Salesforce database. This comprehensive guide covers query syntax, filtering, 
              sorting, aggregation, and best practices for writing efficient queries.
            </p>

            <section>
              <h2>1. Understanding SOQL</h2>
              <p>
                SOQL is similar to SQL (Structured Query Language) but specifically designed for 
                Salesforce's multi-tenant architecture. It allows you to query specific fields from 
                objects, filter results based on conditions, sort data, and aggregate values.
              </p>

              <h3>1.1 SOQL vs SQL</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>SOQL</th>
                      <th>SQL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Data Model</strong></td>
                      <td>Salesforce objects (sObjects)</td>
                      <td>Relational database tables</td>
                    </tr>
                    <tr>
                      <td><strong>Query Scope</strong></td>
                      <td>Single object per query (typically)</td>
                      <td>Multiple tables with JOINs</td>
                    </tr>
                    <tr>
                      <td><strong>Relationship</strong></td>
                      <td>Parent-child via relationships</td>
                      <td>JOINs</td>
                    </tr>
                    <tr>
                      <td><strong>Governor Limits</strong></td>
                      <td>Strict limits per transaction</td>
                      <td>Database-specific limits</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box">
                <h4>💡 Key Concept</h4>
                <p>SOQL queries return data in sObject format (Account, Contact, custom objects), 
                making it easy to work with query results directly in Apex.</p>
              </div>
            </section>

            <section>
              <h2>2. Basic SOQL Syntax</h2>
              <p>The fundamental SOQL query structure:</p>
              <CodeBlock language="soql" code={`SELECT field1, field2, field3
FROM ObjectName
WHERE condition
ORDER BY field1 [ASC|DESC] [NULLS FIRST|LAST]
LIMIT number
OFFSET number`} />

              <h3>2.1 Simple Query Examples</h3>
              <CodeBlock language="apex" code={`// Query all accounts - get specific fields
List&lt;Account&gt; accounts = [
    SELECT Id, Name, Industry, AnnualRevenue 
    FROM Account
];

// Iterate through results
for (Account acc : accounts) {
    System.debug(acc.Name + ' - ' + acc.Industry);
}

// Get single record
Account a = [SELECT Name FROM Account LIMIT 1];

// Count records
Integer count = [SELECT COUNT() FROM Account];

// Query single field
List&lt;String&gt; names = [SELECT Name FROM Account];  // List of Account, get Name field`} />

              <h3>2.2 Querying All Fields</h3>
              <CodeBlock language="apex" code={`// Use FIELDS ALL for all standard fields (API 51.0+)
List&lt;Account&gt; allAccounts = [SELECT FIELDS ALL FROM Account LIMIT 200];

// Use FIELDS STANDARD for standard fields only
List&lt;Account&gt; standardFields = [SELECT FIELDS STANDARD FROM Account LIMIT 200];

// Use FIELDS CUSTOM for custom fields only
List&lt;Project__c&gt; customFields = [SELECT FIELDS CUSTOM FROM Project__c LIMIT 200];

// Query specific fields - recommended for performance
List&lt;Account&gt; specificFields = [SELECT Id, Name, Industry FROM Account];`} />

              <h3>2.3 Date Literals</h3>
              <CodeBlock language="apex" code={`// Date literals - very useful for common date ranges
List&lt;Opportunity&gt; opps = [
    SELECT Id, Name, CloseDate 
    FROM Opportunity 
    WHERE CloseDate = TODAY
];

// Available date literals
// TODAY, TOMORROW, YESTERDAY
// THIS_WEEK, NEXT_WEEK, LAST_WEEK
// THIS_MONTH, NEXT_MONTH, LAST_MONTH
// THIS_QUARTER, NEXT_QUARTER, LAST_QUARTER
// THIS_YEAR, NEXT_YEAR, LAST_YEAR

// Date literals relative to a specific date
// N_DAYS_AGO:3 (3 days ago)
// NEXT_N_DAYS:5 (next 5 days)
// LAST_N_DAYS:7 (last 7 days)
// NEXT_N_WEEKS:2
// LAST_N_MONTHS:3`} />
            </section>

            <section>
              <h2>3. Filtering with WHERE Clause</h2>
              <p>The WHERE clause filters query results based on conditions:</p>

              <h3>3.1 Comparison Operators</h3>
              <CodeBlock language="apex" code={`// Basic comparisons
List&lt;Account&gt; accounts = [
    SELECT Name, AnnualRevenue 
    FROM Account 
    WHERE AnnualRevenue &gt; 100000
];

// Not equal to
List&lt;Account&gt; notTech = [
    SELECT Name FROM Account 
    WHERE Industry != 'Technology'
];

// Less than or greater than
List&lt;Opportunity&gt; closedWon = [
    SELECT Name, Amount 
    FROM Opportunity 
    WHERE Amount &lt;= 10000 
    AND StageName = 'Closed Won'
];

// NULL handling
List&lt;Account&gt; noRevenue = [
    SELECT Name 
    FROM Account 
    WHERE AnnualRevenue = NULL
];

// Better: use IS NULL / IS NOT NULL
List&lt;Account&gt; hasRevenue = [
    SELECT Name 
    FROM Account 
    WHERE AnnualRevenue != NULL
];`} />

              <h3>3.2 IN and NOT IN Operators</h3>
              <CodeBlock language="apex" code={`// IN operator - match any value in list
List&lt;Account&gt; accounts = [
    SELECT Name, Industry 
    FROM Account 
    WHERE Industry IN ('Technology', 'Finance', 'Healthcare')
];

// NOT IN
List&lt;Account&gt; exclude = [
    SELECT Name 
    FROM Account 
    WHERE Industry NOT IN ('Retail', 'Manufacturing')
];

// Using with subquery results
Set&lt;String&gt; industries = new Set&lt;String&gt;{'Technology', 'Finance'};
List&lt;Account&gt; accounts = [SELECT Name FROM Account WHERE Industry IN :industries];

// IN with IDs
Set&lt;ID&gt; accountIds = new Set&lt;ID&gt;{'001xxxxxxxxxxxx', '001yyyyyyyyyyyy'};
List&lt;Contact&gt; contacts = [SELECT Name FROM Contact WHERE AccountId IN :accountIds];`} />

              <h3>3.3 LIKE Operator for Pattern Matching</h3>
              <CodeBlock language="apex" code={`// Starts with - 'S%'
List&lt;Contact&gt; startsWithS = [
    SELECT Name 
    FROM Contact 
    WHERE Name LIKE 'S%'
];

// Ends with - '% Inc'
List&lt;Account&gt; endsWithInc = [
    SELECT Name 
    FROM Account 
    WHERE Name LIKE '% Inc'
];

// Contains - '%Smith%'
List&lt;Account&gt; containsSmith = [
    SELECT Name 
    FROM Account 
    WHERE Name LIKE '%Smith%'
];

// Escape character for special characters
List&lt;Account&gt; specialChar = [
    SELECT Name 
    FROM Account 
    WHERE Name LIKE '%100\\% discount%' ESCAPE '\\'
];

// NOT LIKE
List&lt;Account&gt; notAcme = [
    SELECT Name 
    FROM Account 
    WHERE Name NOT LIKE 'Acme%'
];`} />

              <h3>3.4 LIMIT and OFFSET for Pagination</h3>
              <CodeBlock language="apex" code={`// LIMIT - restrict number of results
List&lt;Account&gt; top10 = [
    SELECT Name, AnnualRevenue 
    FROM Account 
    ORDER BY AnnualRevenue DESC 
    LIMIT 10
];

// OFFSET - skip first N results (for pagination)
List&lt;Account&gt; page1 = [
    SELECT Name 
    FROM Account 
    LIMIT 10 OFFSET 0
];

List&lt;Account&gt; page2 = [
    SELECT Name 
    FROM Account 
    LIMIT 10 OFFSET 10
];

// Maximum offset is 2000
// For larger datasets, use search or SOQL with cursors`} />

              <h3>4.1 ORDER BY for Sorting</h3>
              <CodeBlock language="apex" code={`// Sort by single field - ascending (default)
List&lt;Account&gt; ascSorted = [
    SELECT Name, AnnualRevenue 
    FROM Account 
    ORDER BY Name ASC
];

// Descending order
List&lt;Account&gt; descSorted = [
    SELECT Name, AnnualRevenue 
    FROM Account 
    ORDER BY AnnualRevenue DESC
];

// NULLS LAST - put null values at end (important!)
List&lt;Account&gt; nullsLast = [
    SELECT Name, AnnualRevenue 
    FROM Account 
    ORDER BY AnnualRevenue DESC NULLS LAST
];

// Multiple fields - sort by multiple criteria
List&lt;Opportunity&gt; multiSort = [
    SELECT Name, StageName, Amount, CloseDate 
    FROM Opportunity 
    ORDER BY StageName ASC, Amount DESC, CloseDate ASC
];`} />

              <h3>4.2 NULLS FIRST/LAST</h3>
              <CodeBlock language="apex" code={`// When sorting fields with NULL values, use NULLS FIRST/LAST

// Put NULLs first
List&lt;Account&gt; nullsFirst = [
    SELECT Name, AnnualRevenue 
    FROM Account 
    ORDER BY AnnualRevenue NULLS FIRST
];

// Put NULLs last (usually preferred)
List&lt;Account&gt; nullsLast = [
    SELECT Name, AnnualRevenue 
    FROM Account 
    ORDER BY AnnualRevenue NULLS LAST
];`} />
            </section>

            <section>
              <h2>5. Aggregation Functions</h2>
              <p>SOQL supports aggregate functions for calculating values across records:</p>

              <h3>5.1 COUNT and COUNT_DISTINCT</h3>
              <CodeBlock language="apex" code={`// COUNT() - count all records
Integer totalCount = [SELECT COUNT() FROM Account];

// COUNT_DISTINCT - count unique values
Integer uniqueIndustries = [SELECT COUNT_DISTINCT(Industry) FROM Account];

// COUNT() with alias
List&lt;AggregateResult&gt; countResults = [
    SELECT COUNT() totalAccounts 
    FROM Account
];
System.debug(countResults[0].get('totalAccounts'));

// Note: COUNT() cannot be used with other aggregate functions
// Use GROUP BY for combined aggregations`} />

              <h3>5.2 SUM, AVG, MIN, MAX</h3>
              <CodeBlock language="apex" code={`// SUM - total of numeric field
List&lt;AggregateResult&gt; revenueSum = [
    SELECT SUM(AnnualRevenue) totalRevenue 
    FROM Account
];
Decimal total = (Decimal)revenueSum[0].get('totalRevenue');

// AVG - average value
List&lt;AggregateResult&gt; avgRevenue = [
    SELECT AVG(AnnualRevenue) avgRev 
    FROM Account
];

// MIN - minimum value
List&lt;AggregateResult&gt; minAmount = [
    SELECT MIN(CloseDate) earliest 
    FROM Opportunity 
    WHERE StageName = 'Closed Won'
];

// MAX - maximum value
List&lt;AggregateResult&gt; maxAmount = [
    SELECT MAX(Amount) highestAmount 
    FROM Opportunity
];

// Aggregate on custom fields
List&lt;AggregateResult&gt; budgetSum = [
    SELECT SUM(Budget__c) total 
    FROM Project__c
];`} />

              <h3>5.3 GROUP BY</h3>
              <CodeBlock language="apex" code={`// Group by single field
List&lt;AggregateResult&gt; byIndustry = [
    SELECT Industry, COUNT(Id) accountCount 
    FROM Account 
    WHERE Industry != NULL 
    GROUP BY Industry
];

for (AggregateResult ar : byIndustry) {
    String industry = (String)ar.get('Industry');
    Integer count = (Integer)ar.get('accountCount');
    System.debug(industry + ': ' + count);
}

// Group by multiple fields
List&lt;AggregateResult&gt; byIndustryType = [
    SELECT Industry, Type, COUNT(Id) cnt 
    FROM Account 
    GROUP BY Industry, Type
];

// Group by with HAVING - filter grouped results
List&lt;AggregateResult&gt; largeGroups = [
    SELECT Industry, COUNT(Id) cnt 
    FROM Account 
    GROUP BY Industry 
    HAVING COUNT(Id) &gt; 5
];`} />

              <h3>5.4 FOR UPDATE (Row Locking)</h3>
              <CodeBlock language="apex" code={`// FOR UPDATE - lock rows to prevent concurrent modifications
List&lt;Account&gt; lockedAccounts = [
    SELECT Name, AnnualRevenue 
    FROM Account 
    WHERE Industry = 'Technology'
    FOR UPDATE
];

// When using FOR UPDATE:
// - Other transactions waiting to lock same rows will be blocked
// - Maximum 20000 rows can be locked
// - Use carefully to avoid deadlocks`} />

              <div className="info-box">
                <h4>⚠️ Performance Tip</h4>
                <p>Avoid using SELECT COUNT() in loops. If you need counts, consider storing them 
                or using COUNT_FIELD with a single query.</p>
              </div>
            </section>

            <section>
              <h2>6. Dynamic SOQL</h2>
              <p>Dynamic SOQL allows building queries at runtime:</p>

              <h3>6.1 String-Based Queries</h3>
              <CodeBlock language="apex" code={`// Build query dynamically
String objectName = 'Account';
String fieldName = 'Industry';
String fieldValue = 'Technology';

String query = 'SELECT Id, Name FROM ' + objectName + 
    ' WHERE ' + fieldName + ' = :fieldValue';

List&lt;sObject&gt; results = Database.query(query);`} />

              <h3>6.2 Dynamic Query with Security</h3>
              <CodeBlock language="apex" code={`// Use with sharing to respect permissions
public with sharing class AccountService {
    
    public List&lt;Account&gt; searchAccounts(String industry, String searchTerm) {
        String query = 'SELECT Id, Name FROM Account WHERE Industry = :industry';
        
        if (String.isNotBlank(searchTerm)) {
            query += ' AND Name LIKE :searchTerm';
        }
        
        searchTerm = '%' + searchTerm + '%';
        return Database.query(query);
    }
    
    // More secure: validate object and fields
    public List&lt;sObject&gt; safeQuery(String objectName, List&lt;String&gt; fields) {
        // Validate object
        Schema.DescribeSObjectResult[] results = Schema.describeSObjects(
            new String[]{objectName}
        );
        if (results.size() == 0 || !results[0].isAccessible()) {
            return new List&lt;sObject&gt;();
        }
        
        // Build query with validated fields
        String query = 'SELECT ' + String.join(fields, ', ') + ' FROM ' + objectName;
        return Database.query(query);
    }
}`} />

              <div className="info-box">
                <h4>⚠️ SOQL Injection</h4>
                <p>Never concatenate user input directly into SOQL queries. Use bind variables 
                (:variable) or validate all input thoroughly to prevent SOQL injection attacks.</p>
              </div>
            </section>

            <section>
              <h2>7. Query Optimization Best Practices</h2>
              
              <h3>7.1 Select Only Needed Fields</h3>
              <CodeBlock language="apex" code={`// BAD - Select all fields
List&lt;Account&gt; all = [SELECT FIELDS ALL FROM Account];

// GOOD - Select specific fields
List&lt;Account&gt; specific = [SELECT Id, Name, Industry FROM Account];

// Even better: select only fields you need
for (Account a : accounts) {
    // Use only these fields
}`} />

              <h3>7.2 Use Indexes Effectively</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Optimized</th>
                      <th>Avoid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>WHERE Id = '001...'</code></td>
                      <td>External ID lookups without index</td>
                    </tr>
                    <tr>
                      <td><code>WHERE Email = 'test@test.com'</code></td>
                      <td>Case-insensitive on encrypted fields</td>
                    </tr>
                    <tr>
                      <td><code>WHERE RecordType.DeveloperName = '...'</code></td>
                      <td>Polymorphic field lookups</td>
                    </tr>
                    <tr>
                      <td><code>WHERE CustomIndexField__c = 'value'</code></td>
                      <td>Non-indexed fields</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>7.3 Avoid Functions in WHERE Clause</h3>
              <CodeBlock language="apex" code={`// BAD - Function on field prevents index use
List&lt;Account&gt; bad = [
    SELECT Name FROM Account 
    WHERE UPPER(Name) = 'ACME'
];

// GOOD - Use bind variable
String searchTerm = 'ACME';
List&lt;Account&gt; good = [
    SELECT Name FROM Account 
    WHERE Name = :searchTerm
];

// GOOD - For date functions, use date literals
List&lt;Opportunity&gt; dateLit = [
    SELECT Name FROM Opportunity 
    WHERE CloseDate = THIS_YEAR
];

// BAD - Function on date field
List&lt;Opportunity&gt; badDate = [
    SELECT Name FROM Opportunity 
    WHERE CALENDAR_YEAR(CloseDate) = 2024
];`} />

              <h3>7.4 Use LIMIT Wisely</h3>
              <CodeBlock language="apex" code={`// Always use LIMIT for queries in triggers
List&lt;Account&gt; accounts = [
    SELECT Name FROM Account 
    WHERE Industry = 'Technology'
    LIMIT 1000  // Stay under query row limit
];

// In triggers, use ALL ROWS carefully
// Only use for complete dataset processing`} />
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on SOQL basics, you learned:</p>
              <ul>
                <li>SOQL fundamentals and how it differs from SQL</li>
                <li>Basic query syntax: SELECT, FROM, WHERE</li>
                <li>Filtering with comparison operators, IN, LIKE</li>
                <li>Sorting with ORDER BY and handling NULL values</li>
                <li>Aggregation: COUNT, SUM, AVG, MIN, MAX, GROUP BY</li>
                <li>Dynamic SOQL for runtime queries</li>
                <li>Query optimization and best practices</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to Relationship Queries to learn how to query related 
                records through Salesforce's relationship fields.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/collections.html" className="nav-link">← Collections</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/relationship-queries.html" className="nav-link">Relationship Queries →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}