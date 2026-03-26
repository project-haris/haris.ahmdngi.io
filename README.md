# haris-zensical-docs

Zensical-backed documentation source for `haris.ahmdngi.io`.

## Structure

- `zensical.toml` - Zensical project configuration
- `docs/` - markdown source for the docs site
- `CNAME` - custom domain mapping for `haris.ahmdngi.io`
- `.github/workflows/deploy-pages.yml` - build and deploy workflow for GitHub Pages

## Notes

- Run `zensical serve` from this folder to preview the docs source locally.
- Run `zensical build` to generate `site/` locally when needed.
- The generated `site/` directory is intentionally ignored in git.
- GitHub Pages should publish the built Zensical output, not a separate hand-written root `index.html`.
