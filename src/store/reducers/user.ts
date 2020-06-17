import * as actionTypes from "../actions/types";
import { User } from "../../models/entities/user.class";
import { IAction } from "../../models/store/action.interface";

export interface IUserState {
  info: User;
  isAuth: boolean;
}

const initialState: IUserState = {
  info: User.createEmpty(),
  isAuth: false,
};

export default function (
  prevState: IUserState = initialState,
  action: IAction
): IUserState {
  switch (action.type) {
    case actionTypes.AUTH_SUCCEED: {
      return { ...prevState, isAuth: true, info: action.userInfo };
    }
    case actionTypes.AUTH_EXPIRED:{
      return { ...prevState, isAuth: false };
    }
    default: {
      return prevState;
    }
  }
}
