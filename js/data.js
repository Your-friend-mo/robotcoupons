// RobotCoupons Catalog & Artwork Generator
(function () {
  function escXml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function makeBannerSvg({ bg1, bg2, accent, title, subtitle, badge, icon }) {
    const safeTitle = escXml(title);
    const safeSubtitle = escXml(subtitle);
    const safeBadge = escXml(badge);
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="600" height="360" fill="url(#g)"/>
  <rect width="600" height="360" fill="url(#glow)"/>
  <circle cx="520" cy="60" r="95" fill="#ffffff" fill-opacity="0.06"/>
  <circle cx="80" cy="310" r="110" fill="#ffffff" fill-opacity="0.05"/>
  ${safeBadge ? `<rect x="24" y="22" rx="14" width="134" height="28" fill="${accent}" fill-opacity="0.92"/>
  <text x="91" y="41" text-anchor="middle" font-family="Arial, sans-serif" font-weight="800" font-size="13" fill="#111111">${safeBadge}</text>` : ''}
  ${icon || ''}
  <text x="300" y="${safeSubtitle ? '200' : '195'}" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-weight="900" font-size="52" fill="#ffffff" letter-spacing="1.5">${safeTitle}</text>
  ${safeSubtitle ? `<text x="300" y="246" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-weight="700" font-size="22" fill="${accent}" letter-spacing="2">${safeSubtitle}</text>` : ''}
</svg>`.trim();
    const encoded = encodeURIComponent(svg).replace(/'/g, '%27');
    return `url('data:image/svg+xml;charset=UTF-8,${encoded}')`;
  }

  const COUPONS = [
    {
      slug: 'eafc25-s-coupons-deals',
      title: 'EA Sports FC 25 - Free Game Code',
      topPick: true,
      ratings: 5932,
      couponsLeft: 11372,
      shortDesc: 'EA Sports FC 25 Free Digital Game Code for all platforms including PlayStation, Xbox, PC, and Switch.',
      about: 'EA SPORTS FC 25 will let you team up with friends in 5v5 Rush, unlock new levels of strategy in 11v11 with Player Roles and FC IQ, and introduces some long awaited community requested features.',
      tips: 'Make sure to select your platform to receive a digital game code for your specific console / PC!',
      image: makeBannerSvg({
        bg1: '#0d1b2a',
        bg2: '#1b263b',
        accent: '#39ff14',
        title: 'FC 25',
        subtitle: 'EA SPORTS DIGITAL CODE',
        badge: 'TOP PICK'
      }),
      offers: [
        { short: 'PS Game', title: 'Free Digital Copy of EA Sports FC 25 for PlayStation Consoles', details: 'Verified 1 Day Ago | 1.6k uses today', buttonText: 'Show Code', codePrefix: 'FC25', fullCode: 'FC25-PS5X-92KL' },
        { short: 'Xbox Game', title: 'Free Digital Copy of EA Sports FC 25 for Xbox Series X|S & One', details: 'Verified 1 Day Ago | 1.2k uses today', buttonText: 'Show Code', codePrefix: 'XBOX', fullCode: 'XBOX-FC25-77QM' },
        { short: 'PC Game', title: 'Free Digital Copy of EA Sports FC 25 for PC / Steam', details: 'Verified 1 Day Ago | 995 uses today', buttonText: 'Show Code', codePrefix: 'STFC', fullCode: 'STFC-25PC-48VN' },
        { short: 'Switch Game', title: 'Free Digital Copy of EA Sports FC 25 for Nintendo Switch', details: 'Verified 1 Day Ago | 1.0k uses today', buttonText: 'Show Code', codePrefix: 'SWFC', fullCode: 'SWFC-25NS-63TR' }
      ]
    },
    {
      slug: 'shein-s-coupons-deals',
      title: 'Shein Gift Card Codes & Coupons',
      topPick: true,
      ratings: 4191,
      couponsLeft: 761,
      shortDesc: 'Save huge on fashion, accessories, and home essentials with verified Shein gift cards and promo codes.',
      about: 'SHEIN is a global fashion and lifestyle e-retailer committed to making the beauty of fashion accessible to all. Discover trendy styles, seasonal collections, and daily flash savings.',
      tips: 'Stack your promo code at checkout during flash sales and check free shipping thresholds to maximize savings.',
      image: makeBannerSvg({
        bg1: '#141414',
        bg2: '#2d2d2d',
        accent: '#f5b82e',
        title: 'S H E I N',
        subtitle: 'GIFT CARDS & PROMOS',
        badge: 'VERIFIED'
      }),
      offers: [
        { short: '$100 OFF', title: '$100 Shein Promo Code', details: 'Verified Today | 2.1k uses today', buttonText: 'Show Coupon', codePrefix: 'SHN1', fullCode: 'SHN1-00OF-84AB' },
        { short: '50% OFF', title: '50% Off Your Entire Shein Order + Free Shipping', details: 'Verified 1 Day Ago | 1.4k uses today', buttonText: 'Show Coupon', codePrefix: 'SH50', fullCode: 'SH50-SAVE-39ZX' },
        { short: '$750 Gift Card', title: '$750 Shein Digital Gift Card Voucher', details: 'Verified 1 Day Ago | 890 uses today', buttonText: 'Show Coupon', codePrefix: 'SHGC', fullCode: 'SHGC-750V-51KL' },
        { short: 'Free Points', title: '5,000 Bonus Shein VIP Points Reward', details: 'Verified 2 Days Ago | 640 uses today', buttonText: 'Show Coupon', codePrefix: 'SHVP', fullCode: 'SHVP-5000-29MN' }
      ]
    },
    {
      slug: 'cod-points-redeem-codes',
      title: 'COD Points Redeem Codes',
      topPick: true,
      ratings: 1775,
      couponsLeft: 498,
      shortDesc: 'Redeem Call of Duty Points (CP) for Battle Pass bundles, operator skins, and weapon blueprints.',
      about: 'Call of Duty Points (CP) are the in-game currency used across Modern Warfare, Warzone, and Black Ops to unlock Battle Passes, operator bundles, and cosmetic store packs.',
      tips: 'Log in to your Activision account and link your console or Battle.net ID before redeeming your CP voucher.',
      image: makeBannerSvg({
        bg1: '#1a1c19',
        bg2: '#2f3528',
        accent: '#f0a500',
        title: 'COD POINTS',
        subtitle: 'WARZONE & BLACK OPS',
        badge: 'HOT DEAL'
      }),
      offers: [
        { short: '2400 CP', title: '2,400 Call of Duty Points Redeem Code', details: 'Verified Today | 910 uses today', buttonText: 'Show Code', codePrefix: 'COD2', fullCode: 'COD2-400C-88PL' },
        { short: '5000 CP', title: '5,000 Call of Duty Points Bundle Code', details: 'Verified 1 Day Ago | 720 uses today', buttonText: 'Show Code', codePrefix: 'COD5', fullCode: 'COD5-000C-41KR' },
        { short: 'Battle Pass', title: 'Free Seasonal Battle Pass + 20 Tier Skips', details: 'Verified 1 Day Ago | 530 uses today', buttonText: 'Show Code', codePrefix: 'COBP', fullCode: 'COBP-TIER-67WX' }
      ]
    },
    {
      slug: 'microsoft-rewards-points',
      title: 'Free Microsoft Rewards Points',
      topPick: true,
      ratings: 2228,
      couponsLeft: 6299,
      shortDesc: 'Claim bonus Microsoft Rewards points redeemable for Xbox Game Pass, gift cards, and Microsoft Store credit.',
      about: 'Microsoft Rewards lets you earn points that can be redeemed for Xbox gift cards, Game Pass Ultimate subscriptions, movies, apps, and sweepstakes entries.',
      tips: 'Redeem your points directly in your Microsoft account dashboard for instant digital gift card delivery.',
      image: makeBannerSvg({
        bg1: '#004e92',
        bg2: '#0078d4',
        accent: '#7fba00',
        title: 'MICROSOFT',
        subtitle: 'REWARDS POINTS',
        badge: 'POPULAR'
      }),
      offers: [
        { short: '10,000 Pts', title: '10,000 Microsoft Rewards Bonus Points Code', details: 'Verified Today | 1.1k uses today', buttonText: 'Show Code', codePrefix: 'MSR1', fullCode: 'MSR1-0000-55PT' },
        { short: '25,000 Pts', title: '25,000 Microsoft Rewards Points Voucher', details: 'Verified 1 Day Ago | 860 uses today', buttonText: 'Show Code', codePrefix: 'MSR2', fullCode: 'MSR2-5000-93XB' },
        { short: 'Game Pass', title: '3 Months Xbox Game Pass Ultimate Reward', details: 'Verified 2 Days Ago | 740 uses today', buttonText: 'Show Code', codePrefix: 'XGPU', fullCode: 'XGPU-3MON-12MS' }
      ]
    },
    {
      slug: 'steam-gift-card-codes',
      title: 'Steam Gift Card Codes & Coupons',
      topPick: true,
      ratings: 1228,
      couponsLeft: 523,
      shortDesc: 'Add funds to your Steam Wallet with $20, $50, and $100 Steam Gift Card codes for PC games and DLC.',
      about: 'Steam Gift Cards work just like gift certificates, which can be redeemed on Steam for the purchase of games, software, hardware, and any other item you can purchase on Steam.',
      tips: 'Open Steam, go to Games > Redeem a Steam Wallet Code, and enter your unlocked code.',
      image: makeBannerSvg({
        bg1: '#171a21',
        bg2: '#1b2838',
        accent: '#66c0f4',
        title: 'STEAM',
        subtitle: 'WALLET GIFT CARDS',
        badge: 'PC GAMING'
      }),
      offers: [
        { short: '$50 Card', title: '$50 Steam Wallet Digital Gift Card Code', details: 'Verified Today | 1.5k uses today', buttonText: 'Show Code', codePrefix: 'STM5', fullCode: 'STM5-0WLT-74GD' },
        { short: '$100 Card', title: '$100 Steam Wallet Digital Gift Card Code', details: 'Verified 1 Day Ago | 980 uses today', buttonText: 'Show Code', codePrefix: 'STM1', fullCode: 'STM1-00WL-38KP' },
        { short: '$20 Card', title: '$20 Steam Wallet Instant Code', details: 'Verified 1 Day Ago | 615 uses today', buttonText: 'Show Code', codePrefix: 'STM2', fullCode: 'STM2-0WLT-90FR' }
      ]
    },
    {
      slug: 'pokemon-go-redeem-codes',
      title: 'Pokemon Go Redeem Codes',
      topPick: true,
      ratings: 2912,
      couponsLeft: 1883,
      shortDesc: 'Unlock free PokeCoins, Remote Raid Passes, Incubators, and rare avatar items in Pokemon GO.',
      about: 'Explore the world around you and catch Pokemon with Pokemon GO. Use promo codes to stock up on PokeCoins, Raid Passes, Ultra Balls, and Incubators.',
      tips: 'Redeem your code on the official Pokemon GO Web Store using your linked trainer account.',
      image: makeBannerSvg({
        bg1: '#0a2342',
        bg2: '#1d4e89',
        accent: '#ffcb05',
        title: 'POKEMON GO',
        subtitle: 'POKECOINS & PASSES',
        badge: 'TRENDING'
      }),
      offers: [
        { short: '2500 Coins', title: '2,500 Free PokeCoins Redeem Code', details: 'Verified Today | 1.8k uses today', buttonText: 'Show Code', codePrefix: 'POGO', fullCode: 'POGO-2500-83CN' },
        { short: 'Raid Pack', title: '10x Remote Raid Passes + 5x Super Incubators', details: 'Verified 1 Day Ago | 1.1k uses today', buttonText: 'Show Code', codePrefix: 'RAID', fullCode: 'RAID-PASS-44PK' },
        { short: '5200 Coins', title: '5,200 PokeCoins Mega Bundle Code', details: 'Verified 1 Day Ago | 790 uses today', buttonText: 'Show Code', codePrefix: 'PK52', fullCode: 'PK52-00MG-19GO' }
      ]
    },
    {
      slug: 'uber-free-credit-coupons',
      title: 'Uber Free Credit & Ride Coupons',
      topPick: true,
      ratings: 971,
      couponsLeft: 864,
      shortDesc: 'Get free Uber ride credits, airport trip discounts, and Uber Eats promo codes for your next order.',
      about: 'Move around your city effortlessly with Uber rides and enjoy meals delivered fast with Uber Eats. Apply voucher codes directly in the Uber Wallet tab.',
      tips: 'Add your voucher in Wallet > Add Promo Code before requesting your ride or placing an Uber Eats order.',
      image: makeBannerSvg({
        bg1: '#000000',
        bg2: '#1c1c1e',
        accent: '#06c167',
        title: 'U B E R',
        subtitle: 'RIDE & EATS CREDITS',
        badge: 'RIDESHARE'
      }),
      offers: [
        { short: '$50 Credit', title: '$50 Uber Ride & Uber Eats Gift Credit', details: 'Verified Today | 740 uses today', buttonText: 'Show Coupon', codePrefix: 'UBR5', fullCode: 'UBR5-0CRD-22RD' },
        { short: 'Free Ride', title: 'Up to $25 Off Your Next 2 Uber Rides', details: 'Verified 1 Day Ago | 610 uses today', buttonText: 'Show Coupon', codePrefix: 'UBFR', fullCode: 'UBFR-25X2-61GO' },
        { short: 'Uber One', title: '3 Months Free Uber One Membership', details: 'Verified 2 Days Ago | 430 uses today', buttonText: 'Show Coupon', codePrefix: 'UB1M', fullCode: 'UB1M-3FRE-95ON' }
      ]
    },
    {
      slug: 'sims-4-all-dlc-packs',
      title: 'Sims 4 + All DLC Packs Codes',
      topPick: true,
      ratings: 4912,
      couponsLeft: 2911,
      shortDesc: 'Unlock The Sims 4 Expansion Packs, Game Packs, and Stuff Packs for PC, Mac, PlayStation, and Xbox.',
      about: 'Play with life and expand your Sims world with every Expansion Pack, Stuff Pack, and Kit. Build dream homes, explore new neighborhoods, and create endless stories.',
      tips: 'Redeem your EA App or console key from the library menu to download all included expansion packs.',
      image: makeBannerSvg({
        bg1: '#1d7a3c',
        bg2: '#55b848',
        accent: '#d4ff6e',
        title: 'THE SIMS 4',
        subtitle: 'ALL DLC PACKS',
        badge: 'FAN FAVORITE'
      }),
      offers: [
        { short: 'All DLC', title: 'The Sims 4 Complete Expansion Pack Bundle (PC/Mac)', details: 'Verified Today | 2.3k uses today', buttonText: 'Show Code', codePrefix: 'SIMS', fullCode: 'SIMS-4DLC-99EA' },
        { short: 'PS / Xbox', title: 'The Sims 4 Expansion Pass for PlayStation & Xbox', details: 'Verified 1 Day Ago | 1.1k uses today', buttonText: 'Show Code', codePrefix: 'S4CN', fullCode: 'S4CN-PACK-52PX' },
        { short: '3 Packs', title: 'Choose Any 3 Sims 4 Expansion Packs Free', details: 'Verified 1 Day Ago | 820 uses today', buttonText: 'Show Code', codePrefix: 'S43P', fullCode: 'S43P-CHSE-17KT' }
      ]
    },
    {
      slug: 'tinder-free-gold-upgrade',
      title: 'Tinder Free Gold Upgrade Coupons',
      topPick: true,
      ratings: 790,
      couponsLeft: 581,
      shortDesc: 'Upgrade to Tinder Gold or Platinum for free — see who likes you, unlimited likes, and monthly Boosts.',
      about: 'Tinder Gold unlocks See Who Likes You, Unlimited Likes, Rewind, Passport to match anywhere in the world, and 5 Super Likes per week.',
      tips: 'Apply the promo code under Profile > Settings > Promo Code in the Tinder app or web portal.',
      image: makeBannerSvg({
        bg1: '#fd297b',
        bg2: '#ff655b',
        accent: '#ffd166',
        title: 'TINDER GOLD',
        subtitle: 'FREE UPGRADE CODES',
        badge: 'VIP'
      }),
      offers: [
        { short: '6 Mo Gold', title: '6 Months Free Tinder Gold Subscription Code', details: 'Verified Today | 510 uses today', buttonText: 'Show Coupon', codePrefix: 'TNDR', fullCode: 'TNDR-6MGD-40UP' },
        { short: 'Platinum', title: '3 Months Free Tinder Platinum Upgrade', details: 'Verified 1 Day Ago | 390 uses today', buttonText: 'Show Coupon', codePrefix: 'TNPL', fullCode: 'TNPL-3MPT-82VIP' }
      ]
    },
    {
      slug: 'zelda-echoes-of-wisdom',
      title: 'Zelda: Echoes of Wisdom - Free Game Code',
      topPick: false,
      ratings: 7640,
      couponsLeft: 13887,
      shortDesc: 'The Legend of Zelda: Echoes of Wisdom Free Game Code for Nintendo Switch eShop.',
      about: 'Save Hyrule as Princess Zelda in The Legend of Zelda: Echoes of Wisdom! Team up with the mysterious fairy Tri and use the power of the Tri Rod to create echoes.',
      tips: 'Redeem your 16-digit download code directly in the Nintendo Switch eShop under Enter Code.',
      image: makeBannerSvg({
        bg1: '#1a3c6e',
        bg2: '#4a235a',
        accent: '#f7dc6f',
        title: 'ZELDA',
        subtitle: 'ECHOES OF WISDOM',
        badge: 'SWITCH'
      }),
      offers: [
        { short: 'Switch', title: 'Full Digital Copy of Zelda: Echoes of Wisdom (eShop)', details: 'Verified Today | 2.9k uses today', buttonText: 'Show Code', codePrefix: 'ZLDA', fullCode: 'ZLDA-EOWS-64NS' },
        { short: 'Deluxe', title: 'Zelda: Echoes of Wisdom + Switch Online 3 Months', details: 'Verified 1 Day Ago | 1.4k uses today', buttonText: 'Show Code', codePrefix: 'ZLDX', fullCode: 'ZLDX-NSO3-21HY' }
      ]
    },
    {
      slug: 'nba-2k25-free-game-code',
      title: 'NBA 2K25 - Free Game Code',
      topPick: false,
      ratings: 5821,
      couponsLeft: 9773,
      shortDesc: 'NBA 2K25 Free Digital Game Code for all platforms; PlayStation, Xbox, PC, and Nintendo Switch + VC bonus.',
      about: 'Command every court with authenticity and realism powered by ProPLAY in NBA 2K25. Build your legacy in MyCAREER, MyTEAM, and The City.',
      tips: 'Select your console version below and also check out the 200K VC locker code!',
      image: makeBannerSvg({
        bg1: '#8b0000',
        bg2: '#1a1a1a',
        accent: '#ff4545',
        title: 'NBA 2K25',
        subtitle: 'FREE GAME + VC CODES',
        badge: 'SPORTS'
      }),
      offers: [
        { short: 'PS5 / Xbox', title: 'NBA 2K25 Standard Edition Digital Game Code', details: 'Verified Today | 1.9k uses today', buttonText: 'Show Code', codePrefix: '2K25', fullCode: '2K25-GAME-87NB' },
        { short: '200K VC', title: '200,000 Virtual Currency (VC) Locker Code', details: 'Verified 1 Day Ago | 1.5k uses today', buttonText: 'Show Code', codePrefix: 'VC2K', fullCode: 'VC2K-200K-33MY' }
      ]
    },
    {
      slug: 'cod-black-ops-6-free-code',
      title: 'Call of Duty Black Ops 6 - Free Game Code',
      topPick: false,
      ratings: 6412,
      couponsLeft: 8420,
      shortDesc: 'Call of Duty: Black Ops 6 Vault Edition and Standard digital download codes for PS5, Xbox, and PC.',
      about: 'Experience an action-packed spy thriller campaign, best-in-class Multiplayer with Omnimovement, and the epic return of Round-Based Zombies in Black Ops 6.',
      tips: 'Vault Edition codes include the Hunters vs. Hunted Operator Pack and BlackCell Season 1.',
      image: makeBannerSvg({
        bg1: '#141414',
        bg2: '#3b1e08',
        accent: '#ff6b00',
        title: 'BLACK OPS 6',
        subtitle: 'VAULT EDITION CODES',
        badge: 'ACTION'
      }),
      offers: [
        { short: 'Vault Ed.', title: 'Call of Duty: Black Ops 6 Vault Edition (All Platforms)', details: 'Verified Today | 2.4k uses today', buttonText: 'Show Code', codePrefix: 'BO6V', fullCode: 'BO6V-AULT-71OP' },
        { short: 'Standard', title: 'Call of Duty: Black Ops 6 Cross-Gen Digital Code', details: 'Verified 1 Day Ago | 1.7k uses today', buttonText: 'Show Code', codePrefix: 'BO6S', fullCode: 'BO6S-TNDG-45CG' }
      ]
    },
    {
      slug: 'farming-simulator-25',
      title: 'Farming Simulator 25 - Free Game Code',
      topPick: false,
      ratings: 3190,
      couponsLeft: 5412,
      shortDesc: 'Farming Simulator 25 digital download key for PC (Steam), PlayStation 5, and Xbox Series X|S.',
      about: 'Build your agricultural empire across North America, Central Europe, and East Asia with new crops, livestock, and over 400 authentic machines.',
      tips: 'Choose your Steam or console key and activate immediately.',
      image: makeBannerSvg({
        bg1: '#2d5a27',
        bg2: '#1b3a17',
        accent: '#f4d03f',
        title: 'FARMING SIM 25',
        subtitle: 'PC & CONSOLE KEYS',
        badge: 'SIMULATION'
      }),
      offers: [
        { short: 'Steam Key', title: 'Farming Simulator 25 PC Steam Digital Key', details: 'Verified Today | 890 uses today', buttonText: 'Show Code', codePrefix: 'FS25', fullCode: 'FS25-STMP-62AG' },
        { short: 'Console', title: 'Farming Simulator 25 PS5 / Xbox Series X Code', details: 'Verified 1 Day Ago | 610 uses today', buttonText: 'Show Code', codePrefix: 'FS25', fullCode: 'FS25-CNLS-19TR' }
      ]
    },
    {
      slug: 'madden-nfl-25-free-code',
      title: 'Madden NFL 25 - Free Game Code',
      topPick: false,
      ratings: 4120,
      couponsLeft: 6890,
      shortDesc: 'Madden NFL 25 Free Digital Game Code + Ultimate Team Points for PlayStation, Xbox, and PC.',
      about: 'Experience BOOM Tech dynamic physics-based tackling, refreshed Franchise mode, and Superstar challenges in Madden NFL 25.',
      tips: 'Redeem the MUT Points code inside the Madden Ultimate Team store.',
      image: makeBannerSvg({
        bg1: '#0b2545',
        bg2: '#134074',
        accent: '#ff4545',
        title: 'MADDEN 25',
        subtitle: 'DIGITAL CODE + MUT',
        badge: 'NFL'
      }),
      offers: [
        { short: 'Full Game', title: 'Madden NFL 25 Digital Copy (PS5 / Xbox / PC)', details: 'Verified Today | 1.1k uses today', buttonText: 'Show Code', codePrefix: 'MD25', fullCode: 'MD25-NFLG-58TD' },
        { short: '5850 Pts', title: '5,850 Madden Ultimate Team Points Code', details: 'Verified 1 Day Ago | 780 uses today', buttonText: 'Show Code', codePrefix: 'MUT5', fullCode: 'MUT5-850P-24QB' }
      ]
    },
    {
      slug: 'blox-fruits-secret-codes',
      title: 'Blox Fruits Secret Codes',
      topPick: false,
      ratings: 5340,
      couponsLeft: 4125,
      shortDesc: 'Active Blox Fruits codes for 2x EXP boosts, Stat Resets, Beli, and Permanent Fruit vouchers.',
      about: 'Become a master swordsman or a powerful Blox Fruit user as you train to become the strongest player to ever live in Roblox Blox Fruits.',
      tips: 'Click the gift icon on the left side of the screen in Blox Fruits to redeem your codes.',
      image: makeBannerSvg({
        bg1: '#1a2a6c',
        bg2: '#b21f1f',
        accent: '#fdbb2d',
        title: 'BLOX FRUITS',
        subtitle: 'SECRET ROBLOX CODES',
        badge: 'ROBLOX'
      }),
      offers: [
        { short: 'Perm Fruit', title: 'Random Permanent Mythical Fruit Code', details: 'Verified Today | 2.6k uses today', buttonText: 'Show Code', codePrefix: 'BLOX', fullCode: 'BLOX-PERM-91FR' },
        { short: '2x EXP', title: '24 Hours of 2x EXP Boost + Stat Refund', details: 'Verified Today | 1.9k uses today', buttonText: 'Show Code', codePrefix: 'EXP2', fullCode: 'EXP2-4HRS-30BF' }
      ]
    },
    {
      slug: 'pokemon-tcg-pocket-codes',
      title: 'Pokemon TCG Pocket Redeem Codes',
      topPick: false,
      ratings: 3890,
      couponsLeft: 3210,
      shortDesc: 'Claim free Pack Hourglasses, Poke Gold, and exclusive promo booster packs in Pokemon TCG Pocket.',
      about: 'Open booster packs every day, collect immersive digital Pokemon cards, and battle players worldwide in Pokemon Trading Card Game Pocket.',
      tips: 'Enter your gift code in the Pokemon TCG Pocket redemption portal with your Support ID.',
      image: makeBannerSvg({
        bg1: '#005c97',
        bg2: '#363795',
        accent: '#ffdf00',
        title: 'TCG POCKET',
        subtitle: 'HOURGLASSES & GOLD',
        badge: 'NEW'
      }),
      offers: [
        { short: '120 Hourgl.', title: '120 Pack Hourglasses (10 Booster Packs)', details: 'Verified Today | 1.7k uses today', buttonText: 'Show Code', codePrefix: 'TCGP', fullCode: 'TCGP-120H-75PK' },
        { short: 'Poke Gold', title: '500 Poke Gold Bonus Voucher', details: 'Verified 1 Day Ago | 920 uses today', buttonText: 'Show Code', codePrefix: 'PG50', fullCode: 'PG50-0GLD-14TC' }
      ]
    },
    {
      slug: 'disney-plus-free-subscription',
      title: 'Disney+ Free Subscription',
      topPick: false,
      ratings: 2840,
      couponsLeft: 1490,
      shortDesc: 'Watch Disney, Pixar, Marvel, Star Wars, and National Geographic with 6-month & 12-month Disney+ codes.',
      about: 'Stream thousands of movies, originals, and classic series ad-free in 4K UHD on up to 4 devices simultaneously with Disney+.',
      tips: 'Redeem your voucher at disneyplus.com/redeem on a new or returning account.',
      image: makeBannerSvg({
        bg1: '#040714',
        bg2: '#113ccf',
        accent: '#00d4ff',
        title: 'Disney+',
        subtitle: 'FREE SUBSCRIPTION',
        badge: 'STREAMING'
      }),
      offers: [
        { short: '6 Months', title: '6 Months Free Disney+ Premium (No Ads)', details: 'Verified Today | 1.3k uses today', buttonText: 'Show Coupon', codePrefix: 'DSNY', fullCode: 'DSNY-6MON-88PL' },
        { short: '12 Months', title: '1 Year Disney+ & Hulu Duo Bundle Code', details: 'Verified 1 Day Ago | 870 uses today', buttonText: 'Show Coupon', codePrefix: 'DSHL', fullCode: 'DSHL-12YR-42BD' }
      ]
    },
    {
      slug: 'spotify-premium-codes',
      title: 'Spotify Premium Codes',
      topPick: false,
      ratings: 3415,
      couponsLeft: 2104,
      shortDesc: 'Enjoy ad-free music, offline downloads, and unlimited skips with Spotify Premium Individual & Family codes.',
      about: 'Spotify Premium gives you instant access to over 100 million tracks, podcasts, and audiobooks with zero ads and high-quality audio.',
      tips: 'Visit spotify.com/redeem while signed into your Spotify account to activate your Premium code.',
      image: makeBannerSvg({
        bg1: '#121212',
        bg2: '#1db954',
        accent: '#1ed760',
        title: 'Spotify',
        subtitle: 'PREMIUM GIFT CODES',
        badge: 'MUSIC'
      }),
      offers: [
        { short: '6 Mo Prem', title: '6 Months Spotify Premium Individual Code', details: 'Verified Today | 1.5k uses today', buttonText: 'Show Code', codePrefix: 'SPT6', fullCode: 'SPT6-PREM-61MU' },
        { short: '12 Mo Prem', title: '12 Months Spotify Premium Gift Card', details: 'Verified 1 Day Ago | 940 uses today', buttonText: 'Show Code', codePrefix: 'SPT1', fullCode: 'SPT1-2YRS-29AD' }
      ]
    },
    {
      slug: 'lululemon-coupons-deals',
      title: "Lululemon's Coupons & Deals",
      topPick: false,
      ratings: 1640,
      couponsLeft: 612,
      shortDesc: 'Save on Align leggings, athletic wear, and accessories with verified Lululemon gift cards and promo codes.',
      about: 'Lululemon creates technical athletic apparel for yoga, running, training, and everyday comfort.',
      tips: 'Combine your gift card code with items from the "We Made Too Much" section for maximum value.',
      image: makeBannerSvg({
        bg1: '#b71c1c',
        bg2: '#4a0000',
        accent: '#ff8f8f',
        title: 'lululemon',
        subtitle: 'GIFT CARDS & DEALS',
        badge: 'APPAREL'
      }),
      offers: [
        { short: '$100 Gift', title: '$100 Lululemon Digital Gift Card Code', details: 'Verified Today | 680 uses today', buttonText: 'Show Coupon', codePrefix: 'LULU', fullCode: 'LULU-100G-53FT' },
        { short: '30% OFF', title: '30% Off Sitewide Lululemon Promo Code', details: 'Verified 1 Day Ago | 520 uses today', buttonText: 'Show Coupon', codePrefix: 'LL30', fullCode: 'LL30-SAVE-18YG' }
      ]
    },
    {
      slug: 'free-tiktok-coins',
      title: 'Free TikTok Coins',
      topPick: false,
      ratings: 4520,
      couponsLeft: 3890,
      shortDesc: 'Claim free TikTok Coins to send gifts during live streams and support your favorite creators.',
      about: 'TikTok Coins are virtual currency used to send virtual gifts and show appreciation to creators during TikTok LIVE broadcasts.',
      tips: 'Redeem your voucher through the TikTok Recharge web portal for instant coin balance updates.',
      image: makeBannerSvg({
        bg1: '#010101',
        bg2: '#25f4ee',
        accent: '#fe2c55',
        title: 'TikTok',
        subtitle: 'FREE COINS & GIFTS',
        badge: 'SOCIAL'
      }),
      offers: [
        { short: '5000 Coins', title: '5,000 TikTok Coins Recharge Code', details: 'Verified Today | 2.1k uses today', buttonText: 'Show Code', codePrefix: 'TT5K', fullCode: 'TT5K-COIN-77LV' },
        { short: '10K Coins', title: '10,000 TikTok Coins VIP Bundle', details: 'Verified 1 Day Ago | 1.3k uses today', buttonText: 'Show Code', codePrefix: 'TT10', fullCode: 'TT10-KVIP-36GF' }
      ]
    }
  ];

  window.ROBOT_COUPONS = COUPONS;
})();
