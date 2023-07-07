'use client';
import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import{ExplorerCard,TitleText,TypingText} from '../components'
import {explorerWorlds} from '../constants'
const Explore = () => (
  <section className={`${styles.paddings}`}
  id="explore">
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false,amount:0}}
    >

    </motion.div>
    Explore section
  </section>
);

export default Explore;
