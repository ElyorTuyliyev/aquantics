"use client";

import theme from "@/src/theme/theme";
import styled from "@emotion/styled";

import logo from "../../assets/imgs/header_pic.png";

export const HeaderStyle = styled.div`
  .header__bac {
    background-image: url(${logo.src});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 303px;
  }

  .header__logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__btn {
    background-color: ${theme.palette.common.white};
    color: ${theme.palette.primary.dark};
    font-weight: 600;
    border-radius: 13px;
  }

  .header__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
  }

  .header__link-wrapper {
    display: flex;
    align-items: center;
    gap: ${theme.spacing(5)};
  }

  .header__links {
    font-size: 16px;
    font-weight: 600;
    color: ${theme.palette.primary.dark};
  }

  .header__links-active {
    color: ${theme.palette.primary.light};
  }

  .header__action-wrapper {
    display: flex;
    align-items: center;
    gap: ${theme.spacing(3)};
  }
`;
