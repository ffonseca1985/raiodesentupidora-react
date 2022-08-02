

import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import QuemSomos from "../pages/quemSomos";
import NossosServicos from "../pages/nossosServicos";
import Contato from "../pages/contato";

const AppRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/quemsomos" element={<QuemSomos />} />
                    <Route path="/nossosservicos" element={<NossosServicos />} />
                    <Route path="/contato" element={<Contato />} />
                </Route>
            </Routes>
        </BrowserRouter>)
}

export default AppRoute;

