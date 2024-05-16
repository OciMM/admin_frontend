import { Container, Grid, Toolbar, Typography } from '@mui/material'
import React, { Component } from 'react'

import { Link, useParams } from 'react-router-dom'

import '../../styles/Main.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default class StatisticsCreative extends Component {
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
      <div className="Main-Info" key={key}>
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
                        <div className="Main-st-root">
                            <div className="High-st-root">
                                <Toolbar>
                                    <Link to="http://localhost:3000/creatives"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                                </Toolbar>
                            </div>

                            <div className="Middle-st-root">
                                <Grid container justifyContent="center">
                                    <Grid item lg={6}>
                                        <div className="Main-Info">
                                            <Grid container justifyContent="center">
                                                <Grid mr={2} item>
                                                    <img alt="IMG" src="" />
                                                </Grid>
                                                <Grid mr={2} item>
                                                    <Typography>Дата</Typography>
                                                    <Typography>01.07.2023</Typography>
                                                </Grid>
                                                <Grid mr={2} item>
                                                    <Typography>Название</Typography>
                                                    <Typography>3</Typography>
                                                </Grid>
                                            </Grid>
                                        </div>
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
