import { siteContent } from "../data/siteContent.js";

export function QuoteProfile() {
  return (
    <section className="section profile-section" aria-labelledby="profile-title">
      <div className="profile-wrap">
        <img
          className="profile-photo"
          src={siteContent.profileImage}
          alt="Abhishek Shaw"
          width="806"
          height="807"
        />
        <div className="profile-quote">
          <p className="eyebrow">03 / My words</p>
          <h2 id="profile-title">{siteContent.profileQuote}</h2>
          {siteContent.quoteAttribution && (
            <p className="quote-attribution">{siteContent.quoteAttribution}</p>
          )}
        </div>
      </div>
    </section>
  );
}
