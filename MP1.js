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

  btn.addEventListener('click', () => {
    const raw = inputEl.value || '';
    const result = removeSpaces(raw);
    outIn.textContent = raw || '-';
    outOut.textContent = result || '-';
  });

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') btn.click();
  });

  const homeUrl = 'https://masapa1.github.io/M1-FA3/';

  if (homeInput) {
    homeInput.addEventListener('click', () => {
      window.location.href = homeUrl;
    });
  }

  if (homeOutput) {
    homeOutput.addEventListener('click', () => {
      window.location.href = homeUrl;
    });
  }
});
