import React, { Component, useState } from 'react'
import { Container, Grid, Typography, Toolbar, TextField, Button} from '@mui/material'
import { Link, useParams } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import '../../styles/Main.css'

export default function MenuUID() {
    const {id} = useParams();

      return (
          <main>
            <Container maxWidth="lg">
              <Grid container>
                <Grid item lg={12} md={12} xs={12}>
                  <div className="Main-full-notice-root">
                    <div className="High-notices-root">
                        <Toolbar>
                            <Link to="/"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                            <Typography variant="h3" textAlign="center">Пользователь</Typography>
                        </Toolbar>
                        <div className="Middle-notices-root">
                            <ul className="menu-notices-ul">
                                <li>
                                  <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/warning/${id}`}>
                                    <Button size="large" color="inherit">Отправить предупреждение</Button>
                                  </Link>
                                  </li>
                                <li>
                                  <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/lock/${id}`}>
                                    <Button size="large" color="inherit">Заблокировать</Button>
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