const contentModel = {
  packages: [
    {
      id: "A",
      name: "Package A - Basic (Stateless)",
      tagline: "Fast launch with a simple stateless flow",
      bestFor: "Best for one-time campaigns and speed-to-event delivery.",
      priceText: "$300",
      ctaText: "See Package A Details",
      ctaLink: "#comparison",
      bullets: [
        "Core API integration baseline",
        "Manual prompt scope estimation",
        "Cookie session experience"
      ]
    },
    {
      id: "B",
      name: "Package B - Insight (Metadata + Dashboard)",
      tagline: "Track behavior and improve token efficiency",
      bestFor: "Best for teams that need usage visibility and better quality control.",
      priceText: "$500",
      ctaText: "See Package B Details",
      ctaLink: "#comparison",
      bullets: [
        "Basic website + sharing scope",
        "Basic dashboard, database, and hosting",
        "Metadata tracking + QA/QC"
      ]
    },
    {
      id: "C",
      name: "Package C - Platform (Database + Users + Reporting)",
      tagline: "Full product foundation with storage and account flows",
      bestFor: "Best for long-term programs, reporting, and monetization readiness.",
      priceText: "$700",
      ctaText: "See Package C Details",
      ctaLink: "#comparison",
      bullets: [
        "Everything in B plus advanced infrastructure",
        "Full storage, users, and reporting",
        "Advanced support and on-site guidance"
      ]
    }
  ],
  comparisonViews: [
    { id: "features", label: "Features included" },
    { id: "client_gets", label: "What you get" },
    { id: "user_benefits", label: "What your fans get" }
  ],
  rows: [
    {
      viewId: "features",
      rowType: "section",
      title: "AI and Prompt Scope (External to Website Core)"
    },
    {
      viewId: "features",
      rowId: "social-sharing",
      title: "Social Sharing for End-Users",
      detail: {
        definition: "Lets end-users share generated results quickly with friends.",
        build: "Share actions, channel-ready output options, and fast post-generation CTA flows.",
        drivers: "Supported channels, preview behavior, and tracking requirements.",
        impact: "Improves immediate post-generation engagement and organic spread during events.",
        example: "After generation, users can instantly share to social channels without extra manual steps."
      },
      values: { A: "✅", B: "✅", C: "✅" }
    },
    {
      viewId: "features",
      rowId: "ai-api-integration",
      title: "AI API Integration",
      detail: {
        definition: "Connects the landing page to the selected AI provider with request and response handling.",
        build: "Secure pipeline with retries, timeouts, error states, provider key protection, and usage logging hooks.",
        drivers: "Provider complexity, concurrency, safety controls, and response-time targets.",
        impact: "More reliable generation flow and fewer random failures under event traffic.",
        example: "If the provider briefly fails, retry logic recovers the request instead of dropping the user session."
      },
      values: { A: "✅ basic", B: "✅ with usage logging", C: "✅ with monitoring + controls" }
    },
    {
      viewId: "features",
      rowId: "qa-qc-upload",
      title: "QA/QC for Input Resource (Upload Validation)",
      detail: {
        definition: "Checks upload quality before expensive AI calls are sent.",
        build: "Format rules, size and resolution checks, optional subject checks, and actionable user guidance.",
        drivers: "Validation strictness, number of checks, and compute-heavy qualification rules.",
        impact: "Lower token waste and fewer disappointing outputs from bad inputs.",
        example: "A blurry image is rejected with a clear fix tip before any generation cost is incurred."
      },
      values: { A: "Basic checks", B: "Intermediate checks + guidance", C: "Advanced checks + policies + logs" }
    },
    {
      viewId: "features",
      rowId: "api-cost-model",
      title: "API Cost Model (Usage-Based)",
      detail: {
        definition: "AI providers bill per generation based on credits, tokens, or compute.",
        build: "Usage tracking hooks, optional soft and hard limits, and spend visibility per flow.",
        drivers: "Call volume, quality settings, retries, and multi-step generation pipelines.",
        impact: "Budget becomes controllable instead of surprising teams during peak event usage.",
        example: "A campaign can set limits that stop unexpected overspend when traffic spikes."
      },
      values: { A: "◐ manual estimation", B: "✅ tracked", C: "✅ tracked + user and quota controls" }
    },
    {
      viewId: "features",
      rowId: "prompt-template",
      title: "Prompt Engineering Template and Complexity Scope",
      detail: {
        definition: "Prompt engineering includes placeholder design and template complexity decisions (simple, controlled, or multi-step).",
        build: "We scope prompt library design, complexity level, and iteration depth as a manual estimate because needs vary by campaign.",
        drivers: "Category count, complexity level, consistency targets, and review rounds requested by the client.",
        impact: "Clients can choose quality depth intentionally without assuming fixed website-core scope.",
        example: "One project may only need a simple placeholder prompt, while another may need multi-step prompt chains and validation logic."
      },
      values: { A: "◐ manual estimation", B: "◐ manual estimation", C: "◐ manual estimation" }
    },
    {
      viewId: "features",
      rowId: "website-core-ux",
      title: "Website Feature Development (Core UX)",
      detail: {
        definition: "Core website production scope for upload, generation, and output states.",
        build: "Responsive flow, category controls, loading and error states, and output handoff UX.",
        drivers: "Polish depth, interaction states, and browser/device support requirements.",
        impact: "Separates website-core work from prompt-template scope for clearer sales communication.",
        example: "Package B gets basic website flow while Package C extends it with advanced account-aware UX states."
      },
      values: { A: "-", B: "✅ basic", C: "✅ advanced" }
    },
    {
      viewId: "features",
      rowId: "backend-server",
      title: "Backend Server",
      detail: {
        definition: "Server layer protects keys, logs activity, and handles secure workflows.",
        build: "API endpoints, job handling, optional queue, and secret protection patterns.",
        drivers: "Concurrency, queueing requirements, and logging granularity.",
        impact: "Improves security and reliability compared with client-only architecture.",
        example: "Provider keys stay server-side and never leak into browser code."
      },
      values: { A: "-", B: "✅ basic backend", C: "✅ full backend" }
    },
    {
      viewId: "features",
      rowId: "qualification-workflow",
      title: "Qualification Workflow (Multi-step Guidance)",
      detail: {
        definition: "Guided stepper flow helps users submit resources in the right order.",
        build: "Stepper UI, per-step validation, previews, fix tips, and safe final submit behavior.",
        drivers: "Number of steps and branching complexity of each template path.",
        impact: "Improves first-try success rate and reduces support overhead during events.",
        example: "Users fix wrong aspect ratio at step 2 instead of failing after final submit."
      },
      values: { A: "-", B: "◐ optional", C: "✅ included" }
    },
    {
      viewId: "features",
      rowType: "section",
      title: "Data, Dashboard, and Infrastructure"
    },
    {
      viewId: "features",
      rowId: "stateless-resource",
      title: "Cookie Session (Fast Session Layer)",
      detail: {
        definition: "Cookie-backed session keeps the in-flow user experience responsive.",
        build: "Session continuity layer used across all packages for in-journey state handling.",
        drivers: "Session duration policy and browser-state behavior across event devices.",
        impact: "Prevents abrupt session loss during generation steps and keeps UX consistent.",
        example: "Users can move through upload and generation steps without losing immediate in-session state."
      },
      values: { A: "✅", B: "✅", C: "✅" }
    },
    {
      viewId: "features",
      rowId: "hosting-basic",
      title: "Hosting and Deployment (Basic)",
      detail: {
        definition: "Baseline deployment and hosting setup for production operation.",
        build: "Core deployment flow, environment setup, and baseline runtime operations.",
        drivers: "Traffic profile and required operational reliability.",
        impact: "Provides a stable baseline for launch and event-day continuity.",
        example: "Package B includes managed baseline hosting while Package C keeps this baseline as foundation."
      },
      values: { A: "◐ external/client-managed", B: "✅ basic only", C: "✅ basic" }
    },
    {
      viewId: "features",
      rowId: "metadata-only",
      title: "User Resource Management: Metadata Only",
      detail: {
        definition: "Stores event analytics metadata without storing heavy media files.",
        build: "Event schema, tracking records, dashboard metrics, and export basics.",
        drivers: "Tracking schema scope and dashboard/report complexity.",
        impact: "Provides insight at lower storage cost than full media retention.",
        example: "Client can review category popularity by hour without storing every image."
      },
      values: { A: "-", B: "✅", C: "✅" }
    },
    {
      viewId: "features",
      rowId: "database-basic",
      title: "Database Foundation (Basic)",
      detail: {
        definition: "Entry-level database layer for operational records and baseline analytics.",
        build: "Core schema, migration path, and baseline access controls.",
        drivers: "Metadata volume and expected reporting needs.",
        impact: "Gives teams a reliable base without full advanced data architecture.",
        example: "Package B can run daily usage analysis with foundational metadata records."
      },
      values: { A: "-", B: "✅ basic only", C: "✅ basic" }
    },
    {
      viewId: "features",
      rowId: "dashboard-basic",
      title: "Dashboard (Basic)",
      detail: {
        definition: "Operational dashboard with baseline usage and event monitoring visibility.",
        build: "Core charts, key filters, and baseline trend monitoring for event operators.",
        drivers: "Required metrics and basic segmentation scope.",
        impact: "Helps teams monitor events without advanced reporting overhead.",
        example: "Package B operators can monitor top categories and basic success/failure rates."
      },
      values: { A: "-", B: "✅ basic only", C: "✅ basic" }
    },
    {
      viewId: "features",
      rowId: "full-storage",
      title: "User Resource Management: Full Storage (Input + Output)",
      detail: {
        definition: "Stores uploads, generated outputs, and generation parameters for history.",
        build: "Object storage, lifecycle rules, permissions, and record linking to events and users.",
        drivers: "Storage volume, retention duration, and delivery strategy with CDN.",
        impact: "Enables product-like history, re-download, and deeper reporting use cases.",
        example: "Users can return after the event and re-download prior generated images."
      },
      values: { A: "-", B: "-", C: "✅" }
    },
    {
      viewId: "features",
      rowId: "dashboard-advanced",
      title: "Dashboard (Advanced + Reporting)",
      detail: {
        definition: "Advanced analytics and reporting layer for deeper business and stakeholder insight.",
        build: "Advanced segmentation, richer reporting controls, and expanded export/report workflows.",
        drivers: "Reporting depth, stakeholder complexity, and decision cadence.",
        impact: "Enables enterprise-grade visibility and clearer post-event intelligence.",
        example: "Package C can provide detailed report slices for sponsors and leadership reviews."
      },
      values: { A: "-", B: "-", C: "✅ advanced" }
    },
    {
      viewId: "features",
      rowId: "user-management",
      title: "End-User Management (Accounts / Roles)",
      detail: {
        definition: "User authentication and permission model for repeatable product usage.",
        build: "Login flow, profile storage, roles, and account management states.",
        drivers: "Auth provider selection, security requirements, and role complexity.",
        impact: "Supports retention and access control beyond one-time event sessions.",
        example: "Admins can export reports while regular users only manage their own generation history."
      },
      values: { A: "-", B: "-", C: "✅" }
    },
    {
      viewId: "features",
      rowId: "database-advanced",
      title: "Database Expansion (Advanced)",
      detail: {
        definition: "Advanced database layer for richer asset relationships, reporting, and governance.",
        build: "Extended schema strategy, advanced backup and retention controls, and deeper data modeling.",
        drivers: "Data complexity, retention obligations, and advanced reporting requirements.",
        impact: "Supports product-grade historical analysis and stakeholder-level reporting.",
        example: "Package C can correlate user activity, assets, and outcomes across longer timelines."
      },
      values: { A: "-", B: "-", C: "✅ advanced" }
    },
    {
      viewId: "features",
      rowId: "hosting-advanced",
      title: "Hosting and Deployment (Advanced)",
      detail: {
        definition: "Advanced production operations layer for larger scale and stronger resilience.",
        build: "Advanced monitoring depth, stronger scaling posture, and expanded operations controls.",
        drivers: "Peak load complexity, uptime expectations, and operations maturity targets.",
        impact: "Improves confidence for high-stakes event operations and ongoing product usage.",
        example: "Package C supports higher operational complexity with stronger advanced hosting controls."
      },
      values: { A: "-", B: "-", C: "✅ advanced" }
    },
    {
      viewId: "features",
      rowType: "section",
      title: "Support and Documentation"
    },
    {
      viewId: "features",
      rowId: "doc-client-guideline",
      title: "Documentation Guideline for Client Team",
      detail: {
        definition: "Client-facing handbook for ownership, operations, and decision-making.",
        build: "Scope summary, operating notes, and handover references for client stakeholders.",
        drivers: "Depth of operational context and stakeholder onboarding needs.",
        impact: "Improves handoff quality and reduces dependency on ad-hoc explanations.",
        example: "Client team can review package scope and operating boundaries before launch meetings."
      },
      values: { A: "✅", B: "✅", C: "✅" }
    },
    {
      viewId: "features",
      rowId: "doc-end-user-guideline",
      title: "Documentation Guideline for End-Users",
      detail: {
        definition: "End-user usage guide for smooth participation in generation flow.",
        build: "User-facing instructions, expectations, and troubleshooting notes.",
        drivers: "Friction tolerance and event audience profile.",
        impact: "Reduces confusion and improves first-try completion rates.",
        example: "Participants can follow a simple guide before uploading and generating."
      },
      values: { A: "✅", B: "✅", C: "✅" }
    },
    {
      viewId: "features",
      rowId: "video-guideline-end-user",
      title: "Video Guideline Animation for End-Users",
      detail: {
        definition: "Short visual tutorial that explains the generation journey quickly.",
        build: "Animated walkthrough clips and visual cue guidance for common user actions.",
        drivers: "Video length, clarity targets, and production polish expectations.",
        impact: "Improves onboarding speed for large audiences with mixed digital familiarity.",
        example: "A quick animation shows users how to upload, generate, and share in under a minute."
      },
      values: { A: "-", B: "✅", C: "✅" }
    },
    {
      viewId: "features",
      rowId: "onsite-guideline-end-user",
      title: "On-site Step-by-step Guideline for End-Users",
      detail: {
        definition: "Live, guided on-site flow support for participants during the event.",
        build: "Step-by-step guided operations playbook for on-site assistance teams.",
        drivers: "On-site traffic scale and support staffing model.",
        impact: "Ensures high completion quality for premium event experiences.",
        example: "On-site teams can guide users through each step and reduce drop-off in real time."
      },
      values: { A: "-", B: "-", C: "✅" }
    },

    {
      viewId: "client_gets",
      rowId: "clear-pricing",
      title: "Clear pricing structure (API + Template + Website)",
      detail: {
        definition: "A transparent pricing split so clients understand where spend comes from.",
        build: "Price communication mapped to API usage, template complexity, and site build plus ops.",
        drivers: "Higher control depth and higher operating scope increase package cost.",
        impact: "Less confusion in sales conversations and faster stakeholder alignment.",
        example: "Client can see why API variability is separate from one-time template build work."
      },
      values: { A: "✅", B: "✅", C: "✅" }
    },
    {
      viewId: "client_gets",
      rowId: "fast-delivery",
      title: "Fast delivery option (time-to-event)",
      detail: {
        definition: "How quickly each package can go live for an event deadline.",
        build: "A trims backend and storage scope for fast launch; B and C add deeper implementation.",
        drivers: "Backend, dashboard, and account layers increase delivery time and QA cycles.",
        impact: "Helps teams choose speed or capability based on event timeline pressure.",
        example: "Package A can launch quickly for a campaign while C supports longer-term product goals."
      },
      values: { A: "✅", B: "◐", C: "-" }
    },
    {
      viewId: "client_gets",
      rowId: "token-waste-control",
      title: "Reduced token waste (cost control)",
      detail: {
        definition: "Mechanisms that reduce failed or low-value generations.",
        build: "Prompt quality, upload QA/QC, and optional qualification steps before calling the API.",
        drivers: "Validation strictness and guidance quality across different package levels.",
        impact: "Lower wasted spend and better output consistency for clients.",
        example: "B and C reject weak uploads earlier, avoiding expensive failed runs."
      },
      values: { A: "◐", B: "✅", C: "✅ best" }
    },
    {
      viewId: "client_gets",
      rowId: "behavioral-insights",
      title: "Behavioral insights (what users actually do)",
      detail: {
        definition: "Visibility into user behavior and popular generation patterns.",
        build: "Metadata capture, dashboard views, category trends, and event timeline analysis.",
        drivers: "Analytics model depth and dashboard reporting complexity.",
        impact: "Supports optimization decisions and stronger ROI storytelling.",
        example: "Teams can identify peak usage windows and top-performing categories."
      },
      values: { A: "-", B: "✅", C: "✅" }
    },
    {
      viewId: "client_gets",
      rowId: "reporting-future-events",
      title: "Reporting for future events / stakeholders",
      detail: {
        definition: "Post-event reporting capability for sponsors and internal teams.",
        build: "Exportable metrics with optional deeper reporting if full database and storage are available.",
        drivers: "Data retention depth and reporting feature scope.",
        impact: "Helps clients justify budget and improve future event design.",
        example: "C can deliver detailed reports with historical media and user-level analysis."
      },
      values: { A: "-", B: "◐ limited", C: "✅" }
    },
    {
      viewId: "client_gets",
      rowId: "monetization-readiness",
      title: "Future monetization readiness",
      detail: {
        definition: "How ready the architecture is for paid usage and tiered access later.",
        build: "Accounts, quotas, logs, and permissions that can support paywall and subscription flows.",
        drivers: "Auth depth, quota logic, and billing-adjacent controls.",
        impact: "Makes future productization faster and less expensive to add later.",
        example: "C can evolve toward credit packs or premium tiers with minimal re-architecture."
      },
      values: { A: "-", B: "◐", C: "✅" }
    },

    {
      viewId: "user_benefits",
      rowId: "click-upload-generate",
      title: "Click -> Upload -> Generate simplicity",
      detail: {
        definition: "How low-friction the user journey feels from first click to result.",
        build: "Clear step flow, quick feedback states, and minimal cognitive load in UI decisions.",
        drivers: "Number of required steps and account requirements in each package.",
        impact: "Higher completion rates for casual users during busy events.",
        example: "A performs best for lightweight one-session interactions."
      },
      values: { A: "✅ best", B: "✅", C: "◐ more steps when accounts are required" }
    },
    {
      viewId: "user_benefits",
      rowId: "quality-consistency",
      title: "Better output quality consistency",
      detail: {
        definition: "How reliably generated results meet user expectations.",
        build: "Refined prompt templates, placeholder structure, and tested generation paths.",
        drivers: "Prompt maturity and version management depth.",
        impact: "Users trust the experience because outputs feel intentional rather than random.",
        example: "B and C keep style coherence better across categories and traffic conditions."
      },
      values: { A: "◐", B: "✅", C: "✅ best" }
    },
    {
      viewId: "user_benefits",
      rowId: "fewer-upload-failures",
      title: "Fewer wrong-upload failures",
      detail: {
        definition: "How effectively the system prevents avoidable upload mistakes.",
        build: "QA/QC checks plus guided correction messages and optional qualification flow.",
        drivers: "Validation strictness and multi-step guidance level.",
        impact: "Users spend less time retrying and feel more supported.",
        example: "B and C guide users before generation instead of failing late in the flow."
      },
      values: { A: "◐", B: "✅", C: "✅ best" }
    },
    {
      viewId: "user_benefits",
      rowId: "saved-history",
      title: "Saved history and re-download",
      detail: {
        definition: "Ability for users to come back to prior outputs.",
        build: "Storage layer plus account-linked history views and permission-safe retrieval.",
        drivers: "Storage retention, identity model, and asset lifecycle policy.",
        impact: "Supports sharing, repeat visits, and post-event reuse.",
        example: "C users can log in later and re-download previous generations."
      },
      values: { A: "-", B: "-", C: "✅" }
    },
    {
      viewId: "user_benefits",
      rowId: "live-event-experience",
      title: "Live event experience (optional)",
      detail: {
        definition: "Interactive event features such as trending views and optional live walls.",
        build: "Metadata streams with optional public display components and moderation controls.",
        drivers: "Live refresh needs, moderation complexity, and event audience scale.",
        impact: "Creates social momentum and stronger event engagement.",
        example: "B and C can surface trending categories in near real-time during activations."
      },
      values: { A: "-", B: "✅ optional public view", C: "✅" }
    }
  ],
  addons: [
    {
      id: "addon-prompt-pack",
      title: "Prompt Engineering Service Pack",
      priceType: "Service level",
      short: "Prompt strategy and template scope per package level.",
      levels: {
        A: { value: "Starter prompt setup", insight: "Manual prompt scope estimate and event-specific prompt checklist." },
        B: { value: "Managed prompt library", insight: "Structured prompt sets with controlled variants for repeat campaign quality." },
        C: { value: "Advanced prompt program", insight: "Governed prompt versions with deeper orchestration for premium quality consistency." }
      },
      detail: {
        definition: "Defines how deeply prompt operations are structured for each package level.",
        build: "Prompt playbooks, reusable templates, and quality controls aligned to package goals.",
        drivers: "Each level expands structure and governance depth without changing core user flow intent.",
        impact: "Clearer quality expectations and faster alignment during client-facing sales discussions.",
        example: "Teams can explain what prompt support is included at each package level in one table row."
      }
    },
    {
      id: "addon-qa-pack",
      title: "QA/QC Validation Service Pack",
      priceType: "Service level",
      short: "Input validation depth per package level.",
      levels: {
        A: { value: "Core validation", insight: "File format and size checks for smooth first-level quality control." },
        B: { value: "Guided validation", insight: "Validation plus corrective guidance to improve first-pass success." },
        C: { value: "Policy-grade validation", insight: "Advanced rules with stronger policy handling and operational traceability." }
      },
      detail: {
        definition: "Shows how validation quality scales across package levels.",
        build: "Validation rules, user correction guidance, and operational quality controls.",
        drivers: "Higher levels add clarity and governance rather than just more checks.",
        impact: "Clients can quickly see how each level improves end-user success confidence.",
        example: "Sales can map validation maturity directly to event quality expectations."
      }
    },
    {
      id: "addon-workflow",
      title: "Qualification Journey Service Pack",
      priceType: "Service level",
      short: "Guided user journey options by package level.",
      levels: {
        A: { value: "-", insight: "Not included in Package A scope." },
        B: { value: "Guided wizard basic", insight: "Step-by-step flow for common event scenarios." },
        C: { value: "Adaptive wizard advanced", insight: "Richer branching flow for complex campaign conditions." }
      },
      detail: {
        definition: "Clarifies how guided qualification support changes by package level.",
        build: "Wizard flow design, staged checks, and user progression guidance.",
        drivers: "Higher levels provide broader path handling and richer guided logic.",
        impact: "Improves user confidence and completion quality in complex event use cases.",
        example: "Client teams can position level differences without overloading users with jargon."
      }
    },
    {
      id: "addon-dashboard",
      title: "Dashboard Insight Service Pack",
      priceType: "Service level",
      short: "Dashboard clarity from basic monitoring to advanced reporting.",
      levels: {
        A: { value: "-", insight: "No dashboard layer in Package A." },
        B: { value: "Basic dashboard", insight: "Operational visibility for core event monitoring decisions." },
        C: { value: "Basic + advanced reporting", insight: "Expanded insight layers for stakeholder and strategic reviews." }
      },
      detail: {
        definition: "Makes dashboard value differences visible between package levels.",
        build: "Monitoring views, insight widgets, and report-ready analytics structures.",
        drivers: "Each level adds decision depth and narrative clarity for client stakeholders.",
        impact: "Helps sales teams articulate insight maturity without discussing technical overhead.",
        example: "B supports run-the-event monitoring while C supports strategic reporting conversations."
      }
    },
    {
      id: "addon-storage",
      title: "Data and Storage Service Pack",
      priceType: "Service level",
      short: "From session-only usage to full retained media history.",
      levels: {
        A: { value: "Cookie session only", insight: "In-session continuity without persistent media archive." },
        B: { value: "Metadata storage basic", insight: "Event insight records without full media retention footprint." },
        C: { value: "Metadata + full media storage", insight: "Complete history for reporting, reuse, and long-term product value." }
      },
      detail: {
        definition: "Explains what storage capability exists at each package level.",
        build: "Session handling, metadata persistence, and full media retention architecture.",
        drivers: "Each level expands historical depth and practical analytics utility.",
        impact: "Clients can align storage expectations with event and reporting goals.",
        example: "C supports complete media history when clients need long-term access and evidence."
      }
    },
    {
      id: "addon-user-role",
      title: "User Account and Role Service Pack",
      priceType: "Service level",
      short: "User identity and permission capability by package level.",
      levels: {
        A: { value: "-", insight: "No account layer in Package A scope." },
        B: { value: "-", insight: "No role system in Package B baseline scope." },
        C: { value: "Full account + roles", insight: "Identity, role control, and account-aware user history." }
      },
      detail: {
        definition: "Shows when account and role management becomes available.",
        build: "Authentication design, role boundaries, and account lifecycle controls.",
        drivers: "Capability appears where product-grade governance is needed.",
        impact: "Supports retention strategy and controlled access for advanced programs.",
        example: "C enables admin and end-user role boundaries in one governed platform."
      }
    },
    {
      id: "addon-reporting",
      title: "Reporting Intelligence Service Pack",
      priceType: "Service level",
      short: "Reporting depth from standard exports to advanced stakeholder intelligence.",
      levels: {
        A: { value: "-", insight: "No reporting workflow in Package A scope." },
        B: { value: "Standard exports", insight: "Foundational reports for routine event recap and review." },
        C: { value: "Advanced report intelligence", insight: "Deeper report packs for strategic and stakeholder decision workflows." }
      },
      detail: {
        definition: "Frames reporting capabilities in a client-friendly service-level view.",
        build: "Export structures, report templates, and insight communication assets.",
        drivers: "Higher levels add interpretive depth and stakeholder-readiness.",
        impact: "Makes reporting scope easy to explain during sales conversations.",
        example: "B covers routine reporting while C supports richer strategic narratives."
      }
    },
    {
      id: "addon-hosting",
      title: "Hosting and Operations Service Pack",
      priceType: "Service level",
      short: "Hosting maturity from external baseline to advanced managed operations.",
      levels: {
        A: { value: "External or client-managed", insight: "Package A can run with lightweight externally managed hosting." },
        B: { value: "Managed hosting basic", insight: "Baseline managed deployment and runtime operations support." },
        C: { value: "Managed hosting advanced", insight: "Expanded operations depth for stronger resilience and scale readiness." }
      },
      detail: {
        definition: "Describes hosting and operations readiness per package level.",
        build: "Deployment baseline, managed runtime support, and advanced operational controls.",
        drivers: "Each level reflects operations depth needed by the program maturity.",
        impact: "Helps clients connect operational confidence with package selection.",
        example: "C includes advanced operations posture for high-stakes event environments."
      }
    },
    {
      id: "addon-sla",
      title: "Support and Enablement Service Pack",
      priceType: "Service level",
      short: "Documentation and end-user enablement maturity by package level.",
      levels: {
        A: { value: "Client + end-user docs", insight: "Guideline documents for client team and participants." },
        B: { value: "Docs + end-user video guide", insight: "Documentation plus animated guidance to accelerate onboarding." },
        C: { value: "Docs + video + on-site guide", insight: "Full enablement including step-by-step on-site end-user guidance." }
      },
      detail: {
        definition: "Makes support and enablement scope explicit across package levels.",
        build: "Documentation artifacts, end-user guidance media, and operational enablement steps.",
        drivers: "Higher levels deliver richer enablement outcomes for teams and participants.",
        impact: "Clients can quickly understand support maturity differences before final selection.",
        example: "C gives teams both digital and on-site guidance readiness for premium delivery."
      }
    }
  ],
  faqs: [
    {
      q: "How is AI API cost calculated?",
      summary: "Cost depends on generation volume, model settings, and retries.",
      drivers: [
        "Number of generation calls",
        "Model quality or compute tier",
        "Prompt and output size",
        "Retries caused by failures"
      ],
      packages: ["A", "B", "C"],
      tags: ["api", "cost"]
    },
    {
      q: "What makes token usage higher or lower?",
      summary: "Template complexity and weak input quality are the biggest drivers.",
      drivers: [
        "Multi-step templates consume more calls",
        "Poor uploads increase retries",
        "Overly broad prompts waste output cycles"
      ],
      packages: ["A", "B", "C"],
      tags: ["api", "template"]
    },
    {
      q: "How do you prevent wasting tokens on bad uploads?",
      summary: "Validation and guidance happen before generation starts.",
      drivers: [
        "File format and size checks",
        "Resolution and clarity gates",
        "Qualification flow for advanced templates"
      ],
      packages: ["A", "B", "C"],
      tags: ["api", "template", "quality"]
    },
    {
      q: "What is template cost versus API cost?",
      summary: "Template cost is build scope; API cost is ongoing usage.",
      drivers: [
        "Template: one-time design and logic complexity",
        "API: per-call runtime spend",
        "More complex templates can increase API usage"
      ],
      packages: ["A", "B", "C"],
      tags: ["template", "api", "cost"]
    },
    {
      q: "What does simple template mean versus complex multi-step template?",
      summary: "Simple templates use one-pass generation; complex templates chain validations and stages.",
      drivers: [
        "Number of user inputs",
        "Branching logic and intermediate checks",
        "Required quality consistency"
      ],
      packages: ["A", "B", "C"],
      tags: ["template"]
    },
    {
      q: "Do we store user images and generated outputs?",
      summary: "A is stateless, B stores metadata only, C stores full media history.",
      drivers: [
        "Retention policy",
        "Storage and CDN costs",
        "Privacy and consent requirements"
      ],
      packages: ["A", "B", "C"],
      tags: ["storage", "privacy"]
    },
    {
      q: "What storage costs should we expect for metadata versus full images?",
      summary: "Metadata costs less; full media retention costs more over time.",
      drivers: [
        "Volume of uploaded and generated files",
        "Retention duration",
        "CDN traffic and backup policy"
      ],
      packages: ["B", "C"],
      tags: ["storage", "cost"]
    },
    {
      q: "Can we choose not to store anything (stateless)?",
      summary: "Yes, Package A is designed for stateless delivery.",
      drivers: [
        "No saved history after refresh",
        "Lower compliance and ops burden",
        "Best for one-time campaigns"
      ],
      packages: ["A"],
      tags: ["storage"]
    },
    {
      q: "Can the client use their own AI API key to pay providers directly?",
      summary: "Yes, client-owned keys are supported through secure server-side handling.",
      drivers: [
        "Provider account ownership",
        "Key rotation policy",
        "Budget governance model"
      ],
      packages: ["B", "C"],
      tags: ["api", "security"]
    },
    {
      q: "What happens if the AI provider changes pricing or limits?",
      summary: "The stack can adapt with model routing, limits, and usage controls.",
      drivers: [
        "Provider policy changes",
        "Fallback model strategy",
        "Alerting and configuration updates"
      ],
      packages: ["B", "C"],
      tags: ["api", "maintenance"]
    },
    {
      q: "What is included in deployment and hosting cost?",
      summary: "Infrastructure, environments, deployment automation, and runtime monitoring.",
      drivers: [
        "Frontend-only versus backend plus DB setup",
        "Traffic profile and uptime goals",
        "Incident alerting scope"
      ],
      packages: ["A", "B", "C"],
      tags: ["hosting", "cost"]
    },
    {
      q: "What is included in documentation and maintenance?",
      summary: "Handover docs plus optional ongoing support and SLA coverage.",
      drivers: [
        "Runbook depth",
        "Support response-time tier",
        "Update frequency"
      ],
      packages: ["A", "B", "C"],
      tags: ["maintenance"]
    },
    {
      q: "Can we upgrade from A to B to C later?",
      summary: "Yes, staged upgrades are supported and common.",
      drivers: [
        "Data model migration planning",
        "Backend and auth layer additions",
        "Storage policy evolution"
      ],
      packages: ["A", "B", "C"],
      tags: ["upgrade", "roadmap"]
    },
    {
      q: "What about privacy and consent for user-uploaded photos?",
      summary: "Privacy is handled through consent messaging, retention controls, and access restrictions.",
      drivers: [
        "Regional legal requirements",
        "Retention and deletion policy",
        "Access and role security"
      ],
      packages: ["A", "B", "C"],
      tags: ["privacy", "security", "storage"]
    }
  ],
  prosCons: [
    {
      packageId: "A",
      title: "Package A",
      bestFor: "Best for one-time events where launch speed and budget are the top priority.",
      pros: [
        "Fastest and cheapest launch",
        "No backend or database complexity",
        "Great for one-time event activations"
      ],
      cons: [
        "No saved history after refresh",
        "No analytics dashboard",
        "Limited cost control beyond basic checks"
      ]
    },
    {
      packageId: "B",
      title: "Package B",
      bestFor: "Best for teams that need behavior insights and better token efficiency.",
      pros: [
        "Captures user behavior metadata",
        "Dashboard visibility and event monitoring",
        "Lower token waste with stronger QA/QC"
      ],
      cons: [
        "No long-term full media storage",
        "Higher infrastructure scope than A"
      ]
    },
    {
      packageId: "C",
      title: "Package C",
      bestFor: "Best for product-grade experiences with reporting, retention, and future monetization.",
      pros: [
        "Full user, input, and output database",
        "Best reporting depth and monetization readiness",
        "Most complete product-like experience"
      ],
      cons: [
        "Highest build and maintenance scope",
        "Requires stronger security and operations discipline"
      ]
    }
  ]
};

