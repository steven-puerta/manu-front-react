import { useContext, useEffect } from "react"
import GeneralContext from "../context/GeneralContext"
import Contenedor from "../components/Contenedor"

function Principal() {
    const {changeHeader, changeHeaderAnimation} = useContext (GeneralContext)

    useEffect(() => {
        changeHeader(true);
        changeHeaderAnimation(true);
    }, [])

  return (
    <Contenedor>
        <h1>Bienvenido a tu página de Hogwarts</h1>
        <p>Selecciona una opción del menú superior</p>
    </Contenedor>
  )
}

export default Principal