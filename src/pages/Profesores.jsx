import { useContext, useEffect } from "react"
import Contenedor from "../components/Contenedor"
import GeneralContext from "../context/GeneralContext"

function Profesores() {
    const {changeHeader} = useContext (GeneralContext)

    useEffect(() => {
        changeHeader(true)
    }, [])
    
  return (
    <Contenedor>Profesores</Contenedor>
  )
}

export default Profesores