import { Bird, Cat, Package, Mail, Phone, MapPin, ArrowRight, Heart, Feather } from "lucide-react";
import './Footer.css'

const FOOTER_LINKS = {
  Shop: [
    { label: "Birds", href: "/shop/birds" },
    { label: "Cats", href: "/shop/cats" },
    { label: "Sell Your Pet", href: "/sell" },
    { label: "Adoption Center", href: "/adopt" },
    { label: "New Arrivals", href: "/new" },
  ],
  "Pet Care": [
    { label: "Bird Food", href: "/food/birds" },
    { label: "Cat Food", href: "/food/cats" },
    { label: "Accessories", href: "/accessories" },
    { label: "Grooming", href: "/grooming" },
    { label: "Health & Wellness", href: "/health" },
  ],
  Support: [
    { label: "Help Center", href: "/help" },
    { label: "Track Order", href: "/track" },
    { label: "Return Policy", href: "/returns" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const SOCIAL = [
  // { icon: <Instagram size={17} />, href: "#", label: "Instagram" },
  // { icon: <Facebook size={17} />, href: "#", label: "Facebook" },
  // { icon: <Youtube size={17} />, href: "#", label: "Youtube" },
  // { icon: <Twitter size={17} />, href: "#", label: "Twitter" },
];

const FEATURES = [
  { icon: <Package size={18} />, label: "Free Delivery", sub: "On orders over ৳999" },
  { icon: <Heart size={18} />, label: "Trusted Sellers", sub: "Verified breeders only" },
  { icon: <Feather size={18} />, label: "Live Pets Care", sub: "Safe & healthy delivery" },
  { icon: <Phone size={18} />, label: "24/7 Support", sub: "Always here for you" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        
      `}</style>

      <footer className="footer-root bg-[#070f0a] relative overflow-hidden">

        {/* Decorative Wing SVGs */}
        <svg className="wing-left" viewBox="0 0 200 300" fill="none">
          <path d="M100,280 C60,240 10,180 20,100 C30,30 90,10 130,40 C160,65 170,110 150,160 C130,210 100,240 100,280Z" fill="#86c5a2" />
          <path d="M100,280 C80,230 85,170 90,130 C95,95 110,60 130,40" stroke="#86c5a2" strokeWidth="1.5" fill="none" />
          <path d="M100,280 C70,250 50,200 55,150 C60,110 80,80 110,70" stroke="#86c5a2" strokeWidth="1" fill="none" />
          <path d="M100,280 C95,255 100,220 110,185 C118,155 130,125 145,105" stroke="#86c5a2" strokeWidth="0.8" fill="none" />
        </svg>
        <svg className="wing-right" viewBox="0 0 200 300" fill="none">
          <path d="M100,280 C60,240 10,180 20,100 C30,30 90,10 130,40 C160,65 170,110 150,160 C130,210 100,240 100,280Z" fill="#d4a853" />
          <path d="M100,280 C80,230 85,170 90,130 C95,95 110,60 130,40" stroke="#d4a853" strokeWidth="1.5" fill="none" />
          <path d="M100,280 C70,250 50,200 55,150 C60,110 80,80 110,70" stroke="#d4a853" strokeWidth="1" fill="none" />
        </svg>

        {/* Top cloud-wave divider */}
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 54" preserveAspectRatio="none" className="w-full h-12 sm:h-14 text-[#0a1610]" fill="currentColor">
            <path d="M0,54 L0,28 C60,12 120,4 200,8 C280,12 330,30 400,32 C470,34 510,18 580,12 C650,6 700,14 760,22 C820,30 870,36 940,32 C1010,28 1060,12 1130,8 C1200,4 1270,12 1340,20 C1380,24 1420,28 1440,30 L1440,54Z" />
          </svg>
        </div>

        {/* Feature Strip */}
        <div className="border-b border-[#86c5a2]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {FEATURES.map((f) => (
                <div key={f.label} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[#86c5a2]/10 border border-[#86c5a2]/15 flex items-center justify-center text-[#86c5a2] flex-shrink-0 group-hover:bg-[#86c5a2]/15 transition-colors duration-200">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-[0.82rem] font-semibold text-white">{f.label}</p>
                    <p className="text-[0.72rem] text-[#5a7a62]">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Brand Column */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <a href="/" className="flex items-center gap-2.5 group mb-5 inline-flex">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#86c5a2] to-[#4a9970] flex items-center justify-center shadow-lg shadow-[#86c5a2]/15">
                  <Bird size={20} className="text-[#0a1210]" strokeWidth={2.2} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="footer-logo-text text-xl font-bold text-white">NestNook</span>
                  <span className="text-[0.6rem] font-medium tracking-[0.18em] text-[#86c5a2] uppercase">Pets & Beyond</span>
                </div>
              </a>

              <p className="text-sm text-[#5a7a62] leading-relaxed mb-6 max-w-[280px]">
                Bangladesh's most trusted marketplace for birds, cats, and all pet essentials. Every pet deserves a loving home.
              </p>

              {/* Newsletter */}
              <div className="mb-7">
                <p className="text-xs font-semibold text-[#86c5a2] uppercase tracking-widest mb-3">Newsletter</p>
                <div className="flex gap-0">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="newsletter-input flex-1 bg-[#0f1f17]/60 border border-[#86c5a2]/15 border-r-0 rounded-l-xl px-4 py-2.5 text-sm text-white placeholder-[#3d5c45] transition-all duration-200"
                  />
                  <button className="flex-shrink-0 px-4 bg-gradient-to-r from-[#86c5a2] to-[#5aaa80] text-[#0a1210] rounded-r-xl font-semibold text-sm hover:from-[#9ad4b2] hover:to-[#6abf90] transition-all duration-200 flex items-center gap-1.5">
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-2">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="social-btn w-9 h-9 rounded-xl bg-[#0f1f17]/60 border border-[#86c5a2]/12 flex items-center justify-center text-[#5a7a62] hover:text-[#86c5a2] hover:border-[#86c5a2]/30 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-3 gap-6">
                {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                  <div key={title}>
                    <p className="text-xs font-semibold text-[#86c5a2] uppercase tracking-widest mb-4">{title}</p>
                    <ul className="space-y-2.5">
                      {links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="footer-link-item block text-sm text-[#5a7a62] hover:text-[#86c5a2] transition-all duration-200"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold text-[#86c5a2] uppercase tracking-widest mb-4">Contact</p>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:hello@nestnook.com" className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-[#86c5a2]/8 flex items-center justify-center text-[#86c5a2] flex-shrink-0 mt-0.5 group-hover:bg-[#86c5a2]/15 transition-colors duration-200">
                      <Mail size={14} />
                    </div>
                    <div>
                      <p className="text-[0.7rem] text-[#3d5c45] uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-sm text-[#8ab09a] group-hover:text-white transition-colors duration-200">hello@nestnook.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="tel:+880-1234-567890" className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-[#86c5a2]/8 flex items-center justify-center text-[#86c5a2] flex-shrink-0 mt-0.5 group-hover:bg-[#86c5a2]/15 transition-colors duration-200">
                      <Phone size={14} />
                    </div>
                    <div>
                      <p className="text-[0.7rem] text-[#3d5c45] uppercase tracking-wider mb-0.5">Phone</p>
                      <p className="text-sm text-[#8ab09a] group-hover:text-white transition-colors duration-200">+880 1234-567890</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#86c5a2]/8 flex items-center justify-center text-[#86c5a2] flex-shrink-0 mt-0.5">
                      <MapPin size={14} />
                    </div>
                    <div>
                      <p className="text-[0.7rem] text-[#3d5c45] uppercase tracking-wider mb-0.5">Location</p>
                      <p className="text-sm text-[#8ab09a]">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </li>
              </ul>

              {/* App CTA */}
              <div className="mt-7 p-4 rounded-xl bg-[#86c5a2]/6 border border-[#86c5a2]/12">
                <p className="text-xs font-semibold text-white mb-1">Download Our App</p>
                <p className="text-[0.7rem] text-[#5a7a62] mb-3">Manage your pets on the go</p>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 rounded-lg bg-[#0f1f17] border border-[#86c5a2]/15 text-xs text-[#86c5a2] hover:border-[#86c5a2]/35 transition-colors duration-200 font-medium">
                    App Store
                  </button>
                  <button className="flex-1 py-1.5 rounded-lg bg-[#0f1f17] border border-[#86c5a2]/15 text-xs text-[#86c5a2] hover:border-[#86c5a2]/35 transition-colors duration-200 font-medium">
                    Play Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="feather-bar border-t border-[#86c5a2]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-[#3d5c45]">
                © 2025 <span className="text-[#5a7a62] font-medium">NestNook</span>. All rights reserved.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#3d5c45]">
                <span>Made with</span>
                <Heart size={11} className="text-[#e87b7b] fill-current" />
                <span>for pets in</span>
                <span className="gradient-text font-semibold">Bangladesh</span>
              </div>
              <div className="flex items-center gap-5">
                {["Privacy Policy", "Terms", "Cookies"].map((item) => (
                  <a key={item} href="#" className="text-xs text-[#3d5c45] hover:text-[#86c5a2] transition-colors duration-200">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}