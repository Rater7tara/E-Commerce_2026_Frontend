import { useState, useEffect, useRef } from "react";
import { ShoppingCart, Search, ChevronDown, User, Heart, Menu, X, Bird, Cat, Package, Utensils, Tag, LayoutDashboard, LogOut, Settings, Bell } from "lucide-react";
import './NavBar.css'

const NAV_LINKS = [
  {
    label: "Shop",
    dropdown: [
      { label: "Birds", icon: <Bird size={15} />, href: "/shop/birds" },
      { label: "Cats", icon: <Cat size={15} />, href: "/shop/cats" },
      { label: "All Pets", icon: <Package size={15} />, href: "/shop/all" },
    ],
  },
  {
    label: "Food & Treats",
    dropdown: [
      { label: "Bird Food", icon: <Utensils size={15} />, href: "/food/birds" },
      { label: "Cat Food", icon: <Utensils size={15} />, href: "/food/cats" },
    ],
  },
  {
    label: "Accessories",
    dropdown: [
      { label: "Cages & Perches", icon: <Package size={15} />, href: "/accessories/cages" },
      { label: "Toys", icon: <Package size={15} />, href: "/accessories/toys" },
      { label: "Grooming", icon: <Package size={15} />, href: "/accessories/grooming" },
    ],
  },
  { label: "Sell Your Pet", href: "/sell", dropdown: null },
  { label: "Adoption", href: "/adopt", dropdown: null },
];

