import { services } from '../data/services';
import Service from './Service';

const Services = () => {
    return (
        <section className="bg-services bg-cover flex justify-between w-screen min-h-screen" id="services">
            <div className="w-1/3 px-12 flex flex-col justify-center text-justify">
                <h2 className="text-white text-3xl py-4">Nos services</h2>
                <ul>
                    {services.map((service, index) =>
                        <Service key={index} {...service}/>
                    )}
                </ul>
            </div>
            <div className="w-2/3"></div>
        </section>
    )
}

export default Services;