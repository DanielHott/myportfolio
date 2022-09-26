import { useAddContext } from "../../hooks/useAddContext";
import { Container, Content, Pelicula } from "./styles";

export function Description () {
    const { isModalOpen, setisModalOpen } = useAddContext();
    return (
        <Container isAddOpen={isModalOpen} onClick={() => isModalOpen ? setisModalOpen(false) : setisModalOpen(true)}>
            <Pelicula />
            <Content>
                <h1>Olá! Sou o Daniel ✌</h1>
                <h3>X</h3>
                <p>Nascido em Volta Redonda - RJ, sempre fui movido pela curiosidade e fascinado por tecnologia. Tive meu primeiro
                    contato com programação desenvolvendo um servidor de jogos com 15 anos. Cursei Licenciatura em Física por 6 períodos
                    quando em 2021 resolvi transicionar minha carreira para programação após ter contato com javascript durante meus estudos.
                    Fiz diversos cursos na área onde me especializei em React.js, Next.js, Typescript e Node.js, apesar de estar aberto a estudar
                    e aprender qualquer tipo de linguagem de programação. Trabalho atualmente como desenvolvedor front-end e utilizo React.js no dia-a-dia.
                    Minha maior qualidade é saber me virar sozinho, sei procurar por informações, não me limito somente ao que já sei e sempre busco uma
                    solução para o problema em questão. Trabalho muito bem em equipe e estou sempre me atualizando.
                </p>
            </Content>
        </Container>
    )
}