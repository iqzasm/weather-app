import {
  ActionType,
  AddCityAction,
  DeleteCityAction,
  SetCitiesAction,
} from "./types";

export const addCity = (payload: string): AddCityAction => ({
  type: ActionType.ADD_CITY,
  payload,
});

export const setCities = (payload: string[]): SetCitiesAction => ({
  type: ActionType.SET_CITIES,
  payload,
});

export const deleteCity = (payload: string): DeleteCityAction => ({
  type: ActionType.DELETE_CITY,
  payload,
});

export const setError = (payload: Error) => ({
  type: ActionType.SET_ERROR,
  payload,
});

export * from "./types";
