import { useContext, useEffect } from "react"
import Contenedor from "../components/Contenedor"
import GeneralContext from "../context/GeneralContext"

function Casas() {
    const {changeHeader} = useContext (GeneralContext)

    useEffect(() => {
        changeHeader(true)
    }, [])

  return (
    <Contenedor>Casas</Contenedor>
  )
}

export default Casas