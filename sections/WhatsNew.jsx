'use client';

import { motion } from 'motion/react';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { techCategories } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Expertise Técnico" textStyles="text-center" />
      <TitleText title={<>Mi Stack Tecnológico & Ecosistema</>} textStyles="text-center" />

      {/* Bento Grid layout */}
      <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
            className="glassmorphism p-6 rounded-[28px] border-[1px] border-[rgba(255,255,255,0.08)] flex flex-col justify-between hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300 relative group"
          >
            {/* Soft decorative glow background in cards */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[50px] h-[50px] rounded-[18px] bg-[rgba(255,255,255,0.06)] flex items-center justify-center border-[1px] border-[rgba(255,255,255,0.1)]">
                  <img
                    src={category.icon}
                    alt={category.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h3 className="font-bold text-[20px] text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 rounded-[16px] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 border-[1px] border-[rgba(255,255,255,0.04)]"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-5 h-5 object-contain"
                      />
                      <span className="text-[15px] font-medium text-[#E0E0E0]">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#B0B0B0] uppercase tracking-wider bg-[rgba(255,255,255,0.08)] px-2 py-0.5 rounded-[8px] border-[1px] border-[rgba(255,255,255,0.05)]">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default WhatsNew;
