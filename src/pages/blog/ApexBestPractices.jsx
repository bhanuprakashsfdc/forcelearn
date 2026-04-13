import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'
import CodeBlock from '../../components/content/CodeBlock'

export default function ApexBestPractices() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/blogs.html', label: 'Blog' },
            { label: 'Apex Best Practices' }
          ]} />
          <article className="lesson-content">
            <span className="blog-category">Developer</span>
            <h1>Apex Best Practices: Writing Clean, Efficient Code</h1>
            <p className="lesson-intro">
              Learn how to write Apex code that follows Salesforce best practices, avoids common pitfalls, and passes security review.
            </p>

            <section>
              <h2>Why Apex Best Practices Matter</h2>
              <p>Apex runs in a multi-tenant environment with strict governor limits. Writing efficient code ensures:</p>
              <ul>
                <li>Your code doesn't hit governor limits</li>
                <li>Applications perform well at scale</li>
                <li>Code passes Salesforce Security Review</li>
                <li>Others can maintain your code easily</li>
              </ul>
            </section>

            <section>
              <h2>1. Bulkify Your Code</h2>
              <p>Always design for processing multiple records. Never assume only one record will be processed at a time.</p>

              <h3>❌ Bad Practice</h3>
              <CodeBlock language="apex" code={`// BAD: Query inside a loop
for (Account a : trigger.new) {
    Contact c = [SELECT Id FROM Contact WHERE AccountId = :a.Id LIMIT 1];
    // Process contact...
}`} />

              <h3>✅ Good Practice</h3>
              <CodeBlock language="apex" code={`// GOOD: Query outside the loop
Set<Id> accountIds = new Set<Id>();
for (Account a : trigger.new) {
    accountIds.add(a.Id);
}

Map<Id, Contact> contactsByAccountId = new Map<Id, Contact>(
    [SELECT Id, AccountId FROM Contact WHERE AccountId IN :accountIds]
);

for (Account a : trigger.new) {
    Contact c = contactsByAccountId.get(a.Id);
    // Process contact...
}`} />
            </section>

            <section>
              <h2>2. Use Collections Effectively</h2>
              <p>Choose the right collection type for your use case:</p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Collection</th>
                      <th>Use When</th>
                      <th>Key Methods</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>List</strong></td>
                      <td>Ordered collection, duplicates allowed</td>
                      <td>add(), get(), indexOf()</td>
                    </tr>
                    <tr>
                      <td><strong>Set</strong></td>
                      <td>Unique values, membership checks</td>
                      <td>add(), contains(), remove()</td>
                    </tr>
                    <tr>
                      <td><strong>Map</strong></td>
                      <td>Key-value lookups</td>
                      <td>get(), put(), keySet(), values()</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>3. Avoid SOQL Queries in Loops</h2>
              <p>Every SOQL query consumes limits. Query outside loops whenever possible.</p>

              <CodeBlock language="apex" code={`// BAD: SOQL in loop
for (Opportunity opp : opportunities) {
    Account acc = [SELECT Id, Name FROM Account WHERE Id = :opp.AccountId];
    // Process...
}

// GOOD: Query once, use Map
Set<Id> accountIds = new Set<Id>();
for (Opportunity opp : opportunities) {
    accountIds.add(opp.AccountId);
}

Map<Id, Account> accountsMap = new Map<Id, Account>(
    [SELECT Id, Name FROM Account WHERE Id IN :accountIds]
);

for (Opportunity opp : opportunities) {
    Account acc = accountsMap.get(opp.AccountId);
    // Process...
}`} />
            </section>

            <section>
              <h2>4. Use @future for Asynchronous Processing</h2>
              <p>Long-running operations should be asynchronous to avoid hitting limits.</p>

              <CodeBlock language="apex" code={`public class AsyncProcessor {
    @future
    public static void processLargeDataSet(Set<Id> recordIds) {
        List<Account> accounts = [SELECT Id, Name FROM Account WHERE Id IN :recordIds];
        
        for (Account acc : accounts) {
            // Heavy processing here...
        }
        
        update accounts;
    }
}`} />

              <div className="info-box">
                <h4>💡 Best Practice</h4>
                <p>Consider Batch Apex for processing 50,000+ records. Use @future for smaller async tasks.</p>
              </div>
            </section>

            <section>
              <h2>5. Handle Exceptions Properly</h2>
              <p>Always use try-catch blocks and log errors appropriately.</p>

              <CodeBlock language="apex" code={`public class AccountService {
    public void updateAccounts(List<Account> accounts) {
        try {
            update accounts;
        } catch (DmlException e) {
            // Log the error
            System.debug('Error updating accounts: ' + e.getMessage());
            
            // Add error to records
            for (Account acc : accounts) {
                acc.addError('Failed to update: ' + e.getMessage());
            }
        }
    }
}`} />
            </section>

            <section>
              <h2>6. Follow Naming Conventions</h2>
              <p>Consistent naming makes code readable and maintainable.</p>

              <div className="info-table">
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Convention</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Class</strong></td>
                      <td>PascalCase</td>
                      <td>AccountService</td>
                    </tr>
                    <tr>
                      <td><strong>Method</strong></td>
                      <td>camelCase</td>
                      <td>updateAccounts()</td>
                    </tr>
                    <tr>
                      <td><strong>Variable</strong></td>
                      <td>camelCase</td>
                      <td>accountList</td>
                    </tr>
                    <tr>
                      <td><strong>Constant</strong></td>
                      <td>UPPER_CASE</td>
                      <td>MAX_RETRY_COUNT</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>7. Write Test Classes</h2>
              <p>Comprehensive test coverage is required for deployment and ensures your code works correctly.</p>

              <CodeBlock language="apex" code={`@IsTest
class AccountServiceTest {
    @IsTest
    static void testUpdateAccounts() {
        // Arrange: Create test data
        Account testAcc = new Account(Name='Test Account');
        insert testAcc;
        
        // Act: Call the method
        AccountService service = new AccountService();
        testAcc.Name = 'Updated Name';
        
        // Assert: Verify the result
        Account result = [SELECT Name FROM Account WHERE Id = :testAcc.Id];
        System.assertEquals('Updated Name', result.Name);
    }
}`} />
            </section>

            <section>
              <h2>Summary</h2>
              <p>Following Apex best practices ensures your code:</p>
              <ul>
                <li>Works at scale without hitting limits</li>
                <li>Passes Security Review</li>
                <li>Is maintainable by other developers</li>
                <li>Performs well in production</li>
              </ul>
              <p>Continue learning: <Link to="/developer-path.html">Start the Developer Path</Link></p>
            </section>
          </article>
        </div>
      </main>
    </div>
  )
}
