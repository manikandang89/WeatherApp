import { useState, useEffect } from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import './App.css';
import WeatherApp from './component/WeatherApp';

function App() {



  return (
    <> 
    <Box sx={{ bgcolor: "#4a148c", color: "white"}}>
      <WeatherApp />
    </Box>
    
      
      
    </>
  )
}

export default App
