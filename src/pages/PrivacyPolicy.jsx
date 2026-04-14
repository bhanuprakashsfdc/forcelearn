import { Helmet } from 'react-helmet'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | ForceLearn</title>
        <meta name="description" content="Privacy Policy - ForceLearn free Salesforce learning platform" />
      </Helmet>
      <div className="content-wrapper">
        <h1>Privacy Policy</h1>
        <p>Last updated: April 2026</p>
        
        <h2>Information We Collect</h2>
        <p>ForceLearn is a free static educational website. We do not collect, store, or process any personal information from our users. The site operates entirely without user accounts, login, or data collection.</p>
        
        <h2>Cookies</h2>
        <p>We do not use cookies or any tracking technologies on this website.</p>
        
        <h2>Third-Party Services</h2>
        <p>This website does not use any third-party analytics or tracking services. All content is served statically without user monitoring.</p>
        
        <h2>Children's Privacy</h2>
        <p>Our website does not knowingly collect personal information from children under 13. This is an educational site for professionals learning Salesforce.</p>
        
        <h2>Changes to Privacy Policy</h2>
        <p>We may update this privacy policy from time to time. Any changes will be posted on this page.</p>
        
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us through the website.</p>
      </div>
    </>
  )
}