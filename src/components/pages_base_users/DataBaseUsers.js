import React, { Component, useState } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'

// import '/Storisbro/admin_site/src/styles/Main.css'
import '../../styles/Main.css'
import { API_URL, API_URL_FOREIGN_API } from '../../api/api'

// const baseUrl = "https://reqres.in/api/users?page=2"

class UsersBase extends Component {
  constructor(props) {
    super(props)

    axios.get(`${API_URL_FOREIGN_API}api_users/users`).then((res) => {
      this.setState({ users: res.data, searchResults: res.data })
      console.log(res.data)
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
                        <Typography variant="h3" textAlign="center">База пользователей</Typography>
                      </Toolbar>
                    </div>
                    <div className="Middle-root">
                      <Toolbar>
                        <Typography variant="p">Поиск</Typography>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"
                        onChange={this.handleSearch} value={searchQuery} />
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/usersbase/filter"><Typography ml={5}><TuneIcon /></Typography></Link>
                      </Toolbar>
                    </div>
                    <div className="Low-root">
                      {searchResults.map(el => (
                        <div className="creative-info">
                          <Grid container>
                            <Grid className="single-block-info" item lg={2}>
                              <h6>{el.UID}</h6>
                            </Grid>
                            <Grid className="single-block-info" item lg={2}>
                              <h4>{el.registration_date}</h4>
                            </Grid>
                            <Grid className="single-block-info" item lg={1}>
                              <h4>{el.replenishment_amount}</h4>
                            </Grid>
                            <Grid className="single-block-info" item lg={1}>
                              <h4>{el.withdrawal_amount}</h4>
                            </Grid>
                            <Grid className="single-block-info" item lg={2}>
                              <h4>{el.service_income}</h4>
                            </Grid>
                            <Grid className="single-block-info" item lg={2}>
                              <h4>{el.community_count}</h4>
                            </Grid>
                            <Grid item lg={2}>
                              <Link to={`/menu/usersbase/${el.id}`}><h4>настройки</h4></Link>
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
export default UsersBase;