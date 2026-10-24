import { AboutAchievements } from "./components/AboutAchievements.jsx";
import { ContactCTA } from "./components/ContactCTA.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { OfferCards } from "./components/OfferCards.jsx";
import { QuoteProfile } from "./components/QuoteProfile.jsx";

export default function App() {
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
      <main id="main-content">
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
