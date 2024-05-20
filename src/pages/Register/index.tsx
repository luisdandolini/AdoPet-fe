import {
  Container,
  ContainerLogin,
  ContainerImage,
  ContainerForm,
  Div,
} from "./styles";
import Logo from "../../assets/Logo.jpeg";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputMask } from "@react-input/mask";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { Snackbar, SnackbarOrigin } from "@mui/material";
import { useState } from "react";

interface State extends SnackbarOrigin {
  open: boolean;
}

interface Register {
  username: string;
  password: string;
  email: string;
  phone: string;
  birthdate: string;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
}

const UserRegisterSchema = zod.object({
  username: zod.string().min(1, "O Usuário é obrigatório"),
  password: zod.string().min(1, "A Senha é obrigatória"),
  email: zod.string().email("Email inválido"),
  phone: zod.string().min(1, "O Telefone é obrigatório"),
  birthdate: zod.string().min(1, "A Data de Nascimento é obrigatória"),
  cep: zod.string().min(1, "O CEP é obrigatório"),
  state: zod.string().min(1, "O Estado é obrigatório"),
  city: zod.string().min(1, "A Cidade é obrigatória"),
  neighborhood: zod.string().min(1, "O Bairro é obrigatório"),
  street: zod.string().min(1, "A Rua é obrigatória"),
});

export function Register() {
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(UserRegisterSchema),
  });

  const onSubmitRegister = (data: Register) => {
    axios
      .post("http://localhost:3000/api/users/register", data)
      .then((response) => {
        console.log(response);
        setState({ ...state, open: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <ContainerLogin>
        <ContainerImage></ContainerImage>
        <ContainerForm>
          <img src={Logo} alt="Logo da AdoPet" />
          <h1>Registre-se</h1>

          <form onSubmit={handleSubmit(onSubmitRegister)}>
            <div>
              <Div>
                <input
                  type="text"
                  placeholder="Usuário*"
                  {...register("username")}
                />
                {errors.username && (
                  <span>{String(errors.username.message)}</span>
                )}
              </Div>
              <Div>
                <input
                  type="password"
                  placeholder="Senha*"
                  {...register("password")}
                />
                {errors.password && (
                  <span>{String(errors.password.message)}</span>
                )}
              </Div>
            </div>
            <div>
              <Div>
                <input
                  type="email"
                  placeholder="Email*"
                  {...register("email")}
                />
                {errors.email && <span>{String(errors.email.message)}</span>}
              </Div>
              <Div>
                <InputMask
                  mask="+55 (__) _____-____"
                  replacement={{ _: /\d/ }}
                  placeholder="Telefone*"
                  {...register("phone")}
                />
                {errors.phone && <span>{String(errors.phone.message)}</span>}
              </Div>
            </div>
            <div>
              <Div>
                <InputMask
                  mask="__/__/____"
                  replacement={{ _: /\d/ }}
                  placeholder="Data de Nascimento*"
                  {...register("birthdate")}
                />
                {errors.birthdate && (
                  <span>{String(errors.birthdate.message)}</span>
                )}
              </Div>
              <Div>
                <InputMask
                  mask="_____-___"
                  replacement={{ _: /\d/ }}
                  placeholder="CEP*"
                  {...register("cep")}
                />
                {errors.cep && <span>{String(errors.cep.message)}</span>}
              </Div>
            </div>
            <div>
              <Div>
                <input
                  type="text"
                  placeholder="Estado*"
                  {...register("state")}
                />
                {errors.state && <span>{String(errors.state.message)}</span>}
              </Div>
              <Div>
                <input
                  type="text"
                  placeholder="Cidade*"
                  {...register("city")}
                />
                {errors.city && <span>{String(errors.city.message)}</span>}
              </Div>
            </div>
            <div>
              <Div>
                <input
                  type="text"
                  placeholder="Bairro*"
                  {...register("neighborhood")}
                />
                {errors.neighborhood && (
                  <span>{String(errors.neighborhood.message)}</span>
                )}
              </Div>
              <Div>
                <input type="text" placeholder="Rua*" {...register("street")} />
                {errors.street && <span>{String(errors.street.message)}</span>}
              </Div>
            </div>
            <button type="submit">Cadastre-se</button>
            <Link to={"/"} className="back">
              <ArrowBackIcon />
              Voltar
            </Link>
          </form>
        </ContainerForm>
      </ContainerLogin>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Usuário cadastrado com sucesso!"
        key={vertical + horizontal}
      />
    </Container>
  );
}
