import React from 'react'
import { motion } from 'framer-motion'
import styles from '../style'
import tc1 from '../assets/img/treecard-1.png'
import tc2 from '../assets/img/treecard-2.png'
import tc3 from '../assets/img/treecard-3.png'
import tc4 from '../assets/img/treecard-4.png'

const TreeCard = () => {
  return (
    <div className={`flex items-center justify-between w-[80%] mx-auto 2xl:justify-center 2xl:gap-24`}>
        <motion.div whileHover={{scale: 1.03}} transition={{type: 'tween', duration: 0.2}} className={`${styles.treeCard}`}>
            <img src={tc1} className={`${styles.treeCardImg} treecard-grayscale`}></img>
        </motion.div>
        <motion.div whileHover={{scale: 1.03}} transition={{type: 'tween', duration: 0.2}} className={`${styles.treeCard}`}>
            <img src={tc2} className={`${styles.treeCardImg} treecard-sepia`}></img>
        </motion.div>
        <motion.div whileHover={{scale: 1.03}} transition={{type: 'tween', duration: 0.2}} className={`${styles.treeCard}`}>
            <img src={tc3} className={`${styles.treeCardImg} treecard-brightness`}></img>
        </motion.div>
        <motion.div whileHover={{scale: 1.03}} transition={{type: 'tween', duration: 0.2}} className={`${styles.treeCard}`}>
            <img src={tc4} className={`${styles.treeCardImg} treecard-hue`}></img>
        </motion.div>
    </div>
  )
}

export default TreeCard