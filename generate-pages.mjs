import fs from 'fs';

// ── Shared NAV (updated palette + logo image + lang toggle + data-i18n) ──
const NAV = `
  <div class="mobile-nav-overlay" id="mobileOverlay"></div>
  <div class="mobile-nav-drawer" id="mobileDrawer">
    <div class="mobile-section-label" data-i18n="nav.buying">Buying</div>
    <a href="buy-house.html" data-i18n="nav.houses">Houses</a>
    <a href="buy-condo.html" data-i18n="nav.condo">Condo</a>
    <a href="buy-land.html" data-i18n="nav.land">Land</a>
    <div class="mobile-section-label" data-i18n="nav.selling">Selling</div>
    <a href="sell-house.html" data-i18n="nav.houses">Houses</a>
    <a href="sell-condo.html" data-i18n="nav.condo">Condo</a>
    <a href="sell-land.html" data-i18n="nav.land">Land</a>
    <div class="mobile-section-label" data-i18n="nav.services">Services</div>
    <a href="renting.html" data-i18n="nav.svc_renting">Renting</a>
    <a href="relocating.html" data-i18n="nav.svc_relocating">Relocating</a>
    <a href="pet-friendly.html" data-i18n="nav.svc_pet">Pet Friendly</a>
    <a href="investing.html" data-i18n="nav.svc_investing">Investing</a>
    <a href="construction.html" data-i18n="nav.svc_construction">Construction &amp; Renovation</a>
    <a href="consulting.html" data-i18n="nav.svc_consulting">Consulting</a>
    <a href="why-thailand.html" data-i18n="nav.why_thailand">Why Thailand</a>
    <a href="about.html" data-i18n="nav.about">About</a>
    <a href="https://lin.ee/H5iMNKQ" target="_blank" class="mobile-book-btn" data-i18n="nav.book_consultation">Book Consultation</a>
    <div class="mobile-lang">
      <button class="lang-btn active" data-lang="en">EN</button>
      <button class="lang-btn" data-lang="th">TH</button>
    </div>
  </div>
  <nav id="mainNav">
    <a href="index.html" class="nav-logo">Fatboys Living Estate</a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-dropdown-toggle"><span data-i18n="nav.buy_sell">Buying/Selling</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="nav-dropdown-menu">
          <div class="nav-dd-col">
            <div class="nav-dd-heading" data-i18n="nav.buying">Buying</div>
            <div class="nav-dd-items">
              <a href="buy-house.html" class="nav-dd-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg><span data-i18n="nav.houses">Houses</span></a>
              <a href="buy-condo.html" class="nav-dd-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="18" rx="1"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="12" y1="9" x2="12" y2="21"/></svg><span data-i18n="nav.condo">Condo</span></a>
              <a href="buy-land.html" class="nav-dd-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 22h20"/><path d="M6 18V8l6-5 6 5v10"/><path d="M9 22v-4h6v4"/></svg><span data-i18n="nav.land">Land</span></a>
            </div>
          </div>
          <div class="nav-dd-col">
            <div class="nav-dd-heading" data-i18n="nav.selling">Selling</div>
            <div class="nav-dd-items">
              <a href="sell-house.html" class="nav-dd-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg><span data-i18n="nav.houses">Houses</span></a>
              <a href="sell-condo.html" class="nav-dd-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="18" rx="1"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="12" y1="9" x2="12" y2="21"/></svg><span data-i18n="nav.condo">Condo</span></a>
              <a href="sell-land.html" class="nav-dd-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 22h20"/><path d="M6 18V8l6-5 6 5v10"/><path d="M9 22v-4h6v4"/></svg><span data-i18n="nav.land">Land</span></a>
            </div>
          </div>
        </div>
      </div>
      <a href="why-thailand.html" data-i18n="nav.why_thailand">Why Thailand</a>
      <a href="about.html" data-i18n="nav.about">About</a>
      <div class="nav-dropdown">
        <button class="nav-dropdown-toggle"><span data-i18n="nav.services">Services</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="nav-dropdown-menu nav-dd-single">
          <div class="nav-dd-col" style="border-right:none">
            <div class="nav-dd-heading" data-i18n="nav.what_we_offer">What We Offer</div>
            <div class="nav-dd-items">
              <a href="renting.html" class="nav-dd-item"><span class="nav-dd-item-left"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg><span data-i18n="nav.svc_renting">Renting</span></span><span class="nav-dd-item-arrow">→</span></a>
              <a href="relocating.html" class="nav-dd-item"><span class="nav-dd-item-left"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg><span data-i18n="nav.svc_relocating">Relocating</span></span><span class="nav-dd-item-arrow">→</span></a>
              <a href="pet-friendly.html" class="nav-dd-item"><span class="nav-dd-item-left"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><span data-i18n="nav.svc_pet">Pet Friendly</span></span><span class="nav-dd-item-arrow">→</span></a>
              <a href="investing.html" class="nav-dd-item"><span class="nav-dd-item-left"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg><span data-i18n="nav.svc_investing">Investing</span></span><span class="nav-dd-item-arrow">→</span></a>
              <a href="construction.html" class="nav-dd-item"><span class="nav-dd-item-left"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 20h20"/><path d="M17 20V8l-5-5-5 5v12"/><path d="M9 20v-5h6v5"/></svg><span data-i18n="nav.svc_construction">Construction &amp; Renovation</span></span><span class="nav-dd-item-arrow">→</span></a>
              <a href="consulting.html" class="nav-dd-item"><span class="nav-dd-item-left"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span data-i18n="nav.svc_consulting">Consulting</span></span><span class="nav-dd-item-arrow">→</span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="lang-toggle" id="langToggle">
        <button class="lang-btn active" data-lang="en">EN</button>
        <span class="lang-sep">|</span>
        <button class="lang-btn" data-lang="th">TH</button>
      </div>
      <a href="https://lin.ee/H5iMNKQ" target="_blank" class="btn-nav" data-i18n="nav.book_consultation">Book Consultation</a>
    </div>
    <button class="nav-hamburger" id="hamburgerBtn" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </nav>`;

// ── Shared FOOTER (updated palette + logo image + data-i18n) ──
const FOOTER = `
  <footer>
    <div class="footer-grid">
      <div>
        <p class="footer-brand-desc" data-i18n="footer.brand_desc">Thailand's most trusted real estate community. Connecting people with exceptional properties and building lives across the Kingdom since 2016.</p>
        <div style="display:flex;gap:.75rem;margin-top:1.5rem">
          <a href="https://www.facebook.com/share/1M5e6w6kzU/" target="_blank" class="footer-social">f</a><a href="https://wa.me/66829473350" target="_blank" class="footer-social"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.141 1.535 5.879L.057 23.625a.5.5 0 0 0 .618.618l5.746-1.478A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.952 9.952 0 0 1-5.166-1.448l-.371-.22-3.846.988.988-3.846-.22-.371A9.952 9.952 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg></a>
        </div>
      </div>
      <div>
        <div class="footer-heading" data-i18n="footer.h_services">Services</div>
        <div class="footer-links">
          <a href="renting.html" data-i18n="nav.svc_renting">Renting</a>
          <a href="relocating.html" data-i18n="nav.svc_relocating">Relocating</a>
          <a href="pet-friendly.html" data-i18n="nav.svc_pet">Pet Friendly</a>
          <a href="investing.html" data-i18n="nav.svc_investing">Investing</a>
          <a href="construction.html" data-i18n="nav.svc_construction">Construction</a>
          <a href="consulting.html" data-i18n="nav.svc_consulting">Consulting</a>
        </div>
      </div>
      <div>
        <div class="footer-heading" data-i18n="footer.h_locations">Locations</div>
        <div class="footer-links">
          <a href="#">Phuket</a><a href="#">Bangkok</a><a href="#">Koh Samui</a><a href="#">Chiang Mai</a>
        </div>
      </div>
      <div>
        <div class="footer-heading" data-i18n="footer.h_company">Company</div>
        <div class="footer-links">
          <a href="about.html" data-i18n="footer.about_us">About Us</a>
          <a href="index.html#contact" data-i18n="footer.contact_us">Contact</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-i18n="footer.copyright">© 2026 FatBoys Real Estate Thailand. All rights reserved.</span>
      <div style="display:flex;gap:2rem">
        <a href="#" style="color:inherit;text-decoration:none" data-i18n="footer.privacy">Privacy Policy</a>
        <a href="#" style="color:inherit;text-decoration:none" data-i18n="footer.terms">Terms</a>
      </div>
    </div>
  </footer>`;

// ── Shared CSS (updated palette + lang toggle) ──
const SHARED_CSS = `
  :root{
    --warm-sand:#C8B88A;
    --forest-green:#233d00;
    --burnt-sienna:#C06A4A;
    --dark-walnut:#1E2618;
    --linen-white:#ECE8DC;
    --stone-grey:#908C84;
    --dark-walnut-deep:#14180E;
    --forest-light:#2f5200;
    --sand-light:#DDD0B0;
    --rocky-stone:#B8B4AE;
    --stone-dark:#6A6660;
  }
  *{box-sizing:border-box}html{scroll-behavior:smooth}
  body{font-family:'DM Sans',sans-serif;background:var(--dark-walnut);color:var(--linen-white);overflow-x:hidden;cursor:none;margin:0}
  .cursor{width:8px;height:8px;background:var(--burnt-sienna);border-radius:50%;position:fixed;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:width .2s,height .2s}
  .cursor-ring{width:32px;height:32px;border:1px solid rgba(200,184,138,.5);border-radius:50%;position:fixed;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:all .12s cubic-bezier(.25,.46,.45,.94)}
  .grain{position:fixed;inset:0;pointer-events:none;z-index:9990;opacity:.035;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");background-size:200px}
  nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:1rem 3rem;display:flex;align-items:center;justify-content:space-between;background:rgba(0,0,0,.97);backdrop-filter:blur(16px);border-bottom:1px solid rgba(200,184,138,.1)}
  .nav-logo{display:flex;align-items:center;text-decoration:none;font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:600;letter-spacing:.04em;color:var(--linen-white);white-space:nowrap}
  .footer-logo img{height:60px;width:auto;display:block;filter:brightness(0) invert(1)}
  .nav-links{display:flex;gap:2.5rem;align-items:center}
  .nav-links a{font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(236,232,220,.7);text-decoration:none;font-weight:400;transition:color .2s;position:relative}
  .nav-links a::after{content:'';position:absolute;bottom:-3px;left:0;right:0;height:1px;background:var(--burnt-sienna);transform:scaleX(0);transition:transform .25s;transform-origin:left}
  .nav-links a:hover{color:var(--warm-sand)}.nav-links a:hover::after{transform:scaleX(1)}
  .nav-dropdown{position:relative}
  .nav-dropdown-toggle{font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(236,232,220,.7);background:none;border:none;font-family:'DM Sans',sans-serif;font-weight:400;cursor:none;display:flex;align-items:center;gap:.4rem;padding:0;transition:color .2s;position:relative}
  .nav-dropdown-toggle::after{content:'';position:absolute;bottom:-3px;left:0;right:0;height:1px;background:var(--burnt-sienna);transform:scaleX(0);transition:transform .25s;transform-origin:left}
  .nav-dropdown-toggle svg{transition:transform .25s}
  .nav-dropdown:hover .nav-dropdown-toggle{color:var(--warm-sand)}
  .nav-dropdown:hover .nav-dropdown-toggle::after{transform:scaleX(1)}
  .nav-dropdown:hover .nav-dropdown-toggle svg{transform:rotate(180deg)}
  .nav-dropdown-menu{position:absolute;top:calc(100% + 0.6rem);left:50%;transform:translateX(-50%) translateY(6px);min-width:480px;background:rgba(10,14,8,.97);backdrop-filter:blur(20px);border:1px solid rgba(200,184,138,.12);padding:1.5rem;opacity:0;pointer-events:none;transition:opacity 0.2s,transform 0.2s;z-index:200;display:grid;grid-template-columns:1fr 1fr;gap:0}
  .nav-dropdown-menu::before{content:'';position:absolute;top:-0.8rem;left:0;right:0;height:0.8rem}
  .nav-dropdown:hover .nav-dropdown-menu{opacity:1;pointer-events:all;transform:translateX(-50%) translateY(0);transition:opacity 0.22s 0s,transform 0.22s 0s}
  .nav-dd-single{min-width:260px;grid-template-columns:1fr}
  .nav-dd-col{padding:.5rem 1rem}.nav-dd-col:first-child{border-right:1px solid rgba(200,184,138,.1)}
  .nav-dd-heading{font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--burnt-sienna);font-weight:600;margin-bottom:.85rem;display:flex;align-items:center;gap:.5rem}
  .nav-dd-heading::before{content:'';width:16px;height:1px;background:var(--burnt-sienna)}
  .nav-dd-items{display:flex;flex-direction:column;gap:.1rem}
  .nav-dd-item{display:flex;align-items:center;justify-content:space-between;padding:.6rem .75rem;color:rgba(200,184,138,.65);text-decoration:none;font-size:.82rem;font-weight:300;letter-spacing:.04em;transition:color .18s,background .18s,padding-left .18s;border-radius:2px;cursor:none;border-left:2px solid transparent}
  .nav-dd-item-left{display:flex;align-items:center;gap:.75rem}
  .nav-dd-item-arrow{font-size:.75rem;opacity:0;transform:translateX(-4px);transition:opacity .18s,transform .18s;color:var(--burnt-sienna)}
  .nav-dd-item:hover{color:var(--warm-sand);background:rgba(200,184,138,.06);border-left-color:var(--burnt-sienna);padding-left:1rem}
  .nav-dd-item:hover .nav-dd-item-arrow{opacity:1;transform:translateX(0)}
  .nav-dd-item svg{color:var(--forest-green);flex-shrink:0}
  .btn-nav{padding:.55rem 1.4rem;background:var(--forest-green);border:1px solid var(--forest-green);color:var(--warm-sand);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;cursor:none;font-family:'DM Sans',sans-serif;transition:background .25s,border-color .25s,color .25s}
  .btn-nav:hover{background:var(--warm-sand);color:var(--dark-walnut-deep);border-color:var(--warm-sand)}
  .btn-forest{padding:.9rem 2.2rem;background:var(--forest-green);color:var(--linen-white);font-family:'DM Sans',sans-serif;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;font-weight:600;border:none;cursor:none;transition:background .25s;display:inline-block;text-decoration:none}
  .btn-forest:hover{background:var(--forest-light)}
  footer{background:var(--dark-walnut-deep);padding:4rem 7rem 2.5rem;border-top:1px solid rgba(200,184,138,.1)}
  .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:4rem;margin-bottom:3.5rem}
  .footer-brand-desc{font-size:.85rem;line-height:1.75;color:rgba(144,140,132,.8);font-weight:300;margin-top:1.25rem;max-width:280px}
  .footer-heading{font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:var(--warm-sand);font-weight:600;margin-bottom:1.25rem}
  .footer-links{display:flex;flex-direction:column;gap:.65rem}
  .footer-links a{font-size:.83rem;color:rgba(144,140,132,.75);text-decoration:none;font-weight:300;transition:color .2s}
  .footer-links a:hover{color:var(--warm-sand)}
  .footer-social{width:34px;height:34px;border:1px solid rgba(200,184,138,.15);display:flex;align-items:center;justify-content:center;color:var(--stone-grey);font-size:.78rem;text-decoration:none;transition:border-color .2s,color .2s;cursor:none}
  .footer-social:hover{border-color:var(--warm-sand);color:var(--warm-sand)}
  .footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:2rem;border-top:1px solid rgba(200,184,138,.08);font-size:.7rem;color:rgba(144,140,132,.5)}
  .reveal{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.25,.46,.45,.94),transform .7s cubic-bezier(.25,.46,.45,.94)}
  .reveal.visible{opacity:1;transform:translateY(0)}
  .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}
  .lang-toggle{display:flex;align-items:center;gap:.15rem;background:rgba(200,184,138,.08);border:1px solid rgba(200,184,138,.18);border-radius:20px;padding:.2rem .5rem}
  .lang-btn{background:none;border:none;color:var(--stone-grey);font-family:'DM Sans',sans-serif;font-size:.68rem;font-weight:700;letter-spacing:.12em;cursor:none;padding:.18rem .45rem;border-radius:12px;transition:background .22s,color .22s}
  .lang-btn.active{background:var(--warm-sand);color:var(--dark-walnut-deep)}
  .lang-btn:hover:not(.active){color:var(--warm-sand)}
  .lang-sep{color:rgba(200,184,138,.22);font-size:.6rem}
  .nav-hamburger{display:none;flex-direction:column;justify-content:center;gap:5px;background:none;border:none;cursor:pointer;padding:4px;z-index:201}
  .nav-hamburger span{display:block;width:24px;height:2px;background:var(--linen-white);transition:all .3s}
  .nav-hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
  .nav-hamburger.open span:nth-child(2){opacity:0}
  .nav-hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
  .mobile-nav-overlay{display:none;position:fixed;inset:0;z-index:199;background:rgba(0,0,0,.5);backdrop-filter:blur(4px)}
  .mobile-nav-overlay.open{display:block}
  .mobile-nav-drawer{display:none;position:fixed;top:0;right:-100%;width:min(320px,85vw);height:100dvh;background:#0d1209;z-index:200;flex-direction:column;padding:5rem 2rem 2rem;transition:right .35s cubic-bezier(.4,0,.2,1);overflow-y:auto}
  .mobile-nav-drawer.open{right:0}
  .mobile-nav-drawer a,.mobile-nav-drawer button{display:block;color:var(--linen-white);text-decoration:none;font-size:1rem;letter-spacing:.06em;text-transform:uppercase;padding:.85rem 0;border-bottom:1px solid rgba(200,184,138,.1);background:none;border-left:none;border-right:none;border-top:none;font-family:'DM Sans',sans-serif;font-weight:400;text-align:left;cursor:pointer;width:100%}
  .mobile-nav-drawer .mobile-book-btn{margin-top:1.5rem;background:var(--forest-green);color:var(--warm-sand);text-align:center;border:none;padding:.9rem 1rem;font-size:.78rem;letter-spacing:.14em;display:block;text-decoration:none}
  .mobile-nav-drawer .mobile-lang{display:flex;gap:.75rem;margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid rgba(200,184,138,.1)}
  .mobile-nav-drawer .mobile-lang button{border-bottom:none;padding:.4rem .75rem;font-size:.75rem;border:1px solid rgba(200,184,138,.3);width:auto}
  .mobile-nav-drawer .mobile-lang button.active{background:var(--forest-green);border-color:var(--forest-green);color:var(--warm-sand)}
  .mobile-section-label{font-size:.6rem;letter-spacing:.18em;color:var(--stone-grey);text-transform:uppercase;padding:1rem 0 .25rem;border-bottom:none!important}
  @media(max-width:768px){
    nav{padding:.85rem 1.25rem}
    .nav-links{display:none}
    .nav-hamburger{display:flex}
    .nav-logo{font-size:1rem}
    .page-hero{padding:7rem 1.25rem 3rem}
    .page-title{font-size:clamp(2rem,9vw,3rem)}
    .page-tagline{font-size:.85rem}
    .page-intro{padding:3rem 1.25rem}
    .intro-text{font-size:1rem}
    .how-section{padding:3rem 1.25rem}
    .benefits-grid{grid-template-columns:1fr;gap:1rem}
    .stats-row{grid-template-columns:1fr 1fr;gap:1.5rem;padding:2.5rem 1.25rem}
    .other-services{padding:3rem 1.25rem}
    .other-services-grid{grid-template-columns:1fr 1fr;gap:1rem}
    .cta-strip{padding:1.5rem 1.25rem;flex-direction:column;gap:1.5rem;text-align:center}
    footer{padding:3rem 1.25rem 1.5rem}
    .footer-grid{grid-template-columns:1fr;gap:2rem;margin-bottom:2rem}
    .footer-bottom{flex-direction:column;gap:.75rem;text-align:center}
    .cursor,.cursor-ring{display:none}
    .btn-forest{min-height:48px;display:inline-flex;align-items:center;justify-content:center}
  }
  @media(max-width:480px){
    .other-services-grid{grid-template-columns:1fr}
    .stats-row{grid-template-columns:1fr}
    .nav-logo{font-size:.88rem}
  }
`;

// ── Shared base translations (nav + footer + common page elements) ──
const COMMON_T_EN = {
  'nav.buy_sell': 'Buying/Selling',
  'nav.buying': 'Buying', 'nav.selling': 'Selling',
  'nav.houses': 'Houses', 'nav.condo': 'Condo', 'nav.land': 'Land',
  'nav.locations': 'Locations', 'nav.why_thailand': 'Why Thailand', 'nav.about': 'About', 'nav.services': 'Services',
  'nav.what_we_offer': 'What We Offer',
  'nav.svc_renting': 'Renting', 'nav.svc_relocating': 'Relocating',
  'nav.svc_pet': 'Pet Friendly', 'nav.svc_investing': 'Investing',
  'nav.svc_construction': 'Construction & Renovation', 'nav.svc_consulting': 'Consulting',
  'nav.book_consultation': 'Book Consultation',
  'pg.overview': 'Overview', 'pg.how_we_help': 'How We<br><em>Help You</em>',
  'pg.whats_included': "What's Included", 'pg.everything_you_need': 'Everything You<br><em>Need</em>',
  'pg.stat1_label': 'Years Experience', 'pg.stat2_label': 'Happy Clients', 'pg.stat3_label': 'Cities Covered',
  'pg.other_services': 'Explore Other Services',
  'pg.cta_ready': "Ready to get started? <strong>Let's talk.</strong>",
  'footer.brand_desc': "Thailand's most trusted real estate community. Connecting people with exceptional properties and building lives across the Kingdom since 2016.",
  'footer.h_services': 'Services', 'footer.h_locations': 'Locations', 'footer.h_company': 'Company',
  'footer.about_us': 'About Us', 'footer.contact_us': 'Contact',
  'footer.copyright': '© 2026 FatBoys Real Estate Thailand. All rights reserved.',
  'footer.privacy': 'Privacy Policy', 'footer.terms': 'Terms',
};

const COMMON_T_TH = {
  'nav.buy_sell': 'ซื้อ/ขาย',
  'nav.buying': 'ซื้อ', 'nav.selling': 'ขาย',
  'nav.houses': 'บ้าน', 'nav.condo': 'คอนโด', 'nav.land': 'ที่ดิน',
  'nav.locations': 'สถานที่', 'nav.why_thailand': 'ทำไมต้องไทย', 'nav.about': 'เกี่ยวกับเรา', 'nav.services': 'บริการ',
  'nav.what_we_offer': 'สิ่งที่เราให้บริการ',
  'nav.svc_renting': 'เช่า', 'nav.svc_relocating': 'ย้ายถิ่นฐาน',
  'nav.svc_pet': 'เป็นมิตรกับสัตว์เลี้ยง', 'nav.svc_investing': 'ลงทุน',
  'nav.svc_construction': 'ก่อสร้าง & ปรับปรุง', 'nav.svc_consulting': 'ที่ปรึกษา',
  'nav.book_consultation': 'นัดปรึกษาฟรี',
  'pg.overview': 'ภาพรวม', 'pg.how_we_help': 'เราช่วย<br><em>คุณอย่างไร</em>',
  'pg.whats_included': 'สิ่งที่รวมอยู่ด้วย', 'pg.everything_you_need': 'ทุกสิ่งที่<br><em>คุณต้องการ</em>',
  'pg.stat1_label': 'ปีประสบการณ์', 'pg.stat2_label': 'ลูกค้าพึงพอใจ', 'pg.stat3_label': 'เมืองที่ให้บริการ',
  'pg.other_services': 'บริการอื่นๆ ของเรา',
  'pg.cta_ready': 'พร้อมเริ่มต้นแล้วหรือยัง? <strong>มาคุยกัน</strong>',
  'footer.brand_desc': 'ชุมชนอสังหาริมทรัพย์ที่น่าเชื่อถือที่สุดในไทย เชื่อมต่อผู้คนกับอสังหาฯ ที่ยอดเยี่ยมมาตั้งแต่ปี 2016',
  'footer.h_services': 'บริการ', 'footer.h_locations': 'สถานที่', 'footer.h_company': 'บริษัท',
  'footer.about_us': 'เกี่ยวกับเรา', 'footer.contact_us': 'ติดต่อเรา',
  'footer.copyright': '© 2026 แฟทบอยส์ เรียล เอสเตท ประเทศไทย สงวนลิขสิทธิ์',
  'footer.privacy': 'นโยบายความเป็นส่วนตัว', 'footer.terms': 'ข้อกำหนด',
};