const planCardsEl = document.getElementById("planCards");
const viewToggleEl = document.getElementById("viewToggle");
const comparisonBodyEl = document.getElementById("comparisonBody");
const addonsGridEl = document.getElementById("addonsGrid");
const faqListEl = document.getElementById("faqList");
const faqSearchEl = document.getElementById("faqSearch");
const prosConsGridEl = document.getElementById("prosConsGrid");
const detailsPanelEl = document.getElementById("detailsPanel");
const detailsPanelBodyEl = document.getElementById("detailsPanelBody");
const expandDetailsBtnEl = document.getElementById("expandDetailsBtn");
const closeDetailsBtnEl = document.getElementById("closeDetailsBtn");
const infoPopoverEl = document.getElementById("infoPopover");
const popoverContentEl = document.getElementById("popoverContent");
const closePopoverBtnEl = document.getElementById("closePopoverBtn");

let activeViewId = "features";
let detailsPanelExpanded = false;
let popoverPinned = false;
let popoverAnchor = null;
let popoverHideTimer = null;

const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function escapeHtml(input) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function dispatchAnalyticsEvent(eventName) {
  window.dispatchEvent(
    new CustomEvent("landing-analytics", {
      detail: {
        eventName,
        at: new Date().toISOString()
      }
    })
  );
}

