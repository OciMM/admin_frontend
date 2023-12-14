import React, { Component } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button, Input} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import '/Storisbro/admin_site/src/styles/Main.css'


export default class CPMSettings extends Component {
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
                            <Typography variant="h3" textAlign="center">Рекламный Cpm</Typography>
                          </Toolbar>
                        </div>
                        <div className="Middle-root">
                          <Grid mt={2} mb={2} container justifyContent="center">
                            <Grid item lg={8} md={8} xs={10}>
                              <Grid container justifyContent="center" mt={1}>
                                    <Grid item lg={4} md={4}>
                                        <Typography>Стоимость рекламы</Typography>
                                    </Grid>
    
                                    <Grid item lg={3} md={3}>
                                        <TextField inputProps={{ min: "0", max: "100" }} type="number" size="small"/>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" mt={1}>
                                    <Grid item lg={4} md={4}>
                                        <Typography>Доход админов</Typography>
                                    </Grid>
                                    
                                    <Grid item lg={3} md={3}>
                                        <TextField inputProps={{ min: "0", max: "100" }} type="number" size="small"/>
                                    </Grid>
                                </Grid>
                              
                            </Grid>
                          </Grid>
                        </div>
                        <div className="Low-root">
                          <Grid mt={4} container justifyContent="center"> 
                            <Grid item>
                              <Button variant="contained" size="large" color="success">Сохранить</Button>
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
