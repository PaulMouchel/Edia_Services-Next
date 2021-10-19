import { services } from '../data/services';
import Service from './Service';

const Services = () => {
    return (
        <section className="bg-services bg-cover flex justify-between w-screen min-h-screen" id="services">
            <div className="w-full md:w-2/5 px-12 flex flex-col justify-center mb-12">
                <h2 className="text-white text-3xl py-6 md:mb-16 text-center">Nos services</h2>
                <ul className="flex flex-row flex-wrap">
                    {services.map((service, index) =>
                        <Service key={index} {...service}/>
                    )}
                </ul>
            </div>
            <div className="md:w-3/5"></div>
        </section>
    )
}

export default Services;