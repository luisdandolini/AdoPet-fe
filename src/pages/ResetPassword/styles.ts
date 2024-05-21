import styled from "styled-components";
import BackgroundImage from "../../assets/reset-password.jpeg";

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
`;

export const ContainerImage = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  width: 400px;
  height: 600px;
`;

export const ContainerForm = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;

  width: 400px;
  height: 600px;

  h1 {
    margin-top: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    gap: 1.5rem;

    input {
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY};
    }

    button {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: bold;

      padding: 0.5rem 3rem;
      border: none;
      border-radius: 0.5rem;
      margin: 1rem 0rem;
    }

    span {
      font-size: 0.7rem;
      margin-top: -1rem;
      color: ${({ theme }) => theme.COLORS.ERROR};
    }
  }

  img {
    width: 100px;
  }

  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
  }
`;
