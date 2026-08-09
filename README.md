# FELYA Brand Guide — Published Snapshot

Published static snapshot of the canonical FELYA Brand Guide at [brand.felya.com](https://brand.felya.com).

## Repository role

This public repository is an automated deployment artifact. The canonical source is the private [`felya-labs/felya-brand-guide-stage`](https://github.com/felya-labs/felya-brand-guide-stage) repository.

Every approved push to the Stage repository's `main` branch is verified, built, and synchronized here by GitHub Actions. A successful snapshot commit triggers GitHub Pages and publishes the Brand Guide.

Do not edit generated site files directly in this repository. Brand decisions, source content, design tokens, schemas, and approved assets belong in the Stage repository.

## Published interfaces

- Visual guide: [brand.felya.com](https://brand.felya.com)
- AI discovery: [`/llms.txt`](https://brand.felya.com/llms.txt)
- Canonical Markdown: [`/brand-data/guide.md`](https://brand.felya.com/brand-data/guide.md)
- Design tokens: [`/brand-data/tokens.json`](https://brand.felya.com/brand-data/tokens.json)
- Brand system: [`/brand-data/brand-system.json`](https://brand.felya.com/brand-data/brand-system.json)
- Approved assets: [`/brand-data/assets.json`](https://brand.felya.com/brand-data/assets.json)

The Pages workflow, CNAME, and this README are maintained in this repository and preserved during snapshot synchronization.
