'use client';

import { motion } from 'motion/react';

const BackgroundAnimation = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <motion.div
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
      className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{
        x: [0, -80, 0],
        y: [0, 120, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: 'linear',
      }}
      className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[150px]"
    />
  </div>
);

export default BackgroundAnimation;
