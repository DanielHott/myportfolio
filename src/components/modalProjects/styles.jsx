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
    width: 800px;
    height: 400px;
    opacity: 100%;
    background: white;
    z-index: 10;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin-top: 30px;
        margin-bottom: 50px;
    }
    p {
        margin-top: -5px;
        width: 500px;
        text-align: start;
        word-break: break-word;
    }

    th, td {
        border: 1px solid #3E4C5E;
        padding: 10px;
        max-width: 32rem;
        text-align: center;
        :hover {

        }
    }
    a {
        color: black;
        font-size: 18px;
    }
    h3 {
        position: absolute;
        z-index: 20;
        top: 20%;
        right: 30%;
        cursor: pointer;
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