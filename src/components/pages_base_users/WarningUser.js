import React, { Component } from 'react'

import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button, Input, Checkbox} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'

import '/Storisbro/admin_site/src/styles/Main.css'


export default class WarningUser extends Component {
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
                                <Typography variant="h3" textAlign="center">Отправка предупреждения</Typography>
                            </Toolbar>
                        </div>
                        <div className="Middle-lock-root">
                            <Grid container mt={2} justifyContent="center">
                                <Grid item lg={8}>
                                    <TextField fullWidth label="Введите комментарий" />
                                </Grid>
                            </Grid>

                            <Grid container mt={2} justifyContent="center">
                                <Grid item>
                                    <Typography><Checkbox/> ЛК на сервисе</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography><Checkbox/> Сообщение ВК</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography><Checkbox/> Почта</Typography>
                                </Grid>
                            </Grid>

                            <Grid container mt={2} justifyContent="center">
                                <Grid item>
                                    <Button color="warning" variant="contained">Отправить</Button>
                                </Grid>
                            </Grid>
                        </div>

                        <div className="Low-root">
                            <Grid container mt={2} ml={12}>
                                <Grid item>
                                    <Typography variant="h5">
                                        История
                                    </Typography>
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
