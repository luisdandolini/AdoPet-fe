import styled from "styled-components";

export const Container = styled.header`
  height: 10vh;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0rem 3rem;

  img {
    width: 60px;
    height: 60px;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LinkButton = styled.button`
  border: none;
  background-color: transparent;

  &:first-child {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
`;
