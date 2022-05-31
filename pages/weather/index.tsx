import { Container, Stack } from "../../components/Layout";

import React from "react";
import { addCity } from "../../redux/actions";
import buttonStyles from "../../styles/Button.module.css";
import { useDispatch } from "react-redux";
import { useInput } from "../../components/utils";
import { useRouter } from "next/router";

export default function Weather() {
  const [city, cityInput] = useInput({ placeholder: "Search for a city" });
  const router = useRouter();

  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("Routing to city");
    dispatch(addCity(city));
    router.push("/");
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

        <button
          className={buttonStyles.btn}
          onClick={handleClick}
          disabled={!city}
        >
          Add Location
        </button>
      </Stack>
    </Container>
  );
}
