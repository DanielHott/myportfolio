import { Container, Cards } from "./styles";
import { useAddContext } from "../../hooks/useAddContext";

export function MyCards() {
  const {
    setisModalOpen,
    isModalOpen,
    isModalProfileOpen,
    setisModalProfileOpen,
    isModalProjectOpen, 
    setisModalProjectOpen
  } = useAddContext();
  return (
    <Container>
      <Cards
      onClick={() => isModalProjectOpen ? setisModalProjectOpen(false) : setisModalProjectOpen(true)}
      >
        <iframe
          title="projects"
          src="https://giphy.com/embed/KdbwL1H0R8WzEnm745"
          width="233"
          height="480"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        Meus Projetos
      </Cards>
      <Cards
        onClick={() =>
          isModalProfileOpen
            ? setisModalProfileOpen(false)
            : setisModalProfileOpen(true)
        }
      >
        <img
          src="myphoto.jpg"
          alt="projetos"
        ></img>
        Meu Perfil
      </Cards>
      <Cards
        onClick={() =>
          isModalOpen ? setisModalOpen(false) : setisModalOpen(true)
        }
      >
        <iframe
          title="trajetory"
          src="https://giphy.com/embed/JH8yeSvT8CsEVmtPLa"
          width="300"
          height="480"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        Minha Trajetória{" "}
      </Cards>
    </Container>
  );
}
