import styled from "styled-components";

export const Container = styled.div`
font-family: 'Roboto';
color: #0000009d;
.service-box {
    text-align: center;
    margin-bottom: 50px;
  }
  h2 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 40px;
  }
  
  .service-box i, .service-box h4 {
    transition: .5s;
  }
  
  .service-box i {
    font-size: 36px;
    margin-bottom: 20px;
    color: #444;
  }
  
  .service-box h4 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .service-box:hover > i, .service-box:hover > h4 {
    color: #d87a69;
  }
`;