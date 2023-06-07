import { useState, useEffect, useRef } from "react";
import { WIDTH, HEIGHT } from "./constants";
import { GameContainer, Cell, BoardContainer, ButtonContainer } from "./styles";
import Button from "../../Button/Button";

const GameOfLife = () => {
    // Estado do componente
    const [board, setBoard] = useState([]); // Tabuleiro do Jogo da Vida
    const [generation, setGeneration] = useState(0); // Geração atual
    const [isRunning, setIsRunning] = useState(false); // Indica se o jogo está em execução
    const intervalRef = useRef(null); // Referência para o intervalo de atualização do tabuleiro

    // Função executada uma vez na montagem do componente para inicializar o tabuleiro e definir células vivas iniciais
    useEffect(() => {
        initializeBoard();
        setInitialAliveCells();
    }, []);

    // Função executada sempre que o estado `isRunning` muda
    useEffect(() => {
        if (isRunning) {
            // Inicia o intervalo de atualização do tabuleiro a cada 200 milissegundos
            intervalRef.current = setInterval(() => {
                updateBoard();
                setGeneration((prevGeneration) => prevGeneration + 1);
            }, 200);

            return () => {
                // Limpa o intervalo quando o componente é desmontado ou o estado `isRunning` muda
                clearInterval(intervalRef.current);
            };
        }
    }, [isRunning]);

    // Inicializa o tabuleiro com células vazias
    const initializeBoard = () => {
        const newBoard = Array(HEIGHT)
            .fill()
            .map(() => Array(WIDTH).fill(false));

        setBoard(newBoard);
        setGeneration(0);
    };

    // Define células vivas iniciais no tabuleiro
    const setInitialAliveCells = () => {
        setBoard((prevBoard) => {
            let newBoard = [...prevBoard];

            // Defina as células iniciais como vivas
            newBoard = newBoard.map((row) => [...row]);
            newBoard[1][0] = true;
            newBoard[2][1] = true;
            newBoard[2][2] = true;
            newBoard[1][2] = true;
            newBoard[0][2] = true;

            return newBoard;
        });
    };

    // Atualiza o tabuleiro de acordo com as regras do Jogo da Vida
    const updateBoard = () => {
        setBoard((prevBoard) => {
            const newBoard = prevBoard.map((row) => [...row]);

            for (let i = 0; i < HEIGHT; i++) {
                for (let j = 0; j < WIDTH; j++) {
                    const neighbors = countNeighbors(prevBoard, i, j);

                    if (prevBoard[i][j]) {
                        if (neighbors < 2 || neighbors > 3) {
                            newBoard[i][j] = false; // Célula viva morre
                        }
                    } else {
                        if (neighbors === 3) {
                            newBoard[i][j] = true; // Célula morta se torna viva
                        }
                    }
                }
            }

            return newBoard;
        });
    };

    // Conta o número de vizinhos vivos de uma célula
    const countNeighbors = (board, row, col) => {
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
                    board[newRow][newCol]
                ) {
                    count += 1;
                }
            }
        }

        return count;
    };

    // Alterna o estado de uma célula entre viva e morta
    const toggleCell = (rowIndex, colIndex) => {
        setBoard((prevBoard) => {
            const newBoard = prevBoard.map((row) => [...row]);
            newBoard[rowIndex][colIndex] = !newBoard[rowIndex][colIndex];
            return newBoard;
        });
    };

    // Renderiza o tabuleiro
    const renderBoard = () => {
        return board.map((row, rowIndex) => (
            <div key={rowIndex}>
                {row.map((cell, colIndex) => (
                    <Cell
                        key={colIndex}
                        alive={cell}
                        onClick={() => toggleCell(rowIndex, colIndex)}
                    />
                ))}
            </div>
        ));
    };

    // Manipula o clique no botão de geração automática
    const handleAutoGenerate = () => {
        setIsRunning((prevState) => !prevState);
    };

    // Renderização do componente
    return (
        <GameContainer>
            <h1>Jogo da Vida</h1>
            <BoardContainer>{renderBoard()}</BoardContainer>
            <ButtonContainer>
                <Button onClick={handleAutoGenerate}>
                    {isRunning ? "Desativar Geração Automática" : "Iniciar Geração Automática"}
                </Button>
                <Button onClick={updateBoard}>Próxima Geração</Button>
                <Button onClick={initializeBoard}>Reiniciar</Button>
            </ButtonContainer>
            <p>Geração: {generation}</p>
        </GameContainer>
    );
};

export default GameOfLife;
