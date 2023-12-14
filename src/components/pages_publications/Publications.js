import React, { Component } from 'react'
import { Container, Grid, Typography, Toolbar, TextField, Button} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import '/Storisbro/admin_site/src/styles/Main.css'

export default class Publications extends Component {
  
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
                            <Typography variant="h3" textAlign="center">Публикация</Typography>
                        </Toolbar>
                        <div className="Middle-notices-root">
                            <ul className="menu-notices-ul">
                                <li>
                                  <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/publications/publication-settings">
                                    <Button size="large" color="inherit">Настройки публикации</Button>
                                  </Link>
                                  </li>
                                <li>
                                  <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/publications/reservations">
                                    <Button size="large" color="inherit">Бронь мест</Button>
                                  </Link>
                                </li>
                            </ul>
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