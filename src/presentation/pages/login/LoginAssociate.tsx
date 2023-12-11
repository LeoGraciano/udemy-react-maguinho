import { BackgroundAssociateAccess } from "@/presentation/components/background";
import { Copyright } from "@/presentation/components/footer/Copyright";
import { ReferEarnInfo } from "@/presentation/components/information";
import { CustomTextInput } from "@/presentation/components/input";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Form } from "@unform/web";
import { useState } from "react";

export const LoginAssociate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <BackgroundAssociateAccess>
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
          <ReferEarnInfo />
          <Form
            onSubmit={(data) => console.log(data)}
            placeholder="Pagina de Login de Associado"
          >
            <CustomTextInput
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomTextInput
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              inputProps={{ "data-testid": "password" }}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" />}
              label="Lembrar-me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              id="submit"
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
          </Form>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </BackgroundAssociateAccess>
  );
};
