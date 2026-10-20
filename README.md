# TAIR Jekyll Site

A one-page TAIR project site built with Jekyll, Tailwind CSS 4, daisyUI 5, Liquid, and Remix Icon. Page content lives in `index.md` frontmatter so everyday editors do not need to touch the layout HTML.

## Requirements

- Ruby 3.2+
- Bundler
- Node.js 20+

## Install and run

```bash
bundle install
npm install
npm run dev
```

Open `http://127.0.0.1:4000`.

## Production build

```bash
npm run build
```

The generated site is written to `_site/`.

## Where editors make changes

### `index.md`

Contains all homepage content:

- Hero messaging
- Clinical dataset cards, licensing, citation, and models
- Simulator workflow and platform links
- Documentation and download cards
- Team, partner, and acknowledgement content
- Contact callout

### `clinical-data.md`

Contains the content for the clinical dataset detail page at `/clinical-data/`:

- Page title and introductory text
- Dataset tags and download link
- Sidebar metadata
- Dataset sections and release details
- Citation and contributors

The page uses `_layouts/dataset.html`. Repeated dataset cards and citation markup are shared with the homepage through `_includes/dataset-card.html` and `_includes/citation-code.html`.

### `_data/site.yml`

Contains shared site settings:

- Logo paths and alt text
- Header CTA
- Contact link
- Navigation labels and anchor URLs
- Footer content

The hero navigation calculates its columns from `navigation.size`; there is no separate navigation-count setting to maintain.

### `assets/css/tailwind.css`

Tailwind 4 uses a CSS-first configuration. This file contains the TAIR navy, signal-green, and ocean-blue tokens, the Space Grotesk/Space Mono font stacks, the daisyUI theme, and the source paths Tailwind scans.

Do not edit `assets/css/site.css` directly. It is generated from `assets/css/tailwind.css`.

Use the daisyUI theme classes for shared interface colors:

```text
bg-base-100      bg-base-200      text-base-content
bg-primary       text-primary     border-base-300
bg-secondary     text-secondary   bg-neutral
```

Project-wide design values also have named Tailwind utilities, including `text-heading`, `text-copy-strong`, `bg-primary-dark`, `text-primary-bright`, `shadow-card`, `shadow-navigation`, and `tracking-section`. Add or change a reusable design value in `assets/css/tailwind.css` instead of repeating an arbitrary value throughout the templates.

Arbitrary values are reserved for genuinely unique layout geometry, such as a section's asymmetric grid columns or the navigation grid's runtime column count.

## Brand assets

Replace these files:

```text
assets/images/logo.svg
assets/images/logo-light.svg
favicon.svg
```

Then update the logo alt text in `_data/site.yml` and the title/description in `_config.yml` and `index.md`.

## Hero artwork

Replace:

```text
assets/images/tair-hero-medical.png
```

Or update `hero.background_image` in `index.md`.

## Navigation

Navigation is defined once in `_data/site.yml` and populates both the hero tiles and fixed header.

Always quote anchor URLs in YAML:

```yaml
- label: Overview
  url: "#overview"
```

When adding a section:

1. Add the section markup and matching `id` in `_layouts/home.html`.
2. Add its content to `index.md`.
3. Add its navigation entry to `_data/site.yml`.

The column count updates automatically.

## Tailwind source scanning

Tailwind generates CSS only for complete class names found in the `@source` paths in `assets/css/tailwind.css`. The starter already scans root pages, `_layouts`, `_includes`, and JavaScript.

Do not construct class names like this:

```liquid
md:grid-cols-{{ count }}
```

Tailwind cannot detect the final class. The starter uses a CSS custom property with a complete arbitrary class instead:

```liquid
md:grid-cols-[repeat(var(--navigation-count),minmax(0,1fr))]
```

## GitHub Pages

The included `.github/workflows/pages.yml` builds Tailwind and Jekyll before deploying `_site`.

In GitHub:

1. Open **Settings → Pages**.
2. Set the source to **GitHub Actions**.
3. Push or merge into `main`.

For a custom domain, configure the domain in GitHub Pages settings and set `url` in `_config.yml`. Keep `baseurl` empty for a root custom domain.

