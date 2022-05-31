import {
  Container,
  HeaderContainer,
  ImageContainer,
  LeftWeatherContainer,
  RightWeatherContainer,
  Stack,
  WeatherContainer,
  WeatherContentContainer,
} from "../../components/Layout";
import {
  getHHMM,
  getLocalTime,
  getLocalizedTime,
  getPaddedClockText,
} from "../../utils";
import { getWeatherIconUrl, getWeatherUrl } from "../../services/weather";
import { useCallback, useEffect, useState } from "react";

import BottomLabel from "../../components/BottomLabel";
import Divider from "../../components/Divider";
import { GetStaticProps } from "next";
import { IWeatherData } from "../../services/types";
import Image from "next/image";
import buttonStyles from "../../styles/Button.module.css";
import useAxios from "axios-hooks";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

function WeatherDetail() {
  const router = useRouter();
  const city = router.query.city as string;

  const { theme } = useTheme();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [weatherData, setWeatherData] = useState<IWeatherData>({});

  console.log("current theme is::", theme);

  async function getWeatherData() {
    try {
      console.log("Fetching::::", city);
      if (!city) return;
      const response = await fetch(getWeatherUrl(city));
      const data = await response.json();
      const { temp, temp_min, temp_max, feels_like, humidity } = data.main;
      const weatherDescription = data.weather[0].description;
      const iconcode = data.weather[0].icon;
      const iconUrl = iconcode ? getWeatherIconUrl(iconcode) : "";
      const cityTimezone = data.timezone;

      const sunrise = data.sys.sunrise
        ? getLocalizedTime(data.sys.sunrise, cityTimezone)
        : null;

      const sunset = data.sys.sunset
        ? getLocalizedTime(data.sys.sunset, cityTimezone)
        : null;

      const cityDate = getLocalTime(cityTimezone);
      const clockHours = getPaddedClockText(cityDate.getHours());
      const clockMinutes = getPaddedClockText(cityDate.getMinutes());
      const sunriseText = getHHMM(sunrise);
      const sunsetText = getHHMM(sunset);
      const localeDate = cityDate.toLocaleDateString();
      const localeTime = cityDate.toLocaleTimeString();

      const weatherData: IWeatherData = {
        temp,
        temp_min,
        temp_max,
        weatherDescription,
        sunriseText,
        sunsetText,
        iconUrl,
        clockHours,
        clockMinutes,
        feels_like,
        humidity,
        localeDate,
        localeTime,
      };

      console.log("Setting up weatherData");

      setWeatherData(weatherData);
      setLoading(false);
      setError(null);
    } catch (e) {
      if (typeof e === "string") {
        setError(e.toUpperCase()); // works, `e` narrowed to string
      } else if (e instanceof Error) {
        setError(e.message);
      }
      setLoading(false);
    }
  }

  function refetch() {
    getWeatherData();
  }

  const memoGetWeatherData = useCallback(getWeatherData, [city]);

  useEffect(() => {
    memoGetWeatherData();
  }, [city, memoGetWeatherData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log("checking weatherData3", loading, error);
  return (
    <>
      <WeatherContainer>
        <HeaderContainer>
          <Stack gap="0%">
            <h1>Weather info for {city}</h1>
            <h4>{weatherData.localeDate + ", " + weatherData.localeTime}</h4>
          </Stack>

          <button className={buttonStyles.btn} onClick={() => refetch()}>
            Refresh
          </button>
        </HeaderContainer>
        <WeatherContentContainer>
          <LeftWeatherContainer>
            <Image
              src={weatherData.iconUrl ?? ""}
              alt=""
              title=""
              width="100%"
              height="100%"
              objectFit="contain"
            />

            <BottomLabel
              label={weatherData.weatherDescription ?? ""}
              value={`${weatherData.temp}°`}
              size="big"
            />
          </LeftWeatherContainer>
          <Divider />
          <RightWeatherContainer>
            <BottomLabel
              label={"High"}
              value={`${weatherData.temp_max}°`}
              alignself="end"
            />
            <BottomLabel
              label="Feels like"
              value={`${weatherData.feels_like}°`}
              alignself="end"
            />
            <BottomLabel
              label="Sunrise"
              value={`${weatherData.sunriseText}`}
              alignself="end"
            />

            {/* ********************** */}

            <BottomLabel
              label="Low"
              value={`${weatherData.temp_min}°`}
              alignself="start"
            />

            <BottomLabel
              label="Humidity"
              value={`${weatherData.humidity}`}
              alignself="start"
            />
            <BottomLabel
              label="Sunset"
              value={`${weatherData.sunsetText}`}
              alignself="start"
            />
          </RightWeatherContainer>
        </WeatherContentContainer>
      </WeatherContainer>
    </>
  );
}

export default WeatherDetail;
