(() => {
  'use strict';
  const config = window.KYNEX_CONFIG || {};
  const messages = {
    trial: 'Hello, I’d like to apply for the KyneX Scalper three-trading-day free trial.',
    partnership: 'Hello, I’d like to learn about the KyneX Scalper Returns Sharing Partnership.',
    purchase: 'Hello, I’d like to enquire about purchasing KyneX Scalper.'
  };
  const handle = String(config.telegramHandle || '').replace(/^@/, '');
  document.querySelectorAll('[data-contact]').forEach(link => {
    if (handle) link.href = `https://t.me/${encodeURIComponent(handle)}?text=${encodeURIComponent(messages[link.dataset.contact] || messages.trial)}`;
  });
  document.querySelectorAll('[data-year]').forEach(node => node.textContent = new Date().getFullYear());
  const reports = config.reports || [];
  document.querySelectorAll('[data-report-name]').forEach(node => {
    const report = reports[Number(node.dataset.reportName)];
    if (report) node.textContent = report.name;
  });
  document.querySelectorAll('[data-report-link]').forEach(node => {
    const report = reports[Number(node.dataset.reportLink)];
    if (report && /^https:\/\//.test(report.url)) node.href = report.url;
  });
  const items = (config.testimonials || []).filter(item => item.src && item.alt);
  const dialog = document.querySelector('#image-dialog');
  const dialogImage = document.querySelector('#dialog-image');
  let lastTrigger;
  function openImage(item, trigger) {
    lastTrigger = trigger;
    dialogImage.src = item.src;
    dialogImage.alt = item.alt;
    document.querySelector('#image-title').textContent = item.alt;
    dialog.showModal();
  }
  document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
  }});
  dialog.addEventListener('close', () => { if (lastTrigger && lastTrigger.isConnected) lastTrigger.focus(); });
  function imageButton(item, className) {
    const button = document.createElement('button');
    button.type = 'button'; button.className = className;
    button.setAttribute('aria-label', `Enlarge: ${item.alt}`);
    const image = document.createElement('img');
    image.src = item.src; image.alt = item.alt; image.loading = 'lazy'; image.decoding = 'async';
    button.append(image);
    button.addEventListener('click', () => openImage(item, button));
    return button;
  }
  const carousel = document.querySelector('#testimonial-carousel');
  if (carousel && items.length) {
    const slides = items.slice(0, 20);
    const stage = document.querySelector('#carousel-stage');
    const controls = document.querySelector('#carousel-controls');
    const prev = document.querySelector('#previous-slide');
    const next = document.querySelector('#next-slide');
    const toggle = document.querySelector('#toggle-rotation');
    const counter = document.querySelector('#slide-counter');
    const end = document.querySelector('#carousel-end');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let index = 0, playing = !reduced.matches && slides.length > 1, hovered = false, timer, touchX;
    controls.hidden = false;
    function schedule() {
      clearTimeout(timer);
      if (playing && !hovered && !document.hidden && !dialog.open) timer = setTimeout(() => {
        if (index < slides.length - 1) { index++; render(); } else { playing = false; update(); }
      }, Math.max(5000, Number(config.carouselDelay) || 8000));
    }
    function update() {
      prev.disabled = index === 0; next.disabled = index === slides.length - 1;
      toggle.textContent = playing ? 'Pause' : 'Play';
      toggle.setAttribute('aria-label', playing ? 'Pause automatic rotation' : 'Start automatic rotation');
      toggle.disabled = slides.length < 2;
      counter.textContent = `${index + 1} of ${slides.length}`;
      counter.setAttribute('aria-live', playing ? 'off' : 'polite');
      end.hidden = index !== slides.length - 1;
      schedule();
    }
    function render() {
      const button = imageButton(slides[index], 'slide-button');
      button.addEventListener('click', () => { playing = false; update(); });
      stage.replaceChildren(button);
      if (index === slides.length - 1) playing = false;
      update();
    }
    function move(delta) { playing = false; index = Math.max(0, Math.min(slides.length - 1, index + delta)); render(); }
    prev.addEventListener('click', () => move(-1)); next.addEventListener('click', () => move(1));
    toggle.addEventListener('click', () => {
      playing = !playing;
      if (playing && index === slides.length - 1) { index = 0; render(); } else update();
    });
    carousel.addEventListener('mouseenter', () => { hovered = true; schedule(); });
    carousel.addEventListener('mouseleave', () => { hovered = false; schedule(); });
    carousel.addEventListener('focusin', () => { playing = false; update(); });
    stage.addEventListener('touchstart', e => { touchX = e.changedTouches[0].screenX; }, {passive:true});
    stage.addEventListener('touchend', e => {
      const diff = e.changedTouches[0].screenX - touchX;
      if (Math.abs(diff) > 45) move(diff < 0 ? 1 : -1);
    }, {passive:true});
    document.addEventListener('visibilitychange', schedule);
    reduced.addEventListener('change', () => { if (reduced.matches) { playing = false; update(); } });
    render();
  }
  const gallery = document.querySelector('#testimonial-gallery');
  if (gallery && items.length) {
    document.querySelector('#gallery-empty').hidden = true;
    const more = document.querySelector('#load-more'); let shown = 0;
    function load() {
      const stop = Math.min(shown + 12, items.length);
      for (; shown < stop; shown++) gallery.append(imageButton(items[shown], 'gallery-item'));
      more.hidden = shown >= items.length;
    }
    more.addEventListener('click', load); load();
  }
})();
