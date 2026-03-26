# haris-zensical-docs

Zensical-backed documentation source for `haris.ahmdngi.io`.

## Structure

- `zensical.toml` - Zensical project configuration
- `index.md` - homepage markdown source
- `docs/` - additional markdown pages and theme assets
- `CNAME` - custom domain mapping for `haris.ahmdngi.io`
- `.github/workflows/ci.yml` - build and deploy workflow for GitHub Pages

## Notes

- Run `zensical serve` from this folder to preview the docs source locally.
- Run `zensical build` to generate `site/` locally when needed.
- The generated `site/` directory is intentionally ignored in git.
- GitHub Pages publishes the generated `site/` output from CI, including the final rendered HTML pages.
- `CNAME` is copied into `site/` during CI so the custom domain stays attached to the deployed artifact.
