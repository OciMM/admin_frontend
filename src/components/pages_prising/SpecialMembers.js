import React, { Component, useState } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'

import '../../styles/Main.css'


const baseUrl = "https://reqres.in/api/users?page=2"

export default class SpecialMembers extends Component {
  constructor(props) {
    super(props)

    axios.get(baseUrl).then((res) => {
      this.setState({ users: res.data.data, searchResults: res.data.data })
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
                        <Typography variant="h3" textAlign="center">Участники ПК</Typography>
                      </Toolbar>
                    </div>
                    <div className="Middle-root">
                      <Grid container justifyContent="center" mt={1} mb={1}>
                        <Grid item lg={2}>
                          <Typography variant="p">Поиск </Typography>
                          </Grid>
                        <Grid item lg={8}>
                          <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined"
                          onChange={this.handleSearch} value={searchQuery} />
                        </Grid>
                        <Grid item lg={2}>
                          <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/pricing-menu/special-commission-menu/members/filter-members"><TuneIcon /></Link>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="Pre-low-root">
                        <Grid container textAlign="center" justifyContent="center">
                            <Grid item lg={2} md={2}>
                                <Typography>Сообщества</Typography>
                            </Grid>
                            <Grid item lg={2} md={2}>
                                <Typography>Пользователь</Typography>
                            </Grid>
                            <Grid item lg={2} md={2}>
                                <Typography>Дата</Typography>
                            </Grid>
                            <Grid item lg={2} md={2}>
                                <Typography>Переходы</Typography>
                            </Grid>
                            <Grid item lg={2} md={2}>
                                <Typography>Регистрации</Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="Low-root">
                      {searchResults.map(el => (
                        <div className="creative-info">
                          <Grid container justifyContent="center">
                            <Grid className="single-block-info" item lg={2}>
                              <h6>{el.email}</h6>
                            </Grid>
                            <Grid className="single-block-info" item lg={2}>
                              <h4>{el.id}</h4>
                            </Grid>
                            <Grid className="single-block-info" item lg={2}>
                              <Link to={`/creatives/${el.id}`}><h4>{el.first_name}</h4></Link>
                            </Grid>
                            <Grid className="single-block-info" item lg={2}>
                              <h4>{el.last_name}</h4>
                            </Grid>
                            <Grid className="single-block-info" item lg={2}>
                              <h4>{el.email}</h4>
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