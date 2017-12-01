import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather';

const API_Key = "16f3c0560f0938280ba5681ca0e82feb";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temp: null,
    name: null,
    city: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: "*** Couldn't get Weather Informations ***"
        });
      }
    );
  }

  _getWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_Key}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          temp: json.main.temp,
          name: json.weather[0].main,
          city: json.name
        });
      })

      .then(setTimeout(() => {
        this.setState({
          isLoaded: true,
        });
      }, 4000))
  }

  render() {
    const { isLoaded, error, name, temp, city } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {isLoaded ? (
          <Weather
            weatherName={name}
            temp={Math.floor(temp-273.15)}
          />
        ) : (
          <View style={styles.loading}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.loadingText}>Hi Kim, Chloe. Todays Weather   @{city}</Text>
            {error ? <Text style={styles.errorText}>{error}</Text>: null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  errorText: {
    fontSize: 30,
    color: "red",
    backgroundColor: "transparent",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 200
  },

  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-start",
    paddingLeft: 30
  },

  loadingText: {
    fontSize: 38,
    marginTop: 120
  }
});
