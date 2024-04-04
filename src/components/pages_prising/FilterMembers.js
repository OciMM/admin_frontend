import React, { Component, useState } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button, } from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'

import '../../styles/Main.css'

export default class FilterMembers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            startDate: null,
            endDate: null
        }
    }

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
                        <Typography variant="h3" textAlign="center">Фильтры</Typography>
                      </Toolbar>
                    </div>
                    <div className="Middle-root">
                        <div className="data-root">
                            <h5>Дата</h5>
                            <Grid container justifyContent="center">
                                <Grid item className='filters-data'>
                                    <Button size="large" color="inherit">По старости</Button>
                                </Grid>
                                <Grid item className='filters-data'>
                                    <Button size="large" color="inherit">По свежести</Button>
                                </Grid>
                                <Grid item className='filters-data'> 
                                    <Typography fontWeight={"500"} className="date-picker">Промежуток с <input type="date"></input> по <input type="date"></input></Typography>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="data-root">
                            <h5>Количество переходов</h5>
                            <Grid container justifyContent="center">
                                <Grid item className='filters-data'>
                                    <Button size="large" color="inherit">По большинству</Button>
                                </Grid>
                                <Grid item className='filters-data'>
                                    <Button size="large" color="inherit">По меньшинству</Button>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="data-root">
                            <h5>Количество регистрации</h5>
                            <Grid container justifyContent="center">
                                <Grid item className='filters-data'>
                                    <Button size="large" color="inherit">По большинству</Button>
                                </Grid>
                                <Grid item className='filters-data'>
                                    <Button size="large" color="inherit">По меньшинству</Button>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="data-root">
                            <h5>Количество сообществ</h5>
                            <Grid container justifyContent="center">
                                <Grid item className='filters-data'>
                                    <Button size="large" color="inherit">По большинству</Button>
                                </Grid>
                                <Grid item className='filters-data'>
                                    <Button size="large" color="inherit">По меньшинству</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="Low-root">
                        <Grid container justifyContent="center" mt={8}>
                            <Grid item mr={2}>
                                <Button variant="contained" color="warning">Сохранить</Button>
                            </Grid>
                            <Grid item ml={2}>
                                <Button variant="contained" color="error">Сбросить</Button>
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

