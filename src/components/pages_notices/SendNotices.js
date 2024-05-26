import React, { Component, useState } from 'react'
import axios from 'axios'
import { Container, Grid, Typography, Toolbar, TextField, Button, Input, Checkbox} from '@mui/material'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { API_URL } from '../../api/api'

import '../../styles/Main.css'

const SendNotices = () => {

  const [uid, setUid] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [checkUser, setCheckUser] = useState(true);
  const [checkVk, setCheckVk] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  const [checkUserStr, setCheckUserStr] = useState("");
  const [checkVkStr, setCheckVkStr] = useState("");
  const [checkEmailStr, setCheckEmailStr] = useState("");


  const handleChangeUser = (event) => {
    setCheckUser(event.target.checked);
    setCheckUserStr("true");
  };

  const handleChangeVK = (event) => {
    setCheckVk(event.target.checked);
    setCheckVkStr("true");
  };

  const handleChangeEmail = (event) => {
    setCheckEmail(event.target.checked);
    setCheckEmailStr("true");
  };

  const handleClick = () => {
    axios.post(`${API_URL}send_notification/${checkUserStr}/${checkVkStr}/${checkEmailStr}`, { 
      UID: uid, 
      title: title,
      text: text,
    })
      .then(response => {
        console.log("Успешно отправилось уведомление")
      })
      .catch(error => {
        console.error("Ошибка в отправке:", error);
      });
  };

    return (
      <main>
        <Container maxWidth="lg">
            <Grid container>
                <Grid item lg={12} md={12} xs={12}>
                    <div className="Main-root">
                        <div className="High-root">
                            <Toolbar>
                                <Link to="http://localhost:3000/notices"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                                <Typography variant="h3" textAlign="center">Фильтр пользователей</Typography>
                            </Toolbar>
                        </div>
                        <div className="Middle-full-root">
                          <div className="Text-root">
                              <Grid container>
                                <Grid item lg={12} md={12} xs={12}>
                                  <Typography>Тип уведомления</Typography>
                                  <TextField fullWidth id="outlined-basic" label="Введите текст" variant="outlined" value={title}
                                    onChange={(e) => setTitle(e.target.value)}/>
                                </Grid>
                              </Grid>
                            </div>
                            <div className="Text-root">
                              <Grid container>
                                <Grid item lg={12} md={12} xs={12}>
                                  <Typography>Текст уведомлений</Typography>
                                  <TextField fullWidth id="outlined-basic" label="Введите текст" variant="outlined" value={text}
                                    onChange={(e) => setText(e.target.value)}/>
                                </Grid>
                              </Grid>
                            </div>

                            <div className="Media-root">
                              <Grid container>
                                <Grid item lg={12} md={12} xs={12}>
                                  <Typography>Медиавложения</Typography>
                                  <Input type="file" />
                                </Grid>
                              </Grid>
                            </div>

                            <div className="Date-root">
                              <Grid container>
                                <Grid item lg={12} md={12} xs={12}>
                                  <Typography>Отложить до</Typography>
                                </Grid>
                              </Grid>
                            </div>

                            <div className="Source-root">
                              <Grid container>
                                <Grid item lg={12} md={12} xs={12}>
                                  <Typography>Источники</Typography>
                                  <Grid container>
                                    <Grid item><Typography><Checkbox checked={checkUser} onChange={handleChangeUser}/>ЛК на сервисе</Typography></Grid>
                                    <Grid item><Typography><Checkbox checked={checkVk} onChange={handleChangeVK}/>Сообщения Вконтакте</Typography></Grid>
                                    <Grid item><Typography><Checkbox checked={checkEmail} onChange={handleChangeEmail}/>Почта</Typography></Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </div>

                            <div className="Society-root">
                              <Grid container>
                                <Grid item lg={12} md={12} xs={12}>
                                  <Typography>Целевая аудитория</Typography>
                                  <Grid container>
                                    <Grid item pr={3}><Typography><Checkbox/>Пользователи, у кого минимум 1 сообществе в статусе “Активное”</Typography></Grid>
                                    <Grid item pr={3}><Typography><Checkbox/>Пользователи, у которых минимум 1 креатив в статусе “Активен”</Typography></Grid>
                                  </Grid>
                                  <Grid container>
                                    <Grid item lg={2}><Typography><Checkbox/>Все</Typography></Grid>
                                    <Grid item lg={10}><Typography><TextField fullWidth id="outlined-basic" label="Введите UID" variant="outlined" value={uid}
                                    onChange={(e) => setUid(e.target.value)}/> Пользователи, у которых минимум 1 креатив в статусе “Активен”</Typography></Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </div>

                            <div className="Low-root">
                              <Grid container mt={3} mb={4} spacing={3} justifyContent="center">
                                <Grid item>
                                  <Button variant="contained" color="warning">Начать отправку</Button>
                                </Grid>
                                <Grid item>
                                  <Button variant="contained" color="inherit">Тест</Button>
                                </Grid>
                              </Grid>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
      </main>
    )
}

export default SendNotices;