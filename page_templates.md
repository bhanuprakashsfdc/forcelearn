# ForceLearn Page Templates

## Template Structure

### 1. Base Layout (MainLayout)

```jsx
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function MainLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
```

### 2. Path Page Layout

```jsx
import MainLayout from '../../layouts/MainLayout'
import Sidebar from '../../components/layout/Sidebar'
import ModuleList from '../../components/content/ModuleList'

export default function PathPage({ pathData, modules }) {
  return (
    <MainLayout>
      <div className="path-page">
        <aside className="sidebar">
          <Sidebar modules={modules} />
        </aside>
        <section className="path-content">
          <header className="path-header">
            <h1>{pathData.title}</h1>
            <p>{pathData.description}</p>
          </header>
          <ModuleList modules={modules} />
        </section>
      </div>
    </MainLayout>
  )
}
```

### 3. Lesson Page Layout

```jsx
import MainLayout from '../../layouts/MainLayout'
import Sidebar from '../../components/layout/Sidebar'
import Breadcrumb from '../../components/content/Breadcrumb'
import LessonContent from '../../components/content/LessonContent'
import CodeBlock from '../../components/content/CodeBlock'

export default function LessonPage({ lesson }) {
  return (
    <MainLayout>
      <div className="lesson-page">
        <aside className="sidebar">
          <Sidebar modules={lesson.modules} currentSlug={lesson.slug} />
        </aside>
        <article className="lesson-content">
          <Breadcrumb items={lesson.breadcrumb} />
          <LessonContent content={lesson.content} />
          {lesson.codeExamples && (
            <div className="code-examples">
              {lesson.codeExamples.map(code => (
                <CodeBlock key={code.id} {...code} />
              ))}
            </div>
          )}
          <nav className="lesson-nav">
            <a href={lesson.prevLesson} className="btn">Previous</a>
            <a href={lesson.nextLesson} className="btn btn-primary">Next</a>
          </nav>
        </article>
      </div>
    </MainLayout>
  )
}
```

---

## MDX Template Integration

### vite.config.js with MDX

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    mdx({
      providerImportSource: '@mdx-js/react'
    }),
    react()
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }
})
```

### MDX Frontmatter

```mdx
---
title: "Apex Triggers Guide"
description: "Complete guide to Apex triggers in Salesforce"
slug: "apex-triggers"
module: "developer"
order: 3
difficulty: "intermediate"
---

export const frontmatter = {}

# Apex Triggers

## Overview
...
```

---

## Layout Code Examples

### Responsive Grid Layout

```css
.path-page {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

@media (max-width: 1024px) {
  .path-page {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    display: none;
  }
}
```

### Sidebar Component

```jsx
export default function Sidebar({ modules, currentSlug }) {
  return (
    <nav className="sidebar-nav">
      {modules.map(module => (
        <div key={module.id} className="module-section">
          <h3 className="module-title">{module.title}</h3>
          <ul className="lesson-list">
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                <a 
                  href={`/${module.path}/${lesson.slug}`}
                  className={lesson.slug === currentSlug ? 'active' : ''}
                >
                  {lesson.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
```

---

## Navigation Implementation

### Header with Mobile

```jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/admin-path', label: 'Admin Path' },
    { to: '/developer-path', label: 'Developer Path' },
    { to: '/architect-path', label: 'Architect Path' },
    { to: '/clouds', label: 'Clouds' }
  ]
  
  return (
    <header className="header">
      <Link to="/" className="logo">ForceLearn</Link>
      
      <nav className="desktop-nav">
        {navLinks.map(link => (
          <Link key={link.to} to={link.to}>{link.label}</Link>
        ))}
      </nav>
      
      <button 
        className="mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </button>
      
      {mobileOpen && (
        <nav className="mobile-nav">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
```

---

## Static Export Configuration

### Build for Static Hosting

```javascript
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 3000
  }
})
```

### Netlify Configuration (netlify.toml)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel Configuration (vercel.json)

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

Last Updated: 2026-04-07