import { useAddContext } from "../../hooks/useAddContext";
import { AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { Container, Content, Pelicula } from "./styles";

export function Profile () {
    const { isModalProfileOpen, setisModalProfileOpen} = useAddContext();
    return (
        <Container isAddOpen={isModalProfileOpen} onClick={() => isModalProfileOpen ? setisModalProfileOpen(false) : setisModalProfileOpen(true)}>
            <Pelicula />
            <Content>
                <h3>X</h3>
                <a id="linkedin" target="_blank" href="https://www.linkedin.com/in/danielhott/" rel="noreferrer"><AiFillLinkedin /></a>
                <a id="zap" target="_blank" href="https://wa.me/5524998658881" rel="noreferrer"><AiOutlineWhatsApp /></a>
                <a id="git" target="_blank" href="https://github.com/DanielHott" rel="noreferrer"><FaGithub/></a>
            </Content>
        </Container>
    )
}