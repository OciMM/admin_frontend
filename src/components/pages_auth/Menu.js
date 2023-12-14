import React from 'react'
import { Box, Container, Grid, Button} from '@mui/material'
import { Link } from 'react-router-dom'

import axios from 'axios'

import '/Storisbro/admin_site/src/styles/Main.css'


export default function Menu() {

  return (
    <menu>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item md></Grid>
                    <Grid item md={6} lg={6} xs={12}>
                        <div className="menu-block">
                            <ul className="menu-ul">
                                <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="creatives"><Button size="large" color="inherit">Креативы</Button></Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="publics"><Button size="large" color="inherit">Сообщества</Button></Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="notices"><Button size="large" color="inherit">Уведомления</Button></Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'inherit' }}><Button size="large" color="inherit">Контент сайта</Button></Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="statistics"><Button size="large" color="inherit">Статистика</Button></Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="publications"><Button size="large" color="inherit">Публикация</Button></Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="usersbase"><Button size="large" color="inherit">База пользователей</Button></Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="links"><Button size="large" color="inherit">Рекламные ссылки</Button></Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="pricing-menu"><Button size="large" color="inherit">Ценообразование</Button></Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="tech"><Button size="large" color="inherit">Тех.документация</Button></Link></li>
                            </ul>
                        </div>
                    </Grid>
                <Grid item md></Grid>
            </Grid>
        </Container>
    </menu>
  )
}
