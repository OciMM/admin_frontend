import React, { Component, useState } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'

import '/Storisbro/admin_site/src/styles/Main.css'
import { API_URL } from '../../api/api'

const baseUrl = `${API_URL}api_communities/communities`

class Publics extends Component {
    constructor(props) {
      super(props)
  
      axios.get(baseUrl).then((res) => {
        this.setState({ users: res.data, searchResults: res.data })
      })
  
      this.state = {
        users: [],
        searchQuery: "",
        searchResults: []
  
      }
  
    }
  
    handleSearch = (event) => {
      const searchQuery = event.target.value;
      const { users } = this.state;
  
      const filteredUsers = users.filter(user => {
        return (
          user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.id.toString().includes(searchQuery.toLowerCase())
        );
      });
  
      this.setState({ searchQuery, searchResults: filteredUsers });
    }

    formatDateTime(dateTimeString) {
      const dateObject = new Date(dateTimeString);
  
      const formattedDate = dateObject.toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
  
      return formattedDate;
    }
  
  
    render() {
      const { searchQuery, searchResults } = this.state;
  
        return (
            <main>
              <Container maxWidth="lg">
                <Grid container>
                  <Grid item lg={12} md={12} xs={12}>
                    <div className="Main-root">
                      <div className="High-root">
                        <Toolbar>
                          <Link to="/"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                          <Typography variant="h3" textAlign="center">Сообщества</Typography>
                        </Toolbar>
                      </div>
                      <div className="Middle-root">
                        <Toolbar>
                          <Typography variant="p" mr={5}>Поиск</Typography>
                          <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined"
                          onChange={this.handleSearch} value={searchQuery} />
                          <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/publics/filter"><Typography ml={5}><TuneIcon /></Typography></Link>
                        </Toolbar>
                      </div>
                      <div className="Low-root">
                        {searchResults.map(el => (
                          <div className="creative-info">
                            <Grid container>
                              <Grid className="single-block-info" item lg={2} xs={2}>
                                <img alt='file' />
                              </Grid>
                              <Grid className="single-block-info" item lg={2} xs={2}>
                                <h4>{el.name}</h4>
                              </Grid>
                              <Grid className="single-block-info" item lg={2} xs={2}>
                                <h4>{this.formatDateTime(el.date)}</h4>
                              </Grid>
                              <Grid className="single-block-info" item lg={2} xs={2}>
                                <h4>{el.status_of_check}</h4>
                              </Grid>
                              <Grid className="single-block-info" item lg={2} xs={2}>
                                <h4>{el.status_commission}</h4>
                              </Grid>
                              <Grid item lg={2} xs={2}>
                                <h4>{el.user}</h4>
                              </Grid>
                            </Grid>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </main>
          )
      }
  }
  export default Publics;