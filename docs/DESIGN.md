# DESIGN.md — AI Development Collaboration Visual System v1

> Status: Design direction confirmed
>
> Purpose: Define the visual, interaction, and acceptance system for the **AI Development Collaboration** Skill companion site.
>
> Core references in spirit:
> - **Claude Desktop / Codex** — restraint, progressive disclosure, professional tool density
> - **Canva / Figma** — spatial canvas, zoom, focus, inspectable objects
>
> These references define interaction qualities, not surfaces to copy.

---

# 0. Acceptance Goal

The design is accepted only if it achieves all four outcomes below.

## A. First impression

Within **3 seconds**, a new user should understand:

1. this is a professional AI-development collaboration tool;
2. the primary action is `Start a Project`;
3. the interface is simple, restrained, and not a generic AI SaaS landing page.

## B. Methodology usability

Within **30 seconds**, a user should be able to understand:

- the methodology is staged but not a mandatory waterfall;
- they can enter from their current stage;
- the system turns an ambiguous problem into structured, inspectable, verifiable outputs.

The methodology must feel usable, not merely intellectually interesting.

## C. Result presentation

A completed example project must make the user feel:

> “This methodology produces clear, high-quality engineering outputs.”

The user should be able to inspect:

- project structure;
- key artifacts;
- module relationships;
- decisions;
- verification evidence;

without being forced to read all explanatory text first.

## D. Complexity management

The product may contain substantial information, but the user must never be required to understand all of it at once.

The accepted design must demonstrate:

```text
simple first view
→ progressive disclosure
→ spatial exploration
→ focused inspection
→ deep detail
```

If the page appears complicated before the user interacts, the design fails.

---

# 1. Product Positioning

This product is:

- a visual companion to the `AI Development Collaboration` Skill;
- a methodology workspace;
- a project canvas;
- a result presentation surface;
- a way to inspect why artifacts and decisions exist.

This product is not:

- a chatbot;
- a generic project management SaaS;
- a conventional methodology documentation site;
- a neon / cyberpunk AI website;
- a card-heavy dashboard.

Primary impression:

> **Minimal, refined, useful, and methodologically deep.**

---

# 2. Visual Intent

## Primary qualities

- Minimal
- Calm
- Precise
- Refined
- Tool-like
- Structured

## Secondary qualities

- Thoughtful
- Systematic
- Deep
- Spatial
- Inspectable

## Avoid

- large purple gradients;
- neon glow;
- glassmorphism everywhere;
- excessive shadows;
- every section being a rounded card;
- animation for spectacle;
- high-saturation color as hierarchy;
- all information being visible at once.

---

# 3. Core Design Principles

## 3.1 Progressive disclosure

The system may be complex.

The interface must not expose all complexity simultaneously.

```text
Overview
   ↓
Normal view
   ↓
Focused node
   ↓
Detail panel
   ↓
Full detail page
```

## 3.2 Visual hierarchy before decoration

Priority:

```text
Information hierarchy
→ Composition
→ Density / rhythm
→ Typography
→ Interaction
→ Color
→ Motion
→ Decoration
```

Never use gradient, shadow, color, or motion to compensate for weak hierarchy.

## 3.3 Result first, method second

When showing an artifact:

```text
Result / Artifact
↓
Summary / Status / Evidence
↓
Why / Intent / Constraints / Risks / Eval
```

Users should see what was produced before reading why it was produced.

---

# 4. Product Structure

```text
Home
├─ Start a Project
├─ Explore Methodology
└─ View Example Project

Workspace
├─ Method Map
├─ Project Canvas
├─ Artifacts
├─ Decisions / ADR
├─ Verification
└─ Releases
```

Method Map and Project Canvas are distinct surfaces.

- **Method Map** explains the reusable methodology.
- **Project Canvas** shows the actual project structure and outputs.

---

# 5. Homepage

## 5.1 First screen

The first screen should feel closer to Claude Desktop / Codex than a SaaS marketing page.

Use a left-aligned content block around the upper-middle of the viewport.

Suggested structure:

```text
AI Development Collaboration

Turn ambiguous ideas into
structured, verifiable systems.

[ Start a Project ]

Explore Methodology
View Example Project
```

Only `Start a Project` is visually primary.

## 5.2 Homepage acceptance criteria

PASS only if:

- one primary action is obvious in under 3 seconds;
- no more than three first-level actions compete for attention;
- no dashboard grid is visible above the fold;
- no large decorative illustration is required to make the layout feel complete;
- hierarchy still works in grayscale;
- the first screen does not rely on a gradient hero to feel “premium”.

