import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AuthNewDevice extends Component {
  render() {
    return (
      <main>
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} maxWidth="lg">
            <Grid container justifyContent="center">
                <Grid item lg={5}>
                    <div className="menu-block">
                        <Grid container mt={4} mb={2} justifyContent="center">
                            <Grid item>
                                <Typography variant="h5">Вход с нового устройства</Typography>
                            </Grid>
                        </Grid>

                        <Grid container mb={2} justifyContent="center">
                            <Grid item>
                                <Typography mr={1} ml={1} pl={6} pr={6}>На почту был отправлен код подтверждения доступа</Typography>
                            </Grid>
                        </Grid>

                        <Grid container mb={1} justifyContent="center">
                            <Grid item>
                                <TextField fullWidth size="small" label="Введите код" variant="outlined" />
                            </Grid>
                        </Grid>

                        <Grid container mb={1} justifyContent="center">
                            <Grid item>
                                <Button color="warning" size="large" variant="contained" >Готов</Button>
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