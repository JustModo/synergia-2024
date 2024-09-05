import React, { Fragment } from "react";
import TitleHeader from "./TitleHeader";
import DevhostLogo from "./DevhostLogo";
import DEVHOST from "../assets/devhostbanner.png";
import SSTH from "../assets/ssthbanner.png";
import SRC from "../assets/srcbanner.png";
import { motion } from "framer-motion";
import SSTHLogo from "./SSTHLogo";

export default function Events() {
  return (
    <Fragment>
      <motion.div className="w-full md:px-14 lg:px-44 px-4 py-16 min-h-screen flex flex-col justify-center">
        <TitleHeader
          gradientColors={["#ef32d9", "", "#89fffd"]}
          title={"SSTH"}
        />
        <SSTHLogo />
        <div className="flex items-center justify-end flex-col md:flex-row">
          <div className="max-w-md pb-12 flex items-center justify-between w-4/5">
            <motion.img
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 8,
                mass: 0.5,
                duration: 0.5,
              }}
              src={SSTH}
              className="h-full"
            />
          </div>
          <div className="flex flex-col md:items-end md:text-end items-center text-center w-full bg-g">
            <motion.h1
              className="md:text-5xl max-w-3xl w-4/5 text-3xl font-normal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ lineHeight: 1.2 }}
            >
              Innovate Today. Lead the future.
            </motion.h1>
            <motion.p
              className="md:text-2xl max-w-xl w-4/5 text-lg py-6 font-light text-zinc-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              A tech-innovation nexus where young visionaries explore and devise
              solutions.
            </motion.p>
          </div>
        </div>
      </motion.div>
      <motion.div className="w-full md:px-14 lg:px-44 px-4 py-16 min-h-screen flex flex-col justify-center">
        <TitleHeader
          gradientColors={["#FDFC47", "", "#24fe41"]}
          title={"DEVHOST"}
        />
        <DevhostLogo />
        <div className="flex items-center justify-end flex-col-reverse md:flex-row">
          <div className="flex flex-col md:items-start md:text-start items-center text-center w-full bg-g">
            <motion.h1
              className="md:text-5xl max-w-3xl w-4/5 text-3xl font-normal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ lineHeight: 1.2 }}
            >
              Sparking innovation. Igniting Curiosity.
            </motion.h1>
            <motion.p
              className="md:text-2xl max-w-xl w-4/5 text-lg py-6 font-light text-zinc-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              A technical extravaganza featuring a 24-Hour hackathon and an
              electrifying esports tournament.
            </motion.p>
          </div>
          <div className="max-w-md pb-12  flex items-center justify-between w-4/5">
            <motion.img
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 8,
                mass: 0.5,
                duration: 0.5,
              }}
              src={DEVHOST}
              className="h-full"
            />
          </div>
        </div>
      </motion.div>
      <motion.div className="w-full md:px-14 lg:px-44 px-4 py-16 min-h-screen">
        <TitleHeader
          gradientColors={["#833ab4", "#fd1d1d", "#fcb045"]}
          title={"SRC"}
        />
        <div className="flex items-center justify-end flex-col md:flex-row">
          <div className="max-w-md pb-12  flex items-center justify-between w-4/5">
            <motion.img
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 8,
                mass: 0.5,
                duration: 0.5,
              }}
              src={SRC}
              className="h-full"
            />
          </div>
          <div className="flex flex-col md:items-end md:text-end items-center text-center w-full bg-g">
            <motion.h1
              className="md:text-5xl max-w-3xl w-4/5 text-3xl font-normal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ lineHeight: 1.2 }}
            >
              Engineer. Compete. Dominate.
            </motion.h1>
            <motion.p
              className="md:text-2xl max-w-xl w-4/5 text-lg py-6 font-light text-zinc-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              A dynamic and challenging environment featuring two vibrant and
              thrilling competitions.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
}
