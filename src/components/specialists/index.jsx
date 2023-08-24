import { Container } from "./styles";
import { useAddContext } from "../../hooks/useAddContext";

export function Speciality() {
  const {isEnglish} = useAddContext();
  if(!isEnglish){
  return (
    <Container>
      <div id="services-area">
        <div className="container">
          <div className="row">
            <hr></hr>
            <div className="col-12">
              <h2 className="main-title">Minhas especialidades</h2>
            </div>
            <div className="col-md-4 service-box">
              <i className="fas fa-mobile-alt"></i>
              <h4>Sites Responsivos</h4>
              <p>
                Design responsivo é uma abordagem de desenvolvimento web que
                garante que sites se ajustem automaticamente a diferentes
                dispositivos e tamanhos de tela.
              </p>
            </div>
            <div className="col-md-4 service-box">
              <i className="fa-solid fa-code"></i>
              <h4>Criação de Sites</h4>
              <p>
                Desenvolvimento de websites: criar páginas da web eficazes e
                atrativas.
              </p>
            </div>
            <div className="col-md-4 service-box">
              <i className="fas fa-paint-brush"></i>
              <h4>UI Designer</h4>
              <p>
                O UI designer projeta a aparência visual e a estética de
                produtos digitais, considerando elementos como layout, cores e
                tipografia para melhorar a experiência do usuário.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
 }
 else {
    return (
        <Container>
  <div id="services-area">
    <div className="container">
      <div className="row">
      <hr></hr>

        <div className="col-12">
          <h2 className="main-title">My Specialties</h2>
        </div>
        <div className="col-md-4 service-box">
          <i className="fas fa-mobile-alt"></i>
          <h4>Responsive Websites</h4>
          <p>
            Responsive design is a web development approach that ensures websites automatically adjust to different devices and screen sizes.
          </p>
        </div>
        <div className="col-md-4 service-box">
          <i className="fa-solid fa-code"></i>
          <h4>Website Creation</h4>
          <p>
            Website development: creating effective and appealing web pages.
          </p>
        </div>
        <div className="col-md-4 service-box">
          <i className="fas fa-paint-brush"></i>
          <h4>UI Designer</h4>
          <p>
            The UI designer designs the visual appearance and aesthetics of digital products, considering elements like layout, colors, and typography to enhance the user experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</Container>
    )
 }
};
