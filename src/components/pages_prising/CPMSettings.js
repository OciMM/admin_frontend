import React, { Component } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button, Input} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import '../../styles/Main.css'
import { API_URL } from '../../api/api'


export default class CPMSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advertising_cost: localStorage.getItem('advertising_cost') || "",
      admin_income: localStorage.getItem('admin_income') || "",
      settings: []
    };
  }

  handleInputChange_advertising_cost = (event) => {
    const newValue = event.target.value;
    this.setState({ advertising_cost: newValue });
    localStorage.setItem('advertising_cost', newValue);
  };

  handleInputChange_admin_income = (event) => {
    const newValue = event.target.value;
    this.setState({ admin_income: newValue });
    localStorage.setItem('admin_income', newValue);
  };

  handleSaveClick = () => {
    // отправка данных на бэкенд
    axios.patch(`${API_URL}api/settings_site/1`, {
      advertising_cost: this.state.advertising_cost,
      admin_income: this.state.admin_income
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
        const { advertising_cost, admin_income } = response.data; // Предполагается, что бэкенд возвращает эти значения
        this.setState({
          advertising_cost: localStorage.getItem('advertising_cost') || advertising_cost,
          admin_income: localStorage.getItem('admin_income') || admin_income
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
                            <Typography variant="h3" textAlign="center">Рекламный Cpm</Typography>
                          </Toolbar>
                        </div>
                        <div className="Middle-root">
                          <Grid mt={2} mb={2} container justifyContent="center">
                            <Grid item lg={8} md={8} xs={10}>
                              <Grid container justifyContent="center" mt={1}>
                                    <Grid item lg={4} md={4}>
                                        <Typography>Стоимость рекламы</Typography>
                                    </Grid>
    
                                    <Grid item lg={3} md={3}>
                                        <TextField
                                        value={this.state.advertising_cost} 
                                        onChange={this.handleInputChange_advertising_cost} 
                                        inputProps={{ min: "0", max: "100" }} 
                                        type="number" 
                                        size="small"
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" mt={1}>
                                    <Grid item lg={4} md={4}>
                                        <Typography>Доход админов</Typography>
                                    </Grid>
                                    
                                    <Grid item lg={3} md={3}>
                                        <TextField 
                                        value={this.state.admin_income} 
                                        onChange={this.handleInputChange_admin_income} 
                                        inputProps={{ min: "0", max: "100" }} 
                                        type="number" 
                                        size="small"
                                        defaultValue=""/>
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
