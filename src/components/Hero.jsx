import React from 'react'
import styles from '../style'
import TreeCard from './TreeCard'
import Icons from '../constants/Icons'
import { useEffect } from 'react'
import { heroQuote } from '../constants'
import { motion } from 'framer-motion'

const Hero = () => {

    const invertibleIcons = ["Nextjs"];
    const resizeIcons = ["Framer Motion"];

    useEffect(() => {
        const contactButton = document.getElementById('contactButton');
    
        const handleContactButtonClick = () => {
          const emailAddress = 'ikubarudev@gmail.com';
          const mailtoLink = 'mailto:' + emailAddress;
          window.location.href = mailtoLink;
        };
    
        if (contactButton) {
          contactButton.addEventListener('click', handleContactButtonClick);
        }
    
        // Cleanup the event listener when the component is unmounted
        return () => {
          if (contactButton) {
            contactButton.removeEventListener('click', handleContactButtonClick);
          }
        };
      }, []);

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
                        <a key={index} href={social.link}>
                            <img className={`h-[4vw] md:h-[2.5vw] invert ${styles.IconOpa70Effect}`}
                            src={social.icon}
                            alt={social.alt}
                            title={social.name}>
                            
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
                        <a key={index} className='flex items-center'>
                            <img className={`h-[4vw] md:h-[2.5vw] ${styles.IconScaleEffect}
                            ${invertibleIcons.includes(techStack.name) ? 'invert' : ''}
                            ${resizeIcons.includes(techStack.name) && 'h-[3.2vw] md:h-[2.1vw]'}`}
                            src={techStack.icon}
                            alt={techStack.alt}
                            title={techStack.name}>
                            
                            </img>
                        </a>
                    ))}
                </div>        
            </div>
        </section>
        {/* BUTTON */}
        <section className='h-[30vw] mt-[3vw] flex items-center justify-center w-[70vw] mx-auto flex-wrap'>
            <p className='text-[2.2vw] lg:text-[1.7vw] text-white text-center font-poppins w-full flex'>          
                &quot; {heroQuote.quote} &quot;
            </p>
            <motion.button className='hero-button bg-white w-[20vw] xl:w-[18vw] xl:h-[4vw] xl:text-[1.6vw] mr-[3vw]'
            id='contactButton'
            title='Email Me'
            whileHover={{backgroundColor: "#131313", color: 'rgb(255, 255, 255,)', borderWidth: 1, borderColor: 'rgb(255, 255, 255,)'}}
            transition={{duration: 0.2}}>
                    CONTACT ME
            </motion.button>
            <motion.button className='hero-button bg-primary border xl:w-[15vw] xl:h-[4vw] xl:text-[1.6vw] text-white border-white w-[15vw]'
            title='Go to Projects Page'
            whileHover={{backgroundColor: 'rgb(255, 255, 255,)', color: "#131313"}}
            transition={{duration: 0.2}}>
                    PROJECTS
            </motion.button>
        </section>
        
    </>
  )
}

export default Hero