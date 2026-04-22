const WA_URL="https://wa.me/917448340452?text=Hi%20Himanshu!%20I%20found%20your%20website%20and%20I'd%20like%20a%20free%20digital%20marketing%20audit.";

function _nav(L,ctaHref){
  return `<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="${L.home}" class="nav-logo" aria-label="HIM Digi Solutions Home">HIM<span>.</span>Digi<sup>®</sup></a>
    <ul class="nav-links" role="list">${L.items}</ul>
    <a href="${ctaHref}" class="btn btn-primary nav-cta">Get Free Audit →</a>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mobile-menu" id="mobile-menu">
  ${L.mobile}
  <a href="${ctaHref}" class="btn btn-primary" style="text-align:center;margin-top:8px">Get Free Audit →</a>
</div>
<noscript>
  <div style="background:#13131A;padding:16px 24px;display:flex;gap:24px;flex-wrap:wrap;border-bottom:1px solid #252535">
    <a href="${L.home}" style="color:#FF6B2B;font-weight:700">HIM.Digi®</a>
    <a href="${L.services}" style="color:#E8E8F0">Services</a>
    <a href="${L.about}" style="color:#E8E8F0">About</a>
    <a href="${L.blog}" style="color:#E8E8F0">Blog</a>
    <a href="${L.contact}" style="color:#E8E8F0">Contact</a>
  </div>
</noscript>`;
}

function _li(href,label,active){
  return `<li><a href="${href}"${active?' class="active" aria-current="page"':''}>${label}</a></li>`;
}
function _mob(href,label){return `<a href="${href}">${label}</a>`;}

function injectNavbar(activePage){
  const L={
    home:'../index.html', services:'services.html', about:'about.html',
    blog:'blog/index.html', contact:'contact.html',
    pricing:'pricing.html', faq:'faq.html'
  };
  L.items=
    _li(L.home,'Home',activePage==='home')+
    _li(L.services,'Services',activePage==='services')+
    _li(L.about,'About',activePage==='about')+
    _li(L.blog,'Blog',activePage==='blog')+
    _li(L.contact,'Contact',activePage==='contact');
  L.mobile=
    _mob(L.home,'Home')+_mob(L.services,'Services')+
    _mob(L.about,'About')+_mob(L.blog,'Blog')+
    _mob(L.contact,'Contact');
  document.body.insertAdjacentHTML('afterbegin',_nav(L,L.contact));
}

function injectNavbarHome(activePage){
  const L={
    home:'index.html', services:'pages/services.html', about:'pages/about.html',
    blog:'pages/blog/index.html', contact:'pages/contact.html',
    pricing:'pages/pricing.html', faq:'pages/faq.html'
  };
  L.items=
    _li(L.home,'Home',activePage==='home')+
    _li(L.services,'Services',activePage==='services')+
    _li(L.about,'About',activePage==='about')+
    _li(L.blog,'Blog',activePage==='blog')+
    _li(L.contact,'Contact',activePage==='contact');
  L.mobile=
    _mob(L.home,'Home')+_mob(L.services,'Services')+
    _mob(L.about,'About')+_mob(L.blog,'Blog')+
    _mob(L.contact,'Contact');
  document.body.insertAdjacentHTML('afterbegin',_nav(L,L.contact));
}

function injectFooter(isHome){
  const b=isHome?'pages/':'';
  const hb=isHome?'':'../';
  const bl=isHome?'pages/blog/':'blog/';
  const footer=`<footer class="footer" role="contentinfo">
  <div class="footer-grid">
    <div class="footer-brand">
      <div style="font-family:'Outfit',sans-serif;font-size:1.5rem;font-weight:800;color:#fff;margin-bottom:12px">HIM<span style="color:#FF6B2B">.</span>Digi<sup style="font-size:0.5rem;color:#00D4E8;vertical-align:super">®</sup></div>
      <p>We grow local businesses with quality content and smart ads. Based in Hosur, Tamil Nadu, India.</p>
      <div class="social-links">
        <a href="https://www.instagram.com/_.creatix._" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram"><i class="ri-instagram-line"></i></a>
        <a href="https://www.linkedin.com/in/himanshu-pathak-s/" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn"><i class="ri-linkedin-fill"></i></a>
        <a href="https://www.facebook.com/profile.php?id=61574700699127" target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook"><i class="ri-facebook-fill"></i></a>
        <a href="${WA_URL}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><i class="ri-whatsapp-line"></i></a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="${b}services.html">Google Ads / PPC</a></li>
        <li><a href="${b}services.html">Meta Ads (FB + IG)</a></li>
        <li><a href="${b}services.html">Social Media Marketing</a></li>
        <li><a href="${b}services.html">Content Creation</a></li>
        <li><a href="${b}pricing.html">View Pricing</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="${hb}index.html">Home</a></li>
        <li><a href="${b}about.html">About Us</a></li>
        <li><a href="${bl}index.html">Blog</a></li>
        <li><a href="${b}faq.html">FAQ</a></li>
        <li><a href="${b}contact.html">Free Audit</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <div class="footer-contact-item"><i class="ri-map-pin-line"></i><span>Hosur, Tamil Nadu, India</span></div>
      <div class="footer-contact-item"><i class="ri-mail-line"></i><a href="mailto:bothimanshu57@gmail.com" style="color:inherit">bothimanshu57@gmail.com</a></div>
      <div class="footer-contact-item"><i class="ri-whatsapp-line"></i><a href="${WA_URL}" target="_blank" style="color:inherit">+91 74483 40452</a></div>
      <div class="footer-contact-item"><i class="ri-time-line"></i><span>Available 24/7</span></div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 HIM Digi Solutions. All rights reserved.</span>
    <div style="display:flex;gap:20px;flex-wrap:wrap;justify-content:center;align-items:center">
      <a href="${b}privacy-policy.html" style="color:var(--text-muted);font-size:0.82rem">Privacy Policy</a>
      <a href="${b}terms.html" style="color:var(--text-muted);font-size:0.82rem">Terms of Service</a>
      <span style="color:var(--text-muted);font-size:0.82rem">Made with <span style="color:#FF6B2B">♥</span> in Hosur</span>
    </div>
  </div>
</footer>
<a href="${WA_URL}" class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><i class="ri-whatsapp-line"></i></a>`;
  document.body.insertAdjacentHTML('beforeend',footer);
}
