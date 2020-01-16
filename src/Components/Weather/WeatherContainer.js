import React, { Component } from "react";
import WeatherItems from "./WeatherItems";
import axios from "axios";

class WeatherContainer extends Component {
  state = {
    temp: "",
    name: "",
    location: ""
  };

  api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params: {
      APPID: "c88e4c1eed5183423ad418d6b2d183fb"
    }
  });

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const getWeather = this.api.get(
        "/weather",
        {
          params: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
        },
        err => console.log(err)
      );
      getWeather
        .then(res => {
          this.setState({
            temp: String(Math.ceil(res.data.main.temp - 273.15)),
            name: res.data.weather[0].main,
            location: res.data.name
          });
        })
        .catch(err => console.log(err));
    });
  }

  render() {
    const { temp, name, location } = this.state;
    return <WeatherItems temp={temp} name={name} location={location} />;
  }
}

export default WeatherContainer;
