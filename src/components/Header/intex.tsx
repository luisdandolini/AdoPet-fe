import { Container, ContainerLinks, LinkButton } from "./styles";
import Logo from "../../assets/Logo.jpeg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <ContainerLinks>
        <LinkButton>
          <Link to={"/login"}>Pets para Adoção</Link>
        </LinkButton>
        <LinkButton>Blog</LinkButton>
        <LinkButton>Sobre Nós</LinkButton>
        <LinkButton>Contato</LinkButton>
      </ContainerLinks>
    </Container>
  );
}
