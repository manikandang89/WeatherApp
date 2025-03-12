import { useState, useEffect } from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import './App.css';
import WeatherApp from './component/WeatherApp';

function App() {

  // bgcolor: "#4a148c",

  return (
    <> 
    <Box sx={{ background: "linear-gradient(to left bottom,#9570c3,#6c5eb3, #9570c3)" , color: "white"}}>
      <WeatherApp />
    </Box>
    
      
      
    </>
  )
}

export default App
