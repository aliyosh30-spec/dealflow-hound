import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Search, TrendingUp, Phone, Menu, X, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface GlobalLayoutProps {
  children: React.ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/search", icon: Search, label: "Search Properties" },
    { path: "/deals", icon: TrendingUp, label: "Best Deals" },
    { path: "/analytics", icon: BarChart3, label: "Market Analytics" },
    { path: "/contact", icon: Phone, label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* HEADER */}
      <header className="bg-gradient-brand text-white shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              PropertyEdge
            </h1>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-white/20 text-white"
                      : "hover:bg-white/10 text-white/90"
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-gradient-brand border-t border-white/10"
            >
              <div className="py-4 px-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all ${
                        isActive(item.path)
                          ? "bg-white/20 text-white"
                          : "hover:bg-white/10 text-white/90"
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-gradient-brand text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold">PropertyEdge</h3>
              </div>
              <p className="text-white/80 text-sm">
                AI-powered real estate investment platform helping you discover undervalued properties and maximize ROI.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/search" className="text-white/80 hover:text-white transition">Property Search</Link></li>
                <li><Link to="/deals" className="text-white/80 hover:text-white transition">Best Deals</Link></li>
                <li><Link to="/analytics" className="text-white/80 hover:text-white transition">Market Analytics</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Data Sources</h4>
              <p className="text-white/80 text-sm">
                All property data sourced from licensed MLS feeds, public records, and verified broker partnerships.
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-6 text-center">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} PropertyEdge. Built with React, TypeScript & TailwindCSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}