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

export default function ApexIntroduction() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/apex-introduction" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path', label: 'Developer Path' },
            { label: 'Getting Started with Apex' }
          ]} />
          <article className="lesson-content">
            <h1>Getting Started with Apex</h1>
            <p className="lesson-intro">Learn the fundamentals of Apex, Salesforce's programming language, and set up your development environment.</p>

            <section>
              <h2>What is Apex?</h2>
              <p>Apex is a strongly typed, object-oriented programming language that allows developers to execute flow and transaction control statements on the Salesforce platform. It's similar to Java in syntax.</p>
            </section>

            <section>
              <h2>Development Environment</h2>
              <p>You can write Apex in several ways:</p>
              <ul>
                <li><strong>Developer Console</strong> - Built-in IDE (Gear icon → Developer Console)</li>
                <li><strong>VS Code</strong> - Use Salesforce Extension Pack with Salesforce CLI</li>
                <li><strong>Salesforce CLI</strong> - Command-line interface</li>
              </ul>
            </section>

            <section>
              <h2>Your First Apex Class</h2>
              <p>Let's create a simple class in the Developer Console:</p>
              <CodeBlock language="apex" code={`public class HelloWorld {
    // This is a comment
    public String greet() {
        return 'Hello, World!';
    }
}`} />
            </section>

            <section>
              <h2>Execute Anonymous</h2>
              <p>Run Apex code directly using Execute Anonymous:</p>
              <CodeBlock language="apex" code={`HelloWorld hw = new HelloWorld();
System.debug(hw.greet());`} />
            </section>

            <section>
              <h2>Apex Data Types</h2>
              <ul>
                <li><strong>Primitives:</strong> Integer, Double, Long, Boolean, String, Date, Datetime, ID</li>
                <li><strong>Collections:</strong> List, Set, Map</li>
                <li><strong>sObjects:</strong> Custom and standard objects</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Apex is Salesforce's programming language</li>
                <li>Developer Console or VS Code for development</li>
                <li>Execute Anonymous for testing</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path.html" className="nav-link">← Developer Path</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/data-types.html" className="nav-link">Data Types & Variables →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}