// ── Service page data ──
const services = [
  {
    file: 'renting.html',
    title: 'Renting in Thailand',
    eyebrow: 'Find Your Rental',
    heroGrad: 'linear-gradient(155deg,#0d1a08 0%,#162210 40%,#0f1a0a 100%)',
    accent: '#233d00',
    tagline: "Your ideal rental, found faster.",
    ctaLink: 'https://lin.ee/H5iMNKQ',
    intro: "Whether you're looking for a short-term getaway, a long-term home, or a monthly rental while you find your feet in Thailand — FatBoys has you covered. We work with a vast network of vetted landlords across every major market.",
    benefits: [
      { t:'Short & Long Term', d:'Monthly to multi-year leases. We handle all contract lengths and negotiate the best rates on your behalf.' },
      { t:'Vetted Properties', d:'Every rental in our portfolio is personally inspected. No surprises, no hidden issues.' },
      { t:'Bilingual Support', d:'We bridge the language gap with Thai landlords and ensure your lease terms are clear and fair.' },
      { t:'Move-In Ready', d:'From utilities setup to furniture recommendations, we make sure you can move in without hassle.' },
    ],
    cta: 'Get in Touch',
    th: {
      eyebrow: 'หาบ้านเช่าของคุณ', title: 'เช่าบ้านในประเทศไทย',
      tagline: 'บ้านเช่าในฝัน หาได้เร็วกว่าที่คิด',
      cta: 'ติดต่อเรา',
      intro: 'ไม่ว่าคุณจะมองหาที่พักระยะสั้น บ้านระยะยาว หรือเช่ารายเดือนระหว่างการปรับตัวในไทย — แฟทบอยส์ดูแลคุณได้ เรามีเครือข่ายเจ้าของที่ดินที่ผ่านการคัดกรองทั่วทุกตลาดสำคัญ',
      benefits: [
        { t:'ระยะสั้นและยาว', d:'สัญญารายเดือนถึงหลายปี เราดูแลทุกระยะสัญญาและต่อรองราคาที่ดีที่สุดแทนคุณ' },
        { t:'อสังหาฯ ผ่านการตรวจสอบ', d:'ทุกบ้านเช่าในพอร์ตโฟลิโอของเราผ่านการตรวจสอบด้วยตนเอง ไม่มีเซอร์ไพรส์ ไม่มีปัญหาซ่อนเร้น' },
        { t:'สนับสนุนสองภาษา', d:'เราเชื่อมช่องว่างภาษาระหว่างคุณกับเจ้าของที่ดินไทย และทำให้เงื่อนไขสัญญาเช่าชัดเจนและเป็นธรรม' },
        { t:'พร้อมเข้าอยู่', d:'ตั้งแต่การติดตั้งสาธารณูปโภคจนถึงคำแนะนำเฟอร์นิเจอร์ เราทำให้คุณเข้าอยู่ได้ทันที' },
      ],
    },
  },
  {
    file: 'relocating.html',
    title: 'Relocating to Thailand',
    eyebrow: 'Start Your New Life',
    heroGrad: 'linear-gradient(155deg,#0d1a08 0%,#1a1408 50%,#162210 100%)',
    accent: '#C06A4A',
    tagline: "A seamless move to the Land of Smiles.",
    ctaLink: 'https://lin.ee/H5iMNKQ',
    intro: "Moving countries is one of the biggest decisions you'll make. Our relocation specialists take the stress out of the process — from your first research call to the moment you unpack in your new Thai home.",
    benefits: [
      { t:'Housing Search', d:'We shortlist properties that match your lifestyle, budget, and preferred neighbourhood before you even land.' },
      { t:'Visa Guidance', d:'We connect you with trusted visa consultants and legal advisors for retirement, elite, or long-stay visas.' },
      { t:'Schools & Education', d:'Families relocating with children get access to our curated list of international schools in every major city.' },
      { t:'Community Integration', d:'We introduce you to local expat groups, markets, and services to help you feel at home from day one.' },
    ],
    cta: 'Book a Free Consultation',
    th: {
      eyebrow: 'เริ่มชีวิตใหม่', title: 'ย้ายมาประเทศไทย',
      tagline: 'ย้ายถิ่นฐานอย่างราบรื่นสู่แผ่นดินยิ้ม',
      cta: 'จองคำปรึกษาฟรี',
      intro: 'การย้ายประเทศเป็นหนึ่งในการตัดสินใจที่ยิ่งใหญ่ที่สุดในชีวิต ผู้เชี่ยวชาญด้านการย้ายถิ่นฐานของเราดูแลทุกขั้นตอน ตั้งแต่การสอบถามข้อมูลครั้งแรกจนถึงวันที่คุณแกะกล่องในบ้านใหม่ที่ไทย',
      benefits: [
        { t:'ค้นหาที่พัก', d:'เราคัดกรองอสังหาฯ ที่ตรงกับไลฟ์สไตล์ งบประมาณ และย่านที่คุณต้องการก่อนที่คุณจะเดินทางมาถึง' },
        { t:'คำแนะนำวีซ่า', d:'เราเชื่อมต่อคุณกับที่ปรึกษาวีซ่าและนักกฎหมายที่เชื่อถือได้สำหรับวีซ่าผู้เกษียณ Elite หรือพำนักระยะยาว' },
        { t:'โรงเรียนและการศึกษา', d:'ครอบครัวที่ย้ายมาพร้อมเด็กจะได้เข้าถึงรายชื่อโรงเรียนนานาชาติที่คัดสรรในทุกเมืองสำคัญ' },
        { t:'การเชื่อมต่อชุมชน', d:'เราแนะนำกลุ่มเอ็กซ์แพต ตลาด และบริการท้องถิ่นเพื่อให้คุณรู้สึกเหมือนอยู่บ้านตั้งแต่วันแรก' },
      ],
    },
  },
  {
    file: 'pet-friendly.html',
    title: 'Pet Friendly Homes',
    eyebrow: 'Homes for the Whole Family',
    heroGrad: 'linear-gradient(155deg,#0f1a0a 0%,#1a1408 50%,#0d1a08 100%)',
    accent: '#233d00',
    tagline: "Because your pets deserve a great home too.",
    ctaLink: 'https://lin.ee/H5iMNKQ',
    intro: "Finding a pet-friendly property in Thailand can be incredibly difficult — most landlords say no. Over 8 years, we've built a dedicated network of pet-welcoming landlords and communities so you never have to choose between your home and your pet.",
    benefits: [
      { t:'Dogs & Cats Welcome', d:'We have properties that accept dogs and cats of all sizes — from studios to beachfront villas.' },
      { t:'Gated Communities', d:'Many of our pet-friendly listings are in safe, gated communities with green spaces for walks.' },
      { t:'Vet Networks', d:'We provide a list of trusted local vets and pet care services near every property we recommend.' },
      { t:'Pet Import Guidance', d:"Bringing your pet to Thailand? We connect you with specialists who manage the import paperwork." },
    ],
    cta: 'Reach Out to Our Team',
    th: {
      eyebrow: 'บ้านสำหรับทุกคนในครอบครัว', title: 'บ้านที่เป็นมิตรกับสัตว์เลี้ยง',
      tagline: 'เพราะสัตว์เลี้ยงของคุณก็สมควรได้บ้านที่ดี',
      cta: 'ติดต่อทีมงานของเรา',
      intro: 'การหาอสังหาฯ ที่ยอมรับสัตว์เลี้ยงในไทยเป็นเรื่องยากมาก เจ้าของส่วนใหญ่ปฏิเสธ ในช่วง 8 ปีที่ผ่านมา เราสร้างเครือข่ายเจ้าของที่ดินและชุมชนที่ยินดีต้อนรับสัตว์เลี้ยง คุณจึงไม่ต้องเลือกระหว่างบ้านและสัตว์เลี้ยง',
      benefits: [
        { t:'ยินดีต้อนรับสุนัขและแมว', d:'เรามีอสังหาฯ ที่รับสุนัขและแมวทุกขนาด ตั้งแต่สตูดิโอไปจนถึงวิลล่าริมชายหาด' },
        { t:'ชุมชนแบบมีรั้วรอบ', d:'รายการส่วนใหญ่ของเราอยู่ในชุมชนที่ปลอดภัยพร้อมพื้นที่สีเขียวสำหรับเดินเล่น' },
        { t:'เครือข่ายสัตวแพทย์', d:'เราให้รายชื่อสัตวแพทย์และบริการดูแลสัตว์เลี้ยงที่เชื่อถือได้ใกล้ทุกอสังหาฯ ที่แนะนำ' },
        { t:'คำแนะนำการนำสัตว์เข้าประเทศ', d:'นำสัตว์เลี้ยงมาไทยด้วยหรือเปล่า? เราเชื่อมคุณกับผู้เชี่ยวชาญด้านเอกสารนำเข้า' },
      ],
    },
  },
  {
    file: 'investing.html',
    title: 'Property Investment',
    eyebrow: 'Grow Your Portfolio',
    heroGrad: 'linear-gradient(155deg,#0d1a08 0%,#1a2a1a 40%,#0d1a08 100%)',
    accent: '#233d00',
    tagline: "Smart capital. Strong returns. Thailand.",
    ctaLink: 'https://lin.ee/H5iMNKQ',
    intro: "We help you own property in Thailand for 30 years — legally, securely, and 100% in your name — with no nominee required. Whether you're a first-time investor or expanding an existing portfolio, FatBoys guides you through every step with clarity and confidence. And because investing in Thailand goes beyond bricks and mortar, we also help you secure the right visa for your situation — so your life here is as well-structured as your investment.",
    benefits: [
      { t:'Yield Analysis', d:'We help you understand and evaluate the potential returns on your investment, giving you a clear picture of what to expect.' },
      { t:'Legal Guidance', d:'We walk you through every ownership option available to investors, helping you find the structure that fits your goals.' },
      { t:'New Developments', d:'We connect you with quality development opportunities that offer strong potential for growth and long-term value.' },
      { t:'Visa Assistance', d:'Investing in Thailand often comes with visa options — from retirement and long-term residence visas to investor categories. We help you identify and obtain the right visa for your circumstances, so your stay is as secure as your property.' },
    ],
    cta: 'Book a Consultation',
    th: {
      eyebrow: 'เพิ่มพอร์ตโฟลิโอของคุณ', title: 'การลงทุนอสังหาริมทรัพย์',
      tagline: 'เงินทุนฉลาด ผลตอบแทนดี ในประเทศไทย',
      cta: 'จองคำปรึกษา',
      intro: 'ไม่ว่าจะเป็นนักลงทุนมือใหม่หรือกำลังขยายพอร์ตโฟลิโอ แฟทบอยส์ ลิฟวิ่ง เอสเตทพร้อมช่วยคุณค้นหาบ้าน คอนโด หรือที่ดินที่เหมาะสม พร้อมดูแลรายละเอียดทุกด้านให้ครบถ้วน ตั้งแต่การหาอสังหาฯ ที่ตรงใจ ไปจนถึงเอกสารและขั้นตอนทางกฎหมายทั้งหมด นอกจากนี้เรายังช่วยจัดการวีซ่าที่เหมาะสมกับสถานการณ์ของคุณ เพื่อให้การอยู่อาศัยในไทยมีความมั่นคงเช่นเดียวกับการลงทุนของคุณ',
      benefits: [
        { t:'การวิเคราะห์ผลตอบแทน', d:'เราช่วยให้คุณเข้าใจและประเมินผลตอบแทนที่คาดหวังจากการลงทุน เพื่อให้คุณเห็นภาพที่ชัดเจนก่อนตัดสินใจ' },
        { t:'คำแนะนำด้านกฎหมาย', d:'เราพาคุณผ่านทุกทางเลือกด้านกรรมสิทธิ์ที่มีสำหรับนักลงทุน เพื่อหาโครงสร้างที่เหมาะกับเป้าหมายของคุณ' },
        { t:'โครงการใหม่', d:'เราเชื่อมคุณกับโอกาสพัฒนาโครงการคุณภาพที่มีศักยภาพการเติบโตสูงและมูลค่าระยะยาวที่แข็งแกร่ง' },
        { t:'ช่วยดำเนินการวีซ่า', d:'การลงทุนในไทยมักมาพร้อมตัวเลือกวีซ่า เช่น วีซ่าผู้เกษียณ วีซ่าพำนักระยะยาว หรือวีซ่านักลงทุน เราช่วยคุณระบุและดำเนินการขอวีซ่าที่เหมาะสมกับสถานการณ์ของคุณ' },
      ],
    },
    article: {
      en: {
        eyebrow: 'Educational',
        title: 'Real Estate as an Asset',
        p1: 'Many people work hard their entire lives to earn money. They save, they budget, and they try to reduce expenses. But financial education teaches us something different:',
        quote: 'True wealth is not created by working harder — it is created by owning assets that generate income.',
        p2: 'This is the core principle made famous by Robert Kiyosaki in <em>Rich Dad Poor Dad</em>.',
        def: 'An asset is something that puts money into your pocket, even when you are not working.',
        p3: 'Real estate is one of the most powerful assets because it can generate consistent income, long-term appreciation, and financial stability.',
        p4: 'Instead of trading time for money, investors use real estate to create cash flow.',
        ex_label: 'For example:',
        ex1: 'A rental property generates monthly income from tenants',
        ex2: 'Property value increases over time',
        ex3: 'The asset can be leveraged or reinvested to grow wealth further',
        p5: 'This means your money begins to work for you, rather than you always working for money.',
        why_title: 'Why Real Estate?',
        why_intro: 'Real estate has historically been one of the most reliable ways to build wealth because it combines three powerful benefits:',
        w1_title: 'Cash Flow',
        w1_desc: 'Rental income can provide steady monthly returns.',
        w2_title: 'Appreciation',
        w2_desc: 'Property values often increase over time, especially in growing cities.',
        w3_title: 'Leverage',
        w3_desc: 'Investors can acquire larger assets using financing, allowing them to grow wealth faster.',
        bw_title: 'Building Wealth Through Smart Property Investment',
        bw_p1: 'Successful investors do not simply buy property.',
        bw_p2: 'They look for assets that produce income and long-term value.',
        bw_p3: 'This means understanding:',
        li1: 'Location and future development',
        li2: 'Rental demand',
        li3: 'Legal structure and ownership',
        li4: 'Property quality and management',
        fatboys: "At Fatboy's Estates, we help investors navigate these factors with confidence. Our local expertise in construction, regulations, and property management ensures that every investment opportunity is carefully selected and professionally supported.",
        goal_label: 'Our goal is simple:',
        goal: 'To help you turn property into a long-term income-generating asset.',
        close1: 'Because the right property is not just a home.',
        close2: 'It is a foundation for financial freedom.',
        // ── Section 2: Why Thailand ──
        s2_title: 'Why Invest in Thailand Real Estate',
        s2_p1: "Thailand has become one of the most attractive real estate investment destinations in Asia. With its strong tourism industry, expanding infrastructure, and high demand for rental properties, investors have the opportunity to generate both steady cash flow and long-term capital growth.",
        s2_p2: "Compared to many major cities around the world, Thailand still offers relatively affordable property prices, allowing investors to enter the market with lower capital while benefiting from rising demand.",
        s2_p3: "In addition, Thailand provides a lifestyle that attracts millions of visitors, digital nomads, retirees, and expatriates every year. This continuous flow of people creates strong opportunities for short-term rentals, long-term leases, and property appreciation.",
        s2_p4: "For investors looking to diversify internationally, Thai real estate offers a compelling balance between investment potential and lifestyle value.",
        // ── Section 3: Pattaya & Rayong ──
        s3_title: 'Why Pattaya and Rayong Are Among the Best Investment Cities in Asia',
        s3_p1: "Located on Thailand's Eastern Seaboard, Pattaya and Rayong are part of the country's rapidly developing Eastern Economic Corridor (EEC) — one of the largest economic development zones in Southeast Asia.",
        s3_p2: "This region has been designated by the government as a major hub for industry, infrastructure, tourism, and international business.",
        pattaya_title: 'Pattaya — A Global Tourism and Lifestyle Hub',
        pattaya_p1: "Pattaya is one of Thailand's most internationally recognized cities, welcoming millions of tourists each year. Beyond tourism, the city has evolved into a modern lifestyle destination with international hospitals, shopping centers, marinas, and luxury residences.",
        pattaya_intro: "For investors, Pattaya offers strong opportunities in:",
        pattaya_li1: 'Holiday rentals and short-term accommodation',
        pattaya_li2: 'Long-term rentals for expatriates and retirees',
        pattaya_li3: 'Luxury property investments near the beach',
        pattaya_li4: 'A growing digital nomad and remote worker community',
        pattaya_p2: "Its proximity to Bangkok and the development of high-speed rail projects will continue to strengthen Pattaya's position as a global coastal investment city.",
        rayong_title: "Rayong — Thailand's Industrial Powerhouse",
        rayong_p1: "Rayong is one of Thailand's most important industrial provinces and plays a central role in the Eastern Economic Corridor (EEC) development plan.",
        rayong_intro: "The province hosts major international companies in sectors such as:",
        rayong_li1: 'Automotive manufacturing',
        rayong_li2: 'Petrochemicals',
        rayong_li3: 'Advanced technology',
        rayong_li4: 'Logistics and international trade',
        rayong_p2: "This industrial strength creates strong demand for housing for executives, engineers, and long-term workers, making Rayong an attractive market for stable rental income investments.",
        rayong_p3: "Compared to many major cities in Asia, property prices in Rayong remain relatively affordable, offering investors strong potential for future growth.",
        // ── Section 4: Local Expertise ──
        expertise_title: 'Invest with Local Expertise',
        expertise_p1: "Successful real estate investment requires more than just purchasing property — it requires understanding the local market, legal structures, construction quality, and long-term potential.",
        expertise_intro: "At Fatboy's Estates, our sibling founders combine expertise in:",
        expertise_li1: 'Construction and property development',
        expertise_li2: 'Local regulations and ownership structures',
        expertise_li3: 'Customer service and property support',
        expertise_p2: "By working together as a family-driven company, we help investors make secure, well-informed property decisions.",
        expertise_p3: "Whether you are searching for a vacation property, rental investment, or long-term asset, our goal is to help you find opportunities that create both lifestyle value and financial growth.",
      },
      th: {
        eyebrow: 'ความรู้ด้านการลงทุน',
        title: 'อสังหาริมทรัพย์ในฐานะสินทรัพย์',
        p1: 'คนส่วนใหญ่ทำงานหนักตลอดชีวิตเพื่อหาเงิน พวกเขาออมเงิน วางงบประมาณ และพยายามลดค่าใช้จ่าย แต่การศึกษาด้านการเงินสอนเราอีกสิ่งหนึ่ง:',
        quote: 'ความมั่งคั่งที่แท้จริงไม่ได้เกิดจากการทำงานหนักขึ้น — แต่เกิดจากการเป็นเจ้าของสินทรัพย์ที่สร้างรายได้',
        p2: 'นี่คือหลักการสำคัญที่โรเบิร์ต คิโยซากิทำให้เป็นที่รู้จักในหนังสือ <em>Rich Dad Poor Dad</em>',
        def: 'สินทรัพย์คือสิ่งที่ใส่เงินเข้ากระเป๋าของคุณ แม้ในขณะที่คุณไม่ได้ทำงาน',
        p3: 'อสังหาริมทรัพย์เป็นหนึ่งในสินทรัพย์ที่ทรงพลังที่สุด เพราะสามารถสร้างรายได้สม่ำเสมอ การเพิ่มมูลค่าระยะยาว และความมั่นคงทางการเงิน',
        p4: 'แทนที่จะแลกเวลากับเงิน นักลงทุนใช้อสังหาริมทรัพย์เพื่อสร้างกระแสเงินสด',
        ex_label: 'ตัวอย่างเช่น:',
        ex1: 'อสังหาริมทรัพย์ให้เช่าสร้างรายได้รายเดือนจากผู้เช่า',
        ex2: 'มูลค่าทรัพย์สินเพิ่มขึ้นตามกาลเวลา',
        ex3: 'สินทรัพย์สามารถใช้เป็นหลักประกันหรือนำไปลงทุนต่อเพื่อเพิ่มความมั่งคั่ง',
        p5: 'ซึ่งหมายความว่าเงินของคุณเริ่มทำงานแทนคุณ แทนที่คุณจะต้องทำงานเพื่อเงินเสมอ',
        why_title: 'ทำไมต้องอสังหาริมทรัพย์?',
        why_intro: 'อสังหาริมทรัพย์เป็นหนึ่งในวิธีสร้างความมั่งคั่งที่น่าเชื่อถือที่สุดตลอดประวัติศาสตร์ เพราะรวมประโยชน์สามประการที่ทรงพลัง:',
        w1_title: 'กระแสเงินสด',
        w1_desc: 'รายได้จากการเช่าสามารถให้ผลตอบแทนรายเดือนที่สม่ำเสมอ',
        w2_title: 'การเพิ่มมูลค่า',
        w2_desc: 'มูลค่าทรัพย์สินมักเพิ่มขึ้นตามกาลเวลา โดยเฉพาะในเมืองที่กำลังเติบโต',
        w3_title: 'การใช้ประโยชน์จากสินเชื่อ',
        w3_desc: 'นักลงทุนสามารถซื้อสินทรัพย์มูลค่าสูงโดยใช้สินเชื่อ ทำให้สร้างความมั่งคั่งได้เร็วขึ้น',
        bw_title: 'สร้างความมั่งคั่งผ่านการลงทุนอสังหาริมทรัพย์อย่างชาญฉลาด',
        bw_p1: 'นักลงทุนที่ประสบความสำเร็จไม่ได้แค่ซื้ออสังหาริมทรัพย์',
        bw_p2: 'พวกเขามองหาสินทรัพย์ที่สร้างรายได้และมูลค่าระยะยาว',
        bw_p3: 'ซึ่งหมายความว่าต้องเข้าใจ:',
        li1: 'ทำเล และการพัฒนาในอนาคต',
        li2: 'ความต้องการเช่า',
        li3: 'โครงสร้างกฎหมายและการถือครอง',
        li4: 'คุณภาพและการจัดการอสังหาริมทรัพย์',
        fatboys: "ที่ Fatboy's Estates เราช่วยนักลงทุนพิจารณาปัจจัยเหล่านี้อย่างมั่นใจ ความเชี่ยวชาญในท้องถิ่นด้านการก่อสร้าง กฎระเบียบ และการจัดการอสังหาริมทรัพย์ของเรา ช่วยให้ทุกโอกาสการลงทุนได้รับการคัดเลือกอย่างรอบคอบและได้รับการสนับสนุนอย่างมืออาชีพ",
        goal_label: 'เป้าหมายของเราเรียบง่าย:',
        goal: 'เพื่อช่วยให้คุณเปลี่ยนอสังหาริมทรัพย์ให้กลายเป็นสินทรัพย์ที่สร้างรายได้ระยะยาว',
        close1: 'เพราะอสังหาริมทรัพย์ที่ใช่ ไม่ใช่แค่บ้าน',
        close2: 'มันคือรากฐานสู่อิสรภาพทางการเงิน',
        // ── Section 2: Why Thailand ──
        s2_title: 'ทำไมต้องลงทุนในอสังหาริมทรัพย์ไทย',
        s2_p1: 'ประเทศไทยกลายเป็นหนึ่งในจุดหมายปลายทางการลงทุนอสังหาริมทรัพย์ที่น่าสนใจที่สุดในเอเชีย ด้วยอุตสาหกรรมการท่องเที่ยวที่แข็งแกร่ง โครงสร้างพื้นฐานที่ขยายตัว และความต้องการอสังหาฯ ให้เช่าสูง นักลงทุนมีโอกาสสร้างทั้งกระแสเงินสดสม่ำเสมอและการเติบโตของมูลค่าระยะยาว',
        s2_p2: 'เมื่อเทียบกับเมืองใหญ่หลายแห่งทั่วโลก ราคาอสังหาริมทรัพย์ในไทยยังอยู่ในระดับที่เข้าถึงได้ ช่วยให้นักลงทุนสามารถเข้าสู่ตลาดด้วยเงินทุนน้อยกว่า ขณะที่ได้รับประโยชน์จากความต้องการที่เพิ่มขึ้น',
        s2_p3: 'นอกจากนี้ ประเทศไทยยังมีไลฟ์สไตล์ที่ดึงดูดนักท่องเที่ยว ดิจิทัลโนแมด ผู้เกษียณ และชาวต่างชาติหลายล้านคนทุกปี กระแสคนที่ต่อเนื่องนี้สร้างโอกาสที่แข็งแกร่งสำหรับเช่าระยะสั้น สัญญาเช่าระยะยาว และการเพิ่มมูลค่าทรัพย์สิน',
        s2_p4: 'สำหรับนักลงทุนที่มองหาการกระจายพอร์ตโฟลิโอในต่างประเทศ อสังหาริมทรัพย์ไทยมอบความสมดุลที่น่าสนใจระหว่างศักยภาพการลงทุนและคุณค่าด้านไลฟ์สไตล์',
        // ── Section 3: Pattaya & Rayong ──
        s3_title: 'ทำไมพัทยาและระยองถึงเป็นเมืองลงทุนที่ดีที่สุดแห่งหนึ่งในเอเชีย',
        s3_p1: 'พัทยาและระยองตั้งอยู่บนชายฝั่งตะวันออกของไทย เป็นส่วนหนึ่งของระเบียงเศรษฐกิจพิเศษภาคตะวันออก (EEC) ซึ่งเป็นหนึ่งในเขตพัฒนาเศรษฐกิจที่ใหญ่ที่สุดในเอเชียตะวันออกเฉียงใต้',
        s3_p2: 'ภูมิภาคนี้ได้รับการกำหนดโดยรัฐบาลให้เป็นศูนย์กลางสำคัญด้านอุตสาหกรรม โครงสร้างพื้นฐาน การท่องเที่ยว และธุรกิจนานาชาติ',
        pattaya_title: 'พัทยา — ศูนย์กลางการท่องเที่ยวและไลฟ์สไตล์ระดับโลก',
        pattaya_p1: 'พัทยาเป็นหนึ่งในเมืองที่ได้รับการยอมรับในระดับนานาชาติมากที่สุดของไทย รองรับนักท่องเที่ยวหลายล้านคนทุกปี นอกจากการท่องเที่ยว เมืองได้พัฒนาเป็นจุดหมายปลายทางไลฟ์สไตล์สมัยใหม่ พร้อมโรงพยาบาลนานาชาติ ห้างสรรพสินค้า มาริน่า และที่พักหรู',
        pattaya_intro: 'สำหรับนักลงทุน พัทยามีโอกาสที่แข็งแกร่งใน:',
        pattaya_li1: 'เช่าวันหยุดและที่พักระยะสั้น',
        pattaya_li2: 'เช่าระยะยาวสำหรับชาวต่างชาติและผู้เกษียณ',
        pattaya_li3: 'การลงทุนอสังหาฯ หรูใกล้ชายหาด',
        pattaya_li4: 'ชุมชนดิจิทัลโนแมดและพนักงานทางไกลที่กำลังเติบโต',
        pattaya_p2: 'ความใกล้ชิดกับกรุงเทพและการพัฒนาโครงการรถไฟความเร็วสูงจะยิ่งเสริมสร้างตำแหน่งของพัทยาในฐานะเมืองลงทุนชายฝั่งระดับโลก',
        rayong_title: 'ระยอง — มหาอำนาจอุตสาหกรรมของไทย',
        rayong_p1: 'ระยองเป็นหนึ่งในจังหวัดอุตสาหกรรมที่สำคัญที่สุดของไทย และมีบทบาทสำคัญในแผนพัฒนาระเบียงเศรษฐกิจพิเศษภาคตะวันออก (EEC)',
        rayong_intro: 'จังหวัดนี้เป็นที่ตั้งของบริษัทนานาชาติชั้นนำในภาคส่วนต่างๆ เช่น:',
        rayong_li1: 'การผลิตยานยนต์',
        rayong_li2: 'ปิโตรเคมี',
        rayong_li3: 'เทคโนโลยีขั้นสูง',
        rayong_li4: 'โลจิสติกส์และการค้าระหว่างประเทศ',
        rayong_p2: 'ความแข็งแกร่งทางอุตสาหกรรมนี้สร้างความต้องการที่อยู่อาศัยสำหรับผู้บริหาร วิศวกร และพนักงานระยะยาว ทำให้ระยองเป็นตลาดที่น่าสนใจสำหรับการลงทุนที่มีรายได้เช่าคงที่',
        rayong_p3: 'เมื่อเทียบกับเมืองใหญ่หลายแห่งในเอเชีย ราคาอสังหาริมทรัพย์ในระยองยังอยู่ในระดับที่เข้าถึงได้ มอบศักยภาพการเติบโตในอนาคตที่แข็งแกร่งสำหรับนักลงทุน',
        // ── Section 4: Local Expertise ──
        expertise_title: 'ลงทุนด้วยความเชี่ยวชาญท้องถิ่น',
        expertise_p1: 'การลงทุนอสังหาริมทรัพย์ที่ประสบความสำเร็จต้องการมากกว่าแค่การซื้ออสังหาฯ — ต้องเข้าใจตลาดท้องถิ่น โครงสร้างกฎหมาย คุณภาพการก่อสร้าง และศักยภาพระยะยาว',
        expertise_intro: "ที่ Fatboy's Estates ผู้ก่อตั้งซึ่งเป็นพี่น้องผสมผสานความเชี่ยวชาญใน:",
        expertise_li1: 'การก่อสร้างและการพัฒนาอสังหาริมทรัพย์',
        expertise_li2: 'กฎระเบียบท้องถิ่นและโครงสร้างการถือครอง',
        expertise_li3: 'การบริการลูกค้าและการสนับสนุนด้านอสังหาริมทรัพย์',
        expertise_p2: 'ด้วยการทำงานร่วมกันในฐานะบริษัทที่ขับเคลื่อนโดยครอบครัว เราช่วยให้นักลงทุนตัดสินใจเรื่องอสังหาริมทรัพย์ได้อย่างปลอดภัยและมีข้อมูลครบถ้วน',
        expertise_p3: 'ไม่ว่าคุณจะมองหาอสังหาฯ สำหรับพักผ่อน การลงทุนให้เช่า หรือสินทรัพย์ระยะยาว เป้าหมายของเราคือช่วยให้คุณค้นพบโอกาสที่สร้างทั้งคุณค่าด้านไลฟ์สไตล์และการเติบโตทางการเงิน',
      },
    },
  },
  {
    file: 'construction.html',
    title: 'Construction & Renovation',
    eyebrow: 'Build Your Dream',
    heroGrad: 'linear-gradient(155deg,#0f1208 0%,#1a1408 50%,#141a08 100%)',
    accent: '#C06A4A',
    tagline: "Build exactly what you've always imagined.",
    ctaLink: 'https://lin.ee/H5iMNKQ',
    intro: "Thailand offers exceptional value for high-quality construction and renovation. Whether you're building a custom villa from the ground up or transforming a dated property into something extraordinary, our vetted network of architects, builders, and project managers delivers.",
    benefits: [
      { t:'Architect Connections', d:'We introduce you to experienced architects who specialise in tropical design and understand local building codes.' },
      { t:'Trusted Builders', d:'Our construction partners are pre-vetted, licensed, and have delivered hundreds of projects for expat clients.' },
      { t:'Project Management', d:"We can oversee your build while you're abroad — quality checks, timeline reports, and financial accountability." },
      { t:'Renovation Specialists', d:'From kitchen remodels to full structural overhauls, our renovation teams work to your exact specifications.' },
    ],
    cta: 'Get in Touch',
    th: {
      eyebrow: 'สร้างบ้านในฝันของคุณ', title: 'ก่อสร้างและปรับปรุง',
      tagline: 'สร้างสิ่งที่คุณจินตนาการไว้ได้จริง',
      cta: 'ติดต่อเรา',
      intro: 'ประเทศไทยมีคุณค่าที่ยอดเยี่ยมสำหรับการก่อสร้างและปรับปรุงคุณภาพสูง ไม่ว่าจะสร้างวิลล่าแบบกำหนดเองหรือเปลี่ยนโฉมอสังหาเก่าให้กลายเป็นสิ่งพิเศษ เครือข่ายสถาปนิก ผู้รับเหมา และผู้จัดการโครงการที่ผ่านการคัดกรองของเราส่งมอบได้',
      benefits: [
        { t:'เชื่อมต่อกับสถาปนิก', d:'เราแนะนำสถาปนิกที่มีประสบการณ์ซึ่งเชี่ยวชาญด้านการออกแบบเขตร้อนและเข้าใจกฎการก่อสร้างท้องถิ่น' },
        { t:'ผู้รับเหมาที่เชื่อถือได้', d:'พันธมิตรก่อสร้างของเราผ่านการคัดกรอง มีใบอนุญาต และส่งมอบโครงการนับร้อยให้ลูกค้าชาวต่างชาติ' },
        { t:'การจัดการโครงการ', d:'เราดูแลการก่อสร้างของคุณระหว่างที่คุณอยู่ต่างประเทศ — ตรวจสอบคุณภาพ รายงานความคืบหน้า และความรับผิดชอบด้านการเงิน' },
        { t:'ผู้เชี่ยวชาญปรับปรุง', d:'ตั้งแต่รีโนเวทครัวไปจนถึงปรับปรุงโครงสร้างทั้งหมด ทีมปรับปรุงของเราทำงานตามสเปกของคุณ' },
      ],
    },
  },
  {
    file: 'consulting.html',
    title: 'Property Consulting',
    eyebrow: 'Expert Advice',
    heroGrad: 'linear-gradient(155deg,#0d1a08 0%,#0f1a0a 50%,#0a0e06 100%)',
    accent: '#233d00',
    tagline: "Clarity before commitment.",
    ctaLink: 'https://lin.ee/H5iMNKQ',
    intro: "Before you buy, rent, invest, or build — talk to us. Our one-on-one consulting sessions give you clear, honest, and actionable advice on the Thai property market with no pressure and no sales agenda.",
    benefits: [
      { t:'Market Intelligence', d:'Area-by-area breakdowns of prices, trends, and future developments across all major Thai markets.' },
      { t:'Foreign Ownership Law', d:"Understand exactly what you can and can't own as a foreigner, and what legal structures are safest." },
      { t:'Leasehold vs Freehold', d:'We explain the real differences, risks, and benefits of each ownership structure in plain language.' },
      { t:'Strategic Planning', d:'Long-term thinking: where to buy for lifestyle, where to buy for yield, and how to structure your portfolio.' },
    ],
    cta: 'Book a Free Session',
    th: {
      eyebrow: 'คำแนะนำจากผู้เชี่ยวชาญ', title: 'ที่ปรึกษาอสังหาริมทรัพย์',
      tagline: 'ความชัดเจนก่อนการตัดสินใจ',
      cta: 'จองเซสชันฟรี',
      intro: 'ก่อนซื้อ เช่า ลงทุน หรือสร้าง — มาคุยกับเราก่อน เซสชันที่ปรึกษาแบบตัวต่อตัวของเราให้คำแนะนำที่ชัดเจน ตรงไปตรงมา และนำไปปฏิบัติได้จริงเกี่ยวกับตลาดอสังหาฯ ไทย ไม่มีแรงกดดัน ไม่มีวาระการขาย',
      benefits: [
        { t:'ข้อมูลตลาด', d:'วิเคราะห์ราคา แนวโน้ม และการพัฒนาในอนาคตแต่ละพื้นที่ทั่วตลาดสำคัญของไทย' },
        { t:'กฎหมายการถือครองของชาวต่างชาติ', d:'เข้าใจชัดเจนว่าคุณถือครองอะไรได้และไม่ได้ในฐานะชาวต่างชาติ และโครงสร้างกฎหมายใดปลอดภัยที่สุด' },
        { t:'สัญญาเช่าเทียบกับโฉนด', d:'เราอธิบายความแตกต่าง ความเสี่ยง และประโยชน์ของโครงสร้างการถือครองแต่ละประเภทในภาษาที่เข้าใจง่าย' },
        { t:'การวางแผนเชิงกลยุทธ์', d:'คิดระยะยาว: ซื้อที่ไหนเพื่อไลฟ์สไตล์ ซื้อที่ไหนเพื่อผลตอบแทน และจัดโครงสร้างพอร์ตโฟลิโออย่างไร' },
      ],
    },
  },
  {
    file: 'buy-house.html',
    title: 'Buying a House',
    eyebrow: 'Your Home in Thailand',
    heroGrad: 'linear-gradient(155deg,#0d1a08 0%,#162210 50%,#0a120a 100%)',
    accent: '#233d00',
    tagline: "Find the right home. Own it fully.",
    ctaLink: 'https://lin.ee/H5iMNKQ',
    intro: "We help you find the right house in your desired area — then guide you through every step of the purchase, from property search to signed title deed. All legal documents, procedures, and negotiations are handled by our team so you can buy with complete confidence. We have properties ready to view right now, simply inquire and we will let you know what is available. It is possible to own a house in Thailand for 30 years, 100% in your name, with no nominee required.",
    benefits: [
      { t:'Property Search', d:'We match you with houses that fit your preferred location, lifestyle, and budget. We have ready-to-view properties available now — inquire and we will show you what is waiting for you.' },
      { t:'Legal Documents & Transfer', d:'We handle all title deed verification, contract preparation, and official registration at the Land Department so your purchase is fully protected from day one.' },
      { t:'30-Year Ownership', d:'Own your home in Thailand legally for 30 years, 100% in your name, with no nominee required. Fully registered, fully enforceable, fully yours.' },
      { t:'End-to-End Support', d:'From your first viewing to receiving your keys, our team is with you at every stage — advising, translating, and protecting your interests throughout.' },
    ],
    cta: 'Reach Out to Us',
    th: {
      eyebrow: 'บ้านของคุณในไทย', title: 'ซื้อบ้าน',
      tagline: 'หาบ้านที่ใช่ เป็นเจ้าของได้จริง',
      cta: 'ติดต่อเรา',
      intro: 'แฟทบอยส์ ลิฟวิ่ง เอสเตทพร้อมช่วยคุณหาบ้านที่ใช่ในพื้นที่ที่คุณต้องการ ดูแลเอกสาร สัญญา และขั้นตอนทางกฎหมายทั้งหมดแทนคุณ ตั้งแต่ต้นจนจบ เรามีอสังหาฯ พร้อมให้ชมอยู่แล้วในขณะนี้ เพียงสอบถามและเราจะแจ้งว่ามีอะไรว่างบ้าง',
      benefits: [
        { t:'ค้นหาอสังหาฯ', d:'เราจับคู่คุณกับบ้านในพื้นที่ที่ต้องการ ตรงกับไลฟ์สไตล์และงบประมาณ เรามีอสังหาฯ พร้อมชมทันที — เพียงสอบถามและเราจะแจ้งให้ทราบว่ามีอะไรรอคุณอยู่' },
        { t:'เอกสารและการโอนกรรมสิทธิ์', d:'เราดูแลการตรวจสอบโฉนด เตรียมสัญญา และจดทะเบียนอย่างเป็นทางการที่สำนักงานที่ดิน เพื่อให้การซื้อของคุณได้รับการคุ้มครองอย่างสมบูรณ์ตั้งแต่วันแรก' },
        { t:'เป็นเจ้าของได้เลย', d:'คนไทยสามารถเป็นเจ้าของบ้านได้อย่างสมบูรณ์ตลอดไป แฟทบอยส์ช่วยให้กระบวนการทั้งหมดราบรื่น รวดเร็ว และถูกต้องตามกฎหมายทุกขั้นตอน' },
        { t:'ดูแลครบวงจร', d:'ตั้งแต่การชมอสังหาฯ ครั้งแรกจนถึงรับกุญแจ ทีมของเราอยู่เคียงข้างคุณทุกขั้นตอน คอยแนะนำและดูแลรายละเอียดทั้งหมดแทนคุณ' },
      ],
    },
  },
  {
    file: 'buy-condo.html',
    title: 'Buying a Condo',
    eyebrow: 'Condo Ownership Made Simple',
    heroGrad: 'linear-gradient(155deg,#0d1a08 0%,#162210 50%,#0a120a 100%)',
    accent: '#233d00',
    tagline: "Your condo, your rules.",
    ctaLink: 'https://lin.ee/H5iMNKQ',
    intro: "Condominiums offer one of the most accessible routes to property ownership in Thailand. We help you find the right condo in your preferred area and manage every part of the purchase — from the initial search through to legal transfer and registration. We have ready-to-view units available right now, simply inquire and we will let you know what is on offer.",
    benefits: [
      { t:'Condo Search', d:'We search across all areas and price ranges to find condos that match your lifestyle, needs, and budget. Ready-to-view units are available — just ask and we will arrange viewings immediately.' },
      { t:'Legal Documents & Transfer', d:'We handle all legal checks, contract review, and the official ownership transfer process so your purchase is secure and properly registered in your name.' },
      { t:'Ownership Guidance', d:'We explain every ownership structure available, what it means for you, and how to protect your investment fully through the correct legal channels.' },
      { t:'End-to-End Support', d:'From shortlisting to handover, our team manages every step — so you can focus on your new home while we handle the paperwork and procedures.' },
    ],
    cta: 'Get in Touch',
    th: {
      eyebrow: 'การถือครองคอนโดที่ง่ายขึ้น', title: 'ซื้อคอนโด',
      tagline: 'คอนโดของคุณ กฎของคุณ',
      cta: 'ติดต่อเรา',
      intro: 'แฟทบอยส์ ลิฟวิ่ง เอสเตทพร้อมช่วยคุณหาคอนโดที่ใช่ในพื้นที่ที่ต้องการ และจัดการทุกส่วนของการซื้อแทนคุณ ตั้งแต่การค้นหาเบื้องต้นจนถึงการโอนกรรมสิทธิ์ตามกฎหมาย เรามียูนิตพร้อมชมอยู่แล้วในขณะนี้ เพียงสอบถามและเราจะแจ้งให้ทราบว่ามีอะไรบ้าง',
      benefits: [
        { t:'ค้นหาคอนโด', d:'เราค้นหาทุกพื้นที่และช่วงราคาเพื่อหาคอนโดที่ตรงกับไลฟ์สไตล์ ความต้องการ และงบประมาณของคุณ มียูนิตพร้อมชม — เพียงสอบถามและเราจะนัดชมทันที' },
        { t:'เอกสารและการโอนกรรมสิทธิ์', d:'เราดูแลการตรวจสอบกฎหมาย ทบทวนสัญญา และกระบวนการโอนกรรมสิทธิ์อย่างเป็นทางการ เพื่อให้การซื้อของคุณปลอดภัยและจดทะเบียนในชื่อของคุณอย่างถูกต้อง' },
        { t:'เป็นเจ้าของได้ทันที', d:'คนไทยสามารถเป็นเจ้าของคอนโดได้อย่างสมบูรณ์ แฟทบอยส์ดูแลรายละเอียดและขั้นตอนทั้งหมดให้คุณ เพื่อให้กระบวนการซื้อราบรื่นที่สุด' },
        { t:'ดูแลครบวงจร', d:'ตั้งแต่การคัดกรองจนถึงการส่งมอบ ทีมของเราจัดการทุกขั้นตอน — คุณโฟกัสที่บ้านใหม่ ส่วนเอกสารและรายละเอียดต่างๆ เราดูแลให้ครบ' },
      ],
    },
  },
  {
    file: 'buy-land.html',
    title: 'Buying Land',
    eyebrow: 'Land Ownership in Thailand',
    heroGrad: 'linear-gradient(155deg,#0d1a08 0%,#162210 50%,#0a120a 100%)',
    accent: '#233d00',
    tagline: "Your land. Your legacy.",
    ctaLink: 'https://lin.ee/H5iMNKQ',
    intro: "Acquiring land in Thailand is one of the most rewarding long-term decisions you can make. We help you identify the right plots in your preferred area and navigate the entire legal process — from due diligence and title deed verification to final registration. Through a properly structured 30-year agreement, you can hold land rights fully in your name, with no nominee required. We have plots ready to inquire about right now.",
    benefits: [
      { t:'Land Search', d:'We identify plots that match your intended use, preferred location, and budget — including options ready to view immediately upon inquiry.' },
      { t:'Due Diligence & Title Verification', d:'We verify the title deed, check for encumbrances, confirm boundaries, and ensure the land is fully clean and legally transferable before you commit.' },
      { t:'30-Year Land Rights', d:'We structure your agreement so you hold legally registered land rights for 30 years, 100% in your name, with no nominee, no risk, and full legal protection.' },
      { t:'Legal Transfer & Registration', d:'All Land Department procedures, documentation, and official registration are handled by our team from start to finish.' },
    ],
    cta: 'Reach Out to Our Team',
    th: {
      eyebrow: 'การถือครองที่ดินในไทย', title: 'ซื้อที่ดิน',
      tagline: 'ที่ดินของคุณ มรดกของคุณ',
      cta: 'ติดต่อทีมงาน',
      intro: 'การซื้อที่ดินในไทยเป็นหนึ่งในการตัดสินใจระยะยาวที่คุ้มค่าที่สุด แฟทบอยส์ ลิฟวิ่ง เอสเตทพร้อมช่วยคุณค้นหาแปลงที่เหมาะสมในพื้นที่ที่ต้องการ และดูแลกระบวนการทางกฎหมายทั้งหมดแทนคุณ ตั้งแต่การตรวจสอบโฉนดจนถึงการจดทะเบียนโอนกรรมสิทธิ์ เรามีแปลงพร้อมให้สอบถามได้ทันที',
      benefits: [
        { t:'ค้นหาที่ดิน', d:'เราระบุแปลงที่ตรงกับวัตถุประสงค์ พื้นที่ที่ต้องการ และงบประมาณของคุณ รวมถึงตัวเลือกที่พร้อมชมได้ทันทีเมื่อสอบถาม' },
        { t:'ตรวจสอบสถานะและโฉนด', d:'เราตรวจสอบโฉนด ตรวจหาภาระผูกพัน ยืนยันขอบเขต และให้มั่นใจว่าที่ดินสะอาดและสามารถโอนได้ตามกฎหมายก่อนที่คุณจะตัดสินใจ' },
        { t:'เป็นเจ้าของที่ดินตลอดไป', d:'คนไทยสามารถเป็นเจ้าของที่ดินได้อย่างสมบูรณ์ แฟทบอยส์ดูแลรายละเอียดทั้งหมดให้คุณ เพื่อให้การซื้อที่ดินของคุณปลอดภัยและถูกต้องตามกฎหมายทุกขั้นตอน' },
        { t:'การโอนและจดทะเบียน', d:'ขั้นตอนสำนักงานที่ดิน เอกสาร และการจดทะเบียนอย่างเป็นทางการทั้งหมดดูแลโดยทีมของเราตั้งแต่ต้นจนจบ' },
      ],
    },
  },
  {
    file: 'sell-house.html',
    title: 'Selling a House',
    eyebrow: 'Sell with Confidence',
    heroGrad: 'linear-gradient(155deg,#1a0e08 0%,#221408 50%,#140a08 100%)',
    accent: '#C06A4A',
    tagline: "The right buyer. The right price.",
    ctaLink: 'https://lin.ee/H5iMNKQ',
    intro: "Selling a house in Thailand involves more than finding a buyer — it requires proper valuation, professional presentation, and careful handling of all legal documents and transfer procedures. Our team manages the entire process from listing to handover, so you sell smoothly, securely, and at the best possible price.",
    benefits: [
      { t:'Property Valuation', d:'We assess your property against current market conditions and comparable sales to establish an accurate, competitive asking price.' },
      { t:'Buyer Network', d:'We connect your property to our active network of qualified buyers — locals and internationals — who are actively searching for homes like yours.' },
      { t:'Legal Transfer Documents', d:'We prepare and manage all legal paperwork required for the title deed transfer, Land Department registration, and any associated tax obligations.' },
      { t:'Negotiation & Closing', d:'We represent your interests through every round of negotiation and ensure the final agreement is fair, clear, and legally sound.' },
    ],
    cta: 'Contact Our Team',
    th: {
      eyebrow: 'ขายอย่างมั่นใจ', title: 'ขายบ้าน',
      tagline: 'ผู้ซื้อที่ใช่ ราคาที่ดี',
      cta: 'ติดต่อทีมงาน',
      intro: 'การขายบ้านในไทยต้องการมากกว่าการหาผู้ซื้อ — ต้องมีการประเมินราคาที่เหมาะสม การนำเสนออย่างมืออาชีพ และการจัดการเอกสารทางกฎหมายและขั้นตอนการโอนอย่างรอบคอบ ทีมของเราจัดการกระบวนการทั้งหมดตั้งแต่การลงประกาศจนถึงการส่งมอบ เพื่อให้คุณขายได้อย่างราบรื่น ปลอดภัย และในราคาที่ดีที่สุด',
      benefits: [
        { t:'ประเมินราคาอสังหาฯ', d:'เราประเมินอสังหาฯ ของคุณเทียบกับสภาวะตลาดปัจจุบันและการขายที่เปรียบเทียบได้ เพื่อกำหนดราคาตั้งที่แม่นยำและแข่งขันได้' },
        { t:'เครือข่ายผู้ซื้อ', d:'เราเชื่อมอสังหาฯ ของคุณกับเครือข่ายผู้ซื้อที่มีคุณสมบัติของเรา ทั้งในประเทศและต่างประเทศ ที่กำลังมองหาบ้านแบบของคุณอยู่' },
        { t:'เอกสารการโอนกรรมสิทธิ์', d:'เราเตรียมและจัดการเอกสารทางกฎหมายทั้งหมดที่จำเป็นสำหรับการโอนโฉนด การจดทะเบียนสำนักงานที่ดิน และภาระภาษีที่เกี่ยวข้อง' },
        { t:'การเจรจาและการปิดดีล', d:'เราตัวแทนผลประโยชน์ของคุณในทุกรอบการเจรจา และให้มั่นใจว่าข้อตกลงสุดท้ายมีความเป็นธรรม ชัดเจน และถูกกฎหมาย' },
      ],
    },
  },
  {
    file: 'sell-condo.html',
    title: 'Selling a Condo',
    eyebrow: 'List. Market. Sell.',
    heroGrad: 'linear-gradient(155deg,#1a0e08 0%,#221408 50%,#140a08 100%)',
    accent: '#C06A4A',
    tagline: "Your condo sold, done right.",
    ctaLink: 'https://lin.ee/H5iMNKQ',
    intro: "Selling a condo in Thailand is a structured process that requires market knowledge, the right buyer connections, and careful legal handling. We manage everything for you — from establishing the correct asking price to completing all official transfer documentation — so you sell quickly, cleanly, and with full legal certainty.",
    benefits: [
      { t:'Market Valuation', d:'We price your condo accurately based on current market data, comparable units, and demand in your specific building and area.' },
      { t:'Qualified Buyer Access', d:'We match your listing to our network of active buyers — including international purchasers — who are ready to move quickly on the right property.' },
      { t:'Legal Transfer Process', d:'We manage all title deed checks, sale and purchase agreement drafting, and the full Land Department transfer process from start to finish.' },
      { t:'Smooth Handover', d:'We coordinate between all parties to ensure a clean, professionally managed handover with zero loose ends on the legal or financial side.' },
    ],
    cta: 'Get in Touch',
    th: {
      eyebrow: 'ลงประกาศ ทำตลาด ขายได้', title: 'ขายคอนโด',
      tagline: 'ขายคอนโดของคุณ ทำอย่างถูกต้อง',
      cta: 'ติดต่อเรา',
      intro: 'การขายคอนโดในไทยเป็นกระบวนการที่มีโครงสร้างซึ่งต้องการความรู้ตลาด การเชื่อมต่อกับผู้ซื้อที่เหมาะสม และการจัดการทางกฎหมายอย่างรอบคอบ เราจัดการทุกอย่างให้คุณ ตั้งแต่กำหนดราคาตั้งที่ถูกต้องจนถึงทำเอกสารการโอนอย่างเป็นทางการ เพื่อให้คุณขายได้เร็ว สะอาด และมีความแน่นอนทางกฎหมายอย่างสมบูรณ์',
      benefits: [
        { t:'ประเมินราคาตลาด', d:'เราตั้งราคาคอนโดของคุณอย่างแม่นยำตามข้อมูลตลาดปัจจุบัน ยูนิตที่เปรียบเทียบได้ และความต้องการในอาคารและพื้นที่ของคุณ' },
        { t:'เข้าถึงผู้ซื้อที่มีคุณสมบัติ', d:'เราจับคู่ประกาศของคุณกับเครือข่ายผู้ซื้อที่ active ของเรา รวมถึงผู้ซื้อต่างชาติ ที่พร้อมตัดสินใจได้อย่างรวดเร็วในอสังหาฯ ที่ใช่' },
        { t:'กระบวนการโอนกรรมสิทธิ์', d:'เราจัดการการตรวจสอบโฉนด ร่างสัญญาซื้อขาย และกระบวนการโอนสำนักงานที่ดินทั้งหมดตั้งแต่ต้นจนจบ' },
        { t:'ส่งมอบอย่างราบรื่น', d:'เราประสานงานระหว่างทุกฝ่ายเพื่อให้การส่งมอบสะอาด เป็นมืออาชีพ และไม่มีปัญหาคาราคาซังทางกฎหมายหรือการเงิน' },
      ],
    },
  },
  {
    file: 'sell-land.html',
    title: 'Selling Land',
    eyebrow: 'Maximise Your Land Value',
    heroGrad: 'linear-gradient(155deg,#1a0e08 0%,#221408 50%,#140a08 100%)',
    accent: '#C06A4A',
    tagline: "Land sold. Value delivered.",
    ctaLink: 'https://lin.ee/H5iMNKQ',
    intro: "Selling land in Thailand requires thorough due diligence, accurate pricing, and correct legal procedures to ensure a clean, enforceable transaction. Our team handles every step — from title verification and market assessment to finding serious buyers and completing all official Land Department documentation.",
    benefits: [
      { t:'Land Valuation', d:'We assess your plot against current land prices, location demand, and development potential to position it correctly in the market.' },
      { t:'Title & Legal Checks', d:'We verify the title deed is clean and unencumbered, and ensure all documentation is in order before presenting your land to buyers.' },
      { t:'Buyer Matching', d:'We connect your land to qualified buyers — developers, investors, and private purchasers — who are actively looking for plots in your area.' },
      { t:'Legal Transfer & Registration', d:'All Land Department documentation, tax calculations, and official transfer registration are managed by our team from offer to completion.' },
    ],
    cta: 'Reach Out to Us',
    th: {
      eyebrow: 'เพิ่มมูลค่าที่ดินของคุณ', title: 'ขายที่ดิน',
      tagline: 'ขายที่ดินได้ มูลค่าครบถ้วน',
      cta: 'ติดต่อเรา',
      intro: 'การขายที่ดินในไทยต้องการการตรวจสอบสถานะอย่างละเอียด การกำหนดราคาที่แม่นยำ และขั้นตอนทางกฎหมายที่ถูกต้อง เพื่อให้การทำธุรกรรมสะอาดและบังคับใช้ได้ ทีมของเราดูแลทุกขั้นตอน ตั้งแต่การตรวจสอบโฉนดและการประเมินตลาด ไปจนถึงการหาผู้ซื้อที่จริงจังและทำเอกสารสำนักงานที่ดินอย่างเป็นทางการ',
      benefits: [
        { t:'ประเมินราคาที่ดิน', d:'เราประเมินแปลงของคุณเทียบกับราคาที่ดินปัจจุบัน ความต้องการในพื้นที่ และศักยภาพการพัฒนา เพื่อกำหนดตำแหน่งในตลาดอย่างถูกต้อง' },
        { t:'ตรวจสอบโฉนดและกฎหมาย', d:'เราตรวจสอบโฉนดว่าสะอาดและปราศจากภาระผูกพัน และให้มั่นใจว่าเอกสารทั้งหมดเรียบร้อยก่อนนำเสนอที่ดินของคุณต่อผู้ซื้อ' },
        { t:'จับคู่ผู้ซื้อ', d:'เราเชื่อมที่ดินของคุณกับผู้ซื้อที่มีคุณสมบัติ ทั้งนักพัฒนา นักลงทุน และผู้ซื้อส่วนตัว ที่กำลังมองหาแปลงในพื้นที่ของคุณอย่างจริงจัง' },
        { t:'การโอนและจดทะเบียน', d:'เอกสารสำนักงานที่ดิน การคำนวณภาษี และการจดทะเบียนโอนอย่างเป็นทางการทั้งหมดดูแลโดยทีมของเราตั้งแต่การเสนอราคาจนถึงการปิดดีล' },
      ],
    },
  },
];

