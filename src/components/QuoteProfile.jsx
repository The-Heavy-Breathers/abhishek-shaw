import { useState } from "react";
import { siteContent } from "../data/siteContent.js";

export function QuoteProfile() {
  const [imageStatus, setImageStatus] = useState("loading");

  return (
    <section className="section profile-section" aria-labelledby="profile-title">
      <div className="profile-wrap">
        <div
          className={`profile-photo-frame${imageStatus === "loaded" ? " is-loaded" : ""}`}
          aria-busy={imageStatus === "loading"}
        >
          {imageStatus !== "error" && (
            <img
              className="profile-photo"
              src={siteContent.profileImage}
              alt="Abhishek Shaw"
              width="807"
              height="807"
              loading="lazy"
              decoding="async"
              onLoad={() => setImageStatus("loaded")}
              onError={() => setImageStatus("error")}
            />
          )}
        </div>
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
