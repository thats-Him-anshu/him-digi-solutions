document.addEventListener('DOMContentLoaded', () => {
 const currentPage = window.location.pathname.split('/').pop() || 'index.html';
 document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
 const href = link.getAttribute('href');
 if (href === currentPage || (currentPage === '' && href === 'index.html')) {
 link.classList.add('active');
 }
 });
 const hamburger = document.getElementById('hamburger');
 const mobileMenu = document.getElementById('mobile-menu');
 if (hamburger && mobileMenu) {
 hamburger.addEventListener('click', () => {
 mobileMenu.classList.toggle('open');
 const spans = hamburger.querySelectorAll('span');
 if (mobileMenu.classList.contains('open')) {
 spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
 spans[1].style.opacity = '0';
 spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
 } else {
 spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
 }
 });
 mobileMenu.querySelectorAll('a').forEach(a => {
 a.addEventListener('click', () => {
 mobileMenu.classList.remove('open');
 hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
 });
 });
 }
 const reveals = document.querySelectorAll('.reveal');
 const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 entry.target.classList.add('visible');
 observer.unobserve(entry.target);
 }
 });
 }, { threshold: 0.12 });
 reveals.forEach(el => observer.observe(el));
 const navbar = document.querySelector('.navbar');
 window.addEventListener('scroll', () => {
 if (window.scrollY > 40) {
 navbar.style.background = 'rgba(10,10,15,0.97)';
 } else {
 navbar.style.background = 'rgba(10,10,15,0.85)';
 }
 });
});
function initCookieBanner() {
 if (localStorage.getItem('cookie_consent')) return;
 const banner = document.createElement('div');
 banner.className = 'cookie-banner';
 banner.innerHTML = `
 <h4><i class="ri-cookie-line"></i> We use cookies</h4>
 <p>We use cookies for analytics (Google Analytics), advertising (Meta Pixel, Google Ads), and session recording (Microsoft Clarity). See our <a href="/pages/privacy-policy.html">Privacy Policy</a>.</p>
 <div class="cookie-actions">
 <button class="btn btn-primary" id="cookie-accept" style="padding:10px 20px;font-size:0.85rem">Accept All</button>
 <button class="btn btn-outline" id="cookie-decline" style="padding:10px 20px;font-size:0.85rem">Decline</button>
 </div>`;
 document.body.appendChild(banner);
 document.getElementById('cookie-accept').addEventListener('click', () => {
 localStorage.setItem('cookie_consent', 'accepted');
 banner.classList.add('hidden');
 setTimeout(() => banner.remove(), 500);
 });
 document.getElementById('cookie-decline').addEventListener('click', () => {
 localStorage.setItem('cookie_consent', 'declined');
 banner.classList.add('hidden');
 setTimeout(() => banner.remove(), 500);
 });
}
function initStickyCTA() {
 const isHome = !window.location.pathname.includes('/pages/');
 const ctaHref = isHome ? 'pages/contact.html' : 'contact.html';
 const waUrl = "https://wa.me/917448340452?text=Hi%20Himanshu!%20I'd%20like%20a%20free%20digital%20marketing%20audit.";
 const bar = document.createElement('div');
 bar.className = 'sticky-mobile-cta';
 bar.innerHTML = `
 <a href="${ctaHref}" class="btn btn-primary">Free Audit →</a>
 <a href="${waUrl}" class="btn btn-outline" target="_blank" rel="noopener"><i class="ri-whatsapp-line"></i> WhatsApp</a>`;
 document.body.appendChild(bar);
}
window.addEventListener('load', () => {
 setTimeout(initCookieBanner, 1500);
 initStickyCTA();
});