import React, { Component, useState } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'

import '/Storisbro/admin_site/src/styles/Main.css'


export default class Creatives extends Component {

  render() {

      return (
          <main>
            <Container maxWidth="lg">
              <Grid container>
                <Grid item lg={12} md={12} xs={12}>
                  <div className="Main-full-notice-root">
                    <div className="High-root">
                      <Toolbar>
                        <Link to="http://localhost:3000/notices"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                        <Typography variant="h3" textAlign="center">Настройки</Typography>
                      </Toolbar>
                    </div>
                    <div className="Middle-root">
                      <Grid container className="auto-notice-buttons">
                        <Grid className="auto-notice-button" item lg={6} md={6} xs={6}><Button size="large" color="inherit">Модерация креатива</Button></Grid>
                        <Grid item lg={6} md={6} xs={6}><Button size="large" color="inherit">Модерация сообщества</Button></Grid>
                      </Grid>

                      <Grid container className="auto-notice-buttons">
                        <Grid className="auto-notice-button" item lg={6} md={6} xs={6}><Button size="large" color="inherit">Изменение пароля</Button></Grid>
                        <Grid item lg={6} md={6} xs={6}><Button size="large" color="inherit">Изменение почты (логина)</Button></Grid>
                      </Grid>

                      <Grid container className="auto-notice-buttons">
                        <Grid className="auto-notice-button" item lg={6} md={6} xs={6}>
                            <Button size="large" color="inherit">
                            Привязка нового/изменение аккаунта Вконтакте
                            </Button></Grid>
                        <Grid item lg={6} md={6} xs={6}><Button size="large" color="inherit">Пополнение</Button></Grid>
                      </Grid>

                      <Grid container className="auto-notice-buttons">
                        <Grid className="auto-notice-button" item lg={6} md={6} xs={6}><Button size="large" color="inherit">Вывод</Button></Grid>
                        <Grid item lg={6} md={6} xs={6}><Button size="large" color="inherit">Разрешения на публикацию</Button></Grid>
                      </Grid>

                      <Grid container className="auto-notice-buttons">
                        <Grid className="auto-notice-button" item lg={6} md={6} xs={6}><Button size="large" color="inherit">Комиссия</Button></Grid>
                        <Grid item lg={6} md={6} xs={6}><Button size="large" color="inherit">Реклама в историях </Button></Grid>
                      </Grid>

                      <Grid container className="auto-notice-buttons">
                        <Grid className="auto-notice-button" item lg={6} md={6} xs={6}><Button size="large" color="inherit">Бронь мест</Button></Grid>
                        <Grid item lg={6} md={6} xs={6}><Button size="large" color="inherit">Предупреждения</Button></Grid>
                      </Grid>

                      <Grid container>
                        <Grid className="auto-notice-button" item lg={6} md={6} xs={6}><Button size="large" color="inherit">Блокировка</Button></Grid>
                        <Grid item lg={6} md={6} xs={6}><Button size="large" color="inherit">Выгрузка креатива</Button></Grid>
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