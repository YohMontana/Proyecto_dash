import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, LoginView, TramiteView } from "../pages";
import { Layout } from "../components/layout";

const Router = () => {
    return(
        <BrowserRouter>
          <Layout> 
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="login" element={<LoginView/>}/>
                <Route path="tramite" element={<TramiteView/>}/>
            </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default Router;