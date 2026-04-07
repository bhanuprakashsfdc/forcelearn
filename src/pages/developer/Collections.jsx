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

export default function Collections() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/developer-path/collections" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path', label: 'Developer Path' },
            { label: 'Collections' }
          ]} />
          <article className="lesson-content">
            <h1>Collections</h1>
            <p className="lesson-intro">Learn about Apex collections - List, Set, and Map - for handling groups of data.</p>

            <section>
              <h2>List</h2>
              <p>An ordered collection of elements that can be accessed by index. Allows duplicates.</p>
              <CodeBlock language="apex" code={`// Creating a list
List<String> names = new List<String>{'John', 'Jane', 'Bob'};

// Alternative syntax
List<Integer> numbers = new Integer[0];

// Adding elements
names.add('Alice');
names.add(0, 'Zack');  // Insert at index 0

// Accessing elements
String first = names.get(0);
String firstAlt = names[0];

// List methods
Integer size = names.size();
Boolean isEmpty = names.isEmpty();
names.remove(0);`} />
            </section>

            <section>
              <h2>Set</h2>
              <p>An unordered collection of unique elements. No duplicates allowed.</p>
              <CodeBlock language="apex" code={`// Creating a set
Set<String> uniqueNames = new Set<String>{'John', 'Jane', 'John'};

// Adding elements
uniqueNames.add('Bob');
uniqueNames.addAll(names);

// Checking elements
Boolean hasJohn = uniqueNames.contains('John');

// Set operations
Set<String> set1 = new Set<String>{'a', 'b', 'c'};
Set<String> set2 = new Set<String>{'b', 'c', 'd'};

// Intersection
set1.retainAll(set2);  // Keeps 'b', 'c'

// Union
set1.addAll(set2);  // Keeps all`} />
            </section>

            <section>
              <h2>Map</h2>
              <p>A collection of key-value pairs. Each key maps to exactly one value.</p>
              <CodeBlock language="apex" code={`// Creating a map
Map<String, Integer> scoreMap = new Map<String, Integer>();

// Adding key-value pairs
scoreMap.put('John', 95);
scoreMap.put('Jane', 88);
scoreMap.put('Bob', 72);

// Accessing values
Integer johnScore = scoreMap.get('John');

// Map methods
Set<String> keys = scoreMap.keySet();
List<Integer> values = scoreMap.values();
Integer size = scoreMap.size();
Boolean hasKey = scoreMap.containsKey('John');

// Iterating over map
for (String name : scoreMap.keySet()) {
    System.debug(name + ': ' + scoreMap.get(name));
}`} />
            </section>

            <section>
              <h2>Best Practices</h2>
              <ul>
                <li>Use appropriate collection type for your use case</li>
                <li>Initialize collections before use to avoid null pointer errors</li>
                <li>Use bulk-friendly operations for processing large datasets</li>
                <li>Prefer List for ordered data, Set for unique values</li>
              </ul>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>List - ordered, allows duplicates, accessed by index</li>
                <li>Set - unordered, unique values only</li>
                <li>Map - key-value pairs for lookups</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/classes-methods" className="nav-link">← Classes & Methods</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/soql-basics" className="nav-link">SOQL Basics →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}