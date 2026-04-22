const TRACKING = {
 GTM_ID: 'GTM-XXXXXXX', 
 META_PIXEL_ID: '1000689375717976', 
 GA4_MEASUREMENT_ID: 'G-JNYHG2BRCN', 
 GADS_ID: 'AW-XXXXXXXXX', 
 GADS_CONVERSION: 'AW-XXXXXXXXX/XXXXX', 
};
(function(w,d,s,l,i){
 w[l]=w[l]||[];
 w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
 var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),
 dl=l!='dataLayer'?'&l='+l:'';
 j.async=true;
 j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
 f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', TRACKING.GTM_ID);
!function(f,b,e,v,n,t,s){
 if(f.fbq)return;
 n=f.fbq=function(){
 n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
 };
 if(!f._fbq)f._fbq=n;
 n.push=n;n.loaded=!0;n.version='2.0';
 n.queue=[];
 t=b.createElement(e);t.async=!0;
 t.src=v;
 s=b.getElementsByTagName(e)[0];
 s.parentNode.insertBefore(t,s)
}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', TRACKING.META_PIXEL_ID);
fbq('track', 'PageView');
var gtagScript = document.createElement('script');
gtagScript.async = true;
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + TRACKING.GADS_ID;
document.head.appendChild(gtagScript);
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', TRACKING.GA4_MEASUREMENT_ID);
gtag('config', TRACKING.GADS_ID);
function injectGTMNoscript() {
 var ns = document.createElement('noscript');
 var iframe = document.createElement('iframe');
 iframe.src = 'https://www.googletagmanager.com/ns.html?id=' + TRACKING.GTM_ID;
 iframe.height = '0';
 iframe.width = '0';
 iframe.style.cssText = 'display:none;visibility:hidden';
 ns.appendChild(iframe);
 document.body.insertBefore(ns, document.body.firstChild);
}
function trackFormSubmit(formData) {
 gtag('event', 'generate_lead', {
 event_category: 'Contact Form',
 event_label: formData.service || 'General Enquiry',
 value: 1
 });
 gtag('event', 'conversion', {
 send_to: TRACKING.GADS_CONVERSION,
 event_callback: function() {}
 });
 fbq('track', 'Lead', {
 content_name: 'Free Audit Form',
 content_category: formData.service || 'General',
 status: 'submitted'
 });
 dataLayer.push({
 event: 'form_submit',
 form_name: 'contact_form',
 service_interest: formData.service || 'unknown'
 });
 console.log('[Tracking] Lead event fired');
}
function trackWhatsAppClick(source) {
 gtag('event', 'whatsapp_click', {
 event_category: 'Engagement',
 event_label: source || 'unknown'
 });
 fbq('track', 'Contact', {
 content_name: 'WhatsApp Click',
 content_category: source || 'button'
 });
 dataLayer.push({
 event: 'whatsapp_click',
 click_source: source || 'unknown'
 });
}
function trackCTAClick(buttonName, destination) {
 gtag('event', 'cta_click', {
 event_category: 'CTA',
 event_label: buttonName,
 value: 1
 });
 fbq('track', 'InitiateCheckout', {
 content_name: buttonName,
 content_category: 'CTA Button'
 });
 dataLayer.push({
 event: 'cta_click',
 button_name: buttonName,
 destination: destination
 });
}
function trackServiceView(serviceName) {
 gtag('event', 'view_item', {
 event_category: 'Services',
 event_label: serviceName
 });
 fbq('track', 'ViewContent', {
 content_name: serviceName,
 content_type: 'service'
 });
}
function trackContactClick(type, value) {
 gtag('event', 'click', {
 event_category: 'Contact',
 event_label: type + ': ' + value
 });
 fbq('track', 'Contact', {
 content_name: type
 });
}
(function() {
 var milestones = [25, 50, 75, 100];
 var fired = {};
 window.addEventListener('scroll', function() {
 var scrollTop = window.scrollY || document.documentElement.scrollTop;
 var docHeight = document.documentElement.scrollHeight - window.innerHeight;
 var scrollPct = Math.round((scrollTop / docHeight) * 100);
 milestones.forEach(function(m) {
 if (scrollPct >= m && !fired[m]) {
 fired[m] = true;
 gtag('event', 'scroll_depth', {
 event_category: 'Scroll',
 event_label: m + '%',
 non_interaction: true
 });
 dataLayer.push({ event: 'scroll_depth', depth: m });
 }
 });
 }, { passive: true });
})();
(function() {
 var milestones = [30, 60, 120];
 milestones.forEach(function(seconds) {
 setTimeout(function() {
 gtag('event', 'time_on_page', {
 event_category: 'Engagement',
 event_label: seconds + 's',
 non_interaction: true
 });
 }, seconds * 1000);
 });
})();