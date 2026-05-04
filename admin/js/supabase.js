// ============================================================
//   HIM DIGI SOLUTIONS — Supabase Integration
//   
//   SETUP: Replace the two values below with yours from:
//   supabase.com → your project → Settings → API
// ============================================================

const SUPABASE_URL  = 'YOUR_SUPABASE_URL';   // e.g. https://xyzxyz.supabase.co
const SUPABASE_ANON = 'YOUR_SUPABASE_ANON_KEY'; // starts with eyJ...

// ── Supabase REST API wrapper ──
const SB = {

  // Generic fetch helper
  async _fetch(path, method = 'GET', body = null, extraHeaders = {}) {
    const res = await fetch(SUPABASE_URL + '/rest/v1/' + path, {
      method,
      headers: {
        'apikey': SUPABASE_ANON,
        'Authorization': 'Bearer ' + SUPABASE_ANON,
        'Content-Type': 'application/json',
        'Prefer': method === 'POST' ? 'return=representation' : '',
        ...extraHeaders
      },
      body: body ? JSON.stringify(body) : null
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || 'Supabase error ' + res.status);
    }
    return res.status === 204 ? null : res.json();
  },

  // ── LEADS ──
  leads: {
    async insert(lead) {
      return SB._fetch('leads', 'POST', lead);
    },
    async getAll() {
      return SB._fetch('leads?order=created_at.desc&select=*');
    },
    async updateStatus(id, status) {
      return SB._fetch(`leads?id=eq.${id}`, 'PATCH', { status }, { 'Prefer': 'return=representation' });
    },
    async delete(id) {
      return SB._fetch(`leads?id=eq.${id}`, 'DELETE');
    }
  },

  // ── BLOG POSTS ──
  blog: {
    async insert(post) {
      return SB._fetch('blog_posts', 'POST', post);
    },
    async getAll() {
      return SB._fetch('blog_posts?order=created_at.desc&select=*');
    },
    async getPublished() {
      return SB._fetch('blog_posts?published=eq.true&order=created_at.desc&select=*');
    },
    async getBySlug(slug) {
      const rows = await SB._fetch(`blog_posts?slug=eq.${encodeURIComponent(slug)}&select=*`);
      return rows && rows[0] ? rows[0] : null;
    },
    async update(id, updates) {
      return SB._fetch(`blog_posts?id=eq.${id}`, 'PATCH', updates, { 'Prefer': 'return=representation' });
    },
    async delete(id) {
      return SB._fetch(`blog_posts?id=eq.${id}`, 'DELETE');
    }
  }
};

// ── Check if Supabase is configured ──
function supabaseConfigured() {
  return SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_ANON !== 'YOUR_SUPABASE_ANON_KEY';
}
