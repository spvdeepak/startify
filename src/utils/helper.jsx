import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Reveal = ({
  children,
  delay = 0.3,
  duration = 0.4,
  initialScale = 0.5,
  className,
  onClick = () => {},
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      onClick={onClick}
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {
          opacity: 0,
          scale: initialScale,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SlideFromLeft = ({
  children,
  delay = 0.3,
  duration = 0.4,
  className,
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {
          opacity: 0,
          x: "-100%",
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const SlideFromBottom = ({
  children,
  delay = 0.3,
  duration = 0.4,
  className,
  isInViewReq = true,
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInViewReq ? mainControls : "visible"}
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: "100%",
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const SlideFromRight = ({
  children,
  delay = 0.3,
  duration = 0.4,
  className,
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {
          opacity: 0,
          x: "100%",
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const SlideFromTop = ({ children, delay = 0.3, duration = 0.4, className }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {
          opacity: 0,
          y: "-100%",
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const StaggeredAnimation = ({
  children,
  index,
  delay = 0.3,
  duration = 0.4,
  className,
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  const fadeInAnimationsVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (index + 1) * delay,
      },
    }),
  };
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={mainControls}
      transition={{ duration }}
      variants={fadeInAnimationsVariants}
      custom={index}
    >
      {children}
    </motion.div>
  );
};

const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

const textVariant = (delay) => {
  return {
    hidden: {
      y: -20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  };
};

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export {
  ScrollToTop,
  fadeIn,
  slideIn,
  textVariant,
  Reveal,
  SlideFromLeft,
  SlideFromRight,
  SlideFromTop,
  SlideFromBottom,
  StaggeredAnimation,
};
