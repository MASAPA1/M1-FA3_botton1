document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.getElementById('txtInput');
  const btn = document.getElementById('btnReplaceAll');
  const outIn = document.getElementById('displayInput');
  const outOut = document.getElementById('displayOutput');

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
});