import { siteContent } from "../data/siteContent.js";

export function AboutAchievements() {
  return (
    <section className="section about-section stack-panel" id="about">
      <div className="section-heading">
        <p className="eyebrow">01 / About me</p>
        <h2>{siteContent.aboutTitle}</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="display-copy">
            {siteContent.aboutLead}
          </p>
          {siteContent.aboutSummary && (
            <p className="body-copy">{siteContent.aboutSummary}</p>
          )}
        </div>
        <div className="achievement-panel">
          <div className="achievement-title">
            <p className="eyebrow">My achievements</p>
            <span aria-hidden="true">↗</span>
          </div>
          {siteContent.achievementsPlaceholder && (
            <p className="achievement-empty">
              {siteContent.achievementsPlaceholder}
            </p>
          )}
          <span className="achievement-mark" aria-hidden="true">
            +
          </span>
        </div>
      </div>
    </section>
  );
}
