import { Container, Grid, Toolbar, Typography, Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import '/Storisbro/admin_site/src/styles/Main.css'
import axios from 'axios';


const StatusPublic = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);


    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);


    return (
        <main>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item lg={12} md={12} xs={12}>
                        <div className='Main-root'>
                            <div className="High-root">
                                <Toolbar>
                                    <Link to="http://localhost:3000/creatives"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                                    <Typography variant="h3" textAlign="center">Статус сообщества</Typography>
                                </Toolbar>
                            </div>
                            <div className="Middle-root">
                                <div className="creative-info">
                                    <Grid container>
                                        {post && (
                                            <>
                                                <Grid className="single-block-info" item lg={4}>
                                                    <Link to={`/creatives/${id}/details`}><img src={post.data.avatar}></img></Link><h5>{post.data.first_name}</h5>
                                                </Grid>
                                                <Grid className="single-block-info" item lg={4}>
                                                    <h5>{post.data.last_name}</h5>
                                                </Grid>
                                                <Grid className="single-block-info" item lg={4}>
                                                    <h5>{post.data.id}</h5>
                                                </Grid>
                                            </>
                                        )}
                                    </Grid>
                                </div>
                            </div>
                            <div className="Status-root">
                                <Grid container spacing={4} justifyContent="center" mt={1}>
                                    <Grid item>
                                        <Button variant="outlined" color="inherit">Одобрено</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="error">Неодобрено</Button>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" mt={3}>
                                    <Grid item>
                                        <Typography>Комментарий от 03.07.2023</Typography>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" mt={3}>
                                    <Grid item lg={5}>
                                        <TextField fullWidth id="filled-basic" label="Старый комментарий" variant="filled" color="primary" />
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" mt={3}>
                                    <Grid item lg={5}>
                                        <TextField fullWidth id="filled-basic" label="Введите новый комментарий" variant="filled" color="primary" />
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" mt={3} mb={3}>
                                    <Grid item>
                                        <Button fullWidth variant="contained" color="warning">Готово</Button>
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


export {StatusPublic}