import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/content/Breadcrumb'

export default function BucketingReports() {
  return (
    <div className="lesson-page-layout">
      <main className="lesson-main">
        <div className="container">
          <Breadcrumb items={[{ to: '/', label: 'Home' }, { to: '/blogs.html', label: 'Blog' }, { label: 'Bucketing Reports' }]} />
          <article className="lesson-content">
            <span className="blog-category">Salesforce Admin</span>
            <h1>What are Bucketing Reports in Salesforce</h1>
            <p className="lesson-intro">Bucketing Reports in Salesforce allow you to group records into buckets based on field values for better analysis without creating custom fields.</p>

            <section>
              <h2>What is Bucketing</h2>
              <p>Bucketing is a way to categorize or group report data dynamically. It helps organize data into meaningful ranges without modifying your data.</p>
            </section>

            <section>
              <h2>Types of Buckets</h2>
              <ul>
                <li><strong>Numeric Buckets</strong> - Group numbers into ranges (e.g., 0-100, 100-500)</li>
                <li><strong>Text Buckets</strong> - Group text values into categories</li>
                <li><strong>Date Buckets</strong> - Group dates into periods (weekly, monthly, quarterly)</li>
              </ul>
            </section>

            <section>
              <h2>Creating Bucketed Report</h2>
              <ol>
                <li>Create a new report</li>
                <li>Add columns you want to bucket</li>
                <li>Click "Bucket this column"</li>
                <li>Define bucket ranges/groups</li>
                <li>Run report</li>
              </ol>
            </section>

            <div className="info-box">
              <h4>Next Steps</h4>
              <p><Link to="/what-is-validation-rules-salesforce.html">Learn about Validation Rules</Link></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}