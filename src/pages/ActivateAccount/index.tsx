import { Container } from "./styles";
import DogActivateAccount from "../../assets/dog-active-account.jpg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function ActivateAccount() {
  const { token } = useParams();
  const [, setMessage] = useState<string>("");

  useEffect(() => {
    const activeAccount = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/users/activate/${token}`
        );
        setMessage(response.data.message);
      } catch (error) {
        setMessage("Erro ao ativar a conta. O token pode ter expirado.");
      }
    };

    activeAccount();
  }, [token]);

  return (
    <Container>
      <p>
        Usuário confirmado com sucesso! Para acessar a sua conta click{" "}
        <Link to={"/login"} className="link">
          aqui
        </Link>{" "}
      </p>
      <img
        src={DogActivateAccount}
        alt="Cachorro aguardando a conta ser ativada"
      />
    </Container>
  );
}
