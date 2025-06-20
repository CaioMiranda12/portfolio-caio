'use client'

import AOS from "aos"
import { useEffect } from "react"
import "aos/dist/aos.css";

export function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })

    window.addEventListener("scroll", () => {
      AOS.refresh();
    });

    return () => window.removeEventListener("scroll", AOS.refresh);
  }, [])

  return null;
}