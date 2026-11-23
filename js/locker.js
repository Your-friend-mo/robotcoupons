// RobotCoupons Official Content Locker & Offer Feed Integration
// User ID: 831501 | Public Key: 8902c82579eec05db438 | Offers API Key: 4a1d7b7a9f26dbe08fc3a0b059296411
(function () {
  const CPABUILD_CONFIG = {
    userId: '831501',
    publicKey: '8902c82579eec05db438',
    apiKeyOffers: '4a1d7b7a9f26dbe08fc3a0b059296411',
    feedUrl: 'https://dtvpp42hfuyb2.cloudfront.net/public/offers/feed.php?user_id=831501&api_key=4a1d7b7a9f26dbe08fc3a0b059296411&s1=&s2='
  };

  // Fallback live offers for user 831501 (retrieved from live feed)
  const FALLBACK_OFFERS = [
    {
      id: "f0J6oYMrKhRm5E3",
      name: "Ball Catcher",
      anchor: "Catch the footballs to unlock your exclusive offer!",
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
      anchor: "Click to receive your instant reward!",
      conversion: "Complete the survey",
      network_icon: "https://cdn.affise.com/affise-media-service-prod/offers/959/31462/1353090480.200x200.jpeg",
      url: "https://oak.hoprly.com/a?p=o0J7NAb5C87OEGJ&o=f0J6oYS7H9PKTD1&s7=null&s8=null&s9=140f7d90c8d4",
      impression_url: "https://oak.hoprly.com/i?p=o0J7NAb5C87OEGJ&o=f0J6oYS7H9PKTD1"
    },
    {
      id: "f0J6oYRgmU5KIhZ",
      name: "Tap Rewards - Special Bonus",
      anchor: "Claim your exclusive bonus now!",
      conversion: "Complete the survey",
      network_icon: "https://cdn.affise.com/affise-media-service-prod/offers/959/31721/3939496644.200x200.jpeg",
      url: "https://oak.hoprly.com/a?p=o0J7NAb5C87OEGJ&o=f0J6oYRgmU5KIhZ&s7=null&s8=null&s9=140f7d90c8d4",
      impression_url: "https://oak.hoprly.com/i?p=o0J7NAb5C87OEGJ&o=f0J6oYRgmU5KIhZ"
    },
    {
      id: "f0J6oYNbIayhajj",
      name: "Score a Goal",
      anchor: "Score and claim your special reward!",
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

  let currentOffers = FALLBACK_OFFERS;

  // Fetch live offers from CPABuild / CloudFront API
  function fetchLiveOffers() {
    return fetch(CPABUILD_CONFIG.feedUrl)
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          currentOffers = data;
        } else if (data && Array.isArray(data.value) && data.value.length > 0) {
          currentOffers = data.value;
        }
        return currentOffers;
      })
      .catch(() => {
        // Fallback to pre-cached live offers
        return currentOffers;
      });
  }

  function renderOffersHtml(offers) {
    return offers.map(offer => `
      <a href="${offer.url}" target="_blank" rel="noopener noreferrer" class="locker-offer-item" data-offer-id="${offer.id}" data-impression="${offer.impression_url || ''}">
        <img src="${offer.network_icon}" alt="${offer.name}" class="offer-icon" loading="lazy" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'44\\' height=\\'44\\' fill=\\'%23ff4545\\'><rect width=\\'44\\' height=\\'44\\' rx=\\'8\\'/></svg>'">
        <div class="offer-info">
          <div class="offer-name">${offer.name}</div>
          <div class="offer-desc">${offer.anchor}</div>
          <div class="offer-conv">${offer.conversion}</div>
        </div>
        <span class="offer-action-btn">Complete</span>
      </a>
    `).join('');
  }

  window.ROBOT_LOCKER = {
    config: CPABUILD_CONFIG,
    getOffers: function () {
      return currentOffers;
    },
    fetchLiveOffers: fetchLiveOffers,
    renderOffersHtml: renderOffersHtml
  };

  // Kick off background fetch
  fetchLiveOffers();
})();
