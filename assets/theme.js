(() => {
  const qs  = (s, r=document) => r.querySelector(s);
  const qsa = (s, r=document) => [...r.querySelectorAll(s)];
  // Nav toggle
  const navToggle = qs('.nav-toggle'); const nav = qs('#site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = nav.getAttribute('aria-expanded') === 'true';
      nav.setAttribute('aria-expanded', String(!expanded));
      navToggle.setAttribute('aria-expanded', String(!expanded));
    });
  }
  // Drawers
  const open = el => el && (el.hidden = false);
  const close = el => el && (el.hidden = true);
  const cartDrawer = qs('[data-cart-drawer]'); const searchDrawer = qs('[data-search-drawer]');
  qsa('[data-open-cart]').forEach(b => b.addEventListener('click', e => { if (cartDrawer){ e.preventDefault(); open(cartDrawer);} }));
  qsa('[data-open-search]').forEach(b => b.addEventListener('click', e => { if (searchDrawer){ e.preventDefault(); open(searchDrawer);} }));
  qsa('[data-drawer-close]').forEach(b => b.addEventListener('click', () => close(b.closest('.drawer'))));
  qsa('[data-drawer-overlay]').forEach(ov => ov.addEventListener('click', () => close(ov.closest('.drawer'))));
  // Cart basics
  const cartItems = qs('[data-cart-items]'); const cartEmpty = qs('[data-cart-empty]'); const cartTotal = qs('[data-cart-total]'); const cartCount = qs('[data-cart-count]');
  async function refreshCart(){
    try{
      const res = await fetch('/cart.js'); const cart = await res.json();
      if (cartItems) cartItems.innerHTML = '';
      if (cart.items?.length){
        cartEmpty && (cartEmpty.hidden = true);
        cart.items.forEach(it => {
          const li = document.createElement('li');
          li.innerHTML = `<div class="cart-line"><img src="${it.image}" alt="" width="64" height="80" loading="lazy"/><div class="grow"><div>${it.product_title}</div><small>${it.variant_title || ''}</small></div><div><strong>${(it.final_line_price/100).toFixed(2)} €</strong></div></div>`;
          cartItems && cartItems.appendChild(li);
        });
      } else { cartEmpty && (cartEmpty.hidden = false); }
      cartTotal && (cartTotal.textContent = (cart.total_price/100).toFixed(2) + ' €');
      cartCount && (cartCount.textContent = cart.item_count);
    }catch(e){}
  }
  refreshCart();
  document.addEventListener('submit', async e => {
    const f = e.target; if (!(f instanceof HTMLFormElement)) return;
    if (f.action.includes('/cart/add')){ e.preventDefault(); const res = await fetch('/cart/add.js', { method:'POST', body:new FormData(f) }); if (res.ok){ await refreshCart(); open(cartDrawer);} else alert('Kan niet toevoegen aan winkelwagen.'); }
  });
  // Cookie consent
  (function(){ const box = qs('[data-cookie-consent]'); if (!box) return;
    const KEY='boldyase_cookie_ok'; if (!localStorage.getItem(KEY)) box.hidden = False = false;
    box.querySelector('[data-cookie-accept]')?.addEventListener('click', () => { localStorage.setItem(KEY,'1'); box.remove(); });
  })();
})();
