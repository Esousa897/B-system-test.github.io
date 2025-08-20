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
/**
 * Main Theme JavaScript
 * Geavanceerde e-commerce functionaliteiten
 */

class ThemeManager {
  constructor() {
    this.init();
  }

  init() {
    // Initialize all components
    this.header = new HeaderManager();
    this.cart = new CartManager();
    this.search = new SearchManager();
    this.productGrid = new ProductGridManager();
    this.wishlist = new WishlistManager();
    this.newsletter = new NewsletterManager();
    this.quickView = new QuickViewManager();
    this.hero = new HeroManager();
    
    // Global event listeners
    this.bindGlobalEvents();
    
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
      });
    }
  }

  bindGlobalEvents() {
    // Back to top button
    const backToTop = document.querySelector('[data-back-to-top]');
    if (backToTop) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      });

      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Handle form submissions with loading states
    document.addEventListener('submit', (e) => {
      const form = e.target;
      if (form.hasAttribute('data-ajax-form')) {
        e.preventDefault();
        this.handleAjaxForm(form);
      }
    });

    // Lazy load images
    this.initLazyLoading();
  }

  handleAjaxForm(form) {
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Laden...';

    const formData = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Handle success/error
      this.showNotification(data.message, data.success ? 'success' : 'error');
    })
    .catch(error => {
      this.showNotification('Er is een fout opgetreden', 'error');
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    });
  }

  initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
          <svg width="16" height="16" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2"/>
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2"/>
          </svg>
        </button>
      </div>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 5000);
  }
}

// Header Manager
class HeaderManager {
  constructor() {
    this.header = document.querySelector('[data-header]');
    this.navToggle = document.querySelector('[data-nav-toggle]');
    this.mobileNav = document.querySelector('[data-mobile-nav]');
    this.navOverlay = document.querySelector('[data-nav-overlay]');
    
    if (this.header) {
      this.init();
    }
  }

  init() {
    this.bindEvents();
    this.handleStickyHeader();
    this.handleDropdowns();
  }

  bindEvents() {
    // Mobile menu toggle
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMobileNav());
    }

    if (this.navOverlay) {
      this.navOverlay.addEventListener('click', () => this.closeMobileNav());
    }

    // Close mobile nav on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileNav?.classList.contains('open')) {
        this.closeMobileNav();
      }
    });

    // Mobile submenu toggles
    document.querySelectorAll('[data-mobile-submenu-toggle]').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const submenu = toggle.nextElementSibling;
        const isOpen = submenu.classList.contains('open');
        
        // Close all submenus
        document.querySelectorAll('.mobile-submenu.open').forEach(menu => {
          menu.classList.remove('open');
        });
        
        if (!isOpen) {
          submenu.classList.add('open');
        }
      });
    });
  }

  toggleMobileNav() {
    const isOpen = this.mobileNav.classList.contains('open');
    
    if (isOpen) {
      this.closeMobileNav();
    } else {
      this.openMobileNav();
    }
  }

  openMobileNav() {
    this.mobileNav.classList.add('open');
    this.navToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  }

  closeMobileNav() {
    this.mobileNav.classList.remove('open');
    this.navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  handleStickyHeader() {
    if (!this.header.hasAttribute('data-sticky')) return;

    let lastScrollTop = 0;
    const headerHeight = this.header.offsetHeight;

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > headerHeight) {
        this.header.classList.add('sticky');
        
        // Hide/show header based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > headerHeight * 2) {
          this.header.classList.add('header-hidden');
        } else {
          this.header.classList.remove('header-hidden');
        }
      } else {
        this.header.classList.remove('sticky', 'header-hidden');
      }
      
      lastScrollTop = scrollTop;
    });
  }

  handleDropdowns() {
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
    
    dropdownItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      const dropdown = item.querySelector('.dropdown-menu');
      
      let hoverTimeout;
      
      item.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        dropdown.classList.add('open');
      });
      
      item.addEventListener('mouseleave', () => {
        hoverTimeout = setTimeout(() => {
          dropdown.classList.remove('open');
        }, 150);
      });
    });
  }
}

// Cart Manager
class CartManager {
  constructor() {
    this.drawer = document.querySelector('[data-cart-drawer]');
    this.toggles = document.querySelectorAll('[data-cart-toggle]');
    this.overlay = document.querySelector('[data-drawer-overlay]');
    this.closeBtn = document.querySelector('[data-drawer-close]');
    
    if (this.drawer) {
      this.init();
    }
  }

  init() {
    this.bindEvents();
    this.updateCartCount();
  }