const allPills = [
  ['renting.html','Renting','เช่า'],
  ['relocating.html','Relocating','ย้ายถิ่นฐาน'],
  ['pet-friendly.html','Pet Friendly','สัตว์เลี้ยง'],
  ['investing.html','Investing','ลงทุน'],
  ['construction.html','Construction','ก่อสร้าง'],
  ['consulting.html','Consulting','ที่ปรึกษา'],
];

function makePage(s) {
  const pills = allPills.map(([href, labelEn, labelTh]) =>
    `<a href="${href}" class="svc-pill${s.file===href?' active':''}" data-i18n-pill-en="${labelEn}" data-i18n-pill-th="${labelTh}">${labelEn}</a>`
  ).join('');

  // Build per-page translations
  const pageT = {
    en: {
      'pg.eyebrow': s.eyebrow,
      'pg.title': s.title,
      'pg.tagline': `"${s.tagline}"`,
      'pg.cta': s.cta,
      'pg.cta_btn': `${s.cta} →`,
      'pg.intro': s.intro,
      ...Object.fromEntries(s.benefits.map((b, i) => [
        [`pg.b${i+1}_title`, b.t],
        [`pg.b${i+1}_desc`, b.d],
      ]).flat()),
    },
    th: {
      'pg.eyebrow': s.th.eyebrow,
      'pg.title': s.th.title,
      'pg.tagline': `"${s.th.tagline}"`,
      'pg.cta': s.th.cta,
      'pg.cta_btn': `${s.th.cta} →`,
      'pg.intro': s.th.intro,
      ...Object.fromEntries(s.th.benefits.map((b, i) => [
        [`pg.b${i+1}_title`, b.t],
        [`pg.b${i+1}_desc`, b.d],
      ]).flat()),
    },
  };

  // Inject article translation keys if page has article content
  if (s.article) {
    for (const lang of ['en', 'th']) {
      for (const [key, val] of Object.entries(s.article[lang])) {
        pageT[lang][`pg.art_${key}`] = val;
      }
    }
  }

  const benefitCards = s.benefits.map((b, i) => `
      <div class="benefit-card reveal${i%2===1?' reveal-delay-1':''}">
        <span class="benefit-num">0${i+1}</span>
        <div class="benefit-title" data-i18n="pg.b${i+1}_title">${b.t}</div>
        <div class="benefit-desc" data-i18n="pg.b${i+1}_desc">${b.d}</div>
        <div class="benefit-bar"></div>
      </div>`).join('');

  const articleCss = s.article ? `
  .article-section{background:var(--linen-white);padding:6rem 7rem;color:var(--dark-walnut);border-top:1px solid rgba(30,38,24,.08)}
  .article-inner{display:grid;grid-template-columns:180px 1fr;gap:5rem;align-items:start}
  .article-sidebar{padding-top:.5rem}
  .article-eyebrow{font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--burnt-sienna);font-weight:600;position:sticky;top:7rem;display:flex;align-items:center;gap:.5rem}
  .article-eyebrow::before{content:'';width:16px;height:1px;background:var(--burnt-sienna)}
  .article-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,3vw,2.8rem);font-weight:600;color:var(--dark-walnut);letter-spacing:-.02em;margin:0 0 2rem;line-height:1.05}
  .article-p{font-size:.9rem;line-height:1.9;color:#4a4640;font-weight:300;margin:0 0 1.25rem}
  .article-quote{font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-style:italic;font-weight:600;color:var(--forest-green);border-left:3px solid var(--forest-green);padding:.75rem 0 .75rem 1.5rem;margin:1.75rem 0;line-height:1.5}
  .article-def{font-size:.9rem;line-height:1.9;color:var(--dark-walnut);font-weight:500;background:rgba(35,61,0,.06);padding:.85rem 1.25rem;border-left:2px solid var(--forest-green);margin:0 0 1.25rem}
  .article-examples-label{font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--forest-green);font-weight:600;margin:1.5rem 0 .6rem}
  .article-list{margin:0 0 1.5rem;padding-left:0;list-style:none}
  .article-list li{font-size:.9rem;line-height:1.85;color:#4a4640;font-weight:300;padding:.25rem 0 .25rem 1.4rem;position:relative}
  .article-list li::before{content:'—';position:absolute;left:0;color:var(--forest-green);font-weight:600;font-size:.75rem}
  .article-subheading{font-family:'Cormorant Garamond',serif;font-size:1.55rem;font-weight:600;color:var(--dark-walnut);margin:2.25rem 0 .85rem;letter-spacing:-.01em;line-height:1.1}
  .article-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin:1.25rem 0 2rem;border:1px solid rgba(35,61,0,.12)}
  .article-why-item{padding:1.25rem 1.5rem;border-right:1px solid rgba(35,61,0,.12)}
  .article-why-item:last-child{border-right:none}
  .article-why-num{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:300;color:var(--forest-green);line-height:1;margin-bottom:.3rem}
  .article-why-title{font-family:'Cormorant Garamond',serif;font-size:1.05rem;font-weight:600;color:var(--dark-walnut);margin-bottom:.4rem}
  .article-why-desc{font-size:.8rem;line-height:1.7;color:var(--stone-grey);font-weight:300}
  .article-closing{margin-top:2.25rem;padding-top:1.75rem;border-top:1px solid rgba(30,38,24,.1)}
  .article-goal{font-family:'Cormorant Garamond',serif;font-size:1.05rem;font-style:italic;color:var(--forest-green);font-weight:600;margin:.25rem 0 1rem}
  .article-close-em{font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-style:italic;font-weight:600;color:var(--dark-walnut);margin:0}
  .article-divider{height:1px;background:rgba(30,38,24,.12);margin:3rem 0}
  .article-city-section{margin:1.75rem 0;padding:1.5rem 1.75rem;background:rgba(35,61,0,.04);border-left:2px solid rgba(35,61,0,.18)}
  .article-city-heading{font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:600;color:var(--dark-walnut);margin:0 0 .85rem;letter-spacing:-.01em;line-height:1.1}
  ` : '';

  const a = s.article ? s.article.en : null;
  const articleHtml = s.article ? `
  <section class="article-section">
    <div class="article-inner reveal">
      <div class="article-sidebar">
        <div class="article-eyebrow" data-i18n="pg.art_eyebrow">${a.eyebrow}</div>
      </div>
      <div class="article-content">
        <h2 class="article-title" data-i18n="pg.art_title">${a.title}</h2>
        <p class="article-p" data-i18n="pg.art_p1">${a.p1}</p>
        <blockquote class="article-quote" data-i18n="pg.art_quote">${a.quote}</blockquote>
        <p class="article-p" data-i18n="pg.art_p2">${a.p2}</p>
        <p class="article-def" data-i18n="pg.art_def">${a.def}</p>
        <p class="article-p" data-i18n="pg.art_p3">${a.p3}</p>
        <p class="article-p" data-i18n="pg.art_p4">${a.p4}</p>
        <p class="article-examples-label" data-i18n="pg.art_ex_label">${a.ex_label}</p>
        <ul class="article-list">
          <li data-i18n="pg.art_ex1">${a.ex1}</li>
          <li data-i18n="pg.art_ex2">${a.ex2}</li>
          <li data-i18n="pg.art_ex3">${a.ex3}</li>
        </ul>
        <p class="article-p" data-i18n="pg.art_p5">${a.p5}</p>
        <h3 class="article-subheading" data-i18n="pg.art_why_title">${a.why_title}</h3>
        <p class="article-p" data-i18n="pg.art_why_intro">${a.why_intro}</p>
        <div class="article-why-grid">
          <div class="article-why-item">
            <div class="article-why-num">1.</div>
            <div class="article-why-title" data-i18n="pg.art_w1_title">${a.w1_title}</div>
            <div class="article-why-desc" data-i18n="pg.art_w1_desc">${a.w1_desc}</div>
          </div>
          <div class="article-why-item">
            <div class="article-why-num">2.</div>
            <div class="article-why-title" data-i18n="pg.art_w2_title">${a.w2_title}</div>
            <div class="article-why-desc" data-i18n="pg.art_w2_desc">${a.w2_desc}</div>
          </div>
          <div class="article-why-item">
            <div class="article-why-num">3.</div>
            <div class="article-why-title" data-i18n="pg.art_w3_title">${a.w3_title}</div>
            <div class="article-why-desc" data-i18n="pg.art_w3_desc">${a.w3_desc}</div>
          </div>
        </div>
        <h3 class="article-subheading" data-i18n="pg.art_bw_title">${a.bw_title}</h3>
        <p class="article-p" data-i18n="pg.art_bw_p1">${a.bw_p1}</p>
        <p class="article-p" data-i18n="pg.art_bw_p2">${a.bw_p2}</p>
        <p class="article-p" data-i18n="pg.art_bw_p3">${a.bw_p3}</p>
        <ul class="article-list">
          <li data-i18n="pg.art_li1">${a.li1}</li>
          <li data-i18n="pg.art_li2">${a.li2}</li>
          <li data-i18n="pg.art_li3">${a.li3}</li>
          <li data-i18n="pg.art_li4">${a.li4}</li>
        </ul>
        <p class="article-p" data-i18n="pg.art_fatboys">${a.fatboys}</p>
        <div class="article-closing">
          <p class="article-p" data-i18n="pg.art_goal_label">${a.goal_label}</p>
          <p class="article-goal" data-i18n="pg.art_goal">${a.goal}</p>
          <p class="article-p" data-i18n="pg.art_close1">${a.close1}</p>
          <p class="article-close-em" data-i18n="pg.art_close2">${a.close2}</p>
        </div>

        <div class="article-divider"></div>

        <h3 class="article-subheading" data-i18n="pg.art_s2_title">${a.s2_title}</h3>
        <p class="article-p" data-i18n="pg.art_s2_p1">${a.s2_p1}</p>
        <p class="article-p" data-i18n="pg.art_s2_p2">${a.s2_p2}</p>
        <p class="article-p" data-i18n="pg.art_s2_p3">${a.s2_p3}</p>
        <p class="article-p" data-i18n="pg.art_s2_p4">${a.s2_p4}</p>

        <div class="article-divider"></div>

        <h3 class="article-subheading" data-i18n="pg.art_s3_title">${a.s3_title}</h3>
        <p class="article-p" data-i18n="pg.art_s3_p1">${a.s3_p1}</p>
        <p class="article-p" data-i18n="pg.art_s3_p2">${a.s3_p2}</p>

        <div class="article-city-section">
          <h4 class="article-city-heading" data-i18n="pg.art_pattaya_title">${a.pattaya_title}</h4>
          <p class="article-p" data-i18n="pg.art_pattaya_p1">${a.pattaya_p1}</p>
          <p class="article-examples-label" data-i18n="pg.art_pattaya_intro">${a.pattaya_intro}</p>
          <ul class="article-list">
            <li data-i18n="pg.art_pattaya_li1">${a.pattaya_li1}</li>
            <li data-i18n="pg.art_pattaya_li2">${a.pattaya_li2}</li>
            <li data-i18n="pg.art_pattaya_li3">${a.pattaya_li3}</li>
            <li data-i18n="pg.art_pattaya_li4">${a.pattaya_li4}</li>
          </ul>
          <p class="article-p" style="margin:0" data-i18n="pg.art_pattaya_p2">${a.pattaya_p2}</p>
        </div>

        <div class="article-city-section">
          <h4 class="article-city-heading" data-i18n="pg.art_rayong_title">${a.rayong_title}</h4>
          <p class="article-p" data-i18n="pg.art_rayong_p1">${a.rayong_p1}</p>
          <p class="article-examples-label" data-i18n="pg.art_rayong_intro">${a.rayong_intro}</p>
          <ul class="article-list">
            <li data-i18n="pg.art_rayong_li1">${a.rayong_li1}</li>
            <li data-i18n="pg.art_rayong_li2">${a.rayong_li2}</li>
            <li data-i18n="pg.art_rayong_li3">${a.rayong_li3}</li>
            <li data-i18n="pg.art_rayong_li4">${a.rayong_li4}</li>
          </ul>
          <p class="article-p" data-i18n="pg.art_rayong_p2">${a.rayong_p2}</p>
          <p class="article-p" style="margin:0" data-i18n="pg.art_rayong_p3">${a.rayong_p3}</p>
        </div>

        <div class="article-divider"></div>

        <h3 class="article-subheading" data-i18n="pg.art_expertise_title">${a.expertise_title}</h3>
        <p class="article-p" data-i18n="pg.art_expertise_p1">${a.expertise_p1}</p>
        <p class="article-examples-label" data-i18n="pg.art_expertise_intro">${a.expertise_intro}</p>
        <ul class="article-list">
          <li data-i18n="pg.art_expertise_li1">${a.expertise_li1}</li>
          <li data-i18n="pg.art_expertise_li2">${a.expertise_li2}</li>
          <li data-i18n="pg.art_expertise_li3">${a.expertise_li3}</li>
        </ul>
        <p class="article-p" data-i18n="pg.art_expertise_p2">${a.expertise_p2}</p>
        <p class="article-close-em" data-i18n="pg.art_expertise_p3">${a.expertise_p3}</p>

      </div>
    </div>
  </section>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>${s.title} — FatBoys Real Estate Thailand</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet"/>
  <style>
    ${SHARED_CSS}
    .page-hero{min-height:58vh;padding-top:7rem;padding-bottom:5rem;display:flex;align-items:center;background:${s.heroGrad};position:relative;overflow:hidden}
    .page-hero::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 70% 50%,rgba(35,61,0,.18) 0%,transparent 60%)}
    .page-hero-content{position:relative;z-index:2;padding:0 7rem;max-width:760px}
    .page-eyebrow{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;font-size:.68rem;letter-spacing:.26em;text-transform:uppercase;color:${s.accent};font-weight:500}
    .page-eyebrow::before{content:'';width:28px;height:1px;background:${s.accent}}
    .page-title{font-family:'Cormorant Garamond',serif;font-size:clamp(3rem,6vw,5.5rem);font-weight:300;line-height:.95;color:var(--linen-white);letter-spacing:-.02em;margin-bottom:.8rem}
    .page-tagline{font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-style:italic;font-weight:300;color:rgba(200,184,138,.75);margin-top:1rem;margin-bottom:2rem}
    .intro-section{background:var(--linen-white);padding:6rem 7rem;color:var(--dark-walnut)}
    .intro-layout{display:grid;grid-template-columns:1fr 1.4fr;gap:6rem;align-items:start}
    .intro-label{font-size:.65rem;letter-spacing:.24em;text-transform:uppercase;color:${s.accent};font-weight:600;margin-bottom:.75rem;display:flex;align-items:center;gap:.6rem}
    .intro-label::before{content:'';width:20px;height:1px;background:${s.accent}}
    .intro-heading{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,3.5vw,3rem);font-weight:600;line-height:1.05;color:var(--dark-walnut);letter-spacing:-.02em;margin-bottom:1.5rem}
    .intro-heading em{font-style:italic;color:var(--forest-green)}
    .intro-text{font-size:.9rem;line-height:1.85;color:var(--stone-grey);font-weight:300}
    .stat-num{font-family:'Cormorant Garamond',serif;font-size:2.2rem;font-weight:600;color:var(--dark-walnut);line-height:1}
    .stat-label{font-size:.65rem;letter-spacing:.16em;text-transform:uppercase;color:var(--stone-grey);margin-top:.25rem}
    .benefits-section{background:var(--dark-walnut);padding:6rem 7rem}
    .benefits-heading-row{margin-bottom:0}
    .benefits-eyebrow{font-size:.68rem;letter-spacing:.24em;text-transform:uppercase;color:${s.accent};font-weight:600;margin-bottom:.75rem;display:flex;align-items:center;gap:.6rem}
    .benefits-eyebrow::before{content:'';width:20px;height:1px;background:${s.accent}}
    .benefits-h2{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,3.5vw,3rem);font-weight:600;color:var(--warm-sand);line-height:1.05;letter-spacing:-.02em}
    .benefits-h2 em{font-style:italic;color:var(--forest-green)}
    .benefits-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5px;margin-top:3.5rem;border-top:1px solid rgba(200,184,138,.1)}
    .benefit-card{padding:2.5rem;border-right:1px solid rgba(200,184,138,.1);border-bottom:1px solid rgba(200,184,138,.1);transition:background .3s}
    .benefit-card:nth-child(even){border-right:none}
    .benefit-card:hover{background:rgba(200,184,138,.04)}
    .benefit-num{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:300;color:rgba(200,184,138,.1);line-height:1;display:block;margin-bottom:-1rem}
    .benefit-title{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:600;color:var(--warm-sand);margin-bottom:.75rem}
    .benefit-desc{font-size:.84rem;line-height:1.75;color:var(--stone-grey);font-weight:300}
    .benefit-bar{width:28px;height:2px;background:${s.accent};margin-top:1.5rem;transition:width .4s}
    .benefit-card:hover .benefit-bar{width:48px}
    .services-strip{background:var(--dark-walnut-deep);padding:2rem 7rem;border-top:1px solid rgba(200,184,138,.08)}
    .services-strip-label{font-size:.6rem;letter-spacing:.22em;text-transform:uppercase;color:var(--stone-grey);margin-bottom:1rem}
    .services-strip-links{display:flex;flex-wrap:wrap;gap:.5rem}
    .svc-pill{padding:.45rem 1.1rem;border:1px solid rgba(200,184,138,.15);color:rgba(200,184,138,.55);font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;transition:all .2s;cursor:none}
    .svc-pill:hover,.svc-pill.active{border-color:var(--warm-sand);color:var(--warm-sand)}
    .cta-strip{background:${s.heroGrad};padding:5rem 7rem;display:flex;align-items:center;justify-content:space-between;gap:3rem;border-top:1px solid rgba(200,184,138,.1)}
    .cta-strip-title{font-family:'Cormorant Garamond',serif;font-size:clamp(1.8rem,3vw,2.6rem);font-weight:300;color:var(--linen-white);max-width:500px;line-height:1.2}
    .cta-strip-title strong{font-weight:600;color:var(--warm-sand)}
  ${articleCss}
  </style>
</head>
<body>
  <div class="cursor" id="cursor"></div>
  <div class="cursor-ring" id="cursorRing"></div>
  <div class="grain"></div>
  ${NAV}

  <section class="page-hero">
    <div class="page-hero-content">
      <div class="page-eyebrow" data-i18n="pg.eyebrow">${s.eyebrow}</div>
      <h1 class="page-title" data-i18n="pg.title">${s.title}</h1>
      <p class="page-tagline" data-i18n="pg.tagline">"${s.tagline}"</p>
      <a href="${s.ctaLink}" class="btn-forest" data-i18n="pg.cta">${s.cta}</a>
    </div>
  </section>

  <section class="intro-section">
    <div class="intro-layout reveal">
      <div>
        <div class="intro-label" data-i18n="pg.overview">Overview</div>
        <h2 class="intro-heading" data-i18n="pg.how_we_help">How We<br><em>Help You</em></h2>
      </div>
      <div>
        <p class="intro-text" data-i18n="pg.intro">${s.intro}</p>
        <div style="margin-top:2rem;padding-top:2rem;border-top:1px solid rgba(30,38,24,.1);display:flex;gap:3rem">
          <div><div class="stat-num">12<span style="color:${s.accent};font-size:1.2rem">+</span></div><div class="stat-label" data-i18n="pg.stat1_label">Years Experience</div></div>
          <div><div class="stat-num">1,200<span style="color:${s.accent};font-size:1.2rem">+</span></div><div class="stat-label" data-i18n="pg.stat2_label">Happy Clients</div></div>
          <div><div class="stat-num">12</div><div class="stat-label" data-i18n="pg.stat3_label">Cities Covered</div></div>
        </div>
      </div>
    </div>
  </section>

  ${articleHtml}

  <section class="benefits-section">
    <div class="reveal benefits-heading-row">
      <div class="benefits-eyebrow" data-i18n="pg.whats_included">What's Included</div>
      <h2 class="benefits-h2" data-i18n="pg.everything_you_need">Everything You<br><em>Need</em></h2>
    </div>
    <div class="benefits-grid">${benefitCards}
    </div>
  </section>

  <div class="services-strip">
    <div class="services-strip-label" data-i18n="pg.other_services">Explore Other Services</div>
    <div class="services-strip-links">${pills}</div>
  </div>

  <div class="cta-strip">
    <div class="cta-strip-title" data-i18n="pg.cta_ready">Ready to get started? <strong>Let's talk.</strong></div>
    <a href="${s.ctaLink}" class="btn-forest" style="white-space:nowrap;flex-shrink:0" data-i18n="pg.cta_btn">${s.cta} →</a>
  </div>

  ${FOOTER}
  <script>
  // ── Cursor ──
  var cursor=document.getElementById('cursor'),ring=document.getElementById('cursorRing');
  var mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
  (function loop(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop);})();
  document.querySelectorAll('a,button').forEach(function(el){
    el.addEventListener('mouseenter',function(){cursor.style.width='12px';cursor.style.height='12px';ring.style.width='52px';ring.style.height='52px';ring.style.borderColor='rgba(192,106,74,0.6)';});
    el.addEventListener('mouseleave',function(){cursor.style.width='8px';cursor.style.height='8px';ring.style.width='32px';ring.style.height='32px';ring.style.borderColor='rgba(200,184,138,0.5)';});
  });
  // ── Mobile hamburger ──
  var hBtn=document.getElementById('hamburgerBtn');
  var mDrawer=document.getElementById('mobileDrawer');
  var mOverlay=document.getElementById('mobileOverlay');
  function openMenu(){hBtn.classList.add('open');mDrawer.style.display='flex';mOverlay.classList.add('open');setTimeout(function(){mDrawer.classList.add('open');},10);document.body.style.overflow='hidden';}
  function closeMenu(){hBtn.classList.remove('open');mDrawer.classList.remove('open');mOverlay.classList.remove('open');document.body.style.overflow='';setTimeout(function(){if(!mDrawer.classList.contains('open'))mDrawer.style.display='';},350);}
  hBtn.addEventListener('click',function(){mDrawer.classList.contains('open')?closeMenu():openMenu();});
  mOverlay.addEventListener('click',closeMenu);
  mDrawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeMenu);});
  mDrawer.querySelectorAll('.lang-btn').forEach(function(btn){btn.addEventListener('click',function(){setLanguage(btn.dataset.lang);mDrawer.querySelectorAll('.lang-btn').forEach(function(b){b.classList.remove('active');});btn.classList.add('active');});});
  // ── Scroll reveal ──
  var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:.1});
  document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el);});
  // ── Language switcher ──
  var T = {
    en: Object.assign(${JSON.stringify(COMMON_T_EN)}, ${JSON.stringify(pageT.en)}),
    th: Object.assign(${JSON.stringify(COMMON_T_TH)}, ${JSON.stringify(pageT.th)})
  };
  function setLanguage(lang) {
    localStorage.setItem('fb_lang', lang);
    var t = T[lang];
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    // Service pills
    document.querySelectorAll('[data-i18n-pill-en]').forEach(function(el) {
      el.textContent = lang === 'th' ? el.getAttribute('data-i18n-pill-th') : el.getAttribute('data-i18n-pill-en');
    });
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.documentElement.lang = lang === 'th' ? 'th' : 'en';
  }
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { setLanguage(btn.getAttribute('data-lang')); });
  });
  setLanguage(localStorage.getItem('fb_lang') || 'en');
  </script>
</body>
</html>`;
}

services.forEach(s => {
  fs.writeFileSync(s.file, makePage(s));
  console.log('Created:', s.file);
});
