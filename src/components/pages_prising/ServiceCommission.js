import React, { Component } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button, Input} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

<<<<<<< HEAD
import '/Storisbro/admin_site/src/styles/Main.css'
=======
import '../../styles/Main.css'
>>>>>>> f302064f1012f1b6198e619f17e0d9b0d626d343
import { API_URL } from '../../api/api'


export default class ServiceCommission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commission_rate: localStorage.getItem('commission_rate') || "",
      commission_withdrawal: localStorage.getItem('commission_withdrawal') || "",
      commission_replenishment: localStorage.getItem('commission_replenishment') || "",
      settings: []
    };
  }

  handleInputChange_commission_rate = (event) => {
    const newValue = event.target.value;
    this.setState({ commission_rate: newValue });
    localStorage.setItem('commission_rate', newValue);
  };

  handleInputChange_commission_withdrawal = (event) => {
    const newValue = event.target.value;
    this.setState({ commission_withdrawal: newValue });
    localStorage.setItem('commission_withdrawal', newValue);
  };

  handleInputChange_commission_replenishment = (event) => {
    const newValue = event.target.value;
    this.setState({ commission_replenishment: newValue });
    localStorage.setItem('commission_replenishment', newValue);
  };

  handleSaveClick = () => {
    // отправка данных на бэкенд
    axios.patch(`${API_URL}api/settings_site/1`, {
      commission_rate: this.state.commission_rate,
      commission_withdrawal: this.state.commission_withdrawal,
      commission_replenishment: this.state.commission_replenishment
    })
      .then(response => {
        // обработка успешного сохранения
        console.log(response.data);
      })
      .catch(error => {
        // обработка ошибок
        console.error(error);
      });
  };

  componentDidMount() {
    // получение данных с бэкенда при загрузке компонента
    axios.get(`${API_URL}api/settings_site/1`)
      .then(response => {
        const { commission_rate, commission_withdrawal, commission_replenishment } = response.data; // Предполагается, что бэкенд возвращает эти значения
        this.setState({
          commission_rate: localStorage.getItem('commission_rate') || commission_rate,
          commission_withdrawal: localStorage.getItem('commission_withdrawal') || commission_withdrawal,
          commission_replenishment: localStorage.getItem('commission_replenishment') || commission_replenishment
        });
      })
      .catch(error => {
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
                            <Typography variant="h3" textAlign="center">Комиссия сервиса</Typography>
                          </Toolbar>
                        </div>
                        <div className="Middle-root">
                          <Grid mt={2} mb={2} container justifyContent="center">
                            <Grid item lg={8} md={8} xs={10}>
                              <Grid container justifyContent="center" mt={1}>
                                    <Grid item lg={4} md={4}>
                                        <Typography>Комиссия на пополнение</Typography>
                                    </Grid>
    
                                    <Grid item lg={3} md={3}>
                                        <TextField 
                                        inputProps={{ min: "0", max: "100" }} 
                                        type="number" 
                                        size="small"
                                        value={this.state.commission_rate} 
                                        onChange={this.handleInputChange_commission_rate} />
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" mt={1}>
                                    <Grid item lg={4} md={4}>
                                        <Typography>Комиссия на вывод</Typography>
                                    </Grid>
                                    
                                    <Grid item lg={3} md={3}>
                                        <TextField 
                                        inputProps={{ min: "0", max: "100" }} 
                                        type="number" 
                                        size="small"
                                        value={this.state.commission_withdrawal} 
                                        onChange={this.handleInputChange_commission_withdrawal}/>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" mt={1}>
                                    <Grid item lg={4} md={4}>
                                        <Typography pr={2}>Пониженная комиссия на вывод</Typography>
                                    </Grid>
                                    <Grid item lg={3} md={3}>
                                        <TextField 
                                        inputProps={{ min: "0", max: "100" }} 
                                        type="number" 
                                        size="small"
                                        value={this.state.commission_replenishment} 
                                        onChange={this.handleInputChange_commission_replenishment}/>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" mt={1}>
                                    <Grid item lg={4} md={4}>
                                        <Typography>Пользователь</Typography>
                                    </Grid>
                                    <Grid item lg={3} md={3}>
                                        <TextField label="UID" size="small"/>
                                    </Grid>
                                </Grid>
                              
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