  bindEvents() {
    // Cart toggle buttons
    this.toggles.forEach(toggle => {
      toggle.addEventListener('click', () => this.openDrawer());
    });

    // Close buttons
    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.closeDrawer());
    }
    
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeDrawer());
    }

    // Quantity updates
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-quantity-plus]')) {
        this.updateQuantity(e.target, 1);
      } else if (e.target.matches('[data-quantity-minus]')) {
        this.updateQuantity(e.target, -1);
      } else if (e.target.matches('[data-remove-item]')) {
        this.removeItem(e.target);
      }
    });

    // Quick add forms
    document.addEventListener('submit', (e) => {
      if (e.target.matches('[data-quick-add-form]')) {
        e.preventDefault();
        this.addToCart(e.target);
      }
    });

    // Checkout button
    const checkoutBtn = document.querySelector('[data-checkout-btn]');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        window.location.href = '/checkout';
      });
    }
  }

  async addToCart(form) {
    const formData = new FormData(form);
    const submitBtn = form.querySelector('[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Show loading state
    btnText.classList.add('hidden');
    btnLoading.classList.remove('hidden');
    submitBtn.disabled = true;

    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const item = await response.json();
        await this.refreshCart();
        this.openDrawer();
        
        // Show success notification
        window.theme.showNotification(`${item.product_title} toegevoegd aan winkelwagen`, 'success');
      } else {
        throw new Error('Product kon niet worden toegevoegd');
      }
    } catch (error) {
      window.theme.showNotification(error.message, 'error');
    } finally {
      // Reset button state
      btnText.classList.remove('hidden');
      btnLoading.classList.add('hidden');
      submitBtn.disabled = false;
    }
  }

  async updateQuantity(button, change) {
    const item = button.closest('[data-cart-item]');
    const variantId = item.dataset.variantId;
    const currentQty = parseInt(item.querySelector('[data-quantity-input]').value);
    const newQty = Math.max(0, currentQty + change);

    try {
      await fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: variantId,
          quantity: newQty
        })
      });

      await this.refreshCart();
    } catch (error) {
      window.theme.showNotification('Kon winkelwagen niet bijwerken', 'error');
    }
  }

  async removeItem(button) {
    const item = button.closest('[data-cart-item]');
    const variantId = item.dataset.variantId;

    try {
      await fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: variantId,
          quantity: 0
        })
      });

      await this.refreshCart();
    } catch (error) {
      window.theme.showNotification('Kon item niet verwijderen', 'error');
    }
  }

  async refreshCart() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      
      this.updateCartCount(cart.item_count);
      this.updateCartDrawer(cart);
    } catch (error) {
      console.error('Failed to refresh cart:', error);
    }
  }

  updateCartCount(count = null) {
    if (count === null) {
      fetch('/cart.js')
        .then(response => response.json())
        .then(cart => {
          count = cart.item_count;
          this.setCartCount(count);
        });
    } else {
      this.setCartCount(count);
    }
  }

  setCartCount(count) {
    document.querySelectorAll('[data-cart-count]').forEach(element => {
      element.textContent = count;
      element.style.display = count > 0 ? 'block' : 'none';
    });
  }

  updateCartDrawer(cart) {
    // Update cart items
    const itemsList = document.querySelector('[data-cart-items-list]');
    const cartEmpty = document.querySelector('[data-cart-empty]');
    const cartItems = document.querySelector('[data-cart-items]');
    const cartFooter = document.querySelector('[data-cart-footer]');

    if (cart.item_count === 0) {
      cartEmpty?.classList.remove('hidden');
      cartItems?.classList.add('hidden');
      cartFooter?.classList.add('hidden');
    } else {
      cartEmpty?.classList.add('hidden');
      cartItems?.classList.remove('hidden');
      cartFooter?.classList.remove('hidden');
      
      // Update subtotal
      const subtotal = document.querySelector('[data-cart-subtotal]');
      if (subtotal) {
        subtotal.textContent = this.formatMoney(cart.total_price);
      }
      
      // Update total
      const total = document.querySelector('[data-cart-total]');
      if (total) {
        total.textContent = this.formatMoney(cart.total_price);
      }
    }
  }

  openDrawer() {
    this.drawer.classList.remove('hidden');
    this.drawer.classList.add('open');
    document.body.classList.add('drawer-open');
  }

  closeDrawer() {
    this.drawer.classList.remove('open');
    document.body.classList.remove('drawer-open');
    
    setTimeout(() => {
      this.drawer.classList.add('hidden');
    }, 300);
  }

  formatMoney(cents) {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR'
    }).format(cents / 100);
  }
}

