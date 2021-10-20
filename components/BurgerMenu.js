import { sections } from "../data/navbar";
import { motion, AnimatePresence } from "framer-motion";

const BurgerMenu = ({open, setOpen}) => {

    const navbarVariant = {
        hidden: {
            x:"50vw",
        },
        visible: {
            x:"0vw",
            transition: {duration: 0.5}
        },
        exit: {
            x:"50vw",
            transition: {duration: 0.5}
        },
    }

    const backgroundVariant = {
        hidden: {
            opacity:"0%",
        },
        visible: {
            opacity:"50%",
            transition: {duration: 0.5}
        },
        exit: {
            opacity:"0%",
            transition: {duration: 0.5}
        },
    }

    const goToSection = (id) => {
        const el = document.getElementById(id)
        const position = el.offsetTop
        window.scrollTo({ top: position, behavior: 'smooth' })
        setOpen(false)
    }

    return (
        <AnimatePresence>
            {open &&
                <>
                    <motion.div 
                    variants={backgroundVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed w-screen h-screen opacity-50 bg-gray-800 z-40"
                    onClick={() => setOpen(false)}/>
                    <motion.div 
                    variants={navbarVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed w-1/2 top-0 right-0 z-40  bg-gray-100 rounded-bl-3xl overflow-hidden">
                        <div className="h-full pt-24 pb-12 px-4">
                            <ul className="text-xl font-bold text-right text-gray-800">
                                {sections.map((section, index) => 
                                    <li key={index} className="px-4 py-4 border-b-2" onClick={() => goToSection(section.hash)}>{section.text}</li>
                                )}
                            </ul>
                        </div>
                        <div className="h-4 bg-green"/>
                    </motion.div>
                </>
            }
        </AnimatePresence>
    )
}

export default BurgerMenu;