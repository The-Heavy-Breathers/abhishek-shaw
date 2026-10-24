import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { siteContent } from "../data/siteContent.js";

export function ContactCTA() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!button || reduceMotion.matches) return undefined;

    const arrow = button.querySelector(".contact-arrow");
    const moveArrow = () => gsap.to(arrow, { x: 6, duration: 0.25 });
    const resetArrow = () => gsap.to(arrow, { x: 0, duration: 0.25 });

    button.addEventListener("pointerenter", moveArrow);
    button.addEventListener("pointerleave", resetArrow);
    button.addEventListener("focus", moveArrow);
    button.addEventListener("blur", resetArrow);
    return () => {
      button.removeEventListener("pointerenter", moveArrow);
      button.removeEventListener("pointerleave", resetArrow);
      button.removeEventListener("focus", moveArrow);
      button.removeEventListener("blur", resetArrow);
      gsap.killTweensOf(arrow);
    };
  }, []);

  return (
    <section className="contact-section stack-panel" id="contact">
      <p className="eyebrow">04 / Start a conversation</p>
      <h2>{siteContent.contactTitle}</h2>
      <a className="contact-button" href="#contact-details" ref={buttonRef}>
        <span>Get in touch</span>
        <span className="contact-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </section>
  );
}
