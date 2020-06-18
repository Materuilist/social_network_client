import * as actionTypes from "./types";
import { IAction } from "../../models/store/action.interface";
import { User } from "../../models/entities/user.class";

export function initAuth(login: string, password: string, isRegister:boolean): IAction {
  return {
    type: actionTypes.AUTH_INIT,
    login,
    password,
    isRegister
  };
}

export function authSucceed(user:User):IAction{
    return {
        type:actionTypes.AUTH_SUCCEED,
        userInfo:user
    }
}

export function authFail(message:string):IAction{
  return {
      type:actionTypes.AUTH_FAIL,
      message
  }
}

export function authExpired():IAction{
  return {
      type:actionTypes.AUTH_EXPIRED
  }
}