FAIL if:

- all three actions look equally important;
- the first screen resembles a generic AI startup landing page;
- large marketing copy pushes the product itself below the fold;
- the user must scroll before understanding what the product does.

---

# 6. Homepage — How It Works

The second section demonstrates the methodology with motion.

Show both:

1. methodology stage progression;
2. project structure gradually taking shape.

Example:

```text
Explore highlighted
        ↓
Problem appears

Align highlighted
        ↓
Goal + Constraints appear

Specify highlighted
        ↓
Architecture + Modules appear

Decide highlighted
        ↓
ADR / Decision appears

Plan highlighted
        ↓
Tasks appear

Verify highlighted
        ↓
Verification evidence appears
```

Playback:

- auto-play;
- loop;
- approximately 10–15 seconds;
- no interaction required.

## Acceptance criteria

PASS only if:

- a user can understand the transformation without reading a paragraph;
- motion clarifies how the methodology creates project outputs;
- the animation remains understandable when paused at any stage;
- the loop does not distract from the rest of the page.

FAIL if:

- motion is decorative only;
- nodes appear randomly without methodological meaning;
- the animation cannot be understood without labels;
- looping animation continually steals attention.

---

# 7. Workspace Shell

Mental model:

```text
┌────────┬────────────────────────────┬──────────────────┐
│ Nav    │ Canvas                     │ Detail Panel     │
└────────┴────────────────────────────┴──────────────────┘
```

The canvas is the primary visual area.

---

# 8. Left Navigation

Use two levels.

## Level 1 — narrow primary rail

Example:

```text
Project
Method
Canvas
Artifacts
Verify
Releases
Settings
```

## Level 2 — contextual browser

Example:

```text
Problem
Architecture
Modules
ADR
Plan
Verification
```

Behavior:

- first visit: moderately expanded;
- afterward: remember previous state;
- user can collapse it.

## Acceptance criteria

PASS if:

- the canvas remains visually dominant;
- the secondary browser feels like artifact/file navigation, not SaaS navigation;
- users can collapse it without losing orientation.

FAIL if:

- the left rail consumes more visual weight than the canvas;
- navigation labels require large card containers;
- the workspace resembles an admin dashboard.

---

# 9. Top Toolbar

Left side — canvas operations:

```text
Zoom
Fit
Flow Filter
Search
Focus
```

Right side — project state:

```text
Current Stage
Status
Version
Last Updated
Export
```

Canvas operations and project metadata must be visually grouped.

---

# 10. Canvas Role

Rule:

> **Canvas shows relationships. Detail panel shows content. Full detail page supports deep reading.**

The canvas represents:

- structure;
- relationship;
- flow;
- project state;
- key outputs.

It must not become a giant text document.

---

# 11. Canvas Background

Default:

- subtle dynamic grid or dot grid;
- density may respond to zoom;
- neutral surface;
- very low visual contrast.

Settings may control:

- grid on/off;
- dot vs line;
- grid strength;
- light/dark canvas mode.

## Acceptance criteria

PASS if the grid disappears from attention after a few seconds.

FAIL if the grid competes with nodes or looks like a design gimmick.

---

# 12. Canvas Layout

Use a constrained freeform layout.

Feel spatial like Canva / Figma, but maintain engineering structure.

Allow:

- different node dimensions;
- different node types;
- varied visual weight;
- hierarchical grouping.

Avoid uniform dashboard tiling.

Node dragging:

- enabled;
- snap to grid;
- maintain readable spacing;
- prevent overlap where practical.

---

# 13. Semantic Zoom

Zoom is semantic, not merely geometric.

## Far zoom

Show:

```text
Architecture
Modules
Verification
```

## Normal zoom

Show:

```text
Architecture
System boundaries
Short summary
Status
```

## Close zoom

Show:

```text
Architecture
Short summary
Key metadata
Dependencies
Status
Selected tags
```

Deep detail belongs in the panel.

## Acceptance criteria

PASS if:

- far zoom reveals project shape;
- normal zoom reveals enough information to decide where to inspect;
- close zoom adds meaningful metadata rather than just enlarging the same card;
- text never becomes unreadably tiny just because the project is large.

FAIL if:

- zoom only scales pixels;
- all information remains visible at every zoom level;
- the user must zoom in simply to read basic node titles.

---

# 14. Node System

Use a mixed semantic shape language.

Examples:

### Main module

```text
┌──────────────────┐
│ Architecture     │
│ System structure │
└──────────────────┘
```

### Artifact

```text
┌─────────────────────────┐
│ Verification Plan       │
│ 8 / 9 checks complete   │
└─────────────────────────┘
```

