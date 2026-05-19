// capstone deck — navigation, timer, speaker notes

(function () {
  'use strict';

  const slides = Array.from(document.querySelectorAll('.slide'));
  const total = slides.length;
  const hudLeftValue = document.querySelector('.hud-left .hud-value');
  const hudRightValue = document.querySelector('.hud-right .hud-value');
  const progress = document.getElementById('progress');
  const notesPanel = document.getElementById('notes-panel');
  const notesContent = document.getElementById('notes-content');
  const notesHint = document.getElementById('notes-hint');
  const help = document.getElementById('help');

  let current = 0;
  let started = false;
  let startedAt = 0;

  // progress dots
  for (let i = 0; i < total; i++) {
    const d = document.createElement('span');
    d.className = 'dot';
    d.dataset.i = i;
    d.addEventListener('click', () => go(i));
    progress.appendChild(d);
  }
  const dots = Array.from(progress.querySelectorAll('.dot'));

  function pad2(n) { return n < 10 ? '0' + n : '' + n; }

  function updateHud() {
    hudLeftValue.textContent = pad2(current + 1) + ' / ' + pad2(total);
    if (started) {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      const m = Math.floor(elapsed / 60);
      const s = elapsed % 60;
      hudRightValue.textContent = pad2(m) + ':' + pad2(s);
    } else {
      hudRightValue.textContent = '00:00';
    }
  }

  function updateNotes() {
    const notes = slides[current].querySelector('aside.notes');
    notesContent.innerHTML = notes ? notes.innerHTML : '<p class="muted">(no notes)</p>';
  }

  function go(i) {
    if (i < 0 || i >= total || i === current) return;
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    dots[current].classList.add('past');
    current = i;
    slides[current].classList.add('active');
    dots[current].classList.remove('past');
    dots[current].classList.add('active');
    for (let j = current + 1; j < total; j++) {
      dots[j].classList.remove('past');
    }
    if (!started && current > 0) {
      started = true;
      startedAt = Date.now();
    }
    updateHud();
    updateNotes();
  }

  function next() { go(current + 1); }
  function prev() { go(current - 1); }

  function toggleNotes() {
    notesPanel.classList.toggle('open');
    notesHint.classList.toggle('visible');
  }
  function closeNotes() {
    notesPanel.classList.remove('open');
    notesHint.classList.remove('visible');
  }
  function toggleHelp() { help.classList.toggle('open'); }
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  // keyboard
  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
      case 'l':
        e.preventDefault();
        next();
        break;
      case 'ArrowLeft':
      case 'PageUp':
      case 'h':
        e.preventDefault();
        prev();
        break;
      case 'Home':
        e.preventDefault();
        go(0);
        break;
      case 'End':
        e.preventDefault();
        go(total - 1);
        break;
      case 'n':
      case 'N':
        e.preventDefault();
        toggleNotes();
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      case '?':
      case '/':
        e.preventDefault();
        toggleHelp();
        break;
      case 'Escape':
        closeNotes();
        help.classList.remove('open');
        break;
      default:
        if (e.key >= '0' && e.key <= '9') {
          // jump to slide N (1-9, 0 = slide 10)
          const n = e.key === '0' ? 9 : parseInt(e.key, 10) - 1;
          if (n < total) go(n);
        }
    }
  });

  // click-to-advance (left half = back, right half = forward)
  document.addEventListener('click', (e) => {
    if (e.target.closest('.notes-panel') || e.target.closest('.help') ||
        e.target.closest('.dot') || e.target.tagName === 'A') return;
    if (e.clientX < window.innerWidth * 0.3) prev();
    else if (e.clientX > window.innerWidth * 0.7) next();
  });

  // timer update
  setInterval(updateHud, 1000);

  // init
  slides[0].classList.add('active');
  dots[0].classList.add('active');
  updateHud();
  updateNotes();
})();
