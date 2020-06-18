import React, { useState } from "react";
import { connect } from "react-redux";

import { IReducerState } from "../../store/reducers";
import { initAuth } from "../../store/actions/auth";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

interface IProps {
  authenticate: (login: string, password: string, isRegister:boolean) => any;
}

enum FormModes{
  Register,
  Login
}

export function AuthenticationForm({ authenticate }: IProps) {
  const [mode, changeMode] = useState(FormModes.Login)

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form: any = event.target as any;
    authenticate(form.login.value, form.password.value, mode === FormModes.Register);
  };

  const changeModeHandler = (event:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
    event.preventDefault();
    changeMode(mode===FormModes.Login?FormModes.Register:FormModes.Login);
  };

  return (
    <form className={styles.Form} onSubmit={submitHandler}>
      <input
        className={styles["Form-Item"]}
        name="login"
        required
        placeholder="Логин"
        type="text"
      />
      <input
        className={styles["Form-Item"]}
        name="password"
        required
        placeholder="Пароль"
        type="password"
      />
      <button className={styles["Form-Item"]} type="submit">
        {mode===FormModes.Login?'Войти':'Зарегистрироваться'}
      </button>
      <a className={styles.Link} href="*" onClick={changeModeHandler}>
        {mode===FormModes.Login?'Регистрация':'Уже есть аккаунт?'}
      </a>
    </form>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  authenticate: (login: string, password: string, isRegister:boolean) =>
    dispatch(initAuth(login, password, isRegister)),
});

export default connect(null, mapDispatchToProps)(AuthenticationForm);
