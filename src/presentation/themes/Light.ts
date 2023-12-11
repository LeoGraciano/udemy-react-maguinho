import { ptBR } from "@material-ui/core/locale";
import { createTheme } from "@mui/material";
import { blue, orange } from "@mui/material/colors";

export const LightTheme = createTheme(
  {
    palette: {
      primary: {
        main: blue[700],
        dark: blue[800],
        light: blue[500],
        contrastText: "#fff",
      },
      secondary: {
        main: orange[500],
        dark: orange[400],
        light: orange[300],
        contrastText: "#fff",
      },
      background: {
        default: "#f7f6f3",
        paper: "#fff",
      },
    },
  },
  ptBR
);
