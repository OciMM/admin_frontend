import { Container, Grid, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import '/Storisbro/admin_site/src/styles/Main.css'

export default function DetailsCreative() {
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
                    <div className="Main-root">
                        <div className="High-root">
                            <Toolbar>
                                <Link to={`http://localhost:3000/creatives/${id}`}><ArrowBackIcon color="warning" fontSize="large" /></Link>
                            </Toolbar>
                        </div>
                        <div className="Middle-root">
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <div className="main-stat-info">
                                        
                                    </div>
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