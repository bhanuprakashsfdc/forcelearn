# ForceLearn Project Roadmap

## Project Vision
A completely static, SEO-optimized Salesforce learning platform taking learners from Beginner → Admin → Developer → Architect with zero dependencies on backend/services.

## Core Principles
- No login/authentication required
- No database/backend
- Fully static site (Static Export)
- SEO optimized from day one
- Progressive learning structure

---

## Phase 1: Foundation (Week 1-2)
### Goals
- [x] Project setup with Vite + React
- [x] Basic routing structure
- [x] Home page with learning paths
- [ ] Complete navigation system
- [ ] Base layout and styling

### Deliverables
- [x] Initial Vite + React setup
- [x] React Router for SPA navigation
- [x] Basic CSS styling
- [ ] Navigation component
- [ ] Footer component

---

## Phase 2: Learning Paths (Week 3-4)
### Goals
- [ ] Admin Path pages (6-8 modules)
- [ ] Developer Path pages (8-10 modules)
- [ ] Architect Path pages (8-10 modules)
- [ ] Cloud-specific content (Sales, Service, Marketing)

### Admin Path Modules
1. Salesforce Basics
   - What is Salesforce?
   - CRM concepts
   - Navigation & Setup
2. Objects & Fields
   - Standard Objects
   - Custom Objects
   - Field Types
3. Data Management
   - Import/Export
   - Data Loader
   - Validation Rules
4. Automation
   - Flow Builder
   - Process Builder
   - Approval Processes
5. Security
   - Sharing Settings
   - Profiles & Permission Sets
   - Field-Level Security
6. Reporting
   - Report Types
   - Dashboards
   - Analytics

### Developer Path Modules
1. Apex Fundamentals
   - Syntax & Basics
   - Classes & Methods
2. SOQL & SOSL
   - Query Builder
   - Search Syntax
3. Triggers
   - Trigger Contexts
   - Best Practices
4. Lightning Web Components
   - Component Basics
   - HTML Templates
   - JavaScript Controllers
5. Integration
   - REST API
   - OAuth
   - Webhooks

### Architect Path Modules
1. System Design
   - Domain Modeling
   - Architecture Patterns
2. Data Architecture
   - Schema Design
   - Storage Optimization
3. Integration Patterns
   - MuleSoft Essentials
   - API Design
4. Security Architecture
   - Identity Management
   - Data Protection

---

## Phase 3: SEO & Performance (Week 5-6)
### Goals
- [ ] Meta tags for all pages
- [ ] Sitemap generation
- [ ] Open Graph tags
- [ ] Performance optimization
- [ ] Lazy loading

### SEO Deliverables
- [ ] Dynamic meta tags per page
- [ ] JSON-LD structured data
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Canonical URLs
- [ ] Performance scores >90

---

## Phase 4: Content Expansion (Week 7-10)
### Goals
- [ ] 50+ lesson pages
- [ ] Code examples for each topic
- [ ] Practice exercises
- [ ] Quiz system (client-side)

### Content Structure
- Admin: 20 lessons
- Developer: 25 lessons  
- Architect: 20 lessons
- Cloud-specific: 15 lessons

---

## Technical Stack

### Current (Vite + React)
- React 19
- React Router DOM 7
- Vite 8
- Static Export via `vite build`

### To Add
- @mdx-js/rollup for MDX content
- rehype plugins for SEO
- Performance optimizations

---

## Priority Order

### P0 (Must Have)
1. Working navigation
2. All learning path pages
3. Mobile responsiveness
4. Basic SEO tags

### P1 (Should Have)
1. MDX content pages
2. Code syntax highlighting
3. Internal linking structure
4. Sitemap

### P2 (Nice to Have)
1. Search functionality
2. Progress tracking (localStorage)
3. Quiz system

---

## Success Metrics
- Lighthouse Performance: >90
- Lighthouse SEO: >95
- Core Web Vitals: Pass
- Build Size: <500KB gzipped
- Time to Interactive: <3s

---

Last Updated: 2026-04-07