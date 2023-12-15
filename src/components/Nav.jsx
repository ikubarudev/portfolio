import React from 'react'
import styles from '../style'
import menu from '../assets/icons/mobile-menu.svg'

const Nav = () => {
  return (
    <div className={`flex items-center justify-between pt-5 w-[80%] mx-auto 2xl:justify-center 2xl:gap-[60vw]`}>
        <div>
            <p className={`nav-text ml-side`}>ikubaru</p>
        </div>

        <div>
        <img src={menu} className={`invert h-10 md:hidden`} ></img>
            <ul className={`hidden mr-side md:flex`}>
                <li className='nav-text'>
                    HOME
                </li>
                <li className='nav-text'>
                    ABOUT
                </li>
                <li className='nav-text-project'>
                    {'{ PROJECT }'}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav