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

export default function ClassesMethods() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={developerSidebarModules} currentSlug="/developer-path/classes-methods" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/developer-path', label: 'Developer Path' },
            { label: 'Classes & Methods' }
          ]} />
          <article className="lesson-content">
            <h1>Classes & Methods</h1>
            <p className="lesson-intro">Learn how to create Apex classes, define methods, and use constructors.</p>

            <section>
              <h2>Class Structure</h2>
              <CodeBlock language="apex" code={`public class AccountService {
    // Member variables
    private String serviceName;
    
    // Constructor
    public AccountService() {
        this.serviceName = 'Default Service';
    }
    
    // Methods
    public void processAccount(Account acc) {
        // Method logic
    }
    
    public Integer calculateRevenue(List<Opportunity> opps) {
        Integer total = 0;
        for(Opportunity opp : opps) {
            total += (Integer)opp.Amount;
        }
        return total;
    }
}`} />
            </section>

            <section>
              <h2>Access Modifiers</h2>
              <ul>
                <li><strong>public:</strong> Accessible within the namespace</li>
                <li><strong>private:</strong> Only within the defining class</li>
                <li><strong>global:</strong> Accessible everywhere</li>
                <li><strong>protected:</strong> Within class and subclasses</li>
              </ul>
            </section>

            <section>
              <h2>Method Modifiers</h2>
              <ul>
                <li><strong>static:</strong> Class-level, not instance-based</li>
                <li><strong>future:</strong> Runs asynchronously</li>
                <li><strong>webservice:</strong> Exposed as SOAP/REST</li>
              </ul>
            </section>

            <section>
              <h2>Static vs Instance</h2>
              <CodeBlock language="apex" code={`public class MathHelper {
    // Static method - call directly
    public static Integer add(Integer a, Integer b) {
        return a + b;
    }
    
    // Instance method - requires instantiation
    public Integer multiply(Integer a, Integer b) {
        return a * b;
    }
}

// Usage
Integer sum = MathHelper.add(5, 3);  // Static

MathHelper helper = new MathHelper();
Integer product = helper.multiply(4, 3);  // Instance`} />
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Classes contain methods and member variables</li>
                <li>Use access modifiers to control visibility</li>
                <li>Static methods don't require instantiation</li>
              </ul>
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