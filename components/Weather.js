import React, { useState, useEffect } from 'react';
import {ImageBackground, Text, StyleSheet} from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) { 
  const [forecastInfo, setForecastInfo] = useState({
    main: 'loading...',
    describtion: 'loading...',
    temp: 0
  })

  useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`)
    if (props.zipCode) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=0e9c6c489c9b108eb18ef7c78a981ced`)
        .then((response) => response.json())
        .then((json) => {
            setForecastInfo({
              main: json.weather[0].main,
              description: json.weather[0].description,
              temp: json.main.temp
            });
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [props.zipCode])



  return (
    <ImageBackground source = {require('../bg.jpg')} style = {styles.backdrop}> 
      <Text>Zip Code is {props.zipCode}</Text>
      <Forecast {...forecastInfo} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  fonts: {
    marginTop: 10,
    fontSize : 18,
} 
}) ;