import { Helmet } from 'react-helmet'

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | ForceLearn</title>
        <meta name="description" content="Terms of Service - ForceLearn free Salesforce learning platform" />
      </Helmet>
      <div className="content-wrapper">
        <h1>Terms of Service</h1>
        <p>Last updated: April 2026</p>
        
        <h2>Acceptance of Terms</h2>
        <p>By accessing and using ForceLearn, you agree to be bound by these Terms of Service.</p>
        
        <h2>Use License</h2>
        <p>Permission is granted to use this website for personal, non-commercial educational purposes. This is provided "as is" without any warranties.</p>
        
        <h2>Educational Content</h2>
        <p>All content on ForceLearn is for educational purposes only. While we strive to provide accurate information, we make no warranties about the completeness, reliability, or accuracy of this content.</p>
        
        <h2>No Professional Advice</h2>
        <p>The information on this website does not constitute professional advice. Always consult official Salesforce documentation and certified professionals for implementation guidance.</p>
        
        <h2>External Links</h2>
        <p>Our website may contain links to external resources. We have no control over the content of these external sites.</p>
        
        <h2>Disclaimer</h2>
        <p>This website and its content are provided free of charge. We do not accept any responsibility for any loss or damage incurred from using this website.</p>
        
        <h2>Changes to Terms</h2>
        <p>We may modify these terms at any time. Continued use of this website constitutes acceptance of modified terms.</p>
      </div>
    </>
  )
}