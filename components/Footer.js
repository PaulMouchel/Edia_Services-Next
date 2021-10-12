import { services } from '../data/services';

const Footer = () => {
    return (
        <footer className="border-t flex items-center justify-between w-full h-24 ">
            <div>      
                {services.map((service, index) => 
                    <div key={index}>
                        <a className="text-xs" href={service.attributeLink}>{service.attributeText}</a>
                    </div>
                )}
            </div>
            <div className="">
                <span>Réalisé par{' '}</span>
                <a
                className="flex items-center justify-center"
                href="https://paulmouchel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                >
                Paul Mouchel
                </a>
            </div>
            <div/>
            
        </footer>
    )
}

export default Footer;