import { Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home/Home';
import RomanConverter from '../components/pages/RomanConverter/RomanConverter';
import DivisorContaRestaurante from '../components/pages/Calculator/Calculator';
import GameOfLife from '../components/pages/GameOfLife/GameOfLife';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roman-arabic" element={<RomanConverter />} />
            <Route path="/game-of-life" element={<GameOfLife />} />
            <Route path="/calculator" element={<DivisorContaRestaurante />} />
        </Routes>
    );
};

export default AppRoutes;
