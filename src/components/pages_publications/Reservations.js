import { Button, Container, Grid, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import '/Storisbro/admin_site/src/styles/Main.css'

export default class Reservations extends Component {
    constructor(props) {
        super(props);
        this.state = {
          yourData: [
            { id: 1, type: 'индивид', date: "14.09"}, 
            { id: 0, type: 'индивид'},
            { id: 3, type: 'постоянные'}, 
            { id: 1, type: 'постоянные'},
            { id: 0, type: 'постоянные'},
            { id: 0, type: 'постоянные'},
            { id: 2, type: 'индивид'}, 
            { id: 1, type: 'индивид'}, 
            { id: 2, type: 'индивид'}
          ],
        };
      }

  render() {
    const ColorComponent = ({ id, type, date }) => {
      const hasZero = String(id).includes('0');
      const placeText = id === 0 ? 'мест' : id === 2 || id === 3 ? 'места' : 'место';

      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: hasZero ? 'red' : 'grey',
              width: '100px',
              height: '100px',
              marginBottom: '10px',
              borderRadius: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p style={{margin: '0'}}>{date}</p>
            <p style={{margin: '0'}}>{id}{placeText}</p>
          </div>
          <div
            style={{
              backgroundColor: '#ffce1c',
              padding: '5px 10px',
              borderRadius: '5px',
            }}
          >
            {type}
          </div>
        </div>
      );
    };

    const { yourData } = this.state

    return (
      <main>
        <Container maxWidth="lg">
            <Grid container>
                <Grid item lg={12} md={12} xs={12}>
                    <div className="Reservation-root">
                        <div className="High-root">
                            <Toolbar>
                                <Link to="/"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                                <Typography variant="h3" textAlign="center">Бронь мест</Typography>
                            </Toolbar>
                        </div>
                        <div className="Middle-reservation-root">
                            <Grid mt={7} container direction="row" spacing={1}>
                                {this.state.yourData.map(({id, type, date}, index) => (
                                <Grid item lg={2} key={index}>
                                    <ColorComponent id={id} type={type} date={date} />
                                </Grid>
                                ))}
                            </Grid>
                        </div>
                        <div className="Low-root">
                          <Grid mt={7} mb={3} container justifyContent="center">
                              <Grid item>
                                <Link to='/publications/reservations/archive'>
                                  <Button variant="contained" color="success">Архив</Button>
                                </Link>
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
