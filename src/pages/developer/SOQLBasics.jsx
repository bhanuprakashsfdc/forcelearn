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

export default function SOQLBasics() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/soql-basics" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path', label: 'Developer Path' },
            { label: 'SOQL Basics' }
          ]} />
          <article className="lesson-content">
            <h1>SOQL Basics</h1>
            <p className="lesson-intro">Learn Salesforce Object Query Language (SOQL) to retrieve data from Salesforce.</p>

            <section>
              <h2>What is SOQL?</h2>
              <p>SOQL is Salesforce's query language for retrieving data. It's similar to SQL but optimized for Salesforce objects.</p>
            </section>

            <section>
              <h2>Basic SOQL Syntax</h2>
              <CodeBlock language="soql" code={`SELECT field1, field2 FROM ObjectName WHERE condition`} />

              <p>Example - Query all accounts:</p>
              <CodeBlock language="apex" code={`List<Account> accounts = [SELECT Id, Name, Industry FROM Account];

// Iterate through results
for (Account acc : accounts) {
    System.debug(acc.Name + ' - ' + acc.Industry);
}`} />
            </section>

            <section>
              <h2>WHERE Clause</h2>
              <CodeBlock language="apex" code={`// Basic conditions
List<Account> acmeAccounts = [SELECT Name FROM Account 
    WHERE Name = 'Acme'];

// Multiple conditions
List<Opportunity> largeOpps = [SELECT Name, Amount FROM Opportunity 
    WHERE Amount > 10000 AND StageName = 'Closed Won'];

// IN operator
List<Account> techAccounts = [SELECT Name FROM Account 
    WHERE Industry IN ('Technology', 'Software')];

// LIKE operator (wildcard search)
List<Contact> contacts = [SELECT Name FROM Contact 
    WHERE Name LIKE 'S%'];

// Date conditions
List<Opportunity> thisMonthOpps = [SELECT Name FROM Opportunity 
    WHERE CloseDate = THIS_MONTH];`} />
            </section>

            <section>
              <h2>ORDER BY and LIMIT</h2>
              <CodeBlock language="apex" code={`// Order by
List<Account> sortedAccounts = [SELECT Name, AnnualRevenue FROM Account 
    ORDER BY AnnualRevenue DESC NULLS LAST];

// Limit results
List<Account> topAccounts = [SELECT Name FROM Account 
    ORDER BY AnnualRevenue DESC LIMIT 10];

// Offset (for pagination)
List<Account> page2 = [SELECT Name FROM Account 
    LIMIT 10 OFFSET 10];`} />
            </section>

            <section>
              <h2>Aggregating Results</h2>
              <CodeBlock language="apex" code={`// COUNT
Integer count = [SELECT COUNT() FROM Account WHERE Industry = 'Technology'];

// SUM
Decimal totalRevenue = [SELECT SUM(AnnualRevenue) total FROM Account][0].total;

// GROUP BY
List<AggregateResult> byIndustry = [SELECT Industry, COUNT(Id) cnt 
    FROM Account GROUP BY Industry];

for (AggregateResult ar : byIndustry) {
    System.debug(ar.get('Industry') + ': ' + ar.get('cnt'));
}

// HAVING
List<AggregateResult> largeAccounts = [SELECT Industry, COUNT(Id) cnt 
    FROM Account GROUP BY Industry HAVING COUNT(Id) > 5];`} />
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>SOQL retrieves data from Salesforce objects</li>
                <li>Use WHERE for filtering, ORDER BY for sorting</li>
                <li>Use aggregate functions for calculations</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/collections" className="nav-link">← Collections</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/relationship-queries" className="nav-link">Relationship Queries →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}