import { siteContent } from "../data/siteContent.js";

export function OfferCards() {
  return (
    <section className="section offers-section" id="offers">
      <div className="section-heading section-heading-row">
        <div>
          <p className="eyebrow">02 / Find your next challenge</p>
          <h2>{siteContent.offersTitle}</h2>
        </div>
        <p className="section-aside">{siteContent.offersDescription}</p>
      </div>
      <div className="offer-grid">
        {siteContent.cards.map((card, index) => (
          <article className="offer-card" key={card.id}>
            <div className={`offer-art ${card.art}`} aria-hidden="true">
              <span className="art-number">0{index + 1}</span>
              <span className="art-mark">{index === 1 ? "↗" : "+"}</span>
              <span className="art-label">Image to be added</span>
            </div>
            <div className="offer-copy">
              <p className="eyebrow">{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.href ? (
                <a className="offer-action" href={card.href}>
                  {card.action} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="offer-action" aria-disabled="true">
                  {card.action} <span aria-hidden="true">↗</span>
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
