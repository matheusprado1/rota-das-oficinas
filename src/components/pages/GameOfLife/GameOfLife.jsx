import { useState, useEffect } from "react";
import { GameContainer, Cell, Button, BoardContainer, ButtonContainer } from "./styles";
import { WIDTH, HEIGHT } from "./constants";

const GameOfLife = () => {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        initializeBoard();
    }, []);

    // Inicializa o tabuleiro com todas as células mortas
    const initializeBoard = () => {
        const newBoard = Array(HEIGHT)
            .fill()
            .map(() => Array(WIDTH).fill(0));
        setBoard(newBoard);
    };

    // Atualiza o tabuleiro para a próxima geração
    const updateBoard = () => {
        const newBoard = board.map((row) => [...row]);

        for (let i = 0; i < HEIGHT; i++) {
            for (let j = 0; j < WIDTH; j++) {
                const neighbors = countNeighbors(i, j);

                if (board[i][j] === 1) {
                    if (neighbors < 2 || neighbors > 3) {
                        newBoard[i][j] = 0; // Célula viva morre
                    }
                } else {
                    if (neighbors === 3) {
                        newBoard[i][j] = 1; // Célula morta se torna viva
                    }
                }
            }
        }

        setBoard(newBoard);
    };

    // Conta o número de vizinhos vivos de uma célula específica
    const countNeighbors = (row, col) => {
        let count = 0;

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue; // Ignora a própria célula

                const newRow = row + i;
                const newCol = col + j;

                if (
                    newRow >= 0 &&
                    newRow < HEIGHT &&
                    newCol >= 0 &&
                    newCol < WIDTH &&
                    board[newRow][newCol] === 1
                ) {
                    count += 1;
                }
            }
        }

        return count;
    };

    // Alterna o estado de uma célula entre viva e morta
    const toggleCell = (row, col) => {
        const newBoard = board.map((row) => [...row]);
        newBoard[row][col] = newBoard[row][col] === 1 ? 0 : 1;
        setBoard(newBoard);
    };

    // Renderiza o tabuleiro
    const renderBoard = () => {
        return board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
                {row.map((cell, colIndex) => (
                    <Cell
                        key={colIndex}
                        alive={cell === 1}
                        onClick={() => toggleCell(rowIndex, colIndex)}
                    />
                ))}
            </div>
        ));
    };

    return (
        <GameContainer>
            <h1>Jogo da Vida</h1>
            <BoardContainer>{renderBoard()}</BoardContainer>
            <ButtonContainer>
                <Button onClick={updateBoard}>Próxima Geração</Button>
                <Button onClick={initializeBoard}>Reiniciar</Button>
            </ButtonContainer>
        </GameContainer>
    );
};

export default GameOfLife;
