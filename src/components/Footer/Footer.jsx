import { FooterWrapper, Copyright } from "./styles";

const Footer = () => {
    return (
        <FooterWrapper>
            <Copyright>
                &copy; {new Date().getFullYear()} Desenvolvido por Matheus Prado
            </Copyright>
        </FooterWrapper>
    );
};

export default Footer;
