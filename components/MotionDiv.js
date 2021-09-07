import { motion } from 'framer-motion'
import { useInViewAnimate } from 'framer-motion-hooks'

const MotionDiv = ({children, animate, ...props}) => {
  const { inViewRef, animation } = useInViewAnimate({ animate })

  return (
      <motion.div 
      ref={inViewRef}
      animate={animation}
      {...props}>
          {children}
      </motion.div>   
  )
}


export default MotionDiv;