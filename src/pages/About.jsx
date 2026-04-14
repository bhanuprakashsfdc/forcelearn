import { Helmet } from 'react-helmet'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About ForceLearn</title>
        <meta name="description" content="About ForceLearn - Free Salesforce learning platform from beginner to architect" />
      </Helmet>
      <div className="content-wrapper">
        <h1>About ForceLearn</h1>
        
        <h2>Our Mission</h2>
        <p>ForceLearn provides free, comprehensive Salesforce education from admin basics to architect certification. We believe quality education should be accessible to everyone.</p>
        
        <h2>What We Offer</h2>
        <ul>
          <li>Admin Path - Learn Salesforce administration fundamentals</li>
          <li>Developer Path - Master Apex, LWC, and integrations</li>
          <li>Architect Path - Design enterprise solutions</li>
          <li>Blogs - In-depth tutorials and best practices</li>
        </ul>
        
        <h2>Why Free?</h2>
        <p>We believe in democratizing Salesforce knowledge. No paywalls, no accounts, no advertisements interrupting your learning. The site is supported by the community.</p>
        
        <h2>Who This Is For</h2>
        <ul>
          <li>Career switchers looking to enter Salesforce ecosystem</li>
          <li>Developers learning Salesforce development</li>
          <li>Administrators preparing for certification</li>
          <li>Architects planning solutions</li>
        </ul>
        
        <h2>Technology</h2>
        <p>Built with React + Vite, deployed as static site. Fast, secure, and accessible.</p>
      </div>
    </>
  )
}