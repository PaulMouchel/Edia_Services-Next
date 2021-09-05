import Image from 'next/image'

const images = [
    {
        src:"pipes",
        height:400,
        width:600,
    },
    {
        src:"panel",
        height:400,
        width:918,
    },
    {
        src:"robots",
        height:400,
        width:630,
    }
]

const Intro = () => {
    return (
        <section className="bg-bg bg-cover">
            <div className="bg-opacity-50 bg-blue relative">
            <div className="flex transform -translate-y-32 z-0">
                {images.map((image, index) =>
                    <Image
                        key={index}
                        src={`/images/${image.src}.png`} 
                        height={image.height} 
                        width={image.width} 
                        alt={image.src}
                        className="z-30"
                    />
                )}
            </div>
            <div className="pb-32 ">
                <div className="text-white text-3xl">La sécurité avant tout</div>
                <div className="text-white text-3xl">Si il y a un automate, on peut vous aider.</div>
                <div className="bg-blue h-16 text-white w-screen">???????????????????</div>
            </div>

            </div>
        </section>
    )
}

export default Intro;