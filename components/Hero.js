import Image from 'next/image'

const Hero = () => {
    return (
        <>
        <div className="pt-8 pb-48 relative">
            <div className="flex justify-between">
                <div className="flex flex-col justify-center w-64 text-xl">
                    <div className="text-white my-1.5"><span className="bg-darkBlue py-1 px-8">Compétences en</span></div>
                    <div className="text-white my-1.5"><span className="bg-darkBlue py-1 px-8">Automatisme</span></div>
                    <div className="text-white my-1.5"><span className="bg-darkBlue py-1 px-8">Spécifique</span></div>
                    <div className="text-white my-1.5"><span className="bg-darkBlue py-1 px-8">& expérimenté</span></div>
                </div>
                <Image
                    src="/images/logo.png" 
                    height={400} 
                    width={313} 
                    alt="Logo Edia Services"
                    className="z-30"
                />
                <div className="w-64">
                    
                </div>
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