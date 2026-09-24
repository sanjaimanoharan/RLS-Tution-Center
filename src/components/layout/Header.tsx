import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpeg";
import { business, navigation } from "../../data/business";
import { ContactLink } from "../ui/ContactActions";
export function Wordmark() {
  return (
    <a href="#home" className="wordmark" aria-label={`${business.name} — home`}>
      <span className="logo-icon">
        <img
          src={logo}
          alt=""
          width={679}
          height={657}
          decoding="async"
        />
      </span>
      <span>
        <strong>
          RLS<span className="wordmark-dot">.</span>
        </strong>
        <span className="wordmark-sub">TUITION CENTER</span>
      </span>
    </a>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
      if (event.key === "Tab") {
        const links = panel.current?.querySelectorAll<HTMLAnchorElement>("a");
        const last = links?.[links.length - 1];
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          menuButton.current?.focus();
        }
        if (event.shiftKey && document.activeElement === menuButton.current) {
          event.preventDefault();
          last?.focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    const closeOutside = (event: MouseEvent) => {
      if (
        !panel.current?.contains(event.target as Node) &&
        !menuButton.current?.contains(event.target as Node)
      )
        setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="button button-primary header-cta">
          Enquire Now <ArrowUpRight size={16} />
        </a>
        <button
          ref={menuButton}
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div
        id="mobile-navigation"
        ref={panel}
        className={`mobile-panel ${open ? "is-open" : ""}`}
        inert={!open}
      >
        <nav aria-label="Mobile navigation" onClick={() => setOpen(false)}>
          {navigation.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
              <ArrowUpRight size={18} />
            </a>
          ))}
          <ContactLink kind="whatsapp" className="button button-primary" />
        </nav>
      </div>
    </header>
  );
}
