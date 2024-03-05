import { useContext, useEffect } from "react"
import Contenedor from "../components/Contenedor"
import LabelInput from "../components/LabelInput"
import GeneralContext from "../context/GeneralContext"
import ButtonLink from "../components/ButtonLink"

function Login() {
    const {changeName, changePassword} = useContext (GeneralContext)

    useEffect(() => {
        const empty = {target: {value: ''}};
        changeName(empty);
        changePassword(empty);
    }, [])

  return (
    <Contenedor>
        <h1>Bienvenido Hechicero</h1>
        <LabelInput texto="Usuario" eventoCambio={changeName}></LabelInput>
        <LabelInput tipo="password" texto="Contraseña" eventoCambio={changePassword}></LabelInput>
        <br />
        <ButtonLink destino="/principal">Iniciar Sesión</ButtonLink>
    </Contenedor>
  )
}

export default Login