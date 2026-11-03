// Floyd & Company sample storefront
// Products, shows and reviews live in the three lists at the top of this file.

// ---------- PRODUCTS ----------
// confirmed:false = price was not readable on the booth tag, so it is a sample price.
const PRODUCTS = [
  {
    id: 'stink-stank-stunk',
    name: 'Stink Stank Stunk Christmas Sign',
    price: 70, confirmed: true, cat: 'christmas', badge: 'Best seller',
    img: 'images/stink-stank-stunk.jpg', w: 1100, h: 552,
    photos: [
      ['images/stink-stank-stunk.jpg', 'Full sign'],
      ['images/stink-stank-stunk-closeup.jpg', 'Close-up of the layered lettering'],
      ['images/stink-stank-stunk-corner.jpg', 'Corner detail and stained frame']
    ],
    short: 'Layered, hand-painted holiday sign in a dark stained frame.',
    desc: [
      'Our most popular holiday piece. Every letter, star, ornament and holly leaf is cut out on its own, painted by hand and layered onto a whitewashed shiplap board, so the design stands up off the sign in real 3D.',
      'Finished with a dark stained wood frame. It looks great over a mantel, in an entryway, or anywhere that needs some Grinchy Christmas cheer.'
    ],
    details: [['Size', '36 × 18 in (sample)'], ['Style', 'Layered wood cutouts on a whitewashed board'], ['Frame', 'Dark stained wood'], ['Colors', 'Christmas red, green and gold']]
  },
  {
    id: 'grinch-quote',
    name: 'How the Grinch Stole Christmas Quote Sign',
    price: 75, confirmed: true, cat: 'christmas',
    img: 'images/grinch-quote.jpg', w: 827, h: 1100,
    photos: [
      ['images/grinch-quote.jpg', 'Full sign'],
      ['images/grinch-quote-closeup.jpg', 'Close-up of the raised title letters']
    ],
    short: 'The classic “maybe Christmas means a little bit more” passage, framed.',
    desc: [
      'The famous ending from How the Grinch Stole Christmas, where he figures out that Christmas doesn’t come from a store. The title letters are cut out and raised in red and green, and the full passage is lettered underneath on a clean white board.',
      'Set in a natural stained wood frame. A favorite for families who read the book every December.'
    ],
    details: [['Size', '18 × 24 in (sample)'], ['Style', 'Raised cutout title, lettered quote'], ['Frame', 'Natural stained wood'], ['Hangs', 'Portrait (taller than wide)']]
  },
  {
    id: 'believe',
    name: 'Believe in the Magic of Christmas',
    price: 40, confirmed: false, cat: 'christmas',
    img: 'images/believe.jpg', w: 1100, h: 708,
    photos: [
      ['images/believe.jpg', 'Full sign'],
      ['images/believe-closeup.jpg', 'Close-up of the script and lettering']
    ],
    short: 'Flowing red script sign with a simple holiday message.',
    desc: [
      'A big, flowing “Believe” cut from wood and painted a rich Christmas red, raised above the words “In the Magic of Christmas” on a white board.',
      'Simple and clean, so it fits with any holiday decorating style. Hang it on the wall or lean it on a shelf with your Christmas decorations.'
    ],
    details: [['Size', '24 × 15 in (sample)'], ['Style', 'Raised script cutout on a white board'], ['Colors', 'Christmas red and black on white'], ['Season', 'Christmas']]
  },
  {
    id: 'tx-sign',
    name: 'TX Lone Star Sign',
    price: 65, confirmed: false, cat: 'texas',
    img: 'images/tx-sign.jpg', w: 1091, h: 1100,
    photos: [
      ['images/tx-sign.jpg', 'Full sign'],
      ['images/tx-sign-closeup.jpg', 'Close-up of the Texas cutout and star']
    ],
    short: 'Oversized TX letters with a natural-wood Texas cutout.',
    desc: [
      'Texas pride you can hang on the wall. Big white “TX” letters on a dark painted board, with a natural-wood cutout of the state in the middle and a lone star cut right through it.',
      'Square, bold and easy to read from across the room. Made for living rooms, game rooms, offices and ranch-style entryways. A good year-round piece.'
    ],
    details: [['Size', '24 × 24 in (sample)'], ['Style', 'Layered letters with a state cutout'], ['Colors', 'White and natural wood on charcoal'], ['Shape', 'Square']]
  },
  {
    id: 'nhl-map',
    name: 'NHL Arena Travel Map',
    price: 175, confirmed: false, cat: 'sports',
    img: 'images/nhl-map.jpg', w: 1100, h: 757,
    photos: [
      ['images/nhl-map.jpg', 'Full map'],
      ['images/nhl-map-closeup.jpg', 'Close-up of the engraved arenas and NHL shield']
    ],
    short: 'Laser-cut map of every NHL arena for the traveling hockey fan.',
    desc: [
      'A layered, laser-cut wood map of every NHL arena in the US and Canada. Each arena has a puck-shaped spot with its name engraved beside it, so you can keep track of every rink you’ve been to.',
      'The border is carved with skating players, goalie masks, sticks, and the US and Canadian flags, all set in a dark stained frame. A great gift for the hockey fan who travels to games.'
    ],
    details: [['Size', '36 × 24 in (sample)'], ['Style', 'Multi-layer laser-cut and engraved wood'], ['Frame', 'Dark stained wood'], ['Covers', 'US and Canadian NHL arenas']]
  },
  {
    id: 'laws-of-man',
    name: 'I Don’t Need the Laws of Man Sign',
    price: null, comingSoon: true, cat: 'texas', badge: 'Coming soon',
    img: 'images/laws-of-man-coming-soon.jpg', w: 829, h: 1100,
    short: 'Our newest western design, with a bronc rider cutout.',
    desc: [
      'Our newest design: “I don’t need the laws of man to tell me what I ought to do,” in bold western lettering with a cut-out bronc rider breaking through the middle.',
      'It’s still being finished in our workshop. Look for it at our next show, or check back here to order once it’s ready.'
    ],
    details: [['Size', 'To be announced'], ['Style', 'Raised western lettering with a bronc rider cutout'], ['Status', 'Coming soon']]
  }
];

