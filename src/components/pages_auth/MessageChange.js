import React, { Component } from 'react'

import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Grid, Typography } from '@mui/material';

export default class MessageChange extends Component {
  render() {
    return (
      <main>
        <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item lg={8}>
                    <div className="menu-block">
                        <Grid container justifyContent="right">
                            <Grid item>
                                <CloseIcon/>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <ForwardToInboxIcon style={{ fontSize: '100px' }}/>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Typography pr={12} pl={12}><b>Ссылка на восстановление была отправлена на почту gus21k@gmail.com</b></Typography>
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
