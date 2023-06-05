import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo-rota-header.png"

const HeaderWrapper = styled.header`
 background-color: #333;
  padding: 20px;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-height: 45px;

`;

const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
`;

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