// ---------- SHOWS ----------
// Dates are in East Texas (Central) time. First Monday runs Thursday–Sunday.
// Optional per show: hours (text shown to customers). On the real site these come from the admin area.
const SHOWS = [
  { name: 'First Monday Trade Days', where: 'Canton, TX', start: '2026-10-01', end: '2026-10-04' },
  { name: 'First Monday Trade Days', where: 'Canton, TX', start: '2026-10-29', end: '2026-11-01' },
  { name: 'First Monday Trade Days', where: 'Canton, TX', start: '2026-12-03', end: '2026-12-06' },
  { name: 'First Monday Trade Days', where: 'Canton, TX', start: '2026-12-31', end: '2027-01-03', projected: true },
  { name: 'First Monday Trade Days', where: 'Canton, TX', start: '2027-01-28', end: '2027-01-31', projected: true },
  { name: 'First Monday Trade Days', where: 'Canton, TX', start: '2027-02-25', end: '2027-02-28', projected: true }
];
const OPEN_HOUR = 8;          // 8 AM every day
const CLOSE_HOUR = 17;        // 5 PM Thursday–Saturday
const CLOSE_HOUR_SUNDAY = 16; // 4 PM Sunday

// ---------- SAMPLE REVIEWS ----------
const REVIEWS = [
  { name: 'Brenda M.', town: 'Tyler, TX', stars: 5, item: 'Stink Stank Stunk Christmas Sign', text: 'Walked past their booth twice at Canton and didn’t buy it. Kicked myself the whole drive home. So glad I could order it here. It looks even better on my mantel.' },
  { name: 'Ray C.', town: 'Mineola, TX', stars: 5, item: 'TX Lone Star Sign', text: 'Solid, heavy and painted clean. You can tell it’s handmade by people who care. Hangs in my shop now.' },
  { name: 'Danielle W.', town: 'Kaufman, TX', stars: 5, item: 'NHL Arena Travel Map', text: 'Bought this for my husband, who is a huge Stars fan. The detail in the carving is amazing. He’s already planning which arenas to hit next.' },
  { name: 'Patty L.', town: 'Athens, TX', stars: 5, item: 'How the Grinch Stole Christmas Quote Sign', text: 'Jim was so nice at the booth. I picked mine up at the next Trade Days and it was all wrapped and ready.' },
  { name: 'Marcus T.', town: 'Longview, TX', stars: 4, item: 'Believe in the Magic of Christmas', text: 'Beautiful red script, exactly like the one I saw in person. Took a little while to get to me during the holiday rush, but worth it.' },
  { name: 'Shelly R.', town: 'Canton, TX', stars: 5, item: 'Stink Stank Stunk Christmas Sign', text: 'Third sign I’ve bought from Floyd & Company. Everybody who comes over asks where I got it.' }
];

