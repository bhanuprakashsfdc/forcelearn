import { Link } from 'react-router-dom'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'

const sidebarModules = [
  { id: 1, title: '1. System Design', lessons: [
    { id: 'arch-1-1', title: 'Architecture Overview', slug: '/architect-path/architecture-overview.html' },
    { id: 'arch-1-2', title: 'Domain Modeling', slug: '/architect-path/domain-modeling.html' },
    { id: 'arch-1-3', title: 'Design Patterns', slug: '/architect-path/design-patterns.html' },
  ]},
  { id: 2, title: '2. Data Architecture', lessons: [
    { id: 'arch-2-1', title: 'Schema Design', slug: '/architect-path/schema-design.html' },
    { id: 'arch-2-2', title: 'Storage Optimization', slug: '/architect-path/storage-optimization.html' },
    { id: 'arch-2-3', title: 'Big Objects', slug: '/architect-path/big-objects.html' },
  ]},
  { id: 3, title: '3. Integration Patterns', lessons: [
    { id: 'arch-3-1', title: 'MuleSoft Basics', slug: '/architect-path/mulesoft-basics.html' },
    { id: 'arch-3-2', title: 'API Design', slug: '/architect-path/api-design.html' },
    { id: 'arch-3-3', title: 'Event-Driven Architecture', slug: '/architect-path/event-driven.html' },
  ]},
  { id: 4, title: '4. Security Architecture', lessons: [
    { id: 'arch-4-1', title: 'Identity Management', slug: '/architect-path/identity-management.html' },
    { id: 'arch-4-2', title: 'SSO Implementation', slug: '/architect-path/sso-implementation.html' },
    { id: 'arch-4-3', title: 'Data Protection', slug: '/architect-path/data-protection.html' },
  ]}
]

export default function DesignPatterns() {
  return (
    <div className="lesson-page-layout">
      <Sidebar modules={sidebarModules} currentSlug="/architect-path/design-patterns.html" />
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[
            { to: '/', label: 'Home' },
            { to: '/architect-path.html', label: 'Architect Path' },
            { label: 'Design Patterns' }
          ]} />
          <article className="lesson-content">
            <h1>Salesforce Design Patterns</h1>
            <p className="lesson-intro">Learn proven architectural patterns for building scalable Salesforce applications.</p>

            <section>
              <h2>Trigger Handler Pattern</h2>
              <p>Centralize trigger logic in handler classes:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`// Trigger
trigger AccountTrigger on Account (before insert) {
    AccountTriggerHandler.handleBefore(Trigger.new);
}

// Handler
public class AccountTriggerHandler {
    public static void handleBefore(List<Account> accounts) {
        for (Account acc : accounts) {
            if (acc.Industry == 'Technology') {
                acc.Rating = 'Hot';
            }
        }
    }
}`}
              </pre>
            </section>

            <section>
              <h2>Selector Pattern</h2>
              <p>Abstract SOQL queries into selector classes:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`public virtual inherited sharing class AccountSelector {
    public List<Account> selectById(Set<Id> ids) {
        return [SELECT Id, Name, Industry FROM Account WHERE Id IN :ids];
    }
    
    public List<Account> selectByIndustry(String industry) {
        return [SELECT Id, Name FROM Account WHERE Industry = :industry];
    }
}`}
              </pre>
            </section>

            <section>
              <h2>Service Layer Pattern</h2>
              <p>Centralize business logic in service classes:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`public with sharing class OpportunityService {
    public void closeWonOpportunities(Set<Id> oppIds) {
        List<Opportunity> opps = selector.selectById(oppIds);
        for (Opportunity opp : opps) {
            opp.StageName = 'Closed Won';
            opp.CloseDate = Date.today();
        }
        update opps;
    }
}`}
              </pre>
            </section>

            <section>
              <h2>Unit of Work Pattern</h2>
              <p>Batch multiple operations together:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`public class AccountService {
    public void createAccountWithContact(String accName, String conName) {
        fflib_SObjectUnitOfWork uow = new fflib_SObjectUnitOfWork(
            new Schema.SObjectType[]{ Account.SObjectType, Contact.SObjectType }
        );
        
        Account acc = new Account(Name = accName);
        uow.registerNew(acc);
        
        Contact con = new Contact(LastName = conName);
        uow.registerNew(con, Contact.AccountId, acc);
        
        uow.commitWork();
    }
}`}
              </pre>
            </section>

            <section>
              <h2>Factory Pattern</h2>
              <p>Create objects dynamically based on type:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`public class PaymentFactory {
    public static IPayment createPayment(String type) {
        switch on type {
            when 'CREDIT_CARD' {
                return new CreditCardPayment();
            }
            when 'PAYPAL' {
                return new PayPalPayment();
            }
            when else {
                throw new PaymentException('Invalid payment type');
            }
        }
    }
}`}
              </pre>
            </section>

            <section>
              <h2>Strategy Pattern</h2>
              <p>Define interchangeable algorithms:</p>
              <pre style={{ background: '#2D2D2D', color: '#d4d4d4', padding: '16px', borderRadius: '8px' }}>
{`public interface IPricingStrategy {
    Decimal calculatePrice(Product2 product, Integer quantity);
}

public class StandardPricing implements IPricingStrategy {
    public Decimal calculatePrice(Product2 product, Integer quantity) {
        return product.UnitPrice * quantity;
    }
}

public class BulkPricing implements IPricingStrategy {
    public Decimal calculatePrice(Product2 product, Integer quantity) {
        if (quantity >= 100) {
            return product.UnitPrice * 0.9 * quantity;
        }
        return product.UnitPrice * quantity;
    }
}`}
              </pre>
            </section>

            <section>
              <h2>Summary</h2>
              <ul>
                <li>Trigger Handler - centralize trigger logic</li>
                <li>Selector - abstract database queries</li>
                <li>Service Layer - centralize business logic</li>
                <li>Unit of Work - batch operations</li>
                <li>Factory - create objects dynamically</li>
                <li>Strategy - interchangeable algorithms</li>
              </ul>
            </section>
          </article>
          <div className="lesson-nav">
            <div className="lesson-nav-prev">
              <span className="nav-label">Previous</span>
              <Link to="/architect-path/domain-modeling.html" className="nav-link">← Domain Modeling</Link>
            </div>
            <div className="lesson-nav-next">
              <span className="nav-label">Next</span>
              <Link to="/architect-path/schema-design.html" className="nav-link">Schema Design →</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}