import Carousel from "react-bootstrap/Carousel";
import { Container } from "./styles";
import { useAddContext } from "../../hooks/useAddContext";

export function Slide() {
  const { isEnglish, setisEnglish } = useAddContext();
  const handleDownload = () => {
    const downloadLink =
      "https://drive.google.com/uc?export=download&id=16yrd-VO06s-fSFptDe32OJlj7v7Mae0o";
    const link = document.createElement("a");
    link.href = downloadLink;
    link.setAttribute("download", "nome_do_arquivo.extensao"); // Substitua pelo nome do arquivo e sua extensão
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/me.png" alt="First slide" />
          <Carousel.Caption>
            <h3>
              {isEnglish ? "Hi, i'm Daniel Hott :)" : "Olá, sou o Daniel Hott :)"}
            </h3>
            <p>
              {isEnglish ? "Frontend Developer" : "Desenvolvedor Front-End"}
            </p>
            <button onClick={handleDownload}>
              {isEnglish ? "Download CV" : "Baixar Currículo"}
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  onClick={() => window.open('https://github.com/DanielHott', '_blank')} style={{'cursor': 'pointer'}}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>{isEnglish ? "My projects" : "Meus projetos"}</h3>
            <p>
              {isEnglish
                ? "Take a look at some projects I've developed to get a better understanding of my work."
                : "Veja alguns projetos que desenvolvi para conhecer melhor meu trabalho."}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/11/30/20/44/computer-1873831_1280.png"
            alt="test"
          />{" "}
          <Carousel.Caption>
            <h3>{isEnglish ? "Specialties" : "Especialidades"}</h3>
            <p>
              {isEnglish
                ? "Learn a bit about my domain stacks."
                : "Conheça um pouco sobre as minhas stacks de domínio."}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
