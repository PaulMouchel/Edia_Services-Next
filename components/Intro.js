import Image from 'next/image'

const Intro = () => {
    return (
        <section className="bg-lightBlue pt-12 pb-24">
            <div className="bg-darkBlue h-96 ml-12 py-64 flex items-center relative transform -rotate-6">
                <div className="absolute top-2 left-4 text-white text-3xl">La sécurité avant tout</div>
                <div className="absolute bottom-2 left-4 text-white text-3xl">Si il y a un automate, on peut vous aider.</div>
                <div className="flex absolute -left-16">
                    <Image
                        src="/images/pipes.jpg" 
                        height={400} 
                        width={600} 
                        alt="Tuyaux"
                        className="z-30"
                    />
                    <Image
                        src="/images/panel.jpg" 
                        height={400} 
                        width={918} 
                        alt="Commande tactile"
                        className="z-30"
                    />
                </div>
            </div>
        </section>
    )
}

export default Intro;