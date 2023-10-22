"use client";
import Navbar from "@/components/navbar";
import Toogle from "@/components/music-toogle";
import Break from "@/components/sec-break";
import Section1 from "@/components/sec1-home";
import Section2 from "@/components/sec2-loc";
import Section3 from "@/components/sec3-story";
import RSVP from "@/components/sec4-rsvp";
import { useEffect, useRef, useState } from "react";
import Music from "@/components/music";

export default function Home() {
  const homeRef = useRef(null);
  const locRef = useRef(null);
  const galeryRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    setIsPlaying(true);
  }, []);
  return (
    <>
      <Music
        isPlaying={isPlaying}
        src="/A%20Thousand%20Years%20-%20Christina%20Perri.mp3"
      />

      <div
        className="fixed rounded-full  w-11 h-11 flex items-center justify-center border-opacity-50 border-2 rounded-full p-2 mix-blend-difference"
        style={{
          bottom: "2rem",
          right: "2rem",
          zIndex: "7",
          lineHeight: 0,
        }}
      >
        <Toogle setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
      </div>

      <div className="sticky top-0 z-10">
        <Navbar homeRef={homeRef} locRef={locRef} galeryRef={galeryRef} />
      </div>

      <div style={{ marginTop: "-4rem" }} ref={homeRef}>
        <Section1 />
      </div>

      <Break />

      <div ref={locRef}>
        <Section2 />
      </div>

      <div ref={galeryRef}>
        <Section3 />
      </div>

      <RSVP />
    </>
  );
}
