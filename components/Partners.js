import Image from 'next/image'

const images = [
    {
        src:"actemium",
        height:45,
        width:280
    },
    {
        src:"OET",
        height:99,
        width:175
    },
    {
        src:"stellantis",
        height:83,
        width:352
    },
]

const Partners = () => {
    return (
        <section id="partenaires">
            <h2 className="text-4xl my-12 text-center">Nos Partenaires</h2>
            <div className="relative">
                <div className="bg-white absolute -left-12 -right-12 curve-white h-64 z-20">
                    <div className="flex justify-evenly transform translate-y-6 z-30">
                        {images.map((image, index) => 
                            <div className="flex items-center">
                                <Image
                                    key={index}
                                    src={`/images/${image.src}.png`} 
                                    height={image.height} 
                                    width={image.width} 
                                    alt={image.src}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="bg-green absolute -left-12 -right-24 curve-green h-64 z-10"></div>
            </div>
        </section>
    )
}

export default Partners;