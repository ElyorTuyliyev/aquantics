import { Box, Container, Typography } from "@mui/material";
import { ContactStyle } from "./contact.style";
import skypeIcon from "../../assets/icons/skype.svg";
import gmailIcon from "../../assets/icons/gmail-icon.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <ContactStyle>
      <Container maxWidth="xl">
        <Box className="contact__wrapper">
          <Typography className="contact__title">Контакты</Typography>
          <Box className="contact">
            <Typography className="contact__location">
              <b>Центральный офис Акватика:</b>
              115569 Москва ул. Шипиловская д. 1 (м. Домодедовская, Орехово)
            </Typography>
            <Typography className="contact__location">
              <b> Телефон:</b>
              +7 (495) 545 67 02 или +7 (903) 199-39-10
            </Typography>
            <Box className="contact__gmail-wrapper">
              <Box className="contact__skype-box">
                <Image src={skypeIcon} alt="skype" />
                <Typography className="contact__skype">m2008v</Typography>
              </Box>
              <Box className="contact__gmail-box">
                <Image src={gmailIcon} alt="skype" />
                <Typography className="contact__gmail">
                  tuyliyevelyor@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </ContactStyle>
  );
}
