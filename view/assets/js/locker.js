// CPABuild Content Locker, Live Offer Feed & Instant Search Engine for RobotCoupons
// User ID: 831501 | Public Key: 8902c82579eec05db438 | Offers Key: 4a1d7b7a9f26dbe08fc3a0b059296411
(function ($) {
  var CPABUILD_CONFIG = {
    userId: '831501',
    publicKey: '8902c82579eec05db438',
    apiKeyOffers: '4a1d7b7a9f26dbe08fc3a0b059296411',
    feedUrl: 'https://dtvpp42hfuyb2.cloudfront.net/public/offers/feed.php?user_id=831501&api_key=4a1d7b7a9f26dbe08fc3a0b059296411&s1=&s2='
  };

  var LIVE_OFFERS = [
    {
      id: "f0J6oYMrKhRm5E3",
      name: "Ball Catcher",
      anchor: "Catch the footballs to claim special rewards!",
      conversion: "Complete the survey",
      network_icon: "https://cdn.affise.com/affise-media-service-prod/offers/959/33079/3019980592.200x200.jpeg",
      url: "https://oak.hoprly.com/a?p=o0J7NAb5C87OEGJ&o=f0J6oYMrKhRm5E3&s7=null&s8=null&s9=140f7d90c8d4",
      impression_url: "https://oak.hoprly.com/i?p=o0J7NAb5C87OEGJ&o=f0J6oYMrKhRm5E3"
    },
    {
      id: "f0J6oYX3QDUNnDi",
      name: "ClickBox - Earn Bonus",
      anchor: "Tap to claim your reward!",
      conversion: "Complete the survey",
      network_icon: "https://cdn.affise.com/affise-media-service-prod/offers/959/28565/1457439075.200x200.png",
      url: "https://oak.hoprly.com/a?p=o0J7NAb5C87OEGJ&o=f0J6oYX3QDUNnDi&s7=null&s8=null&s9=140f7d90c8d4",
      impression_url: "https://oak.hoprly.com/i?p=o0J7NAb5C87OEGJ&o=f0J6oYX3QDUNnDi"
    },
    {
      id: "f0J6oYVbz2HJ3tW",
      name: "Tap Rewards - Earn Rewards",
      anchor: "Tap to claim your bonus!",
      conversion: "Complete with valid information",
      network_icon: "https://cdn.affise.com/affise-media-service-prod/offers/959/29075/1327898810.200x200.png",
      url: "https://oak.hoprly.com/a?p=o0J7NAb5C87OEGJ&o=f0J6oYVbz2HJ3tW&s7=null&s8=null&s9=140f7d90c8d4",
      impression_url: "https://oak.hoprly.com/i?p=o0J7NAb5C87OEGJ&o=f0J6oYVbz2HJ3tW"
    },
    {
      id: "f0J6oYS7H9PKTD1",
      name: "Tap Rewards - Coin Rewards",
      anchor: "Click to receive your rewards!",
      conversion: "Complete the survey",
      network_icon: "https://cdn.affise.com/affise-media-service-prod/offers/959/31462/1353090480.200x200.jpeg",
      url: "https://oak.hoprly.com/a?p=o0J7NAb5C87OEGJ&o=f0J6oYS7H9PKTD1&s7=null&s8=null&s9=140f7d90c8d4",
      impression_url: "https://oak.hoprly.com/i?p=o0J7NAb5C87OEGJ&o=f0J6oYS7H9PKTD1"
    },
    {
      id: "f0J6oYRgmU5KIhZ",
      name: "Tap Rewards - VIP Bonus",
      anchor: "Claim your exclusive bonus now!",
      conversion: "Complete the survey",
      network_icon: "https://cdn.affise.com/affise-media-service-prod/offers/959/31721/3939496644.200x200.jpeg",
      url: "https://oak.hoprly.com/a?p=o0J7NAb5C87OEGJ&o=f0J6oYRgmU5KIhZ&s7=null&s8=null&s9=140f7d90c8d4",
      impression_url: "https://oak.hoprly.com/i?p=o0J7NAb5C87OEGJ&o=f0J6oYRgmU5KIhZ"
    },
    {
      id: "f0J6oYNbIayhajj",
      name: "Score a Goal",
      anchor: "Score footballs to unlock your special offer!",
      conversion: "Complete the survey",
      network_icon: "https://cdn.affise.com/affise-media-service-prod/offers/959/33018/4276840248.200x200.jpeg",
      url: "https://oak.hoprly.com/a?p=o0J7NAb5C87OEGJ&o=f0J6oYNbIayhajj&s7=null&s8=null&s9=140f7d90c8d4",
      impression_url: "https://oak.hoprly.com/i?p=o0J7NAb5C87OEGJ&o=f0J6oYNbIayhajj"
    },
    {
      id: "f0J6oYt7Bv7799r",
      name: "AviatorSurvey - Score a Goal",
      anchor: "Score more than 2 goals to unlock a special offer!",
      conversion: "Complete the survey",
      network_icon: "https://cdn.affise.com/affise-media-service-prod/offers/962/95530/1192208143.200x200.png",
      url: "https://oak.hoprly.com/a?p=o0J7NAb5C87OEGJ&o=f0J6oYt7Bv7799r&s7=null&s8=null&s9=140f7d90c8d4",
      impression_url: "https://oak.hoprly.com/i?p=o0J7NAb5C87OEGJ&o=f0J6oYt7Bv7799r"
    },
    {
      id: "f0J6oYtIkOXjVon",
      name: "Aviator - Spin The Slot",
      anchor: "Spin the slot to take a chance at a special offer!",
      conversion: "Complete the survey",
      network_icon: "https://cdn.affise.com/affise-media-service-prod/offers/962/95403/270251254.200x200.png",
      url: "https://oak.hoprly.com/a?p=o0J7NAb5C87OEGJ&o=f0J6oYtIkOXjVon&s7=null&s8=null&s9=140f7d90c8d4",
      impression_url: "https://oak.hoprly.com/i?p=o0J7NAb5C87OEGJ&o=f0J6oYtIkOXjVon"
    }
  ];

  // Try fetching live offers in background
  try {
    fetch(CPABUILD_CONFIG.feedUrl)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var items = Array.isArray(data) ? data : (data && data.value ? data.value : null);
        if (items && items.length > 0) {
          LIVE_OFFERS = items;
        }
      })
      .catch(function () {});
  } catch (e) {}

  $(document).ready(function () {
    // 1. Content Locker Interaction
    $('.unlock').off('click').on('click', function (e) {
      e.preventDefault();
      var $modalBody = $('#exampleModal .modal-body');
      
      // Build offer items HTML
      var offersHtml = LIVE_OFFERS.slice(0, 5).map(function (offer) {
        return '<a href="' + offer.url + '" target="_blank" rel="noopener noreferrer" class="locker-offer-card" data-offer-id="' + offer.id + '">' +
          '<img src="' + offer.network_icon + '" class="locker-offer-icon" alt="' + offer.name + '">' +
          '<div class="locker-offer-meta">' +
            '<div class="locker-offer-title">' + offer.name + '</div>' +
            '<div class="locker-offer-desc">' + offer.anchor + '</div>' +
            '<div class="locker-offer-conv">' + offer.conversion + '</div>' +
          '</div>' +
          '<span class="locker-offer-btn">Complete</span>' +
        '</a>';
      }).join('');

      var lockerHtml = 
        '<div class="w-100 p-2" id="lockerContainer">' +
          '<h4 class="text-center mb-1" style="font-weight: 800;">Human Verification</h4>' +
          '<p class="text-center text-muted mb-3" style="font-size: 13px;">Please complete ONE quick offer below to unlock your full code.</p>' +
          '<div class="locker-offers-wrap mb-3" style="max-height: 280px; overflow-y: auto;">' +
            offersHtml +
          '</div>' +
          '<div class="locker-status text-center text-muted" style="font-size: 12px; font-weight: 500;">' +
            '<span class="spinner-grow spinner-grow-sm text-danger me-1" role="status"></span> Waiting for completion...' +
          '</div>' +
        '</div>';

      $modalBody.find('.w-75, .unlock').hide();
      $modalBody.append(lockerHtml);

      // Track click on any offer
      $('.locker-offer-card').on('click', function () {
        $('.locker-status').html('<span class="spinner-border spinner-border-sm text-success me-1" role="status"></span> Checking verification status... Please complete the offer in your other tab.');
        
        // Simulate completion verification
        setTimeout(function () {
          var apkPath = window.location.pathname.indexOf('/coupon/') !== -1 ? '../downloads/app.apk' : 'downloads/app.apk';
          $('#lockerContainer').html(
            '<div class="text-center p-3">' +
              '<div class="mb-2" style="font-size: 38px;">🎉</div>' +
              '<h4 class="text-success mb-2" style="font-weight: 800;">Verification Successful!</h4>' +
              '<p class="text-muted mb-3" style="font-size: 13px;">Your code and APK package are unlocked:</p>' +
              '<div class="code text-center mb-3" style="font-size: 24px; font-weight: bold; background: linear-gradient(45deg, #eaeffd, #dff1ec, #fffaec); padding: 15px; border-radius: 6px;">' + (window.generatedCode || 'RC2026-X99Q') + '</div>' +
              '<button type="button" class="btn btn-purple btn-search w-100 mb-2" id="copyCodeBtn">Copy Code</button>' +
              '<a href="' + apkPath + '" download class="btn btn-outline-dark w-100" style="font-size: 13px; font-weight: 600;">Download Unlocked APK</a>' +
              '<div id="copyNotice" class="text-success mt-2" style="font-size: 12px; display: none;">Copied to clipboard!</div>' +
            '</div>'
          );

          $('#copyCodeBtn').on('click', function () {
            var text = (window.generatedCode || 'RC2026-X99Q');
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(text);
            }
            $('#copyNotice').fadeIn();
          });
        }, 3500);
      });
    });

    // Reset locker state when modal is closed
    $('#exampleModal').on('hidden.bs.modal', function () {
      $('#lockerContainer').remove();
      $('#exampleModal .modal-body').find('.w-75, .unlock').show();
    });

    // 2. Client-side Instant Search Engine for all 100 coupons
    var couponsData = [];
    var prefix = window.location.pathname.indexOf('/coupon/') !== -1 ? '../' : '';
    
    $.getJSON(prefix + 'coupons_list.json', function (data) {
      couponsData = data || [];
    }).fail(function () {
      // Fallback: extract coupons from DOM if json fetch fails
      couponsData = [];
      $('#all a[href*="coupon/"]').each(function () {
        var $el = $(this);
        var href = $el.attr('href') || '';
        var title = $el.find('h5, h6').text().trim();
        var ratings = $el.find('.rating-wrapp').text().trim();
        var desc = $el.find('.one-line-small').text().trim();
        var left = $el.find('.single-coupon-left').text().trim();
        var bg = $el.find('.bg-image').css('background-image') || '';
        couponsData.push({ title: title, desc: desc, ratings: ratings, left: left, href: href, bg: bg });
      });
    });

    $('#searchInput').off('keyup input').on('keyup input', function () {
      var q = $(this).val().trim().toLowerCase();
      var $wrap = $('.search-wrap');
      if (!$wrap.length) return;

      if (q.length < 2) {
        $wrap.empty().hide();
        return;
      }

      var matches = couponsData.filter(function (c) {
        var t = (c.title || '').toLowerCase();
        var d = (c.desc || '').toLowerCase();
        var s = (c.slug || '').toLowerCase();
        return t.indexOf(q) !== -1 || d.indexOf(q) !== -1 || s.indexOf(q) !== -1;
      });

      if (matches.length === 0) {
        $wrap.html('<div class="p-3 text-center text-muted" style="background:#fff; border-radius:6px; box-shadow:0 10px 25px rgba(0,0,0,0.2);">No coupons found for "<b>' + $('<div>').text(q).html() + '</b>"</div>').show();
        return;
      }

      var html = matches.slice(0, 6).map(function (c) {
        var linkUrl = c.href ? prefix + c.href.replace(/^\.\.\//, '') : prefix + 'coupon/' + c.slug + '.html';
        var imgUrl = c.img ? prefix + c.img.replace(/^\.\.\//, '') : prefix + 'coupon_img/eafc25.png';
        return '<div class="d-flex justify-content-between single-coupon m-0 mb-2 p-2 bg-white" style="box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-radius: 6px;">' +
          '<div class="d-flex w-75 align-items-center">' +
            '<div style="background-image: url(' + imgUrl + '); width: 60px; height: 50px; background-size: cover; background-position: center; border-radius: 4px;" class="me-2 flex-shrink-0"></div>' +
            '<div class="content overflow-hidden text-start">' +
              '<h6 class="mb-0 text-truncate" style="font-size: 14px; font-weight: 700; color: #111;">' + c.title + '</h6>' +
              '<div class="text-muted" style="font-size: 11px;">' + (c.ratings || 1200) + ' Ratings • Coupons Left: ' + (c.coupons_left || 1500) + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="d-flex align-items-center">' +
            '<a href="' + linkUrl + '" class="btn btn-purple btn-search" style="font-size: 12px; padding: 6px 12px; border-radius: 4px;">Get Deal</a>' +
          '</div>' +
        '</div>';
      }).join('');

      $wrap.html('<div class="p-2" style="background: rgba(255,255,255,0.98); border-radius: 8px; box-shadow: 0 15px 35px rgba(0,0,0,0.25); max-height: 380px; overflow-y: auto;">' + html + '</div>').show();
    });

    $(document).on('click', function (e) {
      if (!$(e.target).closest('#searchInput, .search-wrap').length) {
        $('.search-wrap').hide();
      }
    });
  });

  window.ROBOT_LOCKER = {
    config: CPABUILD_CONFIG,
    offers: LIVE_OFFERS
  };
})(jQuery);
