import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    font-family: "700";
  }

  @font-face {
    font-family: "700";
    src: url(/fonts/SUITE-Bold.otf);
  }
  @font-face {
    font-family: "400";
    src: url(/fonts/SUITE-Regular.otf);
  }
`;


