import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import { theme } from "../../shared/theme";

export const BaseStyles = createGlobalStyle`
  ${normalize}
  html {
    font-size: 16px;
    line-height: 1.5;
    color: ${theme.text.secondary};
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: ${theme.typography.type.primary};
    background: ${theme.ui.wash}
  }

  /* NextJS */
  html,
  body,
  #__next {
    height: 100%;
  }
`;
