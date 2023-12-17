import React from 'react'
import styles from '../style'
import menu from '../assets/icons/mobile-menu.svg'
import { motion } from 'framer-motion'

const Nav = () => {
  return (
    <div className={`flex items-center justify-between pt-5 w-[80%] mx-auto 2xl:justify-center 2xl:gap-[60vw]`}>
        <div>
            <p className={`nav-text ml-side`}>ikubaru</p>
        </div>

        <div>
        <img src={menu} className={`invert h-10 md:hidden`} ></img>
            <ul className={`hidden mr-side md:flex`}>
                <motion.li className='nav-text'
                whileHover={{borderBottomColor: 'rgb(255, 255, 255,)'}}
                transition={{duration: 0.2}}>
                    HOME
                </motion.li>
                <motion.li className='nav-text'
                whileHover={{borderBottomColor: 'rgb(255, 255, 255,)'}}
                transition={{duration: 0.2}}>
                    ABOUT
                </motion.li>
                <motion.li className='nav-text-project'
                whileHover={{borderBottomColor: 'rgb(255, 255, 255,)'}}
                transition={{duration: 0.2}}>
                    {'{ PROJECT }'}
                </motion.li>
            </ul>
        </div>
    </div>
  )
}

export default Nav