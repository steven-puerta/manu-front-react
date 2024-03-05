import { useContext, useEffect } from "react"
import Contenedor from "../components/Contenedor"
import GeneralContext from "../context/GeneralContext"
import FullscreenCard from "../components/FullscreenCard"

function Profesores() {
    const {changeHeader} = useContext (GeneralContext)

    useEffect(() => {
        changeHeader(true)
    }, [])

  return (
    <FullscreenCard></FullscreenCard>
  )
}

export default Profesores