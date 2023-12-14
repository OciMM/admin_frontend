import React, { Component, useState } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button, Input, Checkbox} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import '/Storisbro/admin_site/src/styles/Main.css'

export default class SendNotices extends Component {

  render() {


    return (
      <main>
        <Container maxWidth="lg">
            <Grid container>
                <Grid item lg={12} md={12} xs={12}>
                    <div className="Main-root">
                        <div className="High-root">
                            <Toolbar>
                                <Link to="http://localhost:3000/notices"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                                <Typography variant="h3" textAlign="center">Фильтр пользователей</Typography>
                            </Toolbar>
                        </div>
                        <div className="Middle-full-root">
                            <div className="Text-root">
                              <Grid container>
                                <Grid item lg={12} md={12} xs={12}>
                                  <Typography>Текст уведомлений</Typography>
                                  <TextField fullWidth id="outlined-basic" label="Введите текст" variant="outlined"/>
                                </Grid>
                              </Grid>
                            </div>

                            <div className="Media-root">
                              <Grid container>
                                <Grid item lg={12} md={12} xs={12}>
                                  <Typography>Медиавложения</Typography>
                                  <Input type="file" />
                                </Grid>
                              </Grid>
                            </div>

                            <div className="Date-root">
                              <Grid container>
                                <Grid item lg={12} md={12} xs={12}>
                                  <Typography>Отложить до</Typography>
                                </Grid>
                              </Grid>
                            </div>

                            <div className="Source-root">
                              <Grid container>
                                <Grid item lg={12} md={12} xs={12}>
                                  <Typography>Источники</Typography>
                                  <Grid container>
                                    <Grid item><Typography><Checkbox/>ЛК на сервисе</Typography></Grid>
                                    <Grid item><Typography><Checkbox/>Сообщения Вконтакте</Typography></Grid>
                                    <Grid item><Typography><Checkbox/>Почта</Typography></Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </div>

                            <div className="Society-root">
                              <Grid container>
                                <Grid item lg={12} md={12} xs={12}>
                                  <Typography>Целевая аудитория</Typography>
                                  <Grid container>
                                    <Grid item pr={3}><Typography><Checkbox/>Пользователи, у кого минимум 1 сообществе в статусе “Активное”</Typography></Grid>
                                    <Grid item pr={3}><Typography><Checkbox/>Пользователи, у которых минимум 1 креатив в статусе “Активен”</Typography></Grid>
                                  </Grid>
                                  <Grid container>
                                    <Grid item lg={2}><Typography><Checkbox/>Все</Typography></Grid>
                                    <Grid item lg={10}><Typography><TextField label="Введите UID"/> Пользователи, у которых минимум 1 креатив в статусе “Активен”</Typography></Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </div>

                            <div className="Low-root">
                              <Grid container mt={3} mb={4} spacing={3} justifyContent="center">
                                <Grid item>
                                  <Button variant="contained" color="warning">Начать отправку</Button>
                                </Grid>
                                <Grid item>
                                  <Button variant="contained" color="inherit">Тест</Button>
                                </Grid>
                              </Grid>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
      </main>
    )
  }
}
