import { Container, Grid, Toolbar, Typography, Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import '../../styles/Main.css'
import axios from 'axios';
import { API_URL } from '../../api/api'; 


const SingleCreative = () => {
    const {id, creative_type} = useParams();
    const [post, setPost] = useState(null);


    useEffect(() => {
        fetch(`${API_URL}api_creatives/all_creatives/${creative_type}/${id}/`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id, creative_type]);


    return (
        <main>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item lg={12} md={12} xs={12}>
                        <div className='Main-root'>
                            <div className="High-root">
                                <Toolbar>
                                    <Link to="http://localhost:3000/creatives"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                                    <Typography variant="h3" textAlign="center">Проверка креатива</Typography>
                                </Toolbar>
                            </div>
                            <div className="Middle-root">
                                <div className="creative-info">
                                    <Grid container>
                                        {post && (
                                            <>
                                                <Grid className="single-block-info" item lg={4}>
                                                    <Link to={`/creatives/${id}/details`}><img alt="file" src={post.file}></img></Link><h5>{post.creative_type}</h5>
                                                </Grid>
                                                <Grid className="single-block-info" item lg={4}>
                                                    <h5>{post.name}</h5>
                                                </Grid>
                                                <Grid className="single-block-info" item lg={4}>
                                                    <h5>{post.date}</h5>
                                                </Grid>
                                            </>
                                        )}
                                    </Grid>
                                </div>
                            </div>
                            <div className="Status-root">
                                <Grid container spacing={4} justifyContent="center" mt={1}>
                                    <Grid item>
                                        <Button variant="contained" color="success">Одобрено</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="error">Неодобрено</Button>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="center" mt={3}>
                                    <Grid item>
                                        <TextField id="filled-basic" label="Введите комментарий" variant="filled" color="primary" />
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="center" mt={3} mb={3}>
                                    <Grid item>
                                        <Button variant="contained" color="warning">Готово</Button>
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


export {SingleCreative}