function valueClass(value) {
  if (typeof value !== "string") {
    return "";
  }
  if (value.startsWith("✅")) {
    return "value-included";
  }
  if (value.startsWith("◐")) {
    return "value-optional";
  }
  if (value === "-" || value.startsWith("-")) {
    return "value-off";
  }
  return "";
}

function renderPlanCards() {
  planCardsEl.innerHTML = contentModel.packages
    .map((pkg) => {
      const featuredClass = pkg.id === "B" ? "is-featured" : "";
      return `
        <article class="plan-card ${featuredClass}">
          <h3>${escapeHtml(pkg.name)}</h3>
          <p class="tagline">${escapeHtml(pkg.tagline)}</p>
          <p class="best-for">${escapeHtml(pkg.bestFor)}</p>
          <div class="price-block">
            <strong class="price">${escapeHtml(pkg.priceText)}</strong>
            <span class="price-note">Starting project price</span>
          </div>
          <ul class="mini-list">
            ${pkg.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
          </ul>
        </article>
      `;
    })
    .join("");
}

function renderViewToggle() {
  viewToggleEl.innerHTML = contentModel.comparisonViews
    .map(
      (view) => `
        <button
          class="segment-btn ${view.id === activeViewId ? "is-active" : ""}"
          type="button"
          role="tab"
          aria-selected="${view.id === activeViewId}"
          data-view-id="${escapeHtml(view.id)}"
        >
          ${escapeHtml(view.label)}
        </button>
      `
    )
    .join("");
}

