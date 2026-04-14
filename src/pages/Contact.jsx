import { Helmet } from 'react-helmet'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | ForceLearn</title>
        <meta name="description" content="Contact ForceLearn - Free Salesforce learning platform" />
      </Helmet>
      <div className="content-wrapper">
        <h1>Contact Us</h1>
        
        <h2>About ForceLearn</h2>
        <p>ForceLearn is a free, static educational website designed to help people learn Salesforce from beginner to architect level. No login required, no accounts, completely free.</p>
        
        <h2>Get in Touch</h2>
        <p>We welcome feedback, suggestions, and corrections. While we cannot guarantee individual responses, we value community input.</p>
        
        <h2>Contribute</h2>
        <p>ForceLearn is an open-source project. Contributions are welcome!</p>
        <ul>
          <li>GitHub: <a href="https://github.com/bhanuprakashsfdc/forcelearn" target="_blank" rel="noopener noreferrer">github.com/bhanuprakashsfdc/forcelearn</a></li>
        </ul>
        
        <h2>Report Issues</h2>
        <p>If you find errors or have suggestions, please open an issue on GitHub.</p>
        
        <h2>Disclaimer</h2>
        <p>This website is maintained by volunteers. Response times may vary.</p>
      </div>
    </>
  )
}