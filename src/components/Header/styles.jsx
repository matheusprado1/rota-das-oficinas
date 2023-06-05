import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  position: sticky;
  top: 0;
  max-height: 60px;

 
 
`;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;
  margin-right: 150px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 10px;
    z-index: 1000;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  }
`;


export const NavigationListItem = styled.li`
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  

  &:hover {
    text-decoration: underline;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: relative;
  z-index: 1000;
  

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Logo = styled.img`
  margin-left: 150px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