// Search Manager
class SearchManager {
  constructor() {
    this.drawer = document.querySelector('[data-search-drawer]');
    this.toggles = document.querySelectorAll('[data-search-toggle]');
    this.input = document.querySelector('[data-search-input]');
    this.form = document.querySelector('[data-search-form]');
    this.results = document.querySelector('[data-search-results]');
    this.loading = document.querySelector('[data-search-loading]');
    this.popular = document.querySelector('[data-search-popular]');
    
    this.searchTimeout = null;
    this.currentQuery = '';
    
    if (this.drawer) {
      this.init();
    }
  }

  init() {
    this.bindEvents();
    this.loadRecentSearches();
  }

  bindEvents() {
    // Search toggle buttons
    this.toggles.forEach(toggle => {
      toggle.addEventListener('click', () => this.openDrawer());
    });

    // Close drawer
    const overlay = this.drawer.querySelector('[data-drawer-overlay]');
    const closeBtn = this.drawer.querySelector('[data-drawer-close]');
    
    overlay?.addEventListener('click', () => this.closeDrawer());
    closeBtn?.addEventListener('click', () => this.closeDrawer());

    // Search input
    if (this.input) {
      this.input.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });

      this.input.addEventListener('focus', () => {
        if (this.input.value.length > 0) {
          this.showResults();
        }
      });
    }

    // Popular searches
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-popular-search]')) {
        const query = e.target.dataset.popularSearch;
        this.input.value = query;
        this.handleSearch(query);
      }
    });

    // Clear search
    const clearBtn = document.querySelector('[data-search-clear]');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.input.value = '';
        this.clearResults();
        this.input.focus();
      });
    }
  }

  handleSearch(query) {
    const trimmedQuery = query.trim();
    
    // Show/hide clear button
    const clearBtn = document.querySelector('[data-search-clear]');
    if (clearBtn) {
      clearBtn.classList.toggle('hidden', trimmedQuery.length === 0);
    }

    if (trimmedQuery.length === 0) {
      this.clearResults();
      return;
    }

    if (trimmedQuery === this.currentQuery) return;
    
    this.currentQuery = trimmedQuery;
    
    // Clear previous timeout
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    // Debounce search
    this.searchTimeout = setTimeout(() => {
      this.performSearch(trimmedQuery);
    }, 300);
  }

  async performSearch(query) {
    this.showLoading();
    
    try {
      const response = await fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product,collection,page&resources[limit]=6`);
      const data = await response.json();
      
      this.displayResults(data.resources, query);
      this.saveRecentSearch(query);
    } catch (error) {
      console.error('Search failed:', error);
      this.showNoResults();
    }
  }

  displayResults(resources, query) {
    this.hideLoading();
    this.showResults();

    const productResults = document.querySelector('[data-product-results]');
    const collectionResults = document.querySelector('[data-collection-results]');
    const pageResults = document.querySelector('[data-page-results]');
    const viewAllLink = document.querySelector('[data-view-all-link]');

    // Clear previous results
    [productResults, collectionResults, pageResults].forEach(container => {
      if (container) container.innerHTML = '';
    });

    // Display products
    if (resources.results.products?.length > 0) {
      resources.results.products.forEach(product => {
        if (productResults) {
          productResults.appendChild(this.createProductResult(product));
        }
      });
    }

    // Display collections
    if (resources.results.collections?.length > 0) {
      resources.results.collections.forEach(collection => {
        if (collectionResults) {
          collectionResults.appendChild(this.createCollectionResult(collection));
        }
      });
    }

    // Display pages
    if (resources.results.pages?.length > 0) {
      resources.results.pages.forEach(page => {
        if (pageResults) {
          pageResults.appendChild(this.createPageResult(page));
        }
      });
    }

    // Update view all link
    if (viewAllLink) {
      viewAllLink.href = `/search?q=${encodeURIComponent(query)}`;
    }
  }

  createProductResult(product) {
    const template = document.getElementById('search-product-template');
    const clone = template.content.cloneNode(true);
    
    const link = clone.querySelector('.result-link');
    const image = clone.querySelector('img');
    const title = clone.querySelector('.result-title');
    const price = clone.querySelector('.result-price');
    
    link.href = product.url;
    image.src = product.featured_image;
    image.alt = product.title;
    title.textContent = product.title;
    price.textContent = this.formatMoney(product.price);
    
    return clone;
  }

  createCollectionResult(collection) {
    const template = document.getElementById('search-collection-template');
    const clone = template.content.cloneNode(true);
    
    const link = clone.querySelector('.result-link');
    const title = clone.querySelector('.result-title');
    const count = clone.querySelector('.result-count');
    
    link.href = collection.url;
    title.textContent = collection.title;
    count.textContent = `${collection.products_count} producten`;
    
    return clone;
  }

  createPageResult(page) {
    const div = document.createElement('div');
    div.className = 'search-result-item page-result';
    div.innerHTML = `
      <a href="${page.url}" class="result-link">
        <div class="result-content">
          <h5 class="result-title">${page.title}</h5>
        </div>
      </a>
    `;
    return div;
  }

  showLoading() {
    this.loading?.classList.remove('hidden');
    this.results?.classList.add('hidden');
    this.popular?.classList.add('hidden');
  }

  hideLoading() {
    this.loading?.classList.add('hidden');
  }

  showResults() {
    this.results?.classList.remove('hidden');
    this.popular?.classList.add('hidden');
  }

  showNoResults() {
    this.hideLoading();
    const noResults = document.querySelector('[data-search-no-results]');
    noResults?.classList.remove('hidden');
    this.results?.classList.add('hidden');
  }

  clearResults() {
    this.results?.classList.add('hidden');
    this.popular?.classList.remove('hidden');
    const noResults = document.querySelector('[data-search-no-results]');
    noResults?.classList.add('hidden');
  }

  saveRecentSearch(query) {
    let recent = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    recent = recent.filter(item => item !== query);
    recent.unshift(query);
    recent = recent.slice(0, 5);
    localStorage.setItem('recentSearches', JSON.stringify(recent));
  }

  loadRecentSearches() {
    const recent = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    const recentContainer = document.querySelector('[data-recent-searches]');
    const recentList = document.querySelector('[data-recent-list]');
    
    if (recent.length > 0 && recentList) {
      recentList.innerHTML = recent.map(query => 
        `<li><button data-popular-search="${query}">${query}</button></li>`
      ).join('');
      recentContainer?.classList.remove('hidden');
    }
  }

  openDrawer() {
    this.drawer.classList.remove('hidden');
    this.drawer.classList.add('open');
    document.body.classList.add('drawer-open');
    
    setTimeout(() => {
      this.input?.focus();
    }, 100);
  }

  closeDrawer() {
    this.drawer.classList.remove('open');
    document.body.classList.remove('drawer-open');
    
    setTimeout(() => {
      this.drawer.classList.add('hidden');
    }, 300);
  }

  formatMoney(cents) {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR'
    }).format(cents / 100);
  }
}

// Hero Manager
class HeroManager {
  constructor() {
    this.hero = document.querySelector('[data-hero]');
    
    if (this.hero) {
      this.init();
    }
  }

  init() {
    this.initSlider();
    this.initParallax();
    this.initScrollIndicator();
  }

  initSlider() {
    const slider = this.hero.querySelector('[data-hero-slider]');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    const indicators = slider.querySelectorAll('.hero-indicator');
    const prevBtn = slider.querySelector('[data-hero-prev]');
    const nextBtn = slider.querySelector('[data-hero-next]');
    
    let currentSlide = 0;
    let autoplayInterval;
    
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
      
      currentSlide = index;
    };

    const nextSlide = () => {
      const next = (currentSlide + 1) % slides.length;
      showSlide(next);
    };

    const prevSlide = () => {
      const prev = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(prev);
    };

    // Event listeners
    nextBtn?.addEventListener('click', nextSlide);
    prevBtn?.addEventListener('click', prevSlide);
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => showSlide(index));
    });

    // Autoplay
    if (this.hero.dataset.autoplay === 'true') {
      const startAutoplay = () => {
        autoplayInterval = setInterval(nextSlide, 5000);
      };

      const stopAutoplay = () => {
        clearInterval(autoplayInterval);
      };

      startAutoplay();
      
      slider.addEventListener('mouseenter', stopAutoplay);
      slider.addEventListener('mouseleave', startAutoplay);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    });

    // Initialize first slide
    showSlide(0);
  }

  initParallax() {
    if (this.hero.dataset.parallax !== 'true') return;

    const parallaxElements = this.hero.querySelectorAll('.hero-bg-image img');
    
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      parallaxElements.forEach(element => {
        element.style.transform = `translateY(${rate}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);
  }

  initScrollIndicator() {
    const scrollIndicator = this.hero.querySelector('[data-scroll-indicator]');
    if (!scrollIndicator) return;

    scrollIndicator.addEventListener('click', () => {
      const nextSection = this.hero.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.theme = new ThemeManager();
});

// Utility functions
window.themeUtils = {
  debounce: (func, wait, immediate) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  },

  throttle: (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  formatMoney: (cents) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR'
    }).format(cents / 100);
  }
};
