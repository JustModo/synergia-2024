import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <div className="w-full flex md:flex-row flex-col p-16 gap-10">
      <motion.div
        className="w-full flex md:items-start items-center justify-center gap-5 flex-col p-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={Logo} className="max-w-sm" />
        <h2 className="max-w-md text-xl px-2">
          SAHYADRI CAMPUS, ADYAR, MANGALURU, KARNATAKA, INDIA - 575007
        </h2>
      </motion.div>
      <motion.div
        className="w-full flex flex-col justify-around p-4 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col justify-start gap-5 max-w-md w-full md:items-end md:text-end items-center text-center">
          <div>
            <h1 className="md:text-xl text-lg font-bold pb-2">
              FOR ALL YOUR QUERIES
            </h1>
            <p>TEJAS : +91 72597 27460</p>
          </div>
          <div>
            <h1 className="md:text-xl text-lg font-bold pb-2">
              OR WRITE TO US
            </h1>
            <p>SYNERGIA@SAHYADRI.EDU.IN</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
