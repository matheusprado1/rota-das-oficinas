import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <AppRoutes />
                <Footer />
            </Router>

        </>
    );
}

export default App;
