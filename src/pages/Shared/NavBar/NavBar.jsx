import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart, Search, ChevronDown, User, Heart,
  Menu, X, Bird, Cat, Package, Utensils,
  LayoutDashboard, LogOut, Settings, Bell,
} from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import "./NavBar.css";
import logo from "../../../assets/logo1.png"

// ─── Static Data ──────────────────────────────────────────────────────────────

const NAV_LINKS = [
  {
    label: "Shop",
    dropdown: [
      { label: "Birds",    icon: <Bird size={14} />,    href: "/shop/birds", tag: "Popular" },
      { label: "Cats",     icon: <Cat size={14} />,     href: "/shop/cats",  tag: null },
      { label: "All Pets", icon: <Package size={14} />, href: "/shop/all",   tag: null },
    ],
  },
  {
    label: "Food & Treats",
    dropdown: [
      { label: "Bird Food", icon: <Utensils size={14} />, href: "/food/birds", tag: null },
      { label: "Cat Food",  icon: <Utensils size={14} />, href: "/food/cats",  tag: null },
    ],
  },
  {
    label: "Accessories",
    dropdown: [
      { label: "Cages & Perches", icon: <Package size={14} />, href: "/accessories/cages",    tag: null },
      { label: "Toys",            icon: <Package size={14} />, href: "/accessories/toys",     tag: "New ✦" },
      { label: "Grooming",        icon: <Package size={14} />, href: "/accessories/grooming", tag: null },
    ],
  },
  { label: "Sell Your Pet", href: "/sell",  dropdown: null },
  { label: "Adoption",      href: "/adopt", dropdown: null },
];

const PROFILE_MENU = [
  { label: "Dashboard",     icon: <LayoutDashboard size={14} />, href: "/dashboard",     danger: false },
  { label: "My Orders",     icon: <Package size={14} />,         href: "/orders",         danger: false },
  { label: "Wishlist",      icon: <Heart size={14} />,           href: "/wishlist",       danger: false },
  { label: "Notifications", icon: <Bell size={14} />,            href: "/notifications",  danger: false },
  { label: "Settings",      icon: <Settings size={14} />,        href: "/settings",       danger: false },
  { label: "Logout",        icon: <LogOut size={14} />,          href: "/logout",         danger: true  },
];

// ─── Paw Logo ─────────────────────────────────────────────────────────────────

const PawLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path d="M20 6 L31 12 L31 28 L20 34 L9 28 L9 12 Z" fill="#16a34a" />
    <path
      d="M20 12 L26 16 L26 24 L20 28 L14 24 L14 16 Z"
      fill="none" stroke="white" strokeWidth="1.2" strokeOpacity="0.5"
    />
    <circle cx="14" cy="10" r="3.2" fill="#16a34a" />
    <circle cx="20" cy="7.5" r="3.2" fill="#16a34a" />
    <circle cx="26" cy="10"  r="3.2" fill="#16a34a" />
    <circle cx="20" cy="20"  r="2"   fill="white" fillOpacity="0.6" />
  </svg>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [profileOpen,    setProfileOpen]    = useState(false);
  const [searchOpen,     setSearchOpen]     = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const rootRef = useRef(null);

  const handleLogOut = () => logOut().catch((err) => console.error(err));

  // Close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <nav
        ref={rootRef}
        className={`nb-root nb-bar fixed top-0 left-0 right-0 z-50 ${scrolled ? "nb-bar--stuck" : ""}`}
      >
        {/* ── Announcement Strip ── */}
        <div className="nb-announcement">
          🐦 Free delivery on orders over ৳999 &nbsp;·&nbsp; 🐾 100% verified breeders
        </div>

        {/* ── Main Row ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-6">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0" style={{ textDecoration: "none" }}>
              <img className="w-14 h-14" src={logo} alt="" />
              <div className="flex flex-col leading-none">
                <span className="nb-brand text-lg font-bold tracking-tight" style={{ color: "var(--nb-text)" }}>
                  Petzu
                </span>
                <span className="text-[0.6rem] font-medium tracking-[0.15em] uppercase" style={{ color: "var(--nb-green)" }}>
                  Pets &amp; Beyond
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={`nb-navlink ${activeDropdown === link.label ? "nb-navlink--open" : ""}`}>
                      {link.label}
                      <ChevronDown
                        size={13}
                        style={{ color: "var(--nb-green)" }}
                        className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>

                    {activeDropdown === link.label && (
                      <div className="nb-dropdown absolute top-full left-0 pt-2 z-50">
                        <div className="nb-dropdown-panel">
                          <div className="nb-dropdown-accent" />
                          {link.dropdown.map((item) => (
                            <Link key={item.label} to={item.href} className="nb-di-item">
                              <span className="nb-di-item__icon">{item.icon}</span>
                              <span className="flex-1">{item.label}</span>
                              {item.tag && <span className="nb-di-item__tag">{item.tag}</span>}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.label} to={link.href} className="nb-navlink">
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-1">

              {/* Search */}
              <button
                className={`nb-iconbtn ${searchOpen ? "nb-iconbtn--active" : ""}`}
                onClick={() => setSearchOpen((p) => !p)}
              >
                <Search size={18} />
              </button>

              {/* Wishlist */}
              <button className="nb-iconbtn hidden sm:flex">
                <Heart size={18} />
                <span className="nb-wishlist-dot" />
              </button>

              {/* Cart */}
              <button className="nb-iconbtn">
                <ShoppingCart size={18} />
                <span className="nb-cart-badge">3</span>
              </button>

              {/* Profile — desktop only */}
              <div className="relative hidden sm:block ml-1">
                <button
                  onClick={() => setProfileOpen((p) => !p)}
                  className={`nb-profilebtn ${profileOpen ? "nb-profilebtn--open" : ""}`}
                >
                  <div className="nb-avatar">
                    {user?.photoURL
                      ? <img src={user.photoURL} className="w-full h-full rounded-full object-cover" alt="" />
                      : <User size={13} color="white" />
                    }
                  </div>
                  <span className="text-sm font-medium hidden md:block" style={{ color: "var(--nb-text)" }}>
                    {user?.displayName?.split(" ")[0] || "Account"}
                  </span>
                  <ChevronDown
                    size={13}
                    style={{ color: "var(--nb-green)" }}
                    className={`transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {profileOpen && (
                  <div className="nb-dropdown absolute top-full right-0 pt-2 z-50">
                    <div className="nb-dropdown-panel w-56">
                      {/* User Header */}
                      <div className="nb-profile-header">
                        <div className="flex items-center gap-3">
                          <div className="nb-avatar nb-avatar--lg">
                            {user?.photoURL
                              ? <img src={user.photoURL} className="w-full h-full rounded-full object-cover" alt="" />
                              : <User size={16} color="white" />
                            }
                          </div>
                          <div>
                            <p className="text-sm font-semibold" style={{ color: "var(--nb-text)" }}>
                              {user?.displayName || "Guest"}
                            </p>
                            <p className="text-xs" style={{ color: "var(--nb-green)" }}>
                              {user?.email || ""}
                            </p>
                          </div>
                        </div>
                      </div>

                      {PROFILE_MENU.map((item, i) =>
                        item.danger ? (
                          <button
                            key={item.label}
                            onClick={handleLogOut}
                            className={`nb-pm-item nb-pm-item--danger nb-pm-item--sep w-full`}
                            style={{ background: "none", border: "none", cursor: "pointer" }}
                          >
                            <span style={{ color: "var(--nb-red)" }}>{item.icon}</span>
                            {item.label}
                          </button>
                        ) : (
                          <Link
                            key={item.label}
                            to={item.href}
                            className={`nb-pm-item ${i === PROFILE_MENU.length - 1 ? "nb-pm-item--sep" : ""}`}
                          >
                            <span style={{ color: "var(--nb-green)" }}>{item.icon}</span>
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Hamburger — only shown below lg */}
              <button
                className="nb-iconbtn lg:hidden ml-1"
                onClick={() => setMobileOpen((p) => !p)}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* ── Search Bar ── */}
          {searchOpen && (
            <div className="nb-searchbar">
              <div className="nb-search-wrap">
                <Search size={16} className="nb-search-icon" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search birds, cats, food, accessories…"
                  className="nb-searchinput"
                />
              </div>
            </div>
          )}
        </div>

        {/* ── Mobile Menu — CSS hides it on desktop regardless of state ── */}
        {mobileOpen && (
          <div className="nb-mobile-menu">
            <div className="px-3 py-3 space-y-0.5">

              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <button
                        className="nb-mobile-link"
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          style={{ color: "var(--nb-green)" }}
                          className={`transition-transform duration-200 ${mobileExpanded === link.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileExpanded === link.label && (
                        <div className="nb-mobile-sub">
                          {link.dropdown.map((item) => (
                            <Link key={item.label} to={item.href} className="nb-di-item">
                              <span className="nb-di-item__icon">{item.icon}</span>
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to={link.href} className="nb-mobile-link">
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Profile Section */}
              <div className="nb-mobile-profile">
                <div className="nb-mobile-profile-header">
                  <div className="nb-avatar nb-avatar--lg">
                    {user?.photoURL
                      ? <img src={user.photoURL} className="w-full h-full rounded-full object-cover" alt="" />
                      : <User size={16} color="white" />
                    }
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--nb-text)" }}>
                      {user?.displayName || "Guest"}
                    </p>
                    <p className="text-xs" style={{ color: "var(--nb-green)" }}>
                      {user?.email || ""}
                    </p>
                  </div>
                </div>

                {PROFILE_MENU.map((item) =>
                  item.danger ? (
                    <button
                      key={item.label}
                      onClick={handleLogOut}
                      className="nb-pm-item nb-pm-item--danger w-full"
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                      <span style={{ color: "var(--nb-red)" }}>{item.icon}</span>
                      {item.label}
                    </button>
                  ) : (
                    <Link key={item.label} to={item.href} className="nb-pm-item">
                      <span style={{ color: "var(--nb-green)" }}>{item.icon}</span>
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer: announcement(28px) + navbar(64px) = 92px */}
      <div className="nb-spacer" />
    </>
  );
};

export default Navbar;