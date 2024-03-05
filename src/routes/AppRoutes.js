import {Route,Routes, useLocation} from "react-router-dom";
import Login from "../pages/Login";
import Principal from "../pages/Principal";
import Casas from "../pages/Casas";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Profesores from "../pages/Profesores";
import Actividades from "../pages/Actividades";


function AppRoutes() {
    const location = useLocation();
  return (
    <>
        <Header></Header>
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Login></Login>}></Route>
                <Route path="/principal" element={<Principal></Principal>}></Route>
                <Route path="/casas" element={<Casas></Casas>}></Route>
                <Route path="/profesores" element={<Profesores></Profesores>}></Route>
                <Route path="/actividades" element={<Actividades></Actividades>}></Route>
            </Routes>
        </AnimatePresence>
    </>
    
  )
}

export default AppRoutes