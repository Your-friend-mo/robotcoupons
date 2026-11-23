/**
 * RobotCoupons Intelligent Fuzzy Search Engine
 * International measures: diacritic-insensitive, typo-tolerant (Levenshtein), alias-expanded, instant response
 */
(function() {
  'use strict';

  var COUPONS = [{"slug": "pokemongo-s-coupons-deal", "title": "Pokemon Go Redeem Codes", "ratings": 2912, "coupons_left": 1883, "desc": "Verified discount codes, promo vouchers and free rewards for Pokemon Go Redeem Codes.", "img": "coupon_img/pokemongo.jpg", "href": "coupon/pokemongo-s-coupons-deal.html"}, {"slug": "uber-s-coupons-deal", "title": "Uber Free Credit & Ride Coupons", "ratings": 971, "coupons_left": 864, "desc": "Verified discount codes, promo vouchers and free rewards for Uber Free Credit & Ride Coupons.", "img": "coupon_img/uber.png", "href": "coupon/uber-s-coupons-deal.html"}, {"slug": "sims4-s-coupons-deals", "title": "Sims 4 + All DLC Packs Codes", "ratings": 4912, "coupons_left": 2911, "desc": "Verified discount codes, promo vouchers and free rewards for Sims 4 + All DLC Packs Codes.", "img": "coupon_img/sims4.jpg", "href": "coupon/sims4-s-coupons-deals.html"}, {"slug": "tinder-s-coupons-deal", "title": "Tinder Free Gold Upgrade Coupons", "ratings": 790, "coupons_left": 581, "desc": "Verified discount codes, promo vouchers and free rewards for Tinder Free Gold Upgrade Coupons.", "img": "coupon_img/tinder.png", "href": "coupon/tinder-s-coupons-deal.html"}, {"slug": "eafc25-s-coupons-deals", "title": "EA Sports FC 25 - Free Game Code", "ratings": 5932, "coupons_left": 11372, "desc": "Verified discount codes, promo vouchers and free rewards for EA Sports FC 25 - Free Game Code.", "img": "coupon_img/eafc25.png", "href": "coupon/eafc25-s-coupons-deals.html"}, {"slug": "shein-s-coupons-deals", "title": "Shein Gift Card Codes & Coupons", "ratings": 4191, "coupons_left": 761, "desc": "Verified discount codes, promo vouchers and free rewards for Shein Gift Card Codes & Coupons.", "img": "coupon_img/shein.png", "href": "coupon/shein-s-coupons-deals.html"}, {"slug": "codpoints-s-coupons-deal", "title": "COD Points Redeem Codes", "ratings": 1775, "coupons_left": 498, "desc": "Verified discount codes, promo vouchers and free rewards for COD Points Redeem Codes.", "img": "coupon_img/codpoints.jpg", "href": "coupon/codpoints-s-coupons-deal.html"}, {"slug": "msrewards-s-coupons-deal", "title": "Free Microsoft Rewards Points", "ratings": 2228, "coupons_left": 6299, "desc": "Verified discount codes, promo vouchers and free rewards for Free Microsoft Rewards Points.", "img": "coupon_img/microsoftrewards.jpg", "href": "coupon/msrewards-s-coupons-deal.html"}, {"slug": "steam-s-coupons-deal", "title": "Steam Gift Card Codes & Coupons", "ratings": 1228, "coupons_left": 523, "desc": "Verified discount codes, promo vouchers and free rewards for Steam Gift Card Codes & Coupons.", "img": "coupon_img/steam.png", "href": "coupon/steam-s-coupons-deal.html"}, {"slug": "zeldaechoesofwisdom-s-coupons-deals", "title": "Zelda: Echoes of Wisdom - Free Game Code", "ratings": 7640, "coupons_left": 13887, "desc": "The Legend of Zelda: Echoes of Wisdom Free Game code for Nintendo Switch!", "img": "coupon_img/zeldawisdom.avif", "href": "coupon/zeldaechoesofwisdom-s-coupons-deals.html"}, {"slug": "nba2k25-s-coupons-deals", "title": "NBA 2K25 - Free Game Code", "ratings": 5821, "coupons_left": 9773, "desc": "NBA 2K25 Free Digital Game Code for all platforms; Playstation, Xbox Consoles, Nintendo Switch, PC or Steam!", "img": "coupon_img/nba2k25.webp", "href": "coupon/nba2k25-s-coupons-deals.html"}, {"slug": "blackops6-s-coupons-deals", "title": "Call of Duty Black Ops 6 - Free Game Code", "ratings": 2001, "coupons_left": 6129, "desc": "Call of Duty Black Ops 6 Free Digital Game Code for all platforms; Xbox, Playstation consoles or PC / Steam!", "img": "coupon_img/blackops6.jpg", "href": "coupon/blackops6-s-coupons-deals.html"}, {"slug": "farmingsim25-s-coupons-deals", "title": "Farming Simulator 25 - Free Game Code", "ratings": 3781, "coupons_left": 7301, "desc": "Farming Simulator 25 Free Digital Game Code for all platforms; Playstation, Xbox Consoles, PC or Steam!", "img": "coupon_img/farmingsim25.jpg", "href": "coupon/farmingsim25-s-coupons-deals.html"}, {"slug": "madden25-s-coupons-deals", "title": "Madden NFL 25 - Free Game Code", "ratings": 4710, "coupons_left": 10177, "desc": "Madden NFL 25 Free Digital Game Code for all platforms; PlayStation, Xbox, PC / Steam!", "img": "coupon_img/madden25.jpg", "href": "coupon/madden25-s-coupons-deals.html"}, {"slug": "bloxfruits-s-coupons-deals", "title": "Blox Fruits Secret Codes", "ratings": 7119, "coupons_left": 10444, "desc": "Get Blox Fruits Secret Codes for Free Premium, Money, Fruits and more!", "img": "coupon_img/bloxfruits.png", "href": "coupon/bloxfruits-s-coupons-deals.html"}, {"slug": "pokemontcg-s-coupons-deals", "title": "Pokemon TCG Pocket Redeem Codes", "ratings": 10388, "coupons_left": 14555, "desc": "Get Pokemon TCG Pocket Redeem Codes for Free Gold, Premium passes and more!", "img": "coupon_img/pokemontcg.jpg", "href": "coupon/pokemontcg-s-coupons-deals.html"}, {"slug": "animalcompany-s-coupons-deals", "title": "Animal Company Promo Codes", "ratings": 5007, "coupons_left": 6663, "desc": "Get Animal Company Codes for Free Coins and Research Points!", "img": "coupon_img/animalcompany.png", "href": "coupon/animalcompany-s-coupons-deals.html"}, {"slug": "harrypotterchampions-s-coupons-deals", "title": "Harry Potter Quidditch Champions - Free Game Code", "ratings": 4710, "coupons_left": 13766, "desc": "Harry Potter Quidditch Champions Free Digital Game Code for all platforms; PlayStation, Xbox, Nintendo Switch or PC / Steam!", "img": "coupon_img/harrypotterquidditch.jpg", "href": "coupon/harrypotterchampions-s-coupons-deals.html"}, {"slug": "nhl25-s-coupons-deals", "title": "NHL 25 - Free Game Code", "ratings": 4009, "coupons_left": 6643, "desc": "NHL 25 Free Digital Game Code for all platforms; PlayStation and Xbox Consoles!", "img": "coupon_img/nhl25.jpg", "href": "coupon/nhl25-s-coupons-deals.html"}, {"slug": "mecharena-s-coupons-deals", "title": "Mech Arena Promo Codes", "ratings": 15781, "coupons_left": 4489, "desc": "Get Mech Arena Codes for Free A-Coins, Credits and Keys!", "img": "coupon_img/mecharena.jpg", "href": "coupon/mecharena-s-coupons-deals.html"}, {"slug": "flexcity-s-coupons-deals", "title": "Flex City Vice Online Promo Codes", "ratings": 7890, "coupons_left": 2955, "desc": "Get Flex City Vice Online Codes for Free Gold, Vice Bucks and Unlock All!", "img": "coupon_img/viceonline.jpg", "href": "coupon/flexcity-s-coupons-deals.html"}, {"slug": "stumbleguys-s-coupons-deals", "title": "Stumble Guys Redeem Codes", "ratings": 7320, "coupons_left": 12788, "desc": "Get Stumble Guys Redeem Codes for Free Gems, Tokens and unlock all skins and emotes!", "img": "coupon_img/stumbleguys.jpg", "href": "coupon/stumbleguys-s-coupons-deals.html"}, {"slug": "yeepshideandseek-s-coupons-deals", "title": "Yeeps Hide & Seek Promo Codes", "ratings": 8443, "coupons_left": 13612, "desc": "Get Yeeps Hide and Seek Promo Codes for Free Coins and Cosmetics!", "img": "coupon_img/yeepshideseek.jpg", "href": "coupon/yeepshideandseek-s-coupons-deals.html"}, {"slug": "marvelrivals-s-coupons-deals", "title": "Marvel Rivals Redeem Codes", "ratings": 10444, "coupons_left": 7810, "desc": "Get Marvel Rivals Redeem Codes for Free Lattice, Units and unlock all skins!", "img": "coupon_img/marvelrivals.webp", "href": "coupon/marvelrivals-s-coupons-deals.html"}, {"slug": "wwe2k25-s-coupons-deals", "title": "WWE 2K25 - Free Digital Game Code", "ratings": 3819, "coupons_left": 10766, "desc": "WWE 2K25 free Digital Game Code for all platforms; PS, Xbox or PC. Get your free copy now!", "img": "coupon_img/wwe2k25.jpeg", "href": "coupon/wwe2k25-s-coupons-deals.html"}, {"slug": "poppyplaytime4-s-coupons-deals", "title": "Poppy Playtime Chapter 4 - Free Digital Game Code", "ratings": 5578, "coupons_left": 3703, "desc": "Poppy Playtime Chapter 4 free Digital Game Code for PC / Steam. Get your free copy now!", "img": "coupon_img/poppyplaytime4.avif", "href": "coupon/poppyplaytime4-s-coupons-deals.html"}, {"slug": "avatarworld-s-coupons-deals", "title": "Avatar World Promo Codes", "ratings": 10944, "coupons_left": 7409, "desc": "Get Avatar World Promo Codes for Free Gifts, Unlock all places, characters and more!", "img": "coupon_img/avatarworld.webp", "href": "coupon/avatarworld-s-coupons-deals.html"}, {"slug": "monopoly-s-coupons-deal", "title": "Monopoly Go Free Dice Redeem Codes", "ratings": 3661, "coupons_left": 775, "desc": "Monopoly Go Free Dice Rolls and Cash - Get your Redeem Codes now!", "img": "coupon_img/monop.jpg", "href": "coupon/monopoly-s-coupons-deal.html"}, {"slug": "civilizationvii-s-coupons-deals", "title": "Civilization VII - Free Game Code", "ratings": 1049, "coupons_left": 7659, "desc": "Civilization VII Free Digital Game Code for PS, XBOX, PC or Switch. Get yours now!", "img": "coupon_img/civilizationvii.jpg", "href": "coupon/civilizationvii-s-coupons-deals.html"}, {"slug": "survivorio-s-coupons-deals", "title": "Survivor.io Redeem Codes", "ratings": 2990, "coupons_left": 7339, "desc": "Get Survivor.io Redeem Codes for Free Gems, Gold, Energy and Survival Passes!", "img": "coupon_img/survivorio.jpg", "href": "coupon/survivorio-s-coupons-deals.html"}, {"slug": "dresstoimpress-s-coupons-deals", "title": "Dress to Impress Secret Codes", "ratings": 4917, "coupons_left": 13991, "desc": "Get Dress to Impress Secret Codes for Free VIP Pass, Outfits, items and more!", "img": "coupon_img/dti.jpg", "href": "coupon/dresstoimpress-s-coupons-deals.html"}, {"slug": "monsterhunterwilds-s-coupons-deals", "title": "Monster Hunter Wilds - Free Game Code", "ratings": 8834, "coupons_left": 10366, "desc": "Monster Hunter Wilds Free Digital Game Code for PS, XBOX or PC. Get yours now!", "img": "coupon_img/monsterhunterwilds.jpg", "href": "coupon/monsterhunterwilds-s-coupons-deals.html"}, {"slug": "kingdomcomedeliverance2-s-coupons-deals", "title": "Kingdom Come Deliverance 2 - Free Game Code", "ratings": 3776, "coupons_left": 5009, "desc": "Kingdom Come Deliverance 2 Free Digital Game Code for PS, XBOX or PC. Get yours now!", "img": "coupon_img/kingdomcome2.jpg", "href": "coupon/kingdomcomedeliverance2-s-coupons-deals.html"}, {"slug": "metaquest-s-coupons-deal", "title": "Meta Quest Games & Codes", "ratings": 14889, "coupons_left": 9771, "desc": "Get Free Games on your Meta Quest VR by redeeming these Game codes!", "img": "coupon_img/metaquest.jpg", "href": "coupon/metaquest-s-coupons-deal.html"}, {"slug": "collegefootball25-s-coupons-deals", "title": "EA Sports College Football 25 - Free Game Code", "ratings": 740, "coupons_left": 2911, "desc": "EA Sports College Football 25 Free Digital Game Code for all platforms; Xbox or Playstation consoles!", "img": "coupon_img/collegefootball25.webp", "href": "coupon/collegefootball25-s-coupons-deals.html"}, {"slug": "blackmythwukong-s-coupons-deals", "title": "Black Myth: Wukong - Free Game Code", "ratings": 740, "coupons_left": 8644, "desc": "Black Myth: Wukong Free Digital Game Code for all platforms; Xbox, Playstation consoles, PC or Steam!", "img": "coupon_img/blackmythwuking.jpg", "href": "coupon/blackmythwukong-s-coupons-deals.html"}, {"slug": "tcgsimulator-s-coupons-deals", "title": "TCG Card Shop Simulator - Free Game Code", "ratings": 10558, "coupons_left": 4001, "desc": "TCG Card Shop Simulator Free Digital Game Code for PC or Steam!", "img": "coupon_img/tcgsimulator.jpg", "href": "coupon/tcgsimulator-s-coupons-deals.html"}, {"slug": "donkeykongcountry-s-coupons-deals", "title": "Donkey Kong Country Returns - Free Game Code", "ratings": 8822, "coupons_left": 7751, "desc": "Donkey Kong Country Returns Free Digital Game Code for Nintendo Switch!", "img": "coupon_img/donkeykongcountry.png", "href": "coupon/donkeykongcountry-s-coupons-deals.html"}, {"slug": "cookieruncodes-s-coupons-deals", "title": "Cookie Run Kingdom Codes", "ratings": 12550, "coupons_left": 2177, "desc": "Get Cookie Run Kingdom Codes for Free Gems and Cookies!", "img": "coupon_img/cookierun.jpg", "href": "coupon/cookieruncodes-s-coupons-deals.html"}, {"slug": "mcoccodes-s-coupons-deals", "title": "Marvel Contest of Champions Codes", "ratings": 7991, "coupons_left": 10001, "desc": "Get Marvel Contest of Champions (MCOC) Codes for Free Crystals, Units and more!", "img": "coupon_img/mcoc.jpg", "href": "coupon/mcoccodes-s-coupons-deals.html"}, {"slug": "fcmobile-s-coupons-deals", "title": "EA Sports FC Mobile Redeem Codes", "ratings": 10444, "coupons_left": 3810, "desc": "FC Mobile Redeem Codes for: Free Points, Packs, Coins and Gems for FC Mobile", "img": "coupon_img/fcmobile.avif", "href": "coupon/fcmobile-s-coupons-deals.html"}, {"slug": "bloxburg-s-coupons-deals", "title": "Bloxburg Secret Codes", "ratings": 3009, "coupons_left": 6301, "desc": "Get Bloxburg Secret Codes for Free Money, game passes, tickets and more!", "img": "coupon_img/bloxburg.jpg", "href": "coupon/bloxburg-s-coupons-deals.html"}, {"slug": "raidshadowcodes-s-coupons-deals", "title": "Raid Shadow Legends Codes", "ratings": 7110, "coupons_left": 10777, "desc": "Get Raid Shadow Legends Codes for Free Gems, Shards, Gifts and more!", "img": "coupon_img/raidshadow.jpg", "href": "coupon/raidshadowcodes-s-coupons-deals.html"}, {"slug": "worldoftankscodes-s-coupons-deals", "title": "World of Tanks Codes", "ratings": 6610, "coupons_left": 9575, "desc": "Get World of Tanks (WOT) Codes for Free Gold, Vehicles and Premium!", "img": "coupon_img/worldoftanks.jpg", "href": "coupon/worldoftankscodes-s-coupons-deals.html"}, {"slug": "wwe2k24-s-coupons-deals", "title": "WWE 2K24 - Free Digital Game Code", "ratings": 1009, "coupons_left": 8723, "desc": "WWE 2K24 free Digital Game Code for all platforms; PS, Xbox or PC. Get your free copy now!", "img": "coupon_img/WWE2K24.jpg", "href": "coupon/wwe2k24-s-coupons-deals.html"}, {"slug": "brookhaven-s-coupons-deals", "title": "Brookhaven Secret Codes", "ratings": 7490, "coupons_left": 13871, "desc": "Get Brookhaven Secret Codes for Free Gamepasses, VIP and more!", "img": "coupon_img/brookhaven.webp", "href": "coupon/brookhaven-s-coupons-deals.html"}, {"slug": "disneyplus-s-coupons-deal", "title": "Disney+ Free Subscription", "ratings": 2991, "coupons_left": 3117, "desc": "Get a Free Disney+ 12 Month subscription  with these free exclusive codes!", "img": "coupon_img/disney.png", "href": "coupon/disneyplus-s-coupons-deal.html"}, {"slug": "monopolyconsole-s-coupons-deals", "title": "Monopoly - Free Digital Game Code", "ratings": 756, "coupons_left": 12004, "desc": "Monopoly Free Digital Game Code for all platforms; Xbox, Playstation consoles or Nintendo Switch, get your copy now!", "img": "coupon_img/monopoly.avif", "href": "coupon/monopolyconsole-s-coupons-deals.html"}, {"slug": "eldenring-s-coupons-deals", "title": "Elden Ring - Free Game Code", "ratings": 4431, "coupons_left": 3911, "desc": "Elden Ring Free Digital Game Code for PS, XBOX and PC. Get yours now!", "img": "coupon_img/eldenring.jpg", "href": "coupon/eldenring-s-coupons-deals.html"}, {"slug": "assassinsshadows-s-coupons-deals", "title": "Assassin's Creed Shadows - Free Game Code", "ratings": 4776, "coupons_left": 7449, "desc": "Assassin's Creed Shadows Free Digital Game Code for all platforms; Xbox, Playstation and PC/Steam!", "img": "coupon_img/assassinsshadows.jpg", "href": "coupon/assassinsshadows-s-coupons-deals.html"}, {"slug": "repo-s-coupons-deals", "title": "REPO- Free Game Code", "ratings": 1017, "coupons_left": 8755, "desc": "REPO Free Digital Game Code for PC / Steam - get your free copy now!", "img": "coupon_img/repo.jpg", "href": "coupon/repo-s-coupons-deals.html"}, {"slug": "splitfiction-s-coupons-deals", "title": "Split Fiction - Free Game Code", "ratings": 3089, "coupons_left": 8003, "desc": "Split Fiction Free Digital Game Code for all platforms; Xbox, Playstation and PC/Steam!", "img": "coupon_img/splitfaction.webp", "href": "coupon/splitfiction-s-coupons-deals.html"}, {"slug": "inzoi-s-coupons-deals", "title": "Inzoi - Free Game Code", "ratings": 4119, "coupons_left": 7007, "desc": "Inzoi Free Digital Game Code for all platforms; Xbox, Playstation and PC/Steam!", "img": "coupon_img/inzoi.webp", "href": "coupon/inzoi-s-coupons-deals.html"}, {"slug": "motogp25-s-coupons-deals", "title": "MotoGP 25 - Free Game Code", "ratings": 2272, "coupons_left": 4338, "desc": "MotoGP 25 Free Digital Game Code for all platforms; Xbox, Playstation and PC/Steam!", "img": "coupon_img/motogp25.jpg", "href": "coupon/motogp25-s-coupons-deals.html"}, {"slug": "schedulei-s-coupons-deals", "title": "Schedule I - Free Game Code", "ratings": 7122, "coupons_left": 11551, "desc": "Schedule I Free Digital Game Code for PC / Steam - Play it NOW!", "img": "coupon_img/schedulei.jpg", "href": "coupon/schedulei-s-coupons-deals.html"}, {"slug": "steelhunters-s-coupons-deals", "title": "Steel Hunters - Free Game Code", "ratings": 9054, "coupons_left": 4410, "desc": "Steel Hunters Free Digital Game Code for PC / Steam - Play it for free!", "img": "coupon_img/steelhunters.jpg", "href": "coupon/steelhunters-s-coupons-deals.html"}, {"slug": "eldenringnightreign-s-coupons-deals", "title": "Elden Ring Nightreign - Free Game Code", "ratings": 4001, "coupons_left": 15877, "desc": "Elden Ring Nightreign Free Digital Game Code for PS, XBOX and PC. Get yours now!", "img": "coupon_img/eldenringnightreign.jpg", "href": "coupon/eldenringnightreign-s-coupons-deals.html"}, {"slug": "nba2k24-s-coupons-deals", "title": "NBA 2K24 - Free Digital Game Code", "ratings": 693, "coupons_left": 1137, "desc": "NBA 2K24 Free Digital Game Code for all platforms; PS, Xbox or PC. Get your free copy now!", "img": "coupon_img/nba.jpeg", "href": "coupon/nba2k24-s-coupons-deals.html"}, {"slug": "fc24-s-coupons-deals", "title": "EA Sports FC 24 - Free Game Code", "ratings": 961, "coupons_left": 2991, "desc": "FC24 Free Digital Game Code for PS, XBOX and PC. Get yours now!", "img": "coupon_img/fc24.jpg", "href": "coupon/fc24-s-coupons-deals.html"}, {"slug": "crunchyroll-s-coupons-deal", "title": "Crunchyroll Premium Codes", "ratings": 3999, "coupons_left": 1883, "desc": "Grab a Free Crunchyroll Premium Code to upgrade your account for a full 12 months!", "img": "coupon_img/crunchyroll.jpg", "href": "coupon/crunchyroll-s-coupons-deal.html"}, {"slug": "nba2k24-vc-s-coupons-deals", "title": "NBA 2K24 - Free 450,000 VC Codes", "ratings": 1146, "coupons_left": 398, "desc": "Grab a free VC code for 450,000 VC. Just enter the code in the redeem code page within game / online!", "img": "coupon_img/nba2k24vc.jpg", "href": "coupon/nba2k24-vc-s-coupons-deals.html"}, {"slug": "visa-s-coupons-deal", "title": "Visa Money Gift Card Codes", "ratings": 4911, "coupons_left": 720, "desc": "Get a $250 Visa Account Gift Card Code, or a 50% Off Coupon code to be applied at ANY Visa available checkout.", "img": "coupon_img/visa.png", "href": "coupon/visa-s-coupons-deal.html"}, {"slug": "fc25codes-s-coupons-deals", "title": "EA Sports FC 25 Redeem Codes", "ratings": 17442, "coupons_left": 11387, "desc": "FC 25 Redeem Codes for: Free Coins, Free Points and Free packs for EA Sports FC 25!", "img": "coupon_img/fc25redeemcodes.jpg", "href": "coupon/fc25codes-s-coupons-deals.html"}, {"slug": "f125-s-coupons-deals", "title": "F1 25 - Free Game Code", "ratings": 5410, "coupons_left": 7762, "desc": "F1 25 Free Digital Game Code for all platforms; Xbox, Playstation and PC/Steam!", "img": "coupon_img/f125.webp", "href": "coupon/f125-s-coupons-deals.html"}, {"slug": "genshinimpactcodes-s-coupons-deals", "title": "Genshin Impact Redeem Codes", "ratings": 7773, "coupons_left": 10347, "desc": "Genshin Impact Redeem Codes for: Free Crystals, Bundles, Characters and more!", "img": "coupon_img/genshinimoact.webp", "href": "coupon/genshinimpactcodes-s-coupons-deals.html"}, {"slug": "vbucks-s-coupons-deals", "title": "Free V-Bucks & Fortnite Codes", "ratings": 2227, "coupons_left": 1173, "desc": "Get a Free 5,000 or 13,5000 Fortnite V-Bucks Redeem code in unrder 5 minutes!", "img": "coupon_img/vbucks.png", "href": "coupon/vbucks-s-coupons-deals.html"}, {"slug": "wreckfest2-s-coupons-deals", "title": "Wreckfest 2 - Free Game Code", "ratings": 11389, "coupons_left": 7748, "desc": "Wreckfest 2 Free Digital Game Code for all platforms; Xbox, Playstation and PC/Steam!", "img": "coupon_img/wreckfest2.jpg", "href": "coupon/wreckfest2-s-coupons-deals.html"}, {"slug": "melonplay-s-coupons-deal", "title": "Melon Playground Free Coins & No Ads", "ratings": 10377, "coupons_left": 1, "desc": "Get 12000 Free Coins & 1 Year no ads subscription in Melon Playground!", "img": "coupon_img/melonplayground.jpg", "href": "coupon/melonplay-s-coupons-deal.html"}, {"slug": "googleplay-s-coupons-deal", "title": "Google Play Gift Card Codes & Coupons", "ratings": 1940, "coupons_left": 3723, "desc": "Get a free $100 Google Play gift card code and redeem it today!", "img": "coupon_img/googleplay.webp", "href": "coupon/googleplay-s-coupons-deal.html"}, {"slug": "xbox-s-coupons-deal", "title": "Xbox Gift Card Codes & Coupons", "ratings": 2877, "coupons_left": 1082, "desc": "Get a free Xbox gift card code, free switch games, coupon codes and more!", "img": "coupon_img/xbox.jpeg", "href": "coupon/xbox-s-coupons-deal.html"}, {"slug": "atomfall-s-coupons-deals", "title": "Atomfall - Free Game Code", "ratings": 6689, "coupons_left": 11844, "desc": "Atomfall Free Digital Game Code for all platforms; Xbox, Playstation and PC/Steam!", "img": "coupon_img/atomfall.jpg", "href": "coupon/atomfall-s-coupons-deals.html"}, {"slug": "amazon-s-coupons-deals", "title": "Amazon Gift Card Codes & Coupons", "ratings": 1189, "coupons_left": 1139, "desc": "Up to 60% Off Selected Items - Join The Amazon Mailing List To Receive Insider Info on Sales & New Arrivals", "img": "coupon_img/amazon.png", "href": "coupon/amazon-s-coupons-deals.html"}, {"slug": "subwaysurfers-s-coupons-deal", "title": "Subway Surfers Free Coins & Keys", "ratings": 1183, "coupons_left": 3912, "desc": "Get 1M Free Coins and/or 500 Free Keys in Subway Surfers (Redeem Codes!).", "img": "coupon_img/subwaysurfers.png", "href": "coupon/subwaysurfers-s-coupons-deal.html"}, {"slug": "apexlegends-s-coupons-deals", "title": "Apex Legends Redeem Codes", "ratings": 9663, "coupons_left": 11744, "desc": "Get Free Coins, packs, skins and more in Apex Legends (Redeem Codes!).", "img": "coupon_img/apexlegends.webp", "href": "coupon/apexlegends-s-coupons-deals.html"}, {"slug": "justeat-coupons-deals", "title": "Just Eat Free Credit & Food Coupons", "ratings": 6390, "coupons_left": 4930, "desc": "Just Eat Coupon Codes - Get £100 Free Just Eat account Credit or your next 3 food orders free!", "img": "coupon_img/justeat.jpeg", "href": "coupon/justeat-coupons-deals.html"}, {"slug": "fetchrewards-s-coupons-deal", "title": "Free Fetch Rewards Points", "ratings": 3677, "coupons_left": 4750, "desc": "Get a 100,000 Free Fetch Rewards Points code now and claim your rewards completely free.", "img": "coupon_img/fetchrewards.webp", "href": "coupon/fetchrewards-s-coupons-deal.html"}, {"slug": "hinge-s-coupons-deals", "title": "Hinge Free Premium Upgrade Coupons", "ratings": 5339, "coupons_left": 9812, "desc": "Get a Free Hinge Upgrade coupon code - 12 months Premium Membership for free!", "img": "coupon_img/hinge.webp", "href": "coupon/hinge-s-coupons-deals.html"}, {"slug": "bumble-s-coupons-deals", "title": "Bumble Free Premium Upgrade Coupons", "ratings": 7334, "coupons_left": 3998, "desc": "Get a Free Bumble Upgrade coupon code - 12 months premium membership for free!", "img": "coupon_img/bumble.webp", "href": "coupon/bumble-s-coupons-deals.html"}, {"slug": "nintendo-s-coupons-deal", "title": "Nintendo Gift Cards & Codes", "ratings": 2651, "coupons_left": 977, "desc": "Get a free Nintendo gift card code, free switch games, coupon codes and more!", "img": "coupon_img/nintendo.png", "href": "coupon/nintendo-s-coupons-deal.html"}, {"slug": "psn-s-coupons-deal", "title": "PSN Gift Card Codes & Coupons", "ratings": 3981, "coupons_left": 1422, "desc": "Get a free PlayStation gift card code, free PS4 PS5 games, coupon codes and more!", "img": "coupon_img/psn.jpg", "href": "coupon/psn-s-coupons-deal.html"}, {"slug": "deliveroo-coupons-deals", "title": "Deliveroo Free Credit & Food Coupons", "ratings": 4724, "coupons_left": 8201, "desc": "Deliveroo Coupon Codes - Get £100 Free Deliveroo account Credit or your next 3 food orders free!", "img": "coupon_img/deliverooo.jpg", "href": "coupon/deliveroo-coupons-deals.html"}, {"slug": "paypal-s-coupons-deal", "title": "PayPal Money Gift Card Codes", "ratings": 1178, "coupons_left": 482, "desc": "Get a $250 PayPal Gift Card Code, or a 50% Off Coupon code to be applied at ANY PayPal available checkout.", "img": "coupon_img/paypal.jpeg", "href": "coupon/paypal-s-coupons-deal.html"}, {"slug": "brawlstars-s-coupons-deals", "title": "Brawl Stars Redeem Codes", "ratings": 10561, "coupons_left": 4978, "desc": "Get Brawl Stars Redeem Codes for Free Gems or a Free Brawl Pass Plus!", "img": "coupon_img/brawlstars.webp", "href": "coupon/brawlstars-s-coupons-deals.html"}, {"slug": "ubereats-s-coupons-deal", "title": "Uber Eats Free Credit & Food Coupons", "ratings": 673, "coupons_left": 1341, "desc": "Uber Eats Coupon Codes - Get $100 Free Uber Eats account Credit or your next 3 food order free!", "img": "coupon_img/ubereats.png", "href": "coupon/ubereats-s-coupons-deal.html"}, {"slug": "doordash-s-coupons-deal", "title": "DoorDash Free Credit & Food Coupons", "ratings": 1391, "coupons_left": 599, "desc": "DoorDash Coupon Codes - Get $100 Free DoorDash account Credit or your next 3 food orders free!", "img": "coupon_img/doordash.png", "href": "coupon/doordash-s-coupons-deal.html"}, {"slug": "mcdonalds-s-coupons-deal", "title": "McDonald's Coupons & Deals", "ratings": 1599, "coupons_left": 1429, "desc": "Get a 9,999 Free McDonald's Rewards Points Promo Code and / or Free Meal Coupons!", "img": "coupon_img/mcdonalds.jpg", "href": "coupon/mcdonalds-s-coupons-deal.html"}, {"slug": "netflix-s-coupons-deal", "title": "Netflix Plan Codes", "ratings": 733, "coupons_left": 780, "desc": "Get a Free Netflix Plan with these codes, choose either a Standard or Premium code!", "img": "coupon_img/netflix.jpg", "href": "coupon/netflix-s-coupons-deal.html"}, {"slug": "instagramfollowers-s-coupons-deal", "title": "Free Instagram Followers & Likes", "ratings": 4081, "coupons_left": 1, "desc": "Get Up to 5,000 Free Instagram Followers & Likes and grow your social media following in under 5 minutes!", "img": "coupon_img/instagramfollowers.jpeg", "href": "coupon/instagramfollowers-s-coupons-deal.html"}, {"slug": "airup-coupons-deals", "title": "Air Up Coupons & Deals", "ratings": 4581, "coupons_left": 3910, "desc": "Up to 60% Off Selected Items - Join The Air Up Mailing List To Receive Insider Info on Sales & New Arrivals", "img": "coupon_img/airup.jpg", "href": "coupon/airup-coupons-deals.html"}, {"slug": "reddead2-s-coupons-deals", "title": "Red Dead Redemption 2 - Free Game Code", "ratings": 2712, "coupons_left": 4821, "desc": "Red Dead Redemption 2 Free Digital Game Code for PS, XBOX and PC. Get yours now!", "img": "coupon_img/reddead2.jpg", "href": "coupon/reddead2-s-coupons-deals.html"}, {"slug": "eaplay-s-coupons-deal", "title": "EA Play Free Subscription", "ratings": 2111, "coupons_left": 1639, "desc": "Get a Free EA Play 12 Month subscription  with these free exclusive codes!", "img": "coupon_img/eaplay.png", "href": "coupon/eaplay-s-coupons-deal.html"}, {"slug": "lululemon-s-coupons-deals", "title": "Lululemon's Coupons & Deals", "ratings": 1064, "coupons_left": 492, "desc": "Grab a $100 Lululemon Coupon code or Get 50% off on your next Lululemon order, site-wide!", "img": "coupon_img/lululemon.jpeg", "href": "coupon/lululemon-s-coupons-deals.html"}, {"slug": "lyft-coupons-deals", "title": "Lyft Free Credit & Ride Coupons", "ratings": 1844, "coupons_left": 8109, "desc": "Lyft Coupon Codes - Get $100 Free Uber Credit or Free Lyft Rides", "img": "coupon_img/lyft.webp", "href": "coupon/lyft-coupons-deals.html"}, {"slug": "spotify-s-coupons-deal", "title": "Spotify Premium Codes", "ratings": 917, "coupons_left": 1006, "desc": "Free 6 Month Spotify Premium Coupon codes & $100 Spotify Gift Card Codes.", "img": "coupon_img/spotify.png", "href": "coupon/spotify-s-coupons-deal.html"}, {"slug": "tiktokcoins-s-coupons-deal", "title": "Free TikTok Coins", "ratings": 10733, "coupons_left": 8944, "desc": "Get Up to 25,000 Free TikTok Coins and grow your social media following in under 5 minutes!", "img": "coupon_img/tiktok.png", "href": "coupon/tiktokcoins-s-coupons-deal.html"}, {"slug": "fc24codes-s-coupons-deals", "title": "EA Sports FC 24 Redeem Codes", "ratings": 4710, "coupons_left": 5661, "desc": "FC 24 Redeem Codes for: Free Points, Free Packs and Free Star Pass & Gems for FC Mobile", "img": "coupon_img/fc24redeemcodes.jpg", "href": "coupon/fc24codes-s-coupons-deals.html"}, {"slug": "applemusic-s-coupons-deal", "title": "Apple Music Subscription / iTunes Codes", "ratings": 1006, "coupons_left": 5209, "desc": "Free 12 Month Apple Music Coupon codes & $100 iTunes Gift Card Codes.", "img": "coupon_img/applemusic.jpg", "href": "coupon/applemusic-s-coupons-deal.html"}, {"slug": "readyornot-s-coupons-deals", "title": "Ready Or Not - Free Game Code", "ratings": 1067, "coupons_left": 3001, "desc": "Ready Or Not Free Digital Game Code for PC or Steam, get your game code now!", "img": "coupon_img/readyornot.jpg", "href": "coupon/readyornot-s-coupons-deals.html"}, {"slug": "tiktokfollowers-s-coupons-deal", "title": "Free TikTok Followers", "ratings": 7442, "coupons_left": 4118, "desc": "Get Up to 5,000 Free TikTok Followers and grow your social media following in under 5 minutes!", "img": "coupon_img/tiktok.png", "href": "coupon/tiktokfollowers-s-coupons-deal.html"}, {"slug": "mw3-s-coupons-deals", "title": "Call of Duty Modern Warfare 3 - Free Digital Game Code", "ratings": 1332, "coupons_left": 2291, "desc": "Call of Duty Modern Warfare 3 Free Digital Game Code for Xbox, Playstation Consoles, Steam or PC!", "img": "coupon_img/mw3.jpg", "href": "coupon/mw3-s-coupons-deals.html"}];

  var ALIASES = {
    'fifa': ['ea sports fc 25', 'ea sports fc 24', 'fc 25', 'fc 24', 'football'],
    'fut': ['ea sports fc 25', 'ea sports fc 24'],
    'bo6': ['call of duty black ops 6'],
    'black ops': ['call of duty black ops 6'],
    'mw3': ['call of duty modern warfare 3'],
    'cod': ['call of duty', 'cod points'],
    'warzone': ['call of duty'],
    'vbucks': ['fortnite', 'v-bucks'],
    'v bucks': ['fortnite', 'v-bucks'],
    'fortnite': ['v-bucks'],
    'robux': ['roblox', 'blox fruits', 'bloxburg'],
    'roblox': ['blox fruits', 'bloxburg'],
    'psn': ['playstation', 'ps5', 'ps4'],
    'playstation': ['psn'],
    'xbox': ['game pass', 'microsoft'],
    'minecraft': ['mine craft'],
    'shein': ['shien', 'sheyn'],
    'pokemon': ['pokemongo', 'pokemontcg', 'pokecoins', 'pokémon'],
    'gta': ['vice online', 'grand theft auto'],
    'nba': ['nba 2k25', 'nba 2k24'],
    'switch': ['nintendo', 'zelda', 'donkey kong']
  };

  function normalize(str) {
    if (!str) return '';
    return str.toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/['’".,/#!$%^&*;:{}=\-_`~()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function damerauLevenshtein(a, b) {
    if (a === b) return 0;
    var al = a.length, bl = b.length;
    if (!al) return bl;
    if (!bl) return al;
    var m = [];
    for (var i = 0; i <= al; i++) { m[i] = [i]; }
    for (var j = 0; j <= bl; j++) { m[0][j] = j; }
    for (var i = 1; i <= al; i++) {
      for (var j = 1; j <= bl; j++) {
        var cost = a[i - 1] === b[j - 1] ? 0 : 1;
        m[i][j] = Math.min(
          m[i - 1][j] + 1,
          m[i][j - 1] + 1,
          m[i - 1][j - 1] + cost
        );
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          m[i][j] = Math.min(m[i][j], m[i - 2][j - 2] + 1);
        }
      }
    }
    return m[al][bl];
  }

  function searchCoupons(query, limit) {
    limit = limit || 8;
    var qNorm = normalize(query);
    if (!qNorm) return [];

    var qWords = qNorm.split(' ');
    var aliasTargets = [];
    for (var aliasKey in ALIASES) {
      if (aliasKey.indexOf(qNorm) !== -1 || qNorm.indexOf(aliasKey) !== -1) {
        aliasTargets = aliasTargets.concat(ALIASES[aliasKey]);
      }
    }

    var matches = [];
    for (var i = 0; i < COUPONS.length; i++) {
      var item = COUPONS[i];
      var tNorm = normalize(item.title);
      var sNorm = normalize(item.slug);
      var dNorm = normalize(item.desc);
      var tWords = tNorm.split(' ');
      var score = 0;

      // 1. Exact title match
      if (tNorm === qNorm) {
        score += 1000;
      }
      // 2. Title starts with query
      else if (tNorm.indexOf(qNorm) === 0) {
        score += 800 - (tNorm.length - qNorm.length);
      }
      // 3. Word in title starts with query
      else if (tWords.some(function(w) { return w.indexOf(qNorm) === 0; })) {
        score += 600;
      }
      // 4. Substring in title
      else if (tNorm.indexOf(qNorm) !== -1) {
        score += 500;
      }
      // 5. Substring in slug
      else if (sNorm.indexOf(qNorm) !== -1) {
        score += 450;
      }

      // 6. Alias match
      for (var a = 0; a < aliasTargets.length; a++) {
        var at = aliasTargets[a];
        if (tNorm.indexOf(at) !== -1 || sNorm.indexOf(at) !== -1) {
          score += 400;
          break;
        }
      }

      // 7. Word-level fuzzy typo match (Damerau-Levenshtein)
      for (var qw = 0; qw < qWords.length; qw++) {
        var qWord = qWords[qw];
        var wordMatched = false;
        for (var tw = 0; tw < tWords.length; tw++) {
          var tWord = tWords[tw];
          if (tWord === qWord) {
            score += 150;
            wordMatched = true;
            break;
          } else if (tWord.indexOf(qWord) === 0) {
            score += 100;
            wordMatched = true;
            break;
          } else if (qWord.length >= 4 && tWord.length >= 4) {
            var dist = damerauLevenshtein(qWord, tWord);
            if (dist === 1) {
              score += 85;
              wordMatched = true;
              break;
            } else if (dist === 2 && qWord.length >= 6 && tWord.length >= 6) {
              score += 50;
              wordMatched = true;
              break;
            }
          }
        }
      }

      // 8. Description match fallback
      if (score === 0 && dNorm.indexOf(qNorm) !== -1) {
        score += 100;
      }

      if (score > 0) {
        score += Math.min((item.ratings || 0) / 1000, 10);
        matches.push({ item: item, score: score });
      }
    }

    matches.sort(function(a, b) { return b.score - a.score; });
    var out = [];
    for (var m = 0; m < Math.min(matches.length, limit); m++) {
      out.push(matches[m].item);
    }
    return out;
  }

  function highlightMatch(title, query) {
    if (!query) return escapeHtml(title);
    var qNorm = normalize(query);
    if (!qNorm) return escapeHtml(title);
    var regex = new RegExp('(' + qNorm.split(' ').filter(Boolean).join('|') + ')', 'gi');
    return escapeHtml(title).replace(regex, '<mark>$1</mark>');
  }

  function escapeHtml(str) {
    return (str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderDropdown(items, query, wrapElem) {
    if (!wrapElem) return;
    if (!items || items.length === 0) {
      wrapElem.innerHTML = '<div class="search-dropdown"><div class="search-no-results">No coupons found matching "<strong>' + escapeHtml(query) + '</strong>". Try a different word or title.</div></div>';
      wrapElem.style.display = 'block';
      return;
    }

    var html = '<div class="search-dropdown">';
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      var href = it.href;
      html += '<a href="' + href + '" class="search-item" data-index="' + i + '">' +
        '<div class="search-item-img" style="background-image:url(' + it.img + ')"></div>' +
        '<div class="search-item-info">' +
          '<div class="search-item-title">' + highlightMatch(it.title, query) + '</div>' +
          '<div class="search-item-meta"><i class="fas fa-star text-warning me-1"></i>' + (it.ratings || 4500) + ' Ratings &bull; ' + (it.coupons_left || 500) + ' Left</div>' +
        '</div>' +
        '<div class="search-item-action">' +
          '<span class="search-item-badge">Show Code</span>' +
        '</div>' +
      '</a>';
    }
    html += '</div>';
    wrapElem.innerHTML = html;
    wrapElem.style.display = 'block';
  }

  function filterOnPageCards(matchingSlugs) {
    var allCards = document.querySelectorAll('#all .single-coupon');
    if (!allCards || allCards.length === 0) return;

    if (!matchingSlugs) {
      // Show all
      for (var i = 0; i < allCards.length; i++) {
        var parentLink = allCards[i].closest('a');
        if (parentLink) {
          parentLink.style.display = '';
        } else {
          allCards[i].style.display = '';
        }
      }
      var noMsg = document.getElementById('search-no-match-alert');
      if (noMsg) noMsg.remove();
      return;
    }

    var slugSet = {};
    for (var s = 0; s < matchingSlugs.length; s++) {
      slugSet[matchingSlugs[s]] = true;
    }

    var visibleCount = 0;
    for (var i = 0; i < allCards.length; i++) {
      var card = allCards[i];
      var parentLink = card.closest('a');
      var href = parentLink ? parentLink.getAttribute('href') : '';
      var matched = false;
      for (var slug in slugSet) {
        if (href && href.indexOf(slug) !== -1) {
          matched = true;
          break;
        }
      }
      if (matched) {
        if (parentLink) parentLink.style.display = '';
        else card.style.display = '';
        visibleCount++;
      } else {
        if (parentLink) parentLink.style.display = 'none';
        else card.style.display = 'none';
      }
    }

    var container = document.getElementById('all');
    var existingAlert = document.getElementById('search-no-match-alert');
    if (visibleCount === 0 && container) {
      if (!existingAlert) {
        var alertDiv = document.createElement('div');
        alertDiv.id = 'search-no-match-alert';
        alertDiv.className = 'col-12 text-center my-4 p-4 bg-light rounded border';
        alertDiv.innerHTML = '<h5 class="fw-bold mb-2">No matching coupons found in the main catalog</h5><p class="text-muted mb-0">Check the suggestions dropdown above or try searching by game, brand, or platform.</p>';
        container.prepend(alertDiv);
      }
    } else if (existingAlert) {
      existingAlert.remove();
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var searchForm = document.getElementById('search-form');
    var searchWrap = document.querySelector('.search-wrap');
    if (!searchInput) return;

    var activeIdx = -1;

    function handleInput() {
      var q = searchInput.value.trim();
      if (!q) {
        if (searchWrap) {
          searchWrap.innerHTML = '';
          searchWrap.style.display = 'none';
        }
        filterOnPageCards(null);
        activeIdx = -1;
        return;
      }

      var results = searchCoupons(q, 10);
      renderDropdown(results, q, searchWrap);

      var matchingSlugs = results.map(function(r) { return r.slug; });
      filterOnPageCards(matchingSlugs);
      activeIdx = -1;
    }

    searchInput.addEventListener('input', handleInput);

    searchInput.addEventListener('keydown', function(e) {
      if (!searchWrap || searchWrap.style.display === 'none') return;
      var items = searchWrap.querySelectorAll('.search-item');
      if (!items || items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIdx = (activeIdx + 1) % items.length;
        updateActiveItem(items, activeIdx);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIdx = (activeIdx - 1 + items.length) % items.length;
        updateActiveItem(items, activeIdx);
      } else if (e.key === 'Enter') {
        if (activeIdx >= 0 && items[activeIdx]) {
          e.preventDefault();
          items[activeIdx].click();
        }
      } else if (e.key === 'Escape') {
        searchWrap.style.display = 'none';
      }
    });

    function updateActiveItem(items, idx) {
      for (var i = 0; i < items.length; i++) {
        if (i === idx) {
          items[i].classList.add('active');
          items[i].scrollIntoView({ block: 'nearest' });
        } else {
          items[i].classList.remove('active');
        }
      }
    }

    if (searchForm) {
      searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var q = searchInput.value.trim();
        if (!q) return;
        var results = searchCoupons(q, 1);
        if (results && results.length > 0) {
          // If on homepage/keyword page, scroll smoothly to the filtered results
          var allElem = document.getElementById('all');
          if (allElem) {
            allElem.scrollIntoView({ behavior: 'smooth' });
            if (searchWrap) searchWrap.style.display = 'none';
          } else {
            window.location.href = results[0].href;
          }
        }
      });
    }

    // Hide dropdown on click outside
    document.addEventListener('click', function(e) {
      if (!searchWrap) return;
      if (!searchWrap.contains(e.target) && e.target !== searchInput) {
        searchWrap.style.display = 'none';
      }
    });

    // Re-open on focus if input has value
    searchInput.addEventListener('focus', function() {
      if (searchInput.value.trim() && searchWrap && searchWrap.innerHTML) {
        searchWrap.style.display = 'block';
      }
    });

    // URL parameter support: ?s=... or ?search=...
    var urlParams = new URLSearchParams(window.location.search);
    var urlQuery = urlParams.get('s') || urlParams.get('search') || urlParams.get('q');
    if (urlQuery) {
      searchInput.value = urlQuery;
      handleInput();
    }
  });
})();
