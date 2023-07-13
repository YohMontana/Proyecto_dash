import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, LoginView, TramiteView } from "../pages";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="login" element={<LoginView/>}/>
                <Route path="tramite" element={<TramiteView/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default Router;