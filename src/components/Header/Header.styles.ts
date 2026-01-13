"use client"

import theme from "@/src/app/theme/theme";
import styled from "@emotion/styled";

export const HeaderStyle = styled.div`
.header__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 41px 15px;
}

.header__link-wrapper  {
    display: flex;
    align-items: center;
    gap: ${theme.spacing(5)};
}

.header__links {
    font-size: 18px;
    font-weight: 600;
    color: ${theme.palette.common.white};
}

.header__action-wrapper {
    display: flex;
    align-items: center;
    gap: ${theme.spacing(3)};
}
`