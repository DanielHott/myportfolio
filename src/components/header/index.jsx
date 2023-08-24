import { Container, Navigation } from "./styles"
import { useAddContext } from "../../hooks/useAddContext";
import { AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';


export function Header () {
    const { isEnglish, setisEnglish} = useAddContext();
    console.log('Me contrata, sou um ótimo dev, prometo!!')

    return (
        <Container>
            <img src="./hott.png" width={"99"} height={"89"} alt="minha logo"/>
            <Navigation>
            <a href="#projects">{isEnglish ? 'Projects': 'Projetos'}</a>
            <a href="#about">{isEnglish ? 'About': 'Sobre'}</a>
            <a id="linkedin" target="_blank" href="https://www.linkedin.com/in/danielhott/" rel="noreferrer">Linkedin</a>
            <a id="zap" target="_blank" href="https://wa.me/5524998658881" rel="noreferrer">Whatsapp</a>
            <a id="git" target="_blank" href="https://github.com/DanielHott" rel="noreferrer">Github</a>
            <a onClick={() => setisEnglish(true)}>🇺🇸</a>
            <a onClick={() => setisEnglish(false)}>🇧🇷</a>
            </Navigation>
        </Container>
    )
}