import { useState } from 'react'

export default function CodeBlock({ code = '', language = 'apex', showLineNumbers = false }) {
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const lines = code.split('\n')

  const languageLabel = {
    apex: 'Apex',
    javascript: 'JavaScript',
    html: 'HTML',
    css: 'CSS',
    json: 'JSON',
    soql: 'SOQL',
  }[language] || language.toUpperCase()

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="code-language">{languageLabel}</span>
        <button 
          className="code-copy-btn"
          onClick={copyCode}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="code-content">
        {showLineNumbers ? (
          <code>
            {lines.map((line, i) => (
              <span key={i}>
                <span className="line-number">{i + 1}</span>
                {line}
                {'\n'}
              </span>
            ))}
          </code>
        ) : (
          <code>{code}</code>
        )}
      </pre>
    </div>
  )
}