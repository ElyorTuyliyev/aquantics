import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import { HeaderLink } from "./constants";
import { HeaderStyle } from "./Header.styles";
import Image from "next/image";

import instagramIcon from "../../assets/icons/instagram-color-dark.svg";
import logo from "../../assets/icons/logo_aquatica.png";
import facebookIcon from "../../assets/icons/facebook-color-dark.svg";
import vkIcon from "../../assets/icons/vk-color-dark.svg";

export default function Header() {
  return (
    <HeaderStyle>
      <header className="header">
        <Box className="header__bac">
          <Container maxWidth="xl">
            <Box className="header__logo-wrapper">
              <Image src={logo} alt="logo" />
              <Button variant="contained">Обратный звонок</Button>
            </Box>
          </Container>
        </Box>
        <Container maxWidth="xl">
          <Box className="header__wrapper">
            <Box className="header__link-wrapper">
              {HeaderLink.map(({ name, link }, i) => (
                <Link className="header__links" href={link} key={i}>
                  {name}
                </Link>
              ))}
            </Box>
            <Box className="header__action-wrapper">
              <Image src={vkIcon} alt="icon" />
              <Image src={instagramIcon} alt="icon" />
              <Image src={facebookIcon} alt="icon" />
            </Box>
          </Box>
        </Container>
      </header>
    </HeaderStyle>
  );
}
