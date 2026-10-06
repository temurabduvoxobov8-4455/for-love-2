const no = document.getElementById('no');
const yes = document.getElementById('yes');

// No button runs away
function flee(e) {
  if (e && e.preventDefault) e.preventDefault();
  const w = no.offsetWidth;
  const h = no.offsetHeight;
  const pad = 12;
  no.style.position = 'fixed';
  no.style.left = Math.random() * (window.innerWidth - w - pad * 2) + pad + 'px';
  no.style.top = Math.random() * (window.innerHeight - h - pad * 2) + pad + 'px';
}

['mouseover', 'pointerdown', 'touchstart', 'focus'].forEach(ev =>
  no.addEventListener(ev, flee, { passive: false })
);
no.addEventListener('click', flee);

// Also run away when the mouse gets close
document.addEventListener('mousemove', e => {
  const r = no.getBoundingClientRect();
  const dx = e.clientX - (r.left + r.width / 2);
  const dy = e.clientY - (r.top + r.height / 2);
  if (Math.hypot(dx, dy) < 90) flee();
});

// Yes button shows the message
yes.addEventListener('click', () => {
  document.getElementById('msg').classList.add('show');
});

// Floating hearts
const box = document.getElementById('hearts');
for (let i = 0; i < 24; i++) {
  const s = document.createElement('span');
  s.className = 'heart';
  s.textContent = '??';
  s.style.left = Math.random() * 100 + '%';
  s.style.fontSize = 14 + Math.random() * 34 + 'px';
  s.style.animationDuration = 7 + Math.random() * 9 + 's';
  s.style.animationDelay = -Math.random() * 12 + 's';
  box.appendChild(s);
}