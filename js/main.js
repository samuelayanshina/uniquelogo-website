/* Uniquelogo Engineering — interactions */

// Current year in footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Nav: transparent over hero, solid after scrolling past it
const nav = document.querySelector('.nav');
function onScroll() {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
// Fit the giant hero wordmark to the container width (edge-to-edge, like ELEVENT)
const wordmark = document.querySelector('.hero__wordmark');
function fitWordmark() {
  if (!wordmark) return;
  // on mobile, don't auto-fit — let the CSS font-size handle it (prevents overflow)
  if (window.innerWidth <= 640) {
    wordmark.style.fontSize = '';
    return;
  }
  const container = wordmark.parentElement;
  const cs = getComputedStyle(container);
  const available = container.clientWidth
    - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
  const ref = 100;
  wordmark.style.fontSize = ref + 'px';
  const textWidth = wordmark.getBoundingClientRect().width;
  const scaled = ref * (available / textWidth);
  wordmark.style.fontSize = scaled + 'px';
}
fitWordmark();
window.addEventListener('resize', fitWordmark);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(fitWordmark);
}

// Mobile menu toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('show');
    burger.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      navLinks.classList.remove('show');
      burger.setAttribute('aria-expanded', 'false');
    })
  );
}

// FAQ accordion (one open at a time; first is open by default via HTML class)
const accItems = document.querySelectorAll('.acc__item');
// set initial height for any item marked open
accItems.forEach((item) => {
  const ans = item.querySelector('.acc__a');
  if (item.classList.contains('acc__item--open')) {
    ans.style.maxHeight = ans.scrollHeight + 'px';
  }
});
accItems.forEach((item) => {
  const btn = item.querySelector('.acc__q');
  const ans = item.querySelector('.acc__a');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('acc__item--open');
    accItems.forEach((i) => {
      i.classList.remove('acc__item--open');
      i.querySelector('.acc__a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('acc__item--open');
      ans.style.maxHeight = ans.scrollHeight + 'px';
    }
  });
});

// Copy account number
const copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    const acctEl = document.getElementById('acctNo');
    // grab the text before the button
    const text = acctEl.childNodes[0].textContent.trim();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    const original = copyBtn.textContent;
    copyBtn.textContent = 'Copied';
    setTimeout(() => (copyBtn.textContent = original), 1200);
  });
}

// Testimonials: hover a card to feature it up top (smooth fade)
(function () {
  const feature = document.getElementById('testiFeature');
  const featQuote = document.getElementById('featQuote');
  const featName = document.getElementById('featName');
  const featTitle = document.getElementById('featTitle');
  const cards = document.querySelectorAll('#testiRow .testi__card');
  if (!feature || !cards.length) return;

  let current = null;

  function setFeature(card) {
    if (card === current) return;
    current = card;
    // highlight active card
    cards.forEach((c) => c.classList.toggle('is-active', c === card));
    // fade out, swap, fade in
    feature.classList.add('is-swapping');
    setTimeout(() => {
      featQuote.innerHTML = '&ldquo;' + card.dataset.quote + '&rdquo;';
      featName.textContent = card.dataset.name;
      featTitle.textContent = card.dataset.title;
      feature.classList.remove('is-swapping');
    }, 180);
  }

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => setFeature(card));
    card.addEventListener('focus', () => setFeature(card));
    card.addEventListener('click', () => setFeature(card));
  });
})();
