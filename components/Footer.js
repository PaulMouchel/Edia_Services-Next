import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="border-t border-gray-600 w-full bg-gray-800 p-4">
            <div className="grid md:grid-cols-3 justify-items-center w-full h-32 text-gray-200 ">
                <div className="flex flex-col justify-center justify-self-start pl-6">      

                </div>
                <div className="w-full h-full md:border-l md:border-r md:border-gray-600" >
                
                </div>
                
                <div className="flex flex-col gap-2 items-center justify-center ">
                    <p className="text-gray-100 text-xs">
                        <a
                        href="https://paulmouchel.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            © Paul Mouchel 2021
                        </a>
                    </p>

                    <div  className="text-gray-400 text-4xl mb-2">
                        <a href="https://www.linkedin.com/in/paul-mouchel-54875216a/" 
                        target="_blank" 
                        className="mx-2 hover:text-white transition-all">
                            <FaLinkedin className="inline"/>
                        </a>
                        <a href="https://github.com/PaulMouchel" 
                        target="_blank" 
                        className="mx-2 hover:text-white transition-all">
                            <FaGithub className="inline"/>
                        </a>
                    </div>
                </div>   
            </div>         
        </footer>
    )
}

export default Footer;