function renderComparisonRows() {
  const rows = contentModel.rows.filter((row) => row.viewId === activeViewId);

  comparisonBodyEl.innerHTML = rows
    .map(
      (row) => {
        if (row.rowType === "section") {
          return `
            <tr class="section-row">
              <th class="section-cell" colspan="4">${escapeHtml(row.title)}</th>
            </tr>
          `;
        }

        return `
          <tr>
            <th scope="row">
              <span class="row-title">
                <span>${escapeHtml(row.title)}</span>
                <button
                  class="info-trigger"
                  type="button"
                  aria-expanded="false"
                  aria-label="More details for ${escapeHtml(row.title)}"
                  data-popover-type="row"
                  data-item-id="${escapeHtml(row.rowId)}"
                  data-track="info_row_${escapeHtml(row.rowId)}"
                >i</button>
              </span>
            </th>
            <td class="${valueClass(row.values?.A || "")}">${escapeHtml(row.values?.A || "-")}</td>
            <td class="${valueClass(row.values?.B || "")}">${escapeHtml(row.values?.B || "-")}</td>
            <td class="${valueClass(row.values?.C || "")}">${escapeHtml(row.values?.C || "-")}</td>
          </tr>
        `;
      }
    )
    .join("");

  bindInfoTriggers(comparisonBodyEl);

  if (detailsPanelExpanded) {
    renderDetailsPanel();
  }
}

