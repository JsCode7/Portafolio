'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { BlogContent } from '../components';
import { insights } from '../constants';

const BodyBlog = () => (
  <section className="relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <BlogContent key={`insight-${index}`} {...insight} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default BodyBlog;
