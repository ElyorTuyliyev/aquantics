import { Container, Typography } from "@mui/material";
import { SocialMedia } from "../components/SocialMedia/SocialMedia";
import { HomeStyle } from "./home.style";
import Highlight from "../components/Highlight/Highlight";
export default function home() {
  return (
    <HomeStyle>
      <main>
        <Container maxWidth="xl">
          <Typography className="home__title">
            Обучение дайвингу в Москве
          </Typography>
          <Typography className="home__subtitle">
            Дайвинг <span className="home__subtitle-color">в Москве</span>
          </Typography>
          <Typography className="home__description">
            Добро пожаловать! На страницах нашего сайта вы найдете качественную,
            нужную информацию касаемо вашего увлечения. Более подробно о нас вам
            расскажут разделы нашего сайта, благодаря отзывам, отчетам, статьям
            вы познакомитесь с нами поближе, узнаете, что дайвинг в Москве это
            реальность. Много полезной информации вам предоставит социальный
            блог «Акватика» там же, вы можете размещать свои отчеты и отзывы о
            путешествиях, а так же находить новых друзей по увлечению. Для
            прямого общения он-лайн, приглашаем Вас на тематический форум и в
            соц сети, где "живут" участники клуба которые всегда рады новым
            знакомствам.
          </Typography>
          <SocialMedia />
        </Container>
        <section className="">
          <Typography variant="h1">Горячие предложения</Typography>
          <Typography variant="h1">
            Горячие <Highlight>предложения</Highlight>
          </Typography>
        </section>
      </main>
    </HomeStyle>
  );
}
