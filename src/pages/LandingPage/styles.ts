import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const ContainerAdopt = styled.section`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  height: 65vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0rem 3rem;

  img {
    width: 400px;
    height: 480px;
  }
`;

export const ContainerBoxAdopt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-size: 3.5rem;
    width: 650px;

    span {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
  }

  button {
    background-color: transparent;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    color: ${({ theme }) => theme.COLORS.WHITE};

    padding: 0.5rem 2rem;
    border-radius: 5px;
  }
`;

export const ContainerCarousel = styled.section`
  padding: 2rem 0rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
