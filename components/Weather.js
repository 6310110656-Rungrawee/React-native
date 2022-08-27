import React, { useState, useEffect } from 'react'
import {SafeAreaView, Dimensions, ImageBackground, Text, StyleSheet, StatusBar} from 'react-native'
import Forecast from './Forecast'
const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

export default function Weather(props) { 
  const [forecastInfo, setForecastInfo] = useState({
    name: 'loading...',
    icon: "",
    main: 'loading...',
    describtion: 'loading...',
    temp: 0,
    pressure: 0,
    humidity: 0
  })
  useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`)
    if (props.zipCode) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=0e9c6c489c9b108eb18ef7c78a981ced`)
        .then((response) => response.json())
        .then((json) => {
            setForecastInfo({
              icon: json.weather[0].icon,
              main: json.weather[0].main,
              description: json.weather[0].description,
              temp: json.main.temp,
              pressure: json.main.pressure,
              humidity: json.main.humidity,
              name: json.name
            });
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [props.zipCode])
   
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source = {require('../bg.jpg')} style = {styles.backdrop}>
        <Forecast {...forecastInfo} />
        <StatusBar translucent={true} backgroundColor="#000"/>
      </ImageBackground>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container:{
    height:Dev_Height,
    width: Dev_Width
  },
  backdrop: {
    width: '100%',
    height: '100%',
  },
})