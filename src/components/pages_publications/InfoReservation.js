import { Button, Container, Grid, Input, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import '../../styles/Main.css'

export default class InfoReservation extends Component {
    
  render() {
    return (
      <main>
        <Container maxWidth="lg">
            <Grid container>
                <Grid item lg={12} md={12} xs={12}>
                    <div className="Reservation-root">
                        <div className="High-root">
                            <Toolbar>
                                <Link to="/"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                                <Typography variant="h3" textAlign="center">Информация о брони</Typography>
                            </Toolbar>
                        </div>
                        <div className="Middle-reservation-root">
                            <Grid mt={2} container justifyContent="center">
                                <Grid item>
                                    <Typography>Промежуток с <Input type="date"/> по <Input type="date"/></Typography>
                                </Grid>
                            </Grid>
                            <Grid mt={3} mb={2} container justifyContent="center">
                                <Grid item>
                                    <Link><Button variant="contained" color="success">Показать</Button></Link>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="Pre-low-root">
                        <Grid container textAlign="center" justifyContent="center">
                            <Grid className="Pre-low-root" item lg={2} md={2}>
                                <Typography>Заказчики</Typography>
                            </Grid>
                            <Grid className="Pre-low-root" item lg={2} md={2}>
                                <Typography>Количество</Typography>
                            </Grid>
                            <Grid className="Pre-low-root" item lg={2} md={2}>
                                <Typography>Дата брони</Typography>
                            </Grid>
                            <Grid className="Pre-low-root" item lg={2} md={2}>
                                <Typography>Креатив</Typography>
                            </Grid>
                            <Grid className="Pre-low-root" item lg={2} md={2}>
                                <Typography>Статус</Typography>
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
