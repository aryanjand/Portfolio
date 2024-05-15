import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedWordsProps = {
  title: string;
  style: string;
  hidden?: boolean;
};

const AnimatedWords: React.FC<AnimatedWordsProps> = ({
  title,
  style,
  hidden = false,
}) => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("animate");
    }
    if (!inView) {
      ctrls.start("initial");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    initial: {
      opacity: 0,
      y: 150,
      // y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 6,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 1,
      },
    },
  };

  const staggerChildren = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <h1
      aria-label={title}
      role="heading"
      className={`${hidden ? "hidden md:block" : ""}`}
    >
      <motion.span
        ref={ref}
        className="flex text-center font-extrabold text-[#e4ded7]"
      >
        <motion.div
          initial="initial"
          animate={ctrls}
          transition={{
            delayChildren: 0.25,
            staggerChildren: 0.05,
          }}
          className="flex items-center justify-center overflow-hidden"
        >
          <motion.span variants={wordAnimation} className={style}>
            {title}
          </motion.span>
        </motion.div>
      </motion.span>
    </h1>
  );
};

export default AnimatedWords;
