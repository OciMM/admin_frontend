import React, { Component } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button, Input} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

// import '/Storisbro/admin_site/src/styles/Main.css'
import '../../styles/Main.css'
import { API_URL } from '../../api/api' 


export default class ReferralSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      referral_earnings: localStorage.getItem('referral_earnings') || "",
      settings: []
    };
  }

  handleInputChange_referral_earnings = (event) => {
    const newValue = event.target.value;
    this.setState({ referral_earnings: newValue });
    localStorage.setItem('referral_earnings', newValue);
  };

  handleSaveClick = () => {
    // отправка данных на бэкенд
    axios.patch(`${API_URL}api/settings_site/1`, {
      referral_earnings: this.state.referral_earnings,
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
        const { referral_earnings } = response.data; // Предполагается, что бэкенд возвращает эти значения
        this.setState({
          referral_earnings: localStorage.getItem('referral_earnings') || referral_earnings,
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
                            <Typography variant="h3" textAlign="center">Реф. система</Typography>
                          </Toolbar>
                        </div>
                        <div className="Middle-root">
                          <Grid mt={2} mb={2} container justifyContent="center">
                            <Grid item lg={8} md={8} xs={10}>
                              <Grid container justifyContent="center" mt={1}>
                                    <Grid item lg={4} md={4}>
                                        <Typography>Доход</Typography>
                                    </Grid>
    
                                    <Grid item lg={3} md={3}>
                                        <TextField 
                                        inputProps={{ min: "0", max: "100" }} 
                                        type="number" 
                                        size="small"
                                        value={this.state.referral_earnings} 
                                        onChange={this.handleInputChange_referral_earnings}/>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" mt={1}>
                                    <Grid item lg={4} md={4}>
                                        <Typography>Пользователь</Typography>
                                    </Grid>
                                    
                                    <Grid item lg={3} md={3}>
                                        <TextField size="small"/>
                                    </Grid>
                                </Grid>
                              
                            </Grid>
                          </Grid>
                        </div>
                        <div className="Low-root">
                          <Grid mt={4} container justifyContent="center"> 
                            <Grid item>
                              <Button variant="contained" size="large" color="success" onClick={this.handleInputChange_referral_earnings}>Сохранить</Button>
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
