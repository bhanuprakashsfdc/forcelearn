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

export default function SOSLSearch() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/sosl-search" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path', label: 'Developer Path' },
            { label: 'SOSL Search' }
          ]} />
          <article className="lesson-content">
            <h1>SOSL Search</h1>
            <p className="lesson-intro">Learn Salesforce Object Search Language (SOSL) for performing full-text searches across multiple objects.</p>

            <section>
              <h2>What is SOSL?</h2>
              <p>SOSL is a search language that searches across multiple objects. Unlike SOQL which queries specific objects, SOSL performs full-text search across fields.</p>
              <p><strong>Use SOSL when:</strong></p>
              <ul>
                <li>You need to search across multiple objects at once</li>
                <li>You need full-text search capabilities</li>
                <li>You want to search for a specific term across many fields</li>
              </ul>
            </section>

            <section>
              <h2>Basic SOSL Syntax</h2>
              <CodeBlock language="soql" code={`FIND {searchTerm} IN {searchGroup} RETURNING 
  Object1(Field1, Field2), 
  Object2(Field3)`} />

              <p>Example:</p>
              <CodeBlock language="apex" code={`// Search across multiple objects
List<List<SObject>> searchResults = [FIND 'John' IN ALL FIELDS 
    RETURNING Account(Name, Phone), Contact(Name, Email)];

// Extract results
Account[] accounts = (Account[])searchResults[0][0];
Contact[] contacts = (Contact[])searchResults[1][0];`} />
            </section>

            <section>
              <h2>Search Groups</h2>
              <CodeBlock language="apex" code={`// ALL FIELDS - searches all searchable fields
List<List<SObject>> results = [FIND 'Acme' IN ALL FIELDS 
    RETURNING Account(Name)];

// NAME FIELDS - searches only name fields
List<List<SObject>> nameResults = [FIND 'Smith' IN NAME FIELDS 
    RETURNING Contact(Name, Email), Lead(Name, Company)];

// EMAIL FIELDS - searches email fields
List<List<SObject>> emailResults = [FIND '@company.com' IN EMAIL FIELDS 
    RETURNING Contact(Name, Email)];

// PHONE FIELDS - searches phone fields
List<List<SObject>> phoneResults = [FIND '555' IN PHONE FIELDS 
    RETURNING Account(Name, Phone)];`} />
            </section>

            <section>
              <h2>Wildcard Searches</h2>
              <CodeBlock language="apex" code={`// Use * for multiple character wildcard
List<List<SObject>> results = [FIND 'John*' IN ALL FIELDS 
    RETURNING Contact(Name), Lead(Name)];

// Use ? for single character wildcard
List<List<SObject>> results = [FIND 'Sm?th' IN ALL FIELDS 
    RETURNING Contact(Name)];

// Combine
List<List<SObject>> results = [FIND 'J* Sm?th' IN ALL FIELDS 
    RETURNING Contact(Name)];`} />
            </section>

            <section>
              <h2>Search Options</h2>
              <CodeBlock language="apex" code={`// Using WITH METADATA to include field descriptions
FIND 'Acme' IN ALL FIELDS 
    RETURNING Account(Id, Name WITH METADATA);

// Using DIVISION to filter by data category
FIND 'Software' IN ALL FIELDS 
    RETURNING Account(Name) DIVISION 'Technology';`} />
            </section>

            <section>
              <h2>SOSL vs SOQL</h2>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>SOSL</th>
                      <th>SOQL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Search Scope</td>
                      <td>Multiple objects</td>
                      <td>Single object</td>
                    </tr>
                    <tr>
                      <td>Full-text Search</td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Wildcard Support</td>
                      <td>Yes</td>
                      <td>Limited</td>
                    </tr>
                    <tr>
                      <td>Performance</td>
                      <td>Optimized for search</td>
                      <td>Optimized for queries</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>SOSL searches across multiple objects</li>
                <li>Use FIND clause with search terms</li>
                <li>Use RETURNING to specify objects and fields</li>
                <li>Supports wildcards for flexible searches</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/relationship-queries" className="nav-link">← Relationship Queries</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/trigger-basics" className="nav-link">Trigger Basics →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}