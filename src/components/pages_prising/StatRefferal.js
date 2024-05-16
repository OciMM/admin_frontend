import React, { Component, useState } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button, Input} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import '../../styles/Main.css'


export default class StatRefferal extends Component {
      render() {
          return (
              <main>
                <Container maxWidth="lg">
                  <Grid container>
                    <Grid item lg={12} md={12} xs={12}>
                      <div className="Main-full-root">
                        <div className="High-root">
                          <Toolbar>
                            <Link to="/"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                            <Typography variant="h3" textAlign="center">Статистика реф. ссылок</Typography>
                          </Toolbar>
                        </div>
                        <div className="Middle">
                          <Grid container>
                            <Grid item lg={6}>
                                <ul className="stat-info">
                                    <li><b>Участников:</b></li>
                                    <li>344</li>
                                </ul>
                            </Grid>
                            <Grid item lg={6}>
                                <ul className="stat-info">
                                    <li><b>Регистраций:</b></li>
                                    <li>412</li>

                                    <li><b>Владельцев:</b></li>
                                    <li>412</li>

                                    <li><b>Заказчиков:</b></li>
                                    <li>412</li>
                                </ul>
                            </Grid>
                          </Grid>

                          <Grid container>
                            <Grid>
                                <Typography variant="h6">Выгрузка топ 10 участников</Typography>
                            </Grid>
                          </Grid>

                          <Grid container>
                            <Grid item>
                                <Typography>Промежуток с <Input type="date"/> по <Input type="date"/></Typography>
                            </Grid>
                          </Grid>

                          <Grid container mt={4}>
                            <Grid>
                                <Typography variant="h6">Выгрузка статистики регистрации</Typography>
                            </Grid>
                          </Grid>

                          <Grid container>
                            <Grid item>
                                <Typography>Промежуток с <Input type="date"/> по <Input type="date"/></Typography>
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
