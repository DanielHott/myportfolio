import { Container } from "./styles"
import { useAddContext } from "../../hooks/useAddContext";

export function About () {
    const { isEnglish, setisEnglish} = useAddContext();
    return (
        <Container id="about">
            <h2>{isEnglish ? `About me`: 'Sobre mim'}</h2>
            {isEnglish ? `Passionate about programming, I work as a front-end developer with market experience. 
            My latest role was as a Senior Development Analyst at Multimarcas Consórcios. 
            I hold a degree in full-stack development from the Trybe programming school and 
            consistently strive to study and stay updated in the field, seeking technical knowledge, 
            management, and leadership skills, while also aiming to enhance my soft skills.`: `Apaixonado por programação, atuo como desenvolvedor front-end com experiência no mercado. Minha 
            última experiência foi como analista de desenvolvimento pleno na Multimarcas Consórcios. Formado
            em desenvolvimento fullstack na escola de programação Trybe, procuro sempre estudar e me atualizar
            na área buscando por conhecimentos técnicos, gerenciamento e liderança além de procurar sempre
            desenvolver minhas soft-skills.`}
        </Container>
    )
}