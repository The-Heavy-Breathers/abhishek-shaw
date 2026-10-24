import { siteContent } from "../data/siteContent.js";

export function Footer() {
  return (
    <footer className="site-footer" id="contact-details">
      <nav className="footer-socials" aria-label="Social media">
        <a
          href="https://www.instagram.com/kushalarya/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle className="footer-icon-dot" cx="17.5" cy="6.5" r="1" />
          </svg>
        </a>
        <a
          href="https://www.strava.com/abhishek-shaw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Strava"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9.2 3 5.5 10.4h-3.5L9.2 9.5l-3.4 6.4H2.2L9.2 3Z" />
            <path d="m15.5 13.4 3.9 7.3h-3.1l-2.3-4.3h2.3l-1.9-3.6h1.1Z" />
          </svg>
        </a>
      </nav>
      <span className="footer-copyright">
        © {new Date().getFullYear()} {siteContent.name}
      </span>
      <span className="footer-credit">
        Made by{" "}
        <a href="https://kushalarya.com" target="_blank" rel="noopener noreferrer">
          Kushal Arya
        </a>
      </span>
    </footer>
  );
}
