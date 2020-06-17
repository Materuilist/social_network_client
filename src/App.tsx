import React from "react";
import { connect } from "react-redux";

import Alert from "./components/shared/Alert";
import { Authentication } from "./pages/Authentication";
import { IReducerState } from "./store/reducers";
import { Layout } from "./pages/Layout";
import styles from './styles.module.scss';

interface IProps {
  isAuth: boolean;
}

function App({ isAuth }: IProps) {
  return (
    <div className={styles.App}>
      <Alert />
      {isAuth ? <Layout /> : <Authentication />}
    </div>
  );
}

const mapStateToProps = (state: IReducerState) => ({
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps)(App);
