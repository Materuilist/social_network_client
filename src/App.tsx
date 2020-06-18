import React, { useEffect } from "react";
import { connect } from "react-redux";

import Alert from "./components/shared/Alert";
import { Authentication } from "./pages/Authentication";
import { IReducerState } from "./store/reducers";
import { Layout } from "./pages/Layout";
import styles from "./styles.module.scss";
import { UserService } from "./services/api/user";
import { Spinner } from "./components/shared/Spinner";
import { setLoading, unsetLoading } from "./store/actions/layout";
import { authExpired, authSucceed } from "./store/actions/auth";
import { User } from "./models/entities/user.class";

interface IProps {
  isAuth: boolean;
  isLoading: boolean;
  setLoading: () => any;
  unsetLoading: () => any;
  setAuthExpired: () => any;
  setAuthSucceed: (user: User) => any;
}

function App({
  isAuth,
  isLoading,
  setLoading,
  unsetLoading,
  setAuthExpired,
  setAuthSucceed,
}: IProps) {
  useEffect(() => {
    return UserService.ping(
      isAuth,
      setLoading,
      unsetLoading,
      setAuthExpired,
      setAuthSucceed
    );
  }, []);
  return (
    <div className={styles.App}>
      {isLoading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {" "}
          <Alert />
          {isAuth ? <Layout /> : <Authentication />}
        </React.Fragment>
      )}
    </div>
  );
}

const mapStateToProps = (state: IReducerState) => ({
  isAuth: state.user.isAuth,
  isLoading: state.layout.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
  setLoading: () => dispatch(setLoading()),
  unsetLoading: () => dispatch(unsetLoading()),
  setAuthExpired: () => dispatch(authExpired()),
  setAuthSucceed: (user: User) => dispatch(authSucceed(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
