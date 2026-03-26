# haris-zensical-docs

Docs-style rebuild of `haris.ahmdngi.io` inside the `project-haris` workspace.

## Structure

- `zensical.toml` - Zensical project configuration
- `docs/` - markdown content for the Zensical site
- `index.html` - single-page documentation site
- `styles.css` - layout, visual system, responsive behavior, and docs styling
- `script.js` - mobile sidebar toggle and active section highlighting
- `logo.svg` - Haris brand mark reused from the original site
- `favicon.svg` - browser icon
- `CNAME` - domain mapping for `haris.ahmdngi.io`

## Notes

- Run `zensical serve` from this folder to preview the markdown docs site.
- The static `index.html` version is also kept in place as a standalone no-build fallback.
- The original `haris.ahmdngi.io` folder is left untouched; this folder is a docs-first recreation.
