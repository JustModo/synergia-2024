import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="overflow-hidden tracking-[-2px] leading[0.8] m-0 flex flex-nowrap">
      <motion.div className="font-semibold uppercase text-6xl flex whitespace-nowrap flex-nowrap" style={{ x }}>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
        <span className="block mr-[30px]">{children} </span>
      </motion.div>
    </div>
  );
}

export default function Scroller() {
  return (
    <section className="relative pt-[85vh] pb-[85vh]">
      <ParallaxText baseVelocity={-2}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={2}>Scroll velocity</ParallaxText>
    </section>
  );
}
