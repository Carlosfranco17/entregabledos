import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState()

  const success = (pos) => {
    const currentCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    };
    setCoords(currentCoords);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (coords) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=5b146a16f7883ae1f6d31fd116f6da8f`;

      axios
        .get(URL)
        .then((res) => setWeather(res.data))
        .catch((err) => console.log(err));
    }
  }, [coords]);

  return (
    <div className="App">

     <Weather weather={weather}/> 
     
    </div>
  );
}

export default App;
