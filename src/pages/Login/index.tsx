import {
  Container,
  ContainerLogin,
  ContainerImage,
  ContainerForm,
  Divider,
  ContainerDivider,
} from "./styles";
import Logo from "../../assets/Logo.jpeg";

export function Login() {
  return (
    <Container>
      <ContainerLogin>
        <ContainerImage></ContainerImage>
        <ContainerForm>
          <img src={Logo} alt="Logo da AdoPet" />

          <h1>Bem-vindo</h1>

          <form>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <a href="#">Esqueceu a sua senha?</a>

            <button>Login</button>
          </form>

          <ContainerDivider>
            <Divider></Divider>
            <p>Ou</p>
            <Divider></Divider>
          </ContainerDivider>

          <a href="#">Cadastre-se</a>
        </ContainerForm>
      </ContainerLogin>
    </Container>
  );
}
