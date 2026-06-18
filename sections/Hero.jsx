'use client';

import { motion } from 'motion/react';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 mb-16">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Js
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>eveloper</h1>
        </motion.div>
        
        <motion.div
          variants={textVariant(1.3)}
          className="mt-4 flex justify-center z-20"
        >
          <a
            href="https://drive.google.com/file/d/1JoCIqfqFgl4npf3uFwusSAyT6_b2LDPD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25618B] hover:bg-[#2d76a9] transition-all hover:scale-105 py-3 px-6 rounded-[32px] text-white font-bold text-[16px] md:text-[18px] shadow-lg"
          >
            <img src="/downloadcv.svg" alt="download" className="w-5 h-5 object-contain" />
            <span>Descargar CV</span>
          </a>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[12px] -mt-[8px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[20px]" />
        <img
          src="/cover.png"
          alt="cover"
          className="w-full sm:h-[450px] h-[300px] object-cover rounded-tl-[140px] z-[10] relative"
        />
        <a href="#explorar">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-[10]">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
