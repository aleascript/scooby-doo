# Publication migration handoff — Scooby-Doo

This file is an execution prompt for a future ChatGPT conversation. The PR containing it is intentionally **not the implementation**.

When resuming work, use the current branch of this PR as the implementation branch. Once the migration is complete and validated, remove this handoff file before the final merge.

## Goal

Add the full publication and release pipeline to **Scooby-Doo**, using the current `aleascript/resonance-site-template` as the generic baseline and `aleascript/regard` as the first production reference.

The result must publish the existing EN/FR Scooby-Doo corpus as:

- PDF — mandatory;
- a `/publications/` catalogue page;
- GitHub Release assets for PDF  and `publications.json`;
- a Semantic Release based repository-wide publication version.

Do not use this migration to rewrite the game or scenario.

## First: inspect current sources, do not assume

Before changing anything:

1. Read the current `main` of:
   - `aleascript/scooby-doo`;
   - `aleascript/resonance-site-template`;
   - `aleascript/regard`.
2. Compare the publication implementation in Regard with the template. Regard has already exposed generic issues that may not yet have been upstreamed.
3. Verify whether the template already contains the generic builder fixes used by Regard for:
   - adding a Markdown H1 from frontmatter when needed;
   - rewriting root-relative Markdown/HTML image paths for portable PDF output.
4. If a generic fix still exists only in Regard, prefer upstreaming it to `resonance-site-template` first, then consume the improved template here.

Do not cherry-pick the historical template PR sequence. Port the **current learned state** intentionally.

## Current Scooby-Doo facts to preserve

Current project metadata in `site.config.ts`:

- title: `Scooby-Doo`;
- tagline: `Mystery, snacks and terrible plans`;
- author: `AleaScript`;
- locales: EN + FR, English default;
- license metadata currently says CC BY 4.0 for the project content;
- lineage: designed with Resonance and powered by Regard;
- logo/favicon: `img/site/scooby-icon.png`;
- visual identity: playful cartoon mystery, purple/cream in light mode, neon green/deep purple in dark mode, rounded shapes, Verdana body and Trebuchet-style headings.

The PDF must feel unmistakably **Scooby-Doo**, not like Regard with different colors and not like a generic technical manual.

Preserve existing project statements about license and attribution. Do not invent broader legal rights over third-party IP, trademark or franchise material. If the current corpus contains a fan-work/IP notice, carry it through appropriately; if not, flag the question rather than silently inventing legal text.

## Publication composition

Do not derive publication order dynamically from the Docusaurus sidebar. Encode it explicitly in `publications.config.mjs`.

Use the current sidebar order as the initial editorial intent unless the source has changed by execution time:

1. `docs/<locale>/index.md`
2. `docs/<locale>/rules.md`
3. `docs/<locale>/scenario.md`

The scenario is currently part of the visible site corpus; keep it in the initial publication unless the user explicitly decides to split player-facing and GM-facing editions.

Web navigation and book composition must remain independent after migration.

## Scooby-Doo publication identity

Use the existing `scooby-icon.png` and current site identity as the starting point for the cover and publication theme.

The publication should be playful and energetic while remaining highly readable in print. It may use stronger shapes and more visual personality than Regard or Resonance, but avoid turning every page into a decorative cartoon panel. The rules and scenario need to remain easy to scan at the table.

A5 is a reasonable initial size for a lightweight game, but inspect the actual PDF and adjust if the scenario/rules layout benefits from a different format.

This project is a deliberate stress test for whether the generic publication pipeline can support a much stronger visual identity without hard-coded assumptions.

## Infrastructure to port

Use the latest template/Regard implementation as reference for all publication infrastructure, including at minimum:

- `publications.config.mjs`;
- publication CSS/theme and cover support;
- `tools/build-publications.mjs` and release/copy helpers;
- the `/publications/` Docusaurus page;
- `deploymentBaseUrl` handling so localized pages load the shared deployment-root `/downloads/publications.json` rather than a localized `/fr/downloads/...` path;
- package scripts and Vivliostyle / Semantic Release dependencies;
- `.releaserc.json`;
- PR validation and Semantic Release dry-run;
- production release + Pages deployment workflow;
- publication artifacts;
- `PUBLICATIONS.md` or the current equivalent documentation from the template.

Preserve Scooby-Doo-specific CSS, Root components, assets and `site.config.ts` identity unless a generic migration requires a careful merge.

The existing `docusaurus.config.ts` still has `pages: false`; enable pages as part of the migration.

## Navigation requirement learned from Regard

The publication catalogue must be easy to discover.

Ensure `Publications` is:

- visible in the main navbar;
- visible in the docs/Contents menu without being buried below the entire corpus — preferably promoted near the top;
- correct in both EN and FR.

Do not repeat the earlier Regard state where the link technically existed but was easy to miss.

## Versioning and release behavior

At the time this handoff was created, Scooby-Doo has no GitHub Releases. Re-check this at implementation time.

If there is still no real `vX.Y.Z` baseline:

- set `release.initialVersion` to `0.1.0`;
- merge the implementation with a release-triggering Conventional Commit such as `feat: add publication and release pipeline`;
- the first production run should create real `v0.1.0` directly on the merged `main` commit;
- never push a technical `v0.0.0` bootstrap tag.

After the first release, use Semantic Release normally:

- `fix:` → patch;
- `feat:` → minor;
- breaking change → major;
- `docs:`, `chore:`, `ci:`, `build:`, `test:`, `style:`, `refactor:`, `perf:` → no release under the current project policy.

The npm package remains private/unpublished. Version is release-level; editorial `revision` is separate.

## Expected publication metadata

Use current project metadata rather than inventing parallel values:

- output name: `scooby-doo`;
- title: `Scooby-Doo`;
- author: `AleaScript`;
- preserve current license metadata without implying ownership of third-party franchise IP;
- lineage: designed with Resonance, powered by Regard;
- cover: use the current Scooby-Doo identity asset(s);
- initial editorial revision may remain `Draft` if that is still appropriate at implementation time.

## Validation before merge

Do not merge merely because Vivliostyle exits successfully.

The implementation conversation must:

1. run typecheck and localized Docusaurus builds;
2. build PDF for EN and FR;
3. inspect the generated PDFs visually, including cover, TOC, page breaks, typography, scenario structure, admonitions and any images;
4. ensure the visual style is recognizably Scooby-Doo while remaining usable at the table;
5. make the actual EN/FR PDF artifacts available for review before merge;
6. verify PR Semantic Release dry-run behavior and confirm no PR release is created;
7. after merge, verify the real GitHub Release, assets, manifest version and Pages deployment;
8. verify the exact deployed Pages artifact if direct live HTTP verification is ambiguous;
9. confirm localized `/publications/` works with the shared deployment-root downloads path.

Any generic issue discovered by Scooby-Doo should be considered for upstreaming to `resonance-site-template` before duplicating a workaround elsewhere.

## Completion condition

The migration is complete when Scooby-Doo has a production-quality EN/FR publication pipeline, a discoverable publication catalogue, a visually coherent and playful PDF, correct release semantics, and no project-specific workaround that should instead live in the shared template.

Before final merge, delete `PUBLICATION_MIGRATION_PROMPT.md` from this branch.