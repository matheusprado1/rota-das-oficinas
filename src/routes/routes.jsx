import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import RomanConverter from "../components/pages/RomanConverter/RomanConverter";
import Task3 from "../components/pages/Task3";
import GameOfLife from "../components/pages/GameOfLife/GameOfLife";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/roman-arabic",
        element: <RomanConverter />
    },
    {
        path: "/game-of-life",
        element: <GameOfLife />
    },
    {
        path: "/task3",
        element: <Task3 />
    }
]);

export default router;