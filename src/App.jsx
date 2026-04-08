import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import AdminPath from './pages/admin/AdminPath'
import DeveloperPath from './pages/developer/DeveloperPath'
import ArchitectPath from './pages/architect/ArchitectPath'
import Clouds from './pages/Clouds'
import Blogs from './pages/Blogs'
import Projects from './pages/Projects'
import Roadmap from './pages/Roadmap'
import CRMConcepts from './pages/admin/CRMConcepts'
import NavigationSetup from './pages/admin/NavigationSetup'
import StandardObjects from './pages/admin/StandardObjects'
import CustomObjects from './pages/admin/CustomObjects'
import FieldTypes from './pages/admin/FieldTypes'
import Relationships from './pages/admin/Relationships'
import ImportExport from './pages/admin/ImportExport'
import DataLoader from './pages/admin/DataLoader'
import ValidationRules from './pages/admin/ValidationRules'
import FlowBuilder from './pages/admin/FlowBuilder'
import ProcessBuilder from './pages/admin/ProcessBuilder'
import ApprovalProcesses from './pages/admin/ApprovalProcesses'
import SharingSettings from './pages/admin/SharingSettings'
import ProfilesPermissions from './pages/admin/ProfilesPermissions'
import FieldLevelSecurity from './pages/admin/FieldLevelSecurity'
import ReportTypes from './pages/admin/ReportTypes'
import Dashboards from './pages/admin/Dashboards'
import Analytics from './pages/admin/Analytics'
import ApexIntroduction from './pages/developer/ApexIntroduction'
import DataTypes from './pages/developer/DataTypes'
import ClassesMethods from './pages/developer/ClassesMethods'
import Collections from './pages/developer/Collections'
import SOQLBasics from './pages/developer/SOQLBasics'
import RelationshipQueries from './pages/developer/RelationshipQueries'
import SOSLSearch from './pages/developer/SOSLSearch'
import TriggerBasics from './pages/developer/TriggerBasics'
import TriggerContextVariables from './pages/developer/TriggerContextVariables'
import TriggerBestPractices from './pages/developer/TriggerBestPractices'
import LWCOverview from './pages/developer/LWCOverview'
import HTMLTemplates from './pages/developer/HTMLTemplates'
import JSController from './pages/developer/JSController'
import WireService from './pages/developer/WireService'
import RESTAPI from './pages/developer/RESTAPI'
import OAuth from './pages/developer/OAuth'
import Webhooks from './pages/developer/Webhooks'
import ArchitectureOverview from './pages/architect/ArchitectureOverview'
import DomainModeling from './pages/architect/DomainModeling'
import DesignPatterns from './pages/architect/DesignPatterns'
import SchemaDesign from './pages/architect/SchemaDesign'
import StorageOptimization from './pages/architect/StorageOptimization'
import BigObjects from './pages/architect/BigObjects'
import MuleSoftBasics from './pages/architect/MuleSoftBasics'
import APIDesign from './pages/architect/APIDesign'
import EventDriven from './pages/architect/EventDriven'
import IdentityManagement from './pages/architect/IdentityManagement'
import SSOImplementation from './pages/architect/SSOImplementation'
import DataProtection from './pages/architect/DataProtection'
import GettingStartedSalesforce from './pages/blog/GettingStartedSalesforce'
import ApexBestPractices from './pages/blog/ApexBestPractices'
import SalesforceSecurityGuide from './pages/blog/SalesforceSecurityGuide'
import LWCTutorial from './pages/blog/LWCTutorial'
import CertificationGuide from './pages/blog/CertificationGuide'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin-path.html" element={<AdminPath />} />
            <Route path="/admin-path/crm-concepts.html" element={<CRMConcepts />} />
            <Route path="/admin-path/navigation-setup.html" element={<NavigationSetup />} />
            <Route path="/admin-path/standard-objects.html" element={<StandardObjects />} />
            <Route path="/admin-path/custom-objects.html" element={<CustomObjects />} />
            <Route path="/admin-path/field-types.html" element={<FieldTypes />} />
            <Route path="/admin-path/relationships.html" element={<Relationships />} />
            <Route path="/admin-path/import-export.html" element={<ImportExport />} />
            <Route path="/admin-path/data-loader.html" element={<DataLoader />} />
            <Route path="/admin-path/validation-rules.html" element={<ValidationRules />} />
            <Route path="/admin-path/flow-builder.html" element={<FlowBuilder />} />
            <Route path="/admin-path/process-builder.html" element={<ProcessBuilder />} />
            <Route path="/admin-path/approval-processes.html" element={<ApprovalProcesses />} />
            <Route path="/admin-path/sharing-settings.html" element={<SharingSettings />} />
            <Route path="/admin-path/profiles-permissions.html" element={<ProfilesPermissions />} />
            <Route path="/admin-path/field-level-security.html" element={<FieldLevelSecurity />} />
            <Route path="/admin-path/report-types.html" element={<ReportTypes />} />
            <Route path="/admin-path/dashboards.html" element={<Dashboards />} />
            <Route path="/admin-path/analytics.html" element={<Analytics />} />
            <Route path="/developer-path.html" element={<DeveloperPath />} />
            <Route path="/developer-path/apex-introduction.html" element={<ApexIntroduction />} />
            <Route path="/developer-path/data-types.html" element={<DataTypes />} />
            <Route path="/developer-path/classes-methods.html" element={<ClassesMethods />} />
            <Route path="/developer-path/collections.html" element={<Collections />} />
            <Route path="/developer-path/soql-basics.html" element={<SOQLBasics />} />
            <Route path="/developer-path/relationship-queries.html" element={<RelationshipQueries />} />
            <Route path="/developer-path/sosl-search.html" element={<SOSLSearch />} />
            <Route path="/developer-path/trigger-basics.html" element={<TriggerBasics />} />
            <Route path="/developer-path/context-variables.html" element={<TriggerContextVariables />} />
            <Route path="/developer-path/trigger-best-practices.html" element={<TriggerBestPractices />} />
            <Route path="/developer-path/lwc-overview.html" element={<LWCOverview />} />
            <Route path="/developer-path/html-templates.html" element={<HTMLTemplates />} />
            <Route path="/developer-path/js-controller.html" element={<JSController />} />
            <Route path="/developer-path/wire-service.html" element={<WireService />} />
            <Route path="/developer-path/rest-api.html" element={<RESTAPI />} />
            <Route path="/developer-path/oauth.html" element={<OAuth />} />
            <Route path="/developer-path/webhooks.html" element={<Webhooks />} />
            <Route path="/architect-path.html" element={<ArchitectPath />} />
            <Route path="/architect-path/architecture-overview.html" element={<ArchitectureOverview />} />
            <Route path="/architect-path/domain-modeling.html" element={<DomainModeling />} />
            <Route path="/architect-path/design-patterns.html" element={<DesignPatterns />} />
            <Route path="/architect-path/schema-design.html" element={<SchemaDesign />} />
            <Route path="/architect-path/storage-optimization.html" element={<StorageOptimization />} />
            <Route path="/architect-path/big-objects.html" element={<BigObjects />} />
            <Route path="/architect-path/mulesoft-basics.html" element={<MuleSoftBasics />} />
            <Route path="/architect-path/api-design.html" element={<APIDesign />} />
            <Route path="/architect-path/event-driven.html" element={<EventDriven />} />
            <Route path="/architect-path/identity-management.html" element={<IdentityManagement />} />
            <Route path="/architect-path/sso-implementation.html" element={<SSOImplementation />} />
            <Route path="/architect-path/data-protection.html" element={<DataProtection />} />
            <Route path="/blogs/getting-started-salesforce.html" element={<GettingStartedSalesforce />} />
            <Route path="/blogs/apex-best-practices.html" element={<ApexBestPractices />} />
            <Route path="/blogs/salesforce-security-guide.html" element={<SalesforceSecurityGuide />} />
            <Route path="/blogs/lwc-tutorial.html" element={<LWCTutorial />} />
            <Route path="/blogs/certification-guide.html" element={<CertificationGuide />} />
            <Route path="/clouds.html" element={<Clouds />} />
            <Route path="/blogs.html" element={<Blogs />} />
            <Route path="/projects.html" element={<Projects />} />
            <Route path="/roadmap.html" element={<Roadmap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