const PROFILE_MENU = [
  { label: "Dashboard", icon: <LayoutDashboard size={15} />, href: "/dashboard" },
  { label: "My Orders", icon: <Package size={15} />, href: "/orders" },
  { label: "Wishlist", icon: <Heart size={15} />, href: "/wishlist" },
  { label: "Notifications", icon: <Bell size={15} />, href: "/notifications" },
  { label: "Settings", icon: <Settings size={15} />, href: "/settings" },
  { label: "Logout", icon: <LogOut size={15} />, href: "/logout", danger: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const navRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isLoggedIn = true; // Toggle for demo

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=DM+Sans:wght@300;400;500;600&display=swap');

       
      `}</style>

      <nav
        ref={navRef}
        className={`nav-root fixed top-0 left-0 right-0 z-50 transition-all duration-500 cloud-bg ${scrolled
            ? "bg-[#0f1a14]/95 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.4)] border-b border-[#86c5a2]/10"
            : "bg-gradient-to-b from-[#0a1210]/90 to-transparent backdrop-blur-sm"
          }`}
      >
        {/* Decorative feather shapes */}
        <svg className="feather-deco top-0 right-32 w-24 h-8" viewBox="0 0 120 40">
          <path d="M10,20 Q40,-5 80,8 Q110,18 115,22 Q80,35 40,28 Q15,23 10,20Z" fill="#86c5a2" />
          <path d="M10,20 Q60,15 115,22" stroke="#86c5a2" strokeWidth="0.8" fill="none" />
        </svg>
        <svg className="feather-deco top-1 left-48 w-16 h-6" viewBox="0 0 80 30">
          <path d="M5,15 Q25,-3 55,6 Q72,13 76,16 Q55,26 28,20 Q8,16 5,15Z" fill="#d4a853" />
          <path d="M5,15 Q40,12 76,16" stroke="#d4a853" strokeWidth="0.6" fill="none" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main Nav Row */}
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#86c5a2] to-[#4a9970] flex items-center justify-center shadow-lg shadow-[#86c5a2]/20 group-hover:shadow-[#86c5a2]/40 transition-shadow duration-300">
                  <Bird size={18} className="text-[#0a1210]" strokeWidth={2.2} />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#d4a853] border-2 border-[#0f1a14]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="logo-text text-[1.15rem] font-bold text-white tracking-wide">NestNook</span>
                <span className="text-[0.6rem] font-medium tracking-[0.18em] text-[#86c5a2] uppercase">Pets & Beyond</span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="nav-link-hover flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#c8d9ce] hover:text-white transition-colors duration-200">
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180 text-[#86c5a2]" : ""}`}
                      />
                    </button>

                    {activeDropdown === link.label && (
                      <div className="dropdown-enter absolute top-full left-0 pt-2">
                        <div className="bg-[#0f1f17]/95 backdrop-blur-xl border border-[#86c5a2]/15 rounded-xl shadow-2xl shadow-black/60 overflow-hidden min-w-[180px]">
                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#86c5a2]/40 to-transparent" />
                          {link.dropdown.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-3 text-sm text-[#a8c4b0] hover:text-white hover:bg-[#86c5a2]/10 transition-colors duration-150 group/item"
                            >
                              <span className="text-[#86c5a2] group-hover/item:scale-110 transition-transform duration-150">
                                {item.icon}
                              </span>
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="nav-link-hover px-4 py-2 text-sm font-medium text-[#c8d9ce] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-1.5">

              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2.5 rounded-xl transition-all duration-200 ${searchOpen
                    ? "bg-[#86c5a2]/15 text-[#86c5a2]"
                    : "text-[#a8c4b0] hover:text-white hover:bg-white/5"
                  }`}
              >
                <Search size={18} />
              </button>

              {/* Wishlist */}
              <button className="hidden sm:flex p-2.5 rounded-xl text-[#a8c4b0] hover:text-[#e8819a] hover:bg-white/5 transition-all duration-200 relative">
                <Heart size={18} />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#e8819a]" />
              </button>

              {/* Cart */}
              <button className="p-2.5 rounded-xl text-[#a8c4b0] hover:text-white hover:bg-white/5 transition-all duration-200 relative">
                <ShoppingCart size={18} />
                <span className="cart-badge absolute -top-0.5 -right-0.5 w-4.5 h-4.5 min-w-[18px] px-1 rounded-full bg-[#d4a853] text-[#0a1210] text-[10px] font-bold flex items-center justify-center leading-none">
                  3
                </span>
              </button>

              {/* Profile */}
              <div className="relative hidden sm:block" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className={`flex items-center gap-2 ml-1 pl-3 pr-2 py-1.5 rounded-xl border transition-all duration-200 ${profileOpen
                      ? "border-[#86c5a2]/40 bg-[#86c5a2]/10"
                      : "border-transparent hover:border-[#86c5a2]/20 hover:bg-white/5"
                    }`}
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#86c5a2] to-[#4a9970] flex items-center justify-center flex-shrink-0">
                    <User size={14} className="text-[#0a1210]" />
                  </div>
                  <ChevronDown
                    size={13}
                    className={`text-[#86c5a2] transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {profileOpen && (
                  <div className="dropdown-enter absolute top-full right-0 pt-2 z-50">
                    <div className="bg-[#0f1f17]/97 backdrop-blur-xl border border-[#86c5a2]/15 rounded-xl shadow-2xl shadow-black/70 overflow-hidden w-52">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#86c5a2]/40 to-transparent" />

                      {/* Profile Header */}
                      <div className="px-4 pt-4 pb-3 border-b border-[#86c5a2]/10">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#86c5a2] to-[#4a9970] flex items-center justify-center">
                            <User size={16} className="text-[#0a1210]" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">Rafsan Ahmed</p>
                            <p className="text-xs text-[#86c5a2]">rafsan@email.com</p>
                          </div>
                        </div>
                      </div>

                      {PROFILE_MENU.map((item, i) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 group/pm ${item.danger
                              ? "text-[#e87b7b] hover:bg-[#e87b7b]/10 border-t border-[#86c5a2]/10 mt-1"
                              : "text-[#a8c4b0] hover:text-white hover:bg-[#86c5a2]/10"
                            }`}
                        >
                          <span className={`transition-transform duration-150 group-hover/pm:translate-x-0.5 ${item.danger ? "text-[#e87b7b]" : "text-[#86c5a2]"}`}>
                            {item.icon}
                          </span>
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl text-[#a8c4b0] hover:text-white hover:bg-white/5 transition-all duration-200 ml-1"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="search-slide pb-3 overflow-hidden">
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#86c5a2]" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pets, food, accessories..."
                  className="w-full bg-[#0f1f17]/80 border border-[#86c5a2]/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-[#5a7a62] focus:outline-none focus:border-[#86c5a2]/50 focus:bg-[#0f1f17] transition-all duration-200"
                />
                <kbd className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-[#5a7a62] border border-[#5a7a62]/30 rounded px-1.5 py-0.5 hidden sm:block">
                  ESC
                </kbd>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mobile-menu-enter lg:hidden bg-[#0a1610]/98 backdrop-blur-xl border-t border-[#86c5a2]/10 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-[#c8d9ce] hover:bg-[#86c5a2]/10 hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`text-[#86c5a2] transition-transform duration-200 ${mobileExpanded === link.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileExpanded === link.label && (
                        <div className="ml-4 mt-1 space-y-0.5 border-l border-[#86c5a2]/15 pl-3">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-[#8ab09a] hover:text-white hover:bg-[#86c5a2]/10 transition-colors duration-150"
                            >
                              <span className="text-[#86c5a2]">{item.icon}</span>
                              {item.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center px-3 py-3 rounded-xl text-sm font-medium text-[#c8d9ce] hover:bg-[#86c5a2]/10 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}

              {/* Mobile Profile Section */}
              <div className="border-t border-[#86c5a2]/10 pt-3 mt-3">
                <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-[#86c5a2]/5 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#86c5a2] to-[#4a9970] flex items-center justify-center">
                    <User size={16} className="text-[#0a1210]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Rafsan Ahmed</p>
                    <p className="text-xs text-[#86c5a2]">View Profile</p>
                  </div>
                </div>
                {PROFILE_MENU.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors duration-150 ${item.danger ? "text-[#e87b7b] hover:bg-[#e87b7b]/10" : "text-[#a8c4b0] hover:text-white hover:bg-[#86c5a2]/10"
                      }`}
                  >
                    <span className={item.danger ? "text-[#e87b7b]" : "text-[#86c5a2]"}>{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}