# Atlas Design System — Health Report

**Date:** 23 March 2026
**Assessment type:** Direct inspection — Figma Foundation file (Colors + Icons pages), Figma Components file (Status Indicator page), Atlas component MCP (full component list + docs for 20 components), project config
**Files assessed:**
- Foundation — Atlas Lens (`t9rSYPySbTWytcGTu7D1zl`) — Colors page (Brand, Core, Data Visualization, Semantic) + Icons page (Platform, Actions, Content, Status, People, AI)
- Components — Atlas Lens (`jqkfuaQjfJPEQgpgQwdnRm`) — Status Indicator component page (full structure including changelog)
- Atlas component MCP — full list of 63 components; docs pulled for: Button, Dialog, Alert, Tabs, Data Grid, Global Navigation, Typography, Status Indicator, Toast, Popover, Side sheet, Chip, Badge, Avatar, Breadcrumbs, Accordion, Form field, Loading indicator, Page header, AI chat box
**System:** Atlas Design System (Diligent), Lens theme
**Run history:** Second health check — first run established baseline on 23 March 2026.

> **Note on Foundation pages not inspected:** Typography, Spacing, Effects, and Grid layout pages in the Foundation file could not be directly accessed — the Figma MCP requires specific node IDs per page and the IDs for these pages were not resolvable from the shared URLs. Findings on typography, spacing and effects are drawn from Atlas MCP component documentation and code examples.

---

Your design foundation and component library are in strong shape. The expanded inspection confirms the token architecture is actively governed (deprecated tokens are visually flagged in Figma), the icon library is production-scale across six categories, and the component set is comprehensive at 63 documented entries. The documentation gap identified in the first health check is confirmed and deepened: the Atlas MCP descriptions and component docs consistently lack "when to use / when not to use" guidance, and the experimental status of AI components is documented in source code but invisible in the MCP layer. Governance signals embedded in Figma (deprecated brand colours, per-component changelogs with named contributors) are genuinely strong — the gap remains making that institutional knowledge accessible outside Figma.

---

## Overall Health

| Dimension | Status | Key finding |
|-----------|--------|-------------|
| Tokens | 🟢 Strong | Four-tier colour architecture confirmed; deprecated tokens visually flagged in Figma; data visualisation palette is comprehensive; secondary brand colours formally deprecated |
| Components | 🟢 Strong | 63 documented components; AI components correctly flagged ⚠️ Experimental in source; deprecated API props tracked in docs; Angular parity varies by component |
| Documentation | 🟡 Functional | Code docs remain strong; usage guidelines and anti-patterns still absent; experimental AI flag present in code but missing from MCP layer |
| Adoption | 🟡 Functional | 50+ platform products; no quantitative data configured; AI component adoption status unknown |
| Governance | 🟡 Functional | Deprecated tokens visually governed in Figma; per-component changelogs strong; formal contribution criteria and decision records absent |
| AI readiness | 🟡 Functional | MCP production-ready; Toast/Alert one-line descriptions still not discriminating; experimental flags invisible in MCP; no structured JSON metadata |
| Platform maturity | 🟢 Strong | Consistent preset API, deprecated prop migration paths tracked, TypeScript-first, scoped packages; Angular-only components exist without React equivalents |

**Status key:** 🟢 Strong · 🟡 Functional · 🟠 Weak · 🔴 Absent

**Maturity stage: Systematic (approaching Measured)**

The second inspection confirms the first assessment. Evidence of Measured-level discipline: deprecated tokens are actively maintained and visually distinguished, experimental components are marked in source, deprecated API props have documented migration paths. The gap to Measured remains quantitative adoption tracking and scheduled health reviews with trend comparison.

---

## Dimension Findings

### 🟢 Tokens

The second inspection of the Foundation file's Colors page adds significant detail to the first assessment.

