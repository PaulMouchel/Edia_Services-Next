import Image from 'next/image'
import { images } from '../data/partners'
import Carousel from './Carousel'

const Partners = () => {
    return (
        <section id="partenaires">
            <h2 className="text-4xl my-12 text-center">Nos Partenaires</h2>
            <div className="relative">
                <div className="bg-white absolute -left-12 -right-12 curve-white h-64 z-30">
                    <div className="transform translate-y-6 z-40 w-100">
                        <Carousel>
                            {images.map((image, index) => 
                                <div key={index}>
                                    <div className="flex items-center justify-center h-32">
                                        <Image
                                            src={`/images/${image.src}.png`} 
                                            height={image.height} 
                                            width={image.width} 
                                            alt={image.src}
                                        />
                                    </div>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div>
                <div className="bg-green absolute -left-12 -right-24 curve-green h-64 z-20"></div>
            </div>
        </section>
    )
}

export default Partners;