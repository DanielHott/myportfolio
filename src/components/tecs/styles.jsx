import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: space-around;
    justify-content: center;
    color: #444;
    #content {
      display: flex;
      flex-direction: column;
      align-items: left;
      margin-top: 60px;
    }
    #about-area {
      width: 100%;
}

#titles {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-title {
  color: #444;
  margin: 0 0 65px 0;
  font-size: 40px;
  text-align: center;
}

.main-title::after {
  content: "";
  border-top: 2px solid #333;
  width: 15%;
  position: absolute;
  top: 60px;
  left: 42.5%;
}

.about-title {
  font-size: 24px;
  color: #444;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 30px;
}

#about-list {
  list-style: none;
  padding-left: 0;
  margin-left: 11em;
}

#about-list li {
  line-height: 30px;
  color: #444;
}

#about-list i {
  color: #d87a69;
  margin-right: 15px;
}
`;