import logo from "../../assets/logo-rota-header.png"
import { HeaderWrapper, Menu, MenuItem } from "./styles";

const Header = () => {
    return (
        <HeaderWrapper>
            <Menu>
                <MenuItem to="/"><img src={logo} width={60} height={60} alt="Logo da minha empresa" /></MenuItem>
                <MenuItem to="/roman-arabic">Página 1</MenuItem>
                <MenuItem to="/game-of-life">Página 2</MenuItem>
                <MenuItem to="/calculator-divider">Página 3</MenuItem>
            </Menu>
        </HeaderWrapper>
    );
};

export default Header;