function renderDetailsPanel() {
  const rows = contentModel.rows.filter((row) => row.viewId === activeViewId);
  detailsPanelBodyEl.innerHTML = rows
    .map(
      (row) => {
        if (row.rowType === "section") {
          return `<h4 class="details-section-title">${escapeHtml(row.title)}</h4>`;
        }

        return `
          <article class="details-item">
            <h4>${escapeHtml(row.title)}</h4>
            <div class="detail-grid">
              <p><span class="detail-key">Definition</span><br />${escapeHtml(row.detail.definition)}</p>
              <p><span class="detail-key">What we build</span><br />${escapeHtml(row.detail.build)}</p>
              <p><span class="detail-key">Scope notes</span><br />${escapeHtml(row.detail.drivers)}</p>
              <p><span class="detail-key">Impact</span><br />${escapeHtml(row.detail.impact)}</p>
              <p><span class="detail-key">Example</span><br />${escapeHtml(row.detail.example)}</p>
            </div>
            <div class="value-row">
              <span class="value-pill">A: ${escapeHtml(row.values?.A || "-")}</span>
              <span class="value-pill">B: ${escapeHtml(row.values?.B || "-")}</span>
              <span class="value-pill">C: ${escapeHtml(row.values?.C || "-")}</span>
            </div>
          </article>
        `;
      }
    )
    .join("");
}

