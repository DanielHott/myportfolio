import styled from "styled-components"

export const Container = styled.div`
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    align-items: center;
    position: fixed;
    top: 0;
`
export const Content = styled.div`
    width: 400px;
    height: 200px;
    opacity: 100%;
    background: white;
    z-index: 10;
    border-radius: 10px;
    justify-content: space-evenly;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 50px;
    p {
        margin-top: -5px;
        width: 500px;
        text-align: start;
        word-break: break-word;
    }
    a {
        color: black;
    }
    h3 {
        position: absolute;
        z-index: 20;
        top: 34%;
        font-size: 20px;
        right: 37%;
        cursor: pointer;
    }
    #linkedin:hover {
        color: #1919c6;
    }
    #zap:hover {
        color: #128416;
    }
    #git:hover {
        color: #34343e;
    }
    @media (max-width: 1000px) {
        h3 {
        position: absolute;
        z-index: 20;
        top: 34%;
        font-size: 20px;
        right: 10%;
        cursor: pointer;
    }
    }
`;

export const Pelicula = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    top: 0;
    opacity: 50%;
    position: fixed;
`;