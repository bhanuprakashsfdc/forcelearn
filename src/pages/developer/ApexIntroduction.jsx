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

export default function ApexIntroduction() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/apex-introduction.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'Getting Started with Apex' }
          ]} />
          <article className="lesson-content">
            <h1>Getting Started with Apex: The Complete Guide</h1>
            <p className="lesson-intro">
              Apex is Salesforce's proprietary programming language that enables developers to execute 
              flow and transaction control statements on the Salesforce platform. This comprehensive 
              guide covers everything you need to know to start your Apex development journey.
            </p>

            <section>
              <h2>1. Understanding Apex</h2>
              <p>
                Apex is a strongly typed, object-oriented programming language that allows you to write 
                business logic that executes on the Salesforce platform. Unlike general-purpose programming 
                languages, Apex is specifically designed for multi-tenant cloud environments and integrates 
                directly with the Salesforce database.
              </p>

              <h3>1.1 Key Characteristics of Apex</h3>
              <ul>
                <li><strong>Strongly Typed</strong> - All variables must be declared with their data types</li>
                <li><strong>Object-Oriented</strong> - Supports classes, interfaces, and inheritance</li>
                <li><strong>Database Integration</strong> - Native support for SOQL and SOSL queries</li>
                <li><strong>Multi-Tenant Aware</strong> - Designed for shared infrastructure</li>
                <li><strong>Compiled to Bytecode</strong> - Runs on the Salesforce platform infrastructure</li>
              </ul>

              <h3>1.2 What Can You Build with Apex?</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Use Case</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Triggers</strong></td>
                      <td>Execute logic when records change</td>
                      <td>Auto-create related records on insert</td>
                    </tr>
                    <tr>
                      <td><strong>Batch Processing</strong></td>
                      <td>Process large data sets</td>
                      <td>Data migration and cleanup</td>
                    </tr>
                    <tr>
                      <td><strong>Web Services</strong></td>
                      <td>Expose APIs to external systems</td>
                      <td>REST/SOAP integrations</td>
                    </tr>
                    <tr>
                      <td><strong>Scheduled Jobs</strong></td>
                      <td>Run logic on a schedule</td>
                      <td>Daily report generation</td>
                    </tr>
                    <tr>
                      <td><strong>Custom Controllers</strong></td>
                      <td>Business logic for UI</td>
                      <td>LWC and Visualforce logic</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box">
                <h4>💡 Apex vs Other Languages</h4>
                <p>Apex syntax is similar to Java, but it's specifically designed for Salesforce. 
                It includes built-in support for SOQL queries, database transactions, and governor limits 
                that ensure efficient resource usage in a multi-tenant environment.</p>
              </div>
            </section>

            <section>
              <h2>2. Setting Up Your Development Environment</h2>
              <p>Salesforce provides multiple tools for Apex development, each suited for different scenarios:</p>

              <h3>2.1 Developer Console</h3>
              <p>The Developer Console is a browser-based IDE built into Salesforce for quick development and testing:</p>
              <ol>
                <li>Log in to your Salesforce org</li>
                <li>Click the <strong>Gear icon (⚙️)</strong> in the top-right corner</li>
                <li>Select <strong>Developer Console</strong></li>
              </ol>
              <p>The Developer Console includes:</p>
              <ul>
                <li><strong>Source Editor</strong> - Write and edit Apex classes and triggers</li>
                <li><strong>Query Editor</strong> - Execute SOQL queries</li>
                <li><strong>Execute Anonymous</strong> - Run Apex code snippets</li>
                <li><strong>Debug Logs</strong> - Monitor execution and troubleshoot issues</li>
                <li><strong>Test Runner</strong> - Run unit tests and view coverage</li>
              </ul>

              <h3>2.2 VS Code with Salesforce Extensions</h3>
              <p>For professional development, VS Code with Salesforce CLI is the recommended approach:</p>
              <ol>
                <li><strong>Install VS Code</strong> - Download from <a href="https://code.visualstudio.com">code.visualstudio.com</a></li>
                <li><strong>Install Salesforce CLI</strong> - Run the installer for your OS</li>
                <li><strong>Install Extensions</strong> - Search "Salesforce" in VS Code extensions marketplace</li>
                <li><strong>Authenticate</strong> - Run <code>sf org login web</code> to connect to your org</li>
              </ol>

              <h3>2.3 Salesforce CLI Commands</h3>
              <CodeBlock language="bash" code={`# Authenticate to your org
sf org login web

# Create a new Apex class
sf apex generate class MyClass

# Create a new Apex trigger
sf apex generate trigger MyTrigger -s Account -e before insert

# Execute anonymous code
sf apex run -f ./scripts/mycode.apex

# Retrieve metadata
sf project retrieve start -m ApexClass:MyClass

# Deploy metadata
sf project deploy start -d ./force-app`} />

              <div className="info-box">
                <h4>⚠️ Important</h4>
                <p>Always use a sandbox or development org for learning and testing. Never write 
                or test code directly in production orgs unless absolutely necessary.</p>
              </div>
            </section>

            <section>
              <h2>3. Your First Apex Class</h2>
              <p>Let's create a simple Apex class that demonstrates core concepts:</p>

              <h3>3.1 Class Definition</h3>
              <CodeBlock language="apex" code={`public class HelloWorld {
    // Class member variables
    private String greeting;
    
    // Constructor - called when creating an instance
    public HelloWorld() {
        this.greeting = 'Hello, World!';
    }
    
    // Parameterized constructor
    public HelloWorld(String name) {
        this.greeting = 'Hello, ' + name + '!';
    }
    
    // Method that returns a String
    public String greet() {
        return this.greeting;
    }
    
    // Method with parameters
    public String greetWithTime(Integer hour) {
        String timeOfDay;
        if (hour < 12) {
            timeOfDay = 'Good morning';
        } else if (hour < 17) {
            timeOfDay = 'Good afternoon';
        } else {
            timeOfDay = 'Good evening';
        }
        return timeOfDay + ', ' + this.greeting;
    }
}`} />

              <h3>3.2 Executing the Class</h3>
              <p>Use Execute Anonymous to run Apex code directly:</p>
              <CodeBlock language="apex" code={`// Create an instance of the class
HelloWorld hw = new HelloWorld();

// Call the greet method
String message = hw.greet();
System.debug(message); // Output: Hello, World!

// Use parameterized constructor
HelloWorld hw2 = new HelloWorld('Salesforce Developer');
System.debug(hw2.greet()); // Output: Hello, Salesforce Developer!

// Call method with parameters
System.debug(hw.greetWithTime(14)); // Output: Good afternoon, Hello, World!`} />

              <h3>3.3 Key Concepts in Our Example</h3>
              <ul>
                <li><strong>Class Declaration</strong> - <code>public class HelloWorld</code> defines the class</li>
                <li><strong>Member Variables</strong> - <code>private String greeting</code> stores state</li>
                <li><strong>Constructors</strong> - Special methods called when creating objects</li>
                <li><strong>Methods</strong> - Functions that perform actions and return values</li>
                <li><strong>Access Modifiers</strong> - <code>public</code> and <code>private</code> control visibility</li>
              </ul>
            </section>

            <section>
              <h2>4. Apex Data Types Deep Dive</h2>
              <p>Understanding data types is fundamental to Apex programming. Here's a comprehensive overview:</p>

              <h3>4.1 Primitive Types</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Integer</strong></td>
                      <td>32-bit signed integer</td>
                      <td><code>Integer count = 100;</code></td>
                      <td>-2,147,483,648 to 2,147,483,647</td>
                    </tr>
                    <tr>
                      <td><strong>Long</strong></td>
                      <td>64-bit signed integer</td>
                      <td><code>Long bigNumber = 123456789L;</code></td>
                      <td>-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
                    </tr>
                    <tr>
                      <td><strong>Double</strong></td>
                      <td>64-bit floating point</td>
                      <td><code>Double price = 99.99;</code></td>
                      <td>15 digits of precision</td>
                    </tr>
                    <tr>
                      <td><strong>Decimal</strong></td>
                      <td>Exact decimal for currency</td>
                      <td><code>Decimal amount = 123.45;</code></td>
                      <td>Up to 18 digits, arbitrary precision</td>
                    </tr>
                    <tr>
                      <td><strong>Boolean</strong></td>
                      <td>True/false value</td>
                      <td><code>Boolean isActive = true;</code></td>
                      <td>true, false, or null</td>
                    </tr>
                    <tr>
                      <td><strong>String</strong></td>
                      <td>Sequence of characters</td>
                      <td><code>String name = 'Salesforce';</code></td>
                      <td>Up to 16 million characters</td>
                    </tr>
                    <tr>
                      <td><strong>Date</strong></td>
                      <td>Calendar date</td>
                      <td><code>Date today = Date.today();</code></td>
                      <td>No time component</td>
                    </tr>
                    <tr>
                      <td><strong>Datetime</strong></td>
                      <td>Date and time</td>
                      <td><code>Datetime now = Datetime.now();</code></td>
                      <td>Includes time zone</td>
                    </tr>
                    <tr>
                      <td><strong>ID</strong></td>
                      <td>Salesforce record ID</td>
                      <td><code>ID recordId = '0015j000001234ABC';</code></td>
                      <td>15 or 18 character</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>4.2 Collections</h3>
              <ul>
                <li><strong>List</strong> - Ordered collection, allows duplicates: <code>List&lt;String&gt; names = new List&lt;String&gt;();</code></li>
                <li><strong>Set</strong> - Unordered collection, no duplicates: <code>Set&lt;Integer&gt; numbers = new Set&lt;Integer&gt;();</code></li>
                <li><strong>Map</strong> - Key-value pairs: <code>Map&lt;String, Integer&gt; ageMap = new Map&lt;String, Integer&gt;();</code></li>
              </ul>

              <h3>4.3 sObjects</h3>
              <p>sObjects represent Salesforce records - both standard and custom:</p>
              <CodeBlock language="apex" code={`// Standard object
Account a = new Account();
a.Name = 'Acme Corporation';
a.Industry = 'Technology';
insert a;

// Custom object
Project__c p = new Project__c();
p.Name__c = 'Website Redesign';
p.Status__c = 'Planning';
p.Budget__c = 50000;
insert p;`} />

              <div className="info-box">
                <h4>💡 Pro Tip</h4>
                <p>Always use <code>Decimal</code> for currency values, not <code>Double</code>. Decimal provides 
                exact arithmetic to avoid floating-point rounding errors when dealing with money.</p>
              </div>
            </section>

            <section>
              <h2>5. Understanding Governor Limits</h2>
              <p>Salesforce runs on a multi-tenant architecture, meaning resources are shared. Governor limits ensure fair usage:</p>

              <h3>5.1 Common Governor Limits</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Limit Type</th>
                      <th>Description</th>
                      <th>Default Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>SOQL Queries</strong></td>
                      <td>Queries per transaction</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td><strong>DML Statements</strong></td>
                      <td>Inserts/updates/deletes per transaction</td>
                      <td>150</td>
                    </tr>
                    <tr>
                      <td><strong>CPU Time</strong></td>
                      <td>Processing time per transaction</td>
                      <td>10,000 ms</td>
                    </tr>
                    <tr>
                      <td><strong>Heap Size</strong></td>
                      <td>Memory used</td>
                      <td>6 MB</td>
                    </tr>
                    <tr>
                      <td><strong>Email</strong></td>
                      <td>Emails per day</td>
                      <td>5,000</td>
                    </tr>
                    <tr>
                      <td><strong>Callouts</strong></td>
                      <td>HTTP requests per transaction</td>
                      <td>100</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>5.2 Why Limits Exist</h3>
              <ul>
                <li><strong>Multi-Tenancy</strong> - Share resources fairly among all orgs</li>
                <li><strong>Performance</strong> - Prevent runaway code from affecting others</li>
                <li><strong>Security</strong> - Prevent resource exhaustion attacks</li>
                <li><strong>Reliability</strong> - Ensure platform stability</li>
              </ul>

              <h3>5.3 Handling Limits in Code</h3>
              <CodeBlock language="apex" code={`// Use limits class to check before executing
public void processRecords(List&lt;Account&gt; accounts) {
    // Check SOQL limit before querying
    Integer queryLimit = Limits.getLimitQueryRows();
    Integer queryRows = Limits.getQueryRows();
    
    if (queryRows + accounts.size() &gt; queryLimit) {
        // Handle limit issue - maybe process in batches
        System.debug('Approaching query limit!');
    }
    
    // Use Database methods for better control
    Database.SaveResult[] results = Database.insert(accounts, false);
    
    // Check results for partial success
    for (Database.SaveResult sr : results) {
        if (sr.isSuccess()) {
            System.debug('Inserted: ' + sr.getId());
        } else {
            for (Database.Error err : sr.getErrors()) {
                System.debug('Error: ' + err.getMessage());
            }
        }
    }
}`} />
            </section>

            <section>
              <h2>6. Debugging and Testing</h2>
              
              <h3>6.1 System Debug</h3>
              <p>The System.debug() method outputs information to the debug log:</p>
              <CodeBlock language="apex" code={`String name = 'Salesforce Developer';
Integer experience = 5;
Boolean isCertified = true;

System.debug('Name: ' + name);
System.debug('Experience: ' + experience + ' years');
System.debug('Certified: ' + isCertified);

// Debug with different severity levels
System.debug(LoggingLevel.ERROR, 'This is an error message');
System.debug(LoggingLevel.WARN, 'This is a warning');
System.debug(LoggingLevel.INFO, 'This is informational');`} />

              <h3>6.2 Understanding Debug Logs</h3>
              <ol>
                <li>Open Developer Console</li>
                <li>Click <strong>Debug → Switch Windows → Open</strong></li>
                <li>Select the <strong>Logs</strong> tab</li>
                <li>Run your code and watch the log populate</li>
                <li>Use debug levels to filter: <strong>ERROR, WARN, INFO, DEBUG, FINE</strong></li>
              </ol>

              <h3>6.3 Writing Tests</h3>
              <p>Apex requires code coverage - at least 75% for deployment:</p>
              <CodeBlock language="apex" code={`@isTest
public class HelloWorldTest {
    @isTest
    public static void testGreet() {
        // Create test data
        HelloWorld hw = new HelloWorld();
        
        // Test the greet method
        String result = hw.greet();
        System.assertEquals('Hello, World!', result);
        
        // Test parameterized constructor
        HelloWorld hw2 = new HelloWorld('Apex');
        String result2 = hw2.greet();
        System.assertEquals('Hello, Apex!', result2);
    }
    
    @isTest
    public static void testGreetWithTime() {
        HelloWorld hw = new HelloWorld();
        
        // Test morning
        String morningResult = hw.greetWithTime(9);
        System.assertEquals('Good morning, Hello, World!', morningResult);
        
        // Test afternoon
        String afternoonResult = hw.greetWithTime(14);
        System.assertEquals('Good afternoon, Hello, World!', afternoonResult);
        
        // Test evening
        String eveningResult = hw.greetWithTime(20);
        System.assertEquals('Good evening, Hello, World!', eveningResult);
    }
}`} />

              <div className="info-box">
                <h4>📝 Best Practice</h4>
                <p>Write test methods that verify actual business logic, not just that code runs. 
                Use System.assertEquals() and System.assertNotEquals() to validate expected results.</p>
              </div>
            </section>

            <section>
              <h2>7. Summary</h2>
              <p>In this comprehensive lesson on getting started with Apex, you learned:</p>
              <ul>
                <li>What Apex is and its key characteristics</li>
                <li>Development environment options: Developer Console and VS Code</li>
                <li>How to create and execute your first Apex class</li>
                <li>Apex data types: Primitives, Collections, and sObjects</li>
                <li>Understanding governor limits and why they exist</li>
                <li>Debugging techniques using System.debug()</li>
                <li>Writing test methods for code coverage</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to Data Types & Variables to learn about Apex's type system 
                in depth, including working with primitives and complex types.
              </p>
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
