import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Task1 from "../components/pages/Task1";
import Task2 from "../components/pages/Task2";
import Task3 from "../components/pages/Task3";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/task1",
        element: <Task1 />
    },
    {
        path: "/task2",
        element: <Task2 />
    },
    {
        path: "/task3",
        element: <Task3 />
    }
]);

export default router;