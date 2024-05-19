import styled from "styled-components";
import BackgroundImage from "../../assets/dog-cat.jpg";

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
  padding: 4rem 2rem;

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
    margin-top: 3rem;
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
  }

  img {
    width: 100px;
  }
`;

export const Divider = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_LIGTH};
  width: 80px;
`;

export const ContainerDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  margin: 1rem 0rem;
`;
