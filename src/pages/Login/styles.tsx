import styled from "styled-components";
import backgroundImage from "../../assets/images/nasa-Q1p7bh3SHj8-unsplash.jpg";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  padding: 1vw;
  width: 8vw;
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

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 4vh;
  background: rgba(33, 36, 39, 0.7);
`;

export const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightSide = styled.div`
  width: 100%;
  height: 100%;
`;

export const LoginCard = styled.div`
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding-top: 2rem;
`;
