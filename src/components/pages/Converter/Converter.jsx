import { useState } from "react";
import { Container, Title, Form, Input, Label, RomanNumber, ArabicNumber, ErrorMessage } from "./styles";
import Button from "../../Button/Button";

const RomanConverter = () => {
    const [romanNumber, setRomanNumber] = useState("");
    const [arabicNumber, setArabicNumber] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleRomanInputChange = (event) => {
        setRomanNumber(event.target.value);
        setErrorMessage("");
    };

    const handleArabicInputChange = (event) => {
        setArabicNumber(event.target.value);
        setErrorMessage("");
    };

    const handleConvertClick = () => {
        if (romanNumber !== "") {
            try {
                const arabic = convertRomanToArabic(romanNumber);
                setArabicNumber(arabic.toString());
                setErrorMessage("");
            } catch (error) {
                setErrorMessage("Número romano inválido");
                setArabicNumber("");
            }
        } else if (arabicNumber !== "") {
            try {
                const roman = convertArabicToRoman(parseInt(arabicNumber));
                setRomanNumber(roman);
                setErrorMessage("");
            } catch (error) {
                setErrorMessage("Número arábico inválido");
                setRomanNumber("");
            }
        }
    };

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

    const convertArabicToRoman = (arabic) => {
        const romanNumerals = [
            { value: 1000, numeral: "M" },
            { value: 900, numeral: "CM" },
            { value: 500, numeral: "D" },
            { value: 400, numeral: "CD" },
            { value: 100, numeral: "C" },
            { value: 90, numeral: "XC" },
            { value: 50, numeral: "L" },
            { value: 40, numeral: "XL" },
            { value: 10, numeral: "X" },
            { value: 9, numeral: "IX" },
            { value: 5, numeral: "V" },
            { value: 4, numeral: "IV" },
            { value: 1, numeral: "I" }
        ];

        let roman = "";
        let num = arabic;

        for (let i = 0; i < romanNumerals.length; i++) {
            while (num >= romanNumerals[i].value) {
                roman += romanNumerals[i].numeral;
                num -= romanNumerals[i].value;
            }
        }

        return roman;
    };

    // Resetar os números
    const handleResetClick = () => {
        setRomanNumber("");
        setArabicNumber("");
        setErrorMessage("");
    }

    return (
        <>
            <Container>
                <Title>Conversor de Números</Title>
                <Form>
                    <Label>
                        Insira um número romano:
                        <Input
                            type="text"
                            value={romanNumber}
                            onChange={handleRomanInputChange}
                        />
                    </Label>
                    <Label>
                        Insira um número arábico:
                        <Input
                            type="text"
                            value={arabicNumber}
                            onChange={handleArabicInputChange}
                        />
                    </Label>
                    <Button type="button" onClick={handleConvertClick}>
                        Converter
                    </Button>
                    <Button
                        type="button"
                        onClick={handleResetClick}>
                        Resetar
                    </Button>

                </Form>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                {arabicNumber && (
                    <ArabicNumber>O número arábico correspondente é: {arabicNumber}</ArabicNumber>
                )}
                {romanNumber && (
                    <RomanNumber>O número romano correspondente é: {romanNumber}</RomanNumber>
                )}
            </Container>
        </>
    );
};

export default RomanConverter;
