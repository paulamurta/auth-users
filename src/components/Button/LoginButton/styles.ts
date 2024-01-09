import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  padding: 1vw;
  display: flex;
  color: ${({ theme }) => theme.colors.typography.lightGray};
  background-color: transparent;
  border-radius: 30px;
  font-size: clamp(0.1rem, 0.1rem + 1.8vh, 1.3rem);
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.typography.lightGray};

  &:hover {
    background-color: ${({ theme }) => theme.colors.typography.lightGray};
    color: ${({ theme }) => theme.colors.typography.body};
    transition: background-color 0.5s ease-in-out;
  }
`;
