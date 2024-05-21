import {
  Container,
  ContainerLogin,
  ContainerImage,
  ContainerForm,
} from "./styles";
import Logo from "../../assets/Logo.jpeg";
import { Link } from "react-router-dom";
import * as zod from "zod";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Snackbar, SnackbarOrigin } from "@mui/material";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface State extends SnackbarOrigin {
  open: boolean;
  message: string;
  severity: "success" | "error";
}

interface ForgotPassword {
  email: string;
}

const ForgotPasswordSchema = zod.object({
  email: zod.string().email("Email inválido"),
});

export function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    severity: "success",
  });
  const { vertical, horizontal, open, message, severity } = state;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPassword>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const onForgotPassword = (data: ForgotPassword) => {
    setLoading(true);
    axios
      .post("http://localhost:3000/api/users/forgot-password", data)
      .then(() => {
        setState({
          ...state,
          open: true,
          message: "E-mail enviado com sucesso!",
          severity: "success",
        });
        setLoading(false);
      })
      .catch((error) => {
        setState({
          ...state,
          open: true,
          message: error.response?.data || "Erro ao enviar o e-mail.",
          severity: "error",
        });
        setLoading(false);
      });
  };

  return (
    <Container>
      <ContainerLogin>
        <ContainerImage></ContainerImage>
        <ContainerForm>
          <img src={Logo} alt="Logo da AdoPet" />
          <h1>Lembrar Senha</h1>

          <form onSubmit={handleSubmit(onForgotPassword)}>
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && <span>{String(errors.email.message)}</span>}
            <button type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Enviar"}
            </button>
          </form>
          <Link to={"/"} className="back">
            <ArrowBackIcon />
            Voltar
          </Link>
        </ContainerForm>
      </ContainerLogin>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: severity === "success" ? "#4caf50" : "#f44336",
            color: "#fff",
          },
        }}
      />
    </Container>
  );
}
