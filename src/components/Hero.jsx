import React from 'react'
import styles from '../style'
import TreeCard from './TreeCard'
import Icons from './Icons'

const Hero = () => {

    const invertibleIcons = ["Nextjs"];

return (
    <>
        <section className={`pt-[8vw] pb-[8vw] w-[80%] mx-auto`}>
            <h2 className={`${styles.heroHeaderSize} hero-header 2xl:text-center 2xl:mr-[10vw]`}>
                WEB DEVELOPER
            </h2>
            <div className={`text-right 2xl:text-center 2xl:ml-[20vw] ml`}>
                <p className={`${styles.heroHeaderSize} hero-and inline mr-5 xl:mr-10`}>
                    AND
                </p>
                <h2 className={`${styles.heroHeaderSize} hero-header inline`}>
                    DESIGNER
                </h2>
            </div>
        </section>
        <TreeCard />
        <section className='flex flex-col w-[80%] mx-auto mt-[5vw]'>
            <div className={`font-poppins font-bold text-white`}>
                <h2 className='text-[5vw] xl:text-[70px]'>IQBAL ABDUL AZIS</h2>
                <h3 className='text-[2.5vw] xl:text-[35px]'>イクバル  アブドゥル  アジス</h3>
            </div>
            {/* SOCIALS */}
            <div className='flex items-center justify-between mt-[1.5vw]'>
                <div className='flex gap-x-[1vw]'>
                    {Icons.socials.map((social, index) => (
                        <a href={social.link}>
                            <img key={index} className={`h-[4vw] md:h-[2.5vw] invert ${styles.IconOpa70Effect}`} src={social.icon} alt={social.name}>
                            
                            </img>
                        </a>
                    ))}
                </div>
                <div className='border-t-[0.2vw] flex-grow mx-[2vw] border-white'></div>
                <p className='text-poppins text-[2.5vw] md:text-[1.8vw] text-white font-bold'>
                    SOCIALS
                </p>
            </div>
            {/* TECH STACK */}
            <div className='flex items-center justify-between mt-[1.5vw]'>
                <p className='flex text-poppins text-[2.5vw] md:text-[1.8vw] text-white font-bold'>
                    TECH STACK
                </p>
                <div className='border-t-[0.2vw] flex-grow mx-[2vw] border-white'></div>        
                <div className='flex gap-x-[1vw]'>
                    {Icons.techStacks.map((techStack, index) => (
                        <a>
                            <img key={index} className={`h-[4vw] md:h-[2.5vw] ${styles.IconScaleEffect} ${invertibleIcons.includes(techStack.name) ? 'invert' : ''}`} src={techStack.icon} alt={techStack.name}>
                            
                            </img>
                        </a>
                    ))}
                </div>        
            </div>
        </section>
        
    </>
  )
}

export default Hero