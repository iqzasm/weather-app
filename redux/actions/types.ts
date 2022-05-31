export enum ActionType {
  ADD_CITY = "ADD_CITY",
  SET_CITIES = "SET_CITIES",
  DELETE_CITY = "DELETE_CITY",
  SET_ERROR = "SET_ERROR",
  GET_CITIES = "GET_CITIES",
}

export interface AddCityAction {
  type: ActionType.ADD_CITY;
  payload: string;
}

export interface SetCitiesAction {
  type: ActionType.SET_CITIES;
  payload: string[];
}
export interface GetCitiesAction {
  type: ActionType.GET_CITIES;
}

export interface DeleteCityAction {
  type: ActionType.DELETE_CITY;
  payload: string;
}
export interface SetErrorAction {
  type: ActionType.SET_ERROR;
  payload: Error;
}

export type Action =
  | AddCityAction
  | SetCitiesAction
  | GetCitiesAction
  | DeleteCityAction
  | SetErrorAction;

export interface IWeatherData {
  temp: number;
  temp_min: number;
  temp_max: number;
  weatherDescription: string;
  sunriseText: string;
  sunsetText: string;
  iconUrl: string;
  clockHours: string;
  clockMinutes: string;
}

export interface ICityWeatherState {
  data: IWeatherData | null;
  isLoading: boolean;
  error: Error | null;
}

export interface IWeatherAPIResponse {
  data: {
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
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
  };
}

export interface ICitiesAPIResponse {
  data: [{ cities: string[] }];
}

export interface ICity {
  id: number;
  title: string;
}
