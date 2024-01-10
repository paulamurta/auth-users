import styled, { css } from "styled-components";
import { FormGroupProps } from "./types";

export const Container = styled.div<FormGroupProps>`
  ${(props) =>
    props.isInheritedWidth
      ? css`
          width: inherit;
        `
      : css`
          width: 100%;
        `}
  position: relative;
  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 14px;
    display: block;
    margin: 3px 0px 0px 3px;
    position: absolute;
    right: 0px;
  }
`;
