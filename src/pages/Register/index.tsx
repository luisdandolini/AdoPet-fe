import {
  Container,
  ContainerLogin,
  ContainerImage,
  ContainerForm,
} from "./styles";
import Logo from "../../assets/Logo.jpeg";

export function Register() {
  return (
    <Container>
      <ContainerLogin>
        <ContainerImage></ContainerImage>
        <ContainerForm>
          <img src={Logo} alt="Logo da AdoPet" />
          <h1>Registre-se</h1>

          <form>
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Cadastre-se</button>
          </form>
        </ContainerForm>
      </ContainerLogin>
    </Container>
  );
}
