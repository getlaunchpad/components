import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  color,
  fontSize,
  fontWeight,
  ColorProps,
  FontSizeProps,
  FontWeightProps
} from "styled-system";
import { theme } from "../theme";

interface TextProps extends ColorProps, FontSizeProps, FontWeightProps {
  type?: "small" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children?: ReactNode;
}

export const Text = ({ type = "span", children, ...rest }: TextProps) => {
  const StyledComponent = styled(type)`
    ${color}
    ${fontSize}
    ${fontWeight}
    font-family: ${theme.fonts}
  `;
  const Component = React.createElement(StyledComponent, {
    children,
    ...rest
  });

  return Component;
};
