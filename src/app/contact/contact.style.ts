"use client"

import theme from "@/src/theme/theme";
import styled from "@emotion/styled";

export const ContactStyle = styled.div`
.contact__wrapper {
    margin: 0 40px;
    padding: 25px 46px;
    border-radius: 10px;
    background-color: ${theme.palette.grey[100]};
}

.contact__title  {
    font-size: 24px;
    color: ${theme.palette.primary.dark};
    padding: 0 0 20pxs;
}

.contact {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1)};
}

.contact__location {
    font-size: 14px;
    color: ${theme.palette.grey[500]};
    
}

.contact__gmail-wrapper {
    display: flex;
    gap: ${theme.spacing(3)};
}

.contact__skype-box ,.contact__gmail-box {
    display: flex;
    gap: ${theme.spacing(0.8)};
}

.contact__skype , .contact__gmail {
    font-size: 14px;
    color: ${theme.palette.grey[500]};
}
`