### Decision

```text
Decision
───────
Use event-level dedup
```

### Status

```text
[ VERIFIED ]
```

### Risk

```text
● Risk
```

Shape differences must follow semantics.

---

# 15. Node Density

Far zoom:

- name;
- state marker.

Normal zoom:

- name;
- one-line summary;
- state.

Close zoom:

- key metadata;
- selected tags;
- major dependency/output.

Full content:

- detail panel/page.

Do not put full `WHY / INTENT / RISKS / EVAL` inside nodes.

---

# 16. Flow System

Supported relationship types:

- Control Flow
- Data Flow
- State Flow
- Dependency

Global filter:

```text
All | Control | Data | State | Dependency
```

Selected node behavior:

- selected node highlighted;
- directly related nodes highlighted;
- related edges highlighted;
- unrelated content faded;
- broader context remains faintly visible.

Recommended encoding:

```text
Control     solid
Data        dashed
State       dotted / fine dashed
Dependency  thin solid
```

Primary process routes may use clean straight/orthogonal lines.

Secondary relationships may use subtle curves.

## Acceptance criteria

PASS if:

- a user can identify at least three different relationship types without relying on color alone;
- selecting a node makes its immediate reasoning chain obvious;
- filtering flows does not destroy spatial orientation.

FAIL if:

- arrows are decorative;
- all edges use the same visual language;
- selection causes the rest of the project to disappear entirely.

---

# 17. Node Interaction

Hover:

- subtle lift;
- border/background response;
- small actions such as `Open`, `Focus`, `More`.

No dramatic scaling.

Click:

1. select node;
2. highlight relationship chain;
3. fade unrelated content;
4. open right detail panel;
5. pan slightly to preserve visibility.

---

# 18. Right Detail Panel

The detail panel is not a modal.

Features:

- freely resizable;
- compact/normal/wide via dragging;
- one-click full-page expansion.

When opened:

- preserve zoom;
- reduce viewport width;
- pan slightly so selected node stays visible;
- do not rescale the entire canvas automatically.

## Acceptance criteria

PASS if:

- opening the panel does not cause users to lose the selected node;
- canvas zoom remains stable;
- the panel can be resized smoothly;
- full-page expansion feels like deeper inspection of the same object.

FAIL if:

- opening the panel radically rearranges the canvas;
- the user loses visual context;
- the panel behaves like an unrelated modal workflow.

---

# 19. Detail Content Order

Default:

```text
Artifact / Result
↓
Summary
↓
Status / Evidence
↓
Method details
```

Example:

```text
Architecture

[ primary artifact ]

Summary

Status
Evidence
Related modules

Why this exists        >
Intent                 >
Constraints            >
Risks                   >
Evaluation              >
```

Method sections are collapsible.

## Acceptance criteria

PASS if the artifact/result is visible before explanatory methodology.

FAIL if users must read WHY/WHAT/INTENT before seeing the output.

---

# 20. Full Detail Page

Combine:

- document readability;
- tool context;
- project linkage.

Structure:

- main body;
- collapsible sections;
- right-side local index/metadata;
- related modules;
- status;
- return-to-canvas action.

Do not build a generic Notion clone.

---

# 21. Method Map

Represents:

```text
Explore
→ Align
→ Specify
→ Decide
→ Plan
→ Execute
→ Verify
→ Converge
→ Learn
```

Must communicate:

> This is not a mandatory waterfall.

Users can enter from their current stage.

Each stage may expose:

- WHY;
- WHAT;
- INTENT;
- input;
- output;
- key questions;
- exit condition;
- related template;
- corresponding actual project artifacts.

## Acceptance criteria

PASS if:

- users understand the stage model in under 30 seconds;
- non-linearity is visually or textually clear;
- users can jump directly to a stage;
- the Method Map connects to actual project outputs.

FAIL if it looks like a mandatory linear process diagram.

---

# 22. Visual Hierarchy

Use, in order:

1. position;
2. size;
3. whitespace;
4. typography;
5. opacity;
6. border contrast;
7. semantic color.

Do not use large color blocks as the main hierarchy mechanism.

---

# 23. Typography

Primary typography:

- modern sans-serif;
- tool-like;
- clean;
- restrained.

Monospace only for:

- versions;
- IDs;
- technical labels;
- metadata;
- file names;
- code;
- flow names.

Starting scale:

```text
Hero title      52–60px
Section title   30–36px
Panel title     18–22px
Body            14–16px
UI label        13–14px
Metadata        11–12px
Technical label 11–12px monospace
```

