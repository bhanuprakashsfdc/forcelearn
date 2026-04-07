# ForceLearn SEO Strategy

## Keyword Strategy

### Primary Keywords

| Page | Primary Keyword | Monthly Search Volume |
|------|---------------|---------------------|
| Homepage | learn salesforce | 1,800 |
| Homepage | salesforce tutorial | 1,200 |
| Admin Path | salesforce admin certification | 720 |
| Admin Path | salesforce admin training | 590 |
| Developer Path | salesforce developer certification | 480 |
| Developer Path | apex programming | 390 |
| Architect Path | salesforce architect certification | 260 |

### Secondary Keywords

| Page | Secondary Keywords |
|------|-------------------|
| Admin Path | salesforce basics, crm tutorial, sales cloud |
| Developer Path | lightning web components, soql, salesforce lwc |
| Architect Path | salesforce architecture, integration patterns |

### Long-Tail Keywords

- "learn salesforce from scratch"
- "salesforce admin tutorial for beginners"
- "how to pass salesforce developer exam"
- "free salesforce training online"

---

## On-Page SEO

### Meta Tags Framework

```html
<head>
  <title>Page Title | ForceLearn</title>
  <meta name="description" content="Description under 160 chars">
  <meta name="keywords" content="keyword1, keyword2">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Description">
  <meta property="og:url" content="https://forcelearn.dev/path">
  <meta property="og:type" content="website">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Page Title">
  
  <!-- Canonical -->
  <link rel="canonical" href="https://forcelearn.dev/path">
</head>
```

### Per-Page Examples

**Homepage:**
```html
<title>Learn Salesforce - Beginner to Architect Path | ForceLearn</title>
<meta name="description" content="Master Salesforce through structured learning paths. From admin basics to architect certification - all free, all static.">
```

**Admin Path:**
```html
<title>Salesforce Admin Learning Path | ForceLearn</title>
<meta name="description" content="Start your Salesforce journey with the Admin path. Learn configuration, objects, automation, and security. Prepare for admin certification.">
```

**Lesson Page:**
```html
<title>Apex Triggers Complete Guide - Salesforce Development | ForceLearn</title>
<meta name="description" content="Learn Apex triggers, trigger contexts, and best practices. Includes code examples and real-world scenarios.">
```

---

## URL Structure

### Current Structure
```
/admin-path/salesforce-basics
/admin-path/objects-and-fields
/developer-path/apex-fundamentals
/developer-path/triggers
/architect-path/system-design
```

### Best Practices Applied
- Hierarchical (path → module → lesson)
- Lowercase only
- Hyphens as separators
- No file extensions
- Descriptive slugs

---

## Internal Linking Strategy

### Navigation Links
- Header: Primary learning paths
- Sidebar: Current path modules
- Footer: Sitemap links

### Content Links
- Within lessons: "Next lesson" / "Previous lesson"
- Cross-links: Admin related → Developer related
- Contextual: "Learn more about X"

### Link Text Best Practices
- Descriptive: "Learn Salesforce triggers"
- Not: "click here" or "learn more"
- Keywords included

---

## JSON-LD Structured Data

### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ForceLearn",
  "url": "https://forcelearn.dev",
  "description": "Free Salesforce learning platform",
  "sameAs": []
}
```

### Course Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Salesforce Admin Path",
  "description": "Learn Salesforce administration fundamentals",
  "provider": {
    "@type": "Organization",
    "name": "ForceLearn"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "P6W"
  }
}
```

### Article Schema (Lessons)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Lesson Title",
  "description": "Lesson description",
  "author": {
    "@type": "Organization",
    "name": "ForceLearn"
  }
}
```

---

## Sitemap

### Dynamic sitemap.xml
Generated from sitemap.json:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://forcelearn.dev/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://forcelearn.dev/admin-path</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

---

## robots.txt
```
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://forcelearn.dev/sitemap.xml
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| Largest Contentful Paint | 2.5s |
| First Input Delay | 100ms |
| Cumulative Layout Shift | 0.1 |
| Time to Interactive | 3s |

---

## Content SEO Checklist

- [ ] Unique title (60 chars max)
- [ ] Meta description (160 chars max)
- [ ] H1 tag present
- [ ] H2 structure logical
- [ ] Internal links (3+ per page)
- [ ] Images with alt text
- [ ] JSON-LD schema
- [ ] Mobile responsive
- [ ] Fast loading

---

Last Updated: 2026-04-07