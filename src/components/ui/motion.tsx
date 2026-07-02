'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring, type HTMLMotionProps, type Variants } from 'framer-motion';
import { ReactNode, useRef, useCallback } from 'react';

const luxuryEase = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: luxuryEase } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: luxuryEase } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: luxuryEase } },
};

export function FadeUp({ children, delay = 0, className, ...props }: HTMLMotionProps<'div'> & { delay?: number; children?: ReactNode }) {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ delay }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className, ...props }: HTMLMotionProps<'div'> & { delay?: number; children?: ReactNode }) {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeIn} transition={{ delay }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className, ...props }: HTMLMotionProps<'div'> & { delay?: number; children?: ReactNode }) {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={scaleIn} transition={{ delay }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function SlideInRight({ children, delay = 0, className, ...props }: HTMLMotionProps<'div'> & { delay?: number; children?: ReactNode }) {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={slideInRight} transition={{ delay }} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className, staggerDelay = 0.1, ...props }: HTMLMotionProps<'div'> & { children?: ReactNode; staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: staggerDelay } } }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, ...props }: HTMLMotionProps<'div'> & { children?: ReactNode }) {
  return (
    <motion.div variants={fadeUp} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary-500 via-secondary-300 to-secondary-500 z-[9999] origin-left"
      style={{ scaleX }}
    />
  );
}
