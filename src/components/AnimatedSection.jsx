import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

/**
 * Reusable scroll-reveal wrapper with optional scale, fade, yOffset, and staggered children.
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  yOffset = 40,
  scale = false,
  stagger = false,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger ? 0.15 : 0,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      scale: scale ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={stagger ? parentVariants : childVariants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {stagger
        ? // Wrap children in motion.divs when staggering
          Array.isArray(children)
            ? children.map((child, i) => (
                <motion.div key={i} variants={childVariants}>
                  {child}
                </motion.div>
              ))
            : <motion.div variants={childVariants}>{children}</motion.div>
        : children}
    </motion.div>
  );
}
