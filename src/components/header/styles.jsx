import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto";
  display: flex;
  width: 100%;
  height: 40%;
  align-items: center;
  color: white;
  justify-content: space-around;
  background: #f2e9e1;
  :hover {
    transition-property: background-color;
    background: #f2e9e1;
  }
  img {
    margin-bottom: 8px;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

export const Navigation = styled.div`
  font-family: "Roboto";
  display: flex;
  width: 30%;
  height: 80%;
  text-wrap: nowrap;
  align-items: center;
  a {
    text-decoration: none; /* Removendo o underline padrão */
    display: inline-block;
    padding: 10px 20px;
    color: #d87a69;
    border: none;
    cursor: pointer;
    position: relative;
  }
  color: #d87a69;
  justify-content: space-around;
  background: #f2e9e1;
  :hover {
    transition-property: background-color;
    background: #f2e9e1;
    a::before {
      content: ""; /* Criando o efeito de afastamento */
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #d6422b;
      bottom: -2px; /* Afastando o underline em relação ao texto */
      left: 0;
      transform: scaleX(0); /* Inicialmente, o underline estará invisível */
      transform-origin: center;
      transition: transform 0.1s ease; /* A transição será mais lenta (0.3s) */
    }
    a:hover::before {
      transform: scaleX(1); /* No hover, o underline se expandirá para 100% */
    }
    a:hover {
      color: #d6422b;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 5vh;
    a {
      font-size: 14px;
      padding: 5px;
    }
  }
`;
