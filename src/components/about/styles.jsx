import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Roboto';
    display: flex;
    width: 100%;
    padding: 90px;
    flex-direction: column;
    color: #0000009d;
    text-align: center;
    background: white;
    justify-content: center;
    align-items: top;
    p {
        font-family: "Roboto";
        margin-top: 2px;
    }
    h2:hover, h2:hover > h2 {
    color: #d87a69;
    transition: .5s;
  }
  h2, h2 > h2 {
    transition: .5s;
  }
`;