'use client';

import { motion } from 'motion/react';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer, planetVariants } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Acerca de mi" textStyles="text-center" />

      <div className="mt-[40px] flex lg:flex-row flex-col gap-12 items-center">
        {/* Left: Planet Visual (to balance text) */}
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/planet-02.png"
            alt="planet-about"
            className="w-[80%] h-[80%] object-contain"
          />
        </motion.div>

        {/* Right: Personal Story */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-1 flex flex-col justify-center text-secondary-white font-normal sm:text-[20px] text-[16px] leading-[36px]"
        >
          <p className="mb-6">
            ¡Hola! Soy <span className="font-extrabold text-white">José Daniel Sánchez</span>, Ingeniero de Software y Desarrollador Fullstack comprometido con el diseño estratégico del software.
          </p>
          <p className="mb-6">
            Encuentro mi mayor motivación en conceptualizar el problema y diseñar la arquitectura para estructurar flujos lógicos eficientes.
          </p>
          <p className="mb-6">
            Me especializo en <span className="font-extrabold text-white">Arquitectura Hexagonal</span> y <span className="font-extrabold text-white">Clean Architecture</span>, garantizando sistemas escalables y fáciles de mantener.
          </p>
          <p>
            ¡Si te interesa conocer más de mi o de mis trabajos, sigue explorando hacia abajo!
          </p>
        </motion.div>
      </div>


      <motion.img
        variants={fadeIn('up', 'tween', 0.6, 1)}
        src="/arrow-down.svg"
        alt="Flecha hacia abajo"
        className="w-[18px] h-[28px] object-contain mt-[40px] mx-auto"
      />
    </motion.div>
  </section>
);

export default About;
