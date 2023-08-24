import Carousel from "react-bootstrap/Carousel";
import { Container } from "./styles";
import { useAddContext } from "../../hooks/useAddContext";

export function Projects() {
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
    <Container id="projects">
      <Carousel>
        <Carousel.Item onClick={() => window.open('https://github.com/DanielHott/Bank', '_blank')} style={{'cursor': 'pointer'}}>
          <img className="d-block w-100" src="/ngfull.png" alt="First slide" />
          <Carousel.Caption>
            <h3>
              {isEnglish ? "Project Bank" : "Projeto de Banco"}
            </h3>
            <p>
              {isEnglish ? "Is a full-stack banking application that allows you to perform transactions, track your transactions, create a new account, and login. Click and go to repository." : "Aplicação Fullstack que permite realizar transações entre usuários, listar, criar um novo usuário. Tudo isso com transações criptografadas e design responsivo. Clique para visitar o repositório."}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={() => window.open('https://github.com/DanielHott/test-fullstack', '_blank')} style={{'cursor': 'pointer'}}>
          <img
            className="d-block w-100"
            src="/uol_inicial2.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>{isEnglish ? "Uol project" : "Projeto Uol"}</h3>
            <p>
              {isEnglish
                ? "A fullstack application with the ability to list, create, and edit users in a customer panel. Click and go to repository."
                : "uma aplicação fullstack com possibilidade de listar, criar e editar usuários num painel de clientes. Clique para ir ao repositório."}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={() => window.open('https://github.com/DanielHott/planos', '_blank')} style={{'cursor': 'pointer'}}>
          <img
            className="d-block w-100"
            src="organizer.png"
            alt="test"
          />{" "}
          <Carousel.Caption>
            <h3>{isEnglish ? "Organizer" : "Organizador"}</h3>
            <p>
              {isEnglish
                ? "An application developed with the purpose of assisting the user in organizing for the job selection processes they are participating in."
                : "Aplicação desenvolvida com o intuito de ajudar a se organizar para os processos seletivos que o usuário está participando."}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