---

# 24. Color System

Target balance:

```text
~90% neutral
~10% semantic / stage color
```

Low-saturation stage colors may distinguish:

- Explore
- Align
- Specify
- Decide
- Plan
- Execute
- Verify
- Converge
- Learn

Stronger semantic colors only for:

- Verified
- Risk
- Warning
- Decision
- Error

## Acceptance criteria

PASS if:

- the interface still works in grayscale;
- no section needs a saturated background to be understood;
- stage colors remain secondary.

FAIL if the page depends on multiple bright colors to establish hierarchy.

---

# 25. Borders

Primary hierarchy comes from whitespace.

Use:

- 1px low-contrast separators;
- subtle node borders;
- slightly stronger focus borders.

Avoid visible container nesting everywhere.

---

# 26. Shadow / Elevation

Default surfaces are flat.

Shadow only for actual elevation:

- floating panel;
- popover;
- dialog;
- hover;
- drag state.

Normal cards should generally have no shadow.

---

# 27. Corner Radius

Use light rounding.

Starting point:

```text
Small control   6–8px
Panel / node    8–12px
Large surface   10–14px
```

Do not make the product bubbly or overly soft.

---

# 28. Iconography

Navigation / ordinary actions:

- outline icons.

Important state / key action:

- stronger glyph icons.

Maintain:

- consistent geometry;
- consistent stroke;
- no emoji-driven navigation.

---

# 29. Motion

Motion explains state change.

Workspace examples:

```text
Node creation
→ fade + slight scale

Flow creation
→ line draw

Panel opening
→ width / position transition

Focus
→ unrelated opacity decreases

Verified
→ subtle state transition
```

Homepage animation may be more expressive.

Workspace stays quiet.

## Acceptance criteria

PASS if:

- each motion communicates creation, focus, state, or navigation;
- UI remains understandable with reduced motion;
- hover motion never changes layout.

FAIL if:

- animation exists primarily to appear modern;
- looping motion distracts during normal work;
- hover causes neighboring elements to move.

---

# 30. State Design

Global state:

- restrained badges.

Local node state:

- small dot;
- subtle icon;
- light border shift;
- quiet label.

Do not make every state a colored badge.

---

# 31. Visual Rhythm

Avoid identical section weight.

Use:

```text
open
→ dense
→ open
→ spatial
→ detailed
→ open
```

Homepage:

```text
Hero               open
How it works       dynamic
Example preview    spatial
Method overview    structured
```

Workspace:

```text
Canvas             spatial
Panel              dense
Focused state      reduced
Detail page        readable
```

---

# 32. Decoration

Allowed:

- lightweight geometry;
- subtle flow motifs;
- restrained canvas fragments;
- quiet empty-state graphics.

Avoid:

- large illustrations;
- AI robots;
- futuristic circuitry;
- generic 3D blobs.

The canvas itself should carry most visual identity.

---

# 33. Settings

Meaningful settings may include:

```text
Theme
Canvas theme
Grid on/off
Grid type
Grid strength
Flow visibility
Node density
Reduced motion
Sidebar default state
```

Do not expose raw design-token controls.

---

# 34. Responsive Strategy

Desktop-first.

Smaller screens:

- preserve reading and inspection;
- collapse sidebars;
- use panel overlays if necessary;
- reduce simultaneous panes;
- do not recreate the full desktop canvas at phone scale.

Mobile is not the main authoring surface in v1.

---

# 35. Anti-Patterns

Reject:

## Generic AI SaaS

```text
Huge gradient headline
+ glass cards
+ purple glow
+ random icons
```

## Card everywhere

Every section is a rounded padded rectangle.

## Same-weight information

Everything appears equally important.

## Decorative flow

Arrows lack semantics.

## Dense canvas

All node metadata is visible at once.

## Hover instability

Hover changes neighboring layout.

## Method-first detail

Explanation blocks the result.

## Color-dependent meaning

Relationship type is encoded only by color.

## Motion-heavy workspace

Ordinary navigation constantly animates.

---

# 36. Final Acceptance Matrix

The prototype should be reviewed against this table.

