import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import { HeaderLink } from "./constants";
import { HeaderStyle } from "./Header.styles";
import Image from "next/image";

import instagramIcon from "../../assets/icons/instagram-icon.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import vkIcon from "../../assets/icons/icons_vk.svg";

export default function Header() {
  return (
    <HeaderStyle>
      <header className="header">
        <Container maxWidth="xl">
          <Box className="header__wrapper">
            <Box className="header__link-wrapper">
              {HeaderLink.map(({ name }, i) => (
                <Link className="header__links" href="#" key={i}>
                  {name}
                </Link>
              ))}
            </Box>
            <Box className="header__action-wrapper">
              <Button variant="outlined">Обратный звонок</Button>
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
