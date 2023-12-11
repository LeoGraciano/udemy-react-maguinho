import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { BoxProps } from "@mui/system";
import * as React from "react";

function Copyright(props: BoxProps) {
  return (
    <Box marginTop={2}>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        component="span"
        ref={null}
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="email:leonardoferreiragraciano@gmail.com">
          LeoGraciano
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}

export default function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffcf0f",
        backgroundImage: `url(https://plt.nauticoclubefronteira.com.br/static/assets/customs/associate/img/splash%20login.png), url(https://plt.nauticoclubefronteira.com.br/static/assets/customs/associate/img/Agrupar_1.png)`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center, center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: -15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box marginBottom={1} marginTop={1}>
            <Typography component="p" textAlign="center" color="secondary.main">
              Aqui a indicação transforma a sua experiência. Ganhe prêmios,
              compartilhe alegria e ganhe prêmios
            </Typography>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" />}
              label="Lembrar-me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
              }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Não tem uma conta? Cadastra-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </Box>
  );
}
