# Portal Frontend

Mobile-first submission portal for Make AI Visible.

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
