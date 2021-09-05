const Services = () => {
    return (
        <section className="bg-black flex justify-between w-screen">
            <div className="w-1/3 p-4">
                <h2 className="text-white text-3xl py-2">Nos services</h2>
                <p className="text-white py-2">Conception et réalisation d’équipements automatisés Prestation d’étude, de programmation et de mise en service d’équipements automatisés</p>
                <p className="text-white py-2">Dépannage, assistance et fiabilisation d’équipements automatisés</p>
                <p className="text-white py-2">Nous intervenons dans les domaines industrielles manufacturier et agro-alimentaire ainsi que dans l’environnement et le tertiaire.</p>
            </div>
            <div className="w-2/3 bg-services bg-cover"></div>
        </section>
    )
}

export default Services;