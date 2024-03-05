import { useContext, useEffect } from "react"
import Contenedor from "../components/Contenedor"
import GeneralContext from "../context/GeneralContext"

function Actividades() {
    const {changeHeader} = useContext (GeneralContext)

    useEffect(() => {
        changeHeader(true)
    }, [])
    
  return (
    <Contenedor>Actividades</Contenedor>
  )
}

export default Actividades