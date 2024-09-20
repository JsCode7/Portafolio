'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { BlogContent } from '../components';

const BodyBlog = ({ post }) => (
  <section className="relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="mt-[50px] flex flex-col gap-[30px]">
        <BlogContent {...post} />
      </div>
    </motion.div>
  </section>
);

export default BodyBlog;
