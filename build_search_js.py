import json
import os

BASE_DIR = r"c:\Users\m\Documents\robotcoupons"

with open(os.path.join(BASE_DIR, "coupons_list.json"), "r", encoding="utf-8") as f:
    coupons = json.load(f)

# Compact data for fast loading
search_items = []
for c in coupons:
    search_items.append({
        "slug": c["slug"],
        "title": c["title"],
        "ratings": c.get("ratings", 4500),
        "coupons_left": c.get("coupons_left", 1200),
        "desc": c.get("desc", ""),
        "img": c.get("img", "coupon_img/eafc25.png"),
        "href": f"coupon/{c['slug']}.html"
    })

coupons_json = json.dumps(search_items, ensure_ascii=False)

js_content = f"""/**
 * RobotCoupons Intelligent Fuzzy Search Engine
 * International measures: diacritic-insensitive, typo-tolerant (Levenshtein), alias-expanded, instant response
 */
(function() {{
  'use strict';

  var COUPONS = {coupons_json};

  var ALIASES = {{
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
  }};

  function normalize(str) {{
    if (!str) return '';
    return str.toString()
      .normalize('NFD')
      .replace(/[\\u0300-\\u036f]/g, '')
      .toLowerCase()
      .replace(/['’".,/#!$%^&*;:{{}}=\\-_`~()]/g, ' ')
      .replace(/\\s+/g, ' ')
      .trim();
  }}

  function damerauLevenshtein(a, b) {{
    if (a === b) return 0;
    var al = a.length, bl = b.length;
    if (!al) return bl;
    if (!bl) return al;
    var m = [];
    for (var i = 0; i <= al; i++) {{ m[i] = [i]; }}
    for (var j = 0; j <= bl; j++) {{ m[0][j] = j; }}
    for (var i = 1; i <= al; i++) {{
      for (var j = 1; j <= bl; j++) {{
        var cost = a[i - 1] === b[j - 1] ? 0 : 1;
        m[i][j] = Math.min(
          m[i - 1][j] + 1,
          m[i][j - 1] + 1,
          m[i - 1][j - 1] + cost
        );
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {{
          m[i][j] = Math.min(m[i][j], m[i - 2][j - 2] + 1);
        }}
      }}
    }}
    return m[al][bl];
  }}

  function searchCoupons(query, limit) {{
    limit = limit || 8;
    var qNorm = normalize(query);
    if (!qNorm) return [];

    var qWords = qNorm.split(' ');
    var aliasTargets = [];
    for (var aliasKey in ALIASES) {{
      if (aliasKey.indexOf(qNorm) !== -1 || qNorm.indexOf(aliasKey) !== -1) {{
        aliasTargets = aliasTargets.concat(ALIASES[aliasKey]);
      }}
    }}

    var matches = [];
    for (var i = 0; i < COUPONS.length; i++) {{
      var item = COUPONS[i];
      var tNorm = normalize(item.title);
      var sNorm = normalize(item.slug);
      var dNorm = normalize(item.desc);
      var tWords = tNorm.split(' ');
      var score = 0;

      // 1. Exact title match
      if (tNorm === qNorm) {{
        score += 1000;
      }}
      // 2. Title starts with query
      else if (tNorm.indexOf(qNorm) === 0) {{
        score += 800 - (tNorm.length - qNorm.length);
      }}
      // 3. Word in title starts with query
      else if (tWords.some(function(w) {{ return w.indexOf(qNorm) === 0; }})) {{
        score += 600;
      }}
      // 4. Substring in title
      else if (tNorm.indexOf(qNorm) !== -1) {{
        score += 500;
      }}
      // 5. Substring in slug
      else if (sNorm.indexOf(qNorm) !== -1) {{
        score += 450;
      }}

      // 6. Alias match
      for (var a = 0; a < aliasTargets.length; a++) {{
        var at = aliasTargets[a];
        if (tNorm.indexOf(at) !== -1 || sNorm.indexOf(at) !== -1) {{
          score += 400;
          break;
        }}
      }}

      // 7. Word-level fuzzy typo match (Damerau-Levenshtein)
      for (var qw = 0; qw < qWords.length; qw++) {{
        var qWord = qWords[qw];
        var wordMatched = false;
        for (var tw = 0; tw < tWords.length; tw++) {{
          var tWord = tWords[tw];
          if (tWord === qWord) {{
            score += 150;
            wordMatched = true;
            break;
          }} else if (tWord.indexOf(qWord) === 0) {{
            score += 100;
            wordMatched = true;
            break;
          }} else if (qWord.length >= 4 && tWord.length >= 4) {{
            var dist = damerauLevenshtein(qWord, tWord);
            if (dist === 1) {{
              score += 85;
              wordMatched = true;
              break;
            }} else if (dist === 2 && qWord.length >= 6 && tWord.length >= 6) {{
              score += 50;
              wordMatched = true;
              break;
            }}
          }}
        }}
      }}

      // 8. Description match fallback
      if (score === 0 && dNorm.indexOf(qNorm) !== -1) {{
        score += 100;
      }}

      if (score > 0) {{
        score += Math.min((item.ratings || 0) / 1000, 10);
        matches.push({{ item: item, score: score }});
      }}
    }}

    matches.sort(function(a, b) {{ return b.score - a.score; }});
    var out = [];
    for (var m = 0; m < Math.min(matches.length, limit); m++) {{
      out.push(matches[m].item);
    }}
    return out;
  }}

  function highlightMatch(title, query) {{
    if (!query) return escapeHtml(title);
    var qNorm = normalize(query);
    if (!qNorm) return escapeHtml(title);
    var regex = new RegExp('(' + qNorm.split(' ').filter(Boolean).join('|') + ')', 'gi');
    return escapeHtml(title).replace(regex, '<mark>$1</mark>');
  }}

  function escapeHtml(str) {{
    return (str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }}

  function renderDropdown(items, query, wrapElem) {{
    if (!wrapElem) return;
    if (!items || items.length === 0) {{
      wrapElem.innerHTML = '<div class="search-dropdown"><div class="search-no-results">No coupons found matching "<strong>' + escapeHtml(query) + '</strong>". Try a different word or title.</div></div>';
      wrapElem.style.display = 'block';
      return;
    }}

    var html = '<div class="search-dropdown">';
    for (var i = 0; i < items.length; i++) {{
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
    }}
    html += '</div>';
    wrapElem.innerHTML = html;
    wrapElem.style.display = 'block';
  }}

  function filterOnPageCards(matchingSlugs) {{
    var allCards = document.querySelectorAll('#all .single-coupon');
    if (!allCards || allCards.length === 0) return;

    if (!matchingSlugs) {{
      // Show all
      for (var i = 0; i < allCards.length; i++) {{
        var parentLink = allCards[i].closest('a');
        if (parentLink) {{
          parentLink.style.display = '';
        }} else {{
          allCards[i].style.display = '';
        }}
      }}
      var noMsg = document.getElementById('search-no-match-alert');
      if (noMsg) noMsg.remove();
      return;
    }}

    var slugSet = {{}};
    for (var s = 0; s < matchingSlugs.length; s++) {{
      slugSet[matchingSlugs[s]] = true;
    }}

    var visibleCount = 0;
    for (var i = 0; i < allCards.length; i++) {{
      var card = allCards[i];
      var parentLink = card.closest('a');
      var href = parentLink ? parentLink.getAttribute('href') : '';
      var matched = false;
      for (var slug in slugSet) {{
        if (href && href.indexOf(slug) !== -1) {{
          matched = true;
          break;
        }}
      }}
      if (matched) {{
        if (parentLink) parentLink.style.display = '';
        else card.style.display = '';
        visibleCount++;
      }} else {{
        if (parentLink) parentLink.style.display = 'none';
        else card.style.display = 'none';
      }}
    }}

    var container = document.getElementById('all');
    var existingAlert = document.getElementById('search-no-match-alert');
    if (visibleCount === 0 && container) {{
      if (!existingAlert) {{
        var alertDiv = document.createElement('div');
        alertDiv.id = 'search-no-match-alert';
        alertDiv.className = 'col-12 text-center my-4 p-4 bg-light rounded border';
        alertDiv.innerHTML = '<h5 class="fw-bold mb-2">No matching coupons found in the main catalog</h5><p class="text-muted mb-0">Check the suggestions dropdown above or try searching by game, brand, or platform.</p>';
        container.prepend(alertDiv);
      }}
    }} else if (existingAlert) {{
      existingAlert.remove();
    }}
  }}

  document.addEventListener('DOMContentLoaded', function() {{
    var searchInput = document.getElementById('searchInput');
    var searchForm = document.getElementById('search-form');
    var searchWrap = document.querySelector('.search-wrap');
    if (!searchInput) return;

    var activeIdx = -1;

    function handleInput() {{
      var q = searchInput.value.trim();
      if (!q) {{
        if (searchWrap) {{
          searchWrap.innerHTML = '';
          searchWrap.style.display = 'none';
        }}
        filterOnPageCards(null);
        activeIdx = -1;
        return;
      }}

      var results = searchCoupons(q, 10);
      renderDropdown(results, q, searchWrap);

      var matchingSlugs = results.map(function(r) {{ return r.slug; }});
      filterOnPageCards(matchingSlugs);
      activeIdx = -1;
    }}

    searchInput.addEventListener('input', handleInput);

    searchInput.addEventListener('keydown', function(e) {{
      if (!searchWrap || searchWrap.style.display === 'none') return;
      var items = searchWrap.querySelectorAll('.search-item');
      if (!items || items.length === 0) return;

      if (e.key === 'ArrowDown') {{
        e.preventDefault();
        activeIdx = (activeIdx + 1) % items.length;
        updateActiveItem(items, activeIdx);
      }} else if (e.key === 'ArrowUp') {{
        e.preventDefault();
        activeIdx = (activeIdx - 1 + items.length) % items.length;
        updateActiveItem(items, activeIdx);
      }} else if (e.key === 'Enter') {{
        if (activeIdx >= 0 && items[activeIdx]) {{
          e.preventDefault();
          items[activeIdx].click();
        }}
      }} else if (e.key === 'Escape') {{
        searchWrap.style.display = 'none';
      }}
    }});

    function updateActiveItem(items, idx) {{
      for (var i = 0; i < items.length; i++) {{
        if (i === idx) {{
          items[i].classList.add('active');
          items[i].scrollIntoView({{ block: 'nearest' }});
        }} else {{
          items[i].classList.remove('active');
        }}
      }}
    }}

    if (searchForm) {{
      searchForm.addEventListener('submit', function(e) {{
        e.preventDefault();
        var q = searchInput.value.trim();
        if (!q) return;
        var results = searchCoupons(q, 1);
        if (results && results.length > 0) {{
          // If on homepage/keyword page, scroll smoothly to the filtered results
          var allElem = document.getElementById('all');
          if (allElem) {{
            allElem.scrollIntoView({{ behavior: 'smooth' }});
            if (searchWrap) searchWrap.style.display = 'none';
          }} else {{
            window.location.href = results[0].href;
          }}
        }}
      }});
    }}

    // Hide dropdown on click outside
    document.addEventListener('click', function(e) {{
      if (!searchWrap) return;
      if (!searchWrap.contains(e.target) && e.target !== searchInput) {{
        searchWrap.style.display = 'none';
      }}
    }});

    // Re-open on focus if input has value
    searchInput.addEventListener('focus', function() {{
      if (searchInput.value.trim() && searchWrap && searchWrap.innerHTML) {{
        searchWrap.style.display = 'block';
      }}
    }});

    // URL parameter support: ?s=... or ?search=...
    var urlParams = new URLSearchParams(window.location.search);
    var urlQuery = urlParams.get('s') || urlParams.get('search') || urlParams.get('q');
    if (urlQuery) {{
      searchInput.value = urlQuery;
      handleInput();
    }}
  }});
}})();
"""

with open(os.path.join(BASE_DIR, "view", "assets", "js", "search.js"), "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Generated {os.path.join(BASE_DIR, 'view', 'assets', 'js', 'search.js')} successfully!")
