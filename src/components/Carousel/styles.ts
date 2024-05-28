import styled from "styled-components";

export const Container = styled.div`
  height: 40vh;
  margin: 0 auto;
  padding: 0rem 5rem;
`;

export const ContainerPet = styled.div`
  width: 280px;
  height: 320px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  margin-left: 4.5rem;
  img {
    width: 280px;
    height: 180px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Name = styled.p`
  padding: 0.5rem;
`;

export const State = styled.p`
  padding: 0.5rem;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.8rem;

  button {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    padding: 0.3rem 1rem;
    border-radius: 5px;
  }
`;
