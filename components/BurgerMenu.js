import { sections } from "../data/navbar";
import { motion, AnimatePresence } from "framer-motion";

const BurgerMenu = ({open, setOpen}) => {

    const navbarVariant = {
        hidden: {
            x:"100vw",
        },
        visible: {
            x:"0vw",
            transition: {duration: 1}
        },
        exit: {
            x:"100vw",
            transition: {duration: 1}
        },
    }

    const goToSection = (id) => {
        const el = document.getElementById(id)
        const position = el.offsetTop
        window.scrollTo(0, position)
        setOpen(false)
    }

    return (
        <AnimatePresence>
            {open &&
                <motion.div 
                    variants={navbarVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed h-full w-1/2 top-0 right-0 z-40 pt-24 pr-4 bg-white">
                        <ul className="text-2xl font-bold text-right">
                            {sections.map((section, index) => 
                                <li key={index} className="px-4 py-4" onClick={() => goToSection(section.hash)}>{section.text}</li>
                            )}
                        </ul>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default BurgerMenu;