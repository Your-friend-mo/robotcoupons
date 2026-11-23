// RobotCoupons Clone Interactive Logic
(function () {
  const coupons = window.ROBOT_COUPONS || [];

  const STAR_SVG = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
  const FIVE_STARS = `<span class="stars" aria-label="5 out of 5 stars">${STAR_SVG.repeat(5)}</span>`;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ==================== HEADER CANVAS BACKGROUND ====================
  function initHeaderCanvas() {
    const canvas = document.getElementById('pagebg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];

    function resize() {
      const parent = canvas.parentElement;
      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;
      const count = Math.max(18, Math.floor(width / 45));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.4 + 1,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();
  }

  // ==================== SHARED MODALS ====================
  function openModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('open');
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-backdrop.open').forEach((m) => m.classList.remove('open'));
  }

  function initModals() {
    document.querySelectorAll('[data-open-modal]').forEach((btn) => {
      btn.addEventListener('click', () => openModal(btn.getAttribute('data-open-modal')));
    });

    document.querySelectorAll('[data-close-modal]').forEach((btn) => {
      btn.addEventListener('click', closeAllModals);
    });

    document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeAllModals();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllModals();
    });

    // Footer Info Modal Links
    document.querySelectorAll('[data-info]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const type = link.getAttribute('data-info');
        const titleEl = document.getElementById('infoModalTitle');
        const bodyEl = document.getElementById('infoModalBody');
        if (!titleEl || !bodyEl) return;

        if (type === 'terms') {
          titleEl.textContent = 'Terms of Use';
          bodyEl.innerHTML = `<p>Welcome to RobotCoupons. By accessing or using this website, you agree to browse and use listed promo codes and offers responsibly. Offers and stock counts are updated regularly and subject to availability.</p><p>All trademarks, logos, and brand names are the property of their respective owners.</p>`;
        } else if (type === 'privacy') {
          titleEl.textContent = 'Privacy Policy';
          bodyEl.innerHTML = `<p>RobotCoupons respects your privacy. We do not sell personal information. Basic usage analytics may be used to improve coupon availability and search relevance.</p>`;
        } else if (type === 'sitemap') {
          titleEl.textContent = 'Sitemap';
          bodyEl.innerHTML = `<ul style="padding-left: 18px; margin: 0;">${coupons
            .map((c) => `<li style="margin-bottom: 6px;"><a href="coupon.html?slug=${encodeURIComponent(c.slug)}" style="color: #ff4545; text-decoration: underline;">${escapeHtml(c.title)}</a></li>`)
            .join('')}</ul>`;
        }
        openModal('infoModal');
      });
    });
  }

  // ==================== CARD RENDERERS ====================
  function renderRowCard(c) {
    return `
      <div class="single-coupon coupon-row-card">
        <a href="coupon.html?slug=${encodeURIComponent(c.slug)}" class="coupon-row-left">
          <div class="coupon-row-thumb" style="background-image: ${c.image};"></div>
          <div class="coupon-row-info">
            <h6>${escapeHtml(c.title)}</h6>
            <div class="rating-wrapp">${FIVE_STARS} <span>${c.ratings} Ratings</span></div>
            <p class="one-line-small">${escapeHtml(c.shortDesc)}</p>
          </div>
        </a>
        <div class="coupon-row-right">
          <a href="coupon.html?slug=${encodeURIComponent(c.slug)}" class="btn btn-purple btn-search">See more</a>
          <div class="single-coupon-left">Coupons Left: ${c.couponsLeft}</div>
        </div>
      </div>
    `;
  }

  // ==================== HOMEPAGE LOGIC ====================
  function initHomePage() {
    const track = document.getElementById('topPicksTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const mostUsedList = document.getElementById('mostUsedList');
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('search-form');
    const searchWrap = document.getElementById('searchWrap');

    // 1. Render Top Picks Carousel
    const topPicks = coupons.filter((c) => c.topPick);
    if (track) {
      track.innerHTML = topPicks
        .map(
          (c) => `
        <div class="carousel-slide">
          <div class="single-coupon single-coupon-top">
            <a href="coupon.html?slug=${encodeURIComponent(c.slug)}" class="single-coupon-image-top" style="background-image: ${c.image};" aria-label="${escapeHtml(c.title)}"></a>
            <div class="single-coupon-body">
              <a href="coupon.html?slug=${encodeURIComponent(c.slug)}">
                <h5 class="card-title-truncate" title="${escapeHtml(c.title)}">${escapeHtml(c.title)}</h5>
              </a>
              <div class="rating-wrapp">${FIVE_STARS} <span>${c.ratings} Ratings</span></div>
              <a href="coupon.html?slug=${encodeURIComponent(c.slug)}" class="btn btn-purple btn-search card-cta">See more</a>
              <div class="single-coupon-left">Coupons Left: ${c.couponsLeft}</div>
            </div>
          </div>
        </div>
      `
        )
        .join('');

      let currentIndex = 0;

      function getVisibleCount() {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 2;
        if (window.innerWidth <= 1024) return 3;
        return 4;
      }

      function updateCarousel() {
        const visible = getVisibleCount();
        const maxIndex = Math.max(0, topPicks.length - visible);
        if (currentIndex > maxIndex) currentIndex = 0;
        if (currentIndex < 0) currentIndex = maxIndex;

        const slideEl = track.querySelector('.carousel-slide');
        if (!slideEl) return;
        const slideWidth = slideEl.getBoundingClientRect().width;
        const gap = 20;
        track.style.transform = `translateX(-${currentIndex * (slideWidth + gap)}px)`;
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          currentIndex -= 1;
          updateCarousel();
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          currentIndex += 1;
          updateCarousel();
        });
      }

      window.addEventListener('resize', updateCarousel);
      updateCarousel();
    }

    // 2. Render Today's Most Used Coupons
    if (mostUsedList) {
      mostUsedList.innerHTML = coupons.map(renderRowCard).join('');
    }

    // 3. Live Search Autocomplete
    if (searchInput && searchWrap) {
      function runSearch() {
        const q = searchInput.value.trim().toLowerCase();
        if (!q) {
          searchWrap.classList.remove('open');
          searchWrap.innerHTML = '';
          return;
        }
        const matches = coupons.filter(
          (c) =>
            c.title.toLowerCase().includes(q) ||
            c.shortDesc.toLowerCase().includes(q) ||
            c.slug.toLowerCase().includes(q)
        );
        if (matches.length === 0) {
          searchWrap.innerHTML = `<div class="search-empty">No coupons found for "<strong>${escapeHtml(q)}</strong>". Try searching for FC 25, Shein, Steam, or Pokemon.</div>`;
        } else {
          searchWrap.innerHTML = matches.slice(0, 6).map(renderRowCard).join('');
        }
        searchWrap.classList.add('open');
      }

      searchInput.addEventListener('input', runSearch);
      searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) runSearch();
      });

      if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
          e.preventDefault();
          runSearch();
        });
      }

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
          searchWrap.classList.remove('open');
        }
      });
    }
  }

  // ==================== DETAIL PAGE LOGIC ====================
  function initDetailPage() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug') || coupons[0].slug;
    const coupon = coupons.find((c) => c.slug === slug) || coupons[0];

    document.title = `${coupon.title} — Robot Coupons`;

    const titleEl = document.getElementById('detailTitle');
    const bannerEl = document.getElementById('detailBanner');
    const leftEl = document.getElementById('detailCouponsLeft');
    const offersEl = document.getElementById('offersList');
    const aboutEl = document.getElementById('detailAbout');
    const tipsEl = document.getElementById('detailTips');
    const ratingEl = document.getElementById('detailRatingWrap');

    if (titleEl) titleEl.textContent = coupon.title;
    if (bannerEl) bannerEl.style.backgroundImage = coupon.image;
    if (leftEl) leftEl.textContent = `Coupons Left: ${coupon.couponsLeft}`;
    if (aboutEl) aboutEl.textContent = coupon.about;
    if (tipsEl) tipsEl.textContent = coupon.tips;
    if (ratingEl) ratingEl.innerHTML = `${FIVE_STARS} <span>${coupon.ratings} Ratings</span>`;

    if (offersEl) {
      offersEl.innerHTML = coupon.offers
        .map(
          (offer, idx) => `
        <div class="single-coupon offer-card">
          <div class="title-short">${escapeHtml(offer.short)}</div>
          <div class="offer-middle">
            <h6>${escapeHtml(offer.title)}</h6>
            <p class="offer-details">${escapeHtml(offer.details)}</p>
          </div>
          <button type="button" class="btn btn-purple btn-search open-modal-btn" data-offer-index="${idx}">
            ${escapeHtml(offer.buttonText)}
          </button>
        </div>
      `
        )
        .join('');
    }

    // Show Code Modal Interaction
    const modalOfferType = document.getElementById('modalOfferType');
    const modalOfferTitle = document.getElementById('modalOfferTitle');
    const modalRemaining = document.getElementById('modalCouponsRemaining');
    const modalCodeBox = document.getElementById('modalCodeBox');
    const unlockBtn = document.getElementById('unlockCodeBtn');
    const loaderWrap = document.getElementById('loaderWrap');
    const loaderStatus = document.getElementById('loaderStatus');
    const progressFill = document.getElementById('progressFill');
    const copyFeedback = document.getElementById('copyFeedback');

    let activeOffer = null;
    let unlocked = false;
    let timerIds = [];

    function clearTimers() {
      timerIds.forEach(clearTimeout);
      timerIds = [];
    }

    document.querySelectorAll('.open-modal-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        clearTimers();
        const idx = Number(btn.getAttribute('data-offer-index'));
        activeOffer = coupon.offers[idx];
        unlocked = false;

        modalOfferType.textContent = activeOffer.short;
        modalOfferTitle.textContent = activeOffer.title;
        modalRemaining.textContent = `Coupons Left Remaining: ${coupon.couponsLeft}`;
        modalCodeBox.textContent = `${activeOffer.codePrefix}*******`;
        unlockBtn.textContent = 'Unlock Code';
        unlockBtn.disabled = false;
        loaderWrap.classList.remove('active');
        progressFill.style.width = '0%';
        copyFeedback.textContent = '';

        openModal('codeModal');
      });
    });

    if (unlockBtn) {
      unlockBtn.addEventListener('click', () => {
        if (!activeOffer) return;

        if (unlocked) {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(activeOffer.fullCode).then(() => {
              copyFeedback.textContent = 'Code copied to clipboard!';
            }).catch(() => {
              copyFeedback.textContent = `Code: ${activeOffer.fullCode}`;
            });
          } else {
            copyFeedback.textContent = `Code: ${activeOffer.fullCode}`;
          }
          return;
        }

        clearTimers();
        unlockBtn.disabled = true;
        unlockBtn.textContent = 'Unlocking...';
        loaderWrap.classList.add('active');
        loaderStatus.textContent = 'Connecting to coupon server...';
        progressFill.style.width = '25%';

        timerIds.push(
          setTimeout(() => {
            loaderStatus.textContent = 'Checking coupon availability...';
            progressFill.style.width = '65%';
          }, 550)
        );

        timerIds.push(
          setTimeout(() => {
            loaderStatus.textContent = 'Code Unlocked!';
            progressFill.style.width = '100%';
            modalCodeBox.textContent = activeOffer.fullCode;
            unlocked = true;
            unlockBtn.disabled = false;
            unlockBtn.textContent = 'Copy Code';
          }, 1250)
        );
      });
    }
  }

  // ==================== BOOTSTRAP ====================
  initHeaderCanvas();
  initModals();

  const page = document.body.getAttribute('data-page');
  if (page === 'home') {
    initHomePage();
  } else if (page === 'detail') {
    initDetailPage();
  }
})();
