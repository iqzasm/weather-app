export interface IWeatherData {
  temp?: number;
  temp_min?: number;
  temp_max?: number;
  weatherDescription?: string;
  sunriseText?: string;
  sunsetText?: string;
  iconUrl?: string;
  clockHours?: string;
  clockMinutes?: string;
  feels_like?: number;
  humidity?: number;
  localeDate?: string;
  localeTime?: string;
}

export interface ICityWeatherState {
  data: IWeatherData | null;
  isLoading: boolean;
  error: Error | null;
}

export interface IWeatherAPIAxiosResponse {
  data: IWeatherAPIResponse;
}

export interface IWeatherAPIResponse {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    humidity: number;
  };
  timezone: number;
  weather: {
    description: string;
    icon: string;
  }[];
  sys: {
    sunrise: number;
    sunset: number;
  };
}

export interface ICitiesAPIResponse {
  data: [{ cities: string[] }];
}

export interface ICity {
  id: number;
  title: string;
}
