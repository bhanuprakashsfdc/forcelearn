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

export default function RelationshipQueries() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/relationship-queries" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path', label: 'Developer Path' },
            { label: 'Relationship Queries' }
          ]} />
          <article className="lesson-content">
            <h1>Relationship Queries</h1>
            <p className="lesson-intro">Learn how to query related data using parent-child and child-parent relationships in SOQL.</p>

            <section>
              <h2>Parent-Child Queries</h2>
              <p>Query data from a parent object and its related children in a single query.</p>
              <CodeBlock language="apex" code={`// Query child records from parent
List<Account> accounts = [SELECT Name, Industry, 
    (SELECT Name, Email FROM Contacts) 
    FROM Account];

for (Account acc : accounts) {
    System.debug('Account: ' + acc.Name);
    for (Contact c : acc.Contacts) {
        System.debug('  Contact: ' + c.Name + ' - ' + c.Email);
    }
}`} />
            </section>

            <section>
              <h2>Querying Up the Hierarchy</h2>
              <p>Access parent fields from child objects using lookup relationships.</p>
              <CodeBlock language="apex" code={`// Query parent fields from child
List<Contact> contacts = [SELECT Name, Account.Name, Account.Industry 
    FROM Contact 
    WHERE Account.Industry = 'Technology'];

for (Contact c : contacts) {
    System.debug(c.Name + ' works at ' + c.Account.Name);
}`} />
            </section>

            <section>
              <h2>Multiple Relationship Levels</h2>
              <p>Query across multiple levels of relationships.</p>
              <CodeBlock language="apex" code={`// Query opportunity from contact through account
List<Contact> contacts = [SELECT Name, 
    Account.Name, 
    (SELECT Name, Amount FROM Opportunities) 
    FROM Contact];

for (Contact c : contacts) {
    if (c.Account != null) {
        System.debug(c.Account.Name);
        for (Opportunity opp : c.Opportunities) {
            System.debug('  ' + opp.Name + ': $' + opp.Amount);
        }
    }
}`} />
            </section>

            <section>
              <h2>Filtering in Subqueries</h2>
              <p>Use WHERE clause in relationship subqueries.</p>
              <CodeBlock language="apex" code={`// Filter child records in subquery
List<Account> accounts = [SELECT Name, 
    (SELECT Name FROM Contacts WHERE Title = 'CEO') 
    FROM Account];

// Filter child records with aggregate
List<Account> accountsWithManyContacts = [SELECT Name, 
    (SELECT Id FROM Contacts) 
    FROM Account 
    WHERE (SELECT COUNT() FROM Contacts) > 5];`} />
            </section>

            <section>
              <h2>Limiting Child Records</h2>
              <CodeBlock language="apex" code={`// Use LIMIT in subquery (works with ORDER BY)
List<Account> accounts = [SELECT Name, 
    (SELECT Name, Amount FROM Opportunities 
     ORDER BY Amount DESC LIMIT 3) 
    FROM Account];`} />
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Use subqueries for parent-child relationships</li>
                <li>Access parent fields using dot notation</li>
                <li>Can query multiple levels deep</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/soql-basics" className="nav-link">← SOQL Basics</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/sosl-search" className="nav-link">SOSL Search →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}