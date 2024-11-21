'use client';

import { motion } from 'framer-motion';

export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#FF6B6B]/20 to-[#4ECDC4]/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          top: '10%',
          left: '20%',
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#4ECDC4]/20 to-[#45B7D1]/20 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          top: '40%',
          right: '15%',
        }}
      />
    </div>
  );
}