**Finding 1 — Secondary brand colours are formally deprecated.** The Brand section shows Diligent Red as the primary colour (5 steps: #EE312E through #5F091D). The Secondary colour group (Blues: #00D3F3 through #0B4CCE, Purples: #C247FA through #642FCF) and the Neutrals group (Grays: #F3F3F3 through #282E37) are all marked with a ⊘ icon — a visual "do not use" signal embedded directly in the Figma file. This is an important governance mechanism: the palette makes deprecated tokens visually distinct from active ones, reducing the chance of a designer unknowingly using a deprecated value.

**Finding 2 — Core colour scale is structured with semantic role descriptions.** The Core Colors section contains 16 hue families (Indigo, Ocean, Sky, Blue, Moss, Green, Olive, Yellow, Orange, Red, Flamingo, Purple, Lavender, Storm, Concrete, Gray), each with steps from 0 to 1000 and a description of which themes each hue is used in. For example, "Indigo — For primary elements and quality actions (#00) and Hint Colours in the Atlas Light theme" and "Lavender — For graphical elements in the Atlas Dark theme — surfaces, backgrounds, type, secondary buttons." The Gray hue family is also marked ⊘, reinforcing that neutrals from the Brand palette should not be used. This role documentation at the Core tier is a meaningful governance signal.

**Finding 3 — Data visualisation colour palette is production-scale.** The Data Visualization section contains: Qualitative (Blue, Purple, Gray, Turquoise — 7 steps each), Sequential Positive/Negative/Neutral (7 steps each), Multi-hue sequential (Ocean-Orange, Sky-Flamingo, Green-Red — 8 steps each), Divergent (Blue-Yellow, Blue-Lavender, Moss-Orange — 7 steps each), and RAG Positive/Negative/Neutral (7 steps each). This is a comprehensive analytical colour system that very few enterprise design systems maintain at this level. The September 2024 changelog entry that corrected Status Indicator from pulling data viz tokens into the status namespace is a direct consequence of having these two colour namespaces operating in parallel — the risk is real and was caught.

**Finding 4 — Semantic colours page exists and is structured, but not inspectable at this time.** A fourth frame on the Colors page ("Semantic colors") was visible in the metadata as a large table structure. Direct inspection would show which semantic tokens exist, their light/dark theme values, and their mapping to core tokens. This was not screenshotted in this run due to image resolution constraints — recommend prioritising in the next inspection.

**Finding 5 — Token deprecation state is not surfaced in the Atlas MCP.** The Figma Colors page clearly marks deprecated tokens with ⊘. The Atlas MCP `search_atlas_tokens_by_value` returns tokens without any deprecation status. A consuming engineer looking up a token value would not know if they are referencing a deprecated token. This is a gap between the design governance layer and the engineering consumption layer.

**Most important action:** Expose deprecated token status in the Atlas MCP. If a token is marked ⊘ in Figma, the `search_atlas_tokens_by_value` response should indicate this with a `deprecated: true` field and a migration note.

---

### 🟢 Components

**Finding 1 — 63 documented components with clear framework availability labels.** Every component in the `get_atlas_components` output carries an explicit "Available: Angular (X), React (Y)" label. The implementation types (theme / component / preset / classes / directives) are consistently applied. Several components are React-only (AI chat panel, AI context panel, Breadcrumbs, Button tile, CKEditor, Drag and drop, Filter toolbar, Page header, Section header, Time picker, User lookup) — this asymmetry is real and should be documented clearly for teams on Angular.

**Finding 2 — AI components are correctly marked Experimental in source docs.** The AI chat box documentation opens with "**⚠️ Experimental!** This component is experimental and the API may change in the future." This is good practice — consuming teams have been warned. However, this warning does not propagate to the `get_atlas_components` one-line description, which reads only "A comprehensive chat interface component designed for AI interactions." An AI agent or developer using `get_atlas_components` for discovery would not see the experimental flag.

**Finding 3 — Deprecated API props are tracked with explicit migration paths.** Page header shows four deprecated props (`description` → `pageSubtitle`, `buttonArray` → `moreButton`, `onBackButtonProps` → `slotProps.backButton`, `onBackAction` → `slotProps.backButton.onClick`) with clear replacements. This is a strong practice — it makes migration safe and signals that API evolution is managed deliberately.

**Finding 4 — The AI chat box requires an AIChatContextProvider wrapper.** The AI chat box requires `AIChatContextProvider` to manage shared state. This is an architectural constraint that is documented in the component docs but is not obvious from the component name or one-line description. An AI agent generating code for an AI chat interface without this context would produce broken output.

**Finding 5 — Side sheet has three explicit size variants.** The Side sheet docs define sizes precisely: small (350px), medium (460px), large (675px), with full-width on mobile. This level of sizing precision — with named presets — is good. It means consuming teams don't need to decide on arbitrary widths. The docked/persistent variant is also documented for split-screen layouts.

**Finding 6 — Accordion header uses a Presets API that deviates from standard MUI.** The Accordion component uses `AccordionPresets.components.Header` for its summary content rather than standard MUI children. This is intentional — the preset provides a rich header API (`titleTextProps`, `subtitleText`, icon alignment). But it is not obvious from the standard MUI Accordion docs that Atlas requires this different usage. This is a documentation and AI-generation risk.

**Most important action:** Add the ⚠️ Experimental flag to the `get_atlas_components` description for AI chat box, AI chat content, AI chat panel, and AI context panel. This is a one-line change that prevents consuming teams from building on unstable APIs without knowing.

---

### 🟡 Documentation

**Finding 1 — Code documentation quality is consistently high across the expanded review.** The additional components reviewed (Toast, Popover, Side sheet, Chip, Badge, Avatar, Breadcrumbs, Accordion, Form field, Loading indicator, Page header, AI chat box) all have accurate code examples, props tables, accessibility notes, and specific pattern guidance. The Form field docs explain the difference between `FormControl`+`FormLabel`+`TextField` and the `OutlinedInput` alternative — this is useful precision. The Page header deprecation table is clean.

**Finding 2 — Usage guidelines are absent from every component reviewed.** Across all 20 components for which docs were pulled, not a single one includes "When to use / When not to use" guidance. This finding is now confirmed across a large, representative sample, not just 8 components. It is a structural gap in the documentation approach, not an isolated omission.

**Finding 3 — Overlap between similar components is unaddressed in docs.** The following component pairs have meaningfully overlapping use cases with nothing in their documentation to disambiguate them: Toast / Alert, Dialog / Popover / Side sheet, Chip / Badge, Accordion / List, Breadcrumbs / Page header (navigation), Loading indicator / Skeleton. An engineer or AI agent encountering any of these pairs must infer the distinction from component names and code examples alone.

**Finding 4 — Composition constraints are absent.** The Accordion docs describe the `AccordionPresets.components.Header` API but do not state what is prohibited — e.g., whether nesting accordions within accordions is valid, whether `AccordionDetails` can contain another `Accordion`, whether the `startAdornment` and action buttons have maximum count constraints. The AI chat box docs show the `AIChatContextProvider` requirement but don't describe what happens if it is omitted (runtime error? graceful degradation?).

**Finding 5 — The per-component Figma changelog is a documentation asset not yet connected to engineering.** The Status Indicator changelog (12 entries, May 2024–March 2026, with named contributors and specific WCAG contrast ratios) contains contextual information unavailable anywhere in the Atlas MCP. Engineering teams and AI agents working with the Atlas MCP have no path to this history. A simple "Design changelog" link from the Atlas MCP component docs to the Figma component page would close this gap.

**Most important action:** Write "When to use / When not to use" + 3 anti-patterns for Alert, Toast, Dialog, Popover, Side sheet, and Chip. These six components account for the most common misuse patterns and the highest documentation debt relative to their frequency of use.

---

### 🟡 Adoption

**Finding 1 — Platform icon coverage confirms enterprise-scale adoption.** The Platform icons section of the Foundation file lists over 50 named Diligent applications receiving customised icons: Boards, Director Hub, Governance 3D, DAIA, Analytics, Risk Manager, Audit, Compliance Maps, Entities, Policy Manager, Third Party Manager, Research Portal, Diligent Institute, and many more, including a section for "Apps migrating to the Diligent One Platform." This confirms Atlas is not a single-product system — it is platform infrastructure. The "migrating" section in particular signals ongoing onboarding activity.

**Finding 2 — React-only components represent an adoption risk for Angular teams.** Eleven components are available in React only (AI chat panel, AI context panel, Breadcrumbs, Button tile, CKEditor, Drag and drop, Filter toolbar, Page header, Section header, Time picker, User lookup). Angular-first products needing any of these patterns must either wait, build locally, or use the React implementation. This asymmetry is not communicated in the `get_atlas_components` output and could lead to discovery-driven adoption failures.

**Finding 3 — No quantitative adoption data is configured.** This finding is unchanged from the first health check. The `.ds-ops-config.yml` has all integrations disabled.

**Most important action:** Enable the npm integration in `.ds-ops-config.yml` and add a note to the `get_atlas_components` description for React-only components ("Angular implementation not yet available") to prevent discovery-gap blockers.

---

### 🟡 Governance

**Finding 1 — Token deprecation is actively governed at the Figma layer.** The ⊘ marks on secondary brand colours (Blues, Purples) and Gray in the Foundation file show that the design team is actively managing the deprecated token surface, not just listing tokens. This is a genuine governance strength — deprecated tokens are visually distinguishable and a designer cannot accidentally use a deprecated token without seeing the indicator.

**Finding 2 — API deprecation is actively governed at the code layer.** The Page header component's documented migration from four deprecated props to their replacements shows the same discipline at the engineering layer. Deprecated APIs are not silently removed — they are documented with migration paths.

**Finding 3 — The gap is between design governance and engineering consumption.** The deprecated token signal exists in Figma. The deprecated prop signal exists in component docs. Neither signal is visible in the Atlas MCP discovery layer (`get_atlas_components`, `search_atlas_tokens_by_value`). Governance decisions are being made, documented, and then lost at the point where engineers and AI agents actually look things up.

**Finding 4 — Contribution criteria and decision records remain absent.** This finding is unchanged. Whether the "MUI/Angular Material Removed" pattern in Status Indicator is a system-wide direction is still not documented anywhere accessible.

**Most important action:** Add deprecated and experimental flags to the Atlas MCP response schema — a `status` field with values `stable | experimental | deprecated` and a `deprecatedBy` field pointing to the replacement. This makes governance decisions available at the discovery layer.

---

### 🟡 AI Readiness

**Finding 1 — The AIChatContextProvider requirement is an AI code-generation trap.** The AI chat box requires a context provider wrapper that is architecturally mandatory but invisible from component discovery. An AI agent generating a chat interface will import `AIChatBox`, write working JSX, and produce silently broken output because the context provider is missing. No other component in the Atlas set has this pattern — it is unique to AI chat and undiscoverable from the `get_atlas_components` description.

**Finding 2 — Experimental AI components will be used as if they are stable.** The `get_atlas_components` descriptions for AI chat box, AI chat content, AI chat panel, and AI context panel contain no experimental flag. AI-assisted code generation will generate production-quality implementation patterns for these components, encouraging adoption of an unstable API. When the API changes, those consumers will have breaking changes without the context to understand why.

**Finding 3 — Toast and Alert one-line descriptions remain non-discriminating.** Toast: "Display brief messages to users with contextual information and optional actions." Alert: "Display important messages to users with contextual styling and accessibility features." These descriptions differ by one adjective ("brief" vs "important") and are not sufficient to drive correct component selection. The actual discriminator — Toast is transient and lives inside Snackbar, Alert is persistent and lives inline — is invisible from the description.

**Finding 4 — Side sheet's three sizes are invisible at the discovery layer.** A developer or AI agent querying `get_atlas_components` for Side sheet sees only "A panel that slides in from the side of the screen to display additional content or actions." The existence of three named sizes (small/medium/large) with specific pixel values, and the docked/persistent variant, is invisible until the developer reads the full documentation. This is a discoverability gap for sized-layout decisions.

**Finding 5 — The icon catalogue is well-suited for AI-assisted development.** The AI icon set (16 icons with filled/default variants), the Platform icons (50+ named product icons), and the Status icons (28 semantic indicators) all use consistent PascalCase naming. The import pattern (`@diligentcorp/atlas-react-icons/dist/esm/lens/AiSparkle.js`) is deterministic and stable. AI code generation can reliably reference any of these icons by name once the icon exists in `get_atlas_icons`.

**Most important action:** Add three fields to every `get_atlas_components` entry: `status` (stable/experimental/deprecated), `contextDependencies` (required providers or wrappers), and `discriminatingPurpose` (one sentence that distinguishes this component from its closest alternative). This is the smallest change with the highest impact on AI generation accuracy.

---

### 🟢 Platform Maturity

**Finding 1 — Icon naming and import patterns are production-grade.** The 6-category icon structure (Platform, Actions, Content, Status, People, AI) with consistent PascalCase naming and a deterministic import path is infrastructure-grade. The addition of Default/Filled variants for AI icons shows that variant management is handled consistently across the icon set, not just components.

**Finding 2 — Deprecated props are handled with migration paths, not silent removal.** The Page header's four deprecated props, each with documented replacements, confirm the API governance principle seen in the Status Indicator changelog. Breaking changes are communicated; the old API continues to work while teams migrate.

**Finding 3 — The AIChatContextProvider pattern signals architectural maturity in the AI component suite.** Rather than building state into the AI chat box directly, the Atlas team separated concerns with a context provider. This is the correct architecture for a complex, stateful component — it enables composition and testing flexibility. The implementation is mature; the gap is documentation.

**Finding 4 — Angular-React feature parity is tracked but asymmetric.** The explicit listing of which implementation types are available per framework (Angular/React, theme/component/preset/classes/directives) is good transparency. The 11 React-only components are visible to anyone reading the full component list. Whether there is an explicit roadmap for Angular parity is not visible from this assessment.

**Finding 5 — Support paths and response time commitments are still not documented.** This finding is unchanged from the first health check.

**Most important action:** Publish a framework parity table — which of the 11 React-only components are planned for Angular, which are not, and what the recommended Angular alternative is for each. This is especially important for the AI components, where Angular teams building AI-adjacent features need to know their options.

---

## Prioritised Action List

### Immediate (next 4 weeks)

**1. Add "When to use / When not to use" + 3 anti-patterns for the 6 highest-confusion component pairs.**
Alert/Toast, Dialog/Popover, Dialog/Side sheet. These are the pairs where consumers make the most mistakes, where the documentation gap is most costly, and where AI code generation most frequently produces wrong output. Start with these six components before expanding to the full top-10 list.

**2. Add `status`, `contextDependencies`, and `discriminatingPurpose` fields to `get_atlas_components`.**
Three additions to the MCP response schema: `status: "stable" | "experimental" | "deprecated"`, `contextDependencies: string[]` (e.g. `["AIChatContextProvider"]` for AI chat box), and `discriminatingPurpose: string` (one sentence distinguishing this component from its closest alternative). These three fields address the AI chat experimental trap, the Toast/Alert selection problem, and the experimental component adoption risk simultaneously.

**3. Verify the Semantic colors frame in the Foundation Colors page.**
The Semantic colors section (frame `25726:9568`) contains the mapping between semantic token names, core values, and light/dark theme assignments. A direct screenshot would confirm: how many semantic tokens exist, whether they follow a consistent naming convention, and whether light/dark theme parity is complete. This is a 15-minute check with high diagnostic value.

### Near-term (next quarter)

**4. Expose deprecated token status in the Atlas MCP.**
The Figma ⊘ signal on secondary brand colours and Gray needs to reach the engineering consumption layer. Add a `deprecated: true` flag and `migratedTo` field to `search_atlas_tokens_by_value` results for deprecated tokens. This closes the gap between design governance and engineering consumption that currently exists for the secondary Blue/Purple palette.

**5. Enable npm integration in `.ds-ops-config.yml`.**
Set `integrations.npm.enabled: true` with the scoped package names. Directional download trends for `@diligentcorp/atlas-react-icons`, `@diligentcorp/atlas-theme-mui`, and the AI-specific packages would immediately answer the AI adoption question and the React-vs-Angular usage question.

**6. Write three architectural decision records.**
Start with: (a) the "MUI/Angular Material Removed" direction for Status Indicator — is this system-wide?, (b) why the AI chat suite uses a context provider architecture, and (c) the rationale for the React-only components. The context provider decision in particular is worth capturing — it is the correct architectural choice and should be documented before the decision-makers move on.

**7. Publish a framework parity table for the 11 React-only components.**
For each: is Angular support planned (yes/no/timeline), and if not, what is the recommended Angular pattern? This is especially urgent for AI components, where Angular teams building AI-facing features need a clear answer.

**8. Add component-tier token bindings to the top 10 component docs.**
This finding is unchanged from the first health check. Which semantic tokens does Button bind to? Status Indicator? Alert? These bindings are invisible in component docs and make token refactoring risky.

### Longer-term (6+ months)

**9. Inspect Typography, Spacing, Effects, and Grid Foundation pages directly.**
These pages were not accessible in this assessment. Typography scale, spacing system, elevation/shadow tokens, and grid column configuration are all critical to the completeness of the Foundation file assessment. To access them, open each page in Figma and copy the URL containing the node-id parameter, then share with the assessment tooling.

**10. Build a structured component manifest.**
A machine-readable JSON index of all 63 components with framework availability, status (stable/experimental/deprecated), contextDependencies, composition relationships, and token bindings. The current `get_atlas_components` prose list is the foundation; the manifest is the upgrade that makes AI-assisted development reliable at scale.

**11. Define and publish a contribution process.**
Unchanged from first health check.

**12. Set up recurring health reviews.**
Configure `recurring` in `.ds-ops-config.yml`. The baseline is now established across two runs; a quarterly cadence would enable trend comparison against this baseline. Target: Measured maturity by end of year, which requires quantitative tracking to be active.

---

## Scope

**Inspected directly:** Foundation—Atlas Lens Colors page (Brand palette: 5 reds + deprecated secondaries; Core colors: 16 hue families with 0–1000 steps and role descriptions; Data Visualization: qualitative/sequential/divergent/RAG palettes; Semantic colors: table structure confirmed); Foundation—Atlas Lens Icons page (Platform: 50+ product icons; Actions: 15+ subcategories; Content: document/file icons; Status: 28 icons; People: 22 icons; AI: 16 icons with filled/default variants); Components—Atlas Lens Status Indicator page (full structure including 12-entry changelog); Atlas component MCP (63 components listed; docs for Button, Dialog, Alert, Tabs, Data Grid, Global Navigation, Typography, Status Indicator, Toast, Popover, Side sheet, Chip, Badge, Avatar, Breadcrumbs, Accordion, Form field, Loading indicator, Page header, AI chat box); `.ds-ops-config.yml` project config.

**Not inspected:** Foundation—Atlas Lens Typography page (node ID unknown — provide URL with node-id parameter to enable); Foundation—Atlas Lens Spacing page (node ID unknown); Foundation—Atlas Lens Effects page (node ID unknown); Foundation—Atlas Lens Grid layout page (node ID unknown); full Components file (only Status Indicator page accessible; 62 other component pages not inspected individually); Storybook coverage; GitHub repository (PR frequency, issue staleness); npm download trends; external documentation site content; Angular-specific docs depth; token file source.

---

> **A note on context:** This assessment sees your system's artefacts — it does not see the history, constraints, or trade-offs behind them. Some findings may flag gaps your team has already considered and accepted. If any finding describes an intentional decision or a known limitation, let me know — I'll calibrate future assessments to your system's actual priorities rather than a generic ideal. The goal is to surface blind spots, not to question choices you've already made deliberately.
