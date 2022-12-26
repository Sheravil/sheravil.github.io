import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageAvatars from './avatar';
import "./css/index.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: "none"
}));

export default function AboutGrid() {
  return (
    <Box sx={{ height: "100vh" }} >
      <Grid container spacing={2} >
        <Grid item xs={7} className="centered" >
          <Item>
          <div>
                <p>Hi there 👋, I'm</p>
                <br/>
                <h1 className='hh1'>Emin Çuha</h1>
                <p>Front-End Developer</p>
                <p className='emailFont'>emincuha@gmail.com</p>
                <LinkedInIcon />
                <GitHubIcon />
            </div>
          </Item>
        </Grid>
        <Grid item xs={5} className="centered">
          <Item>
            <ImageAvatars />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}