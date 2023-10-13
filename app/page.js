"use client";
import Header from "@/components/head";
import Navbar from "@/components/navbar";
import Break from "@/components/sec-break";
import Section1 from "@/components/sec1-home";
import Section2 from "@/components/sec2-loc";
import Section3 from "@/components/sec3-story";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef(null);
  const locRef = useRef(null);
  const galeryRef = useRef(null);

  return (
    <>
      <Header />

      <div className="sticky top-0 z-10">
        <Navbar homeRef={homeRef} locRef={locRef} galeryRef={galeryRef} />
      </div>

      <div style={{ marginTop: "-5.5rem" }} ref={homeRef}>
        <Section1 />
      </div>

      <Break />

      <div ref={locRef}>
        <Section2 />
      </div>

      <div ref={galeryRef}>
        <Section3 />
      </div>
    </>
  );
}
