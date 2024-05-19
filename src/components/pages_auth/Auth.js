import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { Component, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../../styles/Main.css';

const Auth = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const validateEmail = (email) => {
        // Регулярное выражение для проверки формата email
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
      };

    const handleClick = () => {
        if(validateEmail(login)) {
            localStorage.setItem('login', login);
            localStorage.setItem('password', password);
            navigate('/menu');
            console.log('успешный вход');
        } else {
            console.log('неправильный формат почты');
        };
    };

    return (
      <main>
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid item lg={5}>
              <div className="menu-block">
                <Grid container mt={4} mb={4} justifyContent="center">
                  <Grid item>
                    <Typography variant="h5">Вход</Typography>
                  </Grid>
                </Grid>

                <Grid container mb={3} justifyContent="center">
                  <Grid item>
                    <TextField
                      fullWidth
                      size="small"
                      label="Введите логин"
                      variant="outlined"
                      name="email"
                      value={login}
                      setValue={setLogin}
                    />
                  </Grid>
                </Grid>

                <Grid container mb={1} justifyContent="center">
                  <Grid item>
                    <TextField
                      fullWidth
                      size="small"
                      label="Введите пароль"
                      variant="outlined"
                      type="password"
                      name="password"
                      value={password}
                      setValue={setPassword}
                    />
                  </Grid>
                </Grid>

                <Grid container mb={1} justifyContent="center">
                  <Grid item>
                    <Link style={{ color: 'inherit' }}>
                      <Typography>Восстановить доступ</Typography>
                    </Link>
                  </Grid>
                </Grid>

                <Grid container mb={1} justifyContent="center">
                  <Grid item>
                    <Button onClick={handleClick} color="warning" size="large" variant="contained">Войти</Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </main>
    );
}

export default Auth;
