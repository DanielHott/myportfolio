import styled from "styled-components";

export const Container = styled.div`
  font-family: "Open Sans";
  display: flex;
  width: 100%;
  height: 100%;
  background: #F2E9E1;
  align-items: center;
  justify-content: space-around;
  button {
    border-radius: 5px;
    padding: 10px;
    padding-right: 80px;
    padding-left: 80px;
    border: none;
    background-color: #F2E9E1;
    color: #d87a69;
  }
  button:hover {
    background-color: #e4d8d8;
  }
  p, h3 {
    font-weight: bold;
    text-shadow: 1px 1px black;
  }
  .carousel-item {
    height: 85vh;
    object-fit: cover;
  }
  @media (max-width: 1000px) {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
 }
`;