import Image from "next/image";
import homeImage from "../assets/imgs/home-img.png";
import { Box } from "@mui/material";

export default function home() {
  return (
    <main>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Image
          style={{
            width: "100%",
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            zIndex: "-1",
          }}
          src={homeImage}
          alt="img"
        />
      </Box>
    </main>
  );
}
