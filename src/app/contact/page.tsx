import { Box, Container, Typography } from "@mui/material";
import { ContactStyle } from "./contact.style";

export default function Contact() {
  return (
    <ContactStyle>
      <Container maxWidth="xl">
        <Box className="contact__wrapper">
          <Typography className="contact__title">Контакты</Typography>
          <Typography className="contact__location">
            <b>Центральный офис Акватика:</b>
            115569 Москва ул. Шипиловская д. 1 (м. Домодедовская, Орехово)
          </Typography>
          <Typography className="contact__location">
            <b> Телефон:</b>
            +7 (495) 545 67 02 или +7 (903) 199-39-10
          </Typography>
        </Box>
      </Container>
    </ContactStyle>
  );
}
