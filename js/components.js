// ============================================
//   HIM DIGI SOLUTIONS — Components
//   Navbar + Footer injected on every page
// ============================================

function injectNavbar(activePage) {
  const navbar = `
  <nav class="navbar">
    <div class="nav-inner">
      <a href="../index.html" class="nav-logo">HIM<span>.</span>Digi<sup>®</sup></a>
      <ul class="nav-links">
        <li><a href="../index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
        <li><a href="services.html" ${activePage==='services'?'class="active"':''}>Services</a></li>
        <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
        <li><a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
      </ul>
      <a href="pages/contact.html" class="btn btn-primary nav-cta">Get Free Audit →</a>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu" id="mobile-menu">
    <a href="../index.html">Home</a>
    <a href="services.html">Services</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
    <a href="contact.html" class="btn btn-primary" style="text-align:center">Get Free Audit →</a>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', navbar);
}

function injectNavbarHome(activePage) {
  const navbar = `
  <nav class="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">HIM<span>.</span>Digi<sup>®</sup></a>
      <ul class="nav-links">
        <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
        <li><a href="pages/services.html" ${activePage==='services'?'class="active"':''}>Services</a></li>
        <li><a href="pages/about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
        <li><a href="pages/contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
      </ul>
      <a href="pages/contact.html" class="btn btn-primary nav-cta">Get Free Audit →</a>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu" id="mobile-menu">
    <a href="index.html">Home</a>
    <a href="pages/services.html">Services</a>
    <a href="pages/about.html">About</a>
    <a href="pages/contact.html">Contact</a>
    <a href="pages/contact.html" class="btn btn-primary" style="text-align:center; margin-top:8px;">Get Free Audit →</a>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', navbar);
}

function injectFooter(isHome) {
  const base = isHome ? 'pages/' : '';
  const homeBase = isHome ? '' : '../';
  const footer = `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo">HIM<span style="color:var(--orange)">.</span>Digi<sup style="font-size:0.5rem;color:var(--cyan);vertical-align:super">®</sup></div>
        <p>We grow local businesses with high-quality content, smart ads, and data-driven strategies. Based in Hosur, serving clients across India.</p>
        <div class="social-links">
          <a href="https://www.instagram.com/_.creatix._" target="_blank" aria-label="Instagram"><i class="ri-instagram-line"></i></a>
          <a href="https://www.linkedin.com/in/himanshu-pathak-s/" target="_blank" aria-label="LinkedIn"><i class="ri-linkedin-fill"></i></a>
          <a href="https://www.facebook.com/profile.php?id=61574700699127" target="_blank" aria-label="Facebook"><i class="ri-facebook-fill"></i></a>
          <a href="https://wa.me/917448340452" target="_blank" aria-label="WhatsApp"><i class="ri-whatsapp-line"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="${base}services.html">Google Ads / PPC</a></li>
          <li><a href="${base}services.html">Meta Ads</a></li>
          <li><a href="${base}services.html">Social Media Marketing</a></li>
          <li><a href="${base}services.html">Content Creation</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="${homeBase}index.html">Home</a></li>
          <li><a href="${base}about.html">About Us</a></li>
          <li><a href="${base}contact.html">Contact</a></li>
          <li><a href="${base}contact.html">Free Audit</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-item"><i class="ri-map-pin-line"></i><span>Hosur, Tamil Nadu, India</span></div>
        <div class="footer-contact-item"><i class="ri-mail-line"></i><span>bothimanshu57@gmail.com</span></div>
        <div class="footer-contact-item"><i class="ri-whatsapp-line"></i><span>+91 74483 40452</span></div>
        <div class="footer-contact-item"><i class="ri-time-line"></i><span>Available 24/7</span></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 HIM Digi Solutions. All rights reserved.</span>
      <span>Made with <span style="color:var(--orange)">♥</span> in Hosur, India</span>
    </div>
  </footer>
  <a href="https://wa.me/917448340452" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
    <i class="ri-whatsapp-line"></i>
  </a>`;
  document.body.insertAdjacentHTML('beforeend', footer);
}
