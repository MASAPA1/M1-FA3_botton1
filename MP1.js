document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.getElementById('txtInput');
  const btn = document.getElementById('btnReplaceAll');
  const outIn = document.getElementById('displayInput');
  const outOut = document.getElementById('displayOutput');

  const homeInput = document.getElementById('btnHomeInput');
  const homeOutput = document.getElementById('btnHomeOutput');

  if (!inputEl || !btn || !outIn || !outOut) return;

  function removeSpaces(text) {
    return String(text || '').replace(/\s+/g, '');
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  btn.addEventListener('click', () => {
    const raw = inputEl.value || '';
    const result = removeSpaces(raw);
    outIn.textContent = raw || '-';
    outOut.textContent = result || '-';
  });

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') btn.click();
  });

  // Home buttons — change URL to desired home page
  const homeUrl = 'index.html'; // update to your desired home URL
  if (homeInput) homeInput.addEventListener('click', () => { window.location.href = homeUrl; });
  if (homeOutput) homeOutput.addEventListener('click', () => { window.location.href = homeUrl; });
});
