const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://forcelearn.com';

const routes = [
  '/',
  '/admin-path.html',
  '/admin-path/crm-concepts.html',
  '/admin-path/navigation-setup.html',
  '/admin-path/standard-objects.html',
  '/admin-path/custom-objects.html',
  '/admin-path/field-types.html',
  '/admin-path/relationships.html',
  '/admin-path/import-export.html',
  '/admin-path/data-loader.html',
  '/admin-path/validation-rules.html',
  '/admin-path/flow-builder.html',
  '/admin-path/process-builder.html',
  '/admin-path/approval-processes.html',
  '/admin-path/sharing-settings.html',
  '/admin-path/profiles-permissions.html',
  '/admin-path/field-level-security.html',
  '/admin-path/report-types.html',
  '/admin-path/dashboards.html',
  '/admin-path/analytics.html',
  '/developer-path.html',
  '/developer-path/apex-introduction.html',
  '/developer-path/data-types.html',
  '/developer-path/classes-methods.html',
  '/developer-path/collections.html',
  '/developer-path/soql-basics.html',
  '/developer-path/relationship-queries.html',
  '/developer-path/sosl-search.html',
  '/developer-path/trigger-basics.html',
  '/developer-path/context-variables.html',
  '/developer-path/trigger-best-practices.html',
  '/developer-path/lwc-overview.html',
  '/developer-path/html-templates.html',
  '/developer-path/js-controller.html',
  '/developer-path/wire-service.html',
  '/developer-path/rest-api.html',
  '/developer-path/oauth.html',
  '/developer-path/webhooks.html',
  '/architect-path.html',
  '/architect-path/architecture-overview.html',
  '/architect-path/domain-modeling.html',
  '/architect-path/design-patterns.html',
  '/architect-path/schema-design.html',
  '/architect-path/storage-optimization.html',
  '/architect-path/big-objects.html',
  '/architect-path/mulesoft-basics.html',
  '/architect-path/api-design.html',
  '/architect-path/event-driven.html',
  '/architect-path/identity-management.html',
  '/architect-path/sso-implementation.html',
  '/architect-path/data-protection.html',
  '/clouds.html',
  '/blogs.html',
  '/blogs/getting-started-salesforce.html',
  '/blogs/apex-best-practices.html',
  '/blogs/salesforce-security-guide.html',
  '/blogs/lwc-tutorial.html',
  '/blogs/certification-guide.html',
  '/projects.html',
  '/roadmap.html',
  '/privacy-policy.html',
  '/terms-of-service.html',
  '/contact.html',
  '/about.html',
  '/what-is-owd-in-salesforce.html',
  '/what-is-sharing-rules-in-salesforce.html',
  '/lookup-relationship-in-salesforce.html',
  '/master-detail-relationship-in-salesforce.html',
  '/self-relationship-in-salesforce.html',
  '/junction-relationship-in-salesforce.html',
  '/dependent-picklist-in-salesforce.html',
  '/what-is-reports-in-salesforce.html',
  '/what-is-dashboards-in-salesforce.html',
  '/what-is-dynamic-dashboard-in-salesforce.html',
  '/what-is-bucketing-reports-in-salesforce.html',
  '/what-is-workflows-salesforce.html',
  '/what-is-process-builder-salesforce.html',
  '/what-is-email-alerts-in-salesforce.html',
  '/what-is-record-types-salesforce.html',
  '/what-is-validation-rules-salesforce.html',
  '/what-is-field-level-security-salesforce.html',
  '/what-is-compact-layout-salesforce.html',
  '/what-is-search-layouts-salesforce.html',
  '/how-to-create-tabs-salesforce.html',
  '/what-is-dynamic-forms-in-salesforce.html',
  '/what-is-custom-links-salesforce.html',
  '/what-is-task-in-salesforce.html',
  '/what-is-event-salesforce.html',
  '/what-is-bucketing-reports-in-salesforce.html',
  '/lightning-email-templates-salesforce.html',
  '/mail-merge-templates-salesforce.html',
  '/what-is-storage-usage-salesforce.html',
  '/what-is-scoping-rules-salesforce.html',
  '/what-is-lookup-filters-salesforce.html',
  '/what-is-custom-buttons-salesforce.html',
  '/what-is-field-tracking-history-salesforce.html',
  '/how-to-track-login-history-salesforce.html',
  '/what-is-who-id-salesforce.html',
  '/what-is-what-id-salesforce.html',
  '/difference-between-freeze-deactivate-salesforce.html',
  '/salesforce-dx-commands-list.html',
  '/how-to-reset-security-token-salesforce.html',
  '/salesforce-integration-interview-questions.html',
  '/lightning-bundle-in-salesforce-lightning.html',
  '/how-to-install-salesforce-dx.html',
  '/salesforce-lightning-interview-questions.html',
  '/force-com-logins-chrome-extension.html',
  '/salesforce-simplified-chrome-extension.html',
];

const PRIORITY = {
  high: '1.0',
  medium: '0.8',
  low: '0.5',
};

const changefreq = (url) => {
  if (url === '/') return 'daily';
  if (url.includes('-path.html')) return 'weekly';
  return 'weekly';
};

const priority = (url) => {
  if (url === '/') return PRIORITY.high;
  if (url.includes('-path.html')) return PRIORITY.medium;
  return PRIORITY.low;
};

const today = new Date().toISOString().split('T')[0];

const urlEntries = routes.map((loc) => `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq(loc)}</changefreq>
    <priority>${priority(loc)}</priority>
  </url>`).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('sitemap.xml generated with', routes.length, 'URLs');