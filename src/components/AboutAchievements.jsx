import { siteContent } from "../data/siteContent.js";

export function AboutAchievements() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">01 / The athlete</p>
        <h2>{siteContent.aboutTitle}</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="display-copy">
            Ultra cyclist.
            <br />
            Triathlete.
            <br />
            <span>Always moving forward.</span>
          </p>
          <p className="body-copy">{siteContent.aboutSummary}</p>
        </div>
        <div className="achievement-panel">
          <div className="achievement-title">
            <p className="eyebrow">The miles so far</p>
            <span aria-hidden="true">↗</span>
          </div>
          <p className="achievement-empty">{siteContent.achievementsPlaceholder}</p>
          <span className="achievement-mark" aria-hidden="true">
            +
          </span>
        </div>
      </div>
    </section>
  );
}
