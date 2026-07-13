# Portal Frontend Preview

Developer preview for a future Make AI Visible upload portal.

The live public website is [makeaivisible.org](https://makeaivisible.org). This
repository is not the live website today; it holds a small GitHub-hosted reference
prototype for the future privacy-first upload flow.

This repository owns the contributor-facing flow for teens who want to donate AI conversation exports to research. The MVP focuses on a no-login upload path, clear consent language, platform-specific export guidance, and accessible status feedback.

## MVP Scope

- Explain what data is being donated and what will happen to it.
- Guide contributors through exports from ChatGPT, Claude, Gemini, Copilot, and other common AI tools.
- Accept conversation export files and submit them to the anonymization service.
- Show validation, upload progress, and privacy-first success/failure states.
- Avoid collecting accounts, passwords, social profiles, or unnecessary personal details.

## Privacy Boundary

The frontend should never persist raw conversation exports beyond the active upload session. Raw files must be sent only to the anonymization service endpoint, and the UI should communicate that raw text is not published.

## Suggested Stack

- React or Next.js for the web app.
- TypeScript for contributor-safe maintainability.
- Playwright or equivalent for upload-flow checks.
- WCAG 2.2 AA accessibility target.

## First Milestone

Build a static, mobile-first upload prototype wired to a mock anonymization endpoint, with consent copy and export instructions ready for review.

## Current Prototype

This repo includes a static upload preview that can be opened directly in a browser:

```bash
open index.html
```

The preview includes:

- Plain-language consent and privacy reminders.
- File selection for supported export-like formats: JSON, TXT, CSV, and ZIP.
- Validation, ready, and mock-success states.
- Platform guidance for ChatGPT, Claude, Gemini, and Copilot.
- A mock anonymization result that documents the intended `POST /anonymize` boundary.

No file is uploaded or persisted by this static preview. It is meant to help developers
understand the future contributor-facing flow before it is integrated with the live site
and a deployed anonymization service.

## Developer Notes

- [src/README.md](src/README.md) explains the upload prototype JavaScript.
- [scripts/README.md](scripts/README.md) explains the lightweight CI validation.
