import { motion } from "framer-motion"

const SideText = ({text, index}) => {

    const sideTextVariant = {
        hidden: {
            x:-300,
        },
        visible: {
            x:0,
            transition: {duration: 0.5, delay: (0.3 + index/10)}
        }
    }

    return (
        <motion.div
        variants={sideTextVariant}
        initial="hidden"
        animate="visible"
        className="text-white my-1.5">
            <span className="bg-darkBlue py-1 px-8 text-xl sm:text-2xl">{text}</span>
        </motion.div>
    )
}

export default SideText;