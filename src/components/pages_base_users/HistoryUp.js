import { Button, Container, Grid, Input, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import '/Storisbro/admin_site/src/styles/Main.css'

export default class HystoryUp extends Component {
  render() {
    return (
      <main>
        <Container maxWidth="lg">
            <Grid container>
                <Grid item lg={12} md={12} xs={12}>
                    <div className="High-root">
                        <Toolbar>
                            <Link to="/"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                            <Typography variant="h3" textAlign="center">История вывода</Typography>
                        </Toolbar>
                    </div>
                    <div className="Md-root">
                        <Grid container textAlign="center" justifyContent="center">
                            <Grid pt={1} pb={1} item lg={2}>
                                <Typography>UUID</Typography>
                            </Grid>
                            <Grid pt={1} pb={1} item lg={2}>
                                <Typography>Реквизиты</Typography>
                            </Grid>
                            <Grid pt={1} pb={1} item lg={2}>
                                <Typography>Дата и время</Typography>
                            </Grid>
                            <Grid pt={1} pb={1} item lg={2}>
                                <Typography>Сумма</Typography>
                            </Grid>
                            <Grid pt={1} pb={1} item lg={2}>
                                <Typography>Статус</Typography>
                            </Grid>
                            <Grid pt={1} pb={1} item lg={2}>
                                <Typography>Доход сервиса</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Container>
      </main>
    )
  }
}
