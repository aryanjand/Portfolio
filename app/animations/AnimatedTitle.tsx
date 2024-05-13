import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedTitleProps = {
  text: string;
  className: string;
  delay?: number;
};

export default function AnimatedTitle({
  text,
  className,
}: AnimatedTitleProps) {

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  return (
    <h2 aria-label={text} role="heading" className={className}>
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {" "}{word} {index !== text.length - 1 ? " " : null}
          </motion.span>
        );
      })}
    </h2>
  );
}
