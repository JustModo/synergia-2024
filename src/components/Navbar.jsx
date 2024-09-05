import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";

export default function Navbar({ opacity }) {
  return (
    <motion.div
      className={`w-full text-xl text-zinc-400 fixed top-0 h-32 bg-transparent bg-gradient-to-b from-black via-black to-transparent overflow-hidden p-6 px-8 flex flex-grow-0 z-50 items-center justify-around `}
      style={{ opacity: opacity }}
    >
      <h1 className="cursor-pointer lg:block hidden">ABOUT</h1>
      <h1 className="cursor-pointer lg:block hidden">EVENTS</h1>
      <img src={Logo} className="md:w-56 w-40"/>
      <h1 className="cursor-pointer lg:block hidden">GALLERY</h1>
      <h1 className="cursor-pointer lg:block hidden">BENEFITS</h1>
    </motion.div>
  );
}
