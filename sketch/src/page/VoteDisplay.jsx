import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import Select from "../components/Select";
import Button from "@mui/material/Button";

const VoteDisplay = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    let aaronClock = setInterval(() => setDateTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(aaronClock);
    };
  });

  // Tujuan: pake openweathermap untuk ambil nama tempat tinggal. ex: Pademangan, Pecenongan
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

  useEffect(() => {
    if (userLocation) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${apiKey}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  }, [userLocation, apiKey]);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          console.log(position);
        },
        (error) => {
          console.error("Error getting user information:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ padding: "10vh 5vw" }}>
        {/* Automatic fetch User location is not useful. Delete this later, Just use data from ktp bcs more accurate + easier */}
        <h1>Voting Page</h1>
        {!userLocation ? (
          <Button onClick={getUserLocation} variant="contained">
            Grab paper
          </Button>
        ) : null}

        {userLocation && weather ? (
          <div>
            <h2>User Location</h2>
            <p>{dateTime.toLocaleTimeString()}</p>
            <p>Lokasi: {weather.name}</p>
            <p>Latitiude: {userLocation.latitude}</p>
            <p>Longitude: {userLocation.longitude}</p>
            <Select></Select>
          </div>
        ) : null}
      </Container>
    </>
  );
};

export default VoteDisplay;
