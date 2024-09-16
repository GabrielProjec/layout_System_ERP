import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";

// VIEW GLOBAL
import Main from "../pages/Main";
import Contato from "../pages/Contato";
import Home from "../pages/Home";


function AppRoutes() {
    return (
        <Router>
            <Routes>

                <Route
                    path="/"
                    element={<Main />}
                >
                    <Route path="/" element={<Home />} />
                    <Route path="/contato" element={<Contato />} />
                </Route>

            </Routes>
        </Router>
    )
}

export default AppRoutes;