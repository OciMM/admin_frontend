import React, { Component, useState } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button, Input} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import '../../styles/Main.css'


export default class AllStat extends Component {
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
                            <Typography variant="h3" textAlign="center">Статистика</Typography>
                          </Toolbar>
                        </div>
                        <div className="Middle">
                          <Grid container>
                            <Grid item lg={6}>
                                <ul className="stat-info">
                                    <li><b>Зарегистрировано пользователей:</b></li>
                                    <li>Владельцев</li>
                                    <li>Заказчиков</li>
                                    <li><b>Уникальных переходов на сайт:</b></li>
                                    <li><b>Пополнение:</b></li>
                                    <li><b>Вывод:</b></li>
                                    <li><b>Доход сервиса:</b></li>
                                    <li><b>Заработано админами:</b></li>
                                </ul>
                            </Grid>
                            <Grid item lg={6}>
                                <ul className="stat-info">
                                    <li><b>Загружено креативов:</b></li>
                                    <li><b>Загружено сообществ:</b></li>
                                    <li><b>Просмотры:</b></li>
                                    <li><b>Сбоев в работе:</b></li>
                                </ul>
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
