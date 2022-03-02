import Image from 'next/image'
import MotionDiv from './MotionDiv'
import { fadeIn } from './animations'
import { secteurs, dIci2040 } from '../data/about'

const images = [
    {
        src:"pipes",
    },
    {
        src:"panel",
    }
]

const About = () => {
    return (
        <section className="bg-lightBlue py-12" id="about">
            <div className="w-screen px-auto p-12 transform -rotate-3">
                <MotionDiv {...fadeIn}
                className="bg-darkBlue text-white text-xl p-4 mx-auto max-w-5xl">
                    <h3>Ce n’est pas juste de la programmation, ce sont des solutions.</h3>
                </MotionDiv>
                <div className='w-[300vw] ml-[-100vw] h-[30vw] max-h-[382px] min-h-[150px] transform -translate-x-12'>
                    <div className='m-auto w-[110vw] max-w-[1400px]' >
                        {images.map((image, index) =>
                            <MotionDiv {...fadeIn} key={index} className="relative inline-block overflow-hidden w-[55vw] h-[30vw] max-w-[700px] max-h-[382px] min-h-[150px]">
                                <Image        
                                    src={`/images/${image.src}.png`} 
                                    layout="fill"
                                    objectFit='cover'
                                    alt={image.src}
                                    className="z-30"
                                />
                            </MotionDiv>
                        )}
                    </div>
                </div>
                <MotionDiv {...fadeIn}
                className="bg-darkBlue text-white text-lg p-4 mx-auto max-w-5xl">
                    <ul>
                        <li>Besoins en souplesse de charge …</li>
                        <li>Besoins en compétences d’automatisme spécifique et expérimenté …</li>
                        <li>… EDIA Services répond à votre besoin en services</li>
                    </ul>
                </MotionDiv>
                <div className="transform translate-x-6 sm:translate-x-12">
                    <MotionDiv {...fadeIn}
                    className="bg-blue text-white text-md p-4 -mt-2 mx-auto max-w-5xl">
                        <span>L’entreprise d’ici 2040 :</span>
                        <ul  className="list-disc pl-8">
                            {dIci2040.map((item, index) =>
                            <li key={index}>
                                {item}
                            </li>
                            )}
                        </ul>
                    </MotionDiv>
                </div>
            </div>
            <div className="p-12">
                <div className="flex flex-col-reverse md:flex-row justify-evenly items-center">
                    <div>
                        <h3 className="text-xl italic font-bold mt-8 md:mt-0">EDIA Services a été créé en 2017 par Mathieu PANNIER, automaticien, chef de projet depuis 20 ans.</h3>
                        <p className="text-white text-xl italic font-bold">Nous intervenons pour nos clients intégrateurs dans plusieurs secteurs d’activités :</p>
                        <ul>
                            {secteurs.map((secteur, index) => 
                            <li key={index}>- {secteur}</li>)}
                        </ul>
                        <div className="mt-4">
                            Nous avons une forte expérience en ilots et lignes robotisés dans divers industries (automobile, agroalimentaire, manufacture)
                        </div>
                    </div>
                    <MotionDiv {...fadeIn}>
                        <Image
                            src="/images/pdg.jpg" 
                            height={200}
                            width={200}
                            layout="fixed"
                            alt="Mathieu PANNIER"
                            className="hero-shape"
                        />
                    </MotionDiv>
                </div>
            </div>  
        </section>
    )
}

export default About;