'use client';

import { motion } from 'motion/react';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { insights } from '../constants';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="absolute w-[300px] h-[300px] gradient-02 z-0 -top-[10%] left-[10%] opacity-50" />
    <div className="absolute w-[400px] h-[400px] gradient-04 z-0 bottom-[10%] right-[5%] opacity-30" />
    
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Blog personal" textStyles="text-center" />
      <TitleText title="Lo que pienso, creo y otras locuras" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...insight} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
