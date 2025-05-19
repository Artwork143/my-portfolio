import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedWrapper = ({ children, direction = "left" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="overflow-hidden"
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div variants={childVariants} key={index}>
            {child}
          </motion.div>
        ))
      ) : (
        // If single child, assume it's a fragment or container with motion children
        <motion.div variants={childVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
};

export default AnimatedWrapper;
