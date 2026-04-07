import { Link } from 'react-router-dom'
import Hero from '../components/content/Hero'
import LearningPathCard from '../components/content/LearningPathCard'

const learningPaths = [
  {
    title: 'Admin Path',
    description: 'Learn Salesforce configuration, objects, automation, and security. Perfect for those starting their Salesforce journey.',
    icon: '👤',
    meta: 'Beginner • 6-8 weeks',
    badges: ['Salesforce Basics', 'Objects & Fields', 'Automation', 'Security'],
    to: '/admin-path'
  },
  {
    title: 'Developer Path',
    description: 'Master Apex, Lightning Web Components, and integration. Build custom applications on the Salesforce platform.',
    icon: '💻',
    meta: 'Intermediate • 8-12 weeks',
    badges: ['Apex Basics', 'Triggers', 'LWC', 'Integration'],
    to: '/developer-path'
  },
  {
    title: 'Architect Path',
    description: 'Design enterprise solutions, master integration patterns, and prepare for Salesforce Architect certifications.',
    icon: '🏛️',
    meta: 'Advanced • 10-16 weeks',
    badges: ['System Design', 'Integration Patterns', 'Data Architecture', 'Governance'],
    to: '/architect-path'
  }
]

const roadmapSteps = [
  { number: 1, label: 'Beginner' },
  { number: 2, label: 'Admin Certified' },
  { number: 3, label: 'Platform Developer' },
  { number: 4, label: 'Architect' }
]

export default function Home() {
  return (
    <>
      <Hero 
        title="Learn Salesforce Step-by-Step\nBeginner to Architect"
        subtitle="Master Salesforce through structured learning paths. From admin basics to architect certification — all free, all static."
        ctaLinks={[
          { to: '/admin-path', label: 'Start Admin Path', primary: true },
          { to: '/clouds', label: 'Explore Clouds', primary: false },
        ]}
      />

      {/* Learning Paths Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choose Your Learning Path</h2>
            <p className="section-subtitle">Structured tracks designed to take you from zero to certified Salesforce professional.</p>
          </div>
          <div className="cards-grid">
            {learningPaths.map((path, i) => (
              <LearningPathCard key={i} {...path} />
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="roadmap">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Your Salesforce Journey</h2>
            <p className="section-subtitle">A visual roadmap showing the path from beginner to certified architect.</p>
          </div>
          <div className="roadmap-steps">
            {roadmapSteps.map((step, i) => (
              <div key={i} className="roadmap-step">
                <span className="roadmap-step-number">{step.number}</span>
                <span>{step.label}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/roadmap.html" className="btn btn-primary">View Full Roadmap</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why ForceLearn?</h2>
          </div>
          <div className="cards-grid">
            <div className="path-card">
              <h3 className="path-card-title">100% Free</h3>
              <p className="card-desc">No hidden costs. No subscriptions. Learn Salesforce at your own pace without any payments.</p>
            </div>
            <div className="path-card">
              <h3 className="path-card-title">Structured Learning</h3>
              <p className="card-desc">Follow our proven curriculum designed to take you from beginner to certified professional.</p>
            </div>
            <div className="path-card">
              <h3 className="path-card-title">Real-World Examples</h3>
              <p className="card-desc">Practice with real-world scenarios and projects that prepare you for actual job responsibilities.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}