import React, { Component } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button, Input} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import '/Storisbro/admin_site/src/styles/Main.css'
import { API_URL } from '../../api/api'


export default class AdLinksCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkName: "",  // состояние для хранения названия ссылки
    };
  }

  handleInputChange = (event) => {
    this.setState({ linkName: event.target.value });
  }

  handleSaveClick = () => {
    // отправка данных на бэкенд
    axios.post(`${API_URL}api/ad_links`, {
      name: this.state.linkName,
    })
    .then(response => {
      // обработка успешного сохранения
      console.log(response.data);
    })
    .catch(error => {
      // обработка ошибок
      console.error(error);
    });
  } 
      render() {
          return (
              <main>
                <Container maxWidth="lg">
                  <Grid container>
                    <Grid item lg={12} md={12} xs={12}>
                      <div className="Main-full-root">
                        <div className="High-root">
                          <Toolbar>
                            <Link to="/"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                            <Typography variant="h3" textAlign="center">Создание ссылки</Typography>
                          </Toolbar>
                        </div>
                        <div className="Middle-root">
                          <Grid mt={2} mb={2} container justifyContent="center">
                            <Grid item lg={8} md={8} xs={10}>
                              <TextField fullWidth variant="outlined" label="Введите название"
                              value={this.state.linkName}
                              onChange={this.handleInputChange}></TextField>
                            </Grid>
                          </Grid>
                        </div>
                        <div className="Low-root">
                          <Grid mt={4} container justifyContent="center"> 
                            <Grid item>
                              <Button variant="contained" size="large" color="success" onClick={this.handleSaveClick}>Сохранить</Button>
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
