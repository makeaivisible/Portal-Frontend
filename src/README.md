# Portal Prototype Code

This folder holds the small JavaScript layer for the static upload prototype.

## What `app.js` Does

- Reads the consent checkbox and file input from `index.html`.
- Enables the submit button only when consent is checked and a supported file is chosen.
- Accepts export-like file extensions: `.json`, `.txt`, `.csv`, and `.zip`.
- Shows status text for waiting, unsupported file, ready, and mock-success states.
- Writes a mock anonymization result into the page.

## What It Does Not Do Yet

- It does not upload files.
- It does not call a real API.
- It does not store raw text in a database, local storage, or analytics service.

## First Place To Edit

Start in `app.js` if you are changing upload validation or connecting this prototype to
the anonymization service. Keep privacy language in `index.html` aligned with the
governance repo before accepting real submissions.
