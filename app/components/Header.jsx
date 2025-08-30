import {Suspense} from 'react';
import {Await, NavLink, useAsyncValue} from 'react-router';
import {useAnalytics, useOptimisticCart} from '@shopify/hydrogen';
import {useAside} from '~/components/Aside';

/**
 * @param {HeaderProps}
 */
export function Header({header, isLoggedIn, cart, publicStoreDomain}) {
  const {shop} = header;
  return (
    <header className="header">
      <div className="header-inner">
        <NavLink prefetch="intent" to="/" className="header-logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 8V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="16" r="3" fill="#40E0D0"/>
          </svg>
          <span>PureBrush</span>
        </NavLink>
        
        <nav className="header-nav">
          <NavLink to="/#features" className="header-nav-link">
            Funksjoner
          </NavLink>
          <NavLink to="/#how-it-works" className="header-nav-link">
            Hvordan det fungerer
          </NavLink>
          <NavLink to="/#testimonials" className="header-nav-link">
            Kundeomtaler
          </NavLink>
          <NavLink to="/#faq" className="header-nav-link">
            FAQ
          </NavLink>
        </nav>
        
        <div className="header-actions">
          <HeaderMenuMobileToggle />
          <CartToggle cart={cart} />
          <button className="btn-primary">
            Kjøp nå
          </button>
        </div>
      </div>
    </header>
  );
}

/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 *   publicStoreDomain: HeaderProps['publicStoreDomain'];
 * }}
 */
export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();

  // Norwegian menu items for mobile
  const norwegianMenuItems = [
    { id: '1', title: 'Hjem', url: '/' },
    { id: '2', title: 'Funksjoner', url: '/#features' },
    { id: '3', title: 'Hvordan det fungerer', url: '/#how-it-works' },
    { id: '4', title: 'Kundeomtaler', url: '/#testimonials' },
    { id: '5', title: 'FAQ', url: '/#faq' },
    { id: '6', title: 'Kontakt', url: '/contact' },
  ];

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <div className="mobile-menu-items">
          {norwegianMenuItems.map((item) => (
            <NavLink
              className="header-menu-item"
              end
              key={item.id}
              onClick={close}
              prefetch="intent"
              style={activeLinkStyle}
              to={item.url}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({isLoggedIn, cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle desktop-hidden"
      onClick={() => open('mobile')}
      aria-label="Meny"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2"/>
        <path d="M13 13L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
  );
}

/**
 * @param {{count: number | null}}
 */
function CartBadge({count}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        });
      }}
      className="cart-toggle"
      aria-label={`Handlekurv med ${count || 0} varer`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 3H5L7 13H17L19 5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="20" r="1" fill="currentColor"/>
        <circle cx="15" cy="20" r="1" fill="currentColor"/>
      </svg>
      {count !== null && count > 0 && (
        <span className="cart-count">{count}</span>
      )}
    </a>
  );
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue();
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Funksjoner',
      type: 'HTTP',
      url: '/#features',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Hvordan det fungerer',
      type: 'HTTP',
      url: '/#how-it-works',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Kundeomtaler',
      type: 'HTTP',
      url: '/#testimonials',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'FAQ',
      type: 'PAGE',
      url: '/#faq',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? '#40E0D0' : undefined,
  };
}

/* Additional header styles */
const headerStyles = `
  .cart-toggle {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--color-secondary);
    text-decoration: none;
    transition: color var(--transition-fast);
  }
  
  .cart-toggle:hover {
    color: var(--color-primary);
  }
  
  .cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background: var(--color-primary);
    color: var(--color-white);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: var(--font-weight-bold);
  }
  
  .header-menu-mobile-toggle {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-secondary);
    transition: color var(--transition-fast);
  }
  
  .header-menu-mobile-toggle:hover {
    color: var(--color-primary);
  }
  
  .header-nav-link {
    color: var(--color-dark-gray);
    text-decoration: none;
    font-weight: var(--font-weight-medium);
    transition: color var(--transition-fast);
  }
  
  .header-nav-link:hover {
    color: var(--color-primary);
  }
`;

/** @typedef {'desktop' | 'mobile'} Viewport */
/**
 * @typedef {Object} HeaderProps
 * @property {HeaderQuery} header
 * @property {Promise<CartApiQueryFragment|null>} cart
 * @property {Promise<boolean>} isLoggedIn
 * @property {string} publicStoreDomain
 */

/** @typedef {import('@shopify/hydrogen').CartViewPayload} CartViewPayload */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */