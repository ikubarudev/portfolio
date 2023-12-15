import React from 'react'
import styles from '../style'
import tc1 from '../assets/img/treecard-1.png'
import tc2 from '../assets/img/treecard-2.png'
import tc3 from '../assets/img/treecard-3.png'
import tc4 from '../assets/img/treecard-4.png'

const TreeCard = () => {
  return (
    <div className={`flex items-center justify-between w-[80%] mx-auto 2xl:justify-center 2xl:gap-24`}>
        <div className={`${styles.treeCard}`}>
            <img src={tc1} className={`${styles.treeCardImg} treecard-grayscale`}></img>
        </div>
        <div className={`${styles.treeCard}`}>
            <img src={tc2} className={`${styles.treeCardImg} treecard-sepia`}></img>
        </div>
        <div className={`${styles.treeCard}`}>
            <img src={tc3} className={`${styles.treeCardImg} treecard-brightness`}></img>
        </div>
        <div className={`${styles.treeCard}`}>
            <img src={tc4} className={`${styles.treeCardImg} treecard-hue`}></img>
        </div>
    </div>
  )
}

export default TreeCard