"use client";

import styled from "@emotion/styled";
import theme from "../theme/theme";

export const HomeStyle = styled.div`
  .home__title {
    text-align: center;
    color: ${theme.palette.grey[500]};
  }

  .home__subtitle {
    font-size: 64px;
    text-align: center;
    color: ${theme.palette.primary.dark};
  }

  .home__subtitle-color {
    color: ${theme.palette.primary.light};
  }

  .home__description {
    text-align: center;
    font-size: 18px;
    word-spacing: 5%;
    color: ${theme.palette.grey[500]};
  }
`;
