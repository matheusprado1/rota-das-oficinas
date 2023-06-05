import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 25vh;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;

    margin-bottom: 20px;
`;

export const Form = styled.form`
    text-align: center;
    margin-bottom: 20px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    font-weight: bold;

`;

export const Input = styled.input`
    padding: 5px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
`;

export const ErrorMessage = styled.p`
    text-align: center;
    font-size: 18px;

`;

export const ArabicNumber = styled.p`
  text-align: center;
  font-size: 18px;

`;
