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

export default function DataTypes() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/data-types.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'Data Types & Variables' }
          ]} />
          <article className="lesson-content">
            <h1>Data Types & Variables in Apex: Complete Reference</h1>
            <p className="lesson-intro">
              Understanding Apex's type system is fundamental to writing effective code. This comprehensive 
              guide covers all data types, variable declaration, type conversion, and best practices for 
              working with different value types in Salesforce.
            </p>

            <section>
              <h2>1. Primitive Data Types</h2>
              <p>Apex provides a rich set of primitive types optimized for business applications:</p>

              <h3>1.1 Numeric Types</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Storage</th>
                      <th>Example</th>
                      <th>Range/Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Integer</strong></td>
                      <td>Whole number</td>
                      <td>32 bits</td>
                      <td><code>Integer count = 42;</code></td>
                      <td>-2,147,483,648 to 2,147,483,647</td>
                    </tr>
                    <tr>
                      <td><strong>Long</strong></td>
                      <td>Large whole number</td>
                      <td>64 bits</td>
                      <td><code>Long bigNum = 9223372036854775807L;</code></td>
                      <td>-9.2e18 to 9.2e18</td>
                    </tr>
                    <tr>
                      <td><strong>Double</strong></td>
                      <td>Floating-point</td>
                      <td>64 bits</td>
                      <td><code>Double price = 19.99;</code></td>
                      <td>15 digits precision</td>
                    </tr>
                    <tr>
                      <td><strong>Decimal</strong></td>
                      <td>Exact precision</td>
                      <td>Variable</td>
                      <td><code>Decimal amount = 123.45;</code></td>
                      <td>Up to 18 digits</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>1.2 Integer and Long Usage</h3>
              <CodeBlock language="apex" code={`// Integer examples
Integer counter = 0;
Integer maxRecords = Limits.getLimitQueryRows();
Integer daysInYear = 365;

// Long for large numbers
Long population = 7800000000L;  // World population
Long transactionId = 50000000001L;

// Arithmetic operations
Integer a = 10;
Integer b = 20;
Integer sum = a + b;      // 30
Integer diff = b - a;       // 10
Integer product = a * b;    // 200
Integer quotient = b / a;   // 2`} />

              <h3>1.3 Double vs Decimal - Critical Difference</h3>
              <CodeBlock language="apex" code={`// WRONG - Using Double for currency
Double price = 19.99;
Double tax = price * 0.0825;
System.debug(tax);  // 1.642175 - floating point precision issues!

// CORRECT - Using Decimal for currency
Decimal price = 19.99;
Decimal tax = price * 0.0825;
System.debug(tax);  // 1.642175 - exact precision

// More dramatic example
Double d1 = 1.00;
Double d2 = 1.00;
System.debug(d1 - 0.90);  // 0.10000000000000009 - precision error!
System.debug(d1.add(d2)); // 2.00 - exact arithmetic`} />

              <div className="info-box">
                <h4>💡 Best Practice</h4>
                <p>Always use <code>Decimal</code> for currency calculations, not Double. 
                Decimal provides exact precision to avoid rounding errors that are common 
                with floating-point arithmetic.</p>
              </div>
            </section>

            <section>
              <h2>2. Boolean and Null Types</h2>
              
              <h3>2.1 Boolean Type</h3>
              <p>Boolean values represent logical conditions:</p>
              <CodeBlock language="apex" code={`// Boolean declarations
Boolean isActive = true;
Boolean isClosed = false;
Boolean hasPermission = null;  // null is valid for Boolean

// Using in conditions
if (isActive && hasPermission) {
    System.debug('User can access');
}

// Boolean operators
Boolean a = true;
Boolean b = false;

Boolean andResult = a && b;  // false - both must be true
Boolean orResult = a || b;  // true - either can be true
Boolean notResult = !a;      // false - negation

// Comparison operators return Boolean
Integer x = 10;
Boolean isGreater = x > 5;    // true
Boolean isEqual = x == 10;     // true
Boolean isNotEqual = x != 20;    // true`} />

              <h3>2.2 Null Handling</h3>
              <p>Null (null) represents the absence of a value in Apex:</p>
              <CodeBlock language="apex" code={`// Checking for null
String name = null;
Boolean isNull = (name == null);    // true

// Safe navigation with null checks
String result;
if (result != null) {
    System.debug(result.length());
}

// Alternative: use String.isBlank() and String.isNotBlank()
String email = 'user@example.com';
Boolean isBlank = String.isBlank(email);    // false
Boolean isNotBlank = String.isNotBlank(email); // true

// Null coalescing pattern
String input = null;
String defaultValue = input != null ? input : 'N/A';
// Or using ternary shorthand
String safeValue = input ?? 'N/A';  // Apex null-coalescing operator`} />

              <h3>2.3 Null-Safe Operations</h3>
              <CodeBlock language="apex" code={`// Check before using
Account a;
if (a != null && a.Name != null) {
    System.debug(a.Name);
}

// Use static methods for null-safe checks
String s = null;
Boolean isEmpty = String.isEmpty(s);      // true - treats null as empty
Boolean isBlank = String.isBlank(s);       // true - treats null as blank

// List null checks  
List&lt;Account&gt; accounts = null;
Boolean isListEmpty = accounts == null || accounts.isEmpty();

// Safe navigation in modern Apex
// Use ?. operator (API 58.0+)
String accountName = a?.Name;  // null if a is null, otherwise a.Name`} />
            </section>

            <section>
              <h2>3. String Type</h2>
              <p>Strings in Apex support Unicode and provide extensive manipulation methods:</p>

              <h3>3.1 Basic String Operations</h3>
              <CodeBlock language="apex" code={`// String declaration
String company = 'Salesforce';
String empty = '';
String nullString = null;

// Concatenation
String firstName = 'John';
String lastName = 'Doe';
String fullName = firstName + ' ' + lastName;  // 'John Doe'
String fullName2 = firstName.concat(lastName);  // 'JohnDoe'

// Length
Integer len = company.length();  // 10

// Case conversion
System.debug(company.toUpperCase());  // 'SALESFORCE'
System.debug(company.toLowerCase());  // 'salesforce'

// Trim
String padded = '  hello  ';
System.debug(padded.trim());  // 'hello'`} />

              <h3>3.2 String Searching and Manipulation</h3>
              <CodeBlock language="apex" code={`String text = 'The quick brown fox jumps over the lazy dog';

// Search methods
Boolean contains = text.contains('quick');    // true
Boolean containsIgnore = text.containsIgnoreCase('QUICK'); // true
Integer indexOf = text.indexOf('fox');      // 16
Boolean startsWith = text.startsWith('The'); // true
Boolean endsWith = text.endsWith('dog');   // true

// Substring operations
String substr = text.substring(4, 9);    // 'quick'
String after = text.substringAfter('fox'); // ' jumps over the lazy dog'
String before = text.substringBefore('fox'); // 'The quick brown '

// Split and join
List&lt;String&gt; words = text.split(' ');  // List of 9 words
String joined = String.join(words, '-');  // 'The-quick-brown-fox-jumps-over-the-lazy-dog'

// Replace
String replaced = text.replace('fox', 'cat');  // 'The quick brown cat...'`} />

              <h3>3.3 String Formatting</h3>
              <CodeBlock language="apex" code={`// String.format() for templates
String template = 'Hello {0}, your order #{1} is confirmed.';
String message = String.format(template, new List&lt;String&gt;{'John', '12345'});
// Result: 'Hello John, your order #12345 is confirmed.'

// Escape special characters
String singleQuote = 'It\'s a beautiful day';
String newLine = 'Line 1\nLine 2';
String tab = 'Column1\tColumn2';

// Number formatting
Decimal amount = 1234.56;
String formatted = amount.format();  // '1,234.56' (locale-sensitive)

// Build dynamic SOQL safely (prevents SOQL injection)
String name = 'O\'Brien';
String query = 'SELECT Id FROM Account WHERE Name = :name';  // Bind variable`} />

              <div className="info-box">
                <h4>⚠️ Security - SOQL Injection</h4>
                <p>Always use bind variables (:variable) or escape methods when incorporating 
                user input into SOQL queries. Never concatenate strings directly into queries.</p>
              </div>
            </section>

            <section>
              <h2>4. Date and Time Types</h2>
              
              <h3>4.1 Date Type</h3>
              <CodeBlock language="apex" code={`// Current date
Date today = Date.today();
Date specific = Date.newInstance(2024, 1, 15);

// Date arithmetic
Date startDate = Date.today();
Date endDate = startDate.addDays(30);
Integer daysBetween = startDate.daysBetween(endDate);  // 30

// Date components
Integer year = today.year();
Integer month = today.month();
Integer day = today.day();
Integer dayOfWeek = today.dayOfWeek();

// Date comparisons
Boolean isBefore = startDate.isBefore(endDate);  // true
Boolean isAfter = startDate.isAfter(endDate);     // false`} />

              <h3>4.2 Datetime Type</h3>
              <CodeBlock language="apex" code={`// Current datetime
Datetime now = Datetime.now();
Datetime utcNow = Datetime.newInstanceGmt(2024, 1, 15, 12, 0, 0);

// Create specific datetime
Datetime dt = Datetime.newInstance(2024, 1, 15, 10, 30, 0);

// Add time components
Datetime plusOneHour = dt.addHours(1);
Datetime plusMinutes = dt.addMinutes(30);

// Format for display
String formatted = dt.format('MM/dd/yyyy HH:mm');
String gmtFormatted = dt.formatGmt('yyyy-MM-dd\'T\'HH:mm:ss\'Z\'');

// Convert between time zones
Datetime localTime = Datetime.now();
Datetime gmtTime = localTime.formatGmt('yyyy-MM-dd HH:mm:ss');`} />

              <h3>4.3 Working with Business Hours</h3>
              <CodeBlock language="apex" code={`// Calculate business days
Date startDate = Date.today();
Integer businessDaysToAdd = 5;

// Using BusinessHours class
Id businessHourId = [SELECT Id FROM BusinessHours WHERE IsDefault = true].Id;
Datetime nextBusinessDay = BusinessHours.addDays(
    businessHourId, 
    DateTime.now(), 
    businessDaysToAdd
);

// Add work days manually
public Date addWorkDays(Date start, Integer days) {
    Date current = start;
    Integer added = 0;
    while (added &lt; days) {
        current = current.addDays(1);
        // Skip weekends (1 = Sunday, 7 = Saturday)
        Integer dayOfWeek = Date.newInstance(current.year(), current.month(), current.day()).dayOfWeek();
        if (dayOfWeek != 1 && dayOfWeek != 7) {
            added++;
        }
    }
    return current;
}`} />
            </section>

            <section>
              <h2>5. ID and Record Types</h2>
              
              <h3>5.1 ID Type</h3>
              <p>ID represents Salesforce 15-character or 18-character record IDs:</p>
              <CodeBlock language="apex" code={`// Valid ID from query
Account a = [SELECT Id, Name FROM Account LIMIT 1];
ID recordId = a.Id;

// Create ID from string (15-char or 18-char)
ID from15 = '0015j000001234AAA';
ID from18 = '0015j000001234AAAER';

// ID methods
String id15 = recordId.to15Chars();
String id18 = recordId.to18Chars();
Boolean isCustom = recordId.isCustom();  // false for standard objects

// Validate ID format
String potentialId = '0015j000001234AAA';
Boolean isValidId = Pattern.matches('^[a-zA-Z0-9]{15}$', potentialId);`} />

              <h3>5.2 Using ID in Queries</h3>
              <CodeBlock language="apex" code={`// Query by ID
Account a = [SELECT Id, Name FROM Account WHERE Id = :recordId];

// Using in SOQL with binding
Set&lt;ID&gt; accountIds = new Set&lt;ID&gt;{a.Id, b.Id};
List&lt;Account&gt; accounts = [SELECT Id, Name FROM Account WHERE Id IN :accountIds];

// From URL parameters
String recordIdFromUrl = ApexPages.currentPage().getParameters().get('Id');
if (recordIdFromUrl != null && Pattern.matches('^[a-zA-Z0-9]{15}$', recordIdFromUrl)) {
    ID recordId = recordIdFromUrl;
}`} />
            </section>

            <section>
              <h2>6. sObjects</h2>
              <p>sObjects represent Salesforce database records, both standard and custom:</p>

              <h3>6.1 Standard Objects</h3>
              <CodeBlock language="apex" code={`// Create new standard object
Account acc = new Account();
acc.Name = 'Acme Corporation';
acc.Industry = 'Technology';
acc.AnnualRevenue = 5000000;
acc Website = 'https://www.acme.com';

// Using constructor with fields
Account acc2 = new Account(
    Name = 'Tech Corp',
    Industry = 'Technology',
    AnnualRevenue = 10000000
);

// Insert to database
insert acc;`} />

              <h3>6.2 Custom Objects</h3>
              <CodeBlock language="apex" code={`// Custom object - note __c suffix
Project__c proj = new Project__c();
proj.Name__c = 'Website Redesign';
proj.Status__c = 'Planning';
proj.Budget__c = 50000;
proj.Start_Date__c = Date.today();
proj.End_Date__c = Date.today().addMonths(3);
proj.Description__c = 'Redesign company website';

// Custom fields use __c for object, __ for field
insert proj;

// Query back
Project__c queried = [SELECT Id, Name__c, Status__c FROM Project__c WHERE Id = :proj.Id];`} />

              <h3>6.3 sObject Fields</h3>
              <CodeBlock language="apex" code={`// Access fields using dot notation
Account a = new Account();
a.Name = 'Test Account';

// Get and set specific fields
String name = (String)a.get('Name');
a.put('Industry', 'Technology');

// Check if field is set
Boolean hasIndustry = a.isSet('Industry');

// Get describe information
Schema.DescribeFieldResult fieldDesc = Schema.sObjectType.Account.fields.Industry;
Boolean isUpdateable = fieldDesc.isUpdateable();`} />
            </section>

            <section>
              <h2>7. Type Casting and Conversion</h2>
              
              <h3>7.1 Implicit Casting</h3>
              <p>Apex automatically casts in certain situations:</p>
              <CodeBlock language="apex" code={`// Integer to Long
Integer i = 100;
Long l = i;  // Implicit - no data loss

// Integer to Decimal
Decimal d = i;  // Implicit

// String concatenation with primitives
String s = 'Value: ' + 100;  // 'Value: 100'`} />

              <h3>7.2 Explicit Casting</h3>
              <CodeBlock language="apex" code={`// String to Integer
String s = '123';
Integer i = Integer.valueOf(s);     // Returns primitive
Integer i2 = Integer.valueOf(s);    // Same method

// String to Decimal
String price = '99.99';
Decimal d = Decimal.valueOf(price);

// Date to Datetime
Date d = Date.today();
Datetime dt = Datetime.newInstance(d.year(), d.month(), d.day());

// Datetime to Date
Datetime dt = Datetime.now();
Date d = dt.date();

// Integer to String
Integer i = 123;
String s = String.valueOf(i);`} />

              <h3>7.3 Safe Type Conversion</h3>
              <CodeBlock language="apex" code={`// Safe conversion with try-catch
public Integer safeParseInteger(String input) {
    try {
        return Integer.valueOf(input);
    } catch (TypeException e) {
        return null;
    }
}

// Using JSON for complex conversions
public class AccountWrapper {
    public String name;
    public Decimal revenue;
}

// Serialize and deserialize
AccountWrapper wrap = new AccountWrapper();
wrap.name = 'Test';
wrap.revenue = 1000;

String json = JSON.serialize(wrap);
AccountWrapper unwrap = (AccountWrapper)JSON.deserialize(json, AccountWrapper.class);`} />
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on Apex data types and variables, you learned:</p>
              <ul>
                <li>Primitive types: Integer, Long, Double, Decimal, Boolean, String</li>
                <li>When to use Decimal vs Double for currency calculations</li>
                <li>Boolean operations and null handling</li>
                <li>String manipulation and formatting methods</li>
                <li>Date and Datetime operations and time zones</li>
                <li>ID types and validation</li>
                <li>sObjects for standard and custom objects</li>
                <li>Type casting and safe conversion</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to Classes & Methods to learn object-oriented programming 
                in Apex with classes, constructors, and method design.
              </p>
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