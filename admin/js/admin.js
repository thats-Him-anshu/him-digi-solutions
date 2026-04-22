// ============================================
//   HIM DIGI SOLUTIONS — Admin Core
//   Auth + Data Store + Utilities
// ============================================

// ── CREDENTIALS (Change these!) ──
const ADMIN_USERS = [
  { id:1, email:'himanshu@himdigisolutions.in', password:'HimDigi@2026', name:'Himanshu', role:'admin', avatar:'H' },
  { id:2, email:'editor@himdigisolutions.in',   password:'Editor@2026',  name:'Editor',   role:'editor', avatar:'E' },
  { id:3, email:'staff@himdigisolutions.in',     password:'Staff@2026',   name:'Staff',    role:'staff', avatar:'S' },
];

// ── DATA STORE (localStorage) ──
const DB = {
  get: (key) => { try { return JSON.parse(localStorage.getItem('hds_'+key)) || null; } catch { return null; } },
  set: (key, val) => localStorage.setItem('hds_'+key, JSON.stringify(val)),
  push: (key, item) => {
    const arr = DB.get(key) || [];
    item.id = item.id || Date.now();
    arr.unshift(item);
    DB.set(key, arr);
    return item;
  },
  update: (key, id, updates) => {
    const arr = DB.get(key) || [];
    const idx = arr.findIndex(i => i.id == id);
    if (idx > -1) { arr[idx] = {...arr[idx], ...updates}; DB.set(key, arr); }
  },
  delete: (key, id) => {
    const arr = (DB.get(key) || []).filter(i => i.id != id);
    DB.set(key, arr);
  }
};

// ── SEED DEMO DATA ──
function seedData() {
  if (DB.get('seeded')) return;

  DB.set('leads', [
    { id:1001, name:'Ravi Kumar', phone:'+91 98765 43210', email:'ravi@example.com', business:'Ravi Restaurant, Hosur', service:'meta-ads', message:'Want to increase footfall for my restaurant.', status:'new', date:'2026-04-15', source:'contact_form' },
    { id:1002, name:'Priya Sharma', phone:'+91 87654 32109', email:'priya@example.com', business:'Priya Boutique', service:'social-media', message:'Need help with Instagram growth.', status:'contacted', date:'2026-04-14', source:'whatsapp' },
    { id:1003, name:'Arjun Nair', phone:'+91 76543 21098', email:'arjun@example.com', business:'Arjun Coaching Centre', service:'google-ads', message:'Want students through Google search.', status:'converted', date:'2026-04-12', source:'contact_form' },
    { id:1004, name:'Meena Devi', phone:'+91 65432 10987', email:'meena@example.com', business:'Meena Jewels', service:'content-creation', message:'Need product photography and reels.', status:'new', date:'2026-04-10', source:'instagram' },
    { id:1005, name:'Suresh Babu', phone:'+91 54321 09876', email:'suresh@example.com', business:'Suresh Auto Service', service:'all', message:'Need complete digital marketing.', status:'contacted', date:'2026-04-08', source:'referral' },
  ]);

  DB.set('activity', [
    { id:1, type:'lead', icon:'ri-user-add-line', color:'blue', text:'New lead from Ravi Kumar (Meta Ads)', time:'2 hours ago' },
    { id:2, type:'login', icon:'ri-login-box-line', color:'green', text:'Admin logged in', time:'3 hours ago' },
    { id:3, type:'lead', icon:'ri-user-add-line', color:'blue', text:'New lead from Priya Sharma (Social Media)', time:'Yesterday' },
    { id:4, type:'update', icon:'ri-edit-line', color:'orange', text:'Settings updated by Admin', time:'2 days ago' },
    { id:5, type:'lead', icon:'ri-checkbox-circle-line', color:'green', text:'Lead Arjun Nair marked as Converted', time:'3 days ago' },
  ]);

  DB.set('settings', {
    site_name: 'HIM Digi Solutions',
    tagline: 'We grow local businesses with quality content & smart ads',
    email: 'bothimanshu57@gmail.com',
    phone: '+91 74483 40452',
    whatsapp: '+91 74483 40452',
    address: 'Hosur, Tamil Nadu, India',
    working_hours: '24/7 Available',
    ga4_id: 'G-JNYHG2BRCN',
    gads_id: 'AW-18051983594',
    meta_pixel: '1000689375717976',
    clarity_id: 'w8u5elv9se',
    instagram: 'https://www.instagram.com/_.creatix._',
    linkedin: 'https://www.linkedin.com/in/himanshu-pathak-s/',
    facebook: 'https://www.facebook.com/profile.php?id=61574700699127',
    meta_title_home: 'Digital Marketing Agency in Hosur | HIM Digi Solutions',
    meta_desc_home: 'HIM Digi Solutions helps local businesses grow through Google Ads, Meta Ads, Social Media Marketing, and Content Creation.',
  });

  DB.set('seeded', true);
}

