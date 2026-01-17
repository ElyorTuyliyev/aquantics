import { Box, Container, Typography } from "@mui/material";
import { ContactStyle } from "./contact.style";
import skypeIcon from "../../assets/icons/skype.svg";
import map from "../../assets/imgs/Map.png";
import gmailIcon from "../../assets/icons/gmail-icon.svg";
import Image from "next/image";
import { SocialMedia } from "@/src/components/SocialMedia/SocialMedia";

export default function Contact() {
  return (
    <ContactStyle>
      <Container maxWidth="xl">
        <Box className="contact__wrapper">
          <Box className="contact">
            <Typography className="contact__title" variant="h1">
              Контакты
            </Typography>
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
          <Box className="education">
            <Typography className="education__title" variant="h1">
              Обучение рядом с домом
            </Typography>
            <Typography className="education__location">
              Выберите удобное для вас месторасположение бассейна и свяжитесь с
              нашими менеджерами.
            </Typography>
            <Typography className="education__location">
              м. Нагатинская, Тульская – Бассейн Труд (Южный округ)
            </Typography>
            <Typography className="education__location">
              м. Авиамоторная – Бассейн Пятый Элемент (Восточный округ)
            </Typography>
            <Typography className="education__location">
              м. Черкизовская – Бассейн РГУФК (Восточный округ)
            </Typography>
            <Typography className="education__location">
              м. Петровско Разумовская – Бассейн Останкино (Северный округ)
            </Typography>
          </Box>
          <Box className="map">
            <Typography variant="h1" className="map__title">
              Карта
            </Typography>
            <Image src={map} alt="" className="map__images" />
          </Box>
        </Box>
        <SocialMedia />
      </Container>
    </ContactStyle>
  );
}
