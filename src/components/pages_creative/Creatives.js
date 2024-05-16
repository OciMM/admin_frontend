import React, { Component, useState } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField} from '@mui/material'
import { Link } from 'react-router-dom'
import { API_URL } from '../../api/api' 

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'

import '/Storisbro/admin_site/src/styles/Main.css'

const default_filter_date = "freshest";
localStorage.setItem('filter_date', default_filter_date)
const filter_date = localStorage.getItem('filter_date')
const baseUrl = `${API_URL}api_creatives/all_creatives/${filter_date}`

class Creatives extends Component {
  constructor(props) {
    super(props)

    axios.get(baseUrl).then((res) => {
      console.log(res.data)
      this.setState({ users: res.data, searchResults: res.data })
    })

    this.state = {
      users: [],
      searchQuery: "",
      searchResults: [],
      loadedItems: 5, // количество элементов, которые загружаются сначала
    }

  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    const { loadedItems, users } = this.state;
    const maxItemsToAdd = 20; // Максимальное количество элементов для добавления

    axios.get(baseUrl).then((res) => {
      const newUsers = res.data.slice(users.length, users.length + loadedItems);
      this.setState({
        users: [...users, ...newUsers],
        searchResults: [...users, ...newUsers],
        // loadedItems: loadedItems + 5, // увеличиваем количество элементов для следующей загрузки
        loadedItems: loadedItems + maxItemsToAdd, // Изменение: Увеличиваем количество элементов для следующей загрузки
      });
    });
  };

  handleSearch = (event) => {
    const searchQuery = event.target.value;
    const { users } = this.state;

    const filteredUsers = users.filter(user => {
      return (
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.user.toString().includes(searchQuery.toLowerCase())
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
                        <Typography variant="h3" textAlign="center">Креативы</Typography>
                      </Toolbar>
                    </div>
                    <div className="Middle-root">
                      <Grid container justifyContent="center" mt={1} mb={1}>
                        <Grid item lg={2} >
                          <Typography variant="p">Поиск </Typography>
                          </Grid>
                        <Grid item lg={8}>
                          <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined"
                          onChange={this.handleSearch} value={searchQuery} />
                        </Grid>
                        <Grid item lg={2}>
                          <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/creatives/filter"><TuneIcon /></Link>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="Low-root">
                      {searchResults.map(el => (
                        <div className="creative-info">
                          <Grid container>
                            <Grid className="single-block-info" item lg={2} xs={2}>
                              <img alt="file" src={el.file} />
                            </Grid>
                            <Grid className="single-block-info" item lg={2} xs={2}>
                              <h4>{el.id}</h4>
                            </Grid>
                            <Grid className="single-block-info" item lg={2} xs={2}>
                              <h4>{el.date}</h4>
                            </Grid>
                            <Grid className="single-block-info" item lg={2} xs={2}>
                            <Link to={`/creatives/${el.creative_type}/${el.id}`}><h4>{el.status}</h4></Link>
                            </Grid>
                            <Grid className="single-block-info" item lg={2} xs={2}>
                              <h4>{el.name}</h4>
                            </Grid>
                            <Grid item lg={2} xs={2}>
                              <h4>{el.user}</h4>
                            </Grid>
                          </Grid>
                        </div>
                      ))}
                    </div>
                    {/* Кнопка для загрузки следующих данных */}
                    <button onClick={this.loadData}>Загрузить еще</button>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </main>
        )
    }
}
export default Creatives;