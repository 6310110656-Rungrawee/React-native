import React, { useState } from 'react';
import {ImageBackground, Text, StyleSheet} from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) { 
  const [forecastInfo, setForecastInfo] = useState({
    main: 'loading...',
    describtion: 'loading...',
    temp: 0
  })



  return (
    <ImageBackground source = {require('../bg.jpg')} style = {styles.backdrop}>
      <Text>Zip Code</Text>
      <Text>{props.zipCode}</Text> 
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