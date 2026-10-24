import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutAchievements } from "./components/AboutAchievements.jsx";
import { ContactCTA } from "./components/ContactCTA.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { OfferCards } from "./components/OfferCards.jsx";
import { QuoteProfile } from "./components/QuoteProfile.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add(
      "(min-width: 761px) and (prefers-reduced-motion: no-preference)",
      () => {
        const panels = gsap.utils.toArray(".stack-panel", mainRef.current);

        panels.forEach((panel, index) => {
          gsap.set(panel, { zIndex: index + 1 });
          ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });
        });
      },
    );

    return () => media.revert();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Abhishek Shaw, home">
          AS<span>.</span>
        </a>
        <a className="header-link" href="#contact">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main id="main-content" ref={mainRef}>
        <Hero />
        <AboutAchievements />
        <OfferCards />
        <QuoteProfile />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