function renderAddonLevelCell(level) {
  const value = level?.value || "-";
  const insight = level?.insight || "Not included in this package scope.";

  return `
    <div class="addon-level-cell">
      <strong class="addon-level-value">${escapeHtml(value)}</strong>
      <p class="addon-level-insight">${escapeHtml(insight)}</p>
    </div>
  `;
}

function renderAddons() {
  addonsGridEl.innerHTML = `
    <div class="addons-table-wrap">
      <table class="addons-table">
        <thead>
          <tr>
            <th scope="col">Service pack</th>
            <th scope="col">Level A (Package A)</th>
            <th scope="col">Level B (Package B)</th>
            <th scope="col">Level C (Package C)</th>
          </tr>
        </thead>
        <tbody>
          ${contentModel.addons
            .map(
              (addon) => `
                <tr>
                  <th scope="row">
                    <div class="addon-row-head">
                      <span>${escapeHtml(addon.title)}</span>
                      <button
                        class="info-trigger"
                        type="button"
                        aria-expanded="false"
                        aria-label="More details for ${escapeHtml(addon.title)}"
                        data-popover-type="addon"
                        data-item-id="${escapeHtml(addon.id)}"
                        data-track="info_addon_${escapeHtml(addon.id)}"
                      >i</button>
                    </div>
                    <p class="addon-row-summary">${escapeHtml(addon.short)}</p>
                    <span class="price-type">${escapeHtml(addon.priceType)}</span>
                  </th>
                  <td>${renderAddonLevelCell(addon.levels?.A)}</td>
                  <td>${renderAddonLevelCell(addon.levels?.B)}</td>
                  <td>${renderAddonLevelCell(addon.levels?.C)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;

  bindInfoTriggers(addonsGridEl);
}

function renderFaqs(query = "") {
  const normalized = query.trim().toLowerCase();
  const items = contentModel.faqs.filter((faq) => {
    if (!normalized) {
      return true;
    }

    const haystack = [faq.q, faq.summary, faq.tags.join(" "), faq.drivers.join(" ")].join(" ").toLowerCase();
    return haystack.includes(normalized);
  });

  if (!items.length) {
    faqListEl.innerHTML = '<div class="empty-state">No FAQ matched your search. Try another keyword.</div>';
    return;
  }

  faqListEl.innerHTML = items
    .map(
      (faq, index) => `
        <details class="faq-item" data-track-open="faq_open_${index + 1}">
          <summary data-track="faq_click_${index + 1}">${escapeHtml(faq.q)}</summary>
          <div class="faq-body">
            <p>${escapeHtml(faq.summary)}</p>
            <ul>
              ${faq.drivers.map((driver) => `<li>${escapeHtml(driver)}</li>`).join("")}
            </ul>
            <div class="faq-tags">
              <span class="tag">A/B/C: ${escapeHtml(faq.packages.join(", "))}</span>
              ${faq.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
            </div>
          </div>
        </details>
      `
    )
    .join("");
}

function renderProsCons() {
  prosConsGridEl.innerHTML = contentModel.prosCons
    .map(
      (item) => `
        <article class="pros-card">
          <h3>${escapeHtml(item.title)}</h3>
          <h4>Pros</h4>
          <ul>${item.pros.map((pro) => `<li>${escapeHtml(pro)}</li>`).join("")}</ul>
          <h4>Cons</h4>
          <ul>${item.cons.map((con) => `<li>${escapeHtml(con)}</li>`).join("")}</ul>
          <p class="best-for-copy">${escapeHtml(item.bestFor)}</p>
        </article>
      `
    )
    .join("");
}

function getPopoverItem(type, id) {
  if (type === "addon") {
    return contentModel.addons.find((addon) => addon.id === id) || null;
  }

  if (type === "row") {
    const inView = contentModel.rows.find((row) => row.rowId === id && row.viewId === activeViewId);
    if (inView) {
      return inView;
    }
    return contentModel.rows.find((row) => row.rowId === id) || null;
  }

  return null;
}

function buildPopoverHtml(title, detail) {
  return `
    <h3 class="popover-title">${escapeHtml(title)}</h3>
    <div class="popover-block"><strong>Definition</strong><p>${escapeHtml(detail.definition)}</p></div>
    <div class="popover-block"><strong>What we build</strong><p>${escapeHtml(detail.build)}</p></div>
    <div class="popover-block"><strong>Scope notes</strong><p>${escapeHtml(detail.drivers)}</p></div>
    <div class="popover-block"><strong>Impact</strong><p>${escapeHtml(detail.impact)}</p></div>
    <div class="popover-block"><strong>Example</strong><p>${escapeHtml(detail.example)}</p></div>
  `;
}

function clearPopoverTimer() {
  if (popoverHideTimer) {
    window.clearTimeout(popoverHideTimer);
    popoverHideTimer = null;
  }
}

function schedulePopoverClose(delay = 180) {
  if (popoverPinned) {
    return;
  }
  clearPopoverTimer();
  popoverHideTimer = window.setTimeout(() => {
    closePopover();
  }, delay);
}

function positionPopover(anchor) {
  if (window.matchMedia("(max-width: 860px)").matches) {
    infoPopoverEl.style.top = "";
    infoPopoverEl.style.left = "";
    return;
  }

  const anchorRect = anchor.getBoundingClientRect();
  const popRect = infoPopoverEl.getBoundingClientRect();
  let top = window.scrollY + anchorRect.bottom + 10;
  let left = window.scrollX + anchorRect.left;

  const maxLeft = window.scrollX + window.innerWidth - popRect.width - 12;
  if (left > maxLeft) {
    left = Math.max(window.scrollX + 12, maxLeft);
  }

  if (top + popRect.height > window.scrollY + window.innerHeight - 12) {
    top = window.scrollY + anchorRect.top - popRect.height - 10;
  }

  if (top < window.scrollY + 8) {
    top = window.scrollY + 8;
  }

  infoPopoverEl.style.top = `${top}px`;
  infoPopoverEl.style.left = `${left}px`;
}

function closePopover() {
  clearPopoverTimer();
  infoPopoverEl.hidden = true;
  popoverPinned = false;

  if (popoverAnchor) {
    popoverAnchor.setAttribute("aria-expanded", "false");
  }
  popoverAnchor = null;
}

function openPopover(trigger, pinPopover) {
  const itemType = trigger.getAttribute("data-popover-type");
  const itemId = trigger.getAttribute("data-item-id");
  const item = getPopoverItem(itemType, itemId);
  if (!item) {
    return;
  }

  clearPopoverTimer();

  if (popoverAnchor && popoverAnchor !== trigger) {
    popoverAnchor.setAttribute("aria-expanded", "false");
  }

  popoverAnchor = trigger;
  popoverPinned = pinPopover;
  trigger.setAttribute("aria-expanded", "true");

  popoverContentEl.innerHTML = buildPopoverHtml(item.title, item.detail);
  infoPopoverEl.hidden = false;
  positionPopover(trigger);
  dispatchAnalyticsEvent(`info_open_${itemType}_${itemId}`);
}

function bindInfoTriggers(scope) {
  const triggers = scope.querySelectorAll(".info-trigger");
  triggers.forEach((trigger) => {
    if (trigger.dataset.bound === "true") {
      return;
    }
    trigger.dataset.bound = "true";

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!infoPopoverEl.hidden && popoverAnchor === trigger && popoverPinned) {
        closePopover();
        return;
      }

      openPopover(trigger, true);
    });

    trigger.addEventListener("focus", () => {
      openPopover(trigger, false);
    });

    trigger.addEventListener("blur", () => {
      schedulePopoverClose(150);
    });

    if (supportsHover) {
      trigger.addEventListener("mouseenter", () => {
        openPopover(trigger, false);
      });
      trigger.addEventListener("mouseleave", () => {
        schedulePopoverClose(170);
      });
    }
  });
}

