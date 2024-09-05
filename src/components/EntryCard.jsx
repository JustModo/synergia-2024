import { motion, MotionConfig } from "framer-motion";

export default function EntryCard() {
  return (
    <MotionConfig
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="flex flex-col items-start text-start pb-32">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-5xl max-w-3xl w-4/5 text-3xl font-normal"
          style={{ lineHeight: 1.2 }}
        >
          A platform where brilliant minds meet to redefine the future
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-2xl max-w-xl w-4/5 text-lg py-6 font-light text-zinc-300"
        >
          Experience thrilling aerial displays soaring high in the sky,
          promising an adventure of excitement and breathtaking moments at the
          Air Show!
        </motion.p>
      </motion.div>

      <motion.div className="flex flex-col items-end text-end py-32">
        <motion.h1
          className="md:text-5xl max-w-3xl w-4/5 text-3xl font-normal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ lineHeight: 1.2 }}
        >
          Collaboration, creativity, and the collective pursuit of
          groundbreaking ideas
        </motion.h1>
        <motion.p
          className="md:text-2xl max-w-xl w-4/5 text-lg py-6 font-light text-zinc-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore project funding options at Synergia, a dynamic platform
          offering exciting opportunities to support and enhance your innovative
          projects.
        </motion.p>
      </motion.div>

      <motion.div className="flex flex-col items-center text-center py-32">
        <motion.h1
          className="md:text-5xl max-w-3xl w-4/5 text-3xl font-normal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ lineHeight: 1.2 }}
        >
          Tech insights galore during Synergia's Tech Talk
        </motion.h1>
        <motion.p
          className="md:text-2xl max-w-xl w-4/5 text-lg py-6 font-light text-zinc-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience the thrill of innovation, the spirit of entrepreneurship,
          and the joy of discovery at Synergia.
        </motion.p>
      </motion.div>
    </MotionConfig>
  );
}
