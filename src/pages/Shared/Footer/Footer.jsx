import {
  Bird, Package, Mail, Phone, MapPin,
  
  ArrowRight, Heart, Feather,
} from "lucide-react";
import './Footer.css';
import logo from "../../../assets/logo1.png"

// ─── Static Data ──────────────────────────────────────────────────────────────

const FOOTER_LINKS = {
  Shop: [
    { label: "Birds",            href: "/shop/birds" },
    { label: "Cats",             href: "/shop/cats"  },
    { label: "Sell Your Pet",    href: "/sell"       },
    { label: "Adoption Center",  href: "/adopt"      },
    { label: "New Arrivals",     href: "/new"        },
  ],
  "Pet Care": [
    { label: "Bird Food",         href: "/food/birds"          },
    { label: "Cat Food",          href: "/food/cats"           },
    { label: "Accessories",       href: "/accessories"         },
    { label: "Grooming",          href: "/accessories/grooming"},
    { label: "Health & Wellness", href: "/health"              },
  ],
  Support: [
    { label: "Help Center",   href: "/help"     },
    { label: "Track Order",   href: "/track"    },
    { label: "Return Policy", href: "/returns"  },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Contact Us",    href: "/contact"  },
  ],
};

const SOCIALS = [
  // { icon: <Instagram size={16} />, href: "#", label: "Instagram" },
  // { icon: <Facebook  size={16} />, href: "#", label: "Facebook"  },
  // { icon: <Youtube   size={16} />, href: "#", label: "YouTube"   },
  // { icon: <Twitter   size={16} />, href: "#", label: "Twitter"   },
];

const FEATURES = [
  { icon: <Package size={20} />, label: "Free Delivery",   sub: "On orders over ৳999"    },
  { icon: <Heart   size={20} />, label: "Trusted Sellers", sub: "Verified breeders only" },
  { icon: <Feather size={20} />, label: "Live Pets Care",  sub: "Safe & healthy delivery"},
  { icon: <Phone   size={20} />, label: "24/7 Support",    sub: "Always here for you"    },
];

// ─── Geometric Paw Logo SVG ───────────────────────────────────────────────────

const PawLogo = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path d="M20 6 L31 12 L31 28 L20 34 L9 28 L9 12 Z" fill="#4ade80" />
    <path
      d="M20 12 L26 16 L26 24 L20 28 L14 24 L14 16 Z"
      fill="none" stroke="white" strokeWidth="1.2" strokeOpacity="0.4"
    />
    <circle cx="14" cy="10" r="3.2" fill="#4ade80" />
    <circle cx="20" cy="7.5" r="3.2" fill="#4ade80" />
    <circle cx="26" cy="10" r="3.2" fill="#4ade80" />
    <circle cx="20" cy="20" r="2" fill="white" fillOpacity="0.5" />
  </svg>
);


// ─── Component ────────────────────────────────────────────────────────────────

const Footer = () => {
  return (
    <>

      <footer className="ft-root" style={{ background: "var(--ft-bg)" }}>

        {/* ── Wave divider ── */}
        <svg
          viewBox="0 0 1440 48" preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 40, background: "white" }}
        >
          <path
            d="M0,48 L0,24 C120,8 240,0 360,4 C480,8 540,28 660,32 C780,36 840,20 960,14 C1080,8 1200,16 1320,22 C1380,25 1420,28 1440,30 L1440,48Z"
            fill="#111827"
          />
        </svg>

        {/* ── Feature strip ── */}
        <div style={{ borderBottom: "1px solid var(--ft-border)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEATURES.map((f) => (
                <div key={f.label} className="ft-feature">
                  <div className="ft-feature-icon">{f.icon}</div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--ft-text)" }}>
                      {f.label}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--ft-dim)" }}>
                      {f.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Brand column */}
            <div className="lg:col-span-4">
              <a href="/" className="inline-flex items-center gap-3 mb-5" style={{ textDecoration: "none" }}>
                 <img className="w-14 h-14" src={logo} alt="" />
                <div className="flex flex-col leading-none">
                  <span className="ft-brand text-xl font-bold" style={{ color: "var(--ft-text)" }}>
                    Petzu
                  </span>
                  <span className="text-[0.6rem] tracking-[0.18em] font-medium uppercase" style={{ color: "var(--ft-green-lt)" }}>
                    Pets & Beyond
                  </span>
                </div>
              </a>

              <p className="text-sm leading-relaxed mb-7 max-w-[268px]" style={{ color: "var(--ft-sub)" }}>
                Bangladesh's most trusted marketplace for birds, cats, and all pet essentials. Every pet deserves a loving home.
              </p>

              {/* Newsletter */}
              <div className="mb-7">
                <span className="ft-label">Newsletter</span>
                <div className="ft-nl-wrap">
                  <input type="email" placeholder="your@email.com" className="ft-nl-input" />
                  <button className="ft-nl-btn"><ArrowRight size={16} /></button>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-2">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} className="ft-social">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-3 gap-6">
                {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                  <div key={title}>
                    <span className="ft-label">{title}</span>
                    <ul className="space-y-1">
                      {links.map((link) => (
                        <li key={link.label}>
                          <a href={link.href} className="ft-link">{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <span className="ft-label">Contact</span>
              <div className="space-y-4 mb-7">
                {[
                  { icon: <Mail size={15} />,   top: "Email",    val: "hello@nestnook.com",  href: "mailto:hello@nestnook.com" },
                  { icon: <Phone size={15} />,  top: "Phone",    val: "+880 1234-567890",     href: "tel:+8801234567890"        },
                  { icon: <MapPin size={15} />, top: "Location", val: "Dhaka, Bangladesh",   href: null                        },
                ].map((c) => (
                  <div key={c.top} className="ft-contact-row">
                    <div className="ft-contact-icon">{c.icon}</div>
                    <div>
                      <p className="text-[0.65rem] font-semibold tracking-widest uppercase mb-0.5" style={{ color: "var(--ft-dim)" }}>
                        {c.top}
                      </p>
                      <p className="text-sm" style={{ color: "var(--ft-sub)" }}>{c.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* App download */}
              <div
                className="p-4 rounded-xl"
                style={{ background: "var(--ft-card)", border: "1px solid var(--ft-border)" }}
              >
                <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--ft-text)" }}>
                  Download Our App
                </p>
                <p className="text-xs mb-3" style={{ color: "var(--ft-dim)" }}>
                  Manage your pets on the go
                </p>
                <div className="flex gap-2">
                  <button className="ft-app-btn">App Store</button>
                  <button className="ft-app-btn">Play Store</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            background: "var(--ft-bottom)",
            borderTop: "1px solid var(--ft-border)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs" style={{ color: "var(--ft-dim)" }}>
                © 2026{" "}
                <span style={{ color: "var(--ft-sub)", fontWeight: 600 }}>Petzu</span>.
                {" "}All rights reserved.
              </p>

              <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--ft-dim)" }}>
                Made with{" "}
                <Heart size={11} style={{ color: "#f43f5e", fill: "#f43f5e" }} />
                {" "}for pets in{" "}
                <span className="ft-gtext">Bangladesh</span>
              </div>

              <div className="flex items-center gap-5">
                {["Privacy", "Terms", "Cookies"].map((item) => (
                  <a key={item} href="#" className="ft-bot-link">{item}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;