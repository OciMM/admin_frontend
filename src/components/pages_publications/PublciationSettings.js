import React, { Component } from 'react'

import { Button, Checkbox, Container, Grid, Input, TextField, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import '/Storisbro/admin_site/src/styles/Main.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default class PublciationSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
          blocks: [
            { id: 'block1', content: "Рубль", color: 'yellow' },
            { id: 'block2', content: '🙂', color: 'green' },
            { id: 'block3', content: '🙂', color: 'green' },
            { id: 'block4', content: '🙂', color: 'green' },
          ],
          draggedBlock: null,
        };
      }
    
      onDragStart = (event, block) => {
        event.dataTransfer.setData('blockId', block.id);
        this.setState({ draggedBlock: block });
      };
    
      onDragOver = event => {
        event.preventDefault();
      };
    
      onDrop = (event, targetBlock) => {
        const { blocks } = this.state;
        const draggedBlockId = event.dataTransfer.getData('blockId');
        const draggedBlock = blocks.find(block => block.id === draggedBlockId);
      
        const blocksCopy = blocks.filter(block => block.id !== draggedBlockId);
        const targetIndex = blocks.findIndex(block => block.id === targetBlock.id);
      
        blocksCopy.splice(targetIndex, 0, draggedBlock);
        this.setState({ blocks: blocksCopy });
      };


  render() {
    return (
        <main>
            <Container>
                <Grid container>
                    <Grid lg={12} md={12} xs={12}>
                        <div className="Main-full-notice-root">
                            <div classNAme="High-root">
                            <Toolbar>
                                <Link to="/"><ArrowBackIcon color="warning" fontSize="large" /></Link>
                                <Typography variant="h3" textAlign="center">Настройки публикации</Typography>
                            </Toolbar>
                            </div>
                            <div className="Middle-publication-root">
                                <Grid container>
                                    <Grid item lg={12} md={12} xs={12}>
                                        <Toolbar>
                                            <Typography mr={2}>Контент видео</Typography>
                                            <TextField type="number" variant="outlined" />
                                        </Toolbar>
                                    </Grid>
                                </Grid>

                                <Grid container mt={1}>
                                    <Grid item lg={12} md={12} xs={12}>
                                        <Grid container spacing={1}>
                                            <Grid item lg={1} md={2} xs={12}>
                                                <Typography mr={2}>Вид</Typography>
                                            </Grid>
                                            <Grid item lg={2} md={2} xs={12}>
                                                <Button className="view-button" variant='contained' color="info">Стандартные МЦА</Button>
                                            </Grid>
                                            <Grid item lg={2} md={2} xs={12}>
                                                <Button className="view-button" variant='contained' color="info">Стандартные ЖЦА</Button>
                                            </Grid>
                                            <Grid item lg={2} md={2} xs={12}>
                                                <Button className="view-button" variant='contained' color="info">Взрослые СЦА</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                
                                <Grid container mt={2}>
                                    <Grid item lg={12} md={12} xs={12}>
                                        <Grid container spacing={1}>
                                            <Grid item>
                                                <Typography ml={1}>Промежуток</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography>с <Input type="date"/> по <Input type="date"/></Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography><Checkbox/> Постоянно</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container mt={2} spacing={1}>
                                    <Grid item><Typography ml={1}>Время публикации</Typography></Grid>
                                    <Grid item><Input defaultValue="19:00" type="time"/></Grid>
                                </Grid>

                                <Grid container mt={2} spacing={1}>
                                    <Grid item><Typography ml={1}>Количество рекламных мест</Typography></Grid>
                                    <Grid item><TextField type="number" size="small" inputProps={{ min: "1", max: "3" }} /></Grid>
                                </Grid>

                                <Grid container justifyContent="center">
                                    <Grid item>
                                    <div style={{ display: 'flex' }}>
                                            {this.state.blocks.map((block, index) => (
                                            <div
                                                key={block.id}
                                                draggable
                                                onDragStart={e => this.onDragStart(e, block)}
                                                onDragOver={this.onDragOver}
                                                onDrop={e => this.onDrop(e, block)}
                                                style={{
                                                width: '100px',
                                                height: '100px',
                                                borderRadius: '50%',
                                                backgroundColor: block.color,
                                                margin: '8px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                }}
                                            >
                                                {block.content}
                                            </div>
                                            ))}
                                        </div>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent="center" mt={4}>
                                    <Grid item>
                                        <Button color="success" variant="contained" size="large">Сохранить</Button>
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
