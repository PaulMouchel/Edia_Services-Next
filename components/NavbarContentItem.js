import { motion, AnimatePresence } from 'framer-motion'
import { useState } from "react";

const NavbarContentItem = ({text, hash}) => {
    const [hover, setHover] = useState(false)

    const goToSection = (id) => {
        const el = document.getElementById(id)
        const position = el.offsetTop
        window.scrollTo({ top: position, behavior: 'smooth' })
    }

    return (
        <li className="px-4 py-2 cursor-pointer relative" onClick={() => goToSection(hash)}>
            {text}
            <div className="absolute top-0 left-0 w-full h-full px-4" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <AnimatePresence>
                    {hover && 
                        <motion.div 
                        initial={{width: 0}}
                        animate={{width: "100%"}}
                        transition={{ ease: "easeInOut", duration: .4}}
                        exit={{width: 0}}
                        className="h-full m-auto border-b-2"/>
                    }
                </AnimatePresence>
            </div>
        </li>
    )
}

export default NavbarContentItem;