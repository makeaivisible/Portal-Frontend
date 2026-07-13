# Portal Frontend Preview

Developer preview for a future Make AI Visible connector portal.

The live public website is [makeaivisible.org](https://makeaivisible.org). This
repository is not the live website today; it holds a small GitHub-hosted reference
prototype for the future privacy-first upload flow.

This repository owns the contributor-facing flow for people who want to connect their AI
conversation history to Make AI Visible. The final MVP should connect to major LLM
platforms directly, so contributors do not have to manually upload chat exports. After
clear opt-in authorization, their eligible chats can sync in the background and their
results can be viewed on the website.

Manual file upload remains useful as a fallback and developer reference, but it is not
the intended long-term contributor experience.

## MVP Scope

- Explain what data is being donated and what will happen to it.
- Support connectors for major LLM platforms such as ChatGPT, Claude, Gemini, Copilot, and other common AI tools.
- Let contributors authorize ongoing sync instead of manually uploading chats.
- Keep manual conversation export upload as a fallback path.
- Submit authorized conversation data to the anonymization service.
- Show validation, upload progress, and privacy-first success/failure states.
- Avoid collecting accounts, passwords, social profiles, or unnecessary personal details.

## Privacy Boundary

The frontend should never persist raw conversation exports beyond the active upload or
authorized connector sync session. Raw files or synced chats must be sent only to the
anonymization service endpoint, and the UI should communicate that raw text is not
published. Connector sync must be opt-in, revocable, and clear about what is collected.

## Suggested Stack

- React or Next.js for the web app.
- TypeScript for contributor-safe maintainability.
- Playwright or equivalent for upload-flow checks.
- WCAG 2.2 AA accessibility target.

## First Milestone

Build a static, mobile-first connector/upload preview wired to a mock anonymization
endpoint, with consent copy and platform instructions ready for review.

## Current Prototype

This repo includes a static upload preview that can be opened directly in a browser:

```bash
open index.html
```

The preview includes:

- Plain-language consent and privacy reminders.
- Coming-soon connector language for major LLM platforms.
- File selection for supported export-like formats: JSON, TXT, CSV, and ZIP as a fallback.
- Validation, ready, and mock-success states.
- Platform guidance for ChatGPT, Claude, Gemini, and Copilot.
- A mock anonymization result that documents the intended `POST /anonymize` boundary.

No file is uploaded or persisted by this static preview. It is meant to help developers
understand the future contributor-facing flow before it is integrated with the live site
and a deployed anonymization service.

## Developer Notes

- [src/README.md](src/README.md) explains the upload prototype JavaScript.
- [scripts/README.md](scripts/README.md) explains the lightweight CI validation.
