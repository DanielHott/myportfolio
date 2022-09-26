import styled from "styled-components";

export const Container = styled.div`
  font-family: "Open Sans";
  display: flex;
  width: 100%;
  height: 100%;
  background: #222A35;
  align-items: center;
  justify-content: space-around;
`;

export const Cards = styled.div`
  border-radius: 5px;
  box-shadow: 2px 7px 100px 2px rgba(50, 50, 50, 0.22);
  padding: 30px;
  background-color: white;
  text-align: center;
  color: black;
  margin: 20px;
  width: 320px;
  transition: all 0.3s ease-out;
  font-weight: 900;
  :hover {
  transform: translateY(-5px);
  cursor: pointer;
  filter: grayscale(0%);
  box-shadow: 2px 7px 20px 7px gray;
/*   background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% ); */
  
  }
  img { 
    width: 320px;
    height: 420px;
    margin-bottom: 12px;
}
filter: grayscale(100%);
  iframe { 
    width: 320px;
    height: 420px;
    margin-bottom: 12px;
    pointer-events: none;
  }
`;
      