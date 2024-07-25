import { Container, Grid, Toolbar, Typography, Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import '../../styles/Main.css';
import axios from 'axios';
import { API_URL, API_URL_FOREIGN_API } from '../../api/api';

const CheckPublic = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [status, setStatus] = useState(); // For the new status
    const [comment, setComment] = useState(''); // For the comment

    useEffect(() => {
        axios.get(`${API_URL_FOREIGN_API}api_communities/communities/${id}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, [id]);

<<<<<<< HEAD
 
=======
    const formatDateTime = dateTimeString => {
        const dateObject = new Date(dateTimeString);

        const formattedDate = dateObject.toLocaleString('ru-RU', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });

        return formattedDate;
    };

    const handleStatusChange = newStatus => {
        axios.patch(`${API_URL_FOREIGN_API}api_communities/communities/${id}/`, {
            status: newStatus
        })
        .then(response => {
            setStatus(newStatus);
            alert('Status updated successfully');
        })
        .catch(error => {
            console.error('There was an error updating the status!', error);
        });
    };

    const handleCommentChange = event => {
        setComment(event.target.value);
    };

>>>>>>> bb5c3aecfcc983cb863801aec49a3e18aa147f54
    return (
        <main>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item lg={12} md={12} xs={12}>
                        <div className='Main-root'>
                            <div className="High-root">
                                <Toolbar>
                                    <Link to="http://localhost:3000/creatives"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                                    <Typography variant="h3" textAlign="center">Проверка сообщества</Typography>
                                </Toolbar>
                            </div>
                            <div className="Middle-root">
                                <div className="creative-info">
                                    <Grid container>
                                        {post && (
                                            <>
                                                <Grid className="single-block-info" item lg={4}>
                                                    <img alt="file"></img>
                                                </Grid>
                                                <Grid className="single-block-info" item lg={4}>
                                                    <h5>{post.name}</h5>
                                                </Grid>
                                                <Grid className="single-block-info" item lg={4}>
                                                    <h5>{formatDateTime(post.date)}</h5>
                                                </Grid>
                                            </>
                                        )}
                                    </Grid>
                                </div>
                            </div>
                            <div className="Status-root">
                                <Grid container spacing={4} justifyContent="center" mt={1}>
                                    <Grid item>
                                        <Button variant="contained" color="success" onClick={() => handleStatusChange(2)}>Одобрено</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="error" onClick={() => handleStatusChange(3)}>Неодобрено</Button>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="center" mt={3}>
                                    <Grid item>
                                        <TextField 
                                            id="filled-basic" 
                                            label="Введите комментарий" 
                                            variant="filled" 
                                            color="primary" 
                                            value={comment}
                                            onChange={handleCommentChange}
                                        />
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
    );
}

export { CheckPublic };
