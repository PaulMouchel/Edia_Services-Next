import Image from 'next/image'
import SideText from './SideText';
import { sideTexts } from '../data/hero';
import bg from '../public/images/shapeBg.svg'

const Hero = () => {

    const knowMore = () => {
        const el = document.getElementById('intro')
        const position = el.offsetTop
        window.scrollTo({ top: position, behavior: 'smooth' })
    }

    return (
        <div className="relative bg-gray-100 flex flex-col justify-center h-[780px]" >
            <Image
                src={bg} 
                layout='fill'
                objectFit='cover'
                alt="Arrière plan"
            />

            <div className="absolute top-8 lg:right-8 left-8 lg:left-auto">
                <div className='h-32 lg:h-44 w-32 relative'>
                    <Image
                        src="/images/logo.png" 
                        layout="fill"
                        objectFit='contain'
                        alt="Logo Edia Services"
                        className="z-20"
                    />
                </div>
            </div>
            <div className='w-screen relative h-72 flex justify-center xl:items-center flex-col-reverse gap-16'>
                <div className="xl:absolute left-0 flex flex-col justify-center w-64 text-xl z-20 mt-8 md:mt-0">
                    {sideTexts.map((text, index) =>
                        <SideText key={index} text={text} index={index}/>
                    )}
                </div>
                <div className='flex flex-col items-center xl:block '>
                    <div>
                        <h1 className='text-6xl font-bold'><span className='text-green'>EDIA</span> <span className='text-blue'>Services</span></h1>
                        <p className='text-xl font-bold'>Prestations de services en automatismes</p>
                        <div className='my-10'>
                            <p className='text-xl font-bold'>S'il y a un automate, on peut vous aider.</p>
                            <p className='text-xl font-bold'>La sécurité avant tout !</p>
                        </div>
                        <button className='bg-green text-lg font-bold rounded-full px-4 py-2 transition hover:scale-105' onClick={knowMore}>En savoir plus</button>
                    </div>
                </div>
            </div>

            <div className="h-64 absolute -bottom-64 w-full">
                <div className="absolute box-white bg-gray-100 h-60 z-10"></div>
                <div className="absolute box-green bg-green h-full" style={{zIndex:5}}></div>
            </div>
        </div>
    )
}

export default Hero;