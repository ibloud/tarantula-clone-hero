# Ren-inspired tutor reconstruction

Recreated 5 October 2026 from the user's recovered mentor prompt and clarification: reuse Ren's existing published explanations to help students apply musical lessons, without requiring him to repeat himself. This is a reconstruction, not a recovered original Tarantula dialogue.

## Implemented
- `dist/tutor.html`, `tutor.css`, `tutor.js`: scripted conversational lesson.
- Four branches: rhythm/flow, vocal contrast, arrangement/space, beat licensing/release planning.
- Five stages: goal, source moment, observation, original exercise, reflection/revision.
- Written replies, hints, smaller exercises, reset, plain-text conversation download.
- Responsive layout, labeled form, focus styles, polite conversation announcements, no student HTML rendering.
- `dist/mentor-prompt.md`: reusable instructions for an open-ended custom GPT/MCP mentor.
- Home-page lesson entry; existing controller practice retained.

## Sources and limits
- Tarantula recording: https://www.youtube.com/watch?v=0DTrjpIb4QI (existing embed).
- Knox Hill & Ren Tarantula conversation: https://www.youtube.com/watch?v=8t4wisfnf4M . Located through Knox Hill's playlist listing at https://playlist.tools/playlist/PL63nfBXaPaGn6hVKpXygTNvRxE6OxXPsD/8t4wisfnf4M . Transcript and timestamps are not verified. No specific artist production claims are encoded.
- Ren's Sick Boi dispute account: https://www.youtube-nocookie.com/embed/K72abdMZbGA . Located in Sonicstate's embedded source: https://sonicstate.com/news/2024/09/02/rens-sick-boi-beatstars-sample-contraversy/ . Its detailed contents have not been verified.
- Rights distinction: https://www.copyright.gov/engage/musicians/ and https://www.copyright.gov/register/pa-sr.html . A sound recording and the underlying composition have distinct copyrights.

The user's Kujo summary is an unverified editorial input. Its alleged quote, DAW/stem details, demands and re-production sequence are not taught as facts. Re-recording, added arrangement or transformation does not automatically establish clearance or full ownership. The dispute explanation and Kujo Beat Down release must not be conflated.

## Validation
JavaScript syntax passed. A DOM-harness functional check passed all four branches, hints, smaller exercises, reset, empty-input handling, literal student text, source-boundary responses, and export generation. Browser QA was attempted but the runtime had no installed Chromium executable. Visual/iPad Safari and assistive-technology checks remain unverified.

## Not implemented
No generative model, API, MCP server, transcript retrieval, audio analysis, grading or PDS persistence. The prompt alone does not configure those systems. Replies exist only in tab memory; the user can export before closing. No claims of artist endorsement or identity.

## Canonical hosting

The tutor lives in the existing ibloud/tarantula-clone-hero GitHub repository and is served by GitHub Pages at https://ibloud.github.io/tarantula-clone-hero/tutor.html . The earlier separate Sites publication was unnecessary for this static example. No Railway service or model API is used. Reuse an existing backend only if a future approved generative capability requires one.
