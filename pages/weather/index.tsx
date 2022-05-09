import { Container, Stack } from "../../components/Layout";

import React from "react";
import { useInput } from "../../components/utils";
import { useRouter } from "next/router";

export default function Weather() {
  const [city, cityInput] = useInput({ placeholder: "Search for a city" });
  const router = useRouter();

  const handleClick = () => {
    console.log("Routing to city");
    router.push("/weather/" + city);
  };
  return (
    <Container>
      <Stack gap="2rem">
        <Stack>
          <h2>Weather App</h2>
          <p>
            Enter for a city name for which you wish to see the weather
            information
          </p>
        </Stack>
        <Stack>
          <label htmlFor="city">City:</label>

          {cityInput}
        </Stack>

        <button onClick={handleClick}>Get Weather Info</button>
      </Stack>
    </Container>
  );
}
