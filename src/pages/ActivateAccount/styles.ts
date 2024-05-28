import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  gap: 1rem;

  .link {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  p {
    font-size: 1.5rem;
  }

  img {
    width: 300px;
    border-radius: 8px;
  }
`;
