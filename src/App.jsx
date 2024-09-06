import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { motion, MotionConfig, useScroll, useTransform } from "framer-motion";
import Logo from "./components/Logo";
import Scroller from "./components/Scroller";
import Countdown from "./components/Countdown";
import Events from "./components/Events";
import EntryCard from "./components/EntryCard";
import Footer from "./components/Footer";

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div>
      <Navbar opacity={opacity} />
      <motion.div
        className="h-screen relative flex justify-center items-center -z-50 overflow-hidden"
        ref={containerRef}
      >
        <Logo containerRef={containerRef} />
        <Countdown />
      </motion.div>
      <motion.div className="w-full md:px-14 lg:px-44 px-4 py-16 pt-32 min-h-screen">
        <EntryCard />
      </motion.div>
      <Events />
      <Scroller />
      <Footer />
    </div>
  );
}
