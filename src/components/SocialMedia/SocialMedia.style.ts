"use client"

import theme from "@/src/theme/theme";
import styled from "@emotion/styled";

export const  SocialMediaStyle = styled.div`

max-width: 1050px;
width: 100%;
margin: 0 auto;
padding: 53px 0 73px 0 ;

.media__title {
  font-size: 18px;
  text-align: center;
  color: ${theme.palette.grey[500]};
}

.media__subtitle {
  font-size: 64px;
  text-align: center;
  color: #103A58;
  padding: 0 0 43px ;
} 

.media__subtitle-color { 
  color: #5FC9F3  ;

}

.card__wrapper {
  display: flex;
  gap: 8px;
  justify-content: space-between;
}

.card__title {
  font-size: 18px;
  word-spacing: 10%;
  text-align: center;
  padding: 22px 0 ;
  color: ${theme.palette.grey[500]};
}

.card {
  width :100% ;
  max-width: 325px;
  display: flex;
  align-items: center;  
  padding: 41px 0 17px  0 ;
  border: none;
  flex-direction: column;
  
}

.card__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
 
 .media__icon {
  width: 102px;
  height: 102px;
 }
`