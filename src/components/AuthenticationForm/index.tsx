import React from "react";
import { IReducerState } from "../../store/reducers";
import { initAuth } from "../../store/actions/auth";
import { connect } from "react-redux";

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
    <form onSubmit={submitHandler}>
      <input name="login" type="text" />
      <input name="password" type="password" />
      <button type="submit">Войти</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  authenticate: (login: string, password: string) =>
    dispatch(initAuth(login, password)),
});

export default connect(null, mapDispatchToProps)(AuthenticationForm);
