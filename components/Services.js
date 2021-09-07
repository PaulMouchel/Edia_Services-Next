import { GiFactory, GiMechanicalArm, GiLaptop } from 'react-icons/gi';
import { GoTools } from 'react-icons/go';

const services = [
    {
        text:"Conception et réalisation d’équipements automatisés",
        icon:GiLaptop
    },
    {
        text:"Prestation d’étude, de programmation et de mise en service d’équipements automatisés",
        icon:GiMechanicalArm
    },
    {
        text:"Dépannage, assistance et fiabilisation d’équipements automatisés",
        icon:GoTools
    },
    {
        text:"Nous intervenons dans les domaines industriels manufacturier et agro-alimentaire ainsi que dans l’environnement et le tertiaire.",
        icon:GiFactory
    }
]

const Services = () => {
    return (
        <section className="bg-services bg-cover flex justify-between w-screen min-h-screen" id="services">
            <div className="w-1/3 px-12 flex flex-col justify-center text-justify">
                <h2 className="text-white text-3xl py-4">Nos services</h2>
                <ul>
                    {services.map((service, index) =>
                        <li key={index} className="text-white py-4 flex items-center">
                            <service.icon className="text-3xl mr-4"/>
                            <span>{service.text}</span>
                        </li>
                    )}
                </ul>
            </div>
            <div className="w-2/3"></div>
        </section>
    )
}

export default Services;