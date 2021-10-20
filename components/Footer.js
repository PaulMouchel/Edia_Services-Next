import { services } from '../data/services';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="border-t border-gray-600 w-full bg-gray-800 p-4">
            <div className="grid grid-cols-3 justify-items-center w-full h-32 text-gray-200 ">
                <div className="flex flex-col justify-center justify-self-start pl-6">      
                    {services.map((service, index) => 
                        <div key={index}>
                            <a className="text-xs" href={service.attributeLink}>{service.attributeText}</a>
                        </div>
                    )}
                </div>
                <div className="w-full h-full border-l border-r border-gray-600" >
                
                </div>
                <div className="flex items-end justify-self-end p-3 text-xs">
                    <a
                    href="https://paulmouchel.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    © Paul Mouchel 2021
                    </a>
                </div>   
            </div>         
        </footer>
    )
}

export default Footer;