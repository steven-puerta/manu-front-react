import { useContext } from "react"
import GeneralContext from "../context/GeneralContext"
import {motion} from "framer-motion"
import ButtonLink from "./ButtonLink"

function Header() {
    const {header, animateHeader} = useContext (GeneralContext)
    
    const animacionEntrada = {
        opacity: 1,
        y: 0,
      };
    
      const animacionSalida = {
        opacity: 0,
        y: header ? -500 : 500, 
      };
    
      return (
        <motion.div
          className="menuHeader"
          initial={animacionSalida}
          animate={header ? animacionEntrada : animacionSalida}
          exit={animacionSalida}
          transition={{ duration: 1 }}
        >
                <div className="malla3Columnas">
                    <div className="columnaIzquierdaMenu">
                        <ButtonLink clase="menuButton" destino="/casas">Casas</ButtonLink>
                    </div>
                    <div className="columnaCentral">
                        <ButtonLink clase="menuButton" destino="/profesores">Profesores</ButtonLink>
                    </div>
                    <div className="columnaDerechaMenu">
                        <ButtonLink clase="menuButton" destino="/actividades">Actividades extracurriculares</ButtonLink>
                    </div>
                    <div className="columnaDerechaMenu">
                        <ButtonLink clase="menuButton" destino="/">Cerrar Sesión</ButtonLink>
                    </div>
                </div>
                
            </motion.div>
          )
    } 
  


export default Header