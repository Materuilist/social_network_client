import { combineReducers } from "redux";
import user, { IUserState } from "./user";
import layout, { ILayoutState } from "./layout";

export interface IReducerState {
  user: IUserState;
  layout: ILayoutState;
}

export const reducers = combineReducers({
  user,
  layout,
});
