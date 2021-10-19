import { useScrollYPosition } from 'react-use-scroll-position';
import { motion, AnimatePresence } from "framer-motion";
import NavbarContent from "./NavbarContent";

const navbarVariant = {
    hidden: {
        y:-100,
        opacity: 0
    },
    visible: {
        y:0,
        opacity: 1,
        transition: {duration: 0.5}
    },
    exit: {
        y:-100,
        opacity: 0,
        transition: {duration: 0.5}
    },
}

const Navbar = () => {
    const scrollY = useScrollYPosition();

    return (
        <>
            <AnimatePresence>
                {scrollY > 300 &&
                    <motion.nav 
                    variants={navbarVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="bg-blue text-white py-4 w-screen z-50 fixed bg-opacity-70">
                        <NavbarContent/>
                    </motion.nav>
                }
            </AnimatePresence>
            <nav className="bg-blue text-white py-4 w-screen z-50">
                <NavbarContent/>
            </nav>
        </>
    )
}

export default Navbar;