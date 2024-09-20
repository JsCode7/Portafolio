'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const router = useRouter();
  const hideH2 = router.pathname === '/';

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-center gap-8`}>
        <a href="/" className="w-24">
          <h2 className={`text-[24px] leading-[30px] text-white font-extrabold ${hideH2 ? 'hidden' : ''}`}>
            JsDev
          </h2>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
