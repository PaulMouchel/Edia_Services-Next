import { motion } from "framer-motion"

export default function ColoredShapes() {
    return (
        <div className="hidden md:block relative px-48">
            <motion.div 
            animate={{ rotate: 360, x: [0, -40, 0] , y: [0, -10, 0], scale: [1, 1.15, 0.95, 1] }}
            transition={{ ease: "linear", duration: 90, repeat: Infinity }} 
            className="absolute top-16 bg-blue bg-opacity-40 hero-shape w-96 h-96 z-20 transform rotate-90">
            </motion.div>
            <motion.div 
            animate={{ rotate: 360, x: [0, -100, 0] , y: [0, 20, 0], scale: [1, 1.15, 0.95, 1] }}
            transition={{ ease: "linear", duration: 70, repeat: Infinity }} 
            className="absolute top-4 right-12 bg-green bg-opacity-60 hero-shape w-96 h-96 z-20">
            </motion.div>
            <motion.div 
            animate={{ rotate: 360, x: [0, 30, 0] , y: [0, 45, 0], scale: [1, 0.9, 1.10, 1] }}
            transition={{ ease: "linear", duration: 110, repeat: Infinity }} 
            className="absolute -top-8 -right-16 bg-yellow bg-opacity-80 hero-shape w-96 h-96 z-20 transform rotate-90">
            </motion.div>
        </div>
    )
}
