import { Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home/Home';
import RomanConverter from '../components/pages/RomanConverter/RomanConverter';
import Task3 from '../components/pages/Task3';
import GameOfLife from '../components/pages/GameOfLife/GameOfLife';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roman-arabic" element={<RomanConverter />} />
            <Route path="/game-of-life" element={<GameOfLife />} />
            <Route path="/task3" element={<Task3 />} />
        </Routes>
    );
};

export default AppRoutes;
