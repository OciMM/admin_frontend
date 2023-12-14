import React, { Component } from 'react'

import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button, Input} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'

import '/Storisbro/admin_site/src/styles/Main.css'


export default class LockUser extends Component {
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
                                <Typography variant="h3" textAlign="center">Блокировка</Typography>
                            </Toolbar>
                        </div>
                        <div className="Middle-lock-root">
                            <Grid container mt={2} ml={12}>
                                <Grid item>
                                    <Typography variant="h5">
                                        Срок
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container justifyContent="center">
                                <Grid item className="Pre-low-root-lock">
                                    <Button color="inherit">Сутки</Button>
                                </Grid>
                                <Grid item className="Pre-low-root-lock">
                                    <Typography>
                                        Промеуток с <Input type="date"/> по <Input type="date"/>
                                    </Typography>
                                </Grid>
                                <Grid item className="Pre-low-root-lock">
                                    <Button color="inherit">Навсегда</Button>
                                </Grid>
                            </Grid>
                        </div>

                        <div className="Low-root">
                            <Grid container mt={2} ml={12}>
                                <Grid item>
                                    <Typography variant="h5">
                                        Комментарий
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container justifyContent="center" mt={2}>
                                <Grid item lg={8}>
                                    <TextField fullWidth label="Введите комментарий" />
                                </Grid>
                            </Grid>

                            <Grid container justifyContent="center">
                                <Grid item mt={2}>
                                    <Button color="warning" variant="contained">Заблокировать</Button>
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
