"use client"

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import GetInTouch from "@/components/sections/GetInTouch";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useGSAP(
    () => {
      gsap.fromTo("#about",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top 75%",
            once: true,
          }
        },
      )

      gsap.fromTo("#skills",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "#skills",
            start: "top 75%",
            once: true,
          }
        },
      )

      gsap.fromTo("#work",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "#work",
            start: "top 75%",
            once: true,
          }
        },
      )

      gsap.fromTo("#get-in-touch",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "#work",
            start: "top 75%",
            once: true,
          }
        },
      )
    }
  );

  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <GetInTouch />
      </main>
    </>
  );
}
