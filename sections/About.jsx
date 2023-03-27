'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Acerca de mi"
        textStyles="text-center"
      />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[24px] text-[18px] text-center text-secondary-white"
      >
        ¡Hola! Bienvenid@ a mi espacio. Mi nombre es <span className="font-extrabold text-white">Jose Daniel Sanchez, </span> actualmente soy <span className="font-extrabold text-white"> Desarrollador de Frontend. </span> Trabajo en una empresa chilena de marketing y desarrollo de software llamada <a href="https://tactech.cl/" target="_blank" rel="noopener noreferrer" className="font-extrabold text-white"> Tactech. </a>
        Estudié de manera autodidacta desde el 2016 apróximadamente, y en el 2021 entré a la carrera de Analista programador en el <a href="https://www.cftsanagustin.cl/" target="_blank" rel="noopener noreferrer" className="font-extrabold text-white"> CFT San Agustín de Cauquenes. </a> Actualmente estoy estudiando y aprendiendo React, NextJS y Tailwind, esta página es una muestra de ello. Este gusto por la programación y el desarollo nació con el <span className="font-extrabold text-white">amor por la astronomía, los datos, la lógicidad, las matemáticas. </span> Así que por eso, este es mi espacio.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="Flecha hacia abajo"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
