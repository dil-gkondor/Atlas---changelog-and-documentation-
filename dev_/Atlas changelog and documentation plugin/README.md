# Atlas Changelog and Documentation Plugin — Dev Edition

> Development copy of the full design-system-ops plugin, scoped to Atlas (Diligent) changelog and documentation workflows.

**Version:** 0.1.0
**Owner:** Gergő Kondor — gkondor@diligent.com
**Repo:** https://github.com/dil-gkondor/Atlas---changelog-and-documentation-

---

## What's in here

```
dev_/Atlas changelog and documentation plugin/
├── .claude-plugin/
│   └── plugin.json              ← Plugin manifest (dev edition)
├── skills/                      ← All 39 design-system-ops skills (full copies)
├── commands/                    ← 13 compound command definitions
├── knowledge-notes/             ← 11 reference knowledge notes
├── figma-console/
│   └── FIGMA-CONSOLE-CAPABILITIES.md  ← Full reference for all Figma Console MCP tools
└── outputs/
    ├── atlas-health-report-2026-03-23.md   ← Latest Atlas health report
    └── *.md                               ← Other Atlas-specific outputs
```

---

## Skills included (39 total)

All skills from the `design-system-ops` plugin are included here as working copies.
The most relevant to Atlas changelog and documentation work:

| Skill | What it does |
|-------|-------------|
| `change-communication` | Release notes, migration guide, and team announcements for any Atlas change |
| `version-bump-advisor` | Recommends semver bump and generates changelog entry |
| `decision-record` | Documents the reasoning behind an Atlas design decision (ADR) |
| `deprecation-process` | Full deprecation lifecycle — timeline, migration path, comms plan |
| `contribution-workflow` | The process for contributing new components/patterns to Atlas |
| `token-documentation` | Writes documentation for Atlas design tokens |
| `pattern-documentation` | Documents multi-component patterns (e.g. Book card, Wizard flow) |
| `usage-guidelines` | Per-component usage guidelines (when to use, when not to, anti-patterns) |
| `release-retrospective` | Post-release look-back — what worked, what missed, what to fix |
| `stakeholder-brief` | Business-language brief for leadership (investment case, ROI) |
| `system-health` | Full health assessment across 7 dimensions |
| `component-audit` | Component library health and coverage audit |
| `token-audit` | Token architecture audit |
| `drift-detection` | Where teams are diverging from Atlas |
| `backlog-generator` | Convert audit findings into sprint tickets |
| `governance-encoder` | Convert governance policies into machine-checkable rules |
| `session-memory` | Persist and recall findings across sessions |

---

## Figma Console MCP

The `figma-console/FIGMA-CONSOLE-CAPABILITIES.md` file is a complete reference for all tools available from the `plugin:design-system-ops:figma-console` MCP server.

These tools are available in any Cowork session where the plugin is loaded — they do NOT need to be copied into this folder to work. The reference file is here so you know what's available without needing to open the MCP tool list.

**Key tools for Atlas documentation work:**

- `figma_generate_component_doc` — auto-generate docs for any component
- `figma_audit_design_system` — full design system audit from within Figma
- `figma_get_design_system_summary` — high-level DS summary
- `figma_get_variables` — inspect all Atlas tokens/variables
- `figma_browse_tokens` — browse tokens with filtering
- `figma_search_components` — find any Atlas component by name
- `figma_get_component_details` — full component spec including props and variants
- `figma_get_design_changes` — see what changed recently in the Foundation/Components files

---

## Knowledge notes

Reference documentation included:

| File | Contents |
|------|----------|
| `adoption-measurement.md` | How to measure and track design system adoption |
| `agent-orchestration-guide.md` | How to chain skills and agents together |
| `ai-readiness.md` | Making Atlas machine-readable for AI tooling |
| `component-bestiary-reference.md` | Component taxonomy and classification reference |
| `component-governance.md` | Governance policies for Atlas component contributions |
| `context-engine-blueprints.md` | 7-blueprint structure for AI context engines |
| `design-to-code-contract.md` | The contract between Figma design and code implementation |
| `human-oversight-framework.md` | When humans must review AI-generated design work |
| `mcp-setup-guide.md` | How to set up and configure MCP servers |
| `output-discipline.md` | Standards for skill outputs |
| `token-architecture.md` | Atlas token architecture (4-tier model) |

---

## Outputs

The `outputs/` folder contains Atlas-specific deliverables generated in previous sessions:

- `atlas-health-report-2026-03-23.md` — Full Atlas Design System health report (March 2026)
- `stakeholder-brief-campusiq-q1.md` — Reference stakeholder brief example
- `system-health-campusiq.md` — Reference system health example
- Other sample outputs for reference

---

## How to use this in Cowork

This folder is a development copy. To use it as an active plugin:

1. Open Cowork and select this folder as your workspace
2. The `.claude-plugin/plugin.json` will register it as the `atlas-changelog-and-documentation` plugin
3. All skills will be available by name in your session
4. The Figma Console MCP tools are available automatically when the main `design-system-ops` plugin is loaded

> **Note:** This is a dev copy — changes here do NOT automatically sync back to the parent `design-system-ops-main` folder. Keep both in sync manually, or treat this as the primary working copy going forward.

---

## Atlas-specific quick commands

These are the most common workflows for Atlas changelog and documentation:

**After shipping a component:**
```
Run: change-communication → version-bump-advisor → decision-record
```

**Quarterly governance review:**
```
Run: system-health → component-audit → token-audit → backlog-generator → stakeholder-brief
```

**Deprecating a component:**
```
Run: deprecation-process → change-communication → codemod-generator
```

**Contributing a new pattern:**
```
Run: contribution-workflow → pattern-documentation → usage-guidelines → decision-record
```
