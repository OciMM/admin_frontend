import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Main.css';

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
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
                      value={this.state.email}
                      onChange={this.handleChange}
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
                      value={this.state.password}
                      onChange={this.handleChange}
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
                    <Button color="warning" size="large" variant="contained">Войти</Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </main>
    );
  }
}
