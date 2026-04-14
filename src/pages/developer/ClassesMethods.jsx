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

export default function ClassesMethods() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/classes-methods.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path.html', label: 'Developer Path' },
            { label: 'Classes & Methods' }
          ]} />
          <article className="lesson-content">
            <h1>Classes & Methods in Apex: Complete Guide</h1>
            <p className="lesson-intro">
              Apex is an object-oriented language similar to Java. This comprehensive guide covers 
              class design, method creation, constructors, access modifiers, and object-oriented 
              principles specific to Salesforce development.
            </p>

            <section>
              <h2>1. Understanding Apex Classes</h2>
              <p>
                Classes in Apex are blueprints for creating objects. They define the structure, 
                behavior, and properties that objects of that class will have. Classes encapsulate 
                data (variables) and behavior (methods) into a single unit.
              </p>

              <h3>1.1 Class Declaration</h3>
              <CodeBlock language="apex" code={`// Basic class structure
public class AccountService {
    // Class body contains variables and methods
}`} />

              <h3>1.2 Class Components</h3>
              <ul>
                <li><strong>Variables</strong> - Store data and state</li>
                <li><strong>Constructors</strong> - Initialize new objects</li>
                <li><strong>Methods</strong> - Define behavior</li>
                <li><strong>Static blocks</strong> - Run once at class load</li>
                <li><strong>Inner classes</strong> - Classes within classes</li>
              </ul>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Purpose</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Instance Variables</td>
                      <td>State unique to each object</td>
                      <td><code>private String name;</code></td>
                    </tr>
                    <tr>
                      <td>Static Variables</td>
                      <td>Shared across all objects</td>
                      <td><code>public static Integer count = 0;</code></td>
                    </tr>
                    <tr>
                      <td>Constructors</td>
                      <td>Initialize new instances</td>
                      <td><code>public MyClass() { }</code></td>
                    </tr>
                    <tr>
                      <td>Instance Methods</td>
                      <td>Behavior per object</td>
                      <td><code>public void doSomething() { }</code></td>
                    </tr>
                    <tr>
                      <td>Static Methods</td>
                      <td>Class-level behavior</td>
                      <td><code>public static Integer calculate() { }</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>2. Creating Your First Service Class</h2>
              <p>Let's build a comprehensive AccountService class that demonstrates all concepts:</p>

              <h3>2.1 Complete Class Example</h3>
              <CodeBlock language="apex" code={`public with sharing class AccountService {
    
    // Instance variables (state)
    private String serviceName;
    private Integer processingCount;
    
    // Static variable (shared across all instances)
    public static Integer totalAccountsProcessed = 0;
    
    // Default constructor
    public AccountService() {
        this.serviceName = 'Default Account Service';
        this.processingCount = 0;
    }
    
    // Parameterized constructor
    public AccountService(String serviceName) {
        this.serviceName = serviceName;
        this.processingCount = 0;
    }
    
    // Instance method - processes a single account
    public void processAccount(Account acc) {
        // Validate the account
        if (acc == null) {
            throw new IllegalArgumentException('Account cannot be null');
        }
        
        // Business logic
        if (String.isBlank(acc.Name)) {
            acc.Name = 'Unknown Account';
        }
        
        // Update account
        update acc;
        
        // Update counters
        this.processingCount++;
        AccountService.totalAccountsProcessed++;
    }
    
    // Method that returns a value
    public Integer getProcessingCount() {
        return this.processingCount;
    }
    
    // Static method - utility function
    public static Integer calculateRevenue(List&lt;Opportunity&gt; opps) {
        Integer total = 0;
        if (opps != null) {
            for (Opportunity opp : opps) {
                if (opp.Amount != null) {
                    total += opp.Amount.intValue();
                }
            }
        }
        return total;
    }
    
    // Method with multiple parameters
    public List&lt;Account&gt; findAccountsByIndustry(String industry, Integer limitSize) {
        return [
            SELECT Id, Name, Industry, AnnualRevenue 
            FROM Account 
            WHERE Industry = :industry 
            LIMIT :limitSize
        ];
    }
    
    // Method returning a custom result
    public ServiceResult validateAccount(Account acc) {
        ServiceResult result = new ServiceResult();
        result.isValid = true;
        result.messages = new List&lt;String&gt;();
        
        if (acc == null) {
            result.isValid = false;
            result.messages.add('Account cannot be null');
            return result;
        }
        
        if (String.isBlank(acc.Name)) {
            result.isValid = false;
            result.messages.add('Account name is required');
        }
        
        if (acc.Industry == null) {
            result.isValid = false;
            result.messages.add('Industry is required');
        }
        
        return result;
    }
    
    // Inner class for structured return values
    public class ServiceResult {
        public Boolean isValid;
        public List&lt;String&gt; messages;
        
        public ServiceResult() {
            this.isValid = true;
            this.messages = new List&lt;String&gt;();
        }
        
        public Boolean hasErrors() {
            return !this.isValid || (this.messages != null && !this.messages.isEmpty());
        }
    }
}`} />

              <h3>2.2 Using the Service Class</h3>
              <CodeBlock language="apex" code={`// Create instance with default constructor
AccountService service = new AccountService();

// Create instance with custom name
AccountService customService = new AccountService('Premium Service');

// Process accounts
List&lt;Account&gt; accounts = [SELECT Id, Name, Industry FROM Account LIMIT 5];
for (Account acc : accounts) {
    service.processAccount(acc);
}

// Get processing count
Integer count = service.getProcessingCount();
System.debug('Processed: ' + count);

// Static method usage - no instance needed
List&lt;Opportunity&gt; closedWon = [
    SELECT Amount FROM Opportunity 
    WHERE StageName = 'Closed Won'
];
Integer revenue = AccountService.calculateRevenue(closedWon);

// Using inner class
Account testAcc = new Account(Name = '', Industry = null);
AccountService.ServiceResult result = service.validateAccount(testAcc);
if (result.hasErrors()) {
    for (String msg : result.messages) {
        System.debug('Error: ' + msg);
    }
}`} />
            </section>

            <section>
              <h2>3. Access Modifiers</h2>
              <p>Access modifiers control where your class members can be accessed from:</p>

              <h3>3.1 Class-Level Access Modifiers</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Modifier</th>
                      <th>Scope</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>public</strong></td>
                      <td>Visible within the same namespace</td>
                      <td>Most classes and methods</td>
                    </tr>
                    <tr>
                      <td><strong>private</strong></td>
                      <td>Only within the defining class</td>
                      <td>Helper methods, internal logic</td>
                    </tr>
                    <tr>
                      <td><strong>global</strong></td>
                      <td>Visible everywhere (including other namespaces)</td>
                      <td>Managed package APIs</td>
                    </tr>
                    <tr>
                      <td><strong>without sharing</strong></td>
                      <td>Ignores sharing rules</td>
                      <td>Utility classes, backend logic</td>
                    </tr>
                    <tr>
                      <td><strong>with sharing</strong></td>
                      <td>Enforces sharing rules</td>
                      <td>UI controllers, user-facing code</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.2 Sharing Settings</h3>
              <CodeBlock language="apex" code={`// With sharing - respects user's record access
public with sharing class AccountRepository {
    public List&lt;Account&gt; getMyAccounts() {
        // Sharing rules enforced - user only sees what they can access
        return [SELECT Id, Name FROM Account];
    }
}

// Without sharing - bypasses sharing rules
public without sharing class DataUtility {
    public void deleteAllContacts() {
        // Can delete all contacts regardless of user access
        delete [SELECT Id FROM Contact];
    }
}

// Inheritance with sharing - child inherits parent's sharing
public with sharing class SecureService extends ServiceBase {
    // Still uses with sharing
}`} />

              <div className="info-box">
                <h4>⚠️ Important</h4>
                <p>Always explicitly declare <code>with sharing</code> or <code>without sharing</code> 
                for classes that perform DML operations. The default behavior can be unpredictable 
                in complex inheritance scenarios.</p>
              </div>
            </section>

            <section>
              <h2>4. Method Design Patterns</h2>
              
              <h3>4.1 Method Signature Variations</h3>
              <CodeBlock language="apex" code={`// Basic method
public void process() {
    // No parameters, no return
}

// Method with parameters
public void processWithParams(Integer count, String name) {
    // Multiple parameters
}

// Method with return value
public Integer calculate() {
    return 42;
}

// Method with multiple return values using inner class
public class ApiResponse {
    public Boolean success;
    public String message;
    public List&lt;Account&gt; data;
}

public ApiResponse fetchAccounts() {
    ApiResponse response = new ApiResponse();
    try {
        response.data = [SELECT Id, Name FROM Account LIMIT 10];
        response.success = true;
    } catch (Exception e) {
        response.success = false;
        response.message = e.getMessage();
    }
    return response;
}

// Method overloading - same name, different parameters
public void process(String input) {
    System.debug('String: ' + input);
}

public void process(Integer input) {
    System.debug('Integer: ' + input);
}

public void process(String input1, String input2) {
    System.debug('Two strings: ' + input1 + ', ' + input2);
}`} />

              <h3>4.2 Static Methods</h3>
              <CodeBlock language="apex" code={`public class MathUtils {
    // Static method - can be called without instantiation
    public static Integer add(Integer a, Integer b) {
        return a + b;
    }
    
    public static Integer subtract(Integer a, Integer b) {
        return a - b;
    }
    
    public static Decimal calculateTax(Decimal amount, Decimal taxRate) {
        if (amount == null || taxRate == null) {
            return 0;
        }
        return amount * taxRate;
    }
    
    // Static initialization block
    public static final String DEFAULT_CURRENCY;
    static {
        DEFAULT_CURRENCY = 'USD';
    }
}

// Usage - no need to create instance
Integer result = MathUtils.add(5, 3);
Decimal tax = MathUtils.calculateTax(1000, 0.08);`} />

              <h3>4.3 Method Chaining</h3>
              <CodeBlock language="apex" code={`public class QueryBuilder {
    private String query;
    
    public QueryBuilder() {
        this.query = '';
    }
    
    public QueryBuilder select_(List&lt;String&gt; fields) {
        this.query = 'SELECT ' + String.join(fields, ', ');
        return this;  // Return this for chaining
    }
    
    public QueryBuilder from_(String objectName) {
        this.query += ' FROM ' + objectName;
        return this;
    }
    
    public QueryBuilder where_(String condition) {
        this.query += ' WHERE ' + condition;
        return this;
    }
    
    public QueryBuilder limit_(Integer limit) {
        this.query += ' LIMIT ' + limit;
        return this;
    }
    
    public String build() {
        return this.query;
    }
}

// Usage - chain methods together
String query = new QueryBuilder()
    .select_(new List&lt;String&gt;{'Id', 'Name', 'Industry'})
    .from_('Account')
    .where_('Industry = \'Technology\'')
    .limit_(10)
    .build();

System.debug(query);
// SELECT Id, Name, Industry FROM Account WHERE Industry = 'Technology' LIMIT 10`} />
            </section>

            <section>
              <h2>5. Constructors</h2>
              <p>Constructors initialize new objects when they're created with the <code>new</code> keyword:</p>

              <h3>5.1 Constructor Types</h3>
              <CodeBlock language="apex" code={`public class Employee {
    private String name;
    private String department;
    private Integer salary;
    
    // 1. Default constructor (no parameters)
    public Employee() {
        this.name = 'Unknown';
        this.department = 'General';
        this.salary = 0;
    }
    
    // 2. Parameterized constructor
    public Employee(String name, String department) {
        this.name = name;
        this.department = department;
        this.salary = 50000;
    }
    
    // 3. Constructor with all fields
    public Employee(String name, String department, Integer salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    
    // Getter methods
    public String getName() {
        return this.name;
    }
}

// Usage
Employee emp1 = new Employee();  // Default
Employee emp2 = new Employee('John', 'Engineering');  // Two params
Employee emp3 = new Employee('Jane', 'Sales', 75000);  // All params`} />

              <h3>5.2 Constructor Chaining</h3>
              <CodeBlock language="apex" code={`public class ContactInfo {
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    
    // Primary constructor with all fields
    public ContactInfo(String firstName, String lastName, String email, String phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
    
    // Secondary constructor - calls primary
    public ContactInfo(String firstName, String lastName, String email) {
        this(firstName, lastName, email, null);  // Chain to primary
    }
    
    // Tertiary constructor - calls secondary
    public ContactInfo(String firstName, String lastName) {
        this(firstName, lastName, null);  // Chain to secondary
    }
    
    public String getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}`} />

              <div className="info-box">
                <h4>💡 Best Practice</h4>
                <p>Use constructor chaining to avoid code duplication. Have simpler constructors 
                call more complex ones with default values for omitted parameters.</p>
              </div>
            </section>

            <section>
              <h2>6. Advanced Class Features</h2>
              
              <h3>6.1 Inner Classes</h3>
              <CodeBlock language="apex" code={`// Outer class
public class OrderService {
    // Inner class - specific to OrderService
    public class OrderItem {
        public String productName;
        public Integer quantity;
        public Decimal unitPrice;
        
        public Decimal getTotalPrice() {
            return this.quantity * this.unitPrice;
        }
    }
    
    // Static inner class
    public static class OrderSummary {
        public Integer itemCount;
        public Decimal totalAmount;
    }
    
    public List&lt;OrderItem&gt; processOrder(List&lt;OrderItem&gt; items) {
        // Process items
        return items;
    }
}

// Usage
OrderService service = new OrderService();
OrderService.OrderItem item = new OrderService.OrderItem();
item.productName = 'Widget';
item.quantity = 5;
item.unitPrice = 19.99;
System.debug(item.getTotalPrice());`} />

              <h3>6.2 Interfaces</h3>
              <CodeBlock language="apex" code={`// Define interface
public interface IProductProcessor {
    void process(Product__c product);
    Boolean validate(Product__c product);
}

// Implement interface
public class ElectronicsProcessor implements IProductProcessor {
    public void process(Product__c product) {
        // Specific electronics processing
        product.Category__c = 'Electronics';
        product.Warranty_Months__c = 24;
    }
    
    public Boolean validate(Product__c product) {
        return product.Price__c != null && product.Price__c > 0;
    }
}

// Another implementation
public class FurnitureProcessor implements IProductProcessor {
    public void process(Product__c product) {
        product.Category__c = 'Furniture';
        product.Warranty_Months__c = 12;
    }
    
    public Boolean validate(Product__c product) {
        return product.Price__c != null && 
               product.Price__c > 0 && 
               product.Weight__c != null;
    }
}

// Use polymorphism
public class ProductService {
    public void processProduct(Product__c prod, IProductProcessor processor) {
        if (processor.validate(prod)) {
            processor.process(prod);
            update prod;
        }
    }
}`} />

              <h3>6.3 Virtual and Override Methods</h3>
              <CodeBlock language="apex" code={`// Base class - can be extended
public virtual class Notification {
    public String recipient;
    
    public Notification(String recipient) {
        this.recipient = recipient;
    }
    
    // Virtual method - can be overridden
    public virtual void send(String message) {
        System.debug('Sending notification to: ' + this.recipient);
        System.debug('Message: ' + message);
    }
    
    public String getRecipient() {
        return this.recipient;
    }
}

// Child class
public class EmailNotification extends Notification {
    public String emailAddress;
    
    public EmailNotification(String recipient, String email) {
        super(recipient);  // Call parent constructor
        this.emailAddress = email;
    }
    
    // Override parent method
    public override void send(String message) {
        System.debug('Sending EMAIL to: ' + this.emailAddress);
        System.debug('Subject: ' + message);
        // Actual email sending logic would go here
    }
}

// Usage
Notification notif = new Notification('John');
notif.send('Hello');  // Basic notification

EmailNotification emailNotif = new EmailNotification('John', 'john@company.com');
emailNotif.send('Hello');  // Email-specific implementation`} />
            </section>

            <section>
              <h2>7. Best Practices</h2>
              
              <h3>7.1 Class Design Guidelines</h3>
              <ul>
                <li>Use <strong>descriptive names</strong> - AccountService, not AS</li>
                <li>Follow <strong>single responsibility</strong> - one class, one purpose</li>
                <li>Keep methods <strong>small and focused</strong></li>
                <li>Use <strong>with sharing</strong> by default for user-facing code</li>
                <li>Return structured objects (inner classes) from query methods</li>
                <li>Avoid global classes unless creating managed packages</li>
              </ul>

              <h3>7.2 Method Design Guidelines</h3>
              <ul>
                <li>Use <strong>verb-noun</strong> naming - processAccount(), not process()</li>
                <li>Make parameters <strong>validated</strong> at the start of methods</li>
                <li>Use <strong>exceptions</strong> for error conditions</li>
                <li>Prefer <strong>static methods</strong> for utility functions</li>
                <li>Return <strong>collections</strong> instead of single records when appropriate</li>
                <li>Use <strong>named parameters</strong> (builder pattern) for complex parameters</li>
              </ul>

              <h3>7.3 Naming Conventions</h3>
              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Element</th>
                      <th>Convention</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Class</td>
                      <td>PascalCase</td>
                      <td><code>AccountService</code></td>
                    </tr>
                    <tr>
                      <td>Method</td>
                      <td>PascalCase</td>
                      <td><code>processAccount()</code></td>
                    </tr>
                    <tr>
                      <td>Variable</td>
                      <td>camelCase</td>
                      <td><code>accountList</code></td>
                    </tr>
                    <tr>
                      <td>Constant</td>
                      <td>UPPER_SNAKE_CASE</td>
                      <td><code>MAX_RETRY_COUNT</code></td>
                    </tr>
                    <tr>
                      <td>Private Variable</td>
                      <td>camelCase with underscore</td>
                      <td><code>serviceName_</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Summary</h2>
              <p>In this comprehensive lesson on Apex classes and methods, you learned:</p>
              <ul>
                <li>Class structure and components (variables, constructors, methods)</li>
                <li>Creating service classes with business logic</li>
                <li>Access modifiers: public, private, global, with/without sharing</li>
                <li>Method design patterns: parameters, return values, overloading</li>
                <li>Static methods and when to use them</li>
                <li>Constructor types and constructor chaining</li>
                <li>Inner classes and interfaces</li>
                <li>Inheritance with virtual and override methods</li>
                <li>Best practices for class and method design</li>
              </ul>
              <p>
                <strong>Next:</strong> Continue to Collections to learn about List, Set, and Map 
                data structures in Apex.
              </p>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/developer-path/data-types.html" className="nav-link">← Data Types & Variables</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/developer-path/collections.html" className="nav-link">Collections →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}