// ── AUTH ──
const Auth = {
  login(email, password) {
    const user = ADMIN_USERS.find(u => u.email===email && u.password===password);
    if (!user) return null;
    const session = { ...user, loginTime: Date.now() };
    sessionStorage.setItem('hds_admin_session', JSON.stringify(session));
    DB.push('activity', { type:'login', icon:'ri-login-box-line', color:'green', text:`${user.name} logged in`, time:'Just now' });
    return session;
  },
  logout() {
    sessionStorage.removeItem('hds_admin_session');
    window.location.href = 'login.html';
  },
  current() {
    try { return JSON.parse(sessionStorage.getItem('hds_admin_session')); } catch { return null; }
  },
  require() {
    const user = Auth.current();
    if (!user) { window.location.href = 'login.html'; return null; }
    return user;
  },
  can(user, action) {
    const perms = {
      admin:  ['all'],
      editor: ['content', 'leads', 'media'],
      staff:  ['leads'],
    };
    const p = perms[user.role] || [];
    return p.includes('all') || p.includes(action);
  }
};

// ── UTILITIES ──
function formatDate(d) {
  return new Date(d).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
}
function timeAgo(ts) {
  const diff = Date.now() - ts;
  if (diff < 60000) return 'Just now';
  if (diff < 3600000) return Math.floor(diff/60000) + 'm ago';
  if (diff < 86400000) return Math.floor(diff/3600000) + 'h ago';
  return Math.floor(diff/86400000) + 'd ago';
}
function toast(msg, type='success') {
  const t = document.createElement('div');
  t.className = `alert alert-${type}`;
  t.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;min-width:280px;animation:modalIn 0.25s ease';
  t.innerHTML = `<i class="ri-${type==='success'?'checkbox-circle':'error-warning'}-line"></i> ${msg}`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}
function exportCSV(data, filename) {
  if (!data.length) return toast('No data to export', 'error');
  const headers = Object.keys(data[0]);
  const rows = data.map(r => headers.map(h => `"${(r[h]||'').toString().replace(/"/g,'""')}"`).join(','));
  const csv = [headers.join(','), ...rows].join('\n');
  const a = document.createElement('a');
  a.href = 'data:text/csv,' + encodeURIComponent(csv);
  a.download = filename;
  a.click();
  toast(`Exported ${data.length} rows`);
}
function confirm_delete(msg, cb) {
  if (window.confirm(msg || 'Are you sure you want to delete this?')) cb();
}

// ── SIDEBAR INJECT ──
function buildSidebar(user, activePage) {
  const isAdmin = user.role === 'admin';
  const isEditor = ['admin','editor'].includes(user.role);
  const leadCount = (DB.get('leads')||[]).filter(l=>l.status==='new').length;

  document.getElementById('sidebar-user-name').textContent = user.name;
  document.getElementById('sidebar-user-role').textContent = user.role.charAt(0).toUpperCase()+user.role.slice(1);
  document.getElementById('sidebar-avatar').textContent = user.avatar;

  const navItems = [
    { page:'dashboard', icon:'ri-dashboard-line', label:'Dashboard', section:'Main' },
    { page:'leads', icon:'ri-user-received-line', label:'Leads', badge:leadCount, section:null },
    { page:'content', icon:'ri-file-text-line', label:'Content', section:null, need:'editor' },
    { page:'media', icon:'ri-image-line', label:'Media', section:null, need:'editor' },
    { page:'blog', icon:'ri-article-line', label:'Blog Posts', section:null, need:'editor' },
    { page:'users', icon:'ri-team-line', label:'Users', section:'Admin', need:'admin' },
    { page:'analytics', icon:'ri-line-chart-line', label:'Analytics', section:null },
    { page:'seo', icon:'ri-search-eye-line', label:'SEO Controls', section:null, need:'admin' },
    { page:'settings', icon:'ri-settings-3-line', label:'Settings', section:null, need:'admin' },
    { page:'logs', icon:'ri-history-line', label:'Activity Logs', section:null, need:'admin' },
  ];

  let html = '';
  let lastSection = null;
  navItems.forEach(item => {
    if (item.need === 'admin' && !isAdmin) return;
    if (item.need === 'editor' && !isEditor) return;
    if (item.section && item.section !== lastSection) {
      html += `<div class="nav-section-label">${item.section}</div>`;
      lastSection = item.section;
    }
    const badge = item.badge ? `<span class="nav-badge">${item.badge}</span>` : '';
    html += `<div class="nav-item ${activePage===item.page?'active':''}" onclick="window.location.href='${item.page}.html'">
      <i class="${item.icon}"></i>${item.label}${badge}
    </div>`;
  });
  html += `<div class="nav-item" onclick="Auth.logout()"><i class="ri-logout-box-line"></i>Logout</div>`;
  document.getElementById('sidebar-nav').innerHTML = html;
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  seedData();

  // Mobile sidebar
  const hamburger = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('admin-sidebar');
  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => sidebar.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) sidebar.classList.remove('open');
    });
  }
});
