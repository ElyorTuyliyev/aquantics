import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
type HighlightProps = {
  children: ReactNode;
};
export default function Highlight({ children }: HighlightProps) {
  return (
    <Typography component="span" className="highlight">
      {children}
    </Typography>
  );
}
