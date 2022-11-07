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
    width: 600px;
    height: 400px;
    opacity: 100%;
    background: white;
    z-index: 10;
    border-radius: 10px;
    justify-content: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        margin-top: -5px;
        width: 500px;
        text-align: start;
        word-break: break-word;
    }
    h3 {
        position: absolute;
        z-index: 20;
        top: 20%;
        right: 30%;
        cursor: pointer;
    }
    @media (max-width: 1000px) {
        display: flex;
        width: 80%;
        height: 80%;
        h3 {
        position: absolute;
        z-index: 20;
        top: 8%;
        right: 10%;
        cursor: pointer;
    }
    p {
        overflow: scroll;
        width: 100%;
        text-align: start;

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