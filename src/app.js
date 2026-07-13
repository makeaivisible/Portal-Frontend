const consent = document.querySelector("#consent");
const fileInput = document.querySelector("#file-input");
const fileSummary = document.querySelector("#file-summary");
const submitButton = document.querySelector("#submit-button");
const statusText = document.querySelector("#status");
const result = document.querySelector("#result");

const supportedExtensions = [".json", ".txt", ".csv", ".zip"];

function selectedFile() {
  return fileInput.files && fileInput.files.length > 0 ? fileInput.files[0] : null;
}

function isSupported(file) {
  return supportedExtensions.some((extension) => file.name.toLowerCase().endsWith(extension));
}

function updateState() {
  const file = selectedFile();
  const hasConsent = consent.checked;

  if (!file) {
    fileSummary.textContent = "Choose a synthetic ChatGPT, Claude, Gemini, or Copilot export file.";
    statusText.textContent = hasConsent ? "Waiting for a file." : "Waiting for consent and a file.";
    submitButton.disabled = true;
    return;
  }

  fileSummary.textContent = `${file.name} (${Math.ceil(file.size / 1024)} KB)`;

  if (!isSupported(file)) {
    statusText.textContent = "Unsupported file type. Use JSON, TXT, CSV, or ZIP.";
    submitButton.disabled = true;
    return;
  }

  statusText.textContent = hasConsent ? "Ready to validate." : "Consent is required before upload.";
  submitButton.disabled = !hasConsent;
}

function mockAnonymize() {
  const file = selectedFile();
  if (!file) return;

  statusText.textContent = "Validated locally. This is a GitHub preview, not the live site.";
  result.textContent = JSON.stringify(
    {
      upload_status: "preview_only",
      file_name: file.name,
      live_website: "https://makeaivisible.org",
      final_mvp_direction: "authorized connectors for major LLM platforms",
      anonymization_service: "POST /anonymize",
      raw_file_persisted: false,
      manual_upload_role: "fallback for early testing",
      next_review_step: "privacy review before connector sync, scoring, or publication",
    },
    null,
    2,
  );
}

consent.addEventListener("change", updateState);
fileInput.addEventListener("change", updateState);
submitButton.addEventListener("click", mockAnonymize);
updateState();
