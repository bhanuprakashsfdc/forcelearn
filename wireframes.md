# ForceLearn Wireframes

## Homepage Layout

### Desktop (1200px+)
```
┌─────────────────────────────────────────────────────────────────┐
│ LOGO     Nav: Home | Admin | Developer | Architect | Clouds     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              HERO SECTION                                       │
│     ┌─────────────────────────────────────────────────┐        │
│     │                                                 │        │
│     │   Learn Salesforce Step-by-Step                │        │
│     │     Beginner → Architect                      │        │
│     │                                                 │        │
│     │   [Start Admin Path]  [Explore Clouds]        │        │
│     │                                                 │        │
│     └─────────────────────────────────────────────────┘        │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│          LEARNING PATHS CARDS                                     │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│   │  ADMIN  │  │ DEVELOPER│  │ ARCHITECT│                   │
│   │   Path  │  │   Path   │  │   Path   │                   │
│   │ 6-8 wks │  │ 8-12 wks │  │10-16 wks │                   │
│   └──────────┘  └──────────┘  └──────────┘                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│          ROADMAP VISUALIZATION                                    │
│   Beginner → Admin → Developer → Architect                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Tablet (768px-1199px)
- 2-column grid for path cards
- Stacked navigation menu (hamburger)
- Reduced padding

### Mobile (<768px)
- Single column layout
- Full-width cards
- Hidden nav with hamburger menu
- Stack roadmap vertically

---

## Course/Lesson Page Layout

### Desktop
```
┌─────────────────────────────────────────────────────────────────┐
│ LOGO     Nav: Home | Admin | Developer | Architect | Clouds  │
├──────────┬─��────────────────────────────────────────────────┤
│          │                                                  │
│ SIDEBAR  │              MAIN CONTENT                        │
│          │                                                  │
│ 📚 Home │  ◄ Previous          Next ►                      │
│          │  ┌────────────────────────────────────────┐    │
│ Module 1 │  │                                        │    │
│  > Les 1 │  │        LESSON CONTENT                 │    │
│  > Les 2 │  │                                        │    │
│  > Les 3 │  │   Code Examples:                       │    │
│          │  │   ┌────────────────────────────────┐  │    │
│ Module 2 │  │   │ public class Example {          │  │    │
│  > Les 1 │  │   │   public void method() {      │  │    │
│          │  │   └────────────────────────────────┘  │    │
│          │  │                                        │    │
│          │  └────────────────────────────────────────┘    │
│          │                                                  │
│ Progress │  [Mark Complete]   [Practice Exercise]         │
│ ████░░░ │                                                  │
└──────────┴──────────────────────────────────────────────────┘
```

### Mobile
- Collapsible sidebar (drawer)
- Fixed top/bottom navigation
- Code blocks horizontal scroll

---

## Navigation System

### Header
- Logo (left)
- Navigation links (center/right)
- Mobile: hamburger menu (right)

### Breadcrumb
- Home > Admin Path > Module 1 > Lesson 1

### Sidebar (Lesson Pages)
- Collapsible modules
- Current lesson highlight
- Progress indicator

### Footer
- Quick links
- Resource links
- Social icons

---

## Component States

### Buttons
- Default: Primary color (#005FB8)
- Hover: Darker shade
- Active: Pressed state
- Disabled: Gray, no interactions

### Cards
- Default: White bg, subtle shadow
- Hover: Elevated shadow, slight scale
- Active: Border highlight

### Navigation Links
- Default: #333
- Hover: #005FB8
- Active: Bold, underline

---

## Mobile Responsiveness Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile     | <768px | Single column, drawer nav |
| Tablet     | 768-1199px | 2 columns, hamburger nav |
| Desktop    | 1200px+ | Full layout |

---

## Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | #005FB8 | Buttons, links, accents |
| Dark Blue | #003C7A | Hover states |
| Light Blue | #E6F3FC | Backgrounds |
| White | #FFFFFF | Cards, content |
| Dark Gray | #333333 | Body text |
| Light Gray | #F5F5F5 | Section backgrounds |
| Success Green | #04844B | Success states |
| Warning | #FFB75D | Warnings |

---

## Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 | System | 48px | Bold |
| H2 | System | 32px | Bold |
| H3 | System | 24px | Semi |
| Body | System | 16px | Regular |
| Code | Monospace | 14px | Regular |
| Caption | System | 14px | Regular |

---

Last Updated: 2026-04-07