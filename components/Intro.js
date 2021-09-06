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

const Intro = () => {
    return (
        <section className="bg-bg bg-cover">
            <div className="bg-opacity-50 bg-blue relative">
            <div className="flex transform -translate-y-32 z-0" style={{width:images.reduce(reducer, 0)}}>
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
            <div className="pb-32 ">
                <div className="bg-blue h-16 text-white w-screen">???????????????????</div>
            </div>

            </div>
        </section>
    )
}

export default Intro;