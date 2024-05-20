import axios from "axios";
import {
  Container,
  ContainerLogin,
  ContainerImage,
  ContainerForm,
  Divider,
  ContainerDivider,
} from "./styles";
import Logo from "../../assets/Logo.jpeg";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserSchema = zod.object({
  username: zod.string().min(1, "O Usuário é obrigatório"),
  password: zod.string().min(1, "A Senha é obrigatória"),
});

export function Login() {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserSchema),
  });

  const onSubmitLogin = (data: any) => {
    console.log(data);
    axios
      .post("http://localhost:3000/api/users/login", data, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        setError("");
      })
      .catch((error) => {
        setError(error.response.data.message);
        console.error("Erro ao fazer login:", error.response.data.message);
      });
  };

  return (
    <Container>
      <ContainerLogin>
        <ContainerImage></ContainerImage>
        <ContainerForm>
          <img src={Logo} alt="Logo da AdoPet" />
          <h1>Bem-vindo</h1>

          <form onSubmit={handleSubmit(onSubmitLogin)}>
            <input
              type="text"
              placeholder="Usuário"
              {...register("username")}
            />
            {errors.username && <span>{String(errors.username.message)}</span>}
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            {errors.password && <span>{String(errors.password.message)}</span>}
            <a href="#">Esqueceu a sua senha?</a>
            <button type="submit">Login</button>
            {error && <span>{error}</span>}
          </form>

          <ContainerDivider>
            <Divider></Divider>
            <p>Ou</p>
            <Divider></Divider>
          </ContainerDivider>
          <Link to={"/register"}>Cadastre-se</Link>
        </ContainerForm>
      </ContainerLogin>
    </Container>
  );
}
