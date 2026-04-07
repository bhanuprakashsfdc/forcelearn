# ForceLearn Project Structure

## Directory Structure

```
forcelearn/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── content/
│   │   │   ├── Hero.jsx
│   │   │   ├── LearningPathCard.jsx
│   │   │   ├── ModuleList.jsx
│   │   │   ├── LessonContent.jsx
│   │   │   ├── CodeBlock.jsx
│   │   │   └── ProgressBar.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       └── Card.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── admin/
│   │   │   ├── AdminPath.jsx
│   │   │   └── lessons/
│   │   │       ├── SalesforceBasics.jsx
│   │   │       └── ObjectsFields.jsx
│   │   ├── developer/
│   │   │   ├── DeveloperPath.jsx
│   │   │   └── lessons/
│   │   │           ├── ApexFundamentals.jsx
│   │   │           └── Triggers.jsx
│   │   └── architect/
│   │       ├── ArchitectPath.jsx
│   │       └── lessons/
│   │           └── SystemDesign.jsx
│   ├── content/
│   │   └── lessons/
│   │       ├── admin/
│   │       ├── developer/
│   │       └── architect/
│   ├── hooks/
│   │   ├── useProgress.js
│   │   └── useNavigation.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── components/
│   ├── utils/
│   │   ├── seo.js
│   │   └── helpers.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Routing Structure

| Route | Component | Description |
|-------|-----------|--------------|
| / | Home.jsx | Homepage with learning paths |
| /admin-path | AdminPath.jsx | Admin learning path |
| /admin-path/:lessonSlug | LessonPage | Dynamic lesson |
| /developer-path | DeveloperPath.jsx | Developer path |
| /developer-path/:lessonSlug | LessonPage | Dynamic lesson |
| /architect-path | ArchitectPath.jsx | Architect path |
| /architect-path/:lessonSlug | LessonPage | Dynamic lesson |
| /clouds | Clouds.jsx | Salesforce clouds overview |

## Reusable Components

### Layout Components
1. **Header.jsx**
   - Sticky navigation
   - Mobile responsive
   - Logo + Nav Links

2. **Footer.jsx**
   - Links, copyright
   - Fixed bottom on short pages

3. **Sidebar.jsx**
   - Collapsible modules
   - Current lesson highlight
   - Progress tracking

### Content Components
1. **LearningPathCard.jsx**
   - Title, badge, description
   - CTA link
   - Hover effects

2. **LessonContent.jsx**
   - MDX rendering
   - Code highlighting
   - Navigation buttons

3. **CodeBlock.jsx**
   - Syntax highlighting
   - Copy button
   - Language label

### UI Components
1. **Button.jsx**
   - Variants: primary, secondary, outline
   - Sizes: sm, md, lg
   - States: default, hover, disabled

2. **Card.jsx**
   - Shadow variants
   - Padding control
   - Click handlers

## Framework Decisions

### Current Stack
- React 19
- React Router 7
- Vite 8 (build for static)

### MDX for Lessons
- @mdx-js/rollup for MDX support
- rehype-slug for heading IDs
- rehype-autolink-headings for anchors

### Static Export Configuration
```javascript
// vite.config.js
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  base: '/'
})
```

### Code Highlighting
- Prism.js or highlight.js
- Custom Salesforce theme

## Performance Optimizations

### Lazy Loading
- Code splitting per route
- Lazy load lesson content
- Dynamic imports

### Asset Optimization
- Image compression
- Font subsetting
- CSS minification

### Caching Strategy
- Cache static assets
- Versioned file names
- Service worker for offline

---

Last Updated: 2026-04-07