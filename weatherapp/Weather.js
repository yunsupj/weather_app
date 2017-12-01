import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Rainy",
    subtitle: "Bring an Umbrella!!",
    icon: "weather-rainy"
  },

  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny",
    subtitle: "Go get your ass Burn!!",
    icon: "weather-sunny"
  },

  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm",
    subtitle: "Stay in your House!!",
    icon: "weather-lightning"
  },

  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "Gloomy Day!!",
    icon: "weather-cloudy"
  },

  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "Go out with your Wife, and Enjoy it!!",
    icon: "weather-snowy"
  },

  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "You can see 🌈. May be after shallow Rain",
    icon: "weather-hail"
  },

  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "Again? Wait for Sunny Day!!",
    icon: "weather-hail"
  },

  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on.",
    icon: "weather-fog"
  }
};

function Weather({weatherName, temp}) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          name={weatherCases[weatherName].icon}
          size={144}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>

      <View style={styles.lower}>
        <Text style={styles.title}>
          {weatherCases[weatherName].title}
        </Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  weatherName: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  temp: {
    fontSize: 70,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },

  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    paddingRight: 25
  },

  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },

  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 50
  }
});
