import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedWords2Props = {
  title: string;
  style: string;
};

const AnimatedWords2: React.FC<AnimatedWords2Props> = ({ title, style }) => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
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

  const wordAnimation2 = {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        // delay: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 0.8,
      },
    },
  };

  return (
    <h3 aria-label={title} role="heading">
      <motion.span className={style} ref={ref}>
        <motion.div
          initial="initial"
          animate={ctrls}
          className="flex items-center justify-center last:-mr-10"
          transition={{
            delayChildren: 0.25,
            staggerChildren: 0.05,
          }}
        >
          <motion.span
            className="-mb-4 inline-block pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
            variants={wordAnimation2}
          >
            {title}
          </motion.span>
        </motion.div>
      </motion.span>
    </h3>
  );
};

export default AnimatedWords2;
