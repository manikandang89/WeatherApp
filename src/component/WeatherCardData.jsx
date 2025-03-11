import React from "react";
import { Card, CardContent, Typography, Container, IconButton, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';

const WeatherCardData = ({ weatherCardData }) => {
  if (!weatherCardData) return null;

  const { current, location } = weatherCardData;
  const icon = current.condition?.icon || '';
  const locationName = location?.name || 'Unknown Location';
  const date = location?.name || 'Unknown Location';

  const tempC = current?.temp_c !== undefined ? `${current.temp_c}°C` : 'Temperature not available';
  const visibility = current?.vis_miles !== undefined ? `${current.vis_miles}km` : 'Visibility not available';
  const feelsLike = current?.feelslike_c !== undefined ? `${current.feelslike_c}°C` : 'N/A';
  const wind = current?.wind_kph !== undefined ? `${current?.wind_kph}°C` : 'N/A';
  const humidity = current?.humidity !== undefined ? `${current?.humidity}°C` : 'N/A';

  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '16px'}}>
    <Card sx={{ bgcolor: "transparent", color: "white", p: 2, border: 2, borderRadius: 4, minWidth: 300 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <img src={icon} alt="weather icon" />
          <span>{locationName}</span>
          <span></span>
        </Typography>
        <Typography variant="h3">{tempC}</Typography>
        <Typography variant="subtitle1">Mostly Cloudy</Typography>
        <Typography variant="body2">Visibility: {visibility} | Feels Like: {feelsLike}</Typography>
        <Typography variant="body2">Humidity: {humidity} | wind: {wind}</Typography>
      </CardContent>
    </Card>
    </Box>
  );
};

export default WeatherCardData;