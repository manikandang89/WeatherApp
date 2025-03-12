import React from "react";
import { Card, CardContent, Typography, Container, IconButton, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';

const WeatherCardData = ({ weatherCardData }) => {
  if (!weatherCardData) return null;

  const { current, location } = weatherCardData;
  const icon = current.condition?.icon || '';
  const locationName = location?.name || 'Unknown Location';
  const date = location?.localtime.split(" ")[0] || 'Unknown Location';

  const tempC = current?.temp_c !== undefined ? `${current.temp_c}°C` : 'Temperature not available';
  const visibility = current?.vis_miles !== undefined ? `${current.vis_miles}km` : 'Visibility not available';
  const feelsLike = current?.feelslike_c !== undefined ? `${current.feelslike_c}km` : 'N/A';
  const wind = current?.wind_kph !== undefined ? `${current?.wind_kph}km` : 'N/A';
  const humidity = current?.humidity !== undefined ? `${current?.humidity}km` : 'N/A';

  return (
    <>
    <Card sx={{ bgcolor: "transparent",  background: "linear-gradient(to left bottom,#5617a7, #2c222c)",color: "white", mx:0.75, border: 1, borderRadius: 4, minWidth: 300 , minHeight: '65vh'}}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{display: 'flex', justifyContent: 'left'}}>
          <img src={icon} alt="weather icon" />
          <div style={{padding: '5px 10px'}}>
          <section style={{fontSize:'1rem'}}>{locationName}</section>
          <section style={{fontSize:'0.75rem'}}> {date}</section>
          </div>
        </Typography>
        <Typography variant="h3">{tempC}</Typography>
        <Typography variant="subtitle1">Mostly Cloudy</Typography>
        <section style={{paddingTop : '60px', position: 'static'}}> 
        <Typography variant="body2">Visibility: {visibility} | Feels Like: {feelsLike}</Typography>
        <Typography variant="body2">Humidity: {humidity} | wind: {wind}</Typography>
        </section>
      </CardContent>
    </Card>
    </>
  );
};

export default WeatherCardData;