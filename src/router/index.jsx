import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, LoginView, TramiteView } from "../pages";
import { MainLayaout } from "../Layout/MainLayaout/index";

const Router = () => {
    return(
        <BrowserRouter>           
            <Routes>
                <Route element={<MainLayaout/>}>
                    <Route path="/" element={<HomeView/>}/>
                    <Route path="tramite" element={<TramiteView/>}/>
                </Route>
                <Route path="login" element={<LoginView/>}/>
            </Routes>
            
        </BrowserRouter>
    );
}

export default Router;