import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  ContainerLogin,
  ContainerImage,
  ContainerForm,
} from "./styles";
import Logo from "../../assets/Logo.jpeg";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { Snackbar, SnackbarOrigin } from "@mui/material";

interface State extends SnackbarOrigin {
  open: boolean;
  message: string;
  severity: "success" | "error";
}

interface ResetPasswordForm {
  password: string;
}

export function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<ResetPasswordForm>();
  const { token } = useParams<{ token: string }>();
  const history = useNavigate();
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    severity: "success",
  });
  const { vertical, horizontal, open, message, severity } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const onResetPassword = (data: ResetPasswordForm) => {
    setLoading(true);
    axios
      .post(`http://localhost:3000/api/users/reset/${token}`, data)
      .then((response) => {
        console.log(response.data);
        alert("Senha redefinida com sucesso!");
        history("/");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao redefinir a senha:", error);
        alert("Erro ao redefinir a senha.");
        setLoading(false);
      });
  };

  return (
    <Container>
      <ContainerLogin>
        <ContainerImage></ContainerImage>
        <ContainerForm>
          <img src={Logo} alt="Logo da AdoPet" />
          <h1>Refinir Senha</h1>

          <form onSubmit={handleSubmit(onResetPassword)}>
            <input
              type="password"
              placeholder="Nova Senha"
              {...register("password")}
            />
            <button type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Redefinir Senha"}
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
