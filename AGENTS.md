# AGENTS.md

This file provides high-signal context for agents working on the `ride-more-org` Docusaurus repository.

## Build and Development

- **Package Manager**: [aube](https://aube.jdx.dev/). Use `aube` commands.
- **Tool Version Manager**: [mise](https://mise.jdx.dev/). Managed via `mise.toml`.
- **Development Server**: `aube run start`
- **Production Build**: `aube run build` (generates static files in `build/`)
- **Type Checking**: `aube run typecheck` (runs `tsc`).
- **Security Audit**: `aube audit`.

## Project Structure

- `docs/`: Markdown-based documentation. Currently flat: `intro.md`, `safety.md`, `styles.md`, `trails.md`.
- `blog/`: Markdown-based blog posts.
- `src/css/custom.css`: Global styles.
- `docusaurus.config.ts`: Main configuration file. Note the `classic` preset is used for docs, blog, and theme handling.

<!-- AGENT_SYNC_START: shared-docusaurus-patterns -->
<!-- 
  The following section is shared with bryandady.com.
  It is wrapped in HTML comments to keep AGENTS.md focused for humans
  while remaining high-signal for agents.
-->
<!--
## Shared Patterns & Best Practices

This project shares patterns with `bryandady.com`:
- **Framework**: Docusaurus 3 with TypeScript.
- **Deployment**: Automatic deployment from GitHub to **Cloudflare Pages**.
- **Broken Links**: 
  - `onBrokenLinks` and `onBrokenMarkdownLinks` are both set to `'throw'` in `docusaurus.config.ts`. Every link must be valid for the build to pass.
- **Docusaurus v4**: Both use `future: { v4: true }` in `docusaurus.config.ts` to prepare for the next major version.
- **Modern Tooling**: Moving towards standardizing on `mise` for tool management and `aube` for package management.
-->
<!-- AGENT_SYNC_END: shared-docusaurus-patterns -->

## Development Constraints & Conventions

- **Blog Posts**:
  - Use `<!-- truncate -->` in blog posts to control post previews.
  - Blog tags should ideally be defined in `tags.yml` (if in use) to avoid warnings.
- **Git Tracking**: Ensure new blog files are added to Git to allow Docusaurus to retrieve file history for "edit this page" and last-update metadata.

## Common Tasks

- **Adding a page**: Create a `.md` file in `docs/` or `blog/`.
- **Modifying Navbar/Footer**: Update `themeConfig` in `docusaurus.config.ts`.
- **Adding dependencies**: Use `aube add <package>`.
