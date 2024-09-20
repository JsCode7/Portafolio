import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
// eslint-disable-next-line import/no-cycle
import { TitleText, TypingText } from '.';

const BlogContent = ({ imgPost, title, p1, p2, p3, p4, p5 }) => (
  <section className={`${styles.paddings} relative z-10`}>
    <img
      src={imgPost}
      alt="cover"
      className="w-full h-[350px] sm:h-[300px] object-cover z-[10] relative rounded-lg mb-12"
    />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Blog personal" textStyles="text-center" />
      <TitleText
        title={title}
        textStyles="text-center"
      />
      <div className="mt-[40px] flex flex-col text-white">
        {p1}
      </div>
      <div className="mt-[40px] flex flex-col text-white">
        {p2}
      </div>
      <div className="mt-[40px] flex flex-col text-white">
        {p3}
      </div>
      <div className="mt-[40px] flex flex-col text-white">
        {p4}
      </div>
      <div className="mt-[40px] flex flex-col text-white">
        {p5}
      </div>
    </motion.div>
  </section>
);

export default BlogContent;
