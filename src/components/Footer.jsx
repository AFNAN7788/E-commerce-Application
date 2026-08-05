import { useContext, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { ProductContext } from "../contexts/ProductContext";

const Footer = () => {
  const { setSelectedCategory } = useContext(ProductContext);
  const [activeModal, setActiveModal] = useState(null);

  const socialLinks = [
    { Icon: FaFacebookF, href: "https://www.facebook.com/afnanmart" },
    { Icon: FaTwitter, href: "https://twitter.com/afnanmart" },
    { Icon: FaInstagram, href: "https://www.instagram.com/afnanmart" },
    { Icon: FaYoutube, href: "https://www.youtube.com/@afnanmart" },
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/muhammad-afnan15/" },
  ];

  const scrollToSection = (id, category = null) => {
    if (category) setSelectedCategory(category);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="
        relative isolate
        bg-gradient-to-b from-[#0f1624] to-[#0a0e17]
        overflow-hidden
      "
    >
      {/* Thin separator to visually detach footer from page content */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10 z-20" />

      {/* Decorative glow effect anchored to the bottom */}
      <div
        className="
          absolute inset-x-0 bottom-0 h-[160px]
          bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30
          blur-[100px]
          pointer-events-none
          z-0
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand info and social presence */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-2 transition">
            <img
              src="/image/log.png"
              alt="Afnan Mart"
              className="mx-auto w-28 h-28 object-cover rounded-2xl mb-4 shadow-xl border border-white/10"
            />

            <p className="text-sm text-white/70">
              Your destination for cutting-edge gadgets.
            </p>

            <div className="flex justify-center gap-4 mt-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11 rounded-xl flex items-center justify-center
                    bg-white/10 text-white text-lg
                    hover:bg-cyan-500 hover:shadow-[0_0_15px_#22d3ee]
                    transition
                  "
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick navigation links */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition flex flex-col gap-6">
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-semibold mb-2">Shop</h3>
                {["All Products", "Mobiles", "Laptops", "Accessories"].map(
                  (item) => {
                    const categoryMap = {
                      "All Products": "All",
                      "Mobiles": "Mobiles",
                      "Laptops": "Computers",
                      "Accessories": "All",
                    };
                    return (
                      <a
                        key={item}
                        href="/#products"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection("products", categoryMap[item]);
                        }}
                        className="
                          block text-white/70 text-sm
                          hover:text-orange-400 hover:translate-x-1
                          transition cursor-pointer
                        "
                      >
                        {item}
                      </a>
                    );
                  }
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-semibold mb-2">About</h3>
                {["About Us", "Contact", "Careers", "Press"].map((item) => {
                  const sectionMap = {
                    "About Us": "about",
                    "Contact": "contact",
                    "Careers": "contact",
                    "Press": "contact",
                  };
                  return (
                    <a
                      key={item}
                      href={`/#${sectionMap[item]}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(sectionMap[item]);
                      }}
                      className="
                        block text-white/70 text-sm
                        hover:text-orange-400 hover:translate-x-1
                        transition cursor-pointer
                      "
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Newsletter subscription section */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition">
            <h3 className="text-white text-lg font-semibold mb-3">
              JOIN NEWSLETTER
            </h3>

            <p className="text-white/70 text-sm mb-5">
              Get exclusive offers & early product access.
            </p>

            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="
                  h-[48px] w-full max-w-[220px] px-4 rounded-xl
                  bg-white/10 border border-white/20
                  text-white placeholder-white/40
                  outline-none focus:border-cyan-400
                "
              />

              <button
                className="
                  h-[48px] w-[100px] shrink-0 rounded-xl
                  font-semibold text-black text-sm
                  bg-gradient-to-r from-orange-500 to-orange-400
                  shadow-[0_0_18px_rgba(255,120,70,0.75)]
                  hover:scale-105 transition
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-sm text-white/60">
          <span className="text-orange-400 font-semibold">Afnan Mart</span> ~
          Designed with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/muhammad-afnan15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-yellow-300 transition font-medium"
          >
            Afnan
          </a>
          <div className="flex justify-center gap-8 mt-4">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveModal(item)}
                className="hover:text-orange-400 cursor-pointer transition text-white/60 text-sm border-none bg-transparent"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Privacy, Terms, Sitemap */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-2xl text-left text-white max-h-[85vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
              <h3 className="text-xl font-bold text-cyan-400">
                {activeModal === "Privacy" && "Privacy Policy"}
                {activeModal === "Terms" && "Terms of Service"}
                {activeModal === "Sitemap" && "Website Sitemap"}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="text-sm text-gray-300 space-y-4 leading-relaxed">
              {activeModal === "Privacy" && (
                <>
                  <p>
                    At <strong>Afnan Mart</strong>, we prioritize your privacy and data security. We collect minimal information required to fulfill your orders and provide a personalized gadget shopping experience.
                  </p>
                  <h4 className="font-semibold text-white">1. Information Collection</h4>
                  <p>
                    We collect your name, email address, and order details when you sign up or place an order. Payment information is securely processed.
                  </p>
                  <h4 className="font-semibold text-white">2. Data Usage</h4>
                  <p>
                    Your data is strictly used to deliver order notifications, support requests, and exclusive promotional offers. We never sell or rent your personal information to third parties.
                  </p>
                  <h4 className="font-semibold text-white">3. Security</h4>
                  <p>
                    We implement industry-standard SSL encryption and modern security safeguards to keep your personal data safe.
                  </p>
                </>
              )}

              {activeModal === "Terms" && (
                <>
                  <p>
                    Welcome to <strong>Afnan Mart</strong>. By accessing our platform and placing orders, you agree to comply with the following terms:
                  </p>
                  <h4 className="font-semibold text-white">1. Product Guarantee</h4>
                  <p>
                    All gadgets sold on Afnan Mart undergo strict quality checks. Warranty claims are valid up to 12 months from purchase with original invoice.
                  </p>
                  <h4 className="font-semibold text-white">2. Orders & Payments</h4>
                  <p>
                    Prices are subject to availability. Orders may be canceled if item availability changes unexpectedly before processing.
                  </p>
                  <h4 className="font-semibold text-white">3. User Account Security</h4>
                  <p>
                    You are responsible for maintaining account confidentiality and password security for your Afnan Mart profile.
                  </p>
                </>
              )}

              {activeModal === "Sitemap" && (
                <>
                  <p className="mb-4">Quickly navigate to any section of Afnan Mart:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { title: "Home", target: "root", category: null },
                      { title: "All Products", target: "products", category: "All" },
                      { title: "Mobiles", target: "products", category: "Mobiles" },
                      { title: "Laptops & PCs", target: "products", category: "Computers" },
                      { title: "Why Choose Us", target: "about", category: null },
                      { title: "Contact Us", target: "contact", category: null },
                    ].map((site) => (
                      <button
                        key={site.title}
                        onClick={() => {
                          setActiveModal(null);
                          if (site.target === "root") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          } else {
                            scrollToSection(site.target, site.category);
                          }
                        }}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-300 text-left transition font-medium"
                      >
                        {site.title} →
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
