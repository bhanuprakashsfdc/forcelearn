# ForceLearn Design System

Based on Droppable.app's aesthetic — a warm, clean Mac app-inspired design with subtle depth and friendly, approachable feel.

## 1. Visual Theme & Atmosphere

A warm, friendly design for Salesforce learning — inspired by Droppable's Mac-native aesthetic. Soft stone/cream tones with a warm coral accent, creating an approachable educational experience. The mood is clean, modern, and inviting — not clinical or corporate.

**Key Characteristics:**
- Questrial font (from Droppable) for a friendly, modern feel
- Warm coral accent (`#FF6B4A`) as the brand color — friendly and inviting
- Stone/warm gray color palette instead of cold grays
- Subtle depth through borders and minimal shadows
- Ultra-round corners: 12px for containers, 16px for cards, 9999px for buttons
- 8px base spacing system with generous section padding (48px–96px)

## 2. Color Palette & Roles

### Primary
- **Warm Black** (`#1A1A1A`): Primary text, headings
- **Soft Black** (`#2D2D2D`): Secondary headings
- **Pure White** (`#FFFFFF`): Page background, card surfaces
- **Warm Coral** (`#FF6B4A`): Brand accent — CTAs, links, focus rings

### Secondary Accents
- **Coral Light** (`#FFE8E3`): Tinted coral surface for badges, hover states
- **Coral Deep** (`#E85A3D`): Darker coral for hover states
- **Success Green** (`#34C759`): Completion states, success messages
- **Warning Amber** (`#FF9500`): Warning states
- **Error Red** (`#FF3B30`): Error states

### Neutral Scale (Warm Stones)
- **Stone 900** (`#1A1A1A`): Primary heading text
- **Stone 800** (`#2D2D2D`): Secondary headings
- **Stone 700** (`#48484A`): Body text
- **Stone 500** (`#8E8E93`): Tertiary text, muted labels
- **Stone 400** (`#AEAEB2`): Placeholder text
- **Stone 300** (`#D1D1D6`): Borders, dividers
- **Stone 200** (`#E5E5EA`): Card borders
- **Stone 100** (`#F2F2F7`): Subtle surface backgrounds
- **Stone 50** (`#FAFAFA`): Near-white surface tint

### Interactive
- **Link Default** (`#1A1A1A`): Links match text color
- **Link Hover** (`#FF6B4A`): Warm Coral on hover
- **Focus Ring** (`#FF6B4A`): Coral focus outline

### Surface & Overlay
- **Card Background** (`#FFFFFF`): White cards
- **Border Subtle** (`#E5E5EA`): Stone 200 borders
- **Border Medium** (`#D1D1D6`): Stone 300 borders

## 3. Typography Rules

### Font Family
- **Primary**: `Questrial`, fallback: `system-ui, -apple-system, sans-serif`
- **Monospace**: `SF Mono`, fallback: `ui-monospace, SFMono-Regular, monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Display Hero | Questrial | 56px | 400 | 1.1 | -0.5px |
| Section Heading | Questrial | 36px | 400 | 1.2 | -0.3px |
| Sub-heading | Questrial | 24px | 400 | 1.3 | normal |
| Card Title | Questrial | 18px | 500 | 1.4 | normal |
| Body Large | Questrial | 17px | 400 | 1.5 | normal |
| Body | Questrial | 15px | 400 | 1.5 | normal |
| Body Medium | Questrial | 15px | 500 | 1.5 | normal |
| Button | Questrial | 15px | 500 | 1.5 | normal |
| Link | Questrial | 14px | 500 | 1.5 | normal |
| Caption | Questrial | 13px | 400 | 1.5 | normal |
| Label | Questrial | 12px | 500 | 1.5 | 0.5px |

## 4. Component Stylings

### Buttons

**Primary (Full-round)**
- Background: `#FF6B4A` (Warm Coral)
- Text: `#FFFFFF`
- Padding: 12px 24px
- Radius: 9999px (full pill)
- Font: Questrial 15px weight 500
- Hover: background shifts to `#E85A3D`

**Secondary (Full-round)**
- Background: `#FFFFFF`
- Text: `#1A1A1A`
- Padding: 12px 24px
- Radius: 9999px
- Border: `1px solid #E5E5EA`
- Hover: background shifts to `#F2F2F7`

**Ghost / Text**
- Background: transparent
- Text: `#1A1A1A`
- Padding: 8px 16px
- No border

### Cards

**Standard Card**
- Background: `#FFFFFF`
- Border: `1px solid #E5E5EA`
- Radius: 16px
- Padding: 24px
- Hover: border darkens to `#D1D1D6`, subtle shadow

**Featured Card**
- Background: `#FFFFFF`
- Border: `1px solid #E5E5EA`
- Radius: 20px
- Padding: 32px

### Navigation
- Sticky header with subtle backdrop blur
- Questrial 14–15px weight 500 links
- Hover: color shifts to `#FF6B4A`
- Mobile: hamburger menu at 768px

### Input Fields
- Background: `#FFFFFF`
- Border: `1px solid #E5E5EA`
- Radius: 12px
- Padding: 12px 16px
- Focus: border color `#FF6B4A`, subtle shadow

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- Section padding: 64px–96px vertical
- Card padding: 24px–32px
- Max content width: ~1200px

### Border Radius Scale
- 8px: Small elements, tags
- 12px: Input fields, small cards
- 16px: Standard cards, containers
- 20px: Featured cards, larger containers
- 9999px: Buttons, badges, pills

## 6. Dark Mode

- Background: `#1A1A1A`
- Surface: `#2D2D2D`
- Text Primary: `#FFFFFF`
- Text Secondary: `#AEAEB2`
- Brand Coral: `#FF6B4A` (unchanged)
- Border: `#48484A`

## 7. Responsive Behavior

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, stacked layout, hamburger nav |
| Tablet | 768–1024px | Two-column grids |
| Desktop | >1024px | Full layout, 3-column grids |

## 8. Design Application

### Color Tokens (CSS Variables)
```css
--color-primary: #1A1A1A;
--color-secondary: #2D2D2D;
--color-background: #FFFFFF;
--color-surface: #FAFAFA;
--color-brand: #FF6B4A;
--color-brand-light: #FFE8E3;
--color-brand-deep: #E85A3D;
--color-border: #E5E5EA;
--color-border-medium: #D1D1D6;
--color-text: #1A1A1A;
--color-text-secondary: #48484A;
--color-text-muted: #8E8E93;
--color-success: #34C759;
--color-warning: #FF9500;
--color-error: #FF3B30;
```

### Component Classes
- `.btn-primary`: Coral pill button
- `.btn-secondary`: White pill button with border
- `.btn-ghost`: Text button, no background
- `.card`: Standard card with border
- `.card-featured`: Large card
- `.badge`: Coral or stone badge
- `.nav-link`: Navigation link
- `.input`: Form input field

### Hero Section
- Soft gradient: warm cream to white
- Gentle, approachable headline styling
- Rounded, friendly button shapes

### Visual Elements
- Subtle 1px borders throughout
- Minimal shadows (only on hover)
- Clean white space
- Warm, inviting atmosphere