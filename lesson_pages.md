# ForceLearn Lesson Content Guide

## Content Structure

Each lesson follows this MDX template:

```mdx
---
title: "Lesson Title"
description: "Brief description for SEO"
slug: "lesson-slug"
path: "/admin-path"
module: 1
order: 1
---

# Lesson Title

## Overview
Brief introduction to the topic.

## Key Concepts
- Concept 1
- Concept 2
- Concept 3

## Step-by-Step Guide

### Step 1: [First Concept]
Explanation of the first concept...

### Step 2: [Second Concept]
Explanation of the second concept...

## Real-World Example

A scenario showing how this applies to real Salesforce work.

## Code Examples

```apex
// Example code for developers
public class ExampleClass {
    public void method() {
        // code here
    }
}
```

## Best Practices

1. Best practice one
2. Best practice two

## Common Mistakes

- Mistake one and how to avoid it

## Next Steps

- Move to next lesson
- Practice exercise

## Quiz

1. Question one?
   - [ ] Answer A
   - [ ] Answer B
   - [ ] Answer C
```

---

## Admin Lessons Content

### Lesson 1.1: What is Salesforce?

**Title:** Introduction to CRM and Salesforce
**Slug:** what-is-salesforce

**Content:**
- What is CRM (Customer Relationship Management)
- Salesforce as a cloud platform
- Salesforce editions (Professional, Enterprise, Unlimited, etc.)
- Lightning Experience vs Classic

**Real-world:** A small business implementing CRM to track customers

**Quiz:**
- What does CRM stand for?
- What platform is Salesforce built on?

---

### Lesson 1.2: Navigation & Setup

**Title:** Navigating Salesforce
**Slug:** navigation-setup

**Content:**
- Lightning Experience navigation
- App Launcher
- Setup menu
- Search functionality
- User profile access

---

### Lesson 2.1: Standard Objects

**Title:** Understanding Standard Objects
**slug:** standard-objects

**Content:**
- Accounts (Customer, Partner)
- Contacts
- Leads
- Opportunities
- Cases
- Tasks & Events

**Real-world:** Sales team's account hierarchy

---

### Lesson 2.2: Custom Objects

**Title:** Creating Custom Objects
**slug:** custom-objects

**Content:**
- When to create custom objects
- Object setup in Setup
- Creating the first custom object
- Adding custom fields

**Exercise:** Create "Project" custom object

---

## Developer Lessons Content

### Lesson 1: Apex Fundamentals

**Title:** Getting Started with Apex
**slug:** apex-introduction

**Content:**
- What is Apex
- Developer Console
- Execute Anonymous
- Your first Apex class

**Code Example:**
```apex
public class HelloWorld {
    public String greet() {
        return 'Hello, World!';
    }
}

// Execute in Developer Console
HelloWorld hw = new HelloWorld();
System.debug(hw.greet());
```

---

### Lesson 2: SOQL Basics

**Title:** Querying Data with SOQL
**slug:** soql-basics

**Content:**
- SELECT syntax
- WHERE clauses
- ORDER BY
- LIMIT
- OFFSET

**Code Example:**
```apex
// Get all accounts
List<Account> accounts = [SELECT Name, Industry FROM Account];

// Get specific account
Account acc = [SELECT Id, Name FROM Account WHERE Name = 'Acme'][0];

// With conditions
List<Contact> contacts = [SELECT Name, Email FROM Contact 
    WHERE Account.Industry = 'Technology' 
    ORDER BY Name 
    LIMIT 10];
```

---

### Lesson 3: Triggers

**Title:** Understanding Triggers
**slug:** triggers-introduction

**Content:**
- Trigger syntax
- Before vs After
- Trigger context variables
- Bulk triggers

**Code Example:**
```apex
trigger AccountTrigger on Account (before insert, before update) {
    for(Account acc : Trigger.new) {
        // Set default values
        if(acc.Site == null) {
            acc.Site = 'Corporate';
        }
    }
}
```

---

### Lesson 4: LWC Basics

**Title:** Introduction to Lightning Web Components
**slug:** lwc-introduction

**Content:**
- Component structure
- HTML template
- JavaScript file
- Meta XML

**File Structure:**
```
myComponent/
├── myComponent.html
├── myComponent.js
├── myComponent.css
└── myComponent.js-meta.xml
```

**Code Example:**
```javascript
// myComponent.js
import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    greeting = 'Hello World';
}
```

```html
<!-- myComponent.html -->
<template>
    <lightning-card title="My Card">
        <p>{greeting}</p>
    </lightning-card>
</template>
```

---

## Architect Lessons Content

### Lesson 1: Domain Modeling

**Title:** Enterprise Domain Modeling
**slug:** domain-modeling

**Content:**
- Core entities in Salesforce
- How to model complex business domains
- Separating concerns
- Scalable schema design

**Pattern:** Account-Contact-Opportunity relationship patterns

---

### Lesson 2: Security Architecture

**title:** Enterprise Security Design
**slug:** security-architecture

**Content:**
- Multi-layer security
- Sharing models
- Role hierarchy design
- Permission set groups
- Identity & SSO

---

## Content Writing Guidelines

### Beginner-Friendly Language
- Always explain in simple terms
- Use analogies
- Provide concrete examples
- Step-by-step instructions

### Code Quality
- Working, tested code only
- Follow Salesforce best practices
- Include comments
- Proper formatting

### SEO Requirements
- Unique title per page
- Meta description
- Internal links
- Proper heading structure
- Keywords naturally placed

---

Last Updated: 2026-04-07