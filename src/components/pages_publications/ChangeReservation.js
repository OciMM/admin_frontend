import { Button, Container, Grid, Input, TextField, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import '/Storisbro/admin_site/src/styles/Main.css'

export default class ChangeReservation extends Component {
    
  render() {
    return (
      <main>
        <Container maxWidth="lg">
            <Grid container>
                <Grid item lg={12} md={12} xs={12}>
                    <div className="Reservation-change-root">
                        <div className="High-root">
                            <Toolbar>
                                <Link to="/"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                                <Typography variant="h3" textAlign="center">Изменения брони</Typography>
                            </Toolbar>
                        </div>

                        <div className="Low-root">
                            <Grid container mt={2} spacing={2} justifyContent="center">
                                <Grid item><Button variant="contained" color="success">Отменить бронь</Button></Grid>
                                <Grid item><Button variant="contained" color="error">Разрешить бронь</Button></Grid>
                            </Grid>
                            
                            <Grid container mt={2} justifyContent="center">
                                <Grid item lg={8}>
                                    <TextField label="Введите комментарий" fullWidth />
                                </Grid>
                            </Grid>

                            <Grid container mt={2} mb={2} justifyContent="center">
                                <Grid item>
                                    <Button color="success" variant="contained">Сохранить</Button>
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
