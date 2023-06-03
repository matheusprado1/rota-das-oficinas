import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f2f2f2;
    font-family: Arial, Helvetica, sans-serif;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #333;
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
    color: #555;
`;

export const Input = styled.input`
    padding: 5px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #333;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #555;
  }
`;

export const ErrorMessage = styled.p`
    text-align: center;
    font-size: 18px;
    color: #555;
`;

export const ArabicNumber = styled.p`
  text-align: center;
  font-size: 18px;
  color: #555;
`;
