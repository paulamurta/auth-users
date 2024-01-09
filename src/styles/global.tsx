import { createGlobalStyle, css } from "styled-components";
import { theme } from "./themes/theme";
import Montserrat200 from "../fonts/montserrat-v26-latin-200.woff2";
import Montserrat400 from "../fonts/montserrat-v26-latin-400.woff2";
import Montserrat600 from "../fonts/montserrat-v26-latin-600.woff2";
import Montserrat800 from "../fonts/montserrat-v26-latin-800.woff2";
import Playfair900 from "../fonts/playfair-v2-latin-900.woff2";
import styled from "styled-components";
import { IContainer } from "./types";

const GlobalStyle = createGlobalStyle`

@font-face {
font-family: "Montserrat 200";
  src: url(${Montserrat200}) format('woff2'),
}

@font-face {
font-family: "Montserrat 400";
  src: url(${Montserrat400}) format('woff2'),
}

@font-face {
font-family: "Montserrat 600";
  src: url(${Montserrat600}) format('woff2'),
}

@font-face {
font-family: "Montserrat 800";
  src: url(${Montserrat800}) format('woff2'),
}

@font-face {
font-family: "Playfair 900";
  src: url(${Playfair900}) format('woff2'),
}


* {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    font-family: "Montserrat 400", sans-serif;
    scroll-behavior: smooth;
    font-weight: normal;
  }

  body {
    background-color: ${theme.colors.typography.white};
    width: 100vw;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    transition: all 0.2s ease-in;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.light.mediumDark};
    border-radius: 10px;
    transition: all 0.2s ease-in;

  }

  button {
    cursor: pointer;

    &:disabled {
    cursor: not-allowed;
    background-color: ${theme.colors.light.mediumDark};
    color: ${theme.colors.typography.body};
    border: none;

      &:hover {
        background-color: ${theme.colors.light.mediumDark};
      }

      &:active {
        background-color: ${theme.colors.light.mediumDark};}
    }
  }

  button, input {
    outline: 0;
  }

  ul,ol {
	list-style: none;
}

`;
export default GlobalStyle;

export const ContainerRow = styled.div<IContainer>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1vw;
  ${(props) =>
    props.position === "left"
      ? css`
          justify-content: flex-start;
        `
      : props.position === "right"
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: space-between;
        `}
`;

export const ContainerColumn = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 1vh;
  ${(props) =>
    props.position === "top"
      ? css`
          justify-content: flex-start;
        `
      : props.position === "bottom"
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: center;
        `}
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5vw;
  margin-bottom: 4vh;

  svg {
    color: ${({ theme }) => theme.colors.typography.body};
    height: clamp(1.2rem, 1.2rem + 5.3vh, 4.2rem);
    width: clamp(1.2rem, 1.2rem + 5.3vh, 4.2rem);
  }
`;

export const OverlayModal = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
  gap: 1rem;
`;

export const SmallButtonsBox = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
  gap: 1rem;
`;
