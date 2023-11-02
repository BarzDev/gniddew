"use client";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect, useRef, useState } from "react";

import Break from "@/components/sec-break";
import Section1 from "@/components/sec1-home";
import Section2 from "@/components/sec2-loc";
import Section3 from "@/components/sec4-galery";
import RSVP from "@/components/sec5-rsvp";
import Music from "@/components/music";
import MyConfettiComponent from "@/components/confeti";
import Nav from "@/components/nav";
import Story from "@/components/sec3-story";
import Gift from "@/components/sec6-gift";

export default function Home() {
  const homeRef = useRef(null);
  const locRef = useRef(null);
  const galeryRef = useRef(null);
  const storyRef = useRef(null);
  const RSVPRef = useRef(null);
  const GiftRev = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    setIsPlaying(true);
    Aos.init();
  }, []);
  return (
    <>
      <MyConfettiComponent />
      <Music
        isPlaying={isPlaying}
        src="/A%20Thousand%20Years%20-%20Christina%20Perri.mp3"
      />

      <Nav
        className="fixed bottom-0 left-0 right-0"
        homeRef={homeRef}
        locRef={locRef}
        galeryRef={galeryRef}
        storyRef={storyRef}
        RSVPRef={RSVPRef}
        GiftRev={GiftRev}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />

      <div ref={homeRef}>
        <Section1 />
      </div>

      <Break />

      <div ref={locRef}>
        <Section2 />
      </div>

      <div className="overflow-hidden" ref={storyRef}>
        <Story />
      </div>

      <div ref={galeryRef}>
        <Section3 />
      </div>

      <div ref={RSVPRef}>
        <RSVP />
      </div>

      <div className="overflow-hidden" ref={GiftRev}>
        <Gift />
      </div>
    </>
  );
}