| Area | Acceptance target | Fail condition |
|---|---|---|
| Homepage | Primary action understood in ≤3s | User must scan multiple competing CTAs |
| Visual identity | Feels like professional tool | Feels like generic AI SaaS landing page |
| Information hierarchy | One primary focus per region | Everything has equal visual weight |
| Progressive disclosure | Advanced info appears on demand | All metadata shown by default |
| Methodology | Stage model understood in ≤30s | Looks like mandatory waterfall |
| Canvas overview | Project shape readable at far zoom | Must zoom in just to understand structure |
| Semantic zoom | More zoom = more meaning | Zoom only magnifies pixels |
| Flow semantics | Control/Data/State/Dependency distinguishable | Arrows decorative or color-only |
| Node focus | Related chain obvious after click | Selected node lost in visual noise |
| Detail panel | Context preserved when panel opens | Canvas jumps/reflows unpredictably |
| Result presentation | Artifact visible before method explanation | WHY/WHAT blocks the result |
| Typography | Clear hierarchy without decoration | All text uses similar size/weight |
| Color | Neutral-first, semantic color secondary | Saturated palette required for hierarchy |
| Borders/shadows | Minimal, functional elevation | Every card has border + shadow |
| Motion | Communicates state | Animation used for spectacle |
| Workspace density | Codex-like functional density | Admin-dashboard density |
| Visual quality | Calm, precise, refined | Flashy but shallow |
| Method depth | User senses structured thinking | Looks like a generic flowchart tool |

A release candidate should not be accepted if **any of the following critical criteria fail**:

1. Homepage primary action clarity.
2. Progressive disclosure.
3. Canvas relationship readability.
4. Result-first detail structure.
5. Selected-node focus behavior.
6. Methodology is not mistaken for a mandatory waterfall.
7. Interface does not resemble generic AI SaaS styling.

---

# 37. Visual QA Procedure

For each major page, review in this order.

## Test 1 — 3-second test

Show the page briefly.

Ask:

- What is this?
- What should I do first?
- What is visually most important?

If answers are inconsistent, hierarchy fails.

## Test 2 — grayscale test

Remove color.

If the page loses structure, hierarchy relies too much on color.

## Test 3 — blur test

Blur or squint at the interface.

The major composition blocks should still be obvious.

## Test 4 — density test

Count simultaneously visible information groups.

If every module exposes details by default, progressive disclosure fails.

## Test 5 — focus test

Select one complex node.

Within one interaction, the user should clearly see:

```text
selected node
→ related nodes
→ related flows
→ artifact/detail
```

## Test 6 — result test

Open a completed artifact.

The user must see the actual result before methodology prose.

## Test 7 — reduced-motion test

Disable motion.

All workflows and state changes must remain understandable.

---

# 38. Definition of Done

The visual design is considered ready for implementation only when:

- homepage hierarchy is approved;
- one representative Project Canvas is approved;
- one selected-node focused state is approved;
- one right-side detail panel is approved;
- one full detail page is approved;
- semantic zoom has at least 3 information-density states;
- Control/Data/State/Dependency have a defined visual language;
- light-mode core tokens are stable;
- one full homepage animation cycle is storyboarded;
- all critical acceptance criteria in Section 36 pass.

The implementation is considered visually complete only after comparison against these approved reference states.

---

# 39. Implementation Freedom

AI may decide locally:

- exact neutral gray values;
- micro-spacing;
- animation easing;
- breakpoint details;
- exact icon selection inside the chosen icon system.

AI must not independently change:

- homepage hierarchy;
- progressive disclosure model;
- canvas/detail responsibility boundary;
- result-first detail structure;
- semantic zoom;
- flow semantics;
- neutral-first color system;
- restrained-motion principle;
- sidebar/panel interaction model;
- critical acceptance criteria.

If implementation constraints require changing these, surface the conflict first.

---

# 40. Initial Design Tokens

These are implementation defaults, not immutable branding.

```css
--bg: #F7F7F5;
--surface: #FFFFFF;
--surface-subtle: #F1F1EF;

--text-primary: #1F1F1D;
--text-secondary: #666661;
--text-muted: #92928B;

--border: rgba(31,31,29,0.10);
--border-strong: rgba(31,31,29,0.18);

--focus: #4F6FDE;

--success: #4E8A63;
--warning: #A87832;
--risk: #B75B52;
--decision: #7A68A8;

--radius-sm: 7px;
--radius-md: 10px;
--radius-lg: 12px;

--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
```

---

# 41. Final Direction

```text
Claude / Codex
    ↓
restraint
progressive disclosure
professional tool density

Canva / Figma
    ↓
spatial canvas
semantic zoom
structured freeform composition

AI Development Collaboration
    ↓
methodology depth
artifact-first presentation
engineering relationships
verification evidence
```

Final desired experience:

> **A calm professional workspace whose apparent simplicity reveals a deep, inspectable engineering system.**

The accepted form of “premium” is:

```text
minimal sophistication
+
methodological depth
+
professional tool behavior
```

not visual spectacle.
