# Publications

Scooby-Doo uses the Markdown files in `docs/` as the canonical source for both the Docusaurus site and the downloadable game publication.

## Publication composition

`publications.config.mjs` defines the book independently from the website sidebar. The initial publication is intentionally explicit and contains, in order, the locale's:

1. `index.md`
2. `rules.md`
3. `scenario.md`

This keeps web navigation and book composition independent while preserving the current editorial intent.

The publication is A5, uses `publication/theme.css`, and publishes EN/FR PDF files named `scooby-doo-en.pdf` and `scooby-doo-fr.pdf`.

## Build

Install dependencies and run:

```bash
npm run publication:build
```

Generated files are written to `dist/publications/` together with `publications.json`.

To copy the current corpus into an already-built Docusaurus site:

```bash
npm run publication:site
```

That copies the complete corpus to `build/downloads/`. The localized `/publications/` page always reads the shared deployment-root `downloads/publications.json`; it must not resolve to a locale-specific `/fr/downloads/...` path.

## Markdown portability

The publication builder works on temporary copies. It does not rewrite the authored Markdown.

Before Vivliostyle runs it:

- adds an H1 from frontmatter when a document has a title but no Markdown H1;
- rewrites root-relative Markdown and HTML image paths so assets in `static/` remain portable;
- transforms supported Docusaurus admonitions into semantic Markdown blockquotes;
- rejects unknown directives and nested admonitions instead of silently degrading them.

The Vivliostyle task also enables VFM's internal-link conversion:

```js
vfm: {
  rewriteRelativeHrefExtensions: true,
},
```

This is required so authored links such as `rules.md` and `scenario.md` become working links in the generated publication.

## Versioning

The repository uses one lockstep publication version for the complete released corpus.

The builder resolves the version in this order:

1. `PUBLICATION_VERSION` during release preparation;
2. the latest real Git tag matching `vX.Y.Z`;
3. `release.initialVersion` from `publications.config.mjs`.

Scooby-Doo starts at `0.1.0`. No technical `v0.0.0` bootstrap tag is pushed. The PR dry-run may create a temporary local `v0.0.0` tag only inside the CI checkout so Semantic Release can validate a repository with no previous release.

`revision` is editorial metadata and remains independent of SemVer. The initial value is `Draft`.

After the first release:

- `fix:` and `revert:` create a patch release;
- `feat:` creates a minor release;
- a breaking Conventional Commit creates a major release;
- `docs:`, `chore:`, `ci:`, `build:`, `test:`, `style:`, `refactor:`, and `perf:` do not create a release.

Because game Markdown is product content, an editorial change to a published rule should use `fix:` or `feat:` rather than `docs:`.

## CI, release and Pages

Every pull request:

- installs dependencies;
- typechecks;
- builds both localized Docusaurus sites;
- builds both PDFs and `publications.json`;
- uploads the publication corpus as the `validation-publications` workflow artifact;
- runs Semantic Release in dry-run mode and does not create a GitHub Release.

On the first successful push to `main` with no existing release, the workflow prepares version `0.1.0`, creates the real `v0.1.0` GitHub Release on that `main` commit, attaches the PDFs and manifest, copies the corpus into the Pages build, and deploys it.

Later release-triggering commits are handled by Semantic Release. Non-release commits still rebuild and deploy the site against the latest released corpus version.

## Project metadata

Publication metadata intentionally mirrors the existing project configuration:

- title: `Scooby-Doo`;
- author: `AleaScript`;
- existing CC BY 4.0 project-content metadata;
- designed with Resonance;
- powered by Regard;
- cover identity from `static/img/site/scooby-icon.png`.

This migration does not add or broaden any legal claim about third-party franchise IP. The current corpus has no separate fan-work/IP notice, so none is invented here.
