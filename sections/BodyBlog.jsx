'use client';

import { motion } from 'motion/react';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { BlogContent } from '../components';

const BodyBlog = ({ post }) => (
  <section className="relative z-10 py-12">
    <div className="absolute w-[400px] h-[400px] gradient-03 z-0 -top-[5%] left-[5%] opacity-40" />
    <div className="absolute w-[300px] h-[300px] gradient-02 z-0 bottom-[10%] right-[10%] opacity-30" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex flex-col gap-[30px] relative z-10">
        <BlogContent {...post} />
      </div>
    </motion.div>
  </section>
);

export default BodyBlog;