function setDetailsPanel(open) {
  detailsPanelExpanded = open;
  detailsPanelEl.hidden = !open;
  expandDetailsBtnEl.textContent = open ? "Collapse all details" : "Expand all details";

  if (open) {
    renderDetailsPanel();
  }
}

function wireEvents() {
  viewToggleEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-view-id]");
    if (!button) {
      return;
    }

    const selectedViewId = button.getAttribute("data-view-id");
    if (!selectedViewId || selectedViewId === activeViewId) {
      return;
    }

    activeViewId = selectedViewId;
    closePopover();
    renderViewToggle();
    renderComparisonRows();
  });

  expandDetailsBtnEl.addEventListener("click", () => {
    setDetailsPanel(!detailsPanelExpanded);
  });

  closeDetailsBtnEl.addEventListener("click", () => {
    setDetailsPanel(false);
  });

  faqSearchEl.addEventListener("input", (event) => {
    renderFaqs(event.target.value || "");
  });

  closePopoverBtnEl.addEventListener("click", () => {
    closePopover();
  });

  infoPopoverEl.addEventListener("mouseenter", () => {
    clearPopoverTimer();
  });

  infoPopoverEl.addEventListener("mouseleave", () => {
    schedulePopoverClose(170);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePopover();
    }
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".info-trigger");
    const insidePopover = infoPopoverEl.contains(event.target);
    if (!trigger && !insidePopover) {
      closePopover();
    }

    const trackEl = event.target.closest("[data-track]");
    if (trackEl) {
      const eventName = trackEl.getAttribute("data-track");
      dispatchAnalyticsEvent(eventName);
    }
  });

  faqListEl.addEventListener(
    "toggle",
    (event) => {
      const item = event.target;
      if (!(item instanceof HTMLElement)) {
        return;
      }
      if (item.tagName !== "DETAILS" || !item.classList.contains("faq-item") || !item.open) {
        return;
      }
      const trackName = item.getAttribute("data-track-open");
      if (trackName) {
        dispatchAnalyticsEvent(trackName);
      }
    },
    true
  );

  window.addEventListener("resize", () => {
    if (!infoPopoverEl.hidden && popoverAnchor) {
      positionPopover(popoverAnchor);
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      if (!infoPopoverEl.hidden && popoverAnchor) {
        positionPopover(popoverAnchor);
      }
    },
    true
  );
}

function init() {
  renderPlanCards();
  renderViewToggle();
  renderComparisonRows();
  renderAddons();
  renderFaqs();
  renderProsCons();
  setDetailsPanel(false);
  wireEvents();
}

init();
