import * as actionTypes from "./types";
import { IAction } from "../../models/store/action.interface";
import { Message } from "../../models/UI/message.class";

export function setMessage(message: Message): IAction {
  return {
    type: actionTypes.SET_MESSAGE,
    message,
  };
}

export function dismissMessage(): IAction {
  return {
    type: actionTypes.DISMISS_MESSAGE,
  };
}

export function setLoading(): IAction {
  return {
    type: actionTypes.SET_LOADING
  };
}

export function unsetLoading(): IAction {
  return {
    type: actionTypes.UNSET_LOADING
  };
}