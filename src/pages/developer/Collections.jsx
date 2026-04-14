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

export default function Collections() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/collections.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'Collections' }
          ]} />
          <article className="lesson-content">
            <h1>Collections in Apex: List, Set, and Map Complete Guide</h1>
            <p className="lesson-intro">
              Collections are fundamental data structures that allow you to work with groups of related 
              objects. This comprehensive guide covers List, Set, and Map in detail, including advanced 
              operations, bulk processing patterns, and performance optimization techniques.
            </p>

            <section>
              <h2>1. Understanding Apex Collections</h2>
              <p>Apex provides three collection types, each designed for specific use cases:</p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Characteristics</th>
                      <th>Best Use Cases</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>List</strong></td>
                      <td>Ordered, indexed, allows duplicates</td>
                      <td>Sequential data, SOQL results, iteration</td>
                      <td><code>List&lt;Account&gt; accounts</code></td>
                    </tr>
                    <tr>
                      <td><strong>Set</strong></td>
                      <td>Unordered, unique values, no duplicates</td>
                      <td>Removing duplicates, membership testing</td>
                      <td><code>Set&lt;ID&gt; recordIds</code></td>
                    </tr>
                    <tr>
                      <td><strong>Map</strong></td>
                      <td>Key-value pairs, fast lookups</td>
                      <td>Lookup tables, caching, grouping</td>
                      <td><code>Map&lt;ID, Account&gt;</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box">
                <h4>💡 Collection Choice</h4>
                <p>Choose the right collection type: List for ordered data you need to iterate, 
                Set for unique values or fast membership checks, and Map for fast lookups by key.</p>
              </div>
            </section>

            <section>
              <h2>2. List - Complete Reference</h2>
              <p>Lists are the most commonly used collection type in Apex. They maintain insertion order 
              and allow duplicate values:</p>

              <h3>2.1 Creating Lists</h3>
              <CodeBlock language="apex" code={`// Empty list declaration
List&lt;String&gt; names = new List&lt;String&gt;();
List&lt;Integer&gt; numbers = new List&lt;Integer&gt;();

// Initialize with values - different syntaxes
List&lt;String&gt; colors = new List&lt;String&gt;{'Red', 'Green', 'Blue'};
List&lt;String&gt; colors2 = new String[]{'Red', 'Green', 'Blue'};

// Array-style initialization
Integer[] scores = new Integer[0];  // Empty, can grow
Integer[ ] fixed = new Integer[5];  // Fixed size (filled with null)

// sObject lists
List&lt;Account&gt; accounts = new List&lt;Account&gt;();
List&lt;Opportunity&gt; opps;  // null - not initialized`} />

              <h3>2.2 Adding and Modifying Elements</h3>
              <CodeBlock language="apex" code={`List&lt;String&gt; fruits = new List&lt;String&gt;{'Apple'};

// Add single element
fruits.add('Banana');      // Appends to end
fruits.add('Cherry');

// Add at specific index (shifts elements)
fruits.add(0, 'Avocado');  // Insert at beginning

// Add multiple elements
List&lt;String&gt; moreFruits = new List&lt;String&gt;{'Date', 'Elderberry'};
fruits.addAll(moreFruits);

// Replace element at index
fruits.set(0, 'Apricot');  // Replaces 'Avocado'

System.debug(fruits);  // [Apricot, Banana, Cherry, Date, Elderberry]`} />

              <h3>2.3 Accessing Elements</h3>
              <CodeBlock language="apex" code={`List&lt;String&gt; items = new List&lt;String&gt;{'First', 'Second', 'Third'};

// get() method - returns null if index out of bounds
String first = items.get(0);
String second = items[1];  // Array notation also works

// Safe access pattern
String getItemSafe(List&lt;String&gt; list, Integer index) {
    if (index >= 0 && index &lt; list.size()) {
        return list.get(index);
    }
    return null;
}

// Get first and last
String firstItem = items[0];
String lastItem = items[items.size() - 1];`} />

              <h3>2.4 List Iteration</h3>
              <CodeBlock language="apex" code={`List&lt;Account&gt; accounts = [SELECT Id, Name FROM Account LIMIT 10];

// For loop - traditional
for (Integer i = 0; i &lt; accounts.size(); i++) {
    Account a = accounts[i];
    System.debug(a.Name);
}

// For each loop - preferred
for (Account a : accounts) {
    System.debug('Processing: ' + a.Name);
}

// Using iterator
List&lt;String&gt; words = new List&lt;String&gt;{'Hello', 'World'};
Iterator&lt;String&gt; iter = words.iterator();
while (iter.hasNext()) {
    System.debug(iter.next());
}`} />

              <h3>2.5 List Methods Reference</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>add(element)</code></td>
                      <td>Add element to end</td>
                      <td><code>list.add('new')</code></td>
                    </tr>
                    <tr>
                      <td><code>add(index, element)</code></td>
                      <td>Insert at index</td>
                      <td><code>list.add(0, 'first')</code></td>
                    </tr>
                    <tr>
                      <td><code>addAll(list)</code></td>
                      <td>Add all elements from another list</td>
                      <td><code>list.addAll(other)</code></td>
                    </tr>
                    <tr>
                      <td><code>clear()</code></td>
                      <td>Remove all elements</td>
                      <td><code>list.clear()</code></td>
                    </tr>
                    <tr>
                      <td><code>clone()</code></td>
                      <td>Create a copy</td>
                      <td><code>newList = list.clone()</code></td>
                    </tr>
                    <tr>
                      <td><code>contains(element)</code></td>
                      <td>Check if contains element</td>
                      <td><code>list.contains('value')</code></td>
                    </tr>
                    <tr>
                      <td><code>get(index)</code></td>
                      <td>Get element at index</td>
                      <td><code>list.get(0)</code></td>
                    </tr>
                    <tr>
                      <td><code>indexOf(element)</code></td>
                      <td>Find index of element (-1 if not found)</td>
                      <td><code>list.indexOf('value')</code></td>
                    </tr>
                    <tr>
                      <td><code>isEmpty()</code></td>
                      <td>Check if empty</td>
                      <td><code>list.isEmpty()</code></td>
                    </tr>
                    <tr>
                      <td><code>remove(index)</code></td>
                      <td>Remove element at index</td>
                      <td><code>list.remove(0)</code></td>
                    </tr>
                    <tr>
                      <td><code>set(index, element)</code></td>
                      <td>Replace element at index</td>
                      <td><code>list.set(0, 'new')</code></td>
                    </tr>
                    <tr>
                      <td><code>size()</code></td>
                      <td>Get number of elements</td>
                      <td><code>list.size()</code></td>
                    </tr>
                    <tr>
                      <td><code>sort()</code></td>
                      <td>Sort the list</td>
                      <td><code>list.sort()</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>2.6 List Sorting</h3>
              <CodeBlock language="apex" code={`// Sort strings
List&lt;String&gt; names = new List&lt;String&gt;{'Zoe', 'Alice', 'Bob'};
names.sort();  // [Alice, Bob, Zoe]

// Sort primitives
List&lt;Integer&gt; numbers = new List&lt;Integer&gt;{5, 2, 8, 1};
numbers.sort();  // [1, 2, 5, 8]

// Sort sObjects - must use custom logic
List&lt;Account&gt; accounts = [SELECT Name FROM Account ORDER BY Name];

// For custom sorting, use comparison class
List&lt;Account&gt; accountsToSort = new List&lt;Account&gt;{
    new Account(Name='Zebra Corp'),
    new Account(Name='Alpha Corp'),
    new Account(Name='Beta Corp')
};

accountsToSort.sort();  // Uses Name field`} />

              <div className="info-box">
                <h4>⚠️ sObject List Sorting</h4>
                <p>sObject lists can be sorted using sort() if the object implements the Comparable 
                interface. For standard objects, sorting by query fields is often easier.</p>
              </div>
            </section>

            <section>
              <h2>3. Set - Complete Reference</h2>
              <p>Sets store unique values with no guaranteed order. They're ideal for eliminating 
              duplicates and fast membership testing:</p>

              <h3>3.1 Creating Sets</h3>
              <CodeBlock language="apex" code={`// Empty set
Set&lt;String&gt; uniqueNames = new Set&lt;String&gt;();

// Initialize with values
Set&lt;Integer&gt; numbers = new Set&lt;Integer&gt;{1, 2, 3, 2, 1};
// Result: {1, 2, 3} - duplicates removed automatically

// From list - efficient way to get unique values
List&lt;String&gt; withDuplicates = new List&lt;String&gt;{'a', 'b', 'a', 'c', 'b'};
Set&lt;String&gt; unique = new Set&lt;String&gt;(withDuplicates);`} />

              <h3>3.2 Set Operations</h3>
              <CodeBlock language="apex" code={`Set&lt;String&gt; setA = new Set&lt;String&gt;{'a', 'b', 'c'};
Set&lt;String&gt; setB = new Set&lt;String&gt;{'b', 'c', 'd'};

// Contains - fast O(1) lookup
Boolean hasA = setA.contains('a');  // true
Boolean hasZ = setA.contains('z');  // false

// RetainAll - intersection (keep common elements)
setA.retainAll(setB);  // setA = {b, c}

// AddAll - union (combine all unique elements)
setA = new Set&lt;String&gt;{'a', 'b', 'c'};
setA.addAll(setB);  // setA = {a, b, c, d}

// RemoveAll - remove elements that exist in another set
setA = new Set&lt;String&gt;{'a', 'b', 'c'};
setA.removeAll(setB);  // setA = {a}

// Clear all elements
setA.clear();  // setA = {}`} />

              <h3>3.3 Common Set Use Cases</h3>
              <CodeBlock language="apex" code={`// Remove duplicates from a list
public List&lt;Account&gt; removeDuplicates(List&lt;Account&gt; accounts) {
    Set&lt;Account&gt; uniqueSet = new Set&lt;Account&gt;(accounts);
    return new List&lt;Account&gt;(uniqueSet);
}

// Or use Map to preserve order
public List&lt;Account&gt; removeDuplicatesPreserveOrder(List&lt;Account&gt; accounts) {
    Map&lt;ID, Account&gt; accountMap = new Map&lt;ID, Account&gt;();
    for (Account a : accounts) {
        accountMap.put(a.Id, a);
    }
    return accountMap.values();
}

// Check for duplicates before insert
public Boolean hasDuplicateEmail(String email, ID excludeId) {
    List&lt;Contact&gt; existing = [
        SELECT Id FROM Contact 
        WHERE Email = :email AND Id != :excludeId
        LIMIT 1
    ];
    return !existing.isEmpty();
}

// Get unique values from multiple lists
List&lt;String&gt; list1 = new List&lt;String&gt;{'a', 'b'};
List&lt;String&gt; list2 = new List&lt;String&gt;{'b', 'c'};
Set&lt;String&gt; allUnique = new Set&lt;String&gt;();
allUnique.addAll(list1);
allUnique.addAll(list2);  // {a, b, c}`} />

              <h3>3.4 Set Methods Reference</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>add(element)</code></td>
                      <td>Add element (returns false if duplicate)</td>
                      <td><code>set.add('value')</code></td>
                    </tr>
                    <tr>
                      <td><code>addAll(collection)</code></td>
                      <td>Add all elements</td>
                      <td><code>set.addAll(list)</code></td>
                    </tr>
                    <tr>
                      <td><code>clear()</code></td>
                      <td>Remove all elements</td>
                      <td><code>set.clear()</code></td>
                    </tr>
                    <tr>
                      <td><code>clone()</code></td>
                      <td>Create a copy</td>
                      <td><code>newSet = set.clone()</code></td>
                    </tr>
                    <tr>
                      <td><code>contains(element)</code></td>
                      <td>Check membership</td>
                      <td><code>set.contains('a')</code></td>
                    </tr>
                    <tr>
                      <td><code>isEmpty()</code></td>
                      <td>Check if empty</td>
                      <td><code>set.isEmpty()</code></td>
                    </tr>
                    <tr>
                      <td><code>remove(element)</code></td>
                      <td>Remove specific element</td>
                      <td><code>set.remove('value')</code></td>
                    </tr>
                    <tr>
                      <td><code>retainAll(collection)</code></td>
                      <td>Keep only elements in collection</td>
                      <td><code>set.retainAll(other)</code></td>
                    </tr>
                    <tr>
                      <td><code>removeAll(collection)</code></td>
                      <td>Remove elements in collection</td>
                      <td><code>set.removeAll(other)</code></td>
                    </tr>
                    <tr>
                      <td><code>size()</code></td>
                      <td>Get number of elements</td>
                      <td><code>set.size()</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>4. Map - Complete Reference</h2>
              <p>Maps store key-value pairs, providing fast O(1) lookups. They're essential for 
              efficient data retrieval and grouping:</p>

              <h3>4.1 Creating Maps</h3>
              <CodeBlock language="apex" code={`// Empty map
Map&lt;String, Integer&gt; scoreMap = new Map&lt;String, Integer&gt;();

// Initialize with values
Map&lt;String, String&gt; capitalMap = new Map&lt;String, String&gt;{
    'USA' => 'Washington D.C.',
    'UK' => 'London',
    'France' => 'Paris'
};

// From sObjects - create lookup by ID
List&lt;Account&gt; accounts = [SELECT Id, Name FROM Account];
Map&lt;ID, Account&gt; accountById = new Map&lt;ID, Account&gt;(accounts);

// From sObjects - create lookup by field value
Map&lt;String, Account&gt; accountByName = new Map&lt;String, Account&gt;();
for (Account a : accounts) {
    accountByName.put(a.Name, a);
}`} />

              <h3>4.2 Map Operations</h3>
              <CodeBlock language="apex" code={`Map&lt;String, Integer&gt; ages = new Map&lt;String, Integer&gt;{
    'Alice' => 30,
    'Bob' => 25,
    'Charlie' => 35
};

// Put - add or update
ages.put('David', 28);
ages.put('Alice', 31);  // Updates Alice's age

// Get - retrieve value
Integer aliceAge = ages.get('Alice');  // 31
Integer unknown = ages.get('Unknown');  // null

// Contains key check
Boolean hasAlice = ages.containsKey('Alice');  // true

// Get all keys
Set&lt;String&gt; names = ages.keySet();  // {Alice, Bob, Charlie, David}

// Get all values
List&lt;Integer&gt; ageValues = ages.values();  // {31, 25, 35, 28}

// Get key-value pairs
for (String name : ages.keySet()) {
    System.debug(name + ': ' + ages.get(name));
}

// Or use entrySet
for (Map&lt;String, Integer&gt;.Entry entry : ages.entrySet()) {
    System.debug(entry.getKey() + ' = ' + entry.getValue());
}`} />

              <h3>4.3 Common Map Patterns</h3>
              <CodeBlock language="apex" code={`// Pattern 1: Group records by field
public Map&lt;String, List&lt;Contact&gt;&gt; groupContactsByAccount(List&lt;Contact&gt; contacts) {
    Map&lt;String, List&lt;Contact&gt;&gt; grouped = new Map&lt;String, List&lt;Contact&gt;&gt;();
    
    for (Contact c : contacts) {
        if (!grouped.containsKey(c.AccountId)) {
            grouped.put(c.AccountId, new List&lt;Contact&gt;());
        }
        grouped.get(c.AccountId).add(c);
    }
    return grouped;
}

// Pattern 2: Create lookup from query results
public Map&lt;ID, Account&gt; getAccountMap(Set&lt;ID&gt; accountIds) {
    return new Map&lt;ID, Account&gt;([
        SELECT Id, Name, Industry FROM Account WHERE Id IN :accountIds
    ]);
}

// Pattern 3: Count occurrences
public Map&lt;String, Integer&gt; countByIndustry(List&lt;Account&gt; accounts) {
    Map&lt;String, Integer&gt; counts = new Map&lt;String, Integer&gt;();
    
    for (Account a : accounts) {
        String industry = a.Industry;
        if (industry != null) {
            Integer count = counts.get(industry);
            counts.put(industry, (count == null ? 1 : count + 1));
        }
    }
    return counts;
}

// Pattern 4: Merge two maps
public Map&lt;String, Decimal&gt; mergeBalances(
    Map&lt;String, Decimal&gt; map1, 
    Map&lt;String, Decimal&gt; map2
) {
    Map&lt;String, Decimal&gt; merged = new Map&lt;String, Decimal&gt;(map1);
    for (String key : map2.keySet()) {
        Decimal val1 = merged.get(key);
        Decimal val2 = map2.get(key);
        merged.put(key, (val1 != null ? val1 : 0) + (val2 != null ? val2 : 0));
    }
    return merged;
}`} />

              <h3>1.4 Map Methods Reference</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>put(key, value)</code></td>
                      <td>Add or update key-value pair</td>
                      <td><code>map.put('key', 1)</code></td>
                    </tr>
                    <tr>
                      <td><code>get(key)</code></td>
                      <td>Get value by key (null if missing)</td>
                      <td><code>map.get('key')</code></td>
                    </tr>
                    <tr>
                      <td><code>containsKey(key)</code></td>
                      <td>Check if key exists</td>
                      <td><code>map.containsKey('key')</code></td>
                    </tr>
                    <tr>
                      <td><code>keySet()</code></td>
                      <td>Get all keys as Set</td>
                      <td><code>map.keySet()</code></td>
                    </tr>
                    <tr>
                      <td><code>values()</code></td>
                      <td>Get all values as List</td>
                      <td><code>map.values()</code></td>
                    </tr>
                    <tr>
                      <td><code>remove(key)</code></td>
                      <td>Remove key-value pair</td>
                      <td><code>map.remove('key')</code></td>
                    </tr>
                    <tr>
                      <td><code>clear()</code></td>
                      <td>Remove all entries</td>
                      <td><code>map.clear()</code></td>
                    </tr>
                    <tr>
                      <td><code>size()</code></td>
                      <td>Get number of entries</td>
                      <td><code>map.size()</code></td>
                    </tr>
                    <tr>
                      <td><code>isEmpty()</code></td>
                      <td>Check if empty</td>
                      <td><code>map.isEmpty()</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>5. Bulk Processing Patterns</h2>
              <p>Collections are essential for bulk processing in triggers and batch jobs:</p>

              <h3>5.1 Efficient Bulk Operations</h3>
              <CodeBlock language="apex" code={`// Bulk trigger pattern
trigger AccountTrigger on Account (before insert, before update) {
    // Collect all IDs from trigger
    Set&lt;ID&gt; accountIds = new Set&lt;ID&gt;();
    for (Account a : Trigger.new) {
        if (Trigger.isInsert || a.Industry != Trigger.oldMap.get(a.Id).Industry) {
            accountIds.add(a.Id);
        }
    }
    
    // Query related records once
    Map&lt;ID, List&lt;Contact&gt;&gt; contactsByAccount = new Map&lt;ID, List&lt;Contact&gt;&gt;();
    for (Contact c : [SELECT Id, AccountId FROM Contact WHERE AccountId IN :accountIds]) {
        if (!contactsByAccount.containsKey(c.AccountId)) {
            contactsByAccount.put(c.AccountId, new List&lt;Contact&gt;());
        }
        contactsByAccount.get(c.AccountId).add(c);
    }
    
    // Process each record
    for (Account a : Trigger.new) {
        List&lt;Contact&gt; relatedContacts = contactsByAccount.get(a.Id);
        if (relatedContacts != null) {
            a.Contact_Count__c = relatedContacts.size();
        }
    }
}`} />

              <h3>5.2 Two-Pass Processing</h3>
              <CodeBlock language="apex" code={`// First pass: Collect data
Map&lt;ID, Account&gt; accountMap = new Map&lt;ID, Account&gt;(
    [SELECT Id, Name, OwnerId FROM Account WHERE Id IN :Trigger.newMap.keySet()]
);

// Process - update related records
List&lt;Opportunity&gt; oppsToUpdate = new List&lt;Opportunity&gt;();
for (Opportunity opp : Trigger.new) {
    Account related = accountMap.get(opp.AccountId);
    if (related != null) {
        opp.AccountName__c = related.Name;
        oppsToUpdate.add(opp);
    }
}

// Second pass could query additional data based on first pass results`} />

              <div className="info-box">
                <h4>💡 Bulkification Tip</h4>
                <p>Always query related data once and store in a Map, then iterate through 
                trigger records to apply logic. Avoid queries inside loops!</p>
              </div>
            </section>

            <section>
              <h2>6. Advanced Collection Techniques</h2>
              
              <h3>6.1 Type Casting Collections</h3>
              <CodeBlock language="apex" code={`// Cast List to Set
List&lt;String&gt; fruits = new List&lt;String&gt;{'Apple', 'Banana'};
Set&lt;String&gt; fruitSet = new Set&lt;String&gt;(fruits);

// Cast Map values to List
Map&lt;String, Integer&gt; scores = new Map&lt;String, Integer&gt;{
    'A' => 100, 'B' => 90
};
List&lt;Integer&gt; scoreList = scores.values();

// Create Map from sObject List
List&lt;Account&gt; accounts = [SELECT Id, Name FROM Account LIMIT 10];
Map&lt;ID, Account&gt; accountMap = new Map&lt;ID, Account&gt;(accounts);

// Convert Set to List
Set&lt;ID&gt; accountIdSet = new Set&lt;ID&gt;{ '001xx000001234', '001xx000001567' };
List&lt;ID&gt; accountIdList = new List&lt;ID&gt;(accountIdSet);`} />

              <h3>6.2 Nested Collections</h3>
              <CodeBlock language="apex" code={`// List of Lists - matrix or grid
List&lt;List&lt;Integer&gt;&gt; matrix = new List&lt;List&lt;Integer&gt;&gt;();
matrix.add(new List&lt;Integer&gt;{1, 2, 3});
matrix.add(new List&lt;Integer&gt;{4, 5, 6});
// Access: matrix[0][1] = 2

// Map with List values
Map&lt;String, List&lt;String&gt;&gt; employeesByDept = new Map&lt;String, List&lt;String&gt;&gt;();
employeesByDept.put('Engineering', new List&lt;String&gt;{'Alice', 'Bob'});
employeesByDept.put('Sales', new List&lt;String&gt;{'Charlie', 'Diana'});

// Map with Map values - multi-key lookup
Map&lt;String, Map&lt;String, Decimal&gt;&gt; pricesByCategory = 
    new Map&lt;String, Map&lt;String, Decimal&gt;&gt;();`} />

              <h3>6.3 Collection Literals</h3>
              <CodeBlock language="apex" code={`// List literals (Apex 30.0+)
List&lt;String&gt; colors = {'Red', 'Green', 'Blue'};

// Set literals
Set&lt;Integer&gt; numbers = {1, 2, 3, 4, 5};

// Map literals
Map&lt;String, Object&gt; config = {
    'apiKey' => 'abc123',
    'timeout' => 30,
    'enabled' => true
};`} />
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on Apex collections, you learned:</p>
              <ul>
                <li>List: ordered, indexed, allows duplicates - best for sequences and iteration</li>
                <li>Set: unordered, unique values - best for deduplication and fast lookups</li>
                <li>Map: key-value pairs - best for lookups and grouping data</li>
                <li>All collection methods and how to use them effectively</li>
                <li>Bulk processing patterns for triggers and batch jobs</li>
                <li>Advanced techniques: type casting, nested collections, literals</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to SOQL Basics to learn Salesforce Object Query Language, 
                the primary way to query data in Apex.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/classes-methods.html" className="nav-link">← Classes & Methods</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/soql-basics.html" className="nav-link">SOQL Basics →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}