import { siteContent } from "../data/siteContent.js";

export function QuoteProfile() {
  return (
    <section className="section profile-section" aria-labelledby="profile-title">
      <div className="profile-wrap">
        <div
          className="profile-photo-placeholder"
          role="img"
          aria-label="Profile image to be added"
        >
          <span>Profile image<br />to be added</span>
        </div>
        <div className="profile-quote">
          <p className="eyebrow">03 / In his words</p>
          <h2 id="profile-title">{siteContent.profileQuote}</h2>
          <p className="quote-attribution">{siteContent.quoteAttribution}</p>
        </div>
      </div>
    </section>
  );
}
