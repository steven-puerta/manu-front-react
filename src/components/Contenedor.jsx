import {motion} from "framer-motion"

function Contenedor({children}) {
  return (
    <motion.div 
    className='contenedor'
    initial={{opacity:0, x:-500}} 
    animate={{opacity:1, x:0}} 
    exit={{opacity:0, x:500}}
    transition={{duration:2, delay:0.5}}
    >
        {children}
    </motion.div>
  )
}

export default Contenedor