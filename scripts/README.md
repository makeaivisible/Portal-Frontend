# Validation Scripts

This folder contains simple repository checks that run in CI.

`validate.mjs` confirms the static prototype still has the expected files and important
privacy-related UI hooks. It is intentionally lightweight so contributors can understand
and run it without a build system.

Run it locally with:

```bash
node scripts/validate.mjs
```

If this repo later moves to React, Next.js, or another framework, keep a similarly small
check that verifies the upload flow still has consent, file validation, and mock/result
states.
