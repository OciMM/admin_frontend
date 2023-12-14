import React, { Component } from 'react'

import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'

import '/Storisbro/admin_site/src/styles/Main.css'

const baseUrl = "https://reqres.in/api/users?page=2"

export default class AdLinks extends Component {
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
                        <Typography variant="h3" textAlign="center">Рекламные ссылки</Typography>
                      </Toolbar>
                    </div>
                    <div className="Middle-root">
                      <Grid container justifyContent="center" mt={1} mb={1}>
                        <Grid item lg={2}>
                          </Grid>
                        <Grid item lg={8}>
                          <Link to="/links/links-create"><Button size="large" variant='contained' color="warning">Создать</Button></Link>
                        </Grid>
                        <Grid item lg={2}>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="Pre-low-root">
                        <Grid container textAlign="center" justifyContent="center">
                            <Grid item lg={2} md={2}>
                                <Typography>Ссылка</Typography>
                            </Grid>
                            <Grid item lg={2} md={2}>
                                <Typography>Название</Typography>
                            </Grid>
                            <Grid item lg={2} md={2}>
                                <Typography>Дата</Typography>
                            </Grid>
                            <Grid item lg={2} md={2}>
                                <Typography>Переходы</Typography>
                            </Grid>
                            <Grid item lg={2} md={2}>
                                <Typography>Регистрации</Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="Low-root">
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </main>
        )
    }
}