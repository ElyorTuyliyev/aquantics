import Image from "next/image";
import footerImg from "../../assets/imgs/waves.png";
import logo from "../../assets/icons/logo_aquatica.png";
import { FooterStyle } from "./Footer.style";
import { Box, Container, Typography } from "@mui/material";
import { HeaderLink } from "../Header/constants";
import Link from "next/link";

import instagramIcon from "../../assets/icons/instagram-icon.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import vkIcon from "../../assets/icons/icons_vk.svg";

export default function Footer() {
  return (
    <FooterStyle>
      <Image className="footer__img" src={footerImg} alt="img-footer" />
      <footer className="footer">
        <Box className="footer__wrapper">
          <Container maxWidth="xl">
            <Box className="footer__link-wrapper">
              <Image src={logo} alt="logo" />
              <Box className="footer__link">
                {HeaderLink.map(({ link, name }, i) => (
                  <Link className="footer__link-item" href={link} key={i}>
                    {name}
                  </Link>
                ))}
              </Box>
            </Box>
            <Box className="footer__contact-wrapper">
              <Box className="footer__contact-box">
                <Link href="tel:+998884848833" className="footer__contact">
                  +998 (88) 484 88 33
                </Link>
                <Link href="#" className="footer__contact footer-gmail">
                  elyortuyliyev@gmail.com
                </Link>
              </Box>
              <Box className="footer__contact-media">
                <Box className="footer__media">
                  <Image src={vkIcon} alt="icon" />
                  <Image src={instagramIcon} alt="icon" />
                  <Image src={facebookIcon} alt="icon" />
                </Box>
                <Typography className="footer__company-name">
                  Все права защищены © 2025-2026 Обучение дайвингу в Jizzax
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </footer>
    </FooterStyle>
  );
}
