import Image from 'next/image'
import { useEffect, useState } from 'react';
import SideText from './SideText';
import HeroText from './HeroText';
import { motion } from "framer-motion"

const sideTexts = [
    "Compétences en",
    "Automatisme",
    "Spécifique",
    "& expérimenté"
]

const heroTexts = [
    "La sécurité avant tout",
    "Si il y a un automate, on peut vous aider"
]

const Hero = () => {
    const [toggle, setToggle] = useState(false)
    let timerInterval = null

    useEffect(() => {
        timerInterval = setInterval(() => {
            clearInterval(timerInterval)
            setToggle(!toggle)
          }, 2000);
    })

    return (
        <>
        <div className="pt-8 pb-48 relative">
            <div className="flex justify-between mt-12 mb-16 mr-16">
                <div className="flex flex-col justify-center w-64 text-xl">
                    {sideTexts.map((text, index) =>
                        <SideText key={index} text={text} index={index}/>
                    )}
                </div>
                <div className="relative px-48">
                    <motion.div 
                    animate={{ rotate: 360, x: [0, -100, 0] , y: [0, 20, 0] }}
                    transition={{ ease: "linear", duration: 70, repeat: Infinity }} 
                    className="absolute top-4 right-4 bg-yellow bg-opacity-60 hero-shape w-96 h-96 z-30">
                    </motion.div>
                    <motion.div 
                    animate={{ rotate: 360, x: [0, 30, 0] , y: [0, 15, 0] }}
                    transition={{ ease: "linear", duration: 110, repeat: Infinity }} 
                    className="absolute -right-16 bg-yellow bg-opacity-80 hero-shape w-96 h-96 z-30 transform rotate-90">
                    </motion.div>
                </div>
                <div className="absolute top-48 h-48 z-40">
                    <HeroText text={heroTexts[0]} visible={!toggle}/>
                    <HeroText text={heroTexts[1]} visible={toggle}/>
                </div>
                <Image
                    src="/images/logo.png" 
                    height={300} 
                    width={235} 
                    alt="Logo Edia Services"
                    className="z-30"
                />
                
            </div>
            <div className="h-64 absolute bottom-0 w-full">
                <div className="absolute box-white bg-white h-60 z-20"></div>
                <div className="absolute box-green bg-green h-full z-10"></div>
                <div className="absolute box-blue bg-lightBlue h-full w-full z-0"></div>
            </div>
        </div>
        
        </>
    )
}

export default Hero;