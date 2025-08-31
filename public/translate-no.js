// Auto-translate to Norwegian and apply PureBrush branding
(function () {
  // ensure brand theme is present (hybrid or static)
  (function ensureTheme(){const id='purebrush-theme-css';if(!document.getElementById(id)){const l=document.createElement('link');l.id=id;l.rel='stylesheet';l.href='/purebrush-theme.css';document.head.appendChild(l);}})();
  'use strict';
  
  // Kill any external chat widgets (e.g., Gorgias) that may be injected
  (function killChatWidgets(){
    try {
      const style = document.createElement('style');
      style.setAttribute('data-pb','kill-chat');
      style.textContent = `
        [id^="gorgias-chat-"],
        .gorgias-chat-key,
        [class^="gorgias-chat-key"],
        iframe[src*="gorgias.chat"],
        script[src*="gorgias.chat"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
          width: 0 !important;
          height: 0 !important;
        }
      `;
      document.head.appendChild(style);

      const removeMatches = (root=document) => {
        const sels = [
          '[id^="gorgias-chat-"]',
          '.gorgias-chat-key',
          '[class^="gorgias-chat-key"]',
          'iframe[src*="gorgias.chat"]',
          'script[src*="gorgias.chat"]'
        ];
        sels.forEach(sel => root.querySelectorAll(sel).forEach(n => { try { n.remove(); } catch(e){} }));
      };
      const tryRemove = () => { try { removeMatches(); } catch(e){} };
      // Initial and delayed passes
      tryRemove(); setTimeout(tryRemove, 250); setTimeout(tryRemove, 1000);
      
      // Observe for late injections
      const mo = new MutationObserver((muts)=>{
        for (const m of muts) {
          if (m.addedNodes && m.addedNodes.length) {
            m.addedNodes.forEach(n => {
              if (!(n instanceof Element)) return;
              if (
                n.matches?.('[id^="gorgias-chat-"]') ||
                n.matches?.('.gorgias-chat-key, [class^="gorgias-chat-key"]') ||
                (n.tagName === 'IFRAME' && (n.getAttribute('src')||'').includes('gorgias.chat')) ||
                (n.tagName === 'SCRIPT' && (n.getAttribute('src')||'').includes('gorgias.chat'))
              ) {
                try { n.remove(); } catch(e){}
              } else if (n.querySelector) {
                removeMatches(n);
              }
            });
          }
        }
      });
      mo.observe(document.documentElement, { childList: true, subtree: true });
    } catch (e) { /* noop */ }
  })();
  
  // Translation dictionaries
  const dictionaries = {};
  
  // Load translation dictionaries from JSON files
  const loadDictionaries = async () => {
    const pages = ['common', 'index', 'shop', 'how', 'about', 'should'];
    for (const page of pages) {
      try {
        const response = await fetch(`/i18n/no/${page}.json`);
        if (response.ok) {
          dictionaries[page] = await response.json();
        }
      } catch (e) {
        console.error(`Failed to load ${page} dictionary:`, e);
      }
    }
  };

  // Main translation function
  const translate = (text) => {
    if (!text) return text;
    
    // Check all dictionaries for exact matches
    for (const dict of Object.values(dictionaries)) {
      if (dict.exact && dict.exact[text]) {
        return dict.exact[text];
      }
    }
    
    // Check for pattern/regex matches (support both 'patterns' and 'regex' arrays)
    for (const dict of Object.values(dictionaries)) {
      // legacy object map support
      if (dict.patterns && typeof dict.patterns === 'object' && !Array.isArray(dict.patterns)) {
        for (const [pattern, replacement] of Object.entries(dict.patterns)) {
          try {
            const regex = new RegExp(pattern, 'gi');
            if (regex.test(text)) return text.replace(regex, replacement);
          } catch {}
        }
      }
      // array form: [{re, flags, to}]
      const patterns = Array.isArray(dict.regex) ? dict.regex : [];
      for (const entry of patterns) {
        try {
          const rx = new RegExp(entry.re, entry.flags || 'gi');
          if (rx.test(text)) return text.replace(rx, entry.to);
        } catch {}
      }
    }
    
    // Global brand replacement
    text = text.replace(/\bBril\b/g, 'PureBrush');
    text = text.replace(/\bbril\b/g, 'PureBrush');
    
    return text;
  };

  // Replace text in node recursively
  const replaceTextInNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const trimmed = node.textContent.trim();
      if (trimmed) {
        const translated = translate(trimmed);
        if (translated !== trimmed) {
          node.textContent = translated;
        }
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Skip script and style tags
      if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
        // Translate attributes
        if (node.hasAttribute('placeholder')) {
          node.setAttribute('placeholder', translate(node.getAttribute('placeholder')));
        }
        if (node.hasAttribute('alt')) {
          node.setAttribute('alt', translate(node.getAttribute('alt')));
        }
        if (node.hasAttribute('title')) {
          node.setAttribute('title', translate(node.getAttribute('title')));
        }
        
        // Translate child nodes
        for (let i = 0; i < node.childNodes.length; i++) {
          replaceTextInNode(node.childNodes[i]);
        }
      }
    }
  };

  // Main translation runner
  const run = () => {
    // helper: log likely missing English strings so we can add them fast
    const collectUntranslated = () => {
      try {
        const skip = new Set(['SCRIPT','STYLE','NOSCRIPT']);
        const w = document.createTreeWalker(document.body||document.documentElement, NodeFilter.SHOW_TEXT);
        const found = []; let n;
        while((n=w.nextNode())){ const p=n.parentElement; if(!p||skip.has(p.tagName)) continue; const t=(n.nodeValue||'').trim(); if(!t) continue; if(/[A-Za-z]/.test(t) && !/[æøåÆØÅ]/.test(t)) found.push(t.slice(0,140)); }
        if(found.length){ console.group('[PureBrush i18n] Add these to /public/i18n/no/*.json'); found.slice(0,60).forEach((s,i)=>console.log(`${i+1}.`, s)); console.groupEnd(); }
      } catch {}
    };
    setTimeout(collectUntranslated, 1600);
    replaceTextInNode(document.body);

    // Force logo/home links to the new static homepage (avoid Claude page)
    try {
      const logo = document.querySelector('a.navbar-brand, header .logo a, .logo a');
      if (logo) logo.setAttribute('href', '/index.html');
      document.querySelectorAll('a[href="/"]').forEach(a=>a.setAttribute('href','/index.html'));
    } catch (e) {}

    // Signal i18n is ready; only unhide when CSS + i18n are both ready
    (window.__pb = window.__pb || {}).i18nReady = true;
    if (window.__pbReadyMaybe) window.__pbReadyMaybe();
    // Live-translate any late content (navigations, dynamic sections)
    try{
      const throttle = (()=>{let t=0;return (fn)=>{if(t) return; t=requestAnimationFrame(()=>{t=0; fn();});};})();
      const mo = new MutationObserver(()=> throttle(()=> replaceTextInNode(document.body)));
      mo.observe(document.body, {subtree:true, childList:true, characterData:true});
    }catch(e){}
  };

  // Fix navigation labels - translate all header items
  const fixNavSterilizeLabel = () => {
    try {
      const navLinks = document.querySelectorAll('a.nav-link, .navbar a');
      navLinks.forEach(link => {
        const text = link.textContent?.trim();
        if (text) {
          const t = text.trim();
          // Translate navigation items
          if (t === 'Shop' || t === 'SHOP') {
            link.textContent = 'Butikk';
          } else if (/SHOULD I STERILIZE MY TOOTHBRUSH\??/i.test(t) || /Why should (you )?sterilize/i.test(t)) {
            link.textContent = 'Hvorfor UV-sterilisering?';
          } else if (t === 'How it works' || t === 'HOW IT WORKS') {
            link.textContent = 'Hvordan det fungerer';
          } else if (t === 'About us' || t === 'ABOUT US') {
            link.textContent = 'Om oss';
          } else if (t === 'Reviews' || t === 'REVIEWS') {
            link.textContent = 'Anmeldelser';
          } else if (t === 'Blog' || t === 'BLOG') {
            link.textContent = 'Blogg';
          }
        }
      });
    } catch {}
  };

  // Remove color variant section (we only have one color)
  const removeColorVariantSection = () => {
    try {
      // Find and remove "Modig til børstetuppen" section
      const sections = document.querySelectorAll('section, div.row');
      sections.forEach(section => {
        const text = section.textContent || '';
        if (text.includes('Modig til børstetuppen') || text.includes('Boldness by the bristle')) {
          section.remove();
        }
      });
    } catch {}
  };

  // Remove any paragraph that mentions multiple color options
  const removeColorCopyByContent = () => {
    try {
      const reNo = /Match\s+tannbørsten|syv\s+tydelige\s+farger/i;
      const reEn = /Match\s+your\s+brush|seven\s+bold\s+colors/i;
      const nodes = Array.from(document.querySelectorAll('p, div, li'));
      nodes.forEach((n) => {
        const t = (n.textContent || '').trim();
        if (reNo.test(t) || reEn.test(t)) {
          n.remove();
        }
      });
    } catch {}
  };

  // Page-specific hard translations for How page
  const hardTranslateHow = () => {
    try {
      const path = (location.pathname || '').toLowerCase();
      if (!/how\.html$/.test(path) && !/\/how(\?|$)/.test(path)) return;

      // If new hero exists, skip legacy hero adjustments
      if (document.getElementById('pb-how-hero')) {
        // bril -> PureBrush normalization only within new hero
        const allTextNodes0 = document.evaluate(
          "//text()[contains(., 'Bril')]",
          document.getElementById('pb-how-hero'),
          null,
          XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
          null
        );
        for (let i = 0; i < allTextNodes0.snapshotLength; i++) {
          const node = allTextNodes0.snapshotItem(i);
          if (node.nodeValue) node.nodeValue = node.nodeValue.replace(/\\bBril\\b/g, 'PureBrush');
        }
        return;
      }

      // More precise replacement that preserves HTML structure
      const replaceTextContent = (selector, oldText, newText) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el.textContent && el.textContent.includes(oldText)) {
            // Only replace if it's a direct text node
            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
              el.textContent = newText;
            }
          }
        });
      };

      // Main headline
      replaceTextContent('h1.headline', 'A million less things to worry about', 
        'En million færre ting å bekymre seg for');

      // Intro paragraph
      const introPara = document.querySelector('.txt.fs-20');
      if (introPara && introPara.textContent.includes('In environments that absolutely')) {
        introPara.textContent = 'I miljøer som absolutt må være rene, stoler fagfolk fra leger til astronauter på UV‑C‑lys for å drepe millioner av bakterier på få minutter. Nå kan du ta denne neste generasjons teknologien hjem for å desinfisere tannbørsten og fremme familiens generelle helse.';
      }

      // Feature headings
      replaceTextContent('h5', 'Works in 3 minutes', 'Ferdig på 3 minutter');
      replaceTextContent('h5', 'Fits every size toothbrush', 'Passer alle tannbørstestørrelser');
      
      // Handle "Portable & hangable" with HTML entity
      const h5s = document.querySelectorAll('h5');
      h5s.forEach(h5 => {
        if (h5.innerHTML && h5.innerHTML.includes('Portable') && h5.innerHTML.includes('hangable')) {
          h5.textContent = 'Bærbar og opphengbar';
        }
      });
      
      replaceTextContent('h5', 'USB charging', 'USB‑lading');

      // Feature descriptions
      const featureParas = document.querySelectorAll('.col-lg-3 p');
      featureParas.forEach(p => {
        const text = p.textContent || '';
        if (text.includes('Place the top of your brush inside')) {
          p.textContent = 'Sett toppen av tannbørsten inn i PureBrush, lukk lokket, og se det blå UV‑lyset gjøre jobben.';
        } else if (text.includes('is family friendly')) {
          p.textContent = 'PureBrush er familievennlig. Perfekt for barn, voksne og alle imellom.';
        } else if (text.includes('includes a powerful magnet')) {
          p.textContent = 'PureBrush har en kraftig magnet som lar deg henge den hvor du vil. Tilgjengelig for å matche stilen til andre moderne produkter i hjemmet.';
        } else if (text.includes('One full charge')) {
          p.textContent = 'Én full opplading og PureBrush er klar i en måned. Når det blå lyset blir rødt, plugger du inn den medfølgende USB‑kabelen og lader som andre smarte enheter.';
        }
      });

      // Bottom section
      replaceTextContent('h2', 'From outer space to your bathroom space', 
        'Fra verdensrommet til baderommet ditt');

      // Replace hero image with a video (non-destructive; uses poster fallback)
      const rightCol = document.querySelector('#how-section-1 .right');
      if (rightCol && !rightCol.querySelector('video')) {
        // Remove any legacy hero images entirely
        rightCol.querySelectorAll('img').forEach((el)=> el.remove());

        // Inject small CSS to keep layout tidy and mobile friendly
        if (!document.getElementById('pb-how-video-css')) {
          const st = document.createElement('style');
          st.id = 'pb-how-video-css';
          st.textContent = `
            /* kill legacy hero image and background */
            #how-section-1{background:none!important}
            #how-section-1 .right img{display:none!important;max-height:0!important;opacity:0!important}
            #how-section-1 .right{display:flex;justify-content:flex-start;align-items:center;overflow:hidden}
            #how-section-1 .right video.img-hero{width:115%;max-height:520px;border-radius:12px;object-fit:cover;object-position:left center;margin-left:-6%}
            #how-video-col{overflow:hidden}
            #how-video-col video.img-hero{width:100%;max-height:520px;border-radius:12px;object-fit:cover;object-position:left center}
            @media (max-width:768px){
              #how-section-1 .right video.img-hero{width:100%;margin-left:0;max-height:320px}
              #how-video-col video.img-hero{max-height:320px;min-height:220px}
            }
          `;
          document.head.appendChild(st);
        }

        const video = document.createElement('video');
        video.className = 'img-hero w-100';
        video.muted = true; video.autoplay = true; video.loop = true; video.playsInline = true;
        video.setAttribute('webkit-playsinline','true');
        const source = document.createElement('source');
        source.src = '/videos/how.mp4';
        source.type = 'video/mp4';
        video.appendChild(source);

        // Click to open a modal player (also bind to any left-side video)
        const openModal = () => {
          const overlay = document.createElement('div');
          overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px';
          const mv = document.createElement('video');
          mv.controls = true; mv.autoplay = true; mv.playsInline = true;
          mv.style.cssText = 'max-width:100%;max-height:100%;border-radius:12px;object-fit:contain;background:#000';
          const s = document.createElement('source'); s.src = '/videos/how.mp4'; s.type='video/mp4'; mv.appendChild(s);
          overlay.appendChild(mv);
          overlay.addEventListener('click', (e)=>{ if(e.target===overlay){ try{mv.pause();}catch{} overlay.remove(); }});
          document.body.appendChild(overlay);
        };
        video.addEventListener('click', openModal);
        const leftVideo = document.querySelector('#how-video-col video');
        if (leftVideo && !leftVideo.dataset.pbBound) { leftVideo.dataset.pbBound='1'; leftVideo.addEventListener('click', openModal); }

        rightCol.insertBefore(video, rightCol.firstChild);
      }

      // Replace any remaining Bril mentions
      const allTextNodes = document.evaluate(
        "//text()[contains(., 'Bril')]",
        document.body,
        null,
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
        null
      );
      for (let i = 0; i < allTextNodes.snapshotLength; i++) {
        const node = allTextNodes.snapshotItem(i);
        if (node.nodeValue) {
          node.nodeValue = node.nodeValue.replace(/\bBril\b/g, 'PureBrush');
        }
      }
    } catch (e) {
      console.error('Error in hardTranslateHow:', e);
    }
  };

  // Apply branding tweaks (logo + favicons)
  const applyBranding = () => {
    try {
      // Swap navbar logo
      const brandLink = document.querySelector('a.navbar-brand.logo');
      if (brandLink) {
        // IMPORTANT: Ensure the link stays on the same site
        brandLink.href = '/';
        
        const img = brandLink.querySelector('img');
        if (img) {
          img.src = '/images/purebrush-logo.svg';
          img.alt = 'PureBrush';
          img.removeAttribute('srcset');
          img.removeAttribute('height');
          img.style.height = window.innerWidth < 768 ? '76px' : '96px';
          img.style.width = 'auto';
        }
      }

      // Update favicon
      const head = document.head;
      if (head && !document.getElementById('pb-favicon')) {
        const fav = document.createElement('link');
        fav.id = 'pb-favicon';
        fav.rel = 'icon';
        fav.type = 'image/svg+xml';
        fav.href = '/images/purebrush-logo.svg';
        head.appendChild(fav);
      }
    } catch {}
  };

  // Hide broken external images
  const hideBrokenImages = () => {
    const imgs = Array.from(document.images || []);
    imgs.forEach((img) => {
      const hide = () => { img.style.display = 'none'; };
      img.addEventListener('error', hide, {once: true});
      if (img.complete && !img.naturalWidth) hide();
    });
  };

  // Load dictionaries then translate, with multiple passes for dynamic content
  (async () => {
    await loadDictionaries();
    const doPasses = () => {
      run(); 
      fixNavSterilizeLabel(); 
      hardTranslateHow();
      removeColorVariantSection();
      removeColorCopyByContent();
      setTimeout(() => { run(); fixNavSterilizeLabel(); hardTranslateHow(); removeColorVariantSection(); removeColorCopyByContent(); }, 500);
      setTimeout(() => { run(); fixNavSterilizeLabel(); hardTranslateHow(); removeColorVariantSection(); removeColorCopyByContent(); }, 1500);
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => { applyBranding(); hideBrokenImages(); doPasses(); }, {once: true});
    } else {
      applyBranding();
      hideBrokenImages();
      doPasses();
    }
  })();

  // Ensure the pre-hide class exists even if inline snippet didn't run
  try{document.documentElement.classList.add('pb-preload');}catch(e){}
  // Ensure we clear any global opacity hide if something stalls
  setTimeout(() => {
    try {
      document.documentElement.classList.remove('pb-preload');
      document.documentElement.style.opacity = '';
    } catch(e) {}
  }, 3000);
})();
