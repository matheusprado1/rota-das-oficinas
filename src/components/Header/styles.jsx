import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
 background-color: #333;
  padding: 20px;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-height: 45px;

`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
`;