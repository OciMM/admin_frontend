import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Auth extends Component {
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
                                <TextField fullWidth size="small" label="Введите логин" variant="outlined" />
                            </Grid>
                        </Grid>

                        <Grid container mb={1} justifyContent="center">
                            <Grid item>
                                <TextField fullWidth size="small" label="Введите пароль" variant="outlined" />
                            </Grid>
                        </Grid>

                        <Grid container mb={1} justifyContent="center">
                            <Grid item>
                                <Link style={{ color: 'inherit' }}><Typography>Восстановить доступ</Typography></Link>
                            </Grid>
                        </Grid>

                        <Grid container mb={1} justifyContent="center">
                            <Grid item>
                                <Button color="warning" size="large" variant="contained" >Войти</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Container>
      </main>
    )
  }
}
