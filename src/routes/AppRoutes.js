import {Route,Routes, useLocation} from "react-router-dom";
import Login from "../pages/Login";
import Principal from "../pages/Principal";
import { AnimatePresence } from "framer-motion";


function AppRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Login></Login>}></Route>
            <Route path="/principal" element={<Principal></Principal>}></Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes