import { useState } from "react";
import { Container, Title, Form, Input, Label, ArabicNumber, ErrorMessage } from "./styles";
import Button from "../../Button/Button";
import Navigation from "../../Header/Header"

const RomanConverter = () => {
    // State hooks para o número romano, número arábico e mensagem de erro
    const [romanNumber, setRomanNumber] = useState("");
    const [arabicNumber, setArabicNumber] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Manipulador de evento para alterar o número romano
    const handleRomanInputChange = (event) => {
        setRomanNumber(event.target.value);
        setErrorMessage("");
    };

    // Manipulador de evento para a conversão do número romano para arábico
    const handleConvertClick = () => {
        try {
            // Chama a função de conversão e atualiza o número arábico
            const arabic = convertRomanToArabic(romanNumber);
            setArabicNumber(arabic.toString());
            setErrorMessage("");
        } catch (error) {
            // Em caso de erro, define a mensagem de erro e limpa o número arábico
            setErrorMessage("Número romano inválido");
            setArabicNumber("");
        }
    };

    // Função para converter o número romano para arábico
    const convertRomanToArabic = (roman) => {
        // Tabela de símbolos romanos e seus valores arábicos correspondentes
        const romanNumerals = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };

        let arabic = 0;
        let prevValue = 0;
        let repetitions = 0; // Contador de repetições

        // Itera pelo número romano da direita para a esquerda
        for (let i = roman.length - 1; i >= 0; i--) {
            const currentSymbol = roman[i];
            const currentValue = romanNumerals[currentSymbol];

            // Verifica se o símbolo romano é válido
            if (currentValue === undefined) {
                throw new Error("Número romano inválido");
            }

            // Verifica as regras de subtração
            if (currentValue < prevValue) {
                if (
                    (currentSymbol === "I" && prevValue !== 5 && prevValue !== 10) ||
                    (currentSymbol === "X" && prevValue !== 50 && prevValue !== 100) ||
                    (currentSymbol === "C" && prevValue !== 500 && prevValue !== 1000)
                ) {
                    throw new Error("Número romano inválido");
                }

                // Subtrai o valor arábico atual e reinicia o contador de repetições
                arabic -= currentValue;
                repetitions = 0;
            } else if (currentValue >= prevValue) {
                // Verifica as regras de repetição
                if (
                    (currentSymbol === "I" &&
                        (prevValue === 5 || prevValue === 10) &&
                        repetitions > 0) ||
                    (currentSymbol === "X" &&
                        (prevValue === 50 || prevValue === 100) &&
                        repetitions > 0) ||
                    (currentSymbol === "C" &&
                        (prevValue === 500 || prevValue === 1000) &&
                        repetitions > 0)
                ) {
                    throw new Error("Número romano inválido");
                }

                // Incrementa o valor arábico atual e atualiza o contador de repetições
                if (currentValue === prevValue) {
                    repetitions++;
                    if (repetitions > 2) {
                        throw new Error("Número romano inválido");
                    }
                } else {
                    repetitions = 0;
                }

                arabic += currentValue;
            }

            prevValue = currentValue;
        }

        return arabic;
    };

    // Renderização do componente
    return (
        <>
            <Navigation />
            <Container>
                <Title>Conversor de Números Romanos</Title>
                <Form>
                    <Label>
                        Insira um número romano:
                        <Input
                            type="text"
                            value={romanNumber}
                            onChange={handleRomanInputChange}
                        />
                    </Label>
                    <Button type="button" onClick={handleConvertClick}>
                        Converter
                    </Button>
                </Form>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                {arabicNumber && (
                    <ArabicNumber>O número arábico correspondente é: {arabicNumber}</ArabicNumber>
                )}
            </Container>
        </>

    );
};

export default RomanConverter;
