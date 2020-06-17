import React from "react";
import { connect } from "react-redux";

import { IReducerState } from "../../store/reducers";
import { initAuth } from "../../store/actions/auth";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

interface IProps {
  authenticate: (login: string, password: string) => any;
}

export function AuthenticationForm({ authenticate }: IProps) {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form: any = event.target as any;
    authenticate(form.login.value, form.password.value);
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
        Войти
      </button>
      <Link to="/signup" className={styles.Link}>
        Регистрация
      </Link>
    </form>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  authenticate: (login: string, password: string) =>
    dispatch(initAuth(login, password)),
});

export default connect(null, mapDispatchToProps)(AuthenticationForm);
