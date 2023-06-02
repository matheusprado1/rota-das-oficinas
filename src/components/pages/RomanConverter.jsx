import { useState } from "react";

const RomanConverter = () => {
    const [romanNumber, setRomanNumber] = useState('');
    const [arabicNumber, setArabicNumber] = useState('');

    const handleRomanInputChange = (event) => {
        setRomanNumber(event.target.value);
    };

    const handleConvertClick = () => {
        const arabic = convertRomanToArabic(romanNumber);
        setArabicNumber(arabic)
    };

    const convertRomanToArabic = (roman) => {
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

        for (let i = roman.length - 1; i >= 0; i--) {
            const currentSymbol = roman[i];
            const currentValue = romanNumerals[currentSymbol];

            if (currentValue === undefined) {
                throw new Error('Número romano inválido');
            }

            if (currentSymbol === 'I' && (prevValue === 5 || prevValue === 10)) {
                arabic -= currentValue;
            } else if (currentValue < prevValue) {
                arabic -= currentValue;
            } else if (currentValue >= prevValue) {
                arabic += currentValue;
            } else {
                throw new Error('Número romano inválido');
            }

            prevValue = currentValue;
        }

        return arabic;
    };


    return (
        <div>
            <h1>Conversor de Números Romanos</h1>
            <form>
                <label>
                    Insira um número romano:
                    <input type="text" value={romanNumber} onChange={handleRomanInputChange} />
                </label>
                <button type="button" onClick={handleConvertClick}>Converter</button>
            </form>
            {arabicNumber && (
                <p>O número arábico correspondente é: {arabicNumber}</p>
            )}
        </div>
    )

};

export default RomanConverter;