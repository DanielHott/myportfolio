import { useAddContext } from "../../hooks/useAddContext";
import {AiFillGithub} from "react-icons/ai";
import { GrDeploy } from "react-icons/gr";
import { Container, Content, Pelicula } from "./styles";

export function Projects () {
    const { isModalProjectOpen, setisModalProjectOpen } = useAddContext();
    return (
        <Container isAddOpen={isModalProjectOpen} onClick={() => isModalProjectOpen ? setisModalProjectOpen(false) : setisModalProjectOpen(true)}>
            <Pelicula />
            <Content>
                <h1>Meus Projetos ⚙️</h1>
            <table>
                <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Deploy</th>
                <th>Repositório</th>
            </tr>
            <tr>
                    <td>Meus Processos</td>
                    <td>Aplicação para organização dos processos seletivos.</td>
                    <td><a target="_blank" rel="noreferrer" href="https://planos-seven.vercel.app"><GrDeploy /></a></td>
                    <td><a target="_blank" rel="noreferrer" href="https://github.com/DanielHott/planos"><AiFillGithub/></a></td>
             </tr>
            <tr>
                    <td>Jogadores</td>
                    <td>Salve seus jogadores favoritos!</td>
                    <td><a target="_blank" rel="noreferrer" href="https://jogadores-front-jw4s.vercel.app/"><GrDeploy /></a></td>
                    <td><a target="_blank" rel="noreferrer" href="https://github.com/DanielHott/jogadores-front"><AiFillGithub/></a></td>
            </tr>
            <tr>
                    <td>AppFood</td>
                    <td>Aplicação mobile para pesquisar receitas.</td>
                    <td><a target="_blank" rel="noreferrer" href="https://danielhott.github.io/food-app/#/"><GrDeploy /></a></td>
                    <td><a target="_blank" rel="noreferrer" href="https://github.com/DanielHott/food-app"><AiFillGithub/></a></td>
            </tr>
            </table>
                <h3>X</h3>
            </Content>
        </Container>
    )
}