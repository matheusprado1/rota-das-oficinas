import { Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home/Home';
import Converter from '../components/pages/Converter/Converter';
import Calculator from '../components/pages/Calculator/Calculator';
import GameOfLife from '../components/pages/GameOfLife/GameOfLife';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/converter" element={<Converter />} />
            <Route path="/game-of-life" element={<GameOfLife />} />
            <Route path="/calculator" element={<Calculator />} />
        </Routes>
    );
};

export default AppRoutes;
