import React, { useState, useEffect } from "react";

import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCloudRain, faCloud, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  const [data, setData] = useState([]);
  const [ldd, setLdd] = useState(true);

  useEffect(() => {
    async function fetchData() {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=5.649911600266465&lon=-0.18837633457180827&appid=e8d4a5437d3ad657c96ff1a7d5ba3ff0"
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .then(() => console.log("Hello world"))
        .catch((error) => console.log(error.message))
        .finally(() => setLdd(false));
    }
    fetchData();
  }, []);

  return (
    <View>
      {ldd ? (
        <>
          <Text> Weather update loading ... </Text>
        </>
      ) : (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {data.weather[0].main === "Rain" ? (
            <FontAwesomeIcon icon={faCloudRain} color="gray" size={40} />
          ) : data.weather[0].main === "Clouds" ? (
            <FontAwesomeIcon icon={faCloud} color="gray" size={40} />
          ) : data.weather[0].main === "Sunny" ? (
            <FontAwesomeIcon icon={faSun} color="gray" size={40} />
          ) : (
            <Text>Normal</Text>
          )}
          <Text> {Math.round(data.main.temp - 273.15).toFixed(1)} C</Text>
        </View>
      )}
    </View>
  );
}
