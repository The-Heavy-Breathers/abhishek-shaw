import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const sports = ["Swim", "Bike", "Run"];

export function SportPanels() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateMotion = () => {
      tweenRef.current?.kill();
      tweenRef.current = null;
      if (motionPreference.matches) {
        setMotionAllowed(false);
        gsap.set(trackRef.current, { xPercent: 0 });
        return;
      }

      setMotionAllowed(true);
      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 26,
        ease: "none",
        repeat: -1,
        paused,
      });
    };

    updateMotion();
    motionPreference.addEventListener("change", updateMotion);
    return () => {
      motionPreference.removeEventListener("change", updateMotion);
      tweenRef.current?.kill();
    };
  }, [paused]);

  const toggleMotion = () => {
    const nextPaused = !paused;
    setPaused(nextPaused);
    if (nextPaused) tweenRef.current?.pause();
    else tweenRef.current?.play();
  };

  return (
    <div className="sport-panels" role="region" aria-label="Sports">
      <div className="sport-panels-window">
        <div className="sport-panels-track" ref={trackRef}>
          {[0, 1].map((copy) => (
            <div
              className="sport-panels-group"
              key={copy}
              aria-hidden={copy === 1}
            >
              {sports.map((sport, index) => (
                <div className={`sport-panel sport-panel-${index + 1}`} key={sport}>
                  <span>0{index + 1}</span>
                  <strong>{sport}</strong>
                  <span aria-hidden="true">↗</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {motionAllowed && (
        <button
          className="motion-toggle"
          type="button"
          onClick={toggleMotion}
          aria-label={paused ? "Play sport panels" : "Pause sport panels"}
        >
          {paused ? "Play" : "Pause"}
        </button>
      )}
    </div>
  );
}
