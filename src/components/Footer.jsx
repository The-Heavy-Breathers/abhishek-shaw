import { siteContent } from "../data/siteContent.js";

export function Footer() {
  return (
    <footer className="site-footer" id="contact-details">
      <span>© {new Date().getFullYear()} {siteContent.name}</span>
      <span>
        Made by <strong>Kushal</strong>
      </span>
      <span>{siteContent.footerThird}</span>
    </footer>
  );
}
