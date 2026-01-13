import Image from "next/image";
import footerImg from "../../assets/imgs/waves.png";
import { FooterStyle } from "./Footer.style";

export default function Footer() {
  return (
    <FooterStyle>
      <footer className="footer">
        <Image className="footer__img" src={footerImg} alt="img-footer" />
      </footer>
    </FooterStyle>
  );
}
