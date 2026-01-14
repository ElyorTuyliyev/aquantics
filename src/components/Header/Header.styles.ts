"use client"

import theme from "@/src/app/theme/theme";
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

.header__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 15px;
}

.header__link-wrapper  {
    display: flex;
    align-items: center;
    gap: ${theme.spacing(5)};
}

.header__links {
    font-size: 18px;
    font-weight: 600;
    color: ${theme.palette.common.black};
}

.header__action-wrapper {
    display: flex;
    align-items: center;
    gap: ${theme.spacing(3)};
}
`