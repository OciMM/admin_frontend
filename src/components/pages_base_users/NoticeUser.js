import { Container, Grid, Toolbar, Typography } from '@mui/material'
import React, { Component } from 'react'

import { Link, useParams } from 'react-router-dom'


import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default class NoticeUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            yourData: {
              "Release Date": "12.12.2023",
              "Views": 1000,
              "Clicks": 500,
              "CTR": "50%",
              "Cost": "$100"
            },
          };
    }

  render() {

    const { yourData } = this.state;

    const divElements = Object.entries(yourData).map(([key, value]) => (
      <div className="Main-Info-Users" key={key}>
        <Grid container justifyContent="center">
            <Grid mr={2} className="info-sgl" item>
            <Typography>Дата выхода</Typography>
            {yourData["Release Date"]}
            </Grid>
            <Grid mr={2} className="info-sgl" item>
                <Typography>Просмотры</Typography>
                {yourData["Views"]}
            </Grid>
            <Grid mr={2} className="info-sgl" item>
                <Typography>Переходы</Typography>
                {yourData["Clicks"]}
            </Grid>
            <Grid mr={2} className="info-sgl" item>
                <Typography>CTR</Typography>
                {yourData["CTR"]}
            </Grid>
            <Grid mr={2} item>
                <Typography>Стоимость</Typography>
                {yourData["Cost"]}
            </Grid>
        </Grid>
      </div>
    ));

    return (
        <main>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item lg={12} md={12} xs={12}>
                        <div className="Main-root">
                            <div className="High-st-root">
                                <Toolbar>
                                    <Link to="http://localhost:3000/creatives"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                                    <Typography variant="h3" textAlign="center">Уведомление</Typography>
                                </Toolbar>
                            </div>

                            <div className="Middle-st-root">
                                <Grid container justifyContent="center">
                                    <Grid item lg={6}>
                                        {divElements}
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
