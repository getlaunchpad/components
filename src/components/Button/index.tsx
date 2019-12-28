import styled, { css } from "styled-components";
import { theme } from "../../shared/theme";
import { ButtonHTMLAttributes } from "react";

const base = css`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  padding: 11px 15px;
  box-shadow: ${theme.shadow.small};
  transition: all 100ms ease;
`;

const hover = css`
  box-shadow: ${theme.shadow.medium};
  transform: translateY(-1px);
`;

const active = css`
  box-shadow: none;
  transform: translateY(1px);
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
}

export const Primary = styled.button<ButtonProps>`
  ${base}
  color: ${({ outline }) => (outline ? theme.primary.six : "#fff")};
  border: ${({ outline }) =>
    outline ? `1px solid ${theme.brand.default}` : "1px solid transparent"};
  background: ${({ outline }) => (outline ? "none" : theme.brand.default)};

  :hover {
    ${hover}
    background: ${({ outline }) =>
      outline ? theme.primary.one : theme.primary.four}; 
  }

  :active {
    ${active}
    background: ${({ outline }) =>
      outline ? theme.primary.two : theme.primary.nine};
  }
`;

export const Secondary = styled.button<ButtonProps>`
  ${base}
  color: ${({ outline }) => (outline ? theme.neutral.nine : "#fff")};
  border: ${({ outline }) =>
    outline ? `1px solid ${theme.neutral.eight}` : "1px solid transparent"};
  background: ${({ outline }) => (outline ? "none" : theme.neutral.nine)};

  :hover {
    ${hover}
    background: ${({ outline }) =>
      outline ? theme.neutral.two : theme.neutral.eight}; 
  }

  :active {
    ${active}
    background: ${({ outline }) =>
      outline ? theme.neutral.three : theme.neutral.ten};
  }
`;
