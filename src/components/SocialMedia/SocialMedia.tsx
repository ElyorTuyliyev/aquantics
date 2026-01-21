"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { SocialMediaStyle } from "./SocialMedia.style";
import cardIcon from "../../assets/icons/card-facebook.png";
import { usePathname } from "next/navigation";

export function SocialMedia() {
  const path = usePathname();
  return (
    <SocialMediaStyle>
      <Box className="media">
        <Typography className="media__title">
          {path === "/contact" ? "ССЫЛКИ НА НАШИ СОЦИАЛЬНЫЕ СЕТИ" : ""}
        </Typography>
        <Typography className="media__subtitle">
          Присоединяйся <span className="media__subtitle-color">к нам</span>
        </Typography>
      </Box>
      <Box className="card__wrapper">
        <Card className="card">
          <CardMedia
            className="media__icon"
            component="img"
            image={cardIcon.src}
            title="media-icon"
          />
          <CardContent className="card__content">
            <Typography className="card__title">
              уже более 5000 тысяч людей в курсе новостей
            </Typography>
            <Button variant="contained">Присоединиться</Button>
          </CardContent>
        </Card>

        <Card className="card">
          <CardMedia
            className="media__icon"
            component="img"
            image={cardIcon.src}
            title="media-icon"
          />
          <CardContent className="card__content">
            <Typography className="card__title">
              уже более 5000 тысяч людей в курсе новостей
            </Typography>
            <Button variant="contained">Присоединиться</Button>
          </CardContent>
        </Card>

        <Card className="card">
          <CardMedia
            className="media__icon"
            component="img"
            image={cardIcon.src}
            title="media-icon"
          />
          <CardContent className="card__content">
            <Typography className="card__title">
              уже более 5000 тысяч людей в курсе новостей
            </Typography>
            <Button variant="contained">Присоединиться</Button>
          </CardContent>
        </Card>
      </Box>
    </SocialMediaStyle>
  );
}
