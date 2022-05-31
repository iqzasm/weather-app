import { ICity } from "../actions";
import cities from "./cities";
import { combineReducers } from "redux";

export interface IApplicationState {
  cities: string[];
}

export const appIntialState: IApplicationState = {
  cities: [
    "Chennai",
    "Budapest",
    "Mumbai",
    "New York",
    "Tirunelveli",
    "Firenze",
  ],
};

export default combineReducers({
  cities,
});
