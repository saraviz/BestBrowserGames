import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Jogos from "./pages/Jogos/Jogos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/cadastro",
        element: <Cadastro />
    },
    {
        path: "/jogos",
        element: <Jogos />
    }
])

export default router;