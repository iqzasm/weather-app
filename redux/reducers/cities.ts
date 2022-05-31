import { Action } from "../actions";
import { ActionType } from "../actions";

const cities = (state: string[] = [], action: Action): string[] => {
  switch (action.type) {
    case ActionType.ADD_CITY:
      return action.payload ? [...state, action.payload] : state;
    case ActionType.DELETE_CITY:
      return state.filter((city) => city !== action.payload);
    case ActionType.SET_CITIES:
      if (action.payload && Array.isArray(action.payload)) {
        return action.payload;
      }

      return state;
    case ActionType.GET_CITIES:
    default:
      return state;
  }
};

export default cities;
