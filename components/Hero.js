import Image from 'next/image'
import { useEffect, useState } from 'react';
import SideText from './SideText';
import HeroText from './HeroText';
import ColoredShapes from './ColoredShapes';
import { sideTexts, heroTexts } from '../data/hero';

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
        <div className="md:pt-24 relative h-hero">
            <div className="md:hidden pl-8 pt-8">
                <Image
                    src="/images/logo.png" 
                    height={100} 
                    width={79} 
                    alt="Logo Edia Services"
                    className="z-20"
                />
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-between mt-8 md:mt-12 mb-16 mr-16">
                <div className="flex flex-col justify-center w-64 text-xl z-20 mt-8 md:mt-0">
                    {sideTexts.map((text, index) =>
                        <SideText key={index} text={text} index={index}/>
                    )}
                </div>
                {/* <ColoredShapes/> */}
                <div className="block md:absolute md:top-48 h-48 z-30">
                    <HeroText text={heroTexts[0]} visible={!toggle}/>
                    <HeroText text={heroTexts[1]} visible={toggle}/>
                </div>
                <div className="hidden md:block">
                    <Image
                        src="/images/logo.png" 
                        height={300} 
                        width={235} 
                        alt="Logo Edia Services"
                        className="z-20"
                    />
                </div>
                
            </div>
            <div className="h-64 absolute -bottom-64 w-full">
                <div className="absolute box-white bg-white h-60 z-10"></div>
                <div className="absolute box-green bg-green h-full" style={{zIndex:5}}></div>
            </div>
        </div>
    )
}

export default Hero;