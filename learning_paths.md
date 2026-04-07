# ForceLearn Learning Paths
## Aligned with Real Salesforce Certifications

This document defines the learning paths aligned with actual Salesforce certification exams.

---

## Certification Alignment

| Path | Salesforce Certification | Exam Code |
|------|----------------------|-----------|
| Admin | Salesforce Administrator | CRT-101 |
| Admin | Salesforce Advanced Administrator | CRT-211 |
| Developer | Platform Developer I | CRT-202 |
| Developer | Platform Developer II | CRT-402 |
| Architect | Application Architect | CRT-250 |
| Architect | System Architect | CRT-251 |
| Architect | Technical Architect | STR-001 |

---

## Admin Learning Path
### Duration: 6-8 weeks
### Target: Salesforce Administrator Certification

#### Module 1: Salesforce Basics (Week 1)
**Topics:**
- CRM概念とSalesforceの 소개
- プラットフォームNavigaion
- Salesforce Setup
- Lightning Experience基礎

**Real-world Use Cases:**
- 新入社員向けCRMトレーニング
- 初めてSalesforceを導入する中小企业

**Practical Exercises:**
- Salesforceログインと基本操作
- Lightning ExperienceとClassicの違 い

#### Module 2: Objects and Fields (Week 1-2)
**Topics:**
- Standard Objects (Account, Contact, Lead, Opportunity)
- Custom Objects作成
- Field Data Types
- Custom Fields & Relationships
- Schema Builder

**Real-world Use Cases:**
- 自社業態に合せたカスタムオブジェクト設計
- 顧客管理オブジェクトの作成

**Practical Exercises:**
- カスタムオブジェクト「案件 Tracker」作成
- 主従関係・参照関係の設定

#### Module 3: Data Management (Week 2-3)
**Topics:**
- Data Import Wizard
- Data Loader使用方法
- Validation Rules
- Duplicate Rules
- Mass Email機能

**Real-world Use Cases:**
- 既存顾客データのSalesforceへ移 行
- 每月更新データの自動取込

**Practical Exercises:**
- Data Loader用于CSV取込
- メールアドレス書式validation作 成

#### Module 4: Automation (Week 3-4)
**Topics:**
- Flow Builder基礎
- Process Builder
- Workflow Rules
- Approval Processes
- Flow Best Practices

**Real-world Use Cases:**
- リード成約时的自动ステータス更新
- 承認流程的自动化

**Practical Exercises:**
- 新規Lead作成时的メール通知Flow
- 承認流程設定

#### Module 5: Security (Week 4-5)
**Topics:**
- Organization Settings
- Sharing Settings
- Profiles
- Permission Sets
- Field-Level Security
- Role Hierarchy

**Real-world Use Cases:**
- 部署别Access権制限
- 机密情報の保护

**Practical Exercises:**
- 営業 部，仅自部署データ可见
- 机密Fieldの非表示化

#### Module 6: Reporting & Analytics (Week 5-6)
**Topics:**
- Report Types
- Report Builder
- Custom Reports
- Dashboards
- Reporting Snapshots

**Real-world Use Cases:**
- 月次売上一覧 Report
- 案件 Pipeline可視化

**Practical Exercises:**
- 案件 Stage别Report作 成
- 売上目標Dashboard

---

## Developer Learning Path
### Duration: 8-12 weeks
### Target: Platform Developer I & II Certifications

#### Module 1: Apex Fundamentals (Week 1-2)
**Topics:**
- Apex简介与 개발 환경
- 基本Syntax
- Classes & Methods
- Data Types
- Collections (List, Set, Map)

**Real-world Use Cases:**
- カスタム业务逻辑の実装
- バッチ処理

**Code Snippet:**
```apex
public class AccountService {
    public static void updateAccountNames(List<Account> accounts) {
        for(Account acc : accounts) {
            acc.Name = acc.Name + ' - Updated';
        }
        update accounts;
    }
}
```

#### Module 2: SOQL & SOSL (Week 2-3)
**Topics:**
- SOQL基本语法
- SOQL条件与排序
- Relationship Queries
- SOSL搜索语法
- Dynamic SOQL

**Real-world Use Cases:**
- 动态查询
- 全文搜索

**Code Snippet:**
```apex
List<Account> accounts = [SELECT Id, Name, 
    (SELECT Id, Name FROM Contacts) 
    FROM Account WHERE Industry = 'Technology'];
```

