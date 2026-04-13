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

export default function SOSLSearch() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/sosl-search.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'SOSL Search' }
          ]} />
          <article className="lesson-content">
            <h1>SOSL Search: Complete Guide to Full-Text Search in Salesforce</h1>
            <p className="lesson-intro">
              SOSL (Salesforce Object Search Language) is a powerful search language that enables 
              full-text search across multiple objects simultaneously. Unlike SOQL which queries 
              a single object, SOSL is optimized for search functionality across your entire Salesforce data.
            </p>

            <section>
              <h2>1. Understanding SOSL</h2>
              <p>
                SOSL is designed specifically for search operations. It performs full-text searches 
                using the Salesforce search index and can search across multiple objects in a single query.
              </p>

              <h3>1.1 When to Use SOSL</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Use Case</th>
                      <th>Why SOSL?</th>
                      <th>SOQL Alternative</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Global Search</strong></td>
                      <td>Search across all objects</td>
                      <td>Multiple queries needed</td>
                    </tr>
                    <tr>
                      <td><strong>Partial Match</strong></td>
                      <td>Find "Acme" in "Acme Corp"</td>
                      <td>LIKE operator</td>
                    </tr>
                    <tr>
                      <td><strong>Wildcard Search</strong></td>
                      <td>Search for "John*" or "Sm?th"</td>
                      <td>Limited LIKE support</td>
                    </tr>
                    <tr>
                      <td><strong>Multiple Objects</strong></td>
                      <td>Search Accounts and Contacts</td>
                      <td>Multiple SOQL queries</td>
                    </tr>
                    <tr>
                      <td><strong>Sound Search</strong></td>
                      <td>Find similar sounding words</td>
                      <td>Not supported</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box">
                <h4>💡 Key Insight</h4>
                <p>SOSL uses the Salesforce search index, which is optimized for text search. 
                It's significantly faster than SOQL LIKE queries for text searches.</p>
              </div>
            </section>

            <section>
              <h2>2. Basic SOSL Syntax</h2>
              
              <h3>2.1 SOSL Query Structure</h3>
              <CodeBlock language="soql" code={`FIND {searchTerm} IN {searchGroup} RETURNING 
  Object1(Field1, Field2 WHERE condition ORDER BY field LIMIT n),
  Object2(Field3, Field4)`} />

              <h3>2.2 Simple Examples</h3>
              <CodeBlock language="apex" code={`// Search for 'Acme' across all searchable fields
List&lt;List&lt;SObject&gt;&gt; searchResults = [
    FIND 'Acme' IN ALL FIELDS 
    RETURNING Account(Name, Phone), Contact(Name, Email)
];

// Extract results from each object
Account[] accounts = (Account[])searchResults[0];
Contact[] contacts = (Contact[])searchResults[1];

// Process results
for (Account a : accounts) {
    System.debug('Found Account: ' + a.Name);
}
for (Contact c : contacts) {
    System.debug('Found Contact: ' + c.Name);
}`} />

              <h3>2.3 Using Search Class</h3>
              <CodeBlock language="apex" code={`// Use Search class for programmatic search
Search.SearchResults results = Search.find('Acme*');

// Get results by object type
Search.SearchResult accountResults = results.get('Account');
Search.SearchResult contactResults = results.get('Contact');

// Process each result
for (Search.SearchResult sr : accountResults) {
    SObject record = sr.getSObject();
    System.debug('Found: ' + record.get('Name'));
}`} />
            </section>

            <section>
              <h2>3. Search Groups</h2>
              <p>Specify which types of fields to search:</p>

              <h3>3.1 ALL FIELDS</h3>
              <CodeBlock language="apex" code={`// Search ALL searchable text fields
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Salesforce' IN ALL FIELDS 
    RETURNING Account(Name, Description), Contact(Name, Title)
];

// Searches: Name, Description, Custom Text fields, etc.`} />

              <h3>3.2 NAME FIELDS</h3>
              <CodeBlock language="apex" code={`// Search only name fields
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'John Smith' IN NAME FIELDS 
    RETURNING Contact(Name, Email), Lead(Name, Company)
];

// Searches: Account.Name, Contact.Name, Lead.Name, etc.`} />

              <h3>3.3 EMAIL FIELDS</h3>
              <CodeBlock language="apex" code={`// Search email fields
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND '@company.com' IN EMAIL FIELDS 
    RETURNING Contact(Name, Email), User(Email, Name)
];

// Useful for finding users by email domain`} />

              <h3>3.4 PHONE FIELDS</h3>
              <CodeBlock language="apex" code={`// Search phone fields
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND '555' IN PHONE FIELDS 
    RETURNING Account(Name, Phone), Contact(Name, Phone)
];

// Useful for partial phone number searches`} />

              <h3>3.5 CUSTOM Fields</h3>
              <CodeBlock language="apex" code={`// Search custom fields specifically
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Enterprise' IN ALL FIELDS 
    RETURNING Account(Name, Type, Customer_Type__c)
];`} />
            </section>

            <section>
              <h2>4. Wildcard Searches</h2>
              
              <h3>4.1 Asterisk (*) - Multiple Characters</h3>
              <CodeBlock language="apex" code={`// Find anything starting with 'Acme'
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Acme*' IN ALL FIELDS 
    RETURNING Account(Name), Contact(Name)
];

// Finds: Acme, Acme Corp, Acme Corporation, etc.

// Find anything containing 'tech'
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND '*tech*' IN ALL FIELDS 
    RETURNING Account(Name), Lead(Name)
];

// Finds: Technology, TechCorp,itech solutions, etc.`} />

              <h3>4.2 Question Mark (?) - Single Character</h3>
              <CodeBlock language="apex" code={`// Find variations like Smyth vs Smith
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Sm?th' IN ALL FIELDS 
    RETURNING Contact(Name), Lead(Name)
];

// Finds: Smyth, Smith, Smoth (any 4-letter word starting with Sm`} />

              <h3>4.3 Combining Wildcards</h3>
              <CodeBlock language="apex" code={`// Multiple words with wildcards
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'J* Sm?th' IN ALL FIELDS 
    RETURNING Contact(Name), Lead(Name)
];

// Finds: John Smith, Jane Smith, Jim Smyth, etc.`} />

              <h3>4.4 Escape Special Characters</h3>
              <CodeBlock language="apex" code={`// Escape special characters that have meaning in SOSL
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND '\\*Test\\*' IN ALL FIELDS 
    RETURNING Account(Name)
];

// This searches for literal asterisk, not wildcard`} />

              <div className="info-box">
                <h4>⚠️ Important</h4>
                <p>Wildcard searches can be slow if they match too many results. 
                Use more specific terms when possible.</p>
              </div>
            </section>

            <section>
              <h2>5. RETURNING Clause Options</h2>
              
              <h3>5.1 WHERE Clause in SOSL</h3>
              <CodeBlock language="apex" code={`// Filter results in the RETURNING clause
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Technology' IN ALL FIELDS 
    RETURNING Account(Name, Industry WHERE Industry = 'Technology')
];

// Only returns Accounts where Industry = 'Technology'`} />

              <h3>5.2 ORDER BY in SOSL</h3>
              <CodeBlock language="apex" code={`// Order results
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Sales' IN ALL FIELDS 
    RETURNING Account(Name, AnnualRevenue ORDER BY AnnualRevenue DESC)
];`} />

              <h3>5.3 LIMIT in SOSL</h3>
              <CodeBlock language="apex" code={`// Limit results per object
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Acme' IN ALL FIELDS 
    RETURNING Account(Name LIMIT 10), Contact(Name LIMIT 5)
];

// Returns max 10 accounts and 5 contacts`} />

              <h3>5.4 ALL ROWS</h3>
              <CodeBlock language="apex" code={`// Include archived and deleted records
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Acme' IN ALL FIELDS 
    RETURNING Account(Name ALL ROWS)
];`} />
            </section>

            <section>
              <h2>6. Advanced SOSL Features</h2>
              
              <h3>6.1 USING LISTVIEW</h3>
              <CodeBlock language="apex" code={`// Search using a list view filter
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Acme' 
    USING LISTVIEW My_Accounts
    RETURNING Account(Name, Industry)
];`} />

              <h3>6.2 WITH Division</h3>
              <CodeBlock language="apex" code={`// Filter by data category (requires Data Categories enabled)
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Software' IN ALL FIELDS 
    RETURNING Account(Name, Industry WITH DIVISION = 'Technology')
];`} />

              <h3>6.3 WITH METADATA</h3>
              <CodeBlock language="apex" code={`// Include field metadata in results
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Acme' IN ALL FIELDS 
    RETURNING Account(Id, Name WITH METADATA)
];`} />

              <h3>6.4 Logical Operators</h3>
              <CodeBlock language="apex" code={`// Use AND, OR, NOT in search terms
// AND - both terms must match
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Acme AND Technology' IN ALL FIELDS 
    RETURNING Account(Name)
];

// OR - either term (default when you use space)
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Acme OR Technology' IN ALL FIELDS 
    RETURNING Account(Name)
];

// NOT - exclude term
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Acme NOT Corporation' IN ALL FIELDS 
    RETURNING Account(Name)
];`} />
            </section>

            <section>
              <h2>7. Working with Search Results</h2>
              
              <h3>7.1 Processing Results</h3>
              <CodeBlock language="apex" code={`// Generic result handling
List&lt;List&lt;SObject&gt;&gt; allResults = [
    FIND 'Acme' IN ALL FIELDS 
    RETURNING Account(Name), Contact(Name), Lead(Name)
];

// Iterate through each object's results
for (Integer i = 0; i &lt; allResults.size(); i++) {
    List&lt;SObject&gt; objects = allResults[i];
    System.debug('Found ' + objects.size() + ' results for object ' + i);
}`} />

              <h3>7.2 Named Resultset</h3>
              <CodeBlock language="apex" code={`// Use WITH USER_SECURITY for field-level security
List&lt;List&lt;SObject&gt;&gt; results = [
    FIND 'Acme' IN ALL FIELDS 
    WITH USER_SECURITY
    RETURNING Account(Name, Industry)
];

// Results only include fields user has access to`} />

              <h3>7.3 Search Suggestion API</h3>
              <CodeBlock language="apex" code={`// Get search suggestions (autocomplete)
List&lt;String&gt; suggestions = Search.suggest('Acm');

for (String suggestion : suggestions) {
    System.debug('Suggestion: ' + suggestion);
}

// Use for typeahead search functionality`} />
            </section>

            <section>
              <h2>8. Performance and Best Practices</h2>
              
              <h3>8.1 Search Optimization Tips</h3>
              <ul>
                <li><strong>Use specific search terms</strong> - More specific terms return faster results</li>
                <li><strong>Avoid leading wildcards</strong> - '*test' is slow, 'test*' is faster</li>
                <li><strong>Limit objects searched</strong> - Only search objects you need</li>
                <li><strong>Filter in RETURNING</strong> - Use WHERE to filter early</li>
              </ul>

              <h3>8.2 Common Pitfalls</h3>
              <div className="info-box">
                <h4>⚠️ Watch Out</h4>
                <ul>
                  <li>Leading wildcards can hit performance limits</li>
                  <li>Very common terms like "the" return too many results</li>
                  <li>Search index may not include all custom fields</li>
                  <li>Some objects may not be searchable</li>
                </ul>
              </div>

              <h3>8.3 When NOT to Use SOSL</h3>
              <ul>
                <li>When you need exact field matches (use SOQL)</li>
                <li>When querying relationships (use SOQL relationship queries)</li>
                <li>When you need to sort by specific fields (use SOQL ORDER BY)</li>
                <li>When working with complex aggregations (use SOQL with GROUP BY)</li>
              </ul>
            </section>

            <section>
              <h2>9. Summary</h2>
              <p>In this comprehensive lesson on SOSL search, you learned:</p>
              <ul>
                <li>What SOSL is and when to use it vs SOQL</li>
                <li>Basic SOSL syntax with FIND and RETURNING</li>
                <li>Search groups: ALL FIELDS, NAME FIELDS, EMAIL FIELDS, PHONE FIELDS</li>
                <li>Wildcard searches using * and ?</li>
                <li>Advanced RETURNING options: WHERE, ORDER BY, LIMIT</li>
                <li>Working with search results in Apex</li>
                <li>Performance best practices</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to Trigger Basics to learn about Apex triggers, the 
                foundation of declarative automation in Salesforce.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/relationship-queries.html" className="nav-link">← Relationship Queries</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/trigger-basics.html" className="nav-link">Trigger Basics →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}