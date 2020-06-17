import * as actionTypes from "../actions/types";
import { IAction } from "../../models/store/action.interface";
import { Message } from "../../models/UI/message.class";

export interface ILayoutState {
  isLoading: boolean;
  message: Message | null;
}

const initialState: ILayoutState = {
  isLoading: false,
  message: null,
};

export default function (
  prevState: ILayoutState = initialState,
  action: IAction
): ILayoutState {
  switch (action.type) {
    case actionTypes.SET_LOADING: {
      return { ...prevState, isLoading: true };
    }
    case actionTypes.UNSET_LOADING: {
      return { ...prevState, isLoading: false };
    }
    case actionTypes.SET_MESSAGE: {
      return { ...prevState, message: action.message };
    }
    case actionTypes.DISMISS_MESSAGE: {
      return { ...prevState, message: null };
    }
    default: {
      return prevState;
    }
  }
}
