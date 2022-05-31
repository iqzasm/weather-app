import { GetStaticProps } from "next";
import { IWeatherAPIResponse } from "../../../services/types";
import { ParsedUrlQuery } from "querystring";
import WeatherDetail from "../ssr/[city]";
import { getWeatherUrl } from "../../../services/weather";

interface WeatherProps {
  data: IWeatherAPIResponse;
}

interface WeatherParam extends ParsedUrlQuery {
  city: string;
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
      revalidate: 10,
    };
  }
  const response = await fetch(getWeatherUrl(params.city ?? ""));
  const data = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 10, // this marks the Incremental Static site generation for every 10 seconds
  };
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { city: "Chennai" } }],
    fallback: true,
  };
}

export default WeatherDetail;
