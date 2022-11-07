import styled from "styled-components";

export const Container = styled.div`
  font-family: "Open Sans";
  display: flex;
  width: 100%;
  height: 100%;
  background: #F2E9E1;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 50px;
  @media (max-width: 1000px) {
  display: flex;

  flex-wrap: wrap;
  width: 100%;
 }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items:center;
  border-radius: 5px;
  box-shadow: 2px 7px 100px 2px #DB9A8F;
  padding: 30px;
  background-color: white;
  text-align: center;
  color: #DB9A8F;
  margin: 20px;
  width: 100%;
  transition: all 0.3s ease-out;
  font-weight: 900;
  :hover {
  transform: translateY(-5px);
  cursor: pointer;
  filter: grayscale(0%);
  box-shadow: 2px 7px 20px 7px #DB9A8F;
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

  @media (max-width: 1000px) {
    display: flex;
    padding: 10px;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    width: 100%;
    img { 
    width: 100%;
    height: 100%;
    margin-bottom: 12px;
}
iframe { 
    width: 100%;
    height: 420px;
    margin-bottom: 12px;
}
 }
`;
      