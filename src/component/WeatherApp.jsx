import React, {useState} from 'react';
import { Card, CardContent, Typography, Container, IconButton, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WeatherCardData from './WeatherCardData';
import {fetchWeatherData} from '../hooks/useGetData';


const WeatherApp = () => {

    const [cityInput, setShowInput] = useState(false);
    const [weatherData, setWeatherData] = useState([]);
    const [prevCity, setPrevCity] = useState([]);

    //const { data = [], error, isLoading } = useUsers();

    const citySearch =(e) => {
        setShowInput(e.target.value);
    }

    const getWeatherDataApi = async() => {
        const data = await fetchWeatherData(cityInput);
        if (!prevCity.includes(cityInput)) {
            setPrevCity([...prevCity, cityInput]);
            setWeatherData([...weatherData, data]);
          }
        console.log('weather data', data);

    }
  return (
    <div>

<Container sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)" }}>
<Grid container spacing={2} justifyContent="center">
        <Grid size={8}>
        {weatherData.map((data, index) => ( 
          <WeatherCardData weatherCardData={data}/>
        ))}
        </Grid>
        <Grid size={4}>
          <Card sx={{ bgcolor: "transparent", color: "white", p: 2,border: 2, borderRadius: 4, minWidth: 300 }}>
            <CardContent sx={{display: 'block'}}>

            <div>
            <TextField id="outlined-search" label="Search field" type="search" onChange={citySearch}/>
            </div>
            <div>
              <IconButton color="inherit" onClick={getWeatherDataApi}>
                <AddCircleOutlineIcon fontSize="large" />
              </IconButton>
              <Typography variant="subtitle1">Add new location</Typography>
              </div>
            </CardContent>

          </Card>
        </Grid>
      </Grid>
    </Container>
      
    </div>
  )
}

export default WeatherApp
