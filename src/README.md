# Portal Prototype Code

This folder holds the small JavaScript layer for the static connector/upload preview.

## What `app.js` Does

- Reads the consent checkbox and file input from `index.html`.
- Enables the submit button only when consent is checked and a supported file is chosen.
- Accepts export-like file extensions: `.json`, `.txt`, `.csv`, and `.zip`.
- Shows status text for waiting, unsupported file, ready, and preview states.
- Writes a preview-only anonymization result into the page.
- Documents that the final MVP should use authorized connectors for major LLM platforms.

## What It Does Not Do Yet

- It does not upload files.
- It does not call a real API.
- It does not store raw text in a database, local storage, or analytics service.
- It does not connect to LLM accounts yet.

## First Place To Edit

Start in `app.js` if you are changing fallback upload validation or connecting this
preview to the anonymization service. Future connector work should stay opt-in,
revocable, and aligned with the governance repo before accepting real submissions.
