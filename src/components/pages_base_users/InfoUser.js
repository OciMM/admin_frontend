import React, { Component, useState } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button, Input} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import '/Storisbro/admin_site/src/styles/Main.css'


export default class InfoUser extends Component {
      render() {
          return (
              <main>
                <Container maxWidth="lg">
                  <Grid container>
                    <Grid item lg={12} md={12} xs={12}>
                      <div className="Main-root">
                        <div className="High-root">
                          <Toolbar>
                            <Link to="/"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                            <Typography variant="h3" textAlign="center">Пользователь</Typography>
                          </Toolbar>
                        </div>
                        <div className="Middle">
                          <Grid container mt={3}>
                            <Grid item lg={6} >
                                <Typography variant="h4">Личный профиль</Typography>
                                <ul className="stat-info">
                                    <li>Почта:</li>
                                    <li>resasqwq@gmail.com</li>
                                </ul>
                            </Grid>
                            <Grid item lg={6}>
                                <ul className="stat-info">
                                    <li><b>Аккаунт ВКонтанкте:</b></li>
                                    <li>@this.state.developer</li>
                                </ul>
                            </Grid>
                          </Grid>

                          <Grid container mt={3}>
                            <Grid item lg={6} >
                                <Typography variant="h4">Пароль</Typography>
                                <ul className="stat-info">
                                </ul>
                            </Grid>
                            <Grid item lg={6}>
                                <Typography variant="h4">Комиссия</Typography>
                                <ul className="stat-info">
                                    <li>Пополнение 20%</li>
                                    <li>Вывод 5% (участники ПК)</li>
                                </ul>
                            </Grid>
                          </Grid>

                          <Grid container mt={3}>
                            <Grid item lg={6} >
                                <Typography variant="h4">Уведомление</Typography>
                            </Grid>
                          </Grid>

                          <Grid container mt={3}>
                            <Grid item lg={6} >
                                <Typography>ВКонтанкте</Typography>
                            </Grid>

                            <Grid item lg={6} >
                                <Typography>Почта</Typography>
                            </Grid>

                            <Grid container mt={3}>
                                <Grid item lg={6} >
                                    <Typography variant="h4">На аккаунт</Typography>
                                    <ul className="stat-info">
                                        <li>@this.state.developer</li>
                                        <li>Userbest</li>
                                    </ul>
                                </Grid>
                                <Grid item lg={6}>
                                    <Typography variant="h4">На почту</Typography>
                                    <ul className="stat-info">
                                        <li>gusgusniknik@gmail.com</li>
                                        <li>gsuasaaq@koka.team </li>
                                    </ul>
                                </Grid>
                          </Grid>

                          <Grid container justifyContent="center" mt={3} mb={5}>
                                <Grid item>
                                    <Button variant="contained" color="success">
                                        История уведомлений
                                    </Button>
                                </Grid>
                          </Grid>
                        </Grid>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Container>
              </main>
            )
        }
}
