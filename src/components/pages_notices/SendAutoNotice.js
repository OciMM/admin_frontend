import { Container, Grid, Typography, Toolbar, TextField, Checkbox, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import '/Storisbro/admin_site/src/styles/Main.css'

export default class SendAutoNotice extends Component {
  render() {
    return (
      <main>
        <Container maxWidth="lg">
            <Grid container>
                <Grid item lg={12} md={12} xs={12}>
                    <div className="Main-full-notice-root">
                        <div className="High-notices-root">
                            <Toolbar>
                                <Link to="/"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                                <Typography variant="h3" textAlign="center">**Тип автоматического уведомления**</Typography>
                            </Toolbar>
                        </div>
                        <div className="Middle-notice-root">
                            <Grid container justifyContent="left">
                                <Grid item>
                                  <Typography mt={2} ml={3}>Статус "Неодобрено"</Typography>
                                </Grid>
                            </Grid>

                            <Grid container justifyContent="center">
                                <Grid item lg={8}>
                                  <TextField fullWidth/>
                                </Grid>
                            </Grid>

                            <Grid container justifyContent="left">
                                <Grid item>
                                  <Typography mt={2} ml={3}>Статус "Одобрено"</Typography>
                                </Grid>
                            </Grid>

                            <Grid container justifyContent="center">
                                <Grid item lg={8}>
                                  <TextField fullWidth/>
                                </Grid>
                            </Grid>

                            <Grid container>
                              <Grid item>
                                <Typography mt={2} ml={3}>Источники</Typography>
                              </Grid>
                            </Grid>

                            <Grid container>
                              <Grid item>
                                <Typography><Checkbox/>ЛК на сервисе</Typography>
                              </Grid>
                              <Grid item>
                                <Typography><Checkbox/>Сообщение в ВК</Typography>
                              </Grid>
                              <Grid item>
                                <Typography><Checkbox/>Почта</Typography>
                              </Grid>

                              <Grid container justifyContent="center">
                                <Grid item>
                                  <Button color="success" size="large" variant="contained" >Сохранить</Button>  
                                </Grid>                              
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
