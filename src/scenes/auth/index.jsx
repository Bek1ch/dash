import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { login } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { TokenService } from "../../utils/token.service";
import { useState } from "react";
// import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      username: data.get("username"),
      password: data.get("password"),
    };

    if (!body.username || !body.password) {
      setIsError(true);
      console.error("Username or password is empty");
      return;
    }

    try {
      const res = await login(body);
      if (res.status === 200 && res.data) {
        setIsError(false);
        const token = res.data.jwt;
        TokenService.setToken(token); // Убираем "" + token, так как это излишне
        navigate("/");
      }
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Вход в систему
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            error={isError}
            margin="normal"
            required
            fullWidth
            id="username"
            label="Логин"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            error={isError}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Войти
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
