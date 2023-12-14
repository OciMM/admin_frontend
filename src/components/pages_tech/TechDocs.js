import React, { Component } from 'react'
import { Container, Grid, Typography, Toolbar, TextField, Button} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import '/Storisbro/admin_site/src/styles/Main.css'

export default class TechDocs extends Component {
  
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
                            <Typography variant="h3" textAlign="center">Тех. документация</Typography>
                        </Toolbar>
                        <div className="Middle-notices-root">
                            <ul className="menu-notices-ul">
                                <li>
                                    <Button size="large" color="inherit">Скрипт.txt</Button>
                                  </li>
                                <li>
                                    <Button size="large" color="inherit">БД.zip</Button>
                                </li>
                                <li>
                                    <Button size="large" color="inherit">Настройки.txt</Button>
                                </li>
                            </ul>
                        </div>
                        <div className="Low-root">
                        <Grid container justifyContent="center" mt={1} mb={1}>
                                <Grid justifyContent="center" item>
                                    <Button size="large" variant='contained' color="warning">Бэкап</Button>
                                </Grid>
                        </Grid>
                        </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </main>
        )
    }
}