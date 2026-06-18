'use client';

import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const pathname = usePathname();
  const hideH2 = pathname === '/';

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-center gap-8`}>
        <Link href="/" className="w-24 z-50">
          <h2 className={`text-[24px] leading-[30px] text-white font-extrabold ${hideH2 ? 'hidden' : ''}`}>
            JsDev
          </h2>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
