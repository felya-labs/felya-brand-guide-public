# FELYA Brand Guide

**Status:** Canonical source

**Version:** 2.0

**Updated:** August 2026

This document defines the essential identity of FELYA. The browser guide is its visual expression. The public Brand Data endpoints provide approved presentation values, normative rules and asset references in machine-readable form.

## Brand architecture

- **Master brand:** FELYA
- **Featured product:** PATON

FELYA is the company. PATON is the product and may use functional blue accents. The FELYA wordmark remains monochrome.

## Principles

### Human first

The human is the source, measure and acting agent. Technology extends human capability; it does not replace the human in the story.

### Physical, not abstract

Show mechanics, touch and real hardware. Avoid generic technology symbols and decorative futurism.

### Calm confidence

Use strong hierarchy, concise statements and deliberate negative space. Authority comes from clarity, not visual volume.

### Engineering is evidence

Prototypes, mechanisms and verifiable effects support every claim.

## Logo

The symbol combines four ideas:

- **Point: The human.** The source of intent and development.
- **Circle: The horizon.** The present range of human influence.
- **Flame: The technology.** A tool for human development.
- **Beyond: Capability extended.** The flame crosses the circle and expands that range.

### Usage

- Keep clear space equal to half the symbol height.
- Use the wordmark at a minimum digital width of 80 px.
- Use white on dark and black on light.
- Do not stretch, rotate, recolor or add effects.
- Use the symbol alone only for icons and the smallest system surfaces.
- Anatomy colors explain meaning only; production logos stay monochrome.

## Color & Modes

Light and Dark Mode carry equal authority and use the same hierarchy. Calibrate contrast separately rather than mechanically inverting values.

- Neutral colors dominate the composition.
- PATON Blue explains product, function, focus and active states.
- Strong Blue is reserved for short labels and high-contrast functional emphasis.
- Signal Gold is rare. It marks an exceptional event or explains the logo horizon; it is not a general accent.
- Do not apply PATON Blue or Signal Gold to the FELYA wordmark.

The exact approved values are published at `/brand-data/tokens.json`.

## Typography & Form

Manrope is the single brand typeface for display, text and interface copy.

- Display text uses weight 700, tight line height and controlled negative tracking.
- Body text uses weight 400–520 and generous line height.
- Eyebrows use weight 750, uppercase and 0.12 em letter spacing.
- Editorially compose claims in no more than two lines.
- Keep paragraph line lengths controlled and hierarchy unmistakable.

Continuous corners soften technical surfaces without making them playful:

- A standard radius inserts a fixed quarter circle between two straight edges. The direction is tangent at both joins, but curvature changes abruptly.
- A continuous corner varies curvature along the path so it approaches zero at the straight edges. The transition reads as one uninterrupted silhouette.
- Radius controls the size of the corner area. Corner shape controls how curvature travels through that area.
- FELYA uses a squircle profile as its continuous-corner shape, with `border-radius` retained as the stable fallback.

- Small: 8 px for compact inline actions.
- Medium: 14 px for controls and small surfaces.
- Large: 24 px for content frames and headers.
- Surface: 32 px for large immersive areas.
- Circles remain true circles.

## Imagery

Two image modes define the visual language:

### Product evidence

Show real hardware, readable mechanisms and honest materials. PATON Blue may identify product components. Do not hide engineering beneath atmospheric effects.

### Technical imagination

Use blueprint-like linework to explain a specific relationship between people and technology. Keep one scenario, one focal point, deliberate negative space and no more than two dominant color accents.

Light and Dark Mode use the same composition but are calibrated independently:

- **Light Mode:** pale blueprint surface, dark linework and white subject-bound illumination.
- **Dark Mode:** deep blue-black blueprint surface, light linework and restrained PATON-blue fog.
- **Grid:** a 40 px minor grid and 160 px major grid establish technical depth in both modes.
- **Fog:** follows the subject or functional focal point; it is never used as a generic vignette.
- **Linework:** remains precise and slightly transparent so the drawing integrates with the surface.

Across both modes:

- Start with the human context.
- Keep the physical mechanism understandable.
- Use composition to explain possibility, not to decorate empty space.

## Voice & Claims

The voice is concise, active, physical and evidence-led.

- Start with the person or the action.
- Describe what people and machines do.
- Prefer concrete verbs and observable effects.
- Avoid superlatives, generic startup language and unsupported promises.

### Approved claims

- **Product:** Your hands. Anywhere on Earth.
- **Presence:** Be there. From anywhere.
- **Engineering:** Craft. Connected.

Approved claims remain in English. Explanatory Brand Guide copy is maintained in German.

## Machine-readable outputs

- **Design Tokens:** `/brand-data/tokens.json` contains presentation values in DTCG 2025.10 format.
- **Brand System:** `/brand-data/brand-system.json` contains normative principles, rules, voice and claims.
- **Approved Assets:** `/brand-data/assets.json` identifies canonical public files and their intended uses.
- **Schemas:** `/brand-data/schemas/` documents the Brand System and Asset Manifest contracts.
- **AI discovery:** `/llms.txt` links language models and retrieval systems to the authoritative sources.

## Governance

The identity has three sources of truth:

- **Brand Guide:** principles, meaning, hierarchy, language and visual rules.
- **Design Tokens:** approved colors, typography, spacing and radii.
- **Approved Assets:** production-ready instances derived from those rules.

New brand decisions are documented in this source first, reflected in tokens where applicable, and only then exported into applications or public repositories. Decorative explorations and unfinished concepts do not belong in the canonical guide.
