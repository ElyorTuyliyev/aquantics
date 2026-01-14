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
    color: ${theme.palette.primary.dark};
}

.contact__location {
    font-size: 14px;
    color: ${theme.palette.grey[500]};
    
}
`