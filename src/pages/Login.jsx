import { useContext, useEffect } from "react"
import Contenedor from "../components/Contenedor"
import LabelInput from "../components/LabelInput"
import GeneralContext from "../context/GeneralContext"
import ButtonLink from "../components/ButtonLink"
import Button from "../components/Button"
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const {changeName, changePassword, changeHeader, changeHeaderAnimation, name, password} = useContext (GeneralContext)

    const navigate = useNavigate();

    useEffect(() => {
        const empty = {target: {value: ''}};
        changeName(empty);
        changePassword(empty);
    }, [])

    useEffect(() => {
        changeHeader(false);
        changeHeaderAnimation(true);
    }, [])

    function validate() {
        if (name == "" || password == ""){
            alert("Por favor, llena todos los campos.");
        } else {
            navigate('/principal');
        }
    }

  return (
    <Contenedor>
        <h1>Bienvenido Hechicero</h1>
        <LabelInput id="name" texto="Usuario" eventoCambio={changeName}></LabelInput>
        <LabelInput id="password" tipo="password" texto="Contraseña" eventoCambio={changePassword}></LabelInput>
        <br />
        <Button eventoClick={validate} clase="button">Iniciar Sesión</Button>
    </Contenedor>
  )
}

export default Login