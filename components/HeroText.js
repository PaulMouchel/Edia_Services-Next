import { motion, AnimatePresence } from "framer-motion"

const heroTextVariant = {
    hidden: {
        y:-100,
        opacity: 0
    },
    visible: {
        y:0,
        opacity: 1,
        transition: {duration: 0.5, delay: 1}
    },
    exit: {
        y:100,
        opacity: 0,
        transition: {duration: 0.5, delay: 1}
    },
}

const HeroText = ({text, visible}) => {
    return (
        <div className="absolute w-screen">
            <div className="max-w-4xl m-auto h-48 flex justify-center items-center">
                <AnimatePresence>
                    {visible &&
                        <motion.h1 
                        variants={heroTextVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="text-center text-4xl md:text-6xl font-bold hero-text text-darkBlue z-50">
                            {text}
                        </motion.h1>
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default HeroText;