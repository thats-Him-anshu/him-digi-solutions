function injectLocalBusinessSchema() {
 const schema = {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "@id": "https://himdigisolutions.ins.in/#business",
 "name": "HIM Digi Solutions",
 "alternateName": "HIM Digital Solutions",
 "description": "Digital marketing agency in Hosur, Tamil Nadu offering Google Ads, Meta Ads, Social Media Marketing, and Content Creation services.",
 "url": "https://himdigisolutions.ins.in",
 "logo": "https://himdigisolutions.ins.in/images/og-image.jpg",
 "image": "https://himdigisolutions.ins.in/images/himanshu.jpg",
 "telephone": "+917448340452",
 "email": "bothimanshu57@gmail.com",
 "address": {
 "@type": "PostalAddress",
 "addressLocality": "Hosur",
 "addressRegion": "Tamil Nadu",
 "postalCode": "635109",
 "addressCountry": "IN"
 },
 "geo": {
 "@type": "GeoCoordinates",
 "latitude": "12.7409",
 "longitude": "77.8253"
 },
 "openingHoursSpecification": {
 "@type": "OpeningHoursSpecification",
 "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
 "opens": "00:00",
 "closes": "23:59"
 },
 "sameAs": [
 "https://www.instagram.com/_.creatix._",
 "https://www.linkedin.com/in/himanshu-pathak-s/",
 "https://www.facebook.com/profile.php?id=61574700699127"
 ],
 "priceRange": "₹₹",
 "currenciesAccepted": "INR",
 "paymentAccepted": "Bank Transfer, UPI",
 "areaServed": ["Hosur", "Tamil Nadu", "Bangalore", "India"],
 "serviceType": ["Digital Marketing", "Google Ads", "Meta Ads", "Social Media Marketing", "Content Creation"],
 "founder": {
 "@type": "Person",
 "name": "Himanshu",
 "jobTitle": "Founder & Lead Strategist",
 "url": "https://himdigisolutions.ins.in/pages/about.html",
 "sameAs": "https://www.linkedin.com/in/himanshu-pathak-s/"
 }
 };
 _injectSchema(schema);
}
function injectServicesSchema() {
 const services = [
 {
 name: "Google Ads Management",
 description: "Targeted Google search and display campaigns for local businesses in Tamil Nadu and India.",
 url: "https://himdigisolutions.ins.in/pages/services.html"
 },
 {
 name: "Meta Ads (Facebook & Instagram)",
 description: "Facebook and Instagram advertising campaigns crafted with audience psychology and creative storytelling.",
 url: "https://himdigisolutions.ins.in/pages/services.html"
 },
 {
 name: "Social Media Marketing",
 description: "Full social media management including content calendar, posting, and community management.",
 url: "https://himdigisolutions.ins.in/pages/services.html"
 },
 {
 name: "Content Creation",
 description: "Short-form video, reels, graphics, and brand content creation rooted in filmmaking and storytelling.",
 url: "https://himdigisolutions.ins.in/pages/services.html"
 }
 ];
 const schema = {
 "@context": "https://schema.org",
 "@type": "ItemList",
 "name": "Digital Marketing Services by HIM Digi Solutions",
 "itemListElement": services.map((s, i) => ({
 "@type": "ListItem",
 "position": i + 1,
 "item": {
 "@type": "Service",
 "name": s.name,
 "description": s.description,
 "url": s.url,
 "provider": {
 "@type": "LocalBusiness",
 "name": "HIM Digi Solutions",
 "url": "https://himdigisolutions.ins.in"
 }
 }
 }))
 };
 _injectSchema(schema);
}
function injectPersonSchema() {
 const schema = {
 "@context": "https://schema.org",
 "@type": "Person",
 "name": "Himanshu",
 "jobTitle": "Founder & Lead Digital Marketing Strategist",
 "description": "Filmmaker-turned-digital-marketer helping local businesses grow in Hosur, Tamil Nadu through Google Ads, Meta Ads, and content strategy.",
 "url": "https://himdigisolutions.ins.in/pages/about.html",
 "image": "https://himdigisolutions.ins.in/images/himanshu.jpg",
 "email": "bothimanshu57@gmail.com",
 "telephone": "+917448340452",
 "address": {
 "@type": "PostalAddress",
 "addressLocality": "Hosur",
 "addressRegion": "Tamil Nadu",
 "addressCountry": "IN"
 },
 "worksFor": {
 "@type": "LocalBusiness",
 "name": "HIM Digi Solutions",
 "url": "https://himdigisolutions.ins.in"
 },
 "sameAs": [
 "https://www.linkedin.com/in/himanshu-pathak-s/",
 "https://www.instagram.com/_.creatix._",
 "https://www.facebook.com/profile.php?id=61574700699127"
 ]
 };
 _injectSchema(schema);
}
function injectFAQSchema(faqs) {
 const schema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map(faq => ({
 "@type": "Question",
 "name": faq.q,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": faq.a
 }
 }))
 };
 _injectSchema(schema);
}
function injectBreadcrumbSchema(crumbs) {
 const schema = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": crumbs.map((c, i) => ({
 "@type": "ListItem",
 "position": i + 1,
 "name": c.name,
 "item": "https://himdigisolutions.ins.in" + c.path
 }))
 };
 _injectSchema(schema);
}
function injectArticleSchema(article) {
 const schema = {
 "@context": "https://schema.org",
 "@type": "BlogPosting",
 "headline": article.title,
 "description": article.description,
 "image": article.image,
 "author": {
 "@type": "Person",
 "name": "Himanshu",
 "url": "https://himdigisolutions.ins.in/pages/about.html"
 },
 "publisher": {
 "@type": "Organization",
 "name": "HIM Digi Solutions",
 "logo": { "@type": "ImageObject", "url": "https://himdigisolutions.ins.in/images/og-image.jpg" }
 },
 "datePublished": article.date,
 "dateModified": article.date,
 "mainEntityOfPage": {
 "@type": "WebPage",
 "@id": article.url
 }
 };
 _injectSchema(schema);
}
function _injectSchema(obj) {
 const script = document.createElement('script');
 script.type = 'application/ld+json';
 script.textContent = JSON.stringify(obj, null, 2);
 document.head.appendChild(script);
}