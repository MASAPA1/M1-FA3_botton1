document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.getElementById('txtInput');
  const btn = document.getElementById('btnReplaceAll');
  const outIn = document.getElementById('displayInput');
  const outOut = document.getElementById('displayOutput');

  const homeOutput = document.getElementById('btnHomeOutput');

  function removeSpaces(text) {
    return String(text || '').replace(/\s+/g, '');
  }

  if (btn && inputEl && outIn && outOut) {
    btn.addEventListener('click', () => {
      const raw = inputEl.value || '';
      outIn.textContent = raw || '-';
      outOut.textContent = removeSpaces(raw) || '-';
    });
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') btn.click();
    });
  }

  const homeUrl = 'https://masapa1.github.io/M1-FA3/';
  if (homeOutput) {
    homeOutput.addEventListener('click', () => {
      window.location.href = homeUrl;
    });
  }
});
