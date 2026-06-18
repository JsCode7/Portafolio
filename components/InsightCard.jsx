'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ slug, imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    initial="hidden"
    whileInView="show"
    className="gradient-05 p-6 rounded-[32px] border-[1px] border-[rgba(255,255,255,0.08)] flex md:flex-row flex-col gap-6 hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 group"
  >
    <div className="relative md:w-[270px] w-full h-[250px] overflow-hidden rounded-[24px]">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </div>

    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[32px] flex flex-col max-w-[650px]">
        <h4 className="font-bold lg:text-[32px] text-[24px] text-white leading-tight">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[18px] text-[14px] text-secondary-white leading-relaxed">
          {subtitle}
        </p>
      </div>

      <Link href={`/blog/${slug}`} className="lg:flex hidden items-center justify-center w-[80px] h-[80px] rounded-full bg-transparent border-[2px] border-[rgba(255,255,255,0.2)] hover:border-white hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 ml-4 group/arrow">
        <img
          src="arrow.svg"
          alt="arrow"
          className="w-[30%] h-[30%] object-contain group-hover/arrow:rotate-[-45deg] transition-transform duration-300"
        />
      </Link>
    </div>
  </motion.div>
);

export default InsightCard;
