'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[54px] text-[34px] text-white">
          ¿Quieres saber más?
        </h4>
        <a href="https://drive.google.com/file/d/1ROiBXK2m5pXbLA39yuLeuLFIkf9uneUC/view?usp=share_link" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]" target="_blank" rel="noopener noreferrer">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">Descargar CV</span>
        </a>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">JsDev</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright - 2023 JsDev - All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.urlreal} target="_blank" rel="noopener noreferrer">
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
