import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #c1a1d3;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    text-align: center;
  }
`;

export const Box = styled.div`
  display: grid;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10vh;

  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 05px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: grid;
  justify-content: center;
  margin: 20px;
  padding: 20px;
`;

export const Image = styled.img`
  margin: 0 auto;
  width: 200px;
`;

export const Input = styled.input`
  border: none;
  box-shadow: 0px 0px 05px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  height: 50px;
  padding: 10px;
  width: 500px;

  @media(max-width: 800px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  background-color: #0d335d;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  height: 50px;
  margin-top: 15px;
  padding: 10px;
  width: 100%;
`;

export const Form = styled.form`
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: grid;
  justify-content: center;
  margin-top: 02vh;
  padding: 40px;

  @media(max-width: 800px) {
    margin: 10px;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  color: ${(props) => props.color || "#000"};
  font-size: 25px;
`;

export const Date = styled.p`
  font-size: 18px;
`;

export const Author = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

export const Description = styled.h3`
  font-weight: 400;
`;