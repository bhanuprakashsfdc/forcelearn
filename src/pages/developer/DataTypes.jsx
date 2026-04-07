import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'
import CodeBlock from '../../components/content/CodeBlock'

const developerSidebarModules = [
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

export default function DataTypes() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/data-types" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path', label: 'Developer Path' },
            { label: 'Data Types & Variables' }
          ]} />
          <article className="lesson-content">
            <h1>Data Types & Variables</h1>
            <p className="lesson-intro">Learn about Apex data types, how to declare variables, and work with different value types.</p>

            <section>
              <h2>Primitive Data Types</h2>
              <ul>
                <li><strong>Integer:</strong> 32-bit number (-2,147,483,648 to 2,147,483,647)</li>
                <li><strong>Long:</strong> 64-bit number</li>
                <li><strong>Double:</strong> 64-bit floating point</li>
                <li><strong>Boolean:</strong> true, false, or null</li>
                <li><strong>String:</strong> Unicode characters (wrapped in quotes)</li>
                <li><strong>Date, Datetime, Time:</strong> Date/time values</li>
                <li><strong>ID:</strong> Any valid Salesforce record ID</li>
              </ul>
            </section>

            <section>
              <h2>Declaring Variables</h2>
              <CodeBlock language="apex" code={`Integer count = 10;
String companyName = 'Acme Corp';
Boolean isActive = true;
Decimal price = 99.99;
Date today = Date.today();
Datetime now = Datetime.now();`} />
            </section>

            <section>
              <h2>sObjects</h2>
              <p>sObjects represent Salesforce records:</p>
              <CodeBlock language="apex" code={`// Standard object
Account acc = new Account(Name = 'Acme Corp', Industry = 'Technology');

// Custom object
Project__c proj = new Project__c(Name = 'Project Alpha', Status__c = 'In Progress');`} />
            </section>

            <section>
              <h2>Type Casting</h2>
              <p>Apex supports explicit and implicit type casting:</p>
              <CodeBlock language="apex" code={`String s = '123';
Integer i = Integer.valueOf(s);  // Explicit

Integer x = 10;
Decimal d = x;  // Implicit`} />
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Primitives: Integer, Boolean, String, Date, etc.</li>
                <li>sObjects represent database records</li>
                <li>Variables declared with type and optional initialization</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/apex-introduction.html" className="nav-link">← Getting Started with Apex</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/classes-methods.html" className="nav-link">Classes & Methods →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}