// ---------- GALLERY ----------
const GALLERY = [
  { img: 'images/great-lakes-map.jpg', cap: 'Great Lakes depth map, layered and painted in shades of blue', cls: 'big' },
  { img: 'images/booth-map-wall.jpg', cap: 'A full wall of our laser-cut travel maps', cls: 'tall' },
  { img: 'images/booth-believe.jpg', cap: 'Christmas signs and a North Pole display at our booth', cls: 'tall' },
  { img: 'images/booth-st-nicks.jpg', cap: 'St. Nick’s, “You Serious Clark?” and more holiday signs', cls: 'tall' },
  { img: 'images/booth-gingerbread.jpg', cap: 'Gingerbread Bakery and farmhouse signs on display', cls: 'tall' },
  { img: 'images/booth-thankful.jpg', cap: 'Thankful and Blessed fall sign', cls: 'tall' },
  { img: 'images/booth-maps-corner.jpg', cap: 'State maps, US maps and Amazing Grace signs', cls: 'tall' }
];

// =====================================================================

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const money = n => '$' + n.toFixed(2);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------- East Texas time helpers ----------
const TZ = 'America/Chicago';
const partsFmt = new Intl.DateTimeFormat('en-US', {
  timeZone: TZ, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit',
  hour: '2-digit', minute: '2-digit', second: '2-digit'
});
function tzOffset(utcMs) {
  const p = {};
  partsFmt.formatToParts(new Date(utcMs)).forEach(x => { p[x.type] = x.value; });
  const asUtc = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute, +p.second);
  return asUtc - Math.floor(utcMs / 1000) * 1000;
}
// A wall-clock time in Canton -> real moment (ms). Handles daylight saving.
function centralToMs(y, mo, d, h, mi) {
  const guess = Date.UTC(y, mo - 1, d, h, mi);
  let t = guess - tzOffset(guess);
  const off2 = tzOffset(t);
  if (guess - off2 !== t) t = guess - off2;
  return t;
}
function eachDay(startIso, endIso) {
  const out = [];
  const [ys, ms, ds] = startIso.split('-').map(Number);
  const end = Date.UTC(...endIso.split('-').map((v, i) => i === 1 ? +v - 1 : +v));
  for (let t = Date.UTC(ys, ms - 1, ds); t <= end; t += 86400000) {
    const dt = new Date(t);
    out.push({ y: dt.getUTCFullYear(), m: dt.getUTCMonth() + 1, d: dt.getUTCDate(), dow: dt.getUTCDay() });
  }
  return out;
}
function showWindows(show) {
  return eachDay(show.start, show.end).map(day => {
    const closeH = day.dow === 0 ? CLOSE_HOUR_SUNDAY : CLOSE_HOUR;
    return { open: centralToMs(day.y, day.m, day.d, OPEN_HOUR, 0), close: centralToMs(day.y, day.m, day.d, closeH, 0), closeH };
  });
}
const dayFmt = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', weekday: 'short', month: 'short', day: 'numeric' });
const yearFmt = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', year: 'numeric' });
const monFmt = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: 'short' });
function isoToUtcNoon(iso) { const [y, m, d] = iso.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d, 12)); }
function rangeLabel(show) {
  const a = isoToUtcNoon(show.start), b = isoToUtcNoon(show.end);
  return `${dayFmt.format(a)} – ${dayFmt.format(b)}, ${yearFmt.format(b)}`;
}
const clockFmt = new Intl.DateTimeFormat('en-US', { timeZone: TZ, weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit', timeZoneName: 'short' });

// ---------- Shows + countdown ----------
const showData = SHOWS.map(s => ({ ...s, windows: showWindows(s) }))
  .map(s => ({ ...s, firstOpen: s.windows[0].open, lastClose: s.windows[s.windows.length - 1].close }))
  .sort((a, b) => a.firstOpen - b.firstOpen);

function currentState(now) {
  for (const s of showData) {
    for (let i = 0; i < s.windows.length; i++) {
      const w = s.windows[i];
      if (now >= w.open && now < w.close) return { mode: 'live', show: s, target: w.close, closeH: w.closeH };
      if (now < w.open) return { mode: i === 0 ? 'next' : 'between', show: s, target: w.open };
    }
  }
  return { mode: 'none' };
}

function renderShowLists(now) {
  const upcoming = showData.filter(s => s.lastClose > now);
  const past = showData.filter(s => s.lastClose <= now).reverse();
  const nextId = upcoming[0];
  const li = (s, isNext) => {
    const d = isoToUtcNoon(s.start);
    const pills = (isNext ? `<span class="pill nxt">${s.firstOpen <= now ? 'Happening now' : 'Next'}</span>` : '') + (s.projected ? '<span class="pill proj">Projected</span>' : '');
    return `<li class="${isNext ? 'next' : ''}">
      <span class="cal" aria-hidden="true"><span class="mo">${monFmt.format(d)}</span><span class="dy">${d.getUTCDate()}</span></span>
      <span class="show-meta"><strong>${esc(s.name)}${pills}</strong><span>${esc(s.where)} · ${rangeLabel(s)}</span></span>
    </li>`;
  };
  $('#upcomingList').innerHTML = upcoming.length ? upcoming.map(s => li(s, s === nextId)).join('') : '<li><span></span><span class="show-meta">New dates coming soon.</span></li>';
  $('#pastList').innerHTML = past.length ? past.map(s => li(s, false)).join('') : '<li><span></span><span class="show-meta">No past shows listed yet.</span></li>';
}

let lastListRender = 0;
function setDigits(root, ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const v = { d: Math.floor(total / 86400), h: Math.floor(total % 86400 / 3600), m: Math.floor(total % 3600 / 60), s: total % 60 };
  $$('[data-unit]', root).forEach(el => {
    const u = el.dataset.unit;
    el.textContent = u === 'd' ? String(v.d) : String(v[u]).padStart(2, '0');
  });
}
function hourLabel(h) { return (h > 12 ? h - 12 : h) + (h >= 12 ? ' PM' : ' AM'); }

function tick() {
  const now = Date.now();
  $('#ctClock').textContent = clockFmt.format(new Date(now));
  const st = currentState(now);
  const boardStatus = $('#boardStatus');

  if (st.mode === 'none') {
    $('#heroStatusLabel').textContent = 'Next show';
    $('#heroShowName').textContent = 'New dates coming soon';
    $('#boardStatus').textContent = 'Check back soon';
    $('#boardName').textContent = 'New show dates coming soon';
    setDigits($('#heroCountdown'), 0); setDigits($('#boardCountdown'), 0);
  } else {
    const s = st.show;
    const remaining = st.target - now;
    let heroLabel, boardLabel;
    if (st.mode === 'live') {
      heroLabel = `Open now · until ${hourLabel(st.closeH)}`;
      boardLabel = `We're at the booth now · closes in`;
      boardStatus.classList.add('live');
    } else if (st.mode === 'between') {
      heroLabel = 'Booth opens again in';
      boardLabel = 'Booth opens again in';
      boardStatus.classList.remove('live');
    } else {
      heroLabel = 'Next show opens in';
      boardLabel = 'Next show opens in';
      boardStatus.classList.remove('live');
    }
    $('#heroStatusLabel').textContent = heroLabel;
    boardStatus.textContent = boardLabel;
    $('#heroShowName').textContent = s.name;
    $('#boardName').textContent = s.name;
    $('#heroShowWhere').textContent = s.where;
    $('#boardWhere').textContent = s.where + ' · ' + (s.hours || '8 AM to 5 PM, Sunday until 4 PM');
    const dates = rangeLabel(s) + (s.projected ? ' (projected)' : '');
    $('#heroShowDates').textContent = dates;
    $('#boardDates').textContent = dates;
    setDigits($('#heroCountdown'), remaining);
    setDigits($('#boardCountdown'), remaining);
  }
  if (now - lastListRender > 60000) { renderShowLists(now); lastListRender = now; }
}

// ---------- Products ----------
function priceTag(p) {
  if (p.comingSoon) return '<span class="price-tag soon">Soon!</span>';
  return `<span class="price-tag">$${p.price}${p.confirmed ? '' : '<small>sample</small>'}</span>`;
}
function renderProducts() {
  $('#productGrid').innerHTML = PRODUCTS.map(p => `
    <article class="product" data-cat="${p.cat}">
      <button type="button" class="product-photo" data-open="${p.id}" aria-label="View details for ${esc(p.name)}">
        <img src="${p.img}" alt="${esc(p.name)}" width="${p.w}" height="${p.h}" loading="lazy">
        ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ''}
        ${priceTag(p)}
        ${p.photos && p.photos.length > 1 ? `<span class="photo-count">${p.photos.length} photos</span>` : ''}
      </button>
      <div class="product-body">
        <h3><button type="button" data-open="${p.id}">${esc(p.name)}</button></h3>
        <p>${esc(p.short)}</p>
        <div class="product-actions">
          <button type="button" class="btn btn-outline" data-open="${p.id}">Details</button>
          ${p.comingSoon ? '<button type="button" class="btn btn-dark" disabled>Coming soon</button>' : `<button type="button" class="btn btn-dark" data-add="${p.id}">Add to cart</button>`}
        </div>
      </div>
    </article>`).join('');
}

function setupFilters() {
  $$('.chip').forEach(chip => chip.addEventListener('click', () => {
    $$('.chip').forEach(c => c.classList.toggle('is-on', c === chip));
    const f = chip.dataset.filter;
    $$('.product').forEach(card => { card.hidden = !(f === 'all' || card.dataset.cat === f); });
  }));
}

// ---------- Product detail ----------
let modalEl = null;
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  closeProduct();
  const photos = p.photos && p.photos.length ? p.photos : [[p.img, p.name]];
  modalEl = document.createElement('div');
  modalEl.className = 'modal-scrim';
  modalEl.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button type="button" class="close-btn modal-close" data-close>Close</button>
      <div class="modal-photo">
        <div class="modal-main"><img id="modalMain" src="${p.img}" alt="${esc(p.name)}"></div>
        ${photos.length > 1 ? `<div class="thumbs" role="group" aria-label="Product photos">${photos.map(([src, cap], i) => `<button type="button" class="thumb${i === 0 ? ' is-on' : ''}" data-photo="${i}" aria-label="Show photo: ${esc(cap)}"><img src="${src}" alt=""></button>`).join('')}</div>` : ''}
        <p class="photo-cap" id="modalCap">${esc(photos[0][1])}</p>
      </div>
      <div class="modal-info">
        <h2 id="modalTitle">${esc(p.name)}</h2>
        <p class="modal-price">${p.comingSoon ? 'Coming soon' : `$${p.price}${p.confirmed ? '' : '<small>sample price</small>'}`}</p>
        <div class="modal-desc">${p.desc.map(t => `<p>${esc(t)}</p>`).join('')}</div>
        <ul class="modal-details">
          ${p.details.map(([k, v]) => `<li><b>${esc(k)}</b><span>${esc(v)}</span></li>`).join('')}
          <li><b>Made by</b><span>Hand, by the Floyd family in East Texas</span></li>
          <li><b>Get it</b><span>Pick up free at our next show, or have it shipped</span></li>
        </ul>
        ${p.comingSoon ? '<p class="soon-note">Not ready to order yet. Ask about it at our next show.</p>' : `<button type="button" class="btn btn-dark full" data-add="${p.id}">Add to cart · $${p.price}</button>`}
      </div>
    </div>`;
  document.body.appendChild(modalEl);
  document.body.classList.add('locked');
  modalEl.addEventListener('click', e => {
    if (e.target === modalEl || e.target.closest('[data-close]')) { closeProduct(); return; }
    const t = e.target.closest('[data-photo]');
    if (t) {
      const [src, cap] = photos[+t.dataset.photo];
      $('#modalMain', modalEl).src = src;
      $('#modalMain', modalEl).alt = p.name + ': ' + cap;
      $('#modalCap', modalEl).textContent = cap;
      $$('.thumb', modalEl).forEach(b => b.classList.toggle('is-on', b === t));
    }
  });
  $('[data-close]', modalEl).focus();
}
function closeProduct() {
  if (!modalEl) return;
  modalEl.remove(); modalEl = null;
  if (!$('#drawer').classList.contains('open')) document.body.classList.remove('locked');
}

// ---------- Cart ----------
const CART_KEY = 'floydco_cart';
let cart = {};
try { cart = JSON.parse(localStorage.getItem(CART_KEY) || '{}') || {}; } catch (e) { cart = {}; }
function saveCart() { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* storage blocked: cart still works for this visit */ } }

function renderCart() {
  const ids = Object.keys(cart).filter(id => cart[id] > 0 && PRODUCTS.some(p => p.id === id && !p.comingSoon));
  const count = ids.reduce((n, id) => n + cart[id], 0);
  $('#cartCount').textContent = count;
  let total = 0;
  $('#cartItems').innerHTML = ids.length ? ids.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    const line = p.price * cart[id]; total += line;
    return `<div class="cart-line">
      <img src="${p.img}" alt="">
      <div class="nm">${esc(p.name)}
        <div class="qty"><button type="button" data-dec="${id}" aria-label="One less">−</button><span>${cart[id]}</span><button type="button" data-inc="${id}" aria-label="One more">+</button></div>
      </div>
      <span class="line-price">${money(line)}</span>
    </div>`;
  }).join('') : '<p class="empty-cart">Your cart is empty.</p>';
  $('#cartTotal').textContent = money(total);
}
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  cart[id] = (cart[id] || 0) + 1;
  saveCart(); renderCart();
  toast(`Added ${p.name} to your cart`);
}
function openCart() {
  closeProduct();
  $('#drawer').classList.add('open'); $('#drawer').setAttribute('aria-hidden', 'false');
  $('#scrim').hidden = false; document.body.classList.add('locked');
  $('#closeCart').focus();
}
function closeCart() {
  $('#drawer').classList.remove('open'); $('#drawer').setAttribute('aria-hidden', 'true');
  $('#scrim').hidden = true; document.body.classList.remove('locked');
  $('#checkoutNote').hidden = true;
}

let toastTimer;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

// ---------- Gallery + lightbox ----------
function renderGallery() {
  $('#galleryGrid').innerHTML = GALLERY.map((g, i) => g.empty
    ? `<div class="g-item g-empty ${g.cls || ''}"><span><strong>${esc(g.empty)}</strong>${esc(g.note)}</span></div>`
    : `<button type="button" class="g-item ${g.cls || ''}" data-lb="${i}" aria-label="Enlarge photo: ${esc(g.cap)}"><img src="${g.img}" alt="${esc(g.cap)}" loading="lazy"></button>`
  ).join('');
}
function openLightbox(i) {
  const g = GALLERY[i];
  $('#lbImg').src = g.img; $('#lbImg').alt = g.cap; $('#lbCap').textContent = g.cap;
  $('#lightbox').hidden = false; document.body.classList.add('locked'); $('#lbClose').focus();
}
function closeLightbox() { $('#lightbox').hidden = true; document.body.classList.remove('locked'); }

// ---------- Reviews ----------
function renderReviews() {
  const avg = REVIEWS.reduce((n, r) => n + r.stars, 0) / REVIEWS.length;
  $('#ratingText').textContent = `${avg.toFixed(1)} from ${REVIEWS.length} sample reviews`;
  $('#reviewGrid').innerHTML = REVIEWS.map(r => `
    <article class="review">
      <span class="stars" aria-label="${r.stars} out of 5 stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</span>
      <blockquote>${esc(r.text)}</blockquote>
      <span class="bought">Bought: ${esc(r.item)}</span>
      <footer><strong>${esc(r.name)}</strong><span>${esc(r.town)}</span></footer>
    </article>`).join('');
}

// ---------- Wire up ----------
function setup() {
  renderProducts(); setupFilters(); renderCart(); renderGallery(); renderReviews();
  tick(); setInterval(tick, 1000);

  document.addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    if (add) { addToCart(add.dataset.add); return; }
    const open = e.target.closest('[data-open]');
    if (open) { openProduct(open.dataset.open); return; }
    const inc = e.target.closest('[data-inc]');
    if (inc) { cart[inc.dataset.inc]++; saveCart(); renderCart(); return; }
    const dec = e.target.closest('[data-dec]');
    if (dec) { const id = dec.dataset.dec; cart[id]--; if (cart[id] <= 0) delete cart[id]; saveCart(); renderCart(); return; }
    const lb = e.target.closest('[data-lb]');
    if (lb) { openLightbox(+lb.dataset.lb); return; }
  });

  $('#cartBtn').addEventListener('click', openCart);
  $('#closeCart').addEventListener('click', closeCart);
  $('#scrim').addEventListener('click', closeCart);
  $('#checkoutBtn').addEventListener('click', () => { $('#checkoutNote').hidden = false; });
  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!$('#lightbox').hidden) closeLightbox();
    else if (modalEl) closeProduct();
    else if ($('#drawer').classList.contains('open')) closeCart();
  });

  const menuBtn = $('#menuBtn'), links = $('#navLinks');
  menuBtn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? 'Close' : 'Menu';
  });
  $$('a', links).forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.textContent = 'Menu';
  }));

  $$('.copy-btn').forEach(btn => btn.addEventListener('click', () => {
    const text = btn.dataset.copy;
    const fallback = () => { const r = document.createRange(); r.selectNodeContents($('#phoneText')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); toast('Number selected. Copy it from your menu.'); };
    try {
      navigator.clipboard.writeText(text).then(() => toast('Phone number copied'), fallback);
    } catch (e) { fallback(); }
  }));
}
setup();
