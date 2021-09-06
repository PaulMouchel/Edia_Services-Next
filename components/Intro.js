import Image from 'next/image'

const height = 400;

const images = [
    {
        src:"pipes",
        height:height,
        width:(height*1.5),
    },
    {
        src:"panel",
        height:height,
        width:(height * 2.295),
    },
    {
        src:"robots",
        height:height,
        width:(height * 1.575),
    }
]

const reducer = (accumulator, currentValue) => accumulator + currentValue.width;

const list = [
    "Des réalisations automatismes difficiles (de la pré-étude à l’assistance)",
    "De l’expertise en automatisme, sécurité et productivité",
    "De l’efficacité immédiate",
    "Des gains de productivité dans les études et la réalisation",
    "Des compétences spécifiques",
    "De la gestion d’étude et de chantier"
]

const Intro = () => {
    return (
        <section className="bg-bg bg-cover">
            <div className="bg-opacity-70 bg-blue relative">
                <div className="flex transform -translate-y-32 z-0 -mb-12" style={{width:images.reduce(reducer, 0)}}>
                    {images.map((image, index) =>
                        <Image
                            key={index}
                            src={`/images/${image.src}.png`} 
                            height={image.height} 
                            width={image.width}
                            layout="fixed"
                            alt={image.src}
                            className="z-30"
                        />
                    )}
                </div>
                <div className="pb-24 flex justify-center">
                    <div className=" text-white mx-12">
                        <ul className="">
                            {list.map((text, index) => 
                                <li 
                                key={index}
                                className="text-2xl my-6">
                                    {text}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;