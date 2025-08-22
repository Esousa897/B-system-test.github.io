document.addEventListener('DOMContentLoaded', function(){
  // Search overlay open/close
  function openSearch(){ document.getElementById('search-overlay').classList.add('visible'); document.getElementById('search-input')?.focus(); }
  function closeSearch(){ document.getElementById('search-overlay').classList.remove('visible'); }

  document.querySelectorAll('[data-open-search]').forEach(btn => btn.addEventListener('click', (e)=>{ e.preventDefault(); openSearch(); }));
  document.querySelectorAll('[data-close-search]').forEach(btn => btn.addEventListener('click', (e)=>{ e.preventDefault(); closeSearch(); }));
  document.getElementById('search-overlay')?.addEventListener('click', (e)=>{ if(e.target.id==='search-overlay') closeSearch(); });

  // simple add-to-cart simulation (updates .cart-count text)
  document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
    btn.addEventListener('click', function(e){
      e.preventDefault();
      const count = document.querySelector('.cart-count');
      if(count){
        const n = parseInt(count.textContent||'0') + 1;
        count.textContent = n;
      }
      btn.textContent = 'Added ✓';
      btn.disabled = true;
      setTimeout(()=>{ btn.textContent='Add to cart'; btn.disabled=false; }, 1600);
    });
  });
});
