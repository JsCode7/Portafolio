import { motion } from 'motion/react';
import Link from 'next/link';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '.';

const BlogContent = ({ imgPost, title, p1, p2, p3, p4, p5 }) => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={fadeIn('right', 'tween', 0.1, 1)}
      initial="hidden"
      whileInView="show"
      className="mb-10"
    >
      <Link href="/" className="flex items-center gap-2 text-white hover:text-secondary-white transition-colors group">
        <div className="w-[40px] h-[40px] rounded-full gradient-05 flex items-center justify-center border-[1px] border-[rgba(255,255,255,0.2)] group-hover:border-white">
          <img
            src="/arrow.svg"
            alt="back"
            className="w-[15px] h-[15px] object-contain rotate-180"
          />
        </div>
        <span className="font-medium text-[16px]">Volver al inicio</span>
      </Link>
    </motion.div>

    <div className="relative w-full h-[450px] sm:h-[400px] overflow-hidden rounded-[32px] mb-12 shadow-2xl border-[1px] border-[rgba(255,255,255,0.1)]">
      <img
        src={imgPost}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
        <TypingText title="| Blog personal" />
        <h1 className="font-bold md:text-[64px] text-[40px] text-white leading-tight mt-2">
          {title}
        </h1>
      </div>
    </div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="gradient-05 p-8 md:p-16 rounded-[40px] border-[1px] border-[rgba(255,255,255,0.08)] flex flex-col gap-8 text-secondary-white text-[18px] md:text-[22px] leading-[1.8] font-normal shadow-inner">
        <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}>
          {p1}
        </motion.p>
        <motion.p variants={fadeIn('up', 'tween', 0.3, 1)}>
          {p2}
        </motion.p>
        <motion.p variants={fadeIn('up', 'tween', 0.4, 1)}>
          {p3}
        </motion.p>
        <motion.p variants={fadeIn('up', 'tween', 0.5, 1)}>
          {p4}
        </motion.p>
        <motion.p variants={fadeIn('up', 'tween', 0.6, 1)}>
          {p5}
        </motion.p>
      </div>
    </motion.div>
  </section>
);

export default BlogContent;
