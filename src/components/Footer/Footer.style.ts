"use client"


import theme from "@/src/app/theme/theme";
import styled from "@emotion/styled";


export const FooterStyle = styled.div`
display: flex;
flex-direction: column;
.footer {
    padding: 0 0 29px 0 ;
    background-color:#2054a0;
}

.footer__img {
    width: 100%;
}

.footer__link-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer__link {
    display: flex;
    align-items: center;
    gap: ${theme.spacing(5)};
}

.footer__link-item {
    color: ${theme.palette.common.white};
    font-size: 18px;
    font-weight: 600;
}

.footer__contact-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer__contact-box {
    display: flex;
    flex-direction: column;
}

.footer__contact {
    font-size: 22px;
    color: ${theme.palette.common.white};
}

.footer-gmail {
    font-size: 14px;
}

.footer__contact-media {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
}

.footer__media {
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: end;
}

.footer__company-name {
    color: ${theme.palette.common.white};
    font-size: 12px;
    width: 198px;
}
`