import {
  Container,
  HeaderContainer,
  ImageContainer,
  LeftWeatherContainer,
  RightWeatherContainer,
  Stack,
  WeatherContainer,
  WeatherContentContainer,
} from "../../../components/Layout";
import { IWeatherAPIResponse, IWeatherData } from "../../../services/types";
import {
  getHHMM,
  getLocalTime,
  getLocalizedTime,
  getPaddedClockText,
} from "../../../utils";
import { getWeatherIconUrl, getWeatherUrl } from "../../../services/weather";

import BottomLabel from "../../../components/BottomLabel";
import Divider from "../../../components/Divider";
import { GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import buttonStyles from "../../../styles/Button.module.css";
import useAxios from "axios-hooks";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

interface WeatherProps {
  data: IWeatherAPIResponse;
}

interface WeatherParam extends ParsedUrlQuery {
  city: string;
}

function WeatherDetail({ data }: WeatherProps) {
  const router = useRouter();
  const city = router.query.city as string;

  const { theme } = useTheme();

  console.log("current theme is::", theme);

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

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
  };

  const refresh = () => {
    console.log("Routing to city");

    router.push(`/weather/ssr/${city}`);
  };

  return (
    <>
      <WeatherContainer>
        <HeaderContainer>
          <Stack gap="0%">
            <h1>Weather info for {city}</h1>
            <h4 suppressHydrationWarning>
              {cityDate.toLocaleDateString([], {
                hour12: true,
                month: "2-digit",
              }) +
                ", " +
                cityDate.toLocaleTimeString([], {
                  hour12: true,
                  month: "2-digit",
                })}
            </h4>
          </Stack>

          <button className={buttonStyles.btn} onClick={() => refresh()}>
            Refresh
          </button>
        </HeaderContainer>
        <WeatherContentContainer>
          <LeftWeatherContainer>
            <Image
              src={iconUrl}
              alt=""
              title=""
              width="100%"
              height="100%"
              objectFit="contain"
            />

            <BottomLabel
              label={weatherData.weatherDescription}
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

export const getStaticProps: GetStaticProps<
  WeatherProps,
  WeatherParam
> = async (context) => {
  const { params } = context;

  console.log(`Generating page for /weather/${params?.city}`);

  if (!params) {
    return {
      props: {
        data: null,
      },
    };
  }
  const response = await fetch(getWeatherUrl(params.city ?? ""));
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { city: "Chennai" } }],
    fallback: true, // fallback to temporary markup until the static site is generated on the server side
  };
}

export default WeatherDetail;
