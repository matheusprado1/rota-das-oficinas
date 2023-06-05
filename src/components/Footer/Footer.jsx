import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #333;
  padding: 20px;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Copyright = styled.p`
  margin: 0;
`;

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
