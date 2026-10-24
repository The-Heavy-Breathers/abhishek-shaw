import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { siteContent } from "../data/siteContent.js";
import { SportPanels } from "./SportPanels.jsx";

export function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const showVideo =
    siteContent.heroVideo.src &&
    siteContent.heroVideo.playback === "muted-loop";

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updatePreference = (event) =>
      setPrefersReducedMotion(event.matches);

    motionPreference.addEventListener("change", updatePreference);
    return () =>
      motionPreference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return undefined;

    const context = gsap.context(() => {
      gsap.from(".hero-kicker, .hero-title, .hero-caption", {
        y: 22,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef} aria-labelledby="hero-title">
      {showVideo && prefersReducedMotion && siteContent.heroVideo.poster && (
        <img
          className="hero-video"
          src={siteContent.heroVideo.poster}
          alt=""
        />
      )}
      {showVideo && !prefersReducedMotion && (
        <video
          className="hero-video"
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={siteContent.heroVideo.poster || undefined}
          aria-hidden="true"
        >
          {siteContent.heroVideo.mobileSrc && (
            <source
              src={siteContent.heroVideo.mobileSrc}
              type="video/mp4"
              media="(max-width: 760px)"
            />
          )}
          <source
            src={siteContent.heroVideo.src}
            type="video/mp4"
            media="(min-width: 761px)"
          />
        </video>
      )}
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="eyebrow hero-kicker">
          {siteContent.name} <span>·</span> {siteContent.identity}
        </p>
        <h1 className="hero-title" id="hero-title">
          SWIM<span>,</span>
          <br />
          BIKE<span>,</span>
          <br />
          RUN<span>.</span>
        </h1>
        <p className="hero-caption">{siteContent.heroCaption}</p>
      </div>
      <div className="hero-bottom">
        <span>Endurance sport</span>
        <a className="scroll-cue" href="#about">
          Scroll to explore <span aria-hidden="true">↓</span>
        </a>
      </div>
      <SportPanels />
    </section>
  );
}
