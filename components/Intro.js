import Image from 'next/image'
import { images, list } from '../data/intro';

const reducer = (accumulator, currentValue) => accumulator + currentValue.width;

const Intro = () => {
    return (
        <section className="bg-bg bg-cover">
            <div className="bg-opacity-70 bg-blue relative pt-64">
                <div className="hidden md:flex transform -translate-y-32 z-0 -mb-12" style={{width:images.reduce(reducer, 0)}}>
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