#### Module 3: Triggers (Week 3-4)
**Topics:**
- Trigger概述
- Trigger Context Variables
- Trigger最佳实践
- Trigger Handler模式
- Bulk Trigger处理

**Real-world Use Cases:**
- 数据验证
- 自動化业务流程

**Code Snippet:**
```apex
trigger AccountTrigger on Account (before insert, before update) {
    if(Trigger.isBefore) {
        for(Account acc : Trigger.new) {
            if(acc.Name == null || acc.Name == '') {
                acc.addError('Account Name is required');
            }
        }
    }
}
```

#### Module 4: Lightning Web Components (Week 4-6)
**Topics:**
- LWC概述
- Component结构
- JavaScript Controller
- HTML Template
- 属性与事件
- Wire Service
- Apex統合

**Real-world Use Cases:**
- カスタムList View
- 业务数据表示

**Code Snippet:**
```javascript
// accountList.js
import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AccountList extends LightningElement {
    @wire(getAccounts) accounts;
}
```

```html
<!-- accountList.html -->
<template>
    <lightning-card title="Accounts" icon-name="standard:account">
        <template if:true={accounts.data}>
            <template for:each={accounts.data} for:item="acc">
                <p key={acc.Id}>{acc.Name}</p>
            </template>
        </template>
    </lightning-card>
</template>
```

#### Module 5: Integration (Week 6-8)
**Topics:**
- REST API基础
- OAuth 2.0认证
- Connected App
- Webhooks
- Platform Events
- MuleSoft基本

**Real-world Use Cases:**
- 外部システム連携
- リアルタイム通知

**Code Snippet:**
```apex
Http http = new Http();
HttpRequest request = new HttpRequest();
request.setEndpoint('https://api.example.com/data');
request.setMethod('GET');
request.setHeader('Authorization', 'Bearer ' + token);
HttpResponse response = http.send(request);
```

#### Module 6: Testing & Debugging (Week 8-10)
**Topics:**
- Apex测试
- @IsTest注釈
- Test Data Factory
- System.assert
- Debug logs
- Stack Trace

**Real-world Use Cases:**
- テスト覆盖率向上
- 不良防止

**Code Snippet:**
```apex
@IsTest
static void testUpdateAccount() {
    Account acc = new Account(Name='Test Account');
    insert acc;
    
    acc.Name = 'Updated Name';
    update acc;
    
    Account result = [SELECT Name FROM Account WHERE Id = :acc.Id];
    System.assertEquals('Updated Name', result.Name);
}
```

---

## Architect Learning Path
### Duration: 10-16 weeks
### Target: Application & System Architect Certifications

#### Module 1: System Design (Week 1-2)
**Topics:**
- Domain Modeling
- Transaction Security
- Architecture Patterns
- Multi-org Strategy
- Release Management

**Real-world Use Cases:**
- 大企业Salesforce设计
- マルチナント対応

**Patterns:**
- Unit of Work
- Selector Pattern
- Service Layer

#### Module 2: Data Architecture (Week 2-4)
**Topics:**
- Schema设计原则
- Storage Optimization
- Big Object使用
- External Objects
- Data Archiving

**Real-world Use Cases:**
- 大量データ处理
- 外部DB連携

#### Module 3: Integration Patterns (Week 4-6)
**Topics:**
- MuleSoft基本
- API Design
- Event-Driven Architecture
- CDC & Platform Events
- Integration Best Practices

**Real-world Use Cases:**
- ERP連携
- ��部サービス连接

#### Module 4: Security Architecture (Week 6-8)
**Topics:**
- Identity Management
- SSO実装
- MFA架构
- Data Encryption
- IP White Listing
- Security Review

**Real-world Use Cases:**
- 企业级身份认证
- コンプライアンス対応

#### Module 5: Performance & Scalability (Week 8-10)
**Topics:**
- Performance Best Practices
- Caching Strategy
- Async Processing
- Skinny Tables
- Query Optimization

---

## Project-Based Learning

Each path includes hands-on projects:

### Admin Projects
1. **End-to-End Sales Process Setup**
   - Lead → Opportunity → Closed
   - Automation included

2. **Service Case Management**
   - Case object setup
   - Entitlements配置

### Developer Projects
1. **Custom Lead Management App**
   - LWC frontend
   - Apex backend

2. **Quote Management System**
   - Product pricing
   - PDF generation

### Architect Projects
1. **Enterprise Data Model Design**
   - Multi-org schema
   - Integration ready

2. **Security & Compliance Implementation**
   - SSO + MFA
   - Audit trail

---

Last Updated: 2026-04-07