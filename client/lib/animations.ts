import { Variants } from 'framer-motion';

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

export const scaleIn: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const slideIn = (direction: 'left' | 'right' = 'left', delay: number = 0): Variants => ({
  hidden: {
    x: direction === 'left' ? -100 : 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const textVariant = (delay: number = 0): Variants => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const zoomIn = (delay: number = 0): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      delay,
      duration: 0.5,
    },
  },
});

export const rotateIn: Variants = {
  hidden: {
    rotate: -180,
    opacity: 0,
  },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: 'easeInOut',
  },
};

export const tapScale = {
  scale: 0.95,
};

export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.03,
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};
