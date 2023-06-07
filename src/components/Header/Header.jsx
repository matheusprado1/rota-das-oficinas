import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import logo from "../../assets/logo-rota-header.png"

import { NavigationContainer, MenuButton, NavigationList, NavigationListItem, NavigationLink, Logo } from "./styles";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <NavigationContainer>
            <Link to="/">
                <Logo src={logo} width={70} height={70} alt="Logo da minha empresa" />
            </Link>
            <nav>
                <MenuButton onClick={toggleMenu}>
                    <FaBars />
                </MenuButton>
                <NavigationList isOpen={isOpen}>
                    <NavigationListItem>
                        <NavigationLink to="/converter" onClick={toggleMenu}>Conversor</NavigationLink>
                    </NavigationListItem>
                    <NavigationListItem>
                        <NavigationLink to="/game-of-life" onClick={toggleMenu}>Jogo da Vida</NavigationLink>
                    </NavigationListItem>
                    <NavigationListItem>
                        <NavigationLink to="/calculator" onClick={toggleMenu}>Calculadora</NavigationLink>
                    </NavigationListItem>
                </NavigationList>
            </nav>
        </NavigationContainer>
    );
}

export default Header;
