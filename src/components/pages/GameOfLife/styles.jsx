import styled from "styled-components";
import { WIDTH, HEIGHT } from "./constants";

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    height: 100vh;
`;

export const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${WIDTH}, 20px);
    grid-template-rows: repeat(${HEIGHT}, 20px);
    gap: 2px;
`;

export const Cell = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({ alive }) => (alive ? "black" : "white")};
    border: 1px solid #ccc;
    cursor: pointer;
`;

export const ButtonContainer = styled.div`
    margin-top: 10px;
`;

export const Button = styled.button`
    margin-right: 10px;
`;
