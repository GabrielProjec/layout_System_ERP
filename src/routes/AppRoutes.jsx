import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

// VIEW GLOBAL
import Main from "../pages/Main";

// PAGES
import Contato from "../pages/Contato";
import Home from "../pages/Home";
import Reports from '../pages/Reports'
import Settings from '../pages/Settings';
import Users from '../pages/Users'
import NotFound from '../pages/NotFound'



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
                    <Route path="/relatorio" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/users" element={<Users />} />
                    <Route path='/*' element={<NotFound />} />
                </Route>

            </Routes>
        </Router>
    )
}

